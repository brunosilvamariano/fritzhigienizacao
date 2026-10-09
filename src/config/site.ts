const configuredUrl =
  process.env.SITE_URL || 'https://higienizacaofritz.vercel.app';
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
  name: 'Fritz Higienização e Impermeabilização',
  url: url.origin,
  title: 'Higienização de estofados em Joinville | Fritz',
  description:
    'Higienização de sofás, colchões, tapetes e cadeiras, e impermeabilização de estofados em Joinville e região. Solicite orçamento e consulte a agenda da Fritz.',
  indexable: process.env.SITE_INDEXABLE === 'true',
};
