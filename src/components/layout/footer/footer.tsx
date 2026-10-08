import Image from 'next/image';
import Link from 'next/link';
import { PrivacyPreferences } from '@/components/analytics/consent';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { contact } from '@/config/contact';
import { developer } from '@/config/developer';
import vbgLogo from '@/assets/images/shared/vbg/logo.webp';
import { Newsletter } from './newsletter';
import { FooterReveal } from './footer-reveal';
import './footer.css';
export function Footer() {
  return (
    <FooterReveal>
      <div className="footer-top">
        <div className="footer-links">
          <div className="footer-contact">
            <h2>Contato</h2>
            <p>
              Traço Móveis Planejados
              <br />
              Espaços pensados para viver.
            </p>
            <WhatsAppLink>WhatsApp</WhatsAppLink>
            <a href={`tel:+${contact.whatsappNumber}`}>
              {contact.whatsappDisplay}
            </a>
          </div>
          <nav aria-label="Páginas principais">
            <h2>Páginas</h2>
            <Link href="/">Início</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/contato">Contato</Link>
          </nav>
          <nav aria-label="Projetos e artigos">
            <h2>Páginas</h2>
            <Link href="/projetos">Projetos</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/blog/conversa-com-a-fwa">Artigo</Link>
            <Link href="/projetos/cozinha-encontro">Detalhe do projeto</Link>
          </nav>
          <nav aria-label="Informações e privacidade">
            <h2>Informações</h2>
            <Link href="/informacoes/estilos">Guia de estilos</Link>
            <Link href="/informacoes/licencas">Licenças</Link>
            <Link href="/informacoes/alteracoes">Alterações</Link>
            <PrivacyPreferences />
          </nav>
        </div>
        <Newsletter />
      </div>
      <div className="footer-bottom">
        <Link className="footer-wordmark" href="/">
          {'//TRAÇO'}
        </Link>
        <div className="footer-credits">
          <p>© {new Date().getFullYear()} Traço. Conceito demonstrativo.</p>
          <a
            href={developer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-developer"
            aria-label="Criado por VBG Agency — abrir site"
          >
            <span>Criado por</span>
            <Image src={vbgLogo} alt="VBG Agency" width={112} height={42} />
          </a>
        </div>
      </div>
    </FooterReveal>
  );
}
