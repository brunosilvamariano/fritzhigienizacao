export const navigation = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
] as const;
export const environments = [
  {
    id: 'cozinhas',
    note: 'Estudo conceitual',
    label: 'Cozinhas',
    href: '/projetos/cozinha-encontro',
  },
  {
    id: 'dormitorios',
    note: 'Estudo conceitual',
    label: 'Quartos',
    href: '/projetos/quarto-refugio',
  },
  {
    id: 'salas',
    note: 'Estudo conceitual',
    label: 'Salas',
    href: '/projetos/sala-convivio',
  },
  {
    id: 'banheiros',
    note: 'Estudo conceitual',
    label: 'Banheiros',
    href: '/projetos/banheiro-equilibrio',
  },
  {
    id: 'home-office',
    note: 'Estudo conceitual',
    label: 'Escritórios',
    href: '/projetos/office-concentracao',
  },
] as const;
