import Image from 'next/image';
import { projects } from '@/content/projects';
import { demoStats, demoWhy } from '@/content/ariyana-demo.team';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { DemoNote } from '@/components/ui/demo-note';
import { HorizontalRail } from '@/components/ui/horizontal-rail';
import './about-details.css';
export function AboutStats() {
  return (
    <section className="about-stats section" aria-label="Etapas de atendimento">
      <div className="about-stats-grid">
        <div className="about-stats-photo">
          <ResponsiveImage
            {...projects[5].images.capa}
            alt="Imagem ilustrativa de higienização de estofados e tapetes."
            sizes="45vw"
          />
        </div>
        {[
          { number: '01', text: 'Avaliação da peça' },
          { number: '02', text: 'Orientação sobre o serviço' },
          { number: '03', text: 'Agendamento combinado' },
          { number: '04', text: 'Cuidados após a limpeza' },
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
          <h3>Atenção ao seu tecido</h3>
          <p>
            A Fritz orienta sobre a higienização e a impermeabilização conforme
            o material e as condições da peça, do primeiro contato aos cuidados
            depois do serviço.
          </p>
        </div>
      </div>
      <DemoNote>
        Orçamento e disponibilidade são confirmados diretamente com a equipe.
      </DemoNote>
      <HorizontalRail>
        {[
          { title: 'Comece com', value: 'Fotos da peça' },
          { title: 'Receba', value: 'Orientação' },
          { title: 'Combine', value: 'Seu horário' },
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
        <h2 id="team-title">Cuidado em cada etapa</h2>
        <span className="reference-badge">Da avaliação à conservação</span>
        <DemoNote>Imagens ilustrativas dos cuidados com estofados.</DemoNote>
      </div>
      <div className="about-team-grid">
        {[
          { name: 'Avaliar', role: 'Tecido e condições da peça' },
          { name: 'Limpar', role: 'Higienização do revestimento' },
          { name: 'Orientar', role: 'Secagem e retorno ao uso' },
          { name: 'Conservar', role: 'Cuidados na rotina' },
        ].map((item, index) => (
          <article key={item.name}>
            <Image
              src={projects[index].images.capa.desktop}
              alt="Imagem ilustrativa de higienização"
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
        <h2 id="awards-title">Onde a Fritz atende</h2>
        <span className="reference-badge">Consulte seu endereço</span>
        <DemoNote />
      </div>
      <div>
        {[
          {
            name: 'Joinville',
            text: 'Higienização e impermeabilização',
            status: 'Consultar agenda',
          },
          {
            name: 'Itapoá',
            text: 'São Francisco do Sul',
            status: 'Consultar endereço',
          },
          {
            name: 'Balneário Camboriú',
            text: 'Balneário Piçarras',
            status: 'Consultar endereço',
          },
          {
            name: 'Barra Velha',
            text: 'Balneário Barra do Sul',
            status: 'Consultar endereço',
          },
          {
            name: 'Seu bairro',
            text: 'Envie sua localização pelo WhatsApp',
            status: 'Confirmar atendimento',
          },
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
        <h2 id="life-title">O cuidado de perto</h2>
        <p>Conheça os cuidados para limpeza e conservação das suas peças.</p>
      </div>
      <div className="about-life-images">
        {projects.slice(0, 4).map((project) => (
          <div key={project.slug}>
            <ResponsiveImage
              {...project.images.angulo}
              alt="Imagem ilustrativa de higienização de estofados e tapetes."
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
