import { focusAnchor } from './focus-anchor';

/** Ancora a navegação no fluxo do documento, mesmo quando o card está sticky. */
export function navigateAnchor(
  hash: string,
  updateHistory = true,
  behavior: ScrollBehavior = 'smooth',
) {
  let target: HTMLElement | null;
  try {
    target = document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return false;
  }
  if (!hash.startsWith('#') || !target) return false;

  const mobilePosition = target.dataset.scrollMobile;
  const scrollPosition = target.dataset.scrollPosition;
  const position = scrollPosition
    ? document.getElementById(scrollPosition)
    : mobilePosition
      ? window.matchMedia('(max-width: 767px)').matches
        ? document.getElementById(mobilePosition)
        : target
            .closest('.environment-group')
            ?.querySelector<HTMLElement>(':scope > .environment-position')
      : target;
  if (!position) return false;

  if (updateHistory && location.hash !== hash) {
    const oldURL = location.href;
    history.pushState(history.state, '', hash);
    window.dispatchEvent(
      new HashChangeEvent('hashchange', { oldURL, newURL: location.href }),
    );
  }
  // Retira o foco do link de origem antes de calcular a posição de chegada.
  focusAnchor(hash);
  const padding =
    Number.parseFloat(
      getComputedStyle(document.documentElement).scrollPaddingTop,
    ) || 0;
  const top = Math.max(
    0,
    position.getBoundingClientRect().top + scrollY - padding,
  );
  window.scrollTo({
    top,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'instant'
      : behavior,
  });
  return true;
}
