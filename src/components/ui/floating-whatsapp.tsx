'use client';

import { useEffect, useState } from 'react';
import { whatsappUrl } from '@/config/contact';
import { WhatsAppIcon } from './social-icons';
import './floating-whatsapp.css';

export function FloatingWhatsApp() {
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const contact = document.getElementById('contato');
    if (!contact) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      // Trocar ao entrar na área de contato; o rodapé continua abaixo dela.
      setAtContact(
        contact.getBoundingClientRect().top < window.innerHeight - 80,
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (atContact) {
    return (
      <a
        className="floating-whatsapp floating-back-top"
        href="/#inicio"
        aria-label="Voltar ao início da página"
      >
        <span className="back-top-text">Topo</span>
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
