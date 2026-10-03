'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
const message =
  'Cada espaço tem uma história. Nosso traço começa na forma como você vive.';
const words = message.split(' ');
function Word({
  word,
  index,
  progress,
}: {
  word: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(
    progress,
    [(index / words.length) * 0.8, ((index + 1) / words.length) * 0.8],
    [0, 1],
  );
  return (
    <span className="message-word">
      <span>{word}</span>
      <motion.span className="message-ink" style={{ opacity }}>
        {word}
      </motion.span>{' '}
    </span>
  );
}
export function EnvironmentMessage() {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start start', 'end end'],
  });
  return (
    <div ref={target} className="environment-message">
      <div className="message-sticky">
        <span className="eyebrow">Do seu jeito de viver ao nosso traço</span>
        <h2 id="environments-title" aria-label={message}>
          <span aria-hidden="true">
            {words.map((word, index) => (
              <Word
                key={word}
                word={word}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </span>
        </h2>
        <p className="message-scroll">
          Continue para explorar os ambientes <span aria-hidden="true">↓</span>
        </p>
      </div>
    </div>
  );
}
