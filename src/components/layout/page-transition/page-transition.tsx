'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { navigateAnchor } from '@/lib/navigate-anchor';
import { focusAnchor } from '@/lib/focus-anchor';
import { prefersReducedMotion } from '@/lib/media-queries';
import { isPlainClick } from '@/lib/plain-click';
import { routePaths } from '@/config/routes';
import './page-transition.css';

type Destination = {
  url: URL;
  reduced: boolean;
  restoreScroll?: number;
};
type Phase = 'initial' | 'idle' | 'covering' | 'covered' | 'revealing';

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>('initial');
  const pending = useRef<Destination | null>(null);
  const busy = useRef(true);
  const currentPath = useRef(pathname);
  const positions = useRef(new Map<string, number>());
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setPhase('idle');
      busy.current = false;
      return;
    }
    let cancelled = false;
    let frame = 0;
    let deadline: ReturnType<typeof setTimeout> | undefined;
    let finish: ReturnType<typeof setTimeout> | undefined;
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(async () => {
        const image = document.querySelector<HTMLImageElement>('main img');
        // Prepare the first view without waiting for lazy images farther down.
        await Promise.race([
          Promise.all([
            document.fonts.ready,
            image?.decode().catch(() => undefined),
          ]),
          new Promise<void>((resolve) => {
            deadline = setTimeout(resolve, 1200);
          }),
        ]);
        if (cancelled) return;
        clearTimeout(deadline);
        setPhase('revealing');
        finish = setTimeout(() => {
          setPhase('idle');
          busy.current = false;
        }, 540);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearTimeout(deadline);
      clearTimeout(finish);
    };
  }, []);

  useEffect(() => {
    const prefetched = new Set<string>();
    const destination = (link: HTMLAnchorElement) => {
      if (link.target || link.hasAttribute('download')) return null;
      const url = new URL(link.href);
      return url.origin === location.origin &&
        routePaths.has(url.pathname) &&
        url.pathname !== location.pathname &&
        !url.search
        ? url
        : null;
    };
    const click = (event: MouseEvent) => {
      if (!isPlainClick(event) || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      const url = destination(link);
      if (!url) return;
      event.preventDefault();
      if (busy.current) return;
      positions.current.set(location.pathname + location.hash, window.scrollY);
      const reduced = prefersReducedMotion();
      pending.current = { url, reduced };
      busy.current = true;
      setPhase(reduced ? 'idle' : 'covering');
      // The mobile dialog finishes closing before the route is replaced.
      timers.current.push(
        setTimeout(
          () => {
            setPhase(reduced ? 'idle' : 'covered');
            if (reduced)
              router.push(url.pathname + url.hash, { scroll: false });
            else {
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  router.push(url.pathname + url.hash, { scroll: false });
                });
              });
            }
          },
          reduced ? 0 : 360,
        ),
      );
      // A failed route request must never leave the visitor behind the curtain.
      timers.current.push(
        setTimeout(() => {
          if (busy.current) location.assign(url.href);
        }, 8000),
      );
    };
    const prefetch = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      const url = link && destination(link);
      if (url && !prefetched.has(url.pathname)) {
        prefetched.add(url.pathname);
        router.prefetch(url.pathname);
      }
    };
    const back = () => {
      if (
        location.pathname === currentPath.current ||
        !routePaths.has(location.pathname)
      )
        return;
      for (const timer of timers.current) clearTimeout(timer);
      timers.current = [];
      const reduced = prefersReducedMotion();
      pending.current = {
        url: new URL(location.href),
        reduced,
        restoreScroll: positions.current.get(location.pathname + location.hash),
      };
      busy.current = true;
      setPhase(reduced ? 'idle' : 'covered');
    };
    document.addEventListener('click', click);
    document.addEventListener('pointerover', prefetch);
    document.addEventListener('focusin', prefetch);
    window.addEventListener('popstate', back);
    return () => {
      document.removeEventListener('click', click);
      document.removeEventListener('pointerover', prefetch);
      document.removeEventListener('focusin', prefetch);
      window.removeEventListener('popstate', back);
      for (const timer of timers.current) clearTimeout(timer);
    };
  }, [router]);

  useEffect(() => {
    currentPath.current = pathname;
    const target = pending.current;
    if (!target || target.url.pathname !== pathname) return;
    let cancelled = false;
    let frame = 0;
    // Wait for the destination's section effects to register their scroll markers.
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(async () => {
        const image = document.querySelector<HTMLImageElement>('main img');
        if (image && !image.complete) {
          await Promise.race([
            image.decode().catch(() => undefined),
            new Promise<void>((resolve) => {
              timers.current.push(setTimeout(resolve, 900));
            }),
          ]);
        }
        if (cancelled || pending.current !== target) return;
        if (target.url.hash) navigateAnchor(target.url.hash, false, 'instant');
        else {
          focusAnchor('#conteudo');
          window.scrollTo({
            top: target.restoreScroll ?? 0,
            behavior: 'instant',
          });
        }
        for (const timer of timers.current) clearTimeout(timer);
        timers.current = [];
        pending.current = null;
        if (target.reduced) {
          setPhase('idle');
          busy.current = false;
          return;
        }
        setPhase('revealing');
        timers.current.push(
          setTimeout(() => {
            setPhase('idle');
            busy.current = false;
          }, 540),
        );
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div
      className="page-transition tw:grid tw:place-items-center tw:bg-taupe tw:text-ink"
      data-phase={phase}
      aria-hidden={phase === 'idle'}
    >
      <div className="page-transition-brand tw:grid tw:gap-[18px]">
        <svg
          className="page-transition-symbol tw:text-copper"
          width="48"
          height="54"
          viewBox="0 0 36 40"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 2v30h26M3 11h25v24H11V7M1 25h34M17 18v21"
            stroke="currentColor"
            strokeWidth=".8"
            pathLength="100"
          />
        </svg>
        <span className="page-transition-wordmark">
          traço<span>.</span>
        </span>
        <span
          className="page-transition-label tw:text-muted"
          role="status"
          aria-live="polite"
          aria-label={phase === 'idle' ? undefined : 'Abrindo página'}
        >
          {phase === 'idle' ? '' : 'Seu espaço. Seu traço.'}
        </span>
      </div>
    </div>
  );
}
