import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/animations/reveal';
import { Arrow } from '@/components/ui/arrow';
import { DemoNote } from '@/components/ui/demo-note';
import fritzLogo from '@/assets/images/shared/fritz/fritz-mark.png';
import { StudioPanels } from './studio-panels';
import { StudioTitle } from './studio-title';
import './studio.css';
export function Studio() {
  return (
    <section
      id="estudio"
      className="studio"
      aria-labelledby="studio-title"
      tabIndex={-1}
    >
      <div className="studio-intro section tw:flex">
        <Reveal>
          <span className="section-kicker">
            Conheça <i>a</i> Fritz
          </span>
          <StudioTitle />
          <Link href="/sobre" className="pill-link">
            Conheça a Fritz <Arrow />
          </Link>
        </Reveal>
        <Image
          src={fritzLogo}
          alt="Logo da Fritz Higienização e Impermeabilização"
          className="studio-pattern"
          sizes="(min-width: 992px) 27vw, 1px"
        />
      </div>
      <div className="studio-demo">
        <DemoNote>
          Conheça os serviços. As imagens são ilustrativas e não representam
          antes e depois.
        </DemoNote>
      </div>
      <StudioPanels />
    </section>
  );
}
