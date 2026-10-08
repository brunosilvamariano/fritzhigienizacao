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
    title: 'Encontro',
    category: 'Cozinha ampla',
    introduction: 'Uma cozinha para preparar, receber e permanecer.',
    description:
      'O carvalho dá continuidade à parede de armários, enquanto a ilha em travertino organiza o centro do ambiente. A luz lateral revela a textura da madeira e acompanha os momentos à mesa.',
    features: ['Ilha em travertino', 'Marcenaria integrada', 'Luz natural'],
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
    title: 'Essencial',
    category: 'Cozinha compacta',
    introduction: 'Tudo encontra seu lugar, mesmo em poucos metros.',
    description:
      'Uma composição linear reúne preparo e armazenamento. A bancada em travertino, a prateleira aberta e a mesa redonda aproximam a cozinha da rotina, com leveza e proporção.',
    features: ['Composição linear', 'Prateleira aberta', 'Mesa de apoio'],
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
    title: 'Refúgio',
    category: 'Quarto principal',
    introduction: 'Organização que deixa espaço para descansar.',
    description:
      'O armário de portas alinhadas acompanha a arquitetura do quarto. Cabeceira, mesas suspensas e roupa de cama em linho criam uma composição tranquila, com madeira e pedra em equilíbrio.',
    features: ['Armário sob medida', 'Cabeceira integrada', 'Linho natural'],
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
    title: 'Convívio',
    category: 'Sala de estar',
    introduction: 'Um lugar para reunir histórias e objetos.',
    description:
      'A estante organiza livros e cerâmicas sem preencher todos os espaços. O painel ripado e os armários baixos dão unidade à parede, em diálogo com o sofá de linho e a mesa de travertino.',
    features: ['Estante integrada', 'Painel ripado', 'Armazenamento discreto'],
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
    title: 'Equilíbrio',
    category: 'Banheiro',
    introduction: 'Precisão nos encontros. Leveza no conjunto.',
    description:
      'A bancada suspensa combina gavetas em carvalho e uma cuba integrada ao travertino. O espelho e o nicho de toalhas completam um espaço de linhas limpas e luz acolhedora.',
    features: ['Bancada suspensa', 'Cuba integrada', 'Nicho em carvalho'],
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
    title: 'Concentração',
    category: 'Escritório integrado',
    introduction: 'Um espaço de trabalho que pertence à casa.',
    description:
      'A mesa faz parte da estante e preserva espaço livre para a cadeira. Armários fechados, livros e uma iluminação pontual aproximam o trabalho do ambiente de estar, sem interromper sua linguagem.',
    features: ['Mesa integrada', 'Cabos ocultos', 'Estante sob medida'],
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
