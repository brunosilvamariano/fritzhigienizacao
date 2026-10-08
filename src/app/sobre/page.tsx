import { withSocialMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { AboutOpening } from '@/sections/about/opening/about-opening';
import {
  AboutStats,
  WhyChoose,
  AboutTeam,
  AboutAwards,
  AboutLife,
} from '@/sections/about/details/about-details';
import { Trust } from '@/sections/home/trust/trust';
import { Leaders } from '@/sections/home/leaders/leaders';
import { Contact } from '@/sections/home/contact/contact';

export const metadata: Metadata = withSocialMetadata({
  title: 'Sobre a Fritz em Joinville',
  description:
    'Conheça a Fritz: higienização e impermeabilização de estofados em Joinville e região. Saiba como consultar o serviço e combinar o atendimento.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Sobre a Fritz em Joinville | Fritz',
    description:
      'Conheça a Fritz: higienização e impermeabilização de estofados em Joinville e região. Saiba como consultar o serviço e combinar o atendimento.',
    url: '/sobre',
  },
});

export default function AboutPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper about-page"
      tabIndex={-1}
    >
      <AboutOpening />
      <AboutStats />
      <WhyChoose />
      <AboutTeam />
      <Trust />
      <Leaders />
      <AboutAwards />
      <AboutLife />
      <Contact />
    </main>
  );
}
