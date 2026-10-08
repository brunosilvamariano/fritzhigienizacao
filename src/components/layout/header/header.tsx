import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { Brand } from './brand';
import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';
import './header.css';
import './mobile-navigation.css';

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner tw:flex tw:items-center tw:justify-between">
        <Brand />
        <DesktopNavigation />
        <WhatsAppLink className="header-cta text-link tw:inline-flex tw:items-center tw:gap-[22px] tw:py-[9px]">
          Conversar sobre meu projeto
        </WhatsAppLink>
        <MobileNavigation />
      </div>
    </header>
  );
}
