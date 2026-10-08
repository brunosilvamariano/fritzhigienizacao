import { ResponsiveImage } from '@/components/media/responsive-image';
import { heroSlides } from './hero.slides';
import { heroContent } from './hero.content';
import { contact } from '@/config/contact';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { InstagramIcon } from '@/components/ui/social-icons';
import { HeroEntrance } from './hero-entrance';
import './hero.css';
function EntranceText({ text }: { text: string }) {
  let offset = 0;
  const words = text.split(' ').map((word) => ({
    id: offset++,
    letters: Array.from(word).map((letter) => ({ letter, id: offset++ })),
  }));
  return words.map(({ id, letters }) => (
    <span key={id} aria-hidden="true">
      <span className="hero-entrance-word">
        {letters.map(({ letter, id: letterId }) => (
          <span className="hero-letter-mask" key={letterId}>
            <span className="hero-letter">{letter}</span>
          </span>
        ))}
      </span>{' '}
    </span>
  ));
}
export function Hero() {
  return (
    <section
      className="hero tw:relative tw:overflow-hidden"
      aria-labelledby="hero-title"
    >
      <HeroEntrance />
      <div className="hero-background" aria-hidden="true">
        <ResponsiveImage {...heroSlides[0].images} alt="" eager sizes="100vw" />
      </div>
      <h1
        id="hero-title"
        className="hero-wordmark"
        aria-label="Higienização de estofados em Joinville — Fritz"
      >
        <EntranceText text="Mais cuidado" />
      </h1>
      <div className="hero-content tw:relative tw:flex">
        <h2 aria-label={heroContent.title.join(' ')}>
          <EntranceText text={heroContent.title.join(' ')} />
        </h2>
        <p className="hero-description">
          <span className="tw:sr-only">{heroContent.description}</span>
          <EntranceText text={heroContent.description} />
        </p>
      </div>
      <div className="hero-bottom tw:relative tw:flex">
        <div className="hero-social">
          <span>Siga-nos</span>
          <i aria-hidden="true" />
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram — abrir em nova aba"
          >
            <InstagramIcon />
          </a>
        </div>
        <div className="hero-stat">
          <span aria-hidden="true">✳</span>
          <div>
            <strong>Joinville</strong>
            <p>e região</p>
            <WhatsAppLink context="higienização ou impermeabilização do meu estofado">
              Solicitar orçamento
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
