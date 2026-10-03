import image0desktop from '@/assets/images/pages/home/environments/cozinhas/desktop.webp';
import image0tablet from '@/assets/images/pages/home/environments/cozinhas/tablet.webp';
import image0mobile from '@/assets/images/pages/home/environments/cozinhas/mobile.webp';
import image1desktop from '@/assets/images/pages/home/environments/dormitorios/desktop.webp';
import image1tablet from '@/assets/images/pages/home/environments/dormitorios/tablet.webp';
import image1mobile from '@/assets/images/pages/home/environments/dormitorios/mobile.webp';
import image2desktop from '@/assets/images/pages/home/environments/salas/desktop.webp';
import image2tablet from '@/assets/images/pages/home/environments/salas/tablet.webp';
import image2mobile from '@/assets/images/pages/home/environments/salas/mobile.webp';
import image3desktop from '@/assets/images/pages/home/environments/banheiros/desktop.webp';
import image3tablet from '@/assets/images/pages/home/environments/banheiros/tablet.webp';
import image3mobile from '@/assets/images/pages/home/environments/banheiros/mobile.webp';
import image4desktop from '@/assets/images/pages/home/environments/home-office/desktop.webp';
import image4tablet from '@/assets/images/pages/home/environments/home-office/tablet.webp';
import image4mobile from '@/assets/images/pages/home/environments/home-office/mobile.webp';

export const environmentImages = {
  cozinhas: {
    desktop: image0desktop,
    tablet: image0tablet,
    mobile: image0mobile,
    alt: 'Cozinha com armários em carvalho e ilha em travertino.',
  },
  dormitorios: {
    desktop: image1desktop,
    tablet: image1tablet,
    mobile: image1mobile,
    alt: 'Dormitório com roupeiro em carvalho e cama em linho.',
  },
  salas: {
    desktop: image2desktop,
    tablet: image2tablet,
    mobile: image2mobile,
    alt: 'Sala com estante em carvalho, sofá claro e mesa em pedra.',
  },
  banheiros: {
    desktop: image3desktop,
    tablet: image3tablet,
    mobile: image3mobile,
    alt: 'Banheiro com gabinete suspenso em carvalho e bancada em travertino.',
  },
  'home-office': {
    desktop: image4desktop,
    tablet: image4tablet,
    mobile: image4mobile,
    alt: 'Home office com bancada integrada à estante e cadeira em linho.',
  },
} as const;
