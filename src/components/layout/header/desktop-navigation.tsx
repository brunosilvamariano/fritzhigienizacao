'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { environments, navigation } from '@/config/navigation';
import { kitchenStudyImages } from '@/content/kitchen-study.images';
import { Arrow } from '@/components/ui/arrow';

export function DesktopNavigation() {
  const pathname = usePathname();
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
      ) {
        setOpen(false);
      }
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
    <nav
      className="desktop-nav tw:flex tw:items-center"
      aria-label="Navegação principal"
    >
      {pathname === '/' && (
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
            <span
              className={
                open
                  ? 'plus tw:relative tw:w-[12px] tw:h-[12px] tw:shrink-0 is-open'
                  : 'plus tw:relative tw:w-[12px] tw:h-[12px] tw:shrink-0'
              }
              aria-hidden="true"
            />
          </button>
          <div
            id="desktop-environments"
            className="mega-menu tw:absolute tw:grid tw:gap-[35px] tw:bg-paper tw:overflow-y-auto"
            hidden={!open}
          >
            <div className="mega-links tw:flex tw:flex-col">
              <span className="eyebrow tw:uppercase tw:text-accent">
                Explore os ambientes
              </span>
              {environments.map((item) => (
                <a key={item.id} href={item.href}>
                  {item.label} <Arrow />
                </a>
              ))}
            </div>
            <Image
              className="mega-image tw:w-full tw:h-[260px] tw:object-cover"
              src={kitchenStudyImages.tablet}
              alt="Estudo conceitual de cozinha em carvalho e travertino"
              sizes="400px"
            />
            <div className="mega-copy tw:pl-[10px] tw:self-center">
              <span className="eyebrow tw:uppercase tw:text-accent">
                Estudo de ambiente / 01
              </span>
              <p>
                Espaço
                <br />
                para viver.
              </p>
              <a
                className="text-link tw:inline-flex tw:items-center tw:gap-[22px] tw:py-[9px]"
                href="/#cozinhas"
              >
                Explorar cozinhas <Arrow />
              </a>
            </div>
          </div>
        </div>
      )}
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-current={
            pathname === item.href
              ? 'page'
              : item.href === '/projetos' && pathname.startsWith('/projetos/')
                ? 'location'
                : undefined
          }
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
