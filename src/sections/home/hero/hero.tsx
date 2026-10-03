'use client';
import { Arrow } from '@/components/ui/arrow';
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
      className="hero"
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
      <div className="hero-copy">
        <span className="eyebrow">{heroContent.eyebrow}</span>
        <h1 id="hero-title">
          {heroContent.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero-description">{heroContent.description}</p>
        <a className="button" href="#ambientes">
          {heroContent.cta}
          <Arrow />
        </a>
        <div className="hero-index">
          <div className="index-heading">
            <span aria-live="off">
              {String(carousel.active + 1).padStart(2, '0')} — {current.label}
            </span>
            {!carousel.reduced && (
              <button
                type="button"
                className="rotation-toggle"
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
          <div className="slide-selectors">
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                key={slide.label}
                className="slide-selector"
                aria-label={`Mostrar ${slide.label}`}
                aria-pressed={carousel.active === index}
                onClick={() => carousel.choose(index)}
              >
                <span className="slide-track">
                  {carousel.active === index && (
                    <i
                      key={`${carousel.restart}-${carousel.stopped}`}
                      className={
                        carousel.stopped
                          ? 'slide-progress is-stopped'
                          : 'slide-progress'
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
        className="hero-visual carousel-visual"
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
              carousel.active === index ? 'hero-slide is-active' : 'hero-slide'
            }
            aria-hidden={carousel.active !== index}
          >
            <ResponsiveImage
              {...slide.images}
              eager={index === 0}
              onLoad={() => carousel.loaded(index)}
            />
          </div>
        ))}
        <figcaption className="image-annotation">
          Estudo de ambiente / {String(carousel.active + 1).padStart(2, '0')}{' '}
          <span />
        </figcaption>
        <span className="image-credit">Imagem conceitual gerada por IA</span>
      </figure>
      <Reveal className="hero-continuation">
        <span className="eyebrow">A matéria como ponto de partida</span>
        <h2>
          Detalhes que
          <br />
          mudam o todo.
        </h2>
        <p>
          Textura, luz e proporção.
          <br />O essencial encontra seu lugar.
        </p>
        <a className="text-link" href="#processo">
          Do desenho ao espaço <Arrow />
        </a>
      </Reveal>
      <div className="material-note">
        <span className="material-swatch" aria-hidden="true" />
        <span>
          01 / Carvalho natural
          <br />
          <small>Textura e precisão</small>
        </span>
      </div>
    </section>
  );
}
