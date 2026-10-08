'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { Arrow } from '@/components/ui/arrow';
import { environments, navigation } from '@/config/navigation';
import { navigateAnchor } from '@/lib/navigate-anchor';
import { mediaQueries, prefersReducedMotion } from '@/lib/media-queries';
import { isPlainClick } from '@/lib/plain-click';

export function MobileNavigation() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const scrollArea = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousOverflow = useRef('');
  const destination = useRef('');
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [current, setCurrent] = useState('');

  const close = useCallback(() => {
    const menu = dialog.current;
    if (!menu?.open || menu.dataset.state === 'closing') return;
    if (prefersReducedMotion()) {
      menu.close();
      return;
    }
    menu.dataset.state = 'closing';
    timer.current = setTimeout(() => menu.close(), 260);
  }, []);

  function restore() {
    if (timer.current) clearTimeout(timer.current);
    document.body.style.overflow = previousOverflow.current;
    setExpanded(false);
    setIsOpen(false);
    if (destination.current) {
      navigateAnchor(destination.current);
      destination.current = '';
    } else toggle.current?.focus({ preventScroll: true });
  }

  function open() {
    const menu = dialog.current;
    if (!menu || menu.open) return;
    previousOverflow.current = document.body.style.overflow;
    menu.dataset.state = 'opening';
    menu.showModal();
    if (scrollArea.current) scrollArea.current.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  }

  useEffect(() => {
    const query = window.matchMedia(mediaQueries.desktopNavigation);
    const menu = dialog.current;
    const handleResize = () => {
      if (query.matches && menu?.open) menu.close();
    };
    const handleLink = (event: MouseEvent) => {
      if (!isPlainClick(event) || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a');
      if (!link) return;
      const url = new URL(link.href);
      if (
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname &&
        url.search === window.location.search &&
        url.hash
      ) {
        event.preventDefault();
        destination.current = url.hash;
      }
      close();
    };
    const handleBackdrop = (event: MouseEvent) => {
      if (event.target !== menu || !menu) return;
      const rect = menu.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        close();
    };
    const syncHash = () =>
      setCurrent(
        pathname +
          (window.location.hash ||
            (window.location.pathname === '/' ? '#inicio' : '')),
      );
    syncHash();
    window.addEventListener('hashchange', syncHash);
    menu?.addEventListener('click', handleLink);
    menu?.addEventListener('click', handleBackdrop);
    query.addEventListener('change', handleResize);
    return () => {
      if (timer.current) clearTimeout(timer.current);
      window.removeEventListener('hashchange', syncHash);
      menu?.removeEventListener('click', handleLink);
      menu?.removeEventListener('click', handleBackdrop);
      query.removeEventListener('change', handleResize);
      if (menu?.open) document.body.style.overflow = previousOverflow.current;
    };
  }, [close, pathname]);

  return (
    <div className="mobile-nav">
      <button
        ref={toggle}
        type="button"
        className="menu-toggle tw:min-h-[44px] tw:flex tw:items-center tw:gap-[16px]"
        onClick={open}
        aria-label="Abrir menu"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span className="menu-toggle-label tw:uppercase">Menu</span>
        <span
          className="menu-toggle-lines tw:w-[20px] tw:grid tw:gap-[6px]"
          aria-hidden="true"
        >
          <i />
          <i />
        </span>
      </button>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-dialog tw:bg-ink tw:text-paper tw:overflow-hidden"
        onClose={restore}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        aria-labelledby="mobile-menu-title"
      >
        <div className="mobile-dialog-shell tw:h-full tw:flex tw:flex-col">
          <div className="mobile-dialog-header tw:shrink-0 tw:flex tw:items-center tw:justify-between">
            <a
              href="/#inicio"
              className="mobile-dialog-brand tw:min-h-[44px] tw:flex tw:items-center"
              aria-label="Traço — início"
            >
              traço<span>.</span>
            </a>
            <button
              className="close-menu tw:w-[44px] tw:h-[44px] tw:grid tw:place-items-center"
              type="button"
              onClick={close}
              aria-label="Fechar menu"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div
            className="mobile-menu-scroll tw:overflow-y-auto"
            ref={scrollArea}
          >
            <p
              id="mobile-menu-title"
              className="mobile-menu-eyebrow tw:uppercase tw:text-taupe tw:mb-[18px]"
            >
              Seu espaço. Seu traço.
            </p>
            <nav
              aria-label="Navegação mobile"
              className="mobile-links tw:flex tw:flex-col"
            >
              <a
                href="/#inicio"
                aria-current={current === '/#inicio' ? 'location' : undefined}
              >
                Início <Arrow />
              </a>
              {pathname === '/' && (
                <>
                  <button
                    type="button"
                    className="mobile-environments-trigger"
                    aria-expanded={expanded}
                    aria-controls="mobile-environments"
                    onClick={() => setExpanded((value) => !value)}
                  >
                    Ambientes{' '}
                    <span
                      className="mobile-expand-icon tw:text-taupe"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    id="mobile-environments"
                    className="mobile-submenu tw:grid"
                    data-expanded={expanded}
                    inert={!expanded}
                    aria-hidden={!expanded}
                  >
                    <div className="mobile-submenu-clip tw:overflow-hidden">
                      <div className="mobile-submenu-links tw:grid">
                        {environments.map((item) => (
                          <a key={item.id} href={item.href}>
                            {item.label}
                            <Arrow />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={
                    current === item.href ||
                    (item.href === '/projetos' &&
                      pathname.startsWith('/projetos/'))
                      ? 'location'
                      : undefined
                  }
                >
                  {item.label}
                  <Arrow />
                </a>
              ))}
            </nav>
          </div>
          <div className="mobile-menu-contact tw:shrink-0">
            <p>Vamos dar forma ao seu espaço?</p>
            <WhatsAppLink className="button tw:min-h-[52px] tw:bg-ink tw:text-paper tw:inline-flex tw:justify-between tw:items-center tw:gap-[35px] mobile-menu-cta">
              Conversar sobre meu projeto
            </WhatsAppLink>
            <span>Móveis planejados para o seu jeito de viver.</span>
          </div>
        </div>
      </dialog>
    </div>
  );
}
