import { Contact } from '@/sections/home/contact/contact';
import { Hero } from '@/sections/home/hero/hero';
import { Environments } from '@/sections/home/environments/environments';
import { Services } from '@/sections/home/services/services';
import { Process } from '@/sections/home/process/process';
import { Studio } from '@/sections/home/studio/studio';
import { Trust } from '@/sections/home/trust/trust';
import { Showreel } from '@/sections/home/showreel/showreel';
import { Leaders } from '@/sections/home/leaders/leaders';
import { Testimonials } from '@/sections/home/testimonials/testimonials';

export default function Home() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper"
      tabIndex={-1}
    >
      <Hero />
      <Studio />
      <Process />
      <Environments />
      <Trust />
      <Services />
      <div
        className="reference-divider reference-divider-linen"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((n) => (
          <i key={n} />
        ))}
      </div>
      <Showreel />
      <Leaders />
      <Testimonials />
      <Contact />
    </main>
  );
}
