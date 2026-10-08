import type { StaticImageData } from 'next/image';
import { projectSlugs } from '@/config/routes';
import p01capadesktop from '@/assets/images/pages/projects/01/capa/desktop.webp';
import p01capatablet from '@/assets/images/pages/projects/01/capa/tablet.webp';
import p01capamobile from '@/assets/images/pages/projects/01/capa/mobile.webp';
import p01angulodesktop from '@/assets/images/pages/projects/01/angulo/desktop.webp';
import p01angulotablet from '@/assets/images/pages/projects/01/angulo/tablet.webp';
import p01angulomobile from '@/assets/images/pages/projects/01/angulo/mobile.webp';
import p01meiodesktop from '@/assets/images/pages/projects/01/meio/desktop.webp';
import p01meiotablet from '@/assets/images/pages/projects/01/meio/tablet.webp';
import p01meiomobile from '@/assets/images/pages/projects/01/meio/mobile.webp';
import p01detalhedesktop from '@/assets/images/pages/projects/01/detalhe/desktop.webp';
import p01detalhetablet from '@/assets/images/pages/projects/01/detalhe/tablet.webp';
import p01detalhemobile from '@/assets/images/pages/projects/01/detalhe/mobile.webp';
import p02capadesktop from '@/assets/images/pages/projects/02/capa/desktop.webp';
import p02capatablet from '@/assets/images/pages/projects/02/capa/tablet.webp';
import p02capamobile from '@/assets/images/pages/projects/02/capa/mobile.webp';
import p02angulodesktop from '@/assets/images/pages/projects/02/angulo/desktop.webp';
import p02angulotablet from '@/assets/images/pages/projects/02/angulo/tablet.webp';
import p02angulomobile from '@/assets/images/pages/projects/02/angulo/mobile.webp';
import p02meiodesktop from '@/assets/images/pages/projects/02/meio/desktop.webp';
import p02meiotablet from '@/assets/images/pages/projects/02/meio/tablet.webp';
import p02meiomobile from '@/assets/images/pages/projects/02/meio/mobile.webp';
import p02detalhedesktop from '@/assets/images/pages/projects/02/detalhe/desktop.webp';
import p02detalhetablet from '@/assets/images/pages/projects/02/detalhe/tablet.webp';
import p02detalhemobile from '@/assets/images/pages/projects/02/detalhe/mobile.webp';
import p03capadesktop from '@/assets/images/pages/projects/03/capa/desktop.webp';
import p03capatablet from '@/assets/images/pages/projects/03/capa/tablet.webp';
import p03capamobile from '@/assets/images/pages/projects/03/capa/mobile.webp';
import p03angulodesktop from '@/assets/images/pages/projects/03/angulo/desktop.webp';
import p03angulotablet from '@/assets/images/pages/projects/03/angulo/tablet.webp';
import p03angulomobile from '@/assets/images/pages/projects/03/angulo/mobile.webp';
import p03meiodesktop from '@/assets/images/pages/projects/03/meio/desktop.webp';
import p03meiotablet from '@/assets/images/pages/projects/03/meio/tablet.webp';
import p03meiomobile from '@/assets/images/pages/projects/03/meio/mobile.webp';
import p03detalhedesktop from '@/assets/images/pages/projects/03/detalhe/desktop.webp';
import p03detalhetablet from '@/assets/images/pages/projects/03/detalhe/tablet.webp';
import p03detalhemobile from '@/assets/images/pages/projects/03/detalhe/mobile.webp';
import p04capadesktop from '@/assets/images/pages/projects/04/capa/desktop.webp';
import p04capatablet from '@/assets/images/pages/projects/04/capa/tablet.webp';
import p04capamobile from '@/assets/images/pages/projects/04/capa/mobile.webp';
import p04angulodesktop from '@/assets/images/pages/projects/04/angulo/desktop.webp';
import p04angulotablet from '@/assets/images/pages/projects/04/angulo/tablet.webp';
import p04angulomobile from '@/assets/images/pages/projects/04/angulo/mobile.webp';
import p04meiodesktop from '@/assets/images/pages/projects/04/meio/desktop.webp';
import p04meiotablet from '@/assets/images/pages/projects/04/meio/tablet.webp';
import p04meiomobile from '@/assets/images/pages/projects/04/meio/mobile.webp';
import p04detalhedesktop from '@/assets/images/pages/projects/04/detalhe/desktop.webp';
import p04detalhetablet from '@/assets/images/pages/projects/04/detalhe/tablet.webp';
import p04detalhemobile from '@/assets/images/pages/projects/04/detalhe/mobile.webp';
import p05capadesktop from '@/assets/images/pages/projects/05/capa/desktop.webp';
import p05capatablet from '@/assets/images/pages/projects/05/capa/tablet.webp';
import p05capamobile from '@/assets/images/pages/projects/05/capa/mobile.webp';
import p05angulodesktop from '@/assets/images/pages/projects/05/angulo/desktop.webp';
import p05angulotablet from '@/assets/images/pages/projects/05/angulo/tablet.webp';
import p05angulomobile from '@/assets/images/pages/projects/05/angulo/mobile.webp';
import p05meiodesktop from '@/assets/images/pages/projects/05/meio/desktop.webp';
import p05meiotablet from '@/assets/images/pages/projects/05/meio/tablet.webp';
import p05meiomobile from '@/assets/images/pages/projects/05/meio/mobile.webp';
import p05detalhedesktop from '@/assets/images/pages/projects/05/detalhe/desktop.webp';
import p05detalhetablet from '@/assets/images/pages/projects/05/detalhe/tablet.webp';
import p05detalhemobile from '@/assets/images/pages/projects/05/detalhe/mobile.webp';
import p06capadesktop from '@/assets/images/pages/projects/06/capa/desktop.webp';
import p06capatablet from '@/assets/images/pages/projects/06/capa/tablet.webp';
import p06capamobile from '@/assets/images/pages/projects/06/capa/mobile.webp';
import p06angulodesktop from '@/assets/images/pages/projects/06/angulo/desktop.webp';
import p06angulotablet from '@/assets/images/pages/projects/06/angulo/tablet.webp';
import p06angulomobile from '@/assets/images/pages/projects/06/angulo/mobile.webp';
import p06meiodesktop from '@/assets/images/pages/projects/06/meio/desktop.webp';
import p06meiotablet from '@/assets/images/pages/projects/06/meio/tablet.webp';
import p06meiomobile from '@/assets/images/pages/projects/06/meio/mobile.webp';
import p06detalhedesktop from '@/assets/images/pages/projects/06/detalhe/desktop.webp';
import p06detalhetablet from '@/assets/images/pages/projects/06/detalhe/tablet.webp';
import p06detalhemobile from '@/assets/images/pages/projects/06/detalhe/mobile.webp';

export type ProjectImage = {
  desktop: StaticImageData;
  tablet: StaticImageData;
  mobile: StaticImageData;
};
export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  introduction: string;
  description: string;
  features: string[];
  images: Record<'capa' | 'angulo' | 'meio' | 'detalhe', ProjectImage>;
};
export const projects: readonly Project[] = [
  {
    id: '01',
    slug: projectSlugs[0],
    title: 'Higienização',
    category: 'Sofás',
    introduction:
      'Limpeza de sofás com atenção ao seu tecido e à rotina da casa.',
    description:
      'A avaliação da peça orienta o método de limpeza. Envie fotos do sofá e informe a quantidade de assentos, seu bairro e os pontos que precisam de atenção.',
    features: [
      'Avaliação do tecido',
      'Limpeza do revestimento',
      'Orientação de secagem',
    ],
    images: {
      capa: {
        desktop: p01capadesktop,
        tablet: p01capatablet,
        mobile: p01capamobile,
      },
      angulo: {
        desktop: p01angulodesktop,
        tablet: p01angulotablet,
        mobile: p01angulomobile,
      },
      meio: {
        desktop: p01meiodesktop,
        tablet: p01meiotablet,
        mobile: p01meiomobile,
      },
      detalhe: {
        desktop: p01detalhedesktop,
        tablet: p01detalhetablet,
        mobile: p01detalhemobile,
      },
    },
  },
  {
    id: '02',
    slug: projectSlugs[1],
    title: 'Limpeza',
    category: 'Tapetes',
    introduction:
      'Cuidado para tapetes conforme suas fibras e condições de uso.',
    description:
      'Informe o material, as medidas aproximadas e sua localização. A equipe orienta sobre a limpeza indicada e combina as condições de atendimento para o seu tapete.',
    features: ['Avaliação das fibras', 'Medidas da peça', 'Cuidado adequado'],
    images: {
      capa: {
        desktop: p02capadesktop,
        tablet: p02capatablet,
        mobile: p02capamobile,
      },
      angulo: {
        desktop: p02angulodesktop,
        tablet: p02angulotablet,
        mobile: p02angulomobile,
      },
      meio: {
        desktop: p02meiodesktop,
        tablet: p02meiotablet,
        mobile: p02meiomobile,
      },
      detalhe: {
        desktop: p02detalhedesktop,
        tablet: p02detalhetablet,
        mobile: p02detalhemobile,
      },
    },
  },
  {
    id: '03',
    slug: projectSlugs[2],
    title: 'Higienização',
    category: 'Colchões',
    introduction:
      'Limpeza do revestimento para cuidar do seu espaço de descanso.',
    description:
      'Envie fotos e informe o tamanho do colchão. A higienização considera o tecido e as condições da peça, com orientações sobre ventilação, secagem e retorno ao uso.',
    features: [
      'Avaliação do tecido',
      'Tamanho do colchão',
      'Ventilação e secagem',
    ],
    images: {
      capa: {
        desktop: p03capadesktop,
        tablet: p03capatablet,
        mobile: p03capamobile,
      },
      angulo: {
        desktop: p03angulodesktop,
        tablet: p03angulotablet,
        mobile: p03angulomobile,
      },
      meio: {
        desktop: p03meiodesktop,
        tablet: p03meiotablet,
        mobile: p03meiomobile,
      },
      detalhe: {
        desktop: p03detalhedesktop,
        tablet: p03detalhetablet,
        mobile: p03detalhemobile,
      },
    },
  },
  {
    id: '04',
    slug: projectSlugs[3],
    title: 'Higienização',
    category: 'Poltronas',
    introduction: 'Atenção aos detalhes de cada poltrona.',
    description:
      'Braços, assento e encosto recebem cuidado de acordo com o revestimento. Mostre a peça à equipe e consulte a disponibilidade de atendimento no seu endereço.',
    features: [
      'Braços e encosto',
      'Cuidado com o assento',
      'Avaliação da peça',
    ],
    images: {
      capa: {
        desktop: p04capadesktop,
        tablet: p04capatablet,
        mobile: p04capamobile,
      },
      angulo: {
        desktop: p04angulodesktop,
        tablet: p04angulotablet,
        mobile: p04angulomobile,
      },
      meio: {
        desktop: p04meiodesktop,
        tablet: p04meiotablet,
        mobile: p04meiomobile,
      },
      detalhe: {
        desktop: p04detalhedesktop,
        tablet: p04detalhetablet,
        mobile: p04detalhemobile,
      },
    },
  },
  {
    id: '05',
    slug: projectSlugs[4],
    title: 'Proteção',
    category: 'Impermeabilização',
    introduction: 'Proteção para ajudar a reduzir a absorção de líquidos.',
    description:
      'A impermeabilização depende da compatibilidade do tecido. A equipe avalia a indicação e orienta sobre uso e conservação. O tratamento não dispensa os cuidados do dia a dia.',
    features: [
      'Compatibilidade do tecido',
      'Proteção do estofado',
      'Orientações de uso',
    ],
    images: {
      capa: {
        desktop: p05capadesktop,
        tablet: p05capatablet,
        mobile: p05capamobile,
      },
      angulo: {
        desktop: p05angulodesktop,
        tablet: p05angulotablet,
        mobile: p05angulomobile,
      },
      meio: {
        desktop: p05meiodesktop,
        tablet: p05meiotablet,
        mobile: p05meiomobile,
      },
      detalhe: {
        desktop: p05detalhedesktop,
        tablet: p05detalhetablet,
        mobile: p05detalhemobile,
      },
    },
  },
  {
    id: '06',
    slug: projectSlugs[5],
    title: 'Higienização',
    category: 'Cadeiras',
    introduction: 'Limpeza de cadeiras estofadas para casa e trabalho.',
    description:
      'Informe a quantidade e envie fotos dos assentos e encostos. O orçamento considera as peças e o cuidado adequado ao material, para combinar o atendimento com clareza.',
    features: [
      'Assentos e encostos',
      'Quantidade de peças',
      'Avaliação do revestimento',
    ],
    images: {
      capa: {
        desktop: p06capadesktop,
        tablet: p06capatablet,
        mobile: p06capamobile,
      },
      angulo: {
        desktop: p06angulodesktop,
        tablet: p06angulotablet,
        mobile: p06angulomobile,
      },
      meio: {
        desktop: p06meiodesktop,
        tablet: p06meiotablet,
        mobile: p06meiomobile,
      },
      detalhe: {
        desktop: p06detalhedesktop,
        tablet: p06detalhetablet,
        mobile: p06detalhemobile,
      },
    },
  },
];
export function projectPath(project: Pick<Project, 'slug'>) {
  return `/projetos/${project.slug}`;
}
