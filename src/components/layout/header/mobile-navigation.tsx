'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/config/navigation';
import { contact, whatsappUrl } from '@/config/contact';
import { InstagramIcon } from '@/components/ui/social-icons';
import { prefersReducedMotion } from '@/lib/media-queries';
export function MobileNavigation() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  function close() {
    const element = dialog.current;
    if (!element?.open || element.dataset.state === 'closing') return;
    if (prefersReducedMotion()) {
      element.close();
      return;
    }
    element.dataset.state = 'closing';
    timer.current = setTimeout(() => element.close(), 1000);
  }
  function open() {
    const element = dialog.current;
    if (!element || element.open) return;
    if (timer.current) clearTimeout(timer.current);
    element.dataset.state = 'opening';
    element.showModal();
    setIsOpen(true);
  }
  useEffect(() => {
    if (!isOpen) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
      if (timer.current) clearTimeout(timer.current);
    };
  }, [isOpen]);
  return (
    <div className="mobile-nav">
      <button
        ref={toggle}
        className="menu-toggle"
        type="button"
        aria-label="Abrir menu"
        aria-haspopup="dialog"
        aria-controls="site-menu"
        aria-expanded={isOpen}
        onClick={open}
      >
        <span aria-hidden="true" className="menu-toggle-lines">
          <i />
          <i />
          <i />
        </span>
      </button>
      <dialog
        ref={dialog}
        id="site-menu"
        className="mobile-dialog"
        aria-labelledby="mobile-menu-title"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClose={() => {
          setIsOpen(false);
          toggle.current?.focus({ preventScroll: true });
        }}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <p id="mobile-menu-title">Fritz Higienização</p>
            <span>Higienização e impermeabilização</span>
          </div>
          <nav className="mobile-links" aria-label="Menu completo">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                onClick={close}
              >
                <span className="mobile-link-label">
                  <span>{item.label}</span>
                  <span aria-hidden="true">{item.label}</span>
                </span>
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-contact">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Quero um orçamento
            </a>
            <a
              className="mobile-menu-social"
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Siga-nos</span>
              <i aria-hidden="true" />
              <InstagramIcon />
            </a>
            <a href={`tel:+${contact.whatsappNumber}`}>
              {contact.whatsappDisplay}
            </a>
          </div>
          <button
            type="button"
            className="close-menu"
            aria-label="Fechar menu"
            onClick={close}
          >
            <span className="close-menu-lines" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </dialog>
    </div>
  );
}
