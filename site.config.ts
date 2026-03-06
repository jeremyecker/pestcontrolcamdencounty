/**
 * ============================================================
 * SITE CONFIGURATION — Camden County Pest Control
 * ============================================================
 * This is the ONLY file that changes between sites.
 * All components read from here.
 * ============================================================
 */

export const SITE_ID = 'camden-county';
export const SITE_NAME = 'Camden County Pest Control';
export const SITE_DOMAIN = 'pestcontrolcamdencounty.com';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pestcontrolcamdencounty.com';
export const SITE_TAGLINE = 'Trusted Pest Control for Camden County, New Jersey';
export const SITE_DESCRIPTION = 'Licensed pest control serving all of Camden County, NJ. Expert exterminators in Cherry Hill, Voorhees, Haddonfield, Collingswood & beyond. Eco-friendly treatments, same-day service, free estimates.';
export const EMAIL = 'info@pestcontrolcamdencounty.com';

export const SITE = {
  name: 'Camden County Pest Control',
  id: 'camden-county',
} as const;

export const PHONE = '(856) 600-0812';
export const PHONE_RAW = '+18566000812';
export const PHONE_HREF = 'tel:+18566000812';

export const GEO = {
  county: 'Camden',
  countyFull: 'Camden County',
  state: 'New Jersey',
  stateCode: 'NJ',
  region: 'Camden County, NJ',
  totalTowns: 16,
  latitude: 39.9042,
  longitude: -75.0561,
} as const;

export const REGIONS = [
  { name: 'Camden County', slug: 'camden-county', townCount: 16 },
] as const;

export const BRAND = {
  primaryColor: '#1A365D',
  secondaryColor: '#2B6CB0',
  accentColor: '#DD6B20',
  darkColor: '#1A202C',
  lightBg: '#EBF0F5',
  white: '#FFFFFF',
} as const;

export const PEST_OPTIONS = [
  'Ants',
  'Bed Bugs',
  'Cockroaches',
  'Fleas & Ticks',
  'Mice / Rats',
  'Mosquitoes',
  'Spiders',
  'Termites',
  'Wasps / Hornets',
  'Wildlife',
  'Other',
] as const;

export const SERVICES = [
  { name: 'Ant Control', slug: 'ant-control', icon: '🐜', description: 'Keep ants out of your kitchen and away from your family. Effective, family-friendly treatments.' },
  { name: 'Termite Treatment', slug: 'termite-treatment', icon: '🪵', description: 'Protect your biggest investment. Expert termite inspections and treatment for Camden County homes.' },
  { name: 'Bed Bug Removal', slug: 'bed-bug-removal', icon: '🛏️', description: 'Sleep easy again. Thorough bed bug removal using proven, effective treatments.' },
  { name: 'Rodent Control', slug: 'rodent-control', icon: '🐀', description: "Mice and rats don't belong near your family. We remove them and seal entry points." },
  { name: 'Cockroach Control', slug: 'cockroach-control', icon: '🪳', description: 'Complete cockroach elimination that protects your family and home.' },
  { name: 'Mosquito Control', slug: 'mosquito-control', icon: '🦟', description: 'Take back your backyard. Family-friendly mosquito treatments for outdoor enjoyment.' },
  { name: 'Spider Control', slug: 'spider-control', icon: '🕷️', description: 'No more surprises in the basement or garage. Thorough spider removal for your whole home.' },
  { name: 'Wasp & Hornet Removal', slug: 'wasp-hornet-removal', icon: '🐝', description: "Protect your family from stinging insects. We'll remove nests from your property." },
  { name: 'Flea & Tick Treatment', slug: 'flea-tick-treatment', icon: '🦗', description: 'Protect your family and pets. Professional flea and tick control for home and yard.' },
  { name: 'Wildlife Removal', slug: 'wildlife-removal', icon: '🦝', description: 'Raccoons, squirrels, bats, or birds in the attic? Humane removal that protects your family.' },
  { name: 'Commercial Pest Control', slug: 'commercial-pest-control', icon: '🏢', description: 'Customized pest management for Camden County businesses. Discreet, reliable, effective.' },
] as const;

export const GMB = {
  placeId: '',
  profileUrl: '',
  rating: 0,
  reviewsEnabled: false,
} as const;

export const TRUST_STATS = [
  { icon: '🤝', value: 'Thousands', label: 'Of Happy Customers' },
  { icon: '⚡', value: 'Same Day', label: 'Next Day Service' },
  { icon: '🔒', value: 'Discreet', label: 'Services' },
  { icon: '🔬', value: 'Expert', label: 'Analysis & Delivery' },
  { icon: '📞', value: 'High-Level', label: 'Communication' },
  { icon: '✅', value: 'Licensed', label: '& Insured' },
] as const;

export const LEAD_ROUTING = {
  defaultRoute: 'SS',
  webhookUrl: '',
} as const;

export const SEO = {
  titleTemplate: (pageTitle: string) => `${pageTitle} | Camden County Pest Control`,
  defaultTitle: 'Camden County Pest Control | Licensed Exterminators in Camden County, NJ',
  defaultDescription: SITE_DESCRIPTION,
  ogImage: '/images/og-default.jpg',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: 'Ant Control', href: '/services/ant-control' },
    { label: 'Termite Treatment', href: '/services/termite-treatment' },
    { label: 'Bed Bug Removal', href: '/services/bed-bug-removal' },
    { label: 'Rodent Control', href: '/services/rodent-control' },
    { label: 'Cockroach Control', href: '/services/cockroach-control' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;

export const HOURS = {
  weekday: '7:00 AM – 7:00 PM',
  saturday: '7:00 AM – 5:00 PM',
  sunday: 'Closed',
  emergency: '24/7 Emergency Service Available',
} as const;

export const REVIEWS = [] as const;

export const NETWORK_SITES = [] as const;

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || '';
