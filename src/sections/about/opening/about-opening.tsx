import Image from 'next/image';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { projects } from '@/content/projects';
import { demoPortraits } from '@/content/ariyana-demo.images';
import { DemoNote } from '@/components/ui/demo-note';
import './about-opening.css';
export function AboutOpening() {
  return (
    <PageOpening
      id="about-title"
      caption="Por dentro da Traço"
      title={
        <>
          Um estúdio criativo que dá forma{' '}
          <span className="reference-inline-image">
            <ResponsiveImage
              {...projects[0].images.detalhe}
              alt={`${projects[0].category} — estudo conceitual`}
              sizes="150px"
            />
          </span>
          a tudo que acontece no seu espaço.
        </>
      }
    >
      <div className="about-review">
        <div>
          {demoPortraits.slice(0, 3).map((image, index) => (
            <Image
              key={image.src}
              src={image}
              alt={`Retrato demonstrativo ${index + 1}`}
              width={56}
              height={56}
            />
          ))}
        </div>
        <strong>4,9</strong>
        <span>
          <i aria-hidden="true">★★★★★</i>
          <br />
          Avaliação dos clientes
        </span>
      </div>
      <DemoNote>
        Avaliação e retratos demonstrativos da referência Ariyana.
      </DemoNote>
    </PageOpening>
  );
}
