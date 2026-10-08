import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { ProjectDetail } from '@/sections/projects/detail/project-detail';
import { ProjectContact } from '@/sections/projects/contact/project-contact';

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: 'Projeto não encontrado' };
  return {
    title: `${project.title} — ${project.category}`,
    description: `${project.introduction} Estudo conceitual de marcenaria da Traço.`,
    alternates: { canonical: `/projetos/${slug}` },
    openGraph: {
      title: `${project.title} — Traço`,
      description: project.introduction,
      url: `/projetos/${slug}`,
      images: [
        {
          url: project.images.capa.desktop.src,
          width: 2048,
          height: 1365,
          alt: `${project.category} em carvalho e travertino`,
        },
      ],
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper project-page"
      tabIndex={-1}
    >
      <ProjectDetail
        project={project}
        next={projects[(index + 1) % projects.length]}
      />
      <ProjectContact
        context={`um ambiente inspirado no estudo ${project.title}`}
      />
    </main>
  );
}
