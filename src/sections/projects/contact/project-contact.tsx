import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { Reveal } from '@/animations/reveal';
import './project-contact.css';
export function ProjectContact({
  context = 'higienização ou impermeabilização do meu estofado',
}: {
  context?: string;
}) {
  return (
    <section
      className="project-contact tw:bg-taupe"
      aria-labelledby="project-contact-title"
    >
      <Reveal className="project-contact-inner tw:max-w-[1120px] tw:mx-auto tw:grid tw:gap-[48px] tw:items-center">
        <div>
          <span className="eyebrow tw:uppercase tw:text-accent section-label tw:inline-flex tw:items-center tw:gap-[12px]">
            Solicite seu orçamento
          </span>
          <h2 id="project-contact-title">
            Vamos cuidar
            <br />
            do seu estofado?
          </h2>
        </div>
        <div className="project-contact-action tw:max-w-[360px]">
          <p>
            Envie fotos da peça, a quantidade e sua cidade e bairro. Consulte o
            serviço indicado e a disponibilidade de atendimento.
          </p>
          <WhatsAppLink
            context={context}
            className="button tw:min-h-[52px] tw:bg-ink tw:text-paper tw:inline-flex tw:justify-between tw:items-center tw:gap-[35px]"
          >
            Quero um orçamento
          </WhatsAppLink>
        </div>
      </Reveal>
    </section>
  );
}
