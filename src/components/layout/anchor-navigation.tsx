'use client';

import { useEffect } from 'react';
import { navigateAnchor } from '@/lib/navigate-anchor';
import { isPlainClick } from '@/lib/plain-click';

export function AnchorNavigation() {
  useEffect(() => {
    const click = (event: MouseEvent) => {
      if (!isPlainClick(event) || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (
        !link ||
        link.target ||
        link.hasAttribute('download') ||
        link.closest('dialog[open]')
      )
        return;
      const url = new URL(link.href);
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        url.search !== location.search ||
        !url.hash
      )
        return;
      if (navigateAnchor(url.hash)) event.preventDefault();
    };
    const restore = () =>
      requestAnimationFrame(() => {
        if (location.hash) navigateAnchor(location.hash, false);
      });
    document.addEventListener('click', click);
    window.addEventListener('popstate', restore);
    // O carregamento por hash também precisa usar o ponto anterior ao sticky.
    if (document.readyState === 'complete') restore();
    else window.addEventListener('load', restore, { once: true });
    return () => {
      document.removeEventListener('click', click);
      window.removeEventListener('popstate', restore);
      window.removeEventListener('load', restore);
    };
  }, []);
  return null;
}
