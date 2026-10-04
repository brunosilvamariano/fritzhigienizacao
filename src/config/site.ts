const configuredUrl =
  process.env.SITE_URL || 'https://tracomoveisplanejados.vercel.app';
const url = new URL(configuredUrl);
if (
  url.protocol !== 'https:' ||
  url.username ||
  url.password ||
  url.search ||
  url.hash ||
  url.pathname !== '/'
) {
  throw new Error(
    'SITE_URL deve ser a origem HTTPS do site, sem caminho, credenciais ou parâmetros.',
  );
}

export const site = {
  name: 'Traço Móveis Planejados',
  url: url.origin,
  title: 'Traço — Móveis planejados | Seu espaço. Seu traço.',
  description:
    'Cozinhas, dormitórios, salas e outros ambientes sob medida. Conheça a Traço, um conceito de marca em móveis planejados para o seu jeito de viver.',
  indexable: process.env.SITE_INDEXABLE === 'true',
};
