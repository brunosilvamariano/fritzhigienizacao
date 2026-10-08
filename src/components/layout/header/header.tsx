'use client';
import { usePathname } from 'next/navigation';
import { Brand } from './brand';
import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';
import './header.css';
import './mobile-navigation.css';
export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header" data-home={pathname === '/'}>
      <div className="header-inner tw:flex tw:items-center tw:justify-between">
        <Brand />
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
