import type { Metadata } from 'next';
import { ProjectGallery } from '@/sections/projects/gallery/project-gallery';
import { Contact } from '@/sections/home/contact/contact';

export const metadata: Metadata = {
  title: 'Projetos — Coleção de ambientes',
  description:
    'Explore seis estudos conceituais de móveis planejados: cozinhas, quarto, sala, banheiro e escritório em carvalho e travertino.',
  alternates: { canonical: '/projetos' },
  openGraph: {
    title: 'Coleção de ambientes — Traço',
    description:
      'Madeira, luz e proporção em seis estudos conceituais de marcenaria.',
    url: '/projetos',
  },
};
export default function ProjectsPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper projects-page"
      tabIndex={-1}
    >
      <ProjectGallery />
      <Contact />
    </main>
  );
}
