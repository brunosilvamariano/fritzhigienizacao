import { withSocialMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { ProjectGallery } from '@/sections/projects/gallery/project-gallery';
import { Contact } from '@/sections/home/contact/contact';

export const metadata: Metadata = withSocialMetadata({
  title: 'Cuidados para sofás, tapetes e estofados',
  description:
    'Conheça os cuidados da Fritz para sofás, tapetes, colchões, poltronas e cadeiras em Joinville e região. Imagens ilustrativas dos serviços.',
  alternates: { canonical: '/projetos' },
  openGraph: {
    title: 'Cuidados para sofás, tapetes e estofados | Fritz',
    description:
      'Conheça os cuidados da Fritz para sofás, tapetes, colchões, poltronas e cadeiras em Joinville e região. Imagens ilustrativas dos serviços.',
    url: '/projetos',
  },
});
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
