import Image from 'next/image';
import { InstagramIcon } from '@/components/ui/social-icons';
import { PrivacyPreferences } from '@/components/analytics/consent';
import vbgLogo from '@/assets/images/shared/vbg/logo.webp';
import { developer } from '@/config/developer';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { contact } from '@/config/contact';
import { environments, navigation } from '@/config/navigation';
import { GoogleProfile } from './google-profile';
import { FooterReveal } from './footer-reveal';
import './footer.css';
export function Footer() {
  return (
    <FooterReveal>
      <div className="footer-top">
        <div className="footer-introduction">
          <a
            className="footer-brand"
            href="/#inicio"
            aria-label="Traço — voltar ao início"
          >
            traço.
          </a>
          <p>
            Espaços pensados para viver.
            <br />
            Móveis que acompanham o seu jeito de morar.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Ambientes no rodapé">
          <h2>Ambientes</h2>
          {environments.map((item) => (
            <a key={item.id} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <h2>Conheça a Traço</h2>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <h2>Vamos conversar</h2>
          <WhatsAppLink context="um projeto de móveis planejados para meu espaço">
            Falar pelo WhatsApp
          </WhatsAppLink>
          <p>{contact.whatsappDisplay}</p>
          <PrivacyPreferences />
          <a
            className="footer-instagram"
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Traço no Instagram — abrir em nova aba"
          >
            <InstagramIcon /> Traço no Instagram{' '}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="footer-showcase">
        <div className="footer-wordmark" aria-hidden="true">
          traço.
        </div>
        <GoogleProfile />
      </div>
      <div className="footer-credits">
        <p>
          © 2026 · Traço Móveis Planejados
          <br />
          <span>Traço · Conceito de marca em móveis planejados</span>
        </p>
        <div className="footer-developer">
          <a
            className="footer-developer-brand"
            href={developer.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Created by VBG Agency — visitar site em nova aba"
          >
            <span>CREATED BY</span>
            <Image src={vbgLogo} alt="VBG Agency" width={112} height={42} />
          </a>
        </div>
      </div>
    </FooterReveal>
  );
}
