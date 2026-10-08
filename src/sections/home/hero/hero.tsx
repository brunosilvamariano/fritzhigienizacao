'use client';

import { WhatsAppLink } from '@/components/ui/whatsapp-link';

import { ResponsiveImage } from '@/components/media/responsive-image';
import { Reveal } from '@/animations/reveal';
import { heroSlides } from './hero.slides';
import { useHeroCarousel } from './use-hero-carousel';
import { heroContent } from './hero.content';
import './hero.css';

export function Hero() {
  const carousel = useHeroCarousel(heroSlides.length);
  const current = heroSlides[carousel.active];
  return (
    <section
      className="hero tw:grid tw:relative"
      aria-labelledby="hero-title"
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') carousel.setHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') carousel.setHovered(false);
      }}
      onFocusCapture={() => carousel.setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          carousel.setFocused(false);
      }}
    >
      <div className="hero-copy tw:bg-paper tw:text-ink">
        <span className="eyebrow tw:uppercase tw:text-accent">
          {heroContent.eyebrow}
        </span>
        <h1 id="hero-title">
          {heroContent.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero-description tw:max-w-[265px] tw:mb-[30px]">
          {heroContent.description}
        </p>
        <WhatsAppLink className="button tw:min-h-[52px] tw:bg-ink tw:text-paper tw:inline-flex tw:justify-between tw:items-center tw:gap-[35px]">
          {heroContent.cta}
        </WhatsAppLink>
        <div className="hero-index tw:mt-[38px] tw:uppercase tw:max-w-[250px]">
          <div className="index-heading tw:flex tw:justify-between tw:items-center tw:gap-[14px]">
            <span
              aria-live={carousel.stopped ? 'polite' : 'off'}
              aria-atomic="true"
            >
              {String(carousel.active + 1).padStart(2, '0')} — {current.label}
            </span>
            {!carousel.reduced && (
              <button
                type="button"
                className="rotation-toggle tw:min-h-[28px] tw:text-muted"
                onClick={carousel.togglePause}
                aria-label={
                  carousel.paused
                    ? 'Retomar troca automática'
                    : 'Pausar troca automática'
                }
              >
                {carousel.paused ? 'Retomar' : 'Pausar'}
              </button>
            )}
          </div>
          <div className="slide-selectors tw:flex tw:gap-[3px]">
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                key={slide.label}
                className="slide-selector tw:flex tw:items-center tw:h-[36px]"
                aria-label={`Mostrar ${slide.label}`}
                aria-pressed={carousel.active === index}
                onClick={() => carousel.choose(index)}
              >
                <span className="slide-track tw:block tw:relative tw:w-full tw:h-[1px]">
                  {carousel.active === index && (
                    <i
                      key={`${carousel.restart}-${carousel.stopped}`}
                      className={
                        carousel.stopped
                          ? 'slide-progress tw:block tw:absolute tw:w-full tw:h-[2px] tw:bg-copper is-stopped'
                          : 'slide-progress tw:block tw:absolute tw:w-full tw:h-[2px] tw:bg-copper'
                      }
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <figure
        className="hero-visual tw:relative tw:overflow-hidden tw:min-h-[790px] carousel-visual"
        aria-label="Ambientes planejados"
        aria-roledescription="carrossel"
        onPointerDown={carousel.pointerDown}
        onPointerUp={carousel.pointerUp}
        onPointerCancel={carousel.cancel}
        onLostPointerCapture={carousel.cancel}
        onDragStart={(event) => event.preventDefault()}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.label}
            className={
              carousel.active === index
                ? 'hero-slide tw:absolute is-active'
                : 'hero-slide tw:absolute'
            }
            aria-hidden={carousel.active !== index}
          >
            {carousel.shouldRenderImage(index) && (
              <ResponsiveImage
                {...slide.images}
                eager={index === 0}
                onLoad={() => carousel.loaded(index)}
              />
            )}
          </div>
        ))}
        <figcaption className="image-annotation tw:absolute tw:uppercase tw:text-taupe tw:flex tw:gap-[15px] tw:items-center">
          Estudo de ambiente / {String(carousel.active + 1).padStart(2, '0')}{' '}
          <span />
        </figcaption>
        <span className="image-credit tw:absolute">
          Traço · Madeira, luz e proporção
        </span>
      </figure>
      <Reveal className="hero-continuation tw:bg-paper tw:text-ink">
        <span className="eyebrow tw:uppercase tw:text-accent">
          A matéria como ponto de partida
        </span>
        <h2>
          Detalhes que
          <br />
          mudam o todo.
        </h2>
        <p>
          Textura, luz e proporção.
          <br />O essencial encontra seu lugar.
        </p>
      </Reveal>
      <div className="material-note tw:absolute tw:bg-ink tw:text-taupe tw:flex tw:gap-[12px] tw:items-center">
        <span
          className="material-swatch tw:w-[34px] tw:h-[44px]"
          aria-hidden="true"
        />
        <span>
          01 / Carvalho natural
          <br />
          <small>Textura e precisão</small>
        </span>
      </div>
    </section>
  );
}
