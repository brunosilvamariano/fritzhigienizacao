import { ResponsiveImage } from '@/components/media/responsive-image';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { Reveal } from '@/animations/reveal';
import { aboutImages } from '../about.images';
import './about-story.css';
export function AboutStory() {
  return (
    <section
      className="about-story section"
      aria-labelledby="about-story-title"
    >
      <figure className="about-story-photo">
        <ResponsiveImage {...aboutImages.living} sizes="90vw" />
      </figure>
      <div className="about-story-grid tw:grid">
        <Reveal>
          <span className="section-kicker">O cuidado Fritz</span>
          <h2 id="about-story-title">
            Sua peça.
            <br />
            Nosso ponto de partida.
          </h2>
        </Reveal>
        <Reveal className="about-story-copy">
          <p>
            A limpeza e a proteção começam pela avaliação do tecido e das
            condições da peça. Conte à Fritz quais estofados precisam de
            cuidado.
          </p>
          <p>
            Envie fotos e sua localização para receber orientação sobre o
            serviço e consultar a disponibilidade de atendimento.
          </p>
          <WhatsAppLink context="higienização ou impermeabilização do meu estofado">
            Consultar agenda
          </WhatsAppLink>
        </Reveal>
      </div>
      <div className="about-story-material-grid tw:grid">
        <figure>
          <ResponsiveImage
            {...aboutImages.kitchen}
            sizes="(min-width:768px) 44vw, 100vw"
          />
          <figcaption>Avaliar o tecido e a peça.</figcaption>
        </figure>
        <figure>
          <ResponsiveImage
            {...aboutImages.detail}
            sizes="(min-width:768px) 44vw, 100vw"
          />
          <figcaption>Encontrar cuidado em cada detalhe.</figcaption>
        </figure>
      </div>
      <div className="about-story-wordmark" aria-hidden="true">
        Cuidado Fritz.
      </div>
    </section>
  );
}
