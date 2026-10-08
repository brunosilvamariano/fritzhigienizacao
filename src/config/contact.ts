export const contact = {
  instagram: 'https://www.instagram.com/vbgagency/',
  whatsappNumber: '5547991597258',
  whatsappDisplay: '+55 47 99159-7258',
} as const;
export function whatsappUrl(context?: string) {
  const message = context
    ? 'Olá! Conheci a Traço pelo site e gostaria de conversar sobre ' +
      context +
      '.'
    : 'Olá! Conheci a Traço pelo site e gostaria de conversar sobre meu espaço.';
  return (
    'https://wa.me/' +
    contact.whatsappNumber +
    '?text=' +
    encodeURIComponent(message)
  );
}

export function contactFormUrl(data: FormData, intent: 'hello' | 'quote') {
  const value = (key: string) => String(data.get(key) ?? '').trim();
  const fields = [
    ['Nome', value('name')],
    ['E-mail', value('email')],
    ['Telefone', value('phone')],
    ['Empresa', value('company')],
    ...(intent === 'quote'
      ? [
          ['Tipo de projeto', value('project')],
          ['Orçamento', value('budget')],
        ]
      : []),
    ['Mensagem', value('message')],
  ];
  const message = [
    intent === 'quote'
      ? 'Olá! Gostaria de solicitar um orçamento à Traço.'
      : 'Olá! Gostaria de conversar com a Traço.',
    '',
    ...fields
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`),
  ].join('\n');
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
