'use client';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { timeline } from '@/content/ariyana-demo';
import { projects } from '@/content/projects';
export function StudioPanels() {
  const track = useRef<HTMLDivElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const [limits, setLimits] = useState({ start: 0, end: 0, top: 0 });
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [limits.start, limits.end]);
  useEffect(() => {
    const element = strip.current,
      region = track.current;
    if (!element || !region) return;
    const measure = () => {
      const compact = window.innerWidth <= 991;
      setLimits({
        start: compact ? element.scrollWidth * 0.07 : window.innerWidth * 0.5,
        end: -element.scrollWidth * (compact ? 0.84 : 0.7),
        top: Math.min(
          compact ? window.innerHeight * 0.18 : 0,
          window.innerHeight - element.offsetHeight,
        ),
      });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    observer.observe(region);
    measure();
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={track} className="studio-track" data-animated={!reduced}>
      <div
        className="studio-sticky"
        style={{ top: reduced ? undefined : limits.top }}
      >
        <motion.div
          ref={strip}
          className="studio-strip tw:flex"
          style={{ x: reduced ? 0 : x }}
        >
          {timeline.map((item, index) => (
            <article
              className="studio-card"
              key={item.year}
              aria-label={`${item.year} — ${item.title}`}
            >
              <div className="studio-card-heading">
                <span
                  className="studio-card-tag"
                  style={{ background: item.color }}
                >
                  {item.title}
                </span>
                <span className="studio-card-number" aria-hidden="true">
                  {item.year}
                </span>
              </div>
              <p>{item.text}</p>
              <div className="studio-card-image">
                <ResponsiveImage
                  eager
                  priority="auto"
                  unoptimized
                  {...projects[index].images.capa}
                  alt="Imagem ilustrativa de higienização de estofados e tapetes."
                  sizes="(min-width:992px) 480px,300px"
                />
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
