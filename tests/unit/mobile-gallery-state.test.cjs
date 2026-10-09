const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadTs } = require('./helpers/load-ts.cjs');
const { mobileGalleryOpen } = loadTs('src/animations/mobile-gallery-state.ts');

test('aguarda a entrada e permanece aberta ao rolar para ambos os lados dentro da seção', () => {
  let open = false;
  for (const [top, expected] of [
    [900, false],
    [600, false],
    [400, true],
    [0, true],
    [-500, true],
    [-450, true],
    [100, true],
    [650, true],
  ]) {
    open = mobileGalleryOpen(open, { top, bottom: top + 620 }, 844);
    assert.equal(open, expected, `top=${top}`);
  }
});

test('recolhe somente após saída completa e permite nova entrada', () => {
  assert.equal(mobileGalleryOpen(true, { top: -619, bottom: 1 }, 844), true);
  assert.equal(mobileGalleryOpen(true, { top: -620, bottom: 0 }, 844), false);
  assert.equal(mobileGalleryOpen(true, { top: 844, bottom: 1464 }, 844), false);
  assert.equal(mobileGalleryOpen(false, { top: -200, bottom: 420 }, 844), true);
});

test('mudança da altura do navegador e rolagem rápida não reiniciam uma galeria visível', () => {
  for (const height of [700, 760, 844]) {
    assert.equal(
      mobileGalleryOpen(true, { top: -500, bottom: 120 }, height),
      true,
    );
    assert.equal(
      mobileGalleryOpen(false, { top: -800, bottom: -180 }, height),
      false,
    );
  }
});
