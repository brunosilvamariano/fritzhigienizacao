'use client';

import { useState } from 'react';
import { faqItems } from './faq.content';
import './faq.css';

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      className="faq section"
      id="duvidas"
      aria-labelledby="faq-title"
      tabIndex={-1}
    >
      <div className="faq-introduction section-heading">
        <span className="eyebrow section-label">Dúvidas frequentes</span>
        <h2 id="faq-title">
          Antes de dar
          <br />o primeiro passo.
        </h2>
        <p>
          Algumas escolhas começam com uma boa pergunta. Encontre um ponto de
          partida para pensar no seu espaço.
        </p>
      </div>
      <div className="faq-list">
        {faqItems.map((item, index) => {
          const expanded = openId === item.id;
          return (
            <div className="faq-item" key={item.id} data-open={expanded}>
              <h3>
                <button
                  className="faq-trigger"
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
                  <span className="faq-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item.question}</span>
                  <span className="faq-mark" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                </button>
              </h3>
              <section
                className="faq-answer"
                id={`faq-answer-${item.id}`}
                aria-labelledby={`faq-trigger-${item.id}`}
                aria-hidden={!expanded}
                inert={!expanded}
              >
                <div className="faq-answer-clip">
                  <p>{item.answer}</p>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </section>
  );
}
