import type { Metadata } from 'next';
import socialImage from '@/assets/images/shared/social/traco-compartilhamento.jpg';
import { site } from './site';

const shareImage = {
  url: socialImage.src,
  width: socialImage.width,
  height: socialImage.height,
  alt: 'Traço — Seu espaço, no seu traço. Cozinha planejada em madeira com ilha em pedra.',
  type: 'image/jpeg',
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: '/' },
  category: 'Móveis planejados',
  robots: {
    index: site.indexable,
    follow: true,
    googleBot: {
      index: site.indexable,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: '/',
    siteName: site.name,
    locale: 'pt_BR',
    type: 'website',
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [shareImage],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.META_DOMAIN_VERIFICATION
      ? { 'facebook-domain-verification': process.env.META_DOMAIN_VERIFICATION }
      : undefined,
  },
};
