import { Brand } from './brand';
import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';
import { Arrow } from '@/components/ui/arrow';
import './header.css';
export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <DesktopNavigation />
        <a className="header-cta text-link" href="#estudio">
          Conheça o conceito <Arrow />
        </a>
        <MobileNavigation />
      </div>
    </header>
  );
}
