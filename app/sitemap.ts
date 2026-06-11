import type { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/services';
import { REGIONS } from '@/hub.config';
import { getAllBlogPosts } from '@/data/blog-posts';
import townsData from '@/data/towns.json';

const BASE_URL = 'https://pestcontrolcamdencounty.com';

const QUOTE_SERVICES = [
  'ant-control',
  'bed-bug-treatment',
  'cockroach-treatment',
  'mosquito-treatment',
  'rodent-control',
  'termite-treatment',
  'wasp-removal',
];

// Town-level get-a-quote FUNNEL vocabulary = SERVICES_MAP keys in
// app/get-a-quote/[service]/[town]/page.tsx. Intentionally DIFFERENT from
// QUOTE_SERVICES above (the static service-landing vocabulary). Both are live —
// do not harmonize. Keep in sync with SERVICES_MAP keys in the funnel route.
const FUNNEL_SERVICES = [
  'bed-bug-treatment',
  'ant-exterminator',
  'rodent-control',
  'cockroach-exterminator',
  'mosquito-treatment',
  'wasp-hornet-removal',
  'termite-treatment',
];

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
    {
      url: `${BASE_URL}/services/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/get-a-quote/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/privacy/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
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
      url: `${BASE_URL}/fast-response-pest-control/`,
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
      url: `${BASE_URL}/free-pest-estimate/`,
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
    {
      url: `${BASE_URL}/ant-exterminator/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // City landing pages
    {
      url: `${BASE_URL}/camden-city/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Wave 2 landing pages
    { url: `${BASE_URL}/tick-control/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/mosquito-control/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/spotted-lanternfly-control/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/wildlife-removal/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/property-management-pest-control/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Get-a-quote sub-pages
  const quotePages: MetadataRoute.Sitemap = QUOTE_SERVICES.map((slug) => ({
    url: `${BASE_URL}/get-a-quote/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Town-level get-a-quote funnel pages (service × town).
  // Towns from townsData.regions[0].towns to match the funnel route's
  // generateStaticParams 1:1.
  const funnelTowns = (townsData as { regions: { towns: { slug: string }[] }[] }).regions[0].towns;
  const funnelPages: MetadataRoute.Sitemap = FUNNEL_SERVICES.flatMap((service) =>
    funnelTowns.map((town) => ({
      url: `${BASE_URL}/get-a-quote/${service}/${town.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // County page + region-level service pages
  const countyPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/camden-county/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/camden-county/mosquito-control/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
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

  // Blog pages — includes Wave 1 + Wave 2 posts
  const blogPages: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
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

  return [...staticPages, ...quotePages, ...funnelPages, ...servicePages, ...countyPages, ...townPages, ...blogPages, ...commercialPages];
}
