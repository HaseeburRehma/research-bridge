import type { MetadataRoute } from 'next';

import { posts } from '@/content/blog';
import { services } from '@/content/services';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    '',
    '/about',
    '/who-we-serve',
    '/expertise',
    '/disciplines',
    '/services',
    '/process',
    '/pricing',
    '/integrity',
    '/commitment',
    '/institutions',
    '/why-us',
    '/faq',
    '/testimonials',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
