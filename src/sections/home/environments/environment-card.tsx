import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { ResponsiveImage } from '@/components/media/responsive-image';
import type { Environment } from './environments.content';

const wideCardSizes =
  '(max-width: 767px) calc(100vw - 48px), calc((100vw - 2 * clamp(24px, 5vw, 88px) - clamp(30px, 5vw, 80px)) * 1.35 / 2.35)';
const narrowCardSizes =
  '(max-width: 767px) calc(100vw - 48px), calc((100vw - 2 * clamp(24px, 5vw, 88px) - clamp(30px, 5vw, 80px)) / 2.35)';
const homeOfficeSizes =
  '(max-width: 767px) calc(100vw - 48px), calc((100vw - 2 * clamp(24px, 5vw, 88px) - clamp(30px, 5vw, 80px)) * 1.65 / 2.65)';

export function EnvironmentCard({ item }: { item: Environment }) {
  const imageSizes =
    item.id === 'cozinhas' || item.id === 'banheiros'
      ? wideCardSizes
      : item.id === 'home-office'
        ? homeOfficeSizes
        : narrowCardSizes;

  return (
    <article
      id={item.id}
      data-scroll-mobile={`position-${item.id}`}
      className={`environment-card environment-card--${item.id}`}
      aria-labelledby={`title-${item.id}`}
    >
      <figure className="environment-photo">
        <ResponsiveImage {...item.images} sizes={imageSizes} />
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
