import { TitleReveal } from '@/animations/title-reveal';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { projects } from '@/content/projects';
import { DemoNote } from '@/components/ui/demo-note';
import './services.css';
const services = [
  {
    title: 'Higienização de sofás',
    tags: [
      'Sofás',
      'Poltronas',
      'Assentos',
      'Encostos',
      'Avaliação do tecido',
      'Secagem',
    ],
  },
  {
    title: 'Limpeza de tapetes',
    tags: [
      'Tapetes',
      'Fibras',
      'Medidas',
      'Avaliação da peça',
      'Cuidados',
      'Conservação',
    ],
  },
  {
    title: 'Higienização de colchões',
    tags: [
      'Colchões',
      'Revestimento',
      'Tamanho da peça',
      'Ventilação',
      'Secagem',
      'Cadeiras',
    ],
  },
  {
    title: 'Impermeabilização',
    tags: [
      'Estofados',
      'Proteção do tecido',
      'Compatibilidade',
      'Avaliação',
      'Uso diário',
      'Conservação',
    ],
  },
];
export function Services() {
  return (
    <section
      id="servicos"
      className="services section"
      aria-labelledby="services-title"
      tabIndex={-1}
    >
      <div className="reference-heading">
        <TitleReveal id="services-title" text="Limpeza e proteção" />
        <span className="reference-badge">Joinville e região</span>
        <DemoNote>
          A indicação do serviço depende do tecido e das condições da peça.
        </DemoNote>
      </div>
      <div className="services-list">
        {services.map((item, index) => (
          <article key={item.title} className="service-row tw:flex">
            <div className="service-copy">
              <h3>{item.title}</h3>
              <p>Cuidados e aplicações:</p>
              <div className="service-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="service-image">
              <ResponsiveImage
                eager
                priority="auto"
                unoptimized
                {...projects[[0, 1, 2, 4][index]].images.detalhe}
                alt="Imagem ilustrativa de higienização de estofados e tapetes."
                sizes="(min-width:768px) 40vw,100vw"
              />
              <small>Imagem ilustrativa do serviço</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServicesOpening() {
  return (
    <header className="service-page-opening">
      <div className="service-opening-circle" aria-hidden="true" />
      <div
        className="service-opening-circle service-opening-circle-top"
        aria-hidden="true"
      />
      <div className="service-opening-content">
        <p className="service-opening-caption">
          <span aria-hidden="true" />O cuidado <em>da</em> Fritz
        </p>
        <h1>
          Limpeza de estofados
          <br />e mais{' '}
          <span className="service-opening-photo">
            <ResponsiveImage
              {...projects[1].images.detalhe}
              alt=""
              eager
              unoptimized
              sizes="150px"
            />
          </span>{' '}
          proteção
        </h1>
        <a
          className="service-opening-down"
          href="#apresentacao-servicos"
          aria-label="Assistir ao vídeo de apresentação"
        >
          <span className="tw:sr-only">Assistir ao vídeo de apresentação</span>
          <svg aria-hidden="true" viewBox="0 0 20 40" width="16" height="32">
            <path d="M10 2v32m-6-7 6 7 6-7" fill="none" stroke="currentColor" />
          </svg>
        </a>
      </div>
      <span className="service-opening-triangle" aria-hidden="true" />
    </header>
  );
}
