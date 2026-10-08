'use client';

import { useEffect } from 'react';
import { navigateAnchor } from '@/lib/navigate-anchor';
import { isPlainClick } from '@/lib/plain-click';

export function AnchorNavigation() {
  useEffect(() => {
    const click = (event: MouseEvent) => {
      if (!isPlainClick(event) || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (
        !link ||
        link.target ||
        link.hasAttribute('download') ||
        link.closest('dialog[open]')
      )
        return;
      const url = new URL(link.href);
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        url.search !== location.search ||
        !url.hash
      )
        return;
      if (navigateAnchor(url.hash)) event.preventDefault();
    };
    let disposed = false;
    let observer: MutationObserver | undefined;
    const restore = () =>
      requestAnimationFrame(() => {
        if (!disposed && location.hash)
          navigateAnchor(location.hash, false, 'instant');
      });
    const restoreInitial = () => {
      void document.fonts.ready.then(() => {
        if (disposed || !location.hash) return;
        const curtain = document.querySelector('.page-transition');
        if (!curtain || curtain.getAttribute('data-phase') === 'idle') {
          restore();
          return;
        }
        observer = new MutationObserver(() => {
          if (curtain.getAttribute('data-phase') !== 'idle') return;
          observer?.disconnect();
          restore();
        });
        observer.observe(curtain, {
          attributes: true,
          attributeFilter: ['data-phase'],
        });
      });
    };
    document.addEventListener('click', click);
    window.addEventListener('popstate', restore);
    // O carregamento por hash também precisa usar o ponto anterior ao sticky.
    if (document.readyState === 'complete') restoreInitial();
    else window.addEventListener('load', restoreInitial, { once: true });
    return () => {
      disposed = true;
      observer?.disconnect();
      document.removeEventListener('click', click);
      window.removeEventListener('popstate', restore);
      window.removeEventListener('load', restoreInitial);
    };
  }, []);
  return null;
}
