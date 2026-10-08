'use client';

import { Arrow } from '@/components/ui/arrow';

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main
      id="conteudo"
      className="page-content tw:relative tw:bg-paper status-page tw:flex tw:flex-col tw:items-start tw:gap-[26px]"
      tabIndex={-1}
    >
      <span className="eyebrow tw:uppercase tw:text-accent section-label tw:inline-flex tw:items-center tw:gap-[12px]">
        Erro inesperado
      </span>
      <h1>Algo não saiu como esperado.</h1>
      <p>Tente carregar a página novamente ou volte ao início.</p>
      <div className="status-actions tw:flex tw:flex-wrap tw:items-center tw:gap-[24px]">
        <button
          type="button"
          className="button tw:min-h-[52px] tw:bg-ink tw:text-paper tw:inline-flex tw:justify-between tw:items-center tw:gap-[35px]"
          onClick={reset}
        >
          Tentar novamente <Arrow />
        </button>
        <a
          className="text-link tw:inline-flex tw:items-center tw:gap-[22px] tw:py-[9px]"
          href="/"
        >
          Voltar ao início <Arrow />
        </a>
      </div>
    </main>
  );
}
