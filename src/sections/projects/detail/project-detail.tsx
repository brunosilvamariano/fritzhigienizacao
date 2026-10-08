import { type Project, projectPath } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { Reveal } from '@/animations/reveal';
import { Arrow } from '@/components/ui/arrow';
import './project-detail.css';

export function ProjectDetail({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const views = [
    {
      kind: 'angulo' as const,
      label: 'O conjunto',
      text: 'Uma nova perspectiva sobre as proporções do ambiente.',
    },
    {
      kind: 'meio' as const,
      label: 'O uso',
      text: 'Organização e marcenaria no ritmo do cotidiano.',
    },
    {
      kind: 'detalhe' as const,
      label: 'O encontro dos materiais',
      text: 'Veios do carvalho, poros do travertino e precisão nas juntas.',
    },
  ];
  return (
    <>
      <header className="project-opening tw:max-w-[1280px] tw:mx-auto">
        <a
          className="project-back text-link tw:inline-flex tw:items-center tw:gap-[22px] tw:py-[9px]"
          href="/projetos"
        >
          <span aria-hidden="true">←</span> Todos os projetos
        </a>
        <div className="project-title-row tw:flex tw:justify-between tw:gap-[24px] tw:pt-[28px]">
          <div>
            <span className="eyebrow tw:uppercase tw:text-accent">
              {project.category} / {project.id}
            </span>
            <h1>
              {project.title}
              <span>.</span>
            </h1>
          </div>
          <span className="project-status tw:pb-[12px]">Estudo conceitual</span>
        </div>
      </header>
      <figure className="project-cover tw:max-w-[1120px] tw:mx-auto tw:max-h-[560px] tw:overflow-hidden">
        <ResponsiveImage
          {...project.images.capa}
          alt={
            project.category +
            ' em carvalho e travertino — vista geral do estudo ' +
            project.title
          }
          eager
          sizes="(min-width: 1280px) 1120px, 90vw"
        />
      </figure>
      <section
        className="project-description tw:max-w-[1280px] tw:mx-auto"
        aria-labelledby="project-description-title"
      >
        <Reveal className="project-description-inner tw:grid">
          <div>
            <span className="eyebrow tw:uppercase tw:text-accent section-label tw:inline-flex tw:items-center tw:gap-[12px]">
              O olhar sobre o ambiente
            </span>
            <h2 id="project-description-title">{project.introduction}</h2>
          </div>
          <div className="project-description-copy">
            <p>{project.description}</p>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="project-concept-note">
              Estudo visual conceitual para explorar materiais, proporções e
              possibilidades de marcenaria.
            </p>
          </div>
        </Reveal>
      </section>
      <section
        className="project-views tw:max-w-[1280px] tw:mx-auto tw:grid tw:grid-cols-1 tw:min-[768px]:grid-cols-2"
        aria-label={`Outras perspectivas de ${project.title}`}
      >
        {views.map((view) => (
          <Reveal
            className={`project-view project-view--${view.kind}`}
            key={view.kind}
          >
            <figure>
              <div className="project-view-image tw:overflow-hidden">
                <ResponsiveImage
                  {...project.images[view.kind]}
                  alt={
                    project.category +
                    ' — ' +
                    view.label.toLowerCase() +
                    ', estudo ' +
                    project.title
                  }
                  sizes={
                    view.kind === 'angulo'
                      ? '(min-width: 1280px) 1140px, 90vw'
                      : '(min-width: 1280px) 560px, (min-width: 768px) 43vw, 100vw'
                  }
                />
              </div>
              <figcaption>
                <div>
                  <span className="eyebrow tw:uppercase tw:text-accent">
                    {view.label}
                  </span>
                  <p>{view.text}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </section>
      <nav
        className="project-pagination tw:max-w-[1120px] tw:flex tw:items-center tw:justify-between tw:gap-[32px] tw:mx-auto"
        aria-label="Navegação da coleção"
      >
        <a
          href="/projetos"
          className="text-link tw:inline-flex tw:items-center tw:gap-[22px] tw:py-[9px]"
        >
          <span aria-hidden="true">←</span> Todos os projetos
        </a>
        <a
          href={projectPath(next)}
          className="project-next-link tw:flex tw:items-center tw:justify-between tw:gap-[24px] tw:min-h-[64px]"
        >
          <div>
            <span className="project-next-category tw:block">
              Próximo projeto
            </span>
            <span className="project-next-title tw:block tw:mt-[8px]">
              {next.category}
            </span>
          </div>
          <Arrow />
        </a>
      </nav>
    </>
  );
}
