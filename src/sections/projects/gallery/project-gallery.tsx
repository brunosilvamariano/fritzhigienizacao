import Link from 'next/link';
import { projects, projectPath } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import './project-gallery.css';
export function ProjectGallery() {
  return (
    <>
      <PageOpening
        id="collection-title"
        caption="Conheça os cuidados"
        title="Limpeza e proteção para as peças da sua casa."
      >
        <Link className="pill-link" href="/contato">
          Solicitar orçamento ↗
        </Link>
      </PageOpening>
      <div className="project-ticker" aria-hidden="true">
        <div>
          {[0, 1, 2].map((n) => (
            <span key={n}>Sofás ✳ Tapetes ✳ Colchões ✳ </span>
          ))}
        </div>
      </div>
      <div
        className="reference-divider reference-divider-orange"
        aria-hidden="true"
      >
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <section
        className="project-collection section"
        aria-labelledby="collection-heading"
      >
        <div className="reference-heading">
          <h2 id="collection-heading">Serviços para cada peça</h2>
          <span className="reference-badge">Higienização e proteção</span>
        </div>
        <div className="collection-grid">
          {projects.map((project, index) => (
            <article key={project.slug} className="collection-item">
              <Link className="project-card-image" href={projectPath(project)}>
                <ResponsiveImage
                  {...project.images.capa}
                  alt="Imagem ilustrativa de higienização de estofados e tapetes."
                  eager={index === 0}
                  sizes="(min-width:768px) 43vw,100vw"
                />
              </Link>
              <div className="project-card-caption">
                <Link href={projectPath(project)}>
                  <h3>
                    {project.title} — {project.category}
                  </h3>
                </Link>
                <div className="project-card-tags">
                  {project.features.slice(0, 2).map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
                <small className="demo-note">
                  Imagem ilustrativa do serviço
                </small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
