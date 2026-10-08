import { withSocialMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { ContactForm } from '@/sections/contact/form/contact-form';
import { Contact } from '@/sections/home/contact/contact';
export const metadata: Metadata = withSocialMetadata({
  title: 'Orçamento e agendamento em Joinville',
  description:
    'Envie as informações do seu estofado para a Fritz. Solicite orçamento e consulte a disponibilidade de atendimento em Joinville e região.',
  alternates: { canonical: '/contato' },
  openGraph: {
    title: 'Orçamento e agendamento em Joinville | Fritz',
    description:
      'Envie as informações do seu estofado para a Fritz. Solicite orçamento e consulte a disponibilidade de atendimento em Joinville e região.',
    url: '/contato',
  },
});
export default function ContactPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper contact-page"
      tabIndex={-1}
    >
      <PageOpening
        decorated={false}
        caption="Orçamento e agendamento"
        title="Vamos cuidar dos seus estofados."
      />
      <ContactForm />
      <Contact />
    </main>
  );
}
