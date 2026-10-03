import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { studioContent } from './studio.content';
import { StudioPanels } from './studio-panels';
import './studio.css';
export function Studio() {
  return (
    <section className="studio" id="estudio" aria-labelledby="studio-title">
      <header className="studio-intro">
        <span className="eyebrow section-label">Estúdio</span>
        <h2 id="studio-title">{studioContent.title}</h2>
      </header>
      <StudioPanels />
      <div className="studio-caption">
        <WhatsAppLink context="a proposta da Traço e um projeto para meu espaço">
          Conversar com a Traço
        </WhatsAppLink>
        <span>Traço · Marca conceitual de portfólio</span>
        <span>Imagens geradas por IA · Não representam obras executadas</span>
      </div>
    </section>
  );
}
