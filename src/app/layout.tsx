import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { plusJakartaSans } from '@/styles/fonts';
import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer/footer';
import { ConsentManager } from '@/components/analytics/consent';
import { siteMetadata } from '@/config/metadata';
import { FloatingWhatsApp } from '@/components/ui/floating-whatsapp';
import { AnchorNavigation } from '@/components/layout/anchor-navigation';
import { PageTransition } from '@/components/layout/page-transition/page-transition';
import '@/styles/globals.css';
export const viewport: Viewport = { themeColor: '#242720' };
export const metadata: Metadata = siteMetadata;
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <div id="inicio" />
        <Header />
        {children}
        <Footer />
        <AnchorNavigation />
        <PageTransition />
        <FloatingWhatsApp />
        <ConsentManager />
      </body>
    </html>
  );
}
