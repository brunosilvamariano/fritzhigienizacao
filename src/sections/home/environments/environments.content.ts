import { environments } from '@/config/navigation';
import { environmentImages } from './environments.images';
const details = {
  cozinhas: {
    material: 'Higienização de sofás',
    description:
      'Limpeza do revestimento com atenção ao tecido, aos assentos e aos encostos.',
  },
  dormitorios: {
    material: 'Higienização de colchões',
    description:
      'Cuidado com o tecido do colchão e orientação para ventilação e secagem.',
  },
  salas: {
    material: 'Higienização de poltronas',
    description:
      'Atenção ao assento, aos braços e ao encosto, conforme o revestimento.',
  },
  banheiros: {
    material: 'Proteção para estofados',
    description:
      'Impermeabilização conforme a compatibilidade do tecido, para ajudar a reduzir a absorção imediata de líquidos.',
  },
  'home-office': {
    material: 'Higienização de cadeiras',
    description:
      'Limpeza de assentos e encostos. Informe a quantidade de peças para solicitar seu orçamento.',
  },
} as const;
export const environmentCollection = environments.map((item) => ({
  ...item,
  ...details[item.id],
  images: environmentImages[item.id],
}));
export type Environment = (typeof environmentCollection)[number];
