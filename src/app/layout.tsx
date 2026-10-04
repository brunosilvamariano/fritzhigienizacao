import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { geist } from '@/styles/fonts';
import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer/footer';
import { ConsentManager } from '@/components/analytics/consent';
import { siteMetadata } from '@/config/metadata';
import { FloatingWhatsApp } from '@/components/ui/floating-whatsapp';
import '@/styles/globals.css';
export const viewport: Viewport = { themeColor: '#242720' };
export const metadata: Metadata = siteMetadata;
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
        <FloatingWhatsApp />
        <ConsentManager />
      </body>
    </html>
  );
}
