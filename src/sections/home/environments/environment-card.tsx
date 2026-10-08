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
      className={`environment-card tw:min-w-0 environment-card--${item.id}`}
      aria-labelledby={`title-${item.id}`}
    >
      <figure className="environment-photo tw:relative tw:overflow-hidden tw:bg-taupe">
        <ResponsiveImage {...item.images} sizes={imageSizes} />
        <figcaption>{item.material}</figcaption>
      </figure>
      <div className="environment-caption tw:grid tw:gap-[14px] tw:pt-[16px] tw:mt-[12px]">
        <span
          className="environment-marker tw:w-[18px] tw:h-[1px] tw:bg-copper tw:mt-[17px]"
          aria-hidden="true"
        />
        <div>
          <h3 id={`title-${item.id}`}>{item.label}</h3>
          <p className="environment-note tw:mt-[10px]">{item.note}</p>
          <p className="environment-description tw:text-muted tw:mt-[8px] tw:max-w-[400px]">
            {item.description}
          </p>
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
