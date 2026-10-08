'use client';
import { motion, useReducedMotion } from 'framer-motion';
import './title-reveal.css';
export function TitleReveal({
  text,
  level = 2,
  id,
  className,
}: {
  text: string;
  level?: 1 | 2 | 3;
  id?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const Heading = level === 1 ? motion.h1 : level === 3 ? motion.h3 : motion.h2;
  let offset = 0;
  const words = text.split(' ').map((word) => ({
    word,
    id: offset++,
    letters: Array.from(word).map((letter) => ({ letter, id: offset++ })),
  }));
  return (
    <Heading
      id={id}
      className={className}
      aria-label={text}
      initial={false}
      whileInView={reduced ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.012 } } }}
    >
      {words.map((item) => (
        <span className="title-word" aria-hidden="true" key={item.id}>
          {item.letters.map((character) => (
            <span className="title-letter-mask" key={character.id}>
              <motion.span
                className="title-letter"
                variants={{
                  visible: {
                    y: ['-110%', '0%'],
                    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {character.letter}
              </motion.span>
            </span>
          ))}
          <span className="title-space"> </span>
        </span>
      ))}
    </Heading>
  );
}
