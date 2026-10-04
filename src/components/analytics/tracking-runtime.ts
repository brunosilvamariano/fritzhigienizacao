import { tracking } from '@/config/tracking';

export type Consent = { analytics: boolean; marketing: boolean };
type Command = (...args: unknown[]) => void;
type Pixel = Command & {
  queue: unknown[][];
  callMethod?: Command;
  push?: Command;
  loaded: boolean;
  version: string;
};
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Command;
    fbq?: Pixel;
    _fbq?: Pixel;
  }
}
let current: Consent = { analytics: false, marketing: false };
let googleStarted = false;
let metaStarted = false;

function loadScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.append(script);
}

export function startTracking(consent: Consent) {
  current = consent;
  const googleId =
    (consent.analytics && tracking.ga4) || (consent.marketing && tracking.ads);
  if (googleId && !googleStarted) {
    googleStarted = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // biome-ignore lint/complexity/noArguments: gtag usa a fila de Arguments do snippet oficial.
      window.dataLayer?.push(arguments);
    };
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    window.gtag('consent', 'update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.marketing ? 'granted' : 'denied',
      ad_user_data: consent.marketing ? 'granted' : 'denied',
      ad_personalization: consent.marketing ? 'granted' : 'denied',
    });
    window.gtag('js', new Date());
    if (consent.analytics && tracking.ga4)
      window.gtag('config', tracking.ga4, {
        allow_google_signals: consent.marketing,
        allow_ad_personalization_signals: consent.marketing,
      });
    if (consent.marketing && tracking.ads) window.gtag('config', tracking.ads);
    loadScript(
      'traco-google-tag',
      `https://www.googletagmanager.com/gtag/js?id=${googleId}`,
    );
  }
  if (consent.marketing && tracking.meta && !metaStarted) {
    metaStarted = true;
    const pixel: Pixel = Object.assign(
      (...args: unknown[]) => {
        if (pixel.callMethod) pixel.callMethod(...args);
        else pixel.queue.push(args);
      },
      { queue: [] as unknown[][], loaded: true, version: '2.0' },
    );
    pixel.push = pixel;
    window.fbq = pixel;
    window._fbq = pixel;
    pixel('consent', 'grant');
    pixel('init', tracking.meta);
    pixel('track', 'PageView');
    loadScript(
      'traco-meta-pixel',
      'https://connect.facebook.net/en_US/fbevents.js',
    );
  }
}

export function stopTracking() {
  current = { analytics: false, marketing: false };
  window.gtag?.('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.fbq?.('consent', 'revoke');
}

export function trackContact(event: MouseEvent) {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>('a[data-track-contact]');
  if (!link) return;
  const context = link.dataset.trackContact || 'geral';
  const section =
    link.closest('section[id]')?.id ||
    (link.closest('header')
      ? 'header'
      : link.closest('footer')
        ? 'footer'
        : 'navegacao');
  if (current.analytics && tracking.ga4) {
    window.gtag?.('event', 'whatsapp_click', {
      send_to: tracking.ga4,
      contact_context: context,
      section,
      transport_type: 'beacon',
    });
  }
  if (current.marketing && tracking.ads && tracking.adsLabel) {
    window.gtag?.('event', 'conversion', {
      send_to: `${tracking.ads}/${tracking.adsLabel}`,
    });
  }
  if (current.marketing && tracking.meta) {
    window.fbq?.('trackCustom', 'WhatsAppClick', {
      content_name: context,
      content_category: section,
    });
  }
}
