/** Rotas de página. Fonte única para o sitemap e a transição entre páginas. */
export const projectSlugs = [
  'cozinha-encontro',
  'cozinha-essencial',
  'quarto-refugio',
  'sala-convivio',
  'banheiro-equilibrio',
  'office-concentracao',
] as const;

export const routes = [
  { path: '/', priority: 1 },
  { path: '/sobre', priority: 0.7 },
  { path: '/projetos', priority: 0.8 },
  ...projectSlugs.map((slug) => ({ path: `/projetos/${slug}`, priority: 0.6 })),
] as const;

export const routePaths: ReadonlySet<string> = new Set(
  routes.map((route) => route.path),
);
