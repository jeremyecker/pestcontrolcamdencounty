// hub.config.ts — Camden County Pest Control
// Everything else reads from here.

// ============================================================
// TEMPLATE METADATA
// ============================================================
export const TEMPLATE_META = {
  vertical: 'pest',
  geoLevel: 'regional-hub',
} as const;

export const BRAND = {
  name: 'Camden County Pest Control',
  tagline: 'Trusted Pest Control for Camden County, New Jersey',
  domain: 'pestcontrolcamdencounty.com',
  phone: '8566000812',
  phoneFormatted: '(856) 600-0812',
  email: 'info@pestcontrolcamdencounty.com',
  primaryColor: '#1A365D',
  secondaryColor: '#2B6CB0',
  accentColor: '#DD6B20',
  yearFounded: 2011,
  region: 'Camden County, NJ',
  webhookUrl: 'https://omcdxpqhnrhgnkxafgtn.supabase.co/functions/v1/webhook-camdencounty',
} as const;

// ============================================================
// GMBs — add as acquired
// ============================================================
export const GMBS = [] as GMBEntry[];

// ============================================================
// REVIEWS
// ============================================================
export const REVIEWS = [] as const;

// ============================================================
// REGIONS — Camden County (single region)
// ============================================================
const CAMDEN_TOWNS = [
  'Cherry Hill', 'Voorhees', 'Haddonfield', 'Collingswood', 'Pennsauken',
  'Gloucester Township', 'Winslow Township', 'Lindenwold', 'Bellmawr', 'Audubon',
  'Barrington', 'Somerdale', 'Runnemede', 'Clementon', 'Marlton', 'Mount Laurel',
  'Berlin', 'Stratford', 'Pine Hill', 'Magnolia', 'Merchantville', 'Oaklyn',
  'Haddon Heights', 'Haddon Township', 'Mount Ephraim', 'Lawnside', 'Laurel Springs',
  'Gibbsboro', 'Waterford Township', 'Brooklawn', 'Gloucester City',
  'Camden', 'Hi-Nella', 'Chesilhurst', 'Atco',
];

export const REGIONS: RegionConfig[] = [
  {
    slug: 'camden-county',
    name: 'Camden County',
    shortName: 'Camden County',
    stateName: 'New Jersey',
    stateCode: 'NJ',
    isPrimary: true,
    gmbId: null,
    counties: ['Camden County'],
    heroHeadline: 'Camden County Pest Control You Can Trust',
    heroSubhead: 'Licensed NJ exterminators serving Cherry Hill, Voorhees, Haddonfield, Collingswood, and all of Camden County.',
    heroImage: '/images/camden-hero.jpg',
    geoDescription: 'From the tree-lined streets of Haddonfield to the busy corridors of Cherry Hill, Camden County homes and businesses face year-round pest pressure from termites, rodents, ants, and wildlife.',
    primaryPests: ['Termites', 'Rodents', 'Ants', 'Cockroaches'],
    pestContext: "Camden County's mix of suburban neighborhoods, older homes, wooded lots, and proximity to the Delaware River creates ideal conditions for termites, rodents, ants, and cockroaches year-round.",
    metaTitle: 'Camden County Exterminators',
    metaDescription: 'Trusted pest control for Camden County NJ. Serving Cherry Hill, Voorhees, Haddonfield & all 35 communities. Licensed, insured, eco-friendly treatments.',
    towns: CAMDEN_TOWNS,
    townCount: CAMDEN_TOWNS.length,
  },
];

// ============================================================
// NETWORK SITES — sister sites for cross-linking
// ============================================================
export const NETWORK_SITES: NetworkSite[] = [];

// ============================================================
// TYPES
// ============================================================
export interface GMBEntry {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  placeId: string;
  rating: number;
  reviewCount: number;
  latitude: number;
  longitude: number;
}

export interface RegionConfig {
  slug: string;
  name: string;
  shortName: string;
  stateName: string;
  stateCode: string;
  isPrimary: boolean;
  gmbId: string | null;
  counties: string[];
  heroHeadline: string;
  heroSubhead: string;
  heroImage: string;
  geoDescription: string;
  primaryPests: string[];
  pestContext: string;
  metaTitle: string;
  metaDescription: string;
  towns: string[];
  townCount: number;
}

export interface NetworkSite {
  name: string;
  url: string;
  description: string;
  emoji: string;
}
