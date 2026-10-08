'use client';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionStyle,
} from 'framer-motion';
import { useSmoothedProgress } from '@/animations/use-smoothed-progress';
import './showreel.css';
export function Showreel({
  variant = 'reel',
}: {
  variant?: 'reel' | 'services';
}) {
  const track = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ['start end', 'end end'],
  });
  const progress = useSmoothedProgress(scrollYProgress, 0.9);
  const labelOpacity = useTransform(progress, [0.32, 0.42], [0, 1]);
  const width = useTransform(progress, [0.32, 0.6], ['50vw', '100vw']);
  const height = useTransform(progress, [0.32, 0.6], ['40vh', '100vh']);
  const radius = useTransform(progress, [0.32, 0.6], ['40px', '0px']);
  const left = useTransform(progress, [0.32, 0.6], ['0vw', '34vw']);
  const right = useTransform(progress, [0.32, 0.6], ['0vw', '-34vw']);
  useEffect(() => {
    const element = frame.current;
    if (variant !== 'services' || !element) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    void Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();
        media.add(
          '(min-width: 992px) and (prefers-reduced-motion: no-preference)',
          () => {
            // Ariyana's two-stage timeline and ScrollTrigger settings.
            gsap.set(element, { opacity: 0, yPercent: -100, scale: 0.1 });
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: element,
                start: 'clamp(top bottom)',
                end: 'clamp(bottom 10%)',
                scrub: 1.2,
                invalidateOnRefresh: true,
              },
            });
            timeline.fromTo(
              element,
              { opacity: 0, yPercent: -100, scale: 0.1 },
              {
                opacity: 1,
                yPercent: 0,
                scale: 0.1,
                duration: 1,
                ease: 'none',
              },
              0,
            );
            timeline.to(
              element,
              { scale: 1, duration: 0.8, ease: 'none' },
              1.05,
            );
          },
        );
        cleanup = () => media.revert();
      },
    );
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [variant]);
  useEffect(() => {
    const media = video.current;
    if (variant !== 'services' || !media || reduced === null) return;
    if (reduced) media.pause();
    else void media.play().catch(() => {});
  }, [variant, reduced]);
  async function toggle() {
    const media = video.current;
    if (!media) return;
    if (media.paused) {
      try {
        await media.play();
        setError(false);
      } catch {
        setError(true);
      }
    } else media.pause();
  }
  return (
    <section
      tabIndex={-1}
      className={`showreel ${variant === 'services' ? 'service-page-video' : ''}`}
      id={variant === 'services' ? 'apresentacao-servicos' : 'reel'}
      aria-label={variant === 'services' ? 'Apresentação da Traço' : undefined}
      aria-labelledby={variant === 'services' ? undefined : 'showreel-title'}
    >
      <div className="showreel-track" ref={track} data-reduced={!!reduced}>
        <div className="showreel-sticky">
          <motion.h2
            id="showreel-title"
            style={
              {
                '--reel-label-opacity': reduced ? 1 : labelOpacity,
              } as MotionStyle
            }
          >
            <motion.span
              style={
                { '--reel-label-x': reduced ? '34vw' : left } as MotionStyle
              }
            >
              Play
            </motion.span>
            <motion.span
              style={
                { '--reel-label-x': reduced ? '-34vw' : right } as MotionStyle
              }
            >
              Reel
            </motion.span>
          </motion.h2>
          <motion.div
            className="showreel-frame"
            ref={frame}
            style={
              {
                '--reel-width': reduced ? '100%' : width,
                '--reel-height': reduced ? 'auto' : height,
                '--reel-radius': reduced ? '24px' : radius,
              } as MotionStyle
            }
          >
            <div className="showreel-video-wrapper">
              <video
                id="traco-reel-video"
                ref={video}
                src="/videos/traco-showreel.mp4"
                preload="auto"
                muted
                loop
                playsInline
                aria-label="Vídeo de apresentação enviado para a Traço"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onError={() => setError(true)}
              />
            </div>
            <button
              className="showreel-control"
              type="button"
              aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}
              aria-controls="traco-reel-video"
              onClick={toggle}
            >
              {variant === 'services' && playing ? (
                <svg
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                >
                  <rect
                    x="4.875"
                    y="4.875"
                    width="11.25"
                    height="26.25"
                    rx="4.5"
                    fill="#000"
                    opacity="0.4"
                  />
                  <rect
                    x="19.875"
                    y="4.875"
                    width="11.25"
                    height="26.25"
                    rx="4.5"
                    fill="#000"
                  />
                </svg>
              ) : playing ? (
                <svg
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="5"
                    y="3"
                    width="5"
                    height="18"
                    rx="2"
                    fill="currentColor"
                  />
                  <rect
                    x="14"
                    y="3"
                    width="5"
                    height="18"
                    rx="2"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="m9 4 18 11L9 26Z" fill="currentColor" />
                </svg>
              )}
            </button>
            {error && (
              <p className="showreel-error" role="status">
                Não foi possível reproduzir o vídeo.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
