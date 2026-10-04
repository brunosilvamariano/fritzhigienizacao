import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  // Permitir leitura para que robôs encontrem o noindex e a imagem social.
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(site.indexable ? { sitemap: `${site.url}/sitemap.xml` } : {}),
  };
}
