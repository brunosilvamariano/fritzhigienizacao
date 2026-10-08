import Link from 'next/link';
import { articles } from '@/content/articles';
import { projects } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
import './blog-listing.css';
export function BlogListing() {
  return (
    <section className="blog-listing section" aria-label="Dicas de cuidado">
      <DemoNote>
        Informações para escolher o cuidado da sua peça e preparar o
        atendimento.
      </DemoNote>
      {articles.map((article, index) => (
        <article key={article.slug} className="blog-row">
          <time>{article.date}</time>
          <div className="blog-row-right">
            <Link href={`/blog/${article.slug}`} className="blog-row-image">
              <ResponsiveImage
                {...projects[index].images.meio}
                alt="Imagem ilustrativa de higienização de estofados e tapetes."
                sizes="65vw"
              />
            </Link>
            <div className="blog-row-copy">
              <Link href={`/blog/${article.slug}`}>
                <h2>{article.title}</h2>
              </Link>
              <Link className="pill-link" href={`/blog/${article.slug}`}>
                Ler orientação ↗
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
