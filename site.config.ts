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
export const SITE_DESCRIPTION = 'Licensed exterminator serving Camden County, NJ — Cherry Hill, Voorhees, Gloucester Township, Haddonfield & more. Same-day service available. Call (856) 600-0812.';
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
  { name: 'Ant Control', slug: 'ant-control', icon: '🐜', description: 'Carpenter ants and pavement ants thrive across Camden County neighborhoods from Cherry Hill to Collingswood. We pinpoint colonies and eliminate them at the source.' },
  { name: 'Termite Treatment', slug: 'termite-treatment', icon: '🪵', description: 'Older homes along the PATCO corridor in Haddonfield and Audubon are especially vulnerable to subterranean termites. We provide thorough inspections and proven barrier treatments.' },
  { name: 'Bed Bug Removal', slug: 'bed-bug-removal', icon: '🛏️', description: 'Bed bugs spread quickly through Camden County apartments and homes. Our multi-step treatment protocol eliminates every life stage so you can rest easy again.' },
  { name: 'Rodent Control', slug: 'rodent-control', icon: '🐀', description: 'Mice and rats push inland from the Delaware River waterfront through Pennsauken and Camden each fall. We trap, remove, and seal entry points to keep them out for good.' },
  { name: 'Cockroach Control', slug: 'cockroach-control', icon: '🪳', description: 'Dense housing in Camden County boroughs creates ideal conditions for cockroaches. Our targeted gel baits and residual treatments break the breeding cycle fast.' },
  { name: 'Mosquito Control', slug: 'mosquito-control', icon: '🦟', description: 'Cooper River parks and backyard pools across Voorhees and Cherry Hill fuel summer mosquito populations. Our barrier sprays let you reclaim your outdoor space.' },
  { name: 'Spider Control', slug: 'spider-control', icon: '🕷️', description: 'Basements and garages throughout Gloucester Township and Blackwood are prime spider habitat. We clear existing webs and apply preventive treatments to keep them away.' },
  { name: 'Wasp & Hornet Removal', slug: 'wasp-hornet-removal', icon: '🐝', description: 'Stinging insects build nests under eaves and in soffits across Camden County suburbs. We safely remove active nests and treat the area to discourage rebuilding.' },
  { name: 'Flea & Tick Treatment', slug: 'flea-tick-treatment', icon: '🦗', description: 'Wooded trails near Winslow and Clementon bring tick exposure, while fleas hitchhike indoors on pets. Our yard-and-home treatments protect the whole family.' },
  { name: 'Wildlife Removal', slug: 'wildlife-removal', icon: '🦝', description: 'Raccoons, squirrels, and bats find their way into attics across Camden County — especially near the wooded eastern townships. We remove them humanely and secure your home.' },
  { name: 'Commercial Pest Control', slug: 'commercial-pest-control', icon: '🏢', description: 'From Cherry Hill office parks to Pennsauken industrial sites, Camden County businesses rely on our discreet, scheduled pest management programs.' },
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
  defaultTitle: 'Exterminator Near Me | Camden County, NJ | Pest Control',
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
  emergency: 'Same-Day Emergency Service Available',
} as const;

export const REVIEWS = [] as const;

export const NETWORK_SITES = [
  { name: 'L&L Pest Control Poconos PA', url: 'https://landlpestcontrol.com/exterminator-near-me', description: 'Poconos & Lehigh Valley, PA exterminators', emoji: '🌲' },
  { name: 'Poconos Pest Control PA', url: 'https://poconospestcontrol.com/exterminator-near-me', description: 'Pocono Mountains, PA pest control', emoji: '🏔️' },
  { name: 'Burlington County NJ Exterminator', url: 'https://burlingtoncountypestcontrolnearme.com/exterminator-near-me', description: 'Burlington County, NJ pest control', emoji: '🌿' },
  { name: 'Gloucester County NJ Exterminator', url: 'https://gloucestercountypestcontrolnearme.com/exterminator-near-me', description: 'Gloucester County, NJ pest control', emoji: '🏡' },
  { name: 'Philadelphia Exterminator', url: 'https://philadelphiapestcontrolnearme.com/exterminator-near-me', description: 'Philadelphia, PA pest control services', emoji: '🔔' },
] as const;

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || '';
