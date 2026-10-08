import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { studioContent } from './studio.content';
import { StudioPanels } from './studio-panels';
import './studio.css';

export function Studio() {
  return (
    <section
      className="studio tw:pt-[90px]"
      id="estudio"
      aria-labelledby="studio-title"
    >
      <header className="studio-intro tw:flex tw:justify-between tw:gap-[32px]">
        <span className="eyebrow tw:uppercase tw:text-accent section-label tw:inline-flex tw:items-center tw:gap-[12px]">
          Nosso olhar
        </span>
        <h2 id="studio-title">{studioContent.title}</h2>
      </header>
      <StudioPanels />
      <div className="studio-caption tw:flex tw:justify-between tw:gap-[12px] tw:text-muted">
        <a
          href="/sobre"
          className="text-link tw:inline-flex tw:items-center tw:gap-[22px] tw:py-[9px]"
        >
          Conheça a Traço <span aria-hidden="true">↗</span>
        </a>
        <WhatsAppLink context="a proposta da Traço e um projeto para meu espaço">
          Conversar com a Traço
        </WhatsAppLink>
        <span>Traço · Conceito de marca em móveis planejados</span>
        <span>Madeira, textura e cuidado em cada detalhe</span>
      </div>
    </section>
  );
}
