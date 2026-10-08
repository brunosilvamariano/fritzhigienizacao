import Link from 'next/link';
import { whatsappUrl } from '@/config/contact';
import { type Project, projectPath } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
import './project-detail.css';
export function ProjectDetail({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  return (
    <>
      <section className="project-opening section">
        <div className="project-tags">
          {project.features.slice(0, 2).map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
        <h1>
          {project.title} — {project.category}
        </h1>
        <div className="project-meta">
          <div>
            <strong>Serviço</strong>
            <p>{project.title}</p>
          </div>
          <div>
            <strong>Peça</strong>
            <p>{project.category}</p>
          </div>
          <div>
            <strong>Atendimento</strong>
            <p>Joinville e região</p>
          </div>
          <div>
            <strong>Tipo</strong>
            <p>Avaliação do tecido</p>
          </div>
          <Link
            className="pill-link"
            href={whatsappUrl(
              `${project.title.toLowerCase()} de ${project.category.toLowerCase()}`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar orçamento ↗
          </Link>
        </div>
        <div className="project-cover">
          <ResponsiveImage
            {...project.images.capa}
            alt="Imagem ilustrativa de higienização de estofados e tapetes."
            eager
            sizes="90vw"
          />
        </div>
      </section>
      <section className="project-story section">
        <h2>O cuidado indicado</h2>
        <div>
          <p className="project-lead">{project.introduction}</p>
          <p>{project.description}</p>
        </div>
      </section>
      <section
        className="project-showcase section"
        aria-label="Imagens ilustrativas do serviço"
      >
        <div>
          <ResponsiveImage
            {...project.images.angulo}
            alt="Imagem ilustrativa de higienização de estofados e tapetes."
            sizes="43vw"
          />
        </div>
        <div>
          <ResponsiveImage
            {...project.images.meio}
            alt="Imagem ilustrativa de higienização de estofados e tapetes."
            sizes="43vw"
          />
        </div>
      </section>
      <section className="project-overview section">
        <div>
          <h2>Antes de agendar</h2>
          <p>{project.description}</p>
          <DemoNote>
            Informe as características da peça para receber uma orientação
            adequada.
          </DemoNote>
        </div>
        <div className="project-overview-stats">
          {[
            { value: '01', label: 'Envie fotos da peça' },
            { value: '02', label: 'Informe a quantidade' },
            { value: '03', label: 'Conte sua cidade e bairro' },
            { value: '04', label: 'Combine a data com a equipe' },
          ].map((item) => (
            <div key={item.value}>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="project-quote section"
        aria-label="Cuidado com seus estofados"
      >
        <p>
          Cuidado
          <br />
          para as peças
          <br />
          que fazem
          <br />
          parte do seu lar
        </p>
      </section>
      <section className="project-result section">
        <div>
          <h2>Cuidados e orientações</h2>
          <p>{project.description}</p>
        </div>
        <div className="project-result-gallery">
          {(['capa', 'angulo', 'detalhe'] as const).map((view) => (
            <div key={view}>
              <ResponsiveImage
                {...project.images[view]}
                alt="Imagem ilustrativa de higienização de estofados e tapetes."
                sizes="50vw"
              />
            </div>
          ))}
        </div>
        <Link className="pill-link" href={projectPath(next)}>
          Conheça também: {next.title} ↗
        </Link>
      </section>
    </>
  );
}
