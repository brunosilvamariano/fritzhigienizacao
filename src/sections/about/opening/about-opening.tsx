import Image from 'next/image';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { projects } from '@/content/projects';

import { DemoNote } from '@/components/ui/demo-note';
import {
  googleReviews,
  googleBusiness,
  googleLogo,
} from '@/content/google-reviews';
import './about-opening.css';
export function AboutOpening() {
  return (
    <PageOpening
      id="about-title"
      caption="Sobre a Fritz"
      title={
        <>
          Cuidado para os estofados que fazem{' '}
          <span className="reference-inline-image">
            <ResponsiveImage
              {...projects[0].images.detalhe}
              alt={`${projects[0].category} — imagem ilustrativa`}
              sizes="150px"
            />
          </span>
          parte da sua vida.
        </>
      }
    >
      <div className="about-review">
        <div>
          {googleReviews.slice(0, 3).map((item) => (
            <Image
              key={item.name}
              src={item.image}
              alt={`Foto pública de ${item.name} no Google`}
              width={56}
              height={56}
            />
          ))}
        </div>
        <strong>{googleBusiness.rating}</strong>
        <span>
          <span className="about-review-google">
            <Image
              className="google-review-logo"
              src={googleLogo}
              alt=""
              width={28}
              height={28}
            />
            Google
          </span>
          <i role="img" aria-label="5 de 5 estrelas">
            ★★★★★
          </i>
          <br />
          <a
            href={googleBusiness.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {googleBusiness.reviewCount} avaliações no Google ↗
          </a>
        </span>
      </div>
      <DemoNote>
        {`Dados conferidos no Google em ${googleBusiness.checkedAt}.`}
      </DemoNote>
    </PageOpening>
  );
}
