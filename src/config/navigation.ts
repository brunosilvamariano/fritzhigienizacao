import { projectSlugs } from './routes';
export const navigation = [
  { label: 'Início', href: '/' },
  { label: 'Sobre a Fritz', href: '/sobre' },
  { label: 'Cuidados', href: '/projetos' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Dicas', href: '/blog' },
  { label: 'Agendamento', href: '/contato' },
] as const;
export const environments = [
  {
    id: 'cozinhas',
    note: 'Conheça o serviço',
    label: 'Sofás',
    href: `/projetos/${projectSlugs[0]}`,
  },
  {
    id: 'dormitorios',
    note: 'Conheça o serviço',
    label: 'Colchões',
    href: `/projetos/${projectSlugs[2]}`,
  },
  {
    id: 'salas',
    note: 'Conheça o serviço',
    label: 'Poltronas',
    href: `/projetos/${projectSlugs[3]}`,
  },
  {
    id: 'banheiros',
    note: 'Conheça o serviço',
    label: 'Impermeabilização',
    href: `/projetos/${projectSlugs[4]}`,
  },
  {
    id: 'home-office',
    note: 'Conheça o serviço',
    label: 'Cadeiras',
    href: `/projetos/${projectSlugs[5]}`,
  },
] as const;
