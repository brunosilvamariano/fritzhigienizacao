'use client';

import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { processSteps } from './process.content';

export function ProcessAccordion() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const current = processSteps[active];
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown')
      next = (index + 1) % processSteps.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp')
      next = (index + processSteps.length - 1) % processSteps.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = processSteps.length - 1;
    else return;
    event.preventDefault();
    buttons.current[next]?.focus();
  }
  return (
    <div className="process-experience tw:grid tw:gap-[36px] tw:mt-[64px]">
      <div
        className="process-description tw:flex tw:flex-col tw:justify-between tw:pt-[65px] tw:pb-[30px] tw:gap-[40px]"
        aria-hidden="true"
      >
        <svg
          aria-hidden="true"
          className="process-sketch tw:text-copper tw:w-[160px]"
          viewBox="0 0 180 160"
          fill="none"
        >
          <path
            d="M12 14h156v132H12zM18 20h68v72H18M92 20h70v48H92zM18 98h144v42H18zM28 110h32v20H28zM70 110h32v20H70zM112 110h38v20h-38zM2 8h176M6 0v158M174 0v158M2 152h176M106 28h46v32h-46zM25 32h54v44H25z"
            stroke="currentColor"
            strokeWidth=".8"
          />
          <path
            d="M40 25v57M66 25v57M20 46h64M20 62h64"
            stroke="currentColor"
            strokeWidth=".5"
          />
        </svg>
        <div key={current.id} className="process-description-copy">
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>
      </div>
      <div className="process-accordion tw:flex tw:gap-[12px] tw:min-w-0">
        {processSteps.map((step, index) => {
          const open = active === index;
          return (
            <article
              key={step.id}
              className={
                open
                  ? 'process-item tw:relative tw:min-w-0 is-active'
                  : 'process-item tw:relative tw:min-w-0'
              }
            >
              <h3 className="process-trigger-heading">
                <button
                  type="button"
                  className="process-trigger tw:absolute tw:flex tw:flex-col tw:items-center tw:justify-between tw:w-full tw:bg-paper"
                  ref={(node) => {
                    buttons.current[index] = node;
                  }}
                  id={`process-trigger-${step.id}`}
                  aria-expanded={open}
                  aria-controls={`process-panel-${step.id}`}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => navigate(event, index)}
                >
                  <span
                    className="process-plus tw:text-copper"
                    aria-hidden="true"
                  >
                    {open ? '−' : '+'}
                  </span>
                  <span className="process-step-number tw:text-copper">
                    0{index + 1}
                  </span>
                  <span className="process-step-name tw:uppercase">
                    {step.title}
                  </span>
                </button>
              </h3>
              <div
                id={`process-panel-${step.id}`}
                className="process-panel tw:absolute tw:overflow-hidden"
                aria-hidden={!open}
                inert={!open}
              >
                <div className="process-panel-inner">
                  <ResponsiveImage {...step.images} />
                  <p className="process-panel-description tw:absolute tw:w-[1px] tw:h-[1px] tw:overflow-hidden">
                    {step.text}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
