/** Move o foco de leitura sem interromper a rolagem nativa até a seção. */
export function focusAnchor(hash: string) {
  if (!hash.startsWith('#')) return;
  let id: string;
  try {
    id = decodeURIComponent(hash.slice(1));
  } catch {
    return;
  }
  const target = document.getElementById(id);
  if (!target) return;
  if (!target.hasAttribute('tabindex')) {
    target.setAttribute('tabindex', '-1');
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), {
      once: true,
    });
  }
  target.focus({ preventScroll: true });
}
