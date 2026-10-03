import { ProcessAccordion } from './process-accordion';
import './process.css';
export function Process() {
  return (
    <section
      className="section process"
      id="processo"
      aria-labelledby="process-title"
    >
      <div className="section-heading">
        <span className="eyebrow section-label">O processo</span>
        <h2 id="process-title">Tudo começa com um olhar.</h2>
        <p className="process-introduction">
          Da primeira conversa aos últimos detalhes, cada escolha parte da sua
          forma de viver.
        </p>
      </div>
      <ProcessAccordion />
      <p className="process-credit">
        Estudos conceituais · Imagens geradas por IA
      </p>
    </section>
  );
}
