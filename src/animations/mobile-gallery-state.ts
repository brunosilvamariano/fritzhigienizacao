/** Mantém a galeria aberta durante toda a passagem pela seção. */
export function mobileGalleryOpen(
  open: boolean,
  section: { top: number; bottom: number },
  viewportHeight: number,
) {
  if (section.bottom <= 0 || section.top >= viewportHeight) return false;
  if (open) return true;
  return (
    section.top <= viewportHeight * 0.6 &&
    section.bottom >= viewportHeight * 0.4
  );
}
