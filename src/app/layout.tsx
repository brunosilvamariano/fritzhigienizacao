import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { geist } from '@/styles/fonts';
import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer/footer';
import '@/styles/globals.css';
export const viewport: Viewport = { themeColor: '#242720' };
export const metadata: Metadata = {
  applicationName: 'Traço',
  title: 'Traço — móveis sob medida | Projeto conceitual',
  description:
    'Um estudo de design e experiência digital para móveis planejados. Madeira, luz e proporção em uma marca conceitual.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Traço — Seu espaço, no seu traço.',
    description:
      'Projeto conceitual de móveis planejados e experiência digital.',
    locale: 'pt_BR',
    type: 'website',
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <div id="inicio" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
