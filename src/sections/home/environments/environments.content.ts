import { environments } from '@/config/navigation';
import { environmentImages } from './environments.images';
const details = {
  cozinhas: {
    material: 'Carvalho + travertino',
    description:
      'Bancadas que aproximam. Armários que acolhem os utensílios da rotina. Cada escolha desenha um jeito de estar junto.',
  },
  dormitorios: {
    material: 'Madeira + linho',
    description:
      'Volumes discretos, texturas suaves e espaço para guardar. Um ambiente que convida a desacelerar.',
  },
  salas: {
    material: 'Textura + proporção',
    description:
      'Livros, objetos e memórias encontram lugar em uma marcenaria que faz parte da arquitetura.',
  },
  banheiros: {
    material: 'Pedra + carvalho',
    description:
      'Leveza nos volumes e cuidado nos encontros. O essencial ganha espaço entre a bancada e a madeira.',
  },
  'home-office': {
    material: 'Luz + organização',
    description:
      'Uma bancada na medida, o que importa por perto e luz para acompanhar as ideias. Trabalhar também pode fazer parte do morar.',
  },
} as const;
export const environmentCollection = environments.map((item) => ({
  ...item,
  ...details[item.id],
  images: environmentImages[item.id],
}));
export type Environment = (typeof environmentCollection)[number];
