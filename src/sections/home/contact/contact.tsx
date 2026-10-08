import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { contactContent } from './contact.content';
import './contact.css';

export function Contact() {
  return (
    <section
      id="contato"
      className="contact-section tw:relative tw:bg-taupe tw:text-ink tw:grid tw:gap-[48px]"
      aria-labelledby="contact-title"
    >
      <span className="eyebrow tw:uppercase tw:text-accent section-label tw:inline-flex tw:items-center tw:gap-[12px]">
        Vamos conversar
      </span>
      <div className="contact-copy">
        <h2 id="contact-title">{contactContent.title}</h2>
        <p>{contactContent.description}</p>
        <WhatsAppLink
          className="button tw:min-h-[52px] tw:bg-ink tw:text-paper tw:inline-flex tw:justify-between tw:items-center tw:gap-[35px] contact-button"
          context={contactContent.context}
        >
          Conversar pelo WhatsApp
        </WhatsAppLink>
      </div>
    </section>
  );
}
