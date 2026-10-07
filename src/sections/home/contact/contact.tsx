import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { contactContent } from './contact.content';
import './contact.css';
export function Contact() {
  return (
    <section
      id="contato"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <span className="eyebrow section-label">Vamos conversar</span>
      <div className="contact-copy">
        <h2 id="contact-title">{contactContent.title}</h2>
        <p>{contactContent.description}</p>
        <WhatsAppLink
          className="button contact-button"
          context={contactContent.context}
        >
          Conversar pelo WhatsApp
        </WhatsAppLink>
      </div>
    </section>
  );
}
