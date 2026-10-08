import { DemoNote } from '@/components/ui/demo-note';
import './trust.css';
export function Trust() {
  return (
    <section className="trust" id="marcas" aria-label="O cuidado Fritz">
      <div className="trust-grid">
        <div className="trust-ticker" aria-hidden="true">
          <div>
            {[0, 1, 2].map((n) => (
              <span key={n}>
                Cuidado em cada detalhe <i>✳</i>
              </span>
            ))}
          </div>
        </div>
        <div className="trust-quote">
          <blockquote>
            Cada tecido pede um cuidado. A avaliação da peça é o ponto de
            partida para indicar a limpeza e a proteção adequadas.
          </blockquote>
          <p>
            <strong>Fritz Higienização</strong>
            <br />
            Joinville e região
          </p>
        </div>
        {[
          'Sofás',
          'Tapetes',
          'Colchões',
          'Poltronas',
          'Impermeabilização',
          'Cadeiras',
        ].map((label, index) => (
          <div className={`trust-logo trust-logo-${index}`} key={label}>
            <strong>{label}</strong>
          </div>
        ))}
      </div>
      <DemoNote>
        Consulte o serviço indicado para sua peça pelo WhatsApp.
      </DemoNote>
    </section>
  );
}
