import { EnvironmentCard } from './environment-card';
import { EnvironmentMessage } from './environment-message';
import { EnvironmentStack } from './environment-stack';
import { environmentCollection } from './environments.content';
import './environments.css';

const groups = [
  environmentCollection.slice(0, 2),
  environmentCollection.slice(2, 4),
  environmentCollection.slice(4),
];
export function Environments() {
  return (
    <section
      id="ambientes"
      className="environments"
      aria-labelledby="environments-title"
    >
      <EnvironmentMessage />
      <div className="environment-collection-heading tw:bg-paper tw:relative">
        <span className="eyebrow tw:uppercase tw:text-accent section-label tw:inline-flex tw:items-center tw:gap-[12px]">
          Ambientes para viver
        </span>
        <nav
          className="environment-nav tw:flex tw:flex-wrap tw:mt-[16px] tw:pt-[8px]"
          aria-label="Escolher ambiente"
        >
          {environmentCollection.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <EnvironmentStack>
        {groups.map((group, index) => (
          <div className="environment-group" key={group[0].id}>
            <span
              id={`position-group-${index + 1}`}
              className="environment-position tw:block"
              aria-hidden="true"
            />
            <div
              className={`environment-panel tw:grid tw:bg-paper environment-panel--${index + 1}`}
            >
              {group.map((item) => (
                <div className="environment-entry" key={item.id}>
                  <span
                    id={`position-${item.id}`}
                    className="environment-position tw:block"
                    aria-hidden="true"
                  />
                  <EnvironmentCard item={item} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </EnvironmentStack>
      <div className="environment-endnote tw:relative tw:bg-paper tw:flex tw:justify-between tw:gap-[15px] tw:text-muted">
        <span>Cinco ambientes. Um olhar para o essencial.</span>
        <p>Traço · Ambientes pensados para viver</p>
      </div>
    </section>
  );
}
