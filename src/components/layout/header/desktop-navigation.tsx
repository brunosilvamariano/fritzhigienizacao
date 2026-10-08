'use client';
import { usePathname } from 'next/navigation';
export function DesktopNavigation() {
  const pathname = usePathname();
  const links = [
    { href: '/sobre', label: 'Sobre' },
    { href: '/projetos', label: 'Cuidados' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/contato', label: 'Agendamento' },
  ];
  return (
    <nav
      className="desktop-nav tw:flex tw:items-center"
      aria-label="Navegação principal"
    >
      {links.map((link) => (
        <a
          href={link.href}
          key={link.href}
          aria-current={pathname === link.href ? 'page' : undefined}
        >
          <span className="nav-link-circle" aria-hidden="true" />
          <span className="nav-link-label">
            <span>{link.label}</span>
            <span aria-hidden="true">{link.label}</span>
          </span>
        </a>
      ))}
    </nav>
  );
}
