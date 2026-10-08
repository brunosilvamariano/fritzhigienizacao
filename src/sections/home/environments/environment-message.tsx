'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

const message =
  'Cada tecido pede um cuidado. A avaliação da peça orienta a limpeza e a proteção.';
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
    <span className="message-word tw:inline-block tw:relative">
      <span>{word}</span>
      <motion.span
        className="message-ink tw:absolute tw:text-paper"
        style={{ opacity }}
      >
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
    <div
      ref={target}
      className="environment-message tw:relative tw:bg-ink tw:text-paper"
    >
      <div className="message-sticky tw:flex tw:flex-col tw:justify-center tw:items-center tw:gap-[36px] tw:text-center">
        <span className="eyebrow tw:uppercase tw:text-accent">
          Cuidado para sua rotina
        </span>
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
        <p className="message-scroll tw:mt-[10px] tw:text-paper tw:flex tw:items-center tw:gap-[18px]">
          Continue para conhecer os cuidados <span aria-hidden="true">↓</span>
        </p>
      </div>
    </div>
  );
}
