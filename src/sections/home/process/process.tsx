import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { ProcessAccordion } from './process-accordion';
import './process.css';

export function Process() {
  return (
    <section
      className="section process tw:bg-paper"
      id="processo"
      aria-labelledby="process-title"
    >
      <div className="section-heading">
        <span className="eyebrow tw:uppercase tw:text-accent section-label tw:inline-flex tw:items-center tw:gap-[12px]">
          O processo
        </span>
        <h2 id="process-title">Tudo começa com um olhar.</h2>
        <p className="process-introduction">
          Da primeira conversa aos últimos detalhes, cada escolha parte da sua
          forma de viver.
        </p>
      </div>
      <ProcessAccordion />
      <WhatsAppLink context="as etapas do projeto, da primeira conversa à instalação">
        Começar meu projeto
      </WhatsAppLink>
      <p className="process-credit tw:text-muted tw:mt-[22px] tw:text-right">
        Traço · Do primeiro desenho aos últimos detalhes
      </p>
    </section>
  );
}
