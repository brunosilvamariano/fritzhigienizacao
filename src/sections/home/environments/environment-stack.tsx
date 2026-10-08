'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function EnvironmentStack({ children }: { children: ReactNode }) {
  const stack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = stack.current;
    if (!element) return;

    const panels = element.querySelectorAll<HTMLElement>(
      '.environment-panel, .environment-card',
    );
    const header = document.querySelector<HTMLElement>('.site-header');
    const update = () => {
      const visibleHeight = Math.min(
        document.documentElement.clientHeight,
        window.visualViewport?.height ?? window.innerHeight,
      );
      const headerHeight = Math.max(
        header?.getBoundingClientRect().height ?? 0,
        Number.parseFloat(
          getComputedStyle(element).getPropertyValue('--header-height'),
        ) || 0,
      );
      element.style.setProperty(
        '--environment-scroll-rest',
        `${Math.max(160, Math.min(260, visibleHeight * 0.24))}px`,
      );
      for (const panel of panels) {
        const height = panel.getBoundingClientRect().height;
        panel.style.setProperty(
          '--environment-sticky-top',
          `${Math.min(headerHeight, visibleHeight - height)}px`,
        );
      }
      element.dataset.stackReady = 'true';
    };
    const observer = new ResizeObserver(update);

    for (const panel of panels) {
      observer.observe(panel);
    }
    if (header) observer.observe(header);
    window.addEventListener('resize', update);
    window.visualViewport?.addEventListener('resize', update);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('resize', update);
      delete element.dataset.stackReady;
      element.style.removeProperty('--environment-scroll-rest');
      for (const panel of panels) {
        panel.style.removeProperty('--environment-sticky-top');
      }
    };
  }, []);

  return (
    <div ref={stack} className="environment-stack tw:relative">
      {children}
    </div>
  );
}
