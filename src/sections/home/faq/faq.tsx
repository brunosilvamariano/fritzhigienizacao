'use client';

import { useState } from 'react';
import { faqItems } from './faq.content';
import './faq.css';

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      className="faq tw:grid tw:bg-white section"
      id="duvidas"
      aria-labelledby="faq-title"
      tabIndex={-1}
    >
      <div className="faq-introduction section-heading">
        <span className="eyebrow tw:uppercase tw:text-accent section-label tw:inline-flex tw:items-center tw:gap-[12px]">
          Perguntas frequentes
        </span>
        <h2 id="faq-title">
          Antes de dar
          <br />o primeiro passo.
        </h2>
        <p>
          Algumas escolhas começam com uma boa pergunta. Encontre um ponto de
          partida para pensar no seu espaço.
        </p>
      </div>
      <div className="faq-list tw:min-w-0">
        {faqItems.map((item, index) => {
          const expanded = openId === item.id;
          return (
            <div className="faq-item" key={item.id} data-open={expanded}>
              <h3>
                <button
                  className="faq-trigger tw:grid tw:items-center tw:gap-[20px] tw:w-full tw:min-h-[104px] tw:py-[28px] tw:text-left"
                  type="button"
                  id={`faq-trigger-${item.id}`}
                  aria-expanded={expanded}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() =>
                    setOpenId((current) =>
                      current === item.id ? null : item.id,
                    )
                  }
                >
                  <span
                    className="faq-number tw:text-copper"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item.question}</span>
                  <span
                    className="faq-mark tw:relative tw:w-[18px] tw:h-[18px] tw:text-copper"
                    aria-hidden="true"
                  >
                    <i />
                    <i />
                  </span>
                </button>
              </h3>
              <div
                className="faq-answer tw:grid"
                id={`faq-answer-${item.id}`}
                aria-hidden={!expanded}
                inert={!expanded}
              >
                <div className="faq-answer-clip tw:overflow-hidden">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
