import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { servicesContent } from './services.content';
import { servicesImages } from './services.images';
import { ServiceIcon } from './service-icon';
import './services.css';

export function Services() {
  return (
    <section
      id="servicos"
      className="services tw:bg-paper"
      aria-labelledby="services-title"
    >
      <div className="services-copy">
        <div className="services-heading tw:grid tw:gap-[60px] tw:items-center">
          <div className="section-heading">
            <span className="eyebrow tw:uppercase tw:text-accent section-label tw:inline-flex tw:items-center tw:gap-[12px]">
              Serviços
            </span>
            <h2 id="services-title">
              {servicesContent.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
          </div>
          <p className="services-introduction tw:text-muted tw:max-w-[340px] tw:pt-[25px]">
            {servicesContent.introduction}
          </p>
        </div>
        <div className="services-grid tw:grid tw:mt-[60px]">
          {servicesContent.items.map((item) => (
            <article
              className="service-item tw:min-w-0"
              key={item.id}
              aria-labelledby={`service-${item.id}`}
            >
              <ServiceIcon kind={item.id} />
              <h3 id={`service-${item.id}`}>{item.title}</h3>
              <p>{item.text}</p>
              <WhatsAppLink
                context={`o serviço de ${item.title.toLocaleLowerCase('pt-BR')}`}
              >
                Conversar sobre este serviço
              </WhatsAppLink>
            </article>
          ))}
        </div>
      </div>
      <figure className="services-material tw:relative">
        <ResponsiveImage {...servicesImages} sizes="100vw" />
        <figcaption>Traço · Materiais que dão forma ao seu espaço</figcaption>
      </figure>
    </section>
  );
}
