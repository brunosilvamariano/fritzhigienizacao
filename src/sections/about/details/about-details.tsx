import Image from 'next/image';
import { projects } from '@/content/projects';
import { demoTeam, demoStats, demoWhy } from '@/content/ariyana-demo.team';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
import { HorizontalRail } from '@/components/ui/horizontal-rail';
import './about-details.css';
export function AboutStats() {
  return (
    <section
      className="about-stats section"
      aria-label="Métricas demonstrativas"
    >
      <div className="about-stats-grid">
        <div className="about-stats-photo">
          <ResponsiveImage
            {...projects[5].images.capa}
            alt={`${projects[5].category} — estudo conceitual`}
            sizes="45vw"
          />
        </div>
        {[
          { number: '20+', text: 'Especialistas para atender você' },
          { number: '90M+', text: 'Negócios apoiados em captação de recursos' },
          { number: '100+', text: 'Clientes satisfeitos' },
          { number: '4,9', text: 'Avaliação dos clientes' },
        ].map((item, index) => (
          <article className="about-stats-card" key={item.number}>
            <p>{item.text}</p>
            <strong>{item.number}</strong>
            <Image
              src={demoStats[index]}
              alt=""
              className="about-stats-decoration"
              width={150}
              height={150}
            />
          </article>
        ))}
      </div>
      <DemoNote />
    </section>
  );
}
export function WhyChoose() {
  return (
    <section className="about-why section" aria-labelledby="why-title">
      <div className="about-why-heading">
        <h2 id="why-title">Por que nos escolher</h2>
        <div>
          <h3>Somos os melhores</h3>
          <p>
            A referência apresenta um estúdio que une estratégia, marca e
            criação para apoiar empreendedores e empresas.
          </p>
        </div>
      </div>
      <DemoNote>
        Prazos demonstrativos do Ariyana, sem compromisso comercial da Traço.
      </DemoNote>
      <HorizontalRail>
        {[
          { title: 'Respondemos em', value: '24 horas' },
          { title: 'Proposta em', value: '7 dias' },
          { title: 'Fechamos em', value: '60 dias' },
        ].map((item, index) => (
          <article className="about-why-card" key={item.title}>
            <span>{item.title}</span>
            <h3>{item.value}</h3>
            <Image
              src={demoWhy[index]}
              alt=""
              className="about-why-decoration"
              width={400}
              height={400}
            />
          </article>
        ))}
      </HorizontalRail>
    </section>
  );
}
export function AboutTeam() {
  return (
    <section className="about-team section" aria-labelledby="team-title">
      <div className="reference-heading">
        <h2 id="team-title">Especialistas</h2>
        <span className="reference-badge">20 integrantes</span>
        <DemoNote>Equipe demonstrativa do Ariyana.</DemoNote>
      </div>
      <div className="about-team-grid">
        {[
          { name: 'Alex Newman', role: 'Cofundador e designer principal' },
          { name: 'Leslie Alexander', role: 'Coordenadora de marketing' },
          { name: 'Savannah Nguyen', role: 'Designer web' },
          { name: 'Albert Flores', role: 'Assistente de desenvolvimento' },
        ].map((item, index) => (
          <article key={item.name}>
            <Image
              src={demoTeam[index]}
              alt={`Retrato da equipe demonstrativa: ${item.name}`}
            />
            <h3>{item.name}</h3>
            <p>{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function AboutAwards() {
  return (
    <section className="about-awards section" aria-labelledby="awards-title">
      <div className="reference-heading">
        <h2 id="awards-title">Prêmios e troféus</h2>
        <span className="reference-badge">Serviço cinco estrelas</span>
        <DemoNote />
      </div>
      <div>
        {[
          {
            name: 'Pixelry',
            text: '3× agência criativa do dia',
            status: 'Vencedor',
          },
          { name: 'Designova', text: '5× menção honrosa', status: 'Menção' },
          {
            name: 'Creatixly',
            text: '2× design da semana',
            status: 'Vencedor',
          },
          { name: 'Formatic', text: '8× design do dia', status: 'Vencedor' },
          { name: 'Visualyn', text: '1× agência do ano', status: 'Premiado' },
        ].map((item) => (
          <article key={item.name} className="about-award-row">
            <strong>{item.name}</strong>
            <span>{item.text}</span>
            <strong>{item.status}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
export function AboutLife() {
  return (
    <section className="about-life section" aria-labelledby="life-title">
      <div className="reference-heading">
        <h2 id="life-title">Vida no estúdio</h2>
        <p>Acompanhamos você do primeiro passo ao que vem depois.</p>
      </div>
      <div className="about-life-images">
        {projects.slice(0, 4).map((project) => (
          <div key={project.slug}>
            <ResponsiveImage
              {...project.images.angulo}
              alt={`${project.category} — ${project.title}`}
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
