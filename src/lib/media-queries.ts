/** Consultas de mídia usadas no JavaScript. Manter em sincronia com o CSS. */
export const mediaQueries = {
  mobile: '(max-width: 767px)',
  desktopNavigation: '(min-width: 1200px)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  pinnedMotion:
    '(min-width: 1024px) and (min-height: 651px) and (prefers-reduced-motion: no-preference)',
  servicesProcessMotion:
    '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
} as const;

export function prefersReducedMotion() {
  return window.matchMedia(mediaQueries.reducedMotion).matches;
}
