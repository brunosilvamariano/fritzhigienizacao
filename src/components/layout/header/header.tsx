import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { Brand } from './brand';
import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';
import './header.css';
export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <DesktopNavigation />
        <WhatsAppLink className="header-cta text-link">
          Conversar sobre meu projeto
        </WhatsAppLink>
        <MobileNavigation />
      </div>
    </header>
  );
}
