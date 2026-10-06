'use client';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from 'react';
import { useReducedMotion } from 'framer-motion';
export const SLIDE_DURATION = 6500;
export function useHeroCarousel(count: number) {
  const [active, setActive] = useState(0);
  const [requested, setRequested] = useState(0);
  const [ready, setReady] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [visible, setVisible] = useState(true);
  const [restart, setRestart] = useState(0);
  const reduced = useReducedMotion();
  const origin = useRef<{ x: number; y: number; id: number } | null>(null);
  const stopped =
    paused || hovered || focused || dragging || !visible || !!reduced;
  const choose = useCallback(
    (index: number) => {
      setRequested((index + count) % count);
      setRestart((n) => n + 1);
    },
    [count],
  );
  const loaded = useCallback(
    (index: number) =>
      setReady((previous) =>
        previous.includes(index) ? previous : [...previous, index],
      ),
    [],
  );
  const shouldRenderImage = useCallback(
    (index: number) =>
      index === active || index === requested || ready.includes(index),
    [active, requested, ready],
  );
  useEffect(() => {
    if (ready.includes(requested)) setActive(requested);
  }, [requested, ready]);
  // biome-ignore lint/correctness/useExhaustiveDependencies: restart intentionally resets the timer after manual selection, including the current slide.
  useEffect(() => {
    if (stopped) return;
    const timer = window.setTimeout(() => choose(active + 1), SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [active, stopped, restart, choose]);
  useEffect(() => {
    const handle = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', handle);
    handle();
    return () => document.removeEventListener('visibilitychange', handle);
  }, []);
  function pointerDown(event: PointerEvent<HTMLElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    origin.current = {
      x: event.clientX,
      y: event.clientY,
      id: event.pointerId,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  }
  function pointerUp(event: PointerEvent<HTMLElement>) {
    const start = origin.current;
    origin.current = null;
    setDragging(false);
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2)
      choose(active + (dx < 0 ? 1 : -1));
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  }
  function cancel() {
    origin.current = null;
    setDragging(false);
  }
  return {
    active,
    stopped,
    paused,
    reduced,
    restart,
    choose,
    loaded,
    shouldRenderImage,
    setHovered,
    setFocused,
    togglePause: () => setPaused((value) => !value),
    pointerDown,
    pointerUp,
    cancel,
  };
}
