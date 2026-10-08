'use client';
import { useRef, useState, useEffect, type ReactNode } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import './horizontal-rail.css';
export function HorizontalRail({ children }: { children: ReactNode }) {
  const region = useRef<HTMLDivElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [height, setHeight] = useState(800);
  const [desktop, setDesktop] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: region,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  useEffect(() => {
    const a = region.current,
      b = strip.current;
    if (!a || !b) return;
    const measure = () => {
      if (!a || !b) return;
      setDesktop(window.innerWidth >= 992);
      setHeight(window.innerHeight);
      setDistance(Math.max(0, b.scrollWidth - a.clientWidth));
    };
    const observer = new ResizeObserver(measure);
    observer.observe(a);
    observer.observe(b);
    measure();
    return () => observer.disconnect();
  }, []);
  const animated = desktop && !reduced;
  return (
    <div
      ref={region}
      className="horizontal-rail"
      data-animated={animated}
      style={{ height: animated ? distance + height : undefined }}
    >
      <div className="horizontal-rail-stage">
        <motion.div
          className="horizontal-rail-strip"
          ref={strip}
          style={{ x: animated ? x : 0 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
