'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { mediaQueries } from '@/lib/media-queries';

export function OpeningMotion({ children }: { children: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const section = stage?.parentElement;
    if (!stage || !section) return;
    const media = window.matchMedia(mediaQueries.pinnedMotion);
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!media.matches) return;
      const pinTop = Number.parseFloat(getComputedStyle(stage).top) || 0;
      const distance = section.offsetHeight - stage.offsetHeight;
      const progress = Math.max(
        0,
        Math.min(
          1,
          (pinTop - section.getBoundingClientRect().top) /
            Math.max(1, distance),
        ),
      );
      stage.style.setProperty('--opening-progress', String(progress));
      stage.style.setProperty(
        '--opening-overlay',
        String(Math.max(0, Math.min(1, (progress - 0.55) / 0.3))),
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const configure = () => {
      section.dataset.motion = String(media.matches);
      if (!media.matches) {
        stage.style.removeProperty('--opening-progress');
        stage.style.removeProperty('--opening-overlay');
      }
      schedule();
    };
    configure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', configure);
    media.addEventListener('change', configure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', configure);
      media.removeEventListener('change', configure);
      delete section.dataset.motion;
    };
  }, []);

  return (
    <div className="about-opening-stage tw:relative tw:grid" ref={stageRef}>
      {children}
    </div>
  );
}
