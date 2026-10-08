const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadTs } = require('./helpers/load-ts.cjs');

const { contact, whatsappUrl } = loadTs('src/config/contact.ts');
const text = (url) => new URL(url).searchParams.get('text');

test('link sem contexto usa a mensagem geral', () => {
  const url = whatsappUrl();
  assert.ok(url.startsWith(`https://wa.me/${contact.whatsappNumber}?text=`));
  assert.equal(
    text(url),
    'Olá! Conheci a Traço pelo site e gostaria de conversar sobre meu espaço.',
  );
});

test('contexto entra na mensagem e é codificado na URL', () => {
  const url = whatsappUrl('cozinhas & salas');
  assert.equal(url.includes(' '), false);
  assert.equal(url.includes('&'), false);
  assert.equal(
    text(url),
    'Olá! Conheci a Traço pelo site e gostaria de conversar sobre cozinhas & salas.',
  );
});

test('número do WhatsApp contém apenas dígitos', () => {
  assert.match(contact.whatsappNumber, /^\d{12,13}$/);
});
