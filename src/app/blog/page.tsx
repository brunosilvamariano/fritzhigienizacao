import { withSocialMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { BlogListing } from '@/sections/blog/listing/blog-listing';
import { Contact } from '@/sections/home/contact/contact';
export const metadata: Metadata = withSocialMetadata({
  title: 'Dicas de cuidado com estofados',
  description:
    'Orientações sobre higienização, impermeabilização, secagem e limpeza de tapetes. Prepare sua conversa com a Fritz.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Dicas de cuidado com estofados | Fritz',
    description:
      'Orientações sobre higienização, impermeabilização, secagem e limpeza de tapetes. Prepare sua conversa com a Fritz.',
    url: '/blog',
  },
});
export default function BlogPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper"
      tabIndex={-1}
    >
      <PageOpening
        caption="Dicas de cuidado"
        title="Informação para cuidar melhor dos seus estofados."
      />
      <BlogListing />
      <Contact />
    </main>
  );
}
