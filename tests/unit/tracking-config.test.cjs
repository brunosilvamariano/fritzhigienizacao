const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadTs } = require('./helpers/load-ts.cjs');

const load = (env) =>
  loadTs('src/config/tracking.ts', { globals: { process: { env } } });
const active = {
  NEXT_PUBLIC_TRACKING_ENABLED: 'true',
  NEXT_PUBLIC_GA4_ID: 'G-TEST123',
  NEXT_PUBLIC_PRIVACY_URL: 'https://exemplo.com.br/privacidade',
};

test('sem variáveis a medição fica indisponível', () => {
  assert.equal(load({}).trackingAvailable, false);
});

test('IDs sem a chave de ativação não ligam a medição', () => {
  assert.equal(
    load({ ...active, NEXT_PUBLIC_TRACKING_ENABLED: 'false' })
      .trackingAvailable,
    false,
  );
});

test('configuração completa liga a medição', () => {
  const config = load(active);
  assert.equal(config.trackingAvailable, true);
  assert.equal(config.tracking.ga4, 'G-TEST123');
});

test('ID em formato inválido é recusado', () => {
  assert.throws(
    () => load({ ...active, NEXT_PUBLIC_GA4_ID: 'UA-1' }),
    /GA4_ID/,
  );
  assert.throws(
    () => load({ ...active, NEXT_PUBLIC_META_PIXEL_ID: 'abc' }),
    /META_PIXEL_ID/,
  );
});

test('medição ativa exige política de privacidade em HTTPS', () => {
  for (const NEXT_PUBLIC_PRIVACY_URL of [
    '',
    'http://exemplo.com.br/p',
    'https://',
  ]) {
    assert.throws(
      () => load({ ...active, NEXT_PUBLIC_PRIVACY_URL }),
      /NEXT_PUBLIC_PRIVACY_URL/,
    );
  }
});
