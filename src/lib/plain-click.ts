/** Clique primário sem modificadores, ainda não tratado por outro listener. */
export function isPlainClick(event: MouseEvent) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}
