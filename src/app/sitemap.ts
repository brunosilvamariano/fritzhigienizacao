import type { MetadataRoute } from 'next';
import { routes } from '@/config/routes';
import { site } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.indexable) return [];
  return routes.map((route) => ({
    url: route.path === '/' ? site.url : `${site.url}${route.path}`,
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}
