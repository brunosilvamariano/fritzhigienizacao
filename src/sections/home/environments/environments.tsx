import { EnvironmentCard } from './environment-card';
import { EnvironmentMessage } from './environment-message';
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
      <div className="environment-collection-heading">
        <span className="eyebrow section-label">Ambientes para viver</span>
        <nav className="environment-nav" aria-label="Escolher ambiente">
          {environmentCollection.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="environment-stack">
        {groups.map((group, index) => (
          <div className="environment-group" key={group[0].id}>
            <span
              id={`position-group-${index + 1}`}
              className="environment-position"
              aria-hidden="true"
            />
            <div
              className={`environment-panel environment-panel--${index + 1}`}
            >
              {group.map((item) => (
                <div className="environment-entry" key={item.id}>
                  <span
                    id={`position-${item.id}`}
                    className="environment-position"
                    aria-hidden="true"
                  />
                  <EnvironmentCard item={item} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="environment-endnote">
        <span>Cinco ambientes. Um olhar para o essencial.</span>
        <p>Traço · Ambientes pensados para viver</p>
      </div>
    </section>
  );
}
