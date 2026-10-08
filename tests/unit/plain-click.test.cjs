const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadTs } = require('./helpers/load-ts.cjs');

const { isPlainClick } = loadTs('src/lib/plain-click.ts');
const click = (overrides = {}) => ({
  defaultPrevented: false,
  button: 0,
  metaKey: false,
  ctrlKey: false,
  shiftKey: false,
  altKey: false,
  ...overrides,
});

test('clique primário simples é aceito', () => {
  assert.equal(isPlainClick(click()), true);
});

test('cliques com modificador, outro botão ou já tratados são ignorados', () => {
  for (const overrides of [
    { defaultPrevented: true },
    { button: 1 },
    { metaKey: true },
    { ctrlKey: true },
    { shiftKey: true },
    { altKey: true },
  ]) {
    assert.equal(isPlainClick(click(overrides)), false);
  }
});
