const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadTs } = require('./helpers/load-ts.cjs');

const load = (env) =>
  loadTs('src/config/site.ts', { globals: { process: { env } } }).site;

test('sem SITE_URL usa a origem padrão e não indexa', () => {
  const site = load({});
  assert.match(site.url, /^https:\/\/[^/]+$/);
  assert.equal(site.indexable, false);
});

test('SITE_URL válida é reduzida à origem', () => {
  assert.equal(
    load({ SITE_URL: 'https://exemplo.com.br/' }).url,
    'https://exemplo.com.br',
  );
});

test('indexação exige o valor exato "true"', () => {
  assert.equal(load({ SITE_INDEXABLE: 'true' }).indexable, true);
  assert.equal(load({ SITE_INDEXABLE: '1' }).indexable, false);
});

test('SITE_URL sem HTTPS, com caminho ou parâmetros é recusada', () => {
  for (const SITE_URL of [
    'http://exemplo.com.br',
    'https://exemplo.com.br/pagina',
    'https://exemplo.com.br/?a=1',
    'https://usuario:senha@exemplo.com.br',
  ]) {
    assert.throws(() => load({ SITE_URL }), /SITE_URL/, SITE_URL);
  }
});
