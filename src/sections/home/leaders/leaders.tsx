'use client';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
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
  const { scrollYProgress } = useScroll({
    target: region,
    offset: ['start center', 'end end'],
  });
  const progress = useSmoothedProgress(scrollYProgress, 0.85);
  const rotate = useTransform(progress, [0, 1], [0, 360]);
  useEffect(() => {
    const element = region.current;
    if (!element) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    void Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();
        media.add('(prefers-reduced-motion: no-preference)', () => {
          const images = element.querySelectorAll('.leaders-image');
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
          ScrollTrigger.create({
            trigger: element,
            start: 'top 60%',
            end: 'bottom top',
            onEnter: () => fan.play(),
            onEnterBack: () => fan.play(),
            onLeave: () => fan.reverse(),
            onLeaveBack: () => fan.reverse(),
            onRefresh: (trigger) => {
              if (!trigger.isActive) fan.pause(0);
            },
          });
          return () => {
            fan.kill();
          };
        });
        cleanup = () => media.revert();
      },
    );
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);
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
