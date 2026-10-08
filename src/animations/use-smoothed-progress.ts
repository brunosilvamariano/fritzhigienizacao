'use client';
import {
  useAnimationFrame,
  useMotionValue,
  type MotionValue,
} from 'framer-motion';

export function useSmoothedProgress(
  value: MotionValue<number>,
  smoothing: number,
) {
  const progress = useMotionValue(value.get());
  useAnimationFrame((_time, delta) => {
    const target = value.get();
    const current = progress.get();
    const amount = 1 - smoothing ** (delta / (1000 / 60));
    progress.set(
      Math.abs(target - current) < 0.00001
        ? target
        : current + (target - current) * amount,
    );
  });
  return progress;
}
