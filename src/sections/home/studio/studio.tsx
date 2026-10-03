import { Arrow } from '@/components/ui/arrow';
import './studio.css';
export function Studio() {
  return (
    <section
      className="section studio"
      id="estudio"
      aria-labelledby="studio-title"
    >
      <span className="eyebrow">Sobre este projeto</span>
      <h2 id="studio-title">
        Uma ideia de morar.
        <br />
        Um estudo de design.
      </h2>
      <p>
        Traço é uma marca fictícia criada para explorar a experiência digital de
        um estúdio de móveis planejados. As imagens são estudos gerados por
        inteligência artificial e não representam obras executadas.
      </p>
      <a href="#inicio" className="text-link">
        Voltar ao primeiro traço <Arrow />
      </a>
    </section>
  );
}
