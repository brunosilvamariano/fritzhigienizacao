import { ResponsiveImage } from '@/components/media/responsive-image';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { Reveal } from '@/animations/reveal';
import { aboutImages } from '../about.images';
import './about-story.css';

export function AboutStory() {
  return (
    <section className="about-story" aria-labelledby="about-story-title">
      <div className="about-story-grid">
        <Reveal className="about-story-collage">
          <figure className="about-story-living">
            <ResponsiveImage
              {...aboutImages.living}
              sizes="(min-width: 1024px) 28vw, 60vw"
            />
          </figure>
          <figure className="about-story-kitchen">
            <ResponsiveImage
              {...aboutImages.kitchen}
              sizes="(min-width: 1024px) 22vw, 50vw"
            />
          </figure>
          <figure className="about-story-detail">
            <ResponsiveImage
              {...aboutImages.detail}
              sizes="(min-width: 1024px) 24vw, 60vw"
            />
          </figure>
          <span className="about-story-vertical" aria-hidden="true">
            Madeira · Luz · Proporção
          </span>
        </Reveal>
        <Reveal className="about-story-copy">
          <span className="eyebrow">O olhar da Traço</span>
          <h2 id="about-story-title">
            Seu jeito de viver.
            <br />
            Nosso ponto de partida.
          </h2>
          <p>
            Uma bancada que aproxima. Um armário que organiza. Uma textura que
            acolhe. O olhar da Traço reúne marcenaria, luz e proporção para
            pensar o espaço como um todo.
          </p>
          <p>
            Da primeira ideia aos encontros entre madeira e pedra, o cuidado
            está nas escolhas que dão sentido ao morar.
          </p>
          <WhatsAppLink context="o olhar da Traço e um projeto para meu espaço">
            Conversar com a Traço
          </WhatsAppLink>
        </Reveal>
      </div>
      <div className="about-story-base">
        <span className="about-story-wordmark" aria-hidden="true">
          Nosso traço.
        </span>
        <p>
          Madeira, luz e proporção.
          <br />
          Texturas que dão sentido ao morar.
        </p>
      </div>
    </section>
  );
}
