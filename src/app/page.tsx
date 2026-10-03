import { Hero } from '@/sections/home/hero/hero';
import { Environments } from '@/sections/home/environments/environments';
import { Process } from '@/sections/home/process/process';
import { Studio } from '@/sections/home/studio/studio';
export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <Environments />
      <Process />
      <Studio />
    </main>
  );
}
