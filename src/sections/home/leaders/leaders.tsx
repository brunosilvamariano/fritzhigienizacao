'use client';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { projects } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
import { useSmoothedProgress } from '@/animations/use-smoothed-progress';
import './leaders.css';
export function Leaders() {
  const region = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const scrollYProgress = useMotionValue(0);
  const progress = useSmoothedProgress(scrollYProgress, 0.85);
  const rotate = useTransform(progress, [0, 1], [0, 360]);
  useEffect(() => {
    const element = region.current;
    if (!element) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    void import('gsap').then(({ gsap }) => {
      if (disposed) return;
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const images = element.querySelectorAll<HTMLElement>('.leaders-image');
        const firstImage = images[0];
        if (!firstImage) return;
        const fan = gsap.fromTo(
          images,
          { rotation: 0, xPercent: -50, x: 0 },
          {
            rotation: (index) => (index === 0 ? 0 : -(10 - index) * 36),
            duration: 1,
            ease: 'power2.inOut',
            paused: true,
            immediateRender: true,
          },
        );
        let entered = false;
        let exitVisible = false;
        let frame = 0;
        const update = () => {
          frame = 0;
          const viewport = document.documentElement.clientHeight;
          const section = element.getBoundingClientRect();
          // IX2 e-3: start offset 50%, starts entering; finish fully exiting.
          const start = section.top + Math.min(section.height * 0.5, viewport);
          const distance =
            viewport +
            section.height -
            Math.min(section.height * 0.5, viewport);
          scrollYProgress.set(
            Math.min(1, Math.max(0, (viewport - start) / distance)),
          );

          // IX2 uses the transformed first card, not the section rectangle.
          const card = firstImage.getBoundingClientRect();
          const visible = (inset: number) =>
            card.bottom >= viewport * inset &&
            card.top <= viewport * (1 - inset) &&
            card.right >= 0 &&
            card.left <= document.documentElement.clientWidth;
          const entryVisible = visible(0.4);
          const nextExitVisible = visible(0.1);
          if (entryVisible && !entered) fan.restart();
          if (!nextExitVisible && exitVisible) fan.pause(0);
          entered = entryVisible;
          exitVisible = nextExitVisible;
        };
        const schedule = () => {
          if (!frame) frame = requestAnimationFrame(update);
        };
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        window.addEventListener('pageshow', schedule);
        update();
        return () => {
          window.removeEventListener('scroll', schedule);
          window.removeEventListener('resize', schedule);
          window.removeEventListener('pageshow', schedule);
          cancelAnimationFrame(frame);
          fan.kill();
        };
      });
      media.add(
        '(min-width: 992px) and (prefers-reduced-motion: no-preference)',
        () => {
          const copy = element.querySelector<HTMLElement>('.leaders-copy');
          const orbit = element.querySelector<HTMLElement>('.leaders-orbit');
          if (!copy || !orbit) return;
          const setHover = (active: boolean) => {
            gsap.to(copy, {
              opacity: active ? 1 : 0.5,
              duration: 0.5,
              ease: 'none',
              overwrite: true,
            });
            gsap.to(orbit, {
              scale: active ? 0.8 : 1,
              duration: 0.5,
              ease: 'power3.inOut',
              overwrite: true,
            });
          };
          const enter = () => setHover(true);
          const leave = () => setHover(copy.matches(':focus-within'));
          const blur = () => setHover(copy.matches(':hover'));
          copy.addEventListener('mouseenter', enter);
          copy.addEventListener('mouseleave', leave);
          copy.addEventListener('focusin', enter);
          copy.addEventListener('focusout', blur);
          return () => {
            copy.removeEventListener('mouseenter', enter);
            copy.removeEventListener('mouseleave', leave);
            copy.removeEventListener('focusin', enter);
            copy.removeEventListener('focusout', blur);
            gsap.killTweensOf([copy, orbit]);
          };
        },
      );
      cleanup = () => media.revert();
    });
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [scrollYProgress]);
  return (
    <section
      id="lideres"
      tabIndex={-1}
      ref={region}
      className="leaders"
      aria-labelledby="leaders-title"
    >
      <motion.div
        className="leaders-ring"
        style={{ rotate: reduced ? 0 : rotate }}
        aria-hidden="true"
      >
        <div className="leaders-orbit">
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map(
            (angle, index) => (
              <div
                className="leaders-image"
                style={{
                  transform: `translateX(-50%) rotate(${reduced ? angle : 0}deg)`,
                }}
                key={angle}
              >
                <ResponsiveImage
                  eager
                  priority="auto"
                  unoptimized
                  {...projects[index % 6].images[
                    index < 6 ? 'capa' : 'detalhe'
                  ]}
                  alt=""
                  sizes="18vw"
                />
              </div>
            ),
          )}
        </div>
      </motion.div>
      <div className="leaders-copy">
        <span className="leaders-badge">Joinville e região</span>
        <h2 id="leaders-title">
          Mais cuidado
          <br />
          <span>para seu lar</span>
        </h2>
        <WhatsAppLink
          className="pill-link"
          context="higienização ou impermeabilização. Quero consultar a disponibilidade de atendimento"
        >
          Consultar agenda
        </WhatsAppLink>
      </div>
      <DemoNote>
        Envie fotos e sua localização. A data é confirmada pela equipe.
      </DemoNote>
    </section>
  );
}
