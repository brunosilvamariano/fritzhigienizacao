import { Hero } from '@/sections/home/hero/hero';
import { Environments } from '@/sections/home/environments/environments';
import { Services } from '@/sections/home/services/services';
import { Process } from '@/sections/home/process/process';
import { Studio } from '@/sections/home/studio/studio';
export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <Environments />
      <Services />
      <Process />
      <Studio />
    </main>
  );
}
