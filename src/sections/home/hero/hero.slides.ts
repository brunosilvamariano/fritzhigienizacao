import { kitchenStudyImages } from '@/content/kitchen-study.images';
import bedroomDesktop from '@/assets/images/pages/home/hero/bedroom/desktop.webp';
import bedroomTablet from '@/assets/images/pages/home/hero/bedroom/tablet.webp';
import bedroomMobile from '@/assets/images/pages/home/hero/bedroom/mobile.webp';
import livingDesktop from '@/assets/images/pages/home/hero/living/desktop.webp';
import livingTablet from '@/assets/images/pages/home/hero/living/tablet.webp';
import livingMobile from '@/assets/images/pages/home/hero/living/mobile.webp';

export const heroSlides = [
  { label: 'Cozinhas', images: kitchenStudyImages },
  {
    label: 'Dormitórios',
    images: {
      desktop: bedroomDesktop,
      tablet: bedroomTablet,
      mobile: bedroomMobile,
      alt: 'Estudo de dormitório com armários em carvalho e cama em linho.',
    },
  },
  {
    label: 'Salas',
    images: {
      desktop: livingDesktop,
      tablet: livingTablet,
      mobile: livingMobile,
      alt: 'Estudo de sala com estante planejada em carvalho e mesa em travertino.',
    },
  },
] as const;
