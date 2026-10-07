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
    alt: 'Cozinha em carvalho com ilha de travertino e luz natural.',
  },
  living: {
    desktop: livingDesktop,
    tablet: livingTablet,
    mobile: livingMobile,
    alt: 'Sala com estante planejada em carvalho e sofá de linho.',
  },
  detail: {
    desktop: detailDesktop,
    tablet: detailTablet,
    mobile: detailMobile,
    alt: 'Marcenaria em carvalho com puxadores em cobre e tampo em travertino.',
  },
} as const;
