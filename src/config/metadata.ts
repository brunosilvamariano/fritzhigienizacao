import type { Metadata } from 'next';
import socialImage from '@/assets/images/pages/projects/01/capa/desktop.webp';
import { site } from './site';

const shareImage = {
  url: socialImage.src,
  width: socialImage.width,
  height: socialImage.height,
  alt: 'Fritz — Higienização de estofados em Joinville. Imagem ilustrativa de limpeza de sofá.',
  type: 'image/webp',
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: { default: site.title, template: '%s | Fritz' },
  description: site.description,
  alternates: { canonical: '/' },
  category: 'Higienização e impermeabilização de estofados',
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

/** Mantém imagem, nome e idioma da marca ao personalizar cada página. */
export function withSocialMetadata(metadata: Metadata): Metadata {
  const title = metadata.openGraph?.title ?? metadata.title ?? site.title;
  const description = metadata.description ?? site.description;
  const canonical = metadata.alternates?.canonical;
  const url =
    typeof canonical === 'string' || canonical instanceof URL
      ? canonical
      : (canonical?.url ?? '/');
  return {
    ...metadata,
    openGraph: {
      ...siteMetadata.openGraph,
      title,
      description,
      url,
      ...metadata.openGraph,
    },
    twitter: {
      ...siteMetadata.twitter,
      title,
      description,
      images: metadata.openGraph?.images ?? [shareImage],
      ...metadata.twitter,
    },
  };
}
