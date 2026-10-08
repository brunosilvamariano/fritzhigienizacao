'use client';
import { useEffect, useRef } from 'react';

const text =
  'Um estúdio criativo que dá forma a tudo que acontece no seu espaço.';
const words = text.split(' ').map((word, index) => ({ word, index }));

export function StudioTitle() {
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;

    async function animate() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (disposed || !heading.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const element = heading.current;
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const letters = element.querySelectorAll('.studio-title-word');
        gsap.set(letters, { opacity: 0.3 });
        const animation = gsap.to(letters, {
          opacity: 1,
          duration: 0.5,
          stagger: 0.25,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'clamp(top bottom)',
            end: 'clamp(bottom center)',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });
        void document.fonts.ready.then(() => {
          if (!disposed) animation.scrollTrigger?.refresh();
        });
      });
      cleanup = () => media.revert();
    }

    void animate();
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <h2 ref={heading} id="studio-title" aria-label={text}>
      {words.map(({ word, index }) => (
        <span key={index} aria-hidden="true">
          <span className="studio-title-word">{word}</span>
          {index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h2>
  );
}
