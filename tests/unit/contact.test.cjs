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

const { contactFormUrl } = loadTs('src/config/contact.ts');
test('orçamento envia todas as escolhas e preserva acentos e quebras de linha', () => {
  const data = new FormData();
  Object.entries({
    name: ' Ana ',
    email: 'ana@example.com',
    phone: '47999990000',
    company: 'Casa & Lar',
    project: 'Cozinha',
    budget: 'De R$ 10 a 30 mil',
    message: 'Armários & ilha\nCarvalho',
  }).forEach(([key, value]) => {
    data.set(key, value);
  });
  const url = new URL(contactFormUrl(data, 'quote'));
  assert.equal(url.pathname, '/5547991597258');
  assert.equal(
    text(url),
    'Olá! Gostaria de solicitar um orçamento à Traço.\n\nNome: Ana\nE-mail: ana@example.com\nTelefone: 47999990000\nEmpresa: Casa & Lar\nTipo de projeto: Cozinha\nOrçamento: De R$ 10 a 30 mil\nMensagem: Armários & ilha\nCarvalho',
  );
});
test('contato geral omite campos vazios e escolhas exclusivas de orçamento', () => {
  const data = new FormData();
  data.set('name', 'Ana');
  data.set('message', 'Olá');
  data.set('project', 'Sala');
  data.set('company', '  ');
  assert.equal(
    text(contactFormUrl(data, 'hello')),
    'Olá! Gostaria de conversar com a Traço.\n\nNome: Ana\nMensagem: Olá',
  );
});
