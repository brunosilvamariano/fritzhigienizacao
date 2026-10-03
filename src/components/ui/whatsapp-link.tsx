import type { ReactNode } from 'react';
import { whatsappUrl } from '@/config/contact';
import { Arrow } from './arrow';
import './whatsapp-link.css';
type Props = { children: ReactNode; context?: string; className?: string };
export function WhatsAppLink({
  children,
  context,
  className = 'text-link',
}: Props) {
  return (
    <a
      className={className + ' whatsapp-link'}
      href={whatsappUrl(context)}
      target="_blank"
      rel="noopener noreferrer"
      title="Conversar pelo WhatsApp (abre em nova aba)"
    >
      {children}
      <Arrow />
      <span className="whatsapp-link-hint">
        {' '}
        pelo WhatsApp (abre em nova aba)
      </span>
    </a>
  );
}
