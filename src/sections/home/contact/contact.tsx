import { whatsappUrl } from '@/config/contact';
import './contact.css';
export function Contact() {
  return (
    <section
      id="contato"
      className="contact"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <h2 id="contact-title" className="contact-accessible">
        Solicite um orçamento à Fritz
      </h2>
      {[false, true].map((stroke) => (
        <div
          className="contact-marquee"
          data-stroke={stroke}
          aria-hidden="true"
          key={String(stroke)}
        >
          <div>
            {[0, 1].map((n) => (
              <span key={n}>Mais cuidado para a sua casa</span>
            ))}
          </div>
        </div>
      ))}
      <a
        href={whatsappUrl('higienização ou impermeabilização')}
        target="_blank"
        rel="noopener noreferrer"
        data-track-contact="solicitação de orçamento"
        className="contact-button"
      >
        <span className="contact-button-text">Quero um orçamento</span>
        <i aria-hidden="true">→</i>
      </a>
    </section>
  );
}
