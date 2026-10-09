import { whatsappUrl } from '@/config/contact';
import { WhatsAppIcon } from './social-icons';
import './floating-whatsapp.css';

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp tw:grid tw:place-items-center tw:w-[58px] tw:h-[58px]"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Quero um orçamento pelo WhatsApp (abre em nova aba)"
      data-track-contact="botão flutuante de orçamento"
    >
      <WhatsAppIcon />
    </a>
  );
}
