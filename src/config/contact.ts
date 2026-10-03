export const contact = { whatsappNumber: '5547991597258' } as const;
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
