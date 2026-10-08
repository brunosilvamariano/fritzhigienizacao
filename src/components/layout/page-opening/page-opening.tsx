import type { ReactNode } from 'react';
import './page-opening.css';
export function PageOpening({
  caption,
  title,
  children,
  id = 'page-title',
  decorated = true,
}: {
  caption: string;
  title: ReactNode;
  children?: ReactNode;
  id?: string;
  decorated?: boolean;
}) {
  return (
    <header className="reference-opening">
      {decorated && (
        <div className="reference-opening-circle" aria-hidden="true" />
      )}
      <div className="reference-opening-copy">
        <span className="section-kicker">{caption}</span>
        <h1 id={id}>{title}</h1>
        {children}
      </div>
    </header>
  );
}
