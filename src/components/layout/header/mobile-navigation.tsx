'use client';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';

import { useCallback, useEffect, useRef, useState } from 'react';
import { environments, navigation } from '@/config/navigation';
import { Arrow } from '@/components/ui/arrow';
export function MobileNavigation() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState(false);
  const previousOverflow = useRef('');
  const close = useCallback(() => {
    const menu = dialog.current;
    if (!menu?.open || menu.dataset.state === 'closing') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      menu.close();
      return;
    }
    menu.dataset.state = 'closing';
  }, []);
  function restore() {
    document.body.style.overflow = previousOverflow.current;
    setExpanded(false);
  }
  function open() {
    if (!dialog.current || dialog.current.open) return;
    dialog.current.dataset.state = 'opening';
    previousOverflow.current = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = 'hidden';
  }
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const handle = () => {
      if (query.matches && dialog.current?.open) dialog.current.close();
    };
    const menu = dialog.current;
    const handleLink = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest('a')) close();
    };
    menu?.addEventListener('click', handleLink);
    query.addEventListener('change', handle);
    return () => {
      menu?.removeEventListener('click', handleLink);
      query.removeEventListener('change', handle);
      if (dialog.current?.open)
        document.body.style.overflow = previousOverflow.current;
    };
  }, [close]);
  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="menu-toggle"
        onClick={open}
        aria-label="Abrir menu"
        aria-haspopup="dialog"
      >
        <span />
        <span />
      </button>
      <dialog
        ref={dialog}
        className="mobile-dialog"
        onClose={restore}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onAnimationEnd={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.animationName === 'mobile-panel-out')
            dialog.current?.close();
          if (
            event.animationName === 'mobile-panel-in' &&
            dialog.current?.dataset.state === 'opening'
          )
            dialog.current.dataset.state = 'open';
        }}
        aria-labelledby="mobile-menu-title"
      >
        <div className="mobile-dialog-header">
          <span id="mobile-menu-title" className="brand-text">
            traço.
          </span>
          <button
            className="close-menu"
            type="button"
            onClick={close}
            aria-label="Fechar menu"
          >
            ×
          </button>
        </div>
        <nav aria-label="Navegação mobile" className="mobile-links">
          <a href="#inicio">
            Início <Arrow />
          </a>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls="mobile-environments"
            onClick={() => setExpanded(!expanded)}
          >
            Ambientes <span aria-hidden="true">{expanded ? '−' : '+'}</span>
          </button>
          <div
            id="mobile-environments"
            className="mobile-submenu"
            hidden={!expanded}
          >
            {environments.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
                <Arrow />
              </a>
            ))}
          </div>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
              <Arrow />
            </a>
          ))}
        </nav>
        <WhatsAppLink className="button mobile-menu-cta">
          Falar pelo WhatsApp
        </WhatsAppLink>
        <p className="small-note">
          Traço — estudo de marca e experiência digital.
        </p>
      </dialog>
    </div>
  );
}
