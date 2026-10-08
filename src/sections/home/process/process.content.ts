import { processImages } from './process.images';

export const processSteps = [
  {
    id: 'escutar',
    title: 'Escutar',
    text: 'Conhecer sua rotina, seus desejos e as possibilidades do espaço.',
    images: processImages[0],
  },
  {
    id: 'desenhar',
    title: 'Desenhar',
    text: 'Traduzir ideias em proporções, materiais e soluções sob medida.',
    images: processImages[1],
  },
  {
    id: 'dar-forma',
    title: 'Dar forma',
    text: 'Cuidar de cada encontro, acabamento e detalhe do projeto.',
    images: processImages[2],
  },
] as const;
