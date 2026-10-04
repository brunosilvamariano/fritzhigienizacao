'use client';
import { useEffect, useRef, type ReactNode } from 'react';

export function FooterReveal({ children }: { children: ReactNode }) {
  const footer = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = footer.current;
    if (!element) return;
    const header = document.querySelector<HTMLElement>('.site-header');
    const update = () => {
      const available =
        document.documentElement.clientHeight - (header?.offsetHeight ?? 0);
      const bottom = Math.min(0, available - element.offsetHeight);
      element.style.setProperty('--footer-reveal-bottom', `${bottom}px`);
      element.dataset.reveal = 'ready';
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    if (header) observer.observe(header);
    window.addEventListener('resize', update);
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
      delete element.dataset.reveal;
      element.style.removeProperty('--footer-reveal-bottom');
    };
  }, []);
  return (
    <footer ref={footer} className="site-footer">
      {children}
    </footer>
  );
}
