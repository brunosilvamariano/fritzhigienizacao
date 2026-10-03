'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { navigation } from '@/config/navigation';
import { kitchenStudyImages } from '@/content/kitchen-study.images';
import { EnvironmentFaq } from './environment-faq';
import { Arrow } from '@/components/ui/arrow';
export function DesktopNavigation() {
  const [open, setOpen] = useState(false);
  const region = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function outside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !region.current?.contains(event.target)
      )
        setOpen(false);
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    function linkClick(event: MouseEvent) {
      if (
        event.target instanceof Element &&
        event.target.closest('a') &&
        region.current?.contains(event.target)
      )
        setOpen(false);
    }
    function focusOutside(event: FocusEvent) {
      if (
        event.target instanceof Node &&
        !region.current?.contains(event.target)
      )
        setOpen(false);
    }
    document.addEventListener('click', linkClick);
    document.addEventListener('focusin', focusOutside);
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', linkClick);
      document.removeEventListener('focusin', focusOutside);
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);
  return (
    <nav className="desktop-nav" aria-label="Navegação principal">
      <div ref={region}>
        <button
          className="nav-trigger"
          ref={trigger}
          type="button"
          aria-expanded={open}
          aria-controls="desktop-environments"
          onClick={() => setOpen(!open)}
        >
          Ambientes{' '}
          <span className={open ? 'plus is-open' : 'plus'} aria-hidden="true">
            +
          </span>
        </button>
        <div id="desktop-environments" className="mega-menu" hidden={!open}>
          <div className="mega-links">
            <span className="eyebrow">Perguntas frequentes</span>
            <EnvironmentFaq group="desktop" />
          </div>
          <Image
            className="mega-image"
            src={kitchenStudyImages.tablet}
            alt="Estudo conceitual de cozinha em carvalho e travertino"
            sizes="400px"
          />
          <div className="mega-copy">
            <span className="eyebrow">Estudo de ambiente / 01</span>
            <p>
              Espaço
              <br />
              para viver.
            </p>
            <a className="text-link" href="/#cozinhas">
              Explorar cozinhas <Arrow />
            </a>
          </div>
        </div>
      </div>
      {navigation.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
