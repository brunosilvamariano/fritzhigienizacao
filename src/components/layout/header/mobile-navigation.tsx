'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { Arrow } from '@/components/ui/arrow';
import { environments, navigation } from '@/config/navigation';
import { navigateAnchor } from '@/lib/navigate-anchor';

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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
    const query = window.matchMedia('(min-width: 1200px)');
    const menu = dialog.current;
    const handleResize = () => {
      if (query.matches && menu?.open) menu.close();
    };
    const handleLink = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      if (!(event.target instanceof Element)) return;
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
        className="menu-toggle"
        onClick={open}
        aria-label="Abrir menu"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span className="menu-toggle-label">Menu</span>
        <span className="menu-toggle-lines" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-dialog"
        onClose={restore}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        aria-labelledby="mobile-menu-title"
      >
        <div className="mobile-dialog-shell">
          <div className="mobile-dialog-header">
            <a
              href="/#inicio"
              className="mobile-dialog-brand"
              aria-label="Traço — início"
            >
              traço<span>.</span>
            </a>
            <button
              className="close-menu"
              type="button"
              onClick={close}
              aria-label="Fechar menu"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="mobile-menu-scroll" ref={scrollArea}>
            <p id="mobile-menu-title" className="mobile-menu-eyebrow">
              Seu espaço. Seu traço.
            </p>
            <nav aria-label="Navegação mobile" className="mobile-links">
              <a
                href="/#inicio"
                aria-current={current === '/#inicio' ? 'location' : undefined}
              >
                Início <Arrow />
              </a>
              <button
                type="button"
                className="mobile-environments-trigger"
                aria-expanded={expanded}
                aria-controls="mobile-environments"
                onClick={() => setExpanded((value) => !value)}
              >
                Ambientes{' '}
                <span className="mobile-expand-icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div
                id="mobile-environments"
                className="mobile-submenu"
                data-expanded={expanded}
                inert={!expanded}
                aria-hidden={!expanded}
              >
                <div className="mobile-submenu-clip">
                  <div className="mobile-submenu-links">
                    {environments.map((item) => (
                      <a key={item.id} href={item.href}>
                        {item.label}
                        <Arrow />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={current === item.href ? 'location' : undefined}
                >
                  {item.label}
                  <Arrow />
                </a>
              ))}
            </nav>
          </div>
          <div className="mobile-menu-contact">
            <p>Vamos dar forma ao seu espaço?</p>
            <WhatsAppLink className="button mobile-menu-cta">
              Conversar sobre meu projeto
            </WhatsAppLink>
            <span>Móveis planejados para o seu jeito de viver.</span>
          </div>
        </div>
      </dialog>
    </div>
  );
}
