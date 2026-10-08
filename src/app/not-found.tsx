import type { Metadata } from 'next';
import { Arrow } from '@/components/ui/arrow';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper status-page tw:flex tw:flex-col tw:items-start tw:gap-[26px]"
      tabIndex={-1}
    >
      <span className="eyebrow tw:uppercase tw:text-accent section-label tw:inline-flex tw:items-center tw:gap-[12px]">
        Erro 404
      </span>
      <h1>Esta página não foi encontrada.</h1>
      <p>O endereço pode ter mudado ou não existir mais.</p>
      <a
        className="button tw:min-h-[52px] tw:bg-ink tw:text-paper tw:inline-flex tw:justify-between tw:items-center tw:gap-[35px]"
        href="/"
      >
        Voltar ao início <Arrow />
      </a>
    </main>
  );
}
