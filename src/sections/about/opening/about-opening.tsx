import { ResponsiveImage } from '@/components/media/responsive-image';
import { aboutImages } from '../about.images';
import { OpeningMotion } from './opening-motion';
import './about-opening.css';

export function AboutOpening() {
  return (
    <section className="about-opening" aria-labelledby="about-title">
      <OpeningMotion>
        <div className="about-opening-photo">
          <ResponsiveImage {...aboutImages.kitchen} eager sizes="100vw" />
        </div>
        <div className="about-opening-copy">
          <span className="eyebrow">Sobre a Traço</span>
          <h1 id="about-title">
            Um olhar atento.
            <br />
            Um espaço com sentido.
          </h1>
          <p>
            Entre o desenho e a matéria, um lugar que acompanha o seu jeito de
            viver.
          </p>
          <div className="about-opening-note">
            <span>Madeira, luz e proporção.</span>
            <span aria-hidden="true">↓</span>
          </div>
        </div>
        <div className="about-opening-overlay">
          <p>
            <span>Enxergar o espaço como um todo.</span>
            <br />E encontrar cuidado em cada detalhe.
          </p>
        </div>
        <span className="about-opening-credit">
          Carvalho natural · Travertino · Luz
        </span>
      </OpeningMotion>
    </section>
  );
}
