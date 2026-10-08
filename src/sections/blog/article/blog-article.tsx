import type { articles } from '@/content/articles';
import { projects } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
import './blog-article.css';
export function BlogArticle({
  article,
  index,
}: {
  article: (typeof articles)[number];
  index: number;
}) {
  return (
    <article className="blog-article section">
      <header>
        <span className="section-kicker">{article.date}</span>
        <h1>{article.title}</h1>
        <DemoNote>
          Resumo demonstrativo do artigo da referência Ariyana. Imagens da
          coleção Traço.
        </DemoNote>
      </header>
      <div className="blog-article-image">
        <ResponsiveImage
          {...projects[index].images.capa}
          alt={`${projects[index].category} — estudo conceitual`}
          eager
          sizes="90vw"
        />
      </div>
      <div className="blog-richtext">
        <h2>Um olhar sobre a criação</h2>
        <p>{article.summary}</p>
        <h2>Qualidade e intenção</h2>
        <p>
          A referência discute um trabalho criativo atento ao contexto, à
          identidade e à experiência das pessoas. A apresentação visual une
          tipografia marcante, composição e movimento.
        </p>
        <blockquote>
          Criar uma experiência começa por compreender quem vai usá-la.
        </blockquote>
        <h2>Dentro do tema</h2>
        <p>
          Este resumo ocupa a estrutura editorial do artigo para demonstrar a
          composição da página. O texto definitivo da Traço poderá ser incluído
          nesta mesma estrutura.
        </p>
        <div className="blog-article-secondary">
          <ResponsiveImage
            {...projects[index].images.detalhe}
            alt={`${projects[index].category} — estudo conceitual`}
            sizes="70vw"
          />
        </div>
        <h2>Ideias que ganham forma</h2>
        <p>
          O objetivo da demonstração é mostrar como título, imagens, texto e
          destaques convivem na leitura, mantendo a linguagem visual da
          referência.
        </p>
      </div>
    </article>
  );
}
