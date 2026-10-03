import { Reveal } from '@/animations/reveal';
import './process.css';
const steps = [
  {
    title: 'Escutar',
    text: 'Entender hábitos, desejos e as possibilidades de cada espaço.',
  },
  {
    title: 'Desenhar',
    text: 'Traduzir a rotina em proporções, materiais e soluções sob medida.',
  },
  {
    title: 'Dar forma',
    text: 'Pensar cada encontro, acabamento e detalhe como parte do todo.',
  },
];
export function Process() {
  return (
    <section
      className="section process"
      id="processo"
      aria-labelledby="process-title"
    >
      <Reveal className="section-heading">
        <span className="eyebrow">Do primeiro traço ao último detalhe</span>
        <h2 id="process-title">
          Tudo começa
          <br />
          com um olhar.
        </h2>
      </Reveal>
      <div className="process-steps">
        {steps.map((step, index) => (
          <article key={step.title}>
            <span className="eyebrow">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
