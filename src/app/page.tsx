import { Contact } from '@/sections/home/contact/contact';
import { Hero } from '@/sections/home/hero/hero';
import { Environments } from '@/sections/home/environments/environments';
import { Services } from '@/sections/home/services/services';
import { Process } from '@/sections/home/process/process';
import { Studio } from '@/sections/home/studio/studio';
import { Faq } from '@/sections/home/faq/faq';
import { ServicesProcessTransition } from '@/sections/home/services-process-transition/services-process-transition';

export default function Home() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper"
      tabIndex={-1}
    >
      <Hero />
      <Environments />
      <ServicesProcessTransition
        services={<Services />}
        process={<Process />}
      />
      <Studio />
      <Faq />
      <Contact />
    </main>
  );
}
