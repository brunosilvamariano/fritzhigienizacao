import { withSocialMetadata } from '@/config/metadata';
import type { Metadata } from 'next';
import { Showreel } from '@/sections/home/showreel/showreel';
import { Services, ServicesOpening } from '@/sections/home/services/services';
import { Testimonials } from '@/sections/home/testimonials/testimonials';
import { Contact } from '@/sections/home/contact/contact';
export const metadata: Metadata = withSocialMetadata({
  title: 'Higienização e impermeabilização em Joinville',
  description:
    'Limpeza de sofás, tapetes, colchões, poltronas e cadeiras. Conheça os serviços da Fritz em Joinville e região e solicite orçamento.',
  alternates: { canonical: '/servicos' },
  openGraph: {
    title: 'Higienização e impermeabilização em Joinville | Fritz',
    description:
      'Limpeza de sofás, tapetes, colchões, poltronas e cadeiras. Conheça os serviços da Fritz em Joinville e região e solicite orçamento.',
    url: '/servicos',
  },
});
export default function ServicesPage() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper services-page"
      tabIndex={-1}
    >
      <ServicesOpening />
      <Showreel variant="services" />
      <Services />
      <div className="tw:pt-[100px]">
        <Testimonials />
      </div>
      <Contact />
    </main>
  );
}
