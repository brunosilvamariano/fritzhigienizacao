'use client';

import { useEffect, useState } from 'react';
import { tracking, trackingAvailable } from '@/config/tracking';
import {
  type Consent,
  startTracking,
  stopTracking,
  trackContact,
} from './tracking-runtime';
import './consent.css';

const storageKey = 'traco-consent-v1';
const expiry = 180 * 24 * 60 * 60 * 1000;
const denied: Consent = { analytics: false, marketing: false };

function readConsent(): Consent | null {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (
      saved &&
      typeof saved.analytics === 'boolean' &&
      typeof saved.marketing === 'boolean' &&
      typeof saved.savedAt === 'number' &&
      Date.now() - saved.savedAt >= 0 &&
      Date.now() - saved.savedAt < expiry
    ) {
      return { analytics: saved.analytics, marketing: saved.marketing };
    }
  } catch {
    /* Armazenamento indisponível: pedir escolha sem ativar tags. */
  }
  return null;
}

export function ConsentManager() {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<Consent>(denied);
  const [saved, setSaved] = useState<Consent | null>(null);

  useEffect(() => {
    if (!trackingAvailable) return;
    const previous = readConsent();
    setSaved(previous);
    setChoice(previous || denied);
    setOpen(!previous);
    if (previous) startTracking(previous);
    const show = () => setOpen(true);
    const sync = (event: StorageEvent) => {
      if (event.key === storageKey || event.key === null) {
        stopTracking();
        window.location.reload();
      }
    };
    window.addEventListener('traco:privacy', show);
    window.addEventListener('storage', sync);
    document.addEventListener('click', trackContact);
    return () => {
      window.removeEventListener('traco:privacy', show);
      window.removeEventListener('storage', sync);
      document.removeEventListener('click', trackContact);
    };
  }, []);

  function save(next: Consent) {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ ...next, savedAt: Date.now() }),
      );
    } catch {
      /* A escolha continua válida nesta página. */
    }
    setChoice(next);
    setSaved(next);
    setOpen(false);
    if (
      saved &&
      (saved.analytics !== next.analytics || saved.marketing !== next.marketing)
    ) {
      stopTracking();
      // Recarregar remove SDKs já executados e reaplica somente as categorias permitidas.
      window.location.reload();
    } else startTracking(next);
  }

  if (!trackingAvailable || !open) return null;
  return (
    <section
      className="consent-panel tw:overflow-y-auto tw:bg-paper tw:text-ink"
      aria-labelledby="consent-title"
      aria-describedby="consent-description"
    >
      <h2 id="consent-title">Sua privacidade, suas escolhas.</h2>
      <p id="consent-description">
        Com sua autorização, usamos Google e Meta para entender as visitas e
        medir anúncios. Você pode recusar ou mudar sua escolha no rodapé.
      </p>
      <a href={tracking.privacyUrl} target="_blank" rel="noopener noreferrer">
        Ler política de privacidade (nova aba)
      </a>
      <div className="consent-options tw:grid tw:gap-[12px] tw:my-[18px]">
        {tracking.ga4 && (
          <label>
            <input
              type="checkbox"
              checked={choice.analytics}
              onChange={(event) =>
                setChoice({ ...choice, analytics: event.target.checked })
              }
            />{' '}
            Estatísticas de navegação (Google Analytics)
          </label>
        )}
        {(tracking.ads || tracking.meta) && (
          <label>
            <input
              type="checkbox"
              checked={choice.marketing}
              onChange={(event) =>
                setChoice({ ...choice, marketing: event.target.checked })
              }
            />{' '}
            Publicidade e medição de anúncios (Google/Meta)
          </label>
        )}
      </div>
      <div className="consent-actions tw:flex tw:flex-wrap tw:gap-[8px]">
        <button type="button" onClick={() => save(denied)}>
          Recusar opcionais
        </button>
        <button type="button" onClick={() => save(choice)}>
          Salvar escolhas
        </button>
        <button
          type="button"
          onClick={() =>
            save({
              analytics: Boolean(tracking.ga4),
              marketing: Boolean(tracking.ads || tracking.meta),
            })
          }
        >
          Aceitar todos
        </button>
      </div>
    </section>
  );
}

export function PrivacyPreferences() {
  if (!trackingAvailable) return null;
  return (
    <button
      className="privacy-preferences tw:block tw:mt-[16px] tw:min-h-[44px]"
      type="button"
      onClick={() => window.dispatchEvent(new Event('traco:privacy'))}
    >
      Preferências de privacidade
    </button>
  );
}
