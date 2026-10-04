import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { ResponsiveImage } from '@/components/media/responsive-image';
import type { Environment } from './environments.content';
export function EnvironmentCard({ item }: { item: Environment }) {
  return (
    <article
      id={item.id}
      data-scroll-mobile={`position-${item.id}`}
      className={`environment-card environment-card--${item.id}`}
      aria-labelledby={`title-${item.id}`}
    >
      <figure className="environment-photo">
        <ResponsiveImage {...item.images} />
        <figcaption>{item.material}</figcaption>
      </figure>
      <div className="environment-caption">
        <span className="environment-marker" aria-hidden="true" />
        <div>
          <h3 id={`title-${item.id}`}>{item.label}</h3>
          <p className="environment-note">{item.note}</p>
          <p className="environment-description">{item.description}</p>
          <WhatsAppLink
            context={`móveis planejados para ${item.label.toLocaleLowerCase('pt-BR')}`}
          >
            Planejar meu ambiente
          </WhatsAppLink>
        </div>
      </div>
    </article>
  );
}
