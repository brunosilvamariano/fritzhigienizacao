const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadTs } = require('./helpers/load-ts.cjs');

// SDKs não são executados: testes isolados da rede e de contas reais.
function harness() {
  const scripts = [];
  const config = {
    ga4: 'G-TEST',
    ads: 'AW-123',
    adsLabel: 'unit-test',
    meta: '123',
  };
  class Element {
    dataset = { trackContact: 'cozinhas' };
    closest(selector) {
      if (selector === 'a[data-track-contact]') return this;
      if (selector === 'section[id]') return { id: 'ambientes' };
      return null;
    }
  }
  const window = {};
  const api = loadTs('src/components/analytics/tracking-runtime.ts', {
    globals: {
      window,
      Element,
      document: {
        getElementById: (id) => scripts.find((script) => script.id === id),
        createElement: () => ({}),
        head: { append: (script) => scripts.push(script) },
      },
    },
    modules: { '@/config/tracking': { tracking: config } },
  });
  return {
    api,
    scripts,
    window,
    click: () => api.trackContact({ target: new Element() }),
    commands: () =>
      Array.from(window.dataLayer || [], (command) => Array.from(command)),
  };
}

test('recusa não carrega scripts nem enfileira eventos', () => {
  const h = harness();
  h.api.startTracking({ analytics: false, marketing: false });
  h.click();
  assert.equal(h.scripts.length, 0);
  assert.equal(h.commands().length, 0);
  assert.equal(h.window.fbq, undefined);
});

test('estatísticas isoladas não inicializam publicidade', () => {
  const h = harness();
  h.api.startTracking({ analytics: true, marketing: false });
  h.click();
  assert.equal(h.scripts.length, 1);
  assert.match(h.scripts[0].src, /gtag\/js\?id=G-TEST$/);
  assert.equal(h.commands().filter((c) => c[0] === 'config').length, 1);
  assert.equal(h.window.fbq, undefined);
  assert.equal(h.commands().filter((c) => c[1] === 'conversion').length, 0);
  const event = h.commands().find((c) => c[1] === 'whatsapp_click');
  assert.equal(event[2].contact_context, 'cozinhas');
  assert.equal(event[2].section, 'ambientes');
  assert.equal(event[2].link_url, undefined);
});

test('publicidade isolada não inicializa GA4', () => {
  const h = harness();
  h.api.startTracking({ analytics: false, marketing: true });
  h.click();
  assert.equal(h.scripts.length, 2);
  assert.equal(
    h.commands().some((c) => c[0] === 'config' && c[1] === 'G-TEST'),
    false,
  );
  assert.equal(h.commands().filter((c) => c[1] === 'conversion').length, 1);
  assert.equal(
    h.window.fbq.queue.filter((c) => c[1] === 'WhatsAppClick').length,
    1,
  );
});

test('inicialização repetida não duplica SDKs ou page views', () => {
  const h = harness();
  const consent = { analytics: true, marketing: true };
  h.api.startTracking(consent);
  h.api.startTracking(consent);
  assert.equal(h.scripts.length, 2);
  assert.equal(h.commands().filter((c) => c[0] === 'config').length, 2);
  assert.equal(h.window.fbq.queue.filter((c) => c[1] === 'PageView').length, 1);
  assert.equal(h.commands()[0][0], 'consent');
  assert.equal(h.commands()[0][2].ad_storage, 'denied');
});

test('revogação impede eventos personalizados subsequentes', () => {
  const h = harness();
  h.api.startTracking({ analytics: true, marketing: true });
  h.api.stopTracking();
  const googleCount = h.commands().length;
  const metaCount = h.window.fbq.queue.length;
  h.click();
  assert.equal(h.commands().length, googleCount);
  assert.equal(h.window.fbq.queue.length, metaCount);
  assert.equal(h.commands().at(-1)[2].analytics_storage, 'denied');
  assert.equal(h.window.fbq.queue.at(-1)[1], 'revoke');
});

test('clique sem elemento não gera conversão', () => {
  const h = harness();
  h.api.startTracking({ analytics: true, marketing: true });
  const count = h.commands().length;
  h.api.trackContact({ target: null });
  assert.equal(h.commands().length, count);
});
