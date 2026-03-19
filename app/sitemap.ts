import type { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/services';
import { REGIONS } from '@/hub.config';
import { BLOG_POSTS } from '@/data/blog-posts';

const BASE_URL = 'https://pestcontrolcamdencounty.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/service-areas/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // High-intent lead capture pages
    {
      url: `${BASE_URL}/pest-control-near-me/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/exterminator-near-me/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/emergency-pest-control/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/same-day-pest-control/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/termite-inspection/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/free-pest-inspection/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/bed-bug-exterminator/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // County page
  const countyPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/camden-county/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Town pages — towns is string[], generate slug from town name
  const townPages: MetadataRoute.Sitemap = REGIONS.flatMap((region) =>
    region.towns.map((town) => ({
      url: `${BASE_URL}/camden-county/${town.toLowerCase().replace(/\s+/g, '-')}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Commercial pages
  const commercialPages: MetadataRoute.Sitemap = [
    '/commercial',
    '/commercial/restaurants',
    '/commercial/office-buildings',
    '/commercial/warehouses',
    '/commercial/healthcare',
    '/commercial/schools',
    '/commercial/retail',
    '/commercial/food-processing',
    '/commercial/property-management',
    '/commercial/hospitality',
    '/commercial/apartment-complexes',
  ].map((path) => ({
    url: `${BASE_URL}${path}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));





  return [...staticPages, ...servicePages, ...countyPages, ...townPages, ...blogPages, ...commercialPages];
}
