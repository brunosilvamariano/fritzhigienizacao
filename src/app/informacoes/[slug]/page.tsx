import { notFound } from 'next/navigation';
import { PageOpening } from '@/components/layout/page-opening/page-opening';
const pages = {
  estilos: {
    title: 'Guia de estilos',
    text: 'Bebas Neue nos títulos e DM Sans no corpo. Branco, preto, laranja, vermelho e tons de apoio acompanham a linguagem visual da referência Ariyana.',
  },
  licencas: {
    title: 'Licenças e origens',
    text: 'Bebas Neue e DM Sans são distribuídas sob SIL Open Font License, incluída junto aos arquivos locais. Imagens de higienização incluem arquivos do projeto Fritz e cenas ilustrativas geradas com autorização. Os recursos identificados como demonstração têm origem no template Ariyana Studio, utilizado como referência visual.',
  },
  alteracoes: {
    title: 'Registro de alterações',
    text: '8 de outubro de 2026: adaptação editorial para Fritz Higienização e Impermeabilização, mantendo as seções e animações existentes. Contatos, serviços e cidades atendidas foram consultados no projeto original da Fritz.',
  },
} as const;
export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export default async function Information({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(slug in pages)) notFound();
  const page = pages[slug as keyof typeof pages];
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper"
      tabIndex={-1}
    >
      <PageOpening caption="Informações da Fritz" title={page.title} />
      <section className="section tw:max-w-[1000px] tw:mx-auto tw:text-[20px] tw:leading-relaxed">
        <p>{page.text}</p>
      </section>
    </main>
  );
}
