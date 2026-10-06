import kitchenDesktop from '@/assets/images/pages/about/kitchen/desktop.webp';
import kitchenTablet from '@/assets/images/pages/about/kitchen/tablet.webp';
import kitchenMobile from '@/assets/images/pages/about/kitchen/mobile.webp';
import livingDesktop from '@/assets/images/pages/about/living/desktop.webp';
import livingTablet from '@/assets/images/pages/about/living/tablet.webp';
import livingMobile from '@/assets/images/pages/about/living/mobile.webp';
import detailDesktop from '@/assets/images/pages/about/detail/desktop.webp';
import detailTablet from '@/assets/images/pages/about/detail/tablet.webp';
import detailMobile from '@/assets/images/pages/about/detail/mobile.webp';

export const aboutImages = {
  kitchen: {
    desktop: kitchenDesktop,
    tablet: kitchenTablet,
    mobile: kitchenMobile,
    alt: 'Estudo de cozinha em carvalho com ilha de travertino e luz natural, gerado por IA.',
  },
  living: {
    desktop: livingDesktop,
    tablet: livingTablet,
    mobile: livingMobile,
    alt: 'Estudo de sala com estante planejada em carvalho e sofá de linho, gerado por IA.',
  },
  detail: {
    desktop: detailDesktop,
    tablet: detailTablet,
    mobile: detailMobile,
    alt: 'Estudo de marcenaria em carvalho com puxadores em cobre e tampo em travertino, gerado por IA.',
  },
} as const;
