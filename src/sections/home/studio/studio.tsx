import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/animations/reveal';
import { Arrow } from '@/components/ui/arrow';
import { DemoNote } from '@/components/ui/demo-note';
import pattern from '@/assets/images/shared/ariyana-demo/pattern.avif';
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
            Por dentro <i>da</i> Traço
          </span>
          <StudioTitle />
          <Link href="/sobre" className="pill-link">
            Saiba mais <Arrow />
          </Link>
        </Reveal>
        <Image
          src={pattern}
          alt="Composição geométrica em branco, vermelho e laranja"
          className="studio-pattern"
        />
      </div>
      <div className="studio-demo">
        <DemoNote>
          Histórico demonstrativo do Ariyana — imagens de ambientes da Traço.
        </DemoNote>
      </div>
      <StudioPanels />
    </section>
  );
}
