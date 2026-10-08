import camila from '@/assets/images/shared/google-reviews/camila.png';
import bia from '@/assets/images/shared/google-reviews/bia.png';
import ketti from '@/assets/images/shared/google-reviews/ketti.png';
import fernanda from '@/assets/images/shared/google-reviews/fernanda.png';
import googleLogo from '@/assets/images/shared/google-reviews/google-g.png';
export { googleLogo };
// Snapshot conferido publicamente no Google Maps em 08/10/2026. Não é uma integração ao vivo.
export const googleBusiness = {
  rating: '5,0',
  reviewCount: 288,
  checkedAt: '08/10/2026',
  profileUrl:
    'https://www.google.com/maps/search/?api=1&query=Fritz%20Higieniza%C3%A7%C3%A3o&query_place_id=ChIJ-1-NVCabyEQRIdEgkmcPAzo',
} as const;
export const googleReviews = [
  {
    name: 'Camila Rosa Gomes',
    text: 'Alfredo é muito cuidadoso e comprometido',
    image: camila,
  },
  {
    name: 'Bia Marina',
    text: 'Excelente serviço! Limpeza de qualidade',
    image: bia,
  },
  {
    name: 'Ketti Pars',
    text: 'Super recomendo o trabalho do Fritz!',
    image: ketti,
  },
  {
    name: 'Fernanda Almeida',
    text: 'Excelente serviço, atendimento e custo benefício!',
    image: fernanda,
  },
] as const;
