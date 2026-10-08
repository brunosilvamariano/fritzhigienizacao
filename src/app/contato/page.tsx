import type { Metadata } from 'next';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { ContactForm } from '@/sections/contact/form/contact-form';
import { Contact } from '@/sections/home/contact/contact';
export const metadata: Metadata = {
  title: 'Contato — Traço',
  alternates: { canonical: '/contato' },
};
export default function ContactPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper contact-page"
      tabIndex={-1}
    >
      <PageOpening
        decorated={false}
        caption="Entre em contato"
        title="Vamos criar algo extraordinário juntos."
      />
      <ContactForm />
      <Contact />
    </main>
  );
}
