import type { Metadata } from 'next';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
import { BlogListing } from '@/sections/blog/listing/blog-listing';
import { Contact } from '@/sections/home/contact/contact';
export const metadata: Metadata = {
  title: 'Blog — Traço',
  alternates: { canonical: '/blog' },
};
export default function BlogPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper"
      tabIndex={-1}
    >
      <PageOpening
        caption="Leia nossos artigos"
        title="Ideias e perspectivas para criar novas experiências."
      />
      <BlogListing />
      <Contact />
    </main>
  );
}
