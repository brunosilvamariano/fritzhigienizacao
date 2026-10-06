import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return site.indexable
    ? [
        { url: site.url, changeFrequency: 'monthly', priority: 1 },
        { url: `${site.url}/sobre`, changeFrequency: 'monthly', priority: 0.7 },
      ]
    : [];
}
