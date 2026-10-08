'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { mediaQueries } from '@/lib/media-queries';
import './services-process-transition.css';

export function ServicesProcessTransition({
  services,
  process,
}: {
  services: ReactNode;
  process: ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = root.current;
    if (!container) return;
    const stage = container.querySelector<HTMLElement>(
      '.services-process-stage',
    );
    const servicesSection = container.querySelector<HTMLElement>('#servicos');
    const processSection = container.querySelector<HTMLElement>('#processo');
    if (!stage || !servicesSection || !processSection) return;

    const media = window.matchMedia(mediaQueries.servicesProcessMotion);
    let distance = 0;
    let readingDistance = 0;
    let pinTop = 0;
    let frame = 0;
    let progress = 0;

    const update = () => {
      frame = 0;
      if (!media.matches) return;
      const scrolled = Math.max(
        0,
        pinTop - container.getBoundingClientRect().top,
      );
      container.style.setProperty(
        '--services-offset',
        `${-Math.min(readingDistance, scrolled)}px`,
      );
      progress = Math.min(
        1,
        Math.max(0, (scrolled - readingDistance) / distance),
      );
      container.style.setProperty('--process-progress', String(progress));
      // Once covered, services must no longer stretch the shorter process panel.
      container.dataset.processComplete = String(progress >= 0.999);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const measure = () => {
      container.dataset.animated = String(media.matches);
      if (!media.matches) {
        delete container.dataset.processComplete;
        container.style.removeProperty('height');
        container.style.removeProperty('--process-progress');
        container.style.removeProperty('--process-distance');
        container.style.removeProperty('--process-pin-top');
        container.style.removeProperty('--services-offset');
        delete servicesSection.dataset.scrollPosition;
        delete processSection.dataset.scrollPosition;
        return;
      }
      pinTop =
        Number.parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop,
        ) || 116;
      distance = Math.max(700, window.innerHeight * 1.15);
      // Read the entire services panel before the horizontal transition starts.
      const visibleHeight = Math.min(
        document.documentElement.clientHeight,
        window.visualViewport?.height ?? window.innerHeight,
      );
      readingDistance = Math.max(
        0,
        servicesSection.offsetHeight - (visibleHeight - pinTop - 32),
      );
      const totalDistance = readingDistance + distance;
      container.style.setProperty('--process-distance', `${totalDistance}px`);
      container.style.setProperty('--process-pin-top', `${pinTop}px`);
      container.style.height = `${stage.offsetHeight + totalDistance}px`;
      servicesSection.dataset.scrollPosition = 'services-scroll-start';
      processSection.dataset.scrollPosition = 'process-scroll-start';
      schedule();
    };
    // Keyboard focus reveals the corresponding panel before a control is used.
    const revealFocusedPanel = (event: FocusEvent) => {
      if (!media.matches || !(event.target instanceof Node)) return;
      // Anchor navigation focuses the section itself and controls its smooth scroll.
      // Only focus inside the panel needs the immediate keyboard reveal.
      if (event.target === servicesSection || event.target === processSection)
        return;
      const inProcess = processSection.contains(event.target);
      const inServices = servicesSection.contains(event.target);
      if ((inProcess && progress < 1) || (inServices && progress > 0)) {
        const top = container.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(
            0,
            top - pinTop + (inProcess ? readingDistance + distance : 0),
          ),
          behavior: 'instant',
        });
        update();
      }
    };

    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure);
    media.addEventListener('change', measure);
    container.addEventListener('focusin', revealFocusedPanel);
    measure();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', measure);
      media.removeEventListener('change', measure);
      container.removeEventListener('focusin', revealFocusedPanel);
      delete container.dataset.processComplete;
      delete servicesSection.dataset.scrollPosition;
      delete processSection.dataset.scrollPosition;
    };
  }, []);

  return (
    <div className="services-process-transition tw:relative" ref={root}>
      <div
        id="services-scroll-start"
        className="services-process-position tw:absolute tw:w-[1px] tw:h-[1px]"
        aria-hidden="true"
      />
      <div
        id="process-scroll-start"
        className="services-process-position tw:absolute tw:w-[1px] tw:h-[1px] services-process-position-end"
        aria-hidden="true"
      />
      <div className="services-process-stage">
        <div className="services-process-layer services-process-services">
          {services}
        </div>
        <div className="services-process-layer services-process-process">
          {process}
        </div>
      </div>
    </div>
  );
}
