import Image from 'next/image';
import Link from 'next/link';
import { PrivacyPreferences } from '@/components/analytics/consent';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { InstagramIcon } from '@/components/ui/social-icons';
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
              Fritz Higienização
              <br />
              Higienização e impermeabilização.
            </p>
            <WhatsAppLink context="higienização ou impermeabilização">
              Quero um orçamento
            </WhatsAppLink>
            <a href={`tel:+${contact.whatsappNumber}`}>
              {contact.whatsappDisplay}
            </a>
          </div>
          <nav aria-label="Páginas principais">
            <h2>Navegue</h2>
            <Link href="/#inicio">Início</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/contato">Contato</Link>
          </nav>
          <nav aria-label="Projetos e artigos">
            <h2>Cuidados e dicas</h2>
            <Link href="/projetos">Cuidados</Link>
            <Link href="/blog">Dicas</Link>
            <Link href="/blog/como-solicitar-orcamento">
              Como pedir orçamento
            </Link>
            <Link href="/projetos/higienizacao-sofas">Limpeza de sofás</Link>
          </nav>
          <nav
            className="footer-information"
            aria-label="Informações e privacidade"
          >
            <h2>Informações</h2>
            <a
              href={contact.instagram}
              className="footer-instagram tw:inline-flex tw:items-center tw:gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              <span>Instagram da Fritz</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Higieniza%C3%A7%C3%A3o%20e%20Impermeabiliza%C3%A7%C3%A3o%20Fritz%2C%20R.%20Octac%C3%ADlio%20Jos%C3%A9%20de%20Souza%2C%2025%20-%20Jarivatuba%2C%20Joinville%20-%20SC%2C%2089230-435"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver perfil no{' '}
              <span
                className="footer-google-wordmark"
                role="img"
                aria-label="Google"
              >
                <span>G</span>
                <span>o</span>
                <span>o</span>
                <span>g</span>
                <span>l</span>
                <span>e</span>
              </span>
            </a>
            <Link href="/blog/secagem-de-estofados">
              Cuidados após a limpeza
            </Link>
            <PrivacyPreferences />
          </nav>
        </div>
        <Newsletter />
      </div>
      <div className="footer-bottom">
        <Link className="footer-wordmark" href="/#inicio">
          {'FRITZ'}
        </Link>
        <div className="footer-credits">
          <p>
            © {new Date().getFullYear()} Fritz Higienização e Impermeabilização.
          </p>
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
