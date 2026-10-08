import { projects, projectPath } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { Reveal } from '@/animations/reveal';
import { Arrow } from '@/components/ui/arrow';
import './project-gallery.css';

export function ProjectGallery() {
  return (
    <section
      className="project-collection tw:max-w-[1280px] tw:mx-auto"
      aria-labelledby="collection-title"
    >
      <header className="collection-intro tw:grid tw:grid-cols-1 tw:gap-[28px] tw:min-[768px]:grid-cols-[1.5fr_1fr] tw:min-[768px]:gap-[40px]">
        <div>
          <span className="eyebrow tw:uppercase tw:text-accent section-label tw:inline-flex tw:items-center tw:gap-[12px]">
            O espaço, em diferentes traços
          </span>
          <h1 id="collection-title">
            Coleção de
            <br />
            <em>ambientes.</em>
          </h1>
        </div>
        <div className="collection-intro-copy tw:max-w-[320px] tw:pb-[8px]">
          <p>
            Madeira, luz e proporção.
            <br />
            Seis olhares sobre o morar.
          </p>
          <span className="collection-note tw:block tw:mt-[26px]">
            Estudos conceituais de marcenaria
          </span>
        </div>
      </header>
      <div className="collection-divider tw:flex tw:justify-between tw:mb-[26px] tw:uppercase">
        <span>Explore a coleção</span>
        <span>01 — 06</span>
      </div>
      <div className="collection-grid tw:grid tw:grid-cols-1 tw:gap-y-[32px] tw:min-[768px]:grid-cols-2 tw:min-[768px]:gap-y-[40px]">
        {projects.map((project, index) => (
          <Reveal key={project.slug} className="collection-item">
            <a
              className="project-card tw:block"
              href={projectPath(project)}
              aria-labelledby={`project-${project.id}`}
              aria-describedby={`project-note-${project.id}`}
            >
              <div className="project-card-image tw:relative tw:overflow-hidden tw:bg-taupe">
                <ResponsiveImage
                  {...project.images.capa}
                  alt={
                    project.category +
                    ': estudo conceitual em carvalho e travertino'
                  }
                  eager={index === 0}
                  sizes="(min-width: 1280px) 560px, (min-width: 768px) 44vw, 100vw"
                />
                <span
                  className="project-card-open tw:absolute tw:w-[52px] tw:h-[52px] tw:bg-paper tw:grid tw:place-items-center"
                  aria-hidden="true"
                >
                  <Arrow />
                </span>
              </div>
              <div className="project-card-caption tw:pt-[20px]">
                <div>
                  <h2 id={`project-${project.id}`}>{project.category}</h2>
                  <p
                    id={`project-note-${project.id}`}
                    className="project-card-study tw:mt-[10px]"
                  >
                    {project.title} <span aria-hidden="true">·</span> Estudo
                    conceitual
                  </p>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
