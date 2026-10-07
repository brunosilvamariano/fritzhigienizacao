'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { whatsappUrl } from '@/config/contact';
import { WhatsAppIcon } from './social-icons';
import './floating-whatsapp.css';

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const [showBackTop, setShowBackTop] = useState(false);
  const [footerLogoVisible, setFooterLogoVisible] = useState(false);

  useEffect(() => {
    const contact =
      pathname === '/' ? document.getElementById('contato') : null;
    const main = document.querySelector('main');
    if (!contact && !main) {
      setShowBackTop(false);
      setFooterLogoVisible(false);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      // O footer sticky fica atrás do conteúdo; usar o fim do main em Sobre.
      const boundary = contact
        ? contact.getBoundingClientRect().top
        : main?.getBoundingClientRect().bottom;
      setShowBackTop(
        boundary !== undefined && boundary < window.innerHeight - 80,
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const footerLogo = document.querySelector('.footer-developer');
    const footerObserver = footerLogo
      ? new IntersectionObserver(([entry]) => {
          setFooterLogoVisible(entry.isIntersecting);
        })
      : null;
    if (footerLogo && footerObserver) footerObserver.observe(footerLogo);
    update();
    return () => {
      observer.disconnect();
      footerObserver?.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  if (showBackTop) {
    return (
      <a
        className={`floating-whatsapp floating-back-top${footerLogoVisible ? ' floating-back-top--footer' : ''}`}
        href={`${pathname}#inicio`}
        aria-label="Voltar ao início da página"
      >
        <span className="back-top-label">Voltar ao início da página</span>
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          aria-hidden="true"
        >
          <path d="M12 20V4M5 11l7-7 7 7" />
        </svg>
      </a>
    );
  }
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Traço pelo WhatsApp (abre em nova aba)"
      data-track-contact="botão flutuante"
    >
      <WhatsAppIcon />
      <span className="floating-whatsapp-label">Vamos conversar?</span>
    </a>
  );
}
