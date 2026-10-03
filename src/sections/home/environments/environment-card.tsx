import { ResponsiveImage } from '@/components/media/responsive-image';
import type { Environment } from './environments.content';
export function EnvironmentCard({
  item,
  index,
}: {
  item: Environment;
  index: number;
}) {
  return (
    <article
      id={item.id}
      className={`environment-card environment-card--${item.id}`}
      aria-labelledby={`title-${item.id}`}
    >
      <figure className="environment-photo">
        <ResponsiveImage {...item.images} />
        <figcaption>{item.material}</figcaption>
      </figure>
      <div className="environment-caption">
        <span className="environment-number">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h3 id={`title-${item.id}`}>{item.label}</h3>
          <p className="environment-note">{item.note}</p>
          <p className="environment-description">{item.description}</p>
        </div>
      </div>
    </article>
  );
}
