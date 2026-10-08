import { TitleReveal } from '@/animations/title-reveal';
import Image from 'next/image';
import {
  googleReviews,
  googleBusiness,
  googleLogo,
} from '@/content/google-reviews';

import './testimonials.css';
export function Testimonials() {
  return (
    <section
      id="avaliacoes"
      className="testimonials section"
      aria-labelledby="testimonials-title"
    >
      <div className="reference-heading">
        <TitleReveal id="testimonials-title" text="O que dizem os clientes" />
        <span className="reference-badge">Avaliações reais no Google</span>
        <p className="demo-note">
          <a
            className="google-reviews-summary"
            href={googleBusiness.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={googleLogo} alt="Google" width={24} height={24} />{' '}
            {googleBusiness.rating} de 5 · {googleBusiness.reviewCount}{' '}
            avaliações · Ver no Google
          </a>
        </p>
      </div>
      <div className="testimonial-cards">
        {googleReviews.map((item) => (
          <article key={item.name} className="testimonial-card">
            <div
              className="testimonial-stars"
              role="img"
              aria-label="5 de 5 estrelas"
            >
              ★★★★★
            </div>
            <div>
              <blockquote>“{item.text}”</blockquote>
              <div className="testimonial-author">
                <Image
                  src={item.image}
                  alt={`Foto pública de ${item.name} no Google`}
                  width={64}
                  height={64}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>Avaliação no Google</p>
                </div>
              </div>
              <a
                className="testimonial-source"
                href={googleBusiness.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ler avaliações no Google ↗
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="demo-note">
        Trechos de avaliações públicas. Nota e quantidade conferidas em{' '}
        {googleBusiness.checkedAt}.
      </p>
    </section>
  );
}
