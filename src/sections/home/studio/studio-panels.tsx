'use client';

import { useState } from 'react';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { studioContent } from './studio.content';
import { studioImages } from './studio.images';

export function StudioPanels() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([]);
  const [previous, setPrevious] = useState(0);
  function select(index: number) {
    if (index === active) return;
    if (loaded[active]) setPrevious(active);
    setActive(index);
  }
  const visible = loaded[active] ? active : previous;
  return (
    <div className="studio-panels tw:relative tw:bg-ink tw:text-paper">
      <div className="studio-backgrounds tw:overflow-hidden" aria-hidden="true">
        {studioImages.map((image, index) => (
          <div
            key={image.alt}
            className="studio-background"
            data-visible={visible === index}
          >
            <ResponsiveImage
              {...image}
              alt=""
              sizes="100vw"
              onLoad={() =>
                setLoaded((current) => {
                  if (current[index]) return current;
                  const next = [...current];
                  next[index] = true;
                  return next;
                })
              }
            />
          </div>
        ))}
      </div>
      <div className="studio-pillar-grid tw:grid">
        {studioContent.items.map((item, index) => (
          <article
            className="studio-pillar tw:min-w-0 tw:flex tw:flex-col"
            data-active={active === index}
            key={item.id}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') select(index);
            }}
          >
            <div className="studio-pillar-content">
              <h3>
                <button
                  type="button"
                  id={`studio-trigger-${item.id}`}
                  aria-expanded={active === index}
                  aria-controls={`studio-panel-${item.id}`}
                  onFocus={() => select(index)}
                  onClick={() => select(index)}
                >
                  {item.title}
                  <span className="studio-pillar-mark" aria-hidden="true">
                    {active === index ? '−' : '+'}
                  </span>
                </button>
              </h3>
              <div
                className="studio-pillar-reveal tw:grid"
                id={`studio-panel-${item.id}`}
                inert={active !== index}
                aria-hidden={active !== index}
              >
                <div>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
