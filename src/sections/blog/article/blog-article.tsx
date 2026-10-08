import type { articles } from '@/content/articles';
import { projects } from '@/content/projects';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
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
          Orientações gerais de cuidado. Imagens ilustrativas dos serviços.
        </DemoNote>
      </header>
      <div className="blog-article-image">
        <ResponsiveImage
          {...projects[index].images.capa}
          alt="Imagem ilustrativa de higienização de estofados e tapetes."
          eager
          sizes="90vw"
        />
      </div>
      <div className="blog-richtext">
        <h2>O que você precisa saber</h2>
        <p>{article.summary}</p>
        <p>{article.body}</p>
        <h2>Atenção à sua peça</h2>
        <p>{article.detail}</p>
        <blockquote>{article.tip}</blockquote>
        <h2>Orientação antes do atendimento</h2>
        <p>{article.closing}</p>
        <div className="blog-article-secondary">
          <ResponsiveImage
            {...projects[index].images.detalhe}
            alt="Imagem ilustrativa de higienização de estofados e tapetes."
            sizes="70vw"
          />
        </div>
        <h2>Converse com a Fritz</h2>
        <p>
          Envie fotos, a quantidade de peças e sua localização para solicitar
          uma avaliação e consultar a agenda.
        </p>
        <WhatsAppLink context="higienização ou impermeabilização. Li as dicas e quero consultar o serviço">
          Solicitar orçamento
        </WhatsAppLink>
      </div>
    </article>
  );
}
