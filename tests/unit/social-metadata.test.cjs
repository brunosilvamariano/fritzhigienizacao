const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { loadTs } = require('./helpers/load-ts.cjs');

const site = {
  url: 'https://higienizacaofritz.vercel.app',
  name: 'Fritz',
  title: 'Higienização de estofados em Joinville | Fritz',
  description: 'Higienização e impermeabilização.',
  indexable: false,
};
const { siteMetadata, withSocialMetadata } = loadTs('src/config/metadata.ts', {
  globals: { process: { env: {} } },
  modules: {
    './site': { site },
    '@/assets/images/social/fritz-compartilhamento.jpg': {
      default: {
        src: '/_next/static/media/foto-hash.jpg',
        width: 1200,
        height: 630,
      },
    },
  },
});

test('prévia usa rota social absoluta, sem depender do caminho do bundler', () => {
  for (const metadata of [siteMetadata.openGraph, siteMetadata.twitter]) {
    assert.equal(metadata.images[0].url, `${site.url}/opengraph-image.jpg`);
    assert.equal(metadata.images[0].width, 1200);
    assert.equal(metadata.images[0].height, 630);
    assert.equal(metadata.images[0].type, 'image/jpeg');
  }
});

test('página interna preserva imagem social e usa sua própria URL', () => {
  const metadata = withSocialMetadata({
    title: 'Sobre a Fritz',
    alternates: { canonical: '/sobre' },
  });
  assert.equal(metadata.openGraph.url, '/sobre');
  assert.equal(metadata.openGraph.title, 'Sobre a Fritz');
  assert.equal(
    metadata.openGraph.images[0].url,
    `${site.url}/opengraph-image.jpg`,
  );
  assert.equal(
    metadata.twitter.images[0].url,
    `${site.url}/opengraph-image.jpg`,
  );
});

test('arquivo nativo social corresponde à fotografia aprovada', () => {
  const root = resolve(__dirname, '../..');
  const native = readFileSync(resolve(root, 'src/app/opengraph-image.jpg'));
  const source = readFileSync(
    resolve(root, 'src/assets/images/social/fritz-compartilhamento.jpg'),
  );
  assert.equal(native[0], 0xff);
  assert.equal(native[1], 0xd8);
  assert.ok(native.equals(source));
});
