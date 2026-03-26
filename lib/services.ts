export const SERVICES = [
  { name: 'Ant Control', slug: 'ant-control', icon: '🐜' },
  { name: 'Termite Treatment', slug: 'termite-treatment', icon: '🪵' },
  { name: 'Bed Bug Removal', slug: 'bed-bug-removal', icon: '🛏️' },
  { name: 'Rodent Control', slug: 'rodent-control', icon: '🐀' },
  { name: 'Cockroach Control', slug: 'cockroach-control', icon: '🪳' },
  { name: 'Mosquito Control', slug: 'mosquito-control', icon: '🦟' },
  { name: 'Spider Control', slug: 'spider-control', icon: '🕷️' },
  { name: 'Wasp & Hornet Removal', slug: 'wasp-hornet-removal', icon: '🐝' },
  { name: 'Flea & Tick Treatment', slug: 'flea-tick-treatment', icon: '🦗' },
  { name: 'Wildlife Removal', slug: 'wildlife-removal', icon: '🦝' },
  { name: 'Commercial Pest Control', slug: 'commercial-pest-control', icon: '🏢' },
  { name: 'Raccoon Removal', slug: 'raccoon-removal', icon: '🦝' },
  { name: 'Squirrel Removal', slug: 'squirrel-removal', icon: '🐿️' },
  { name: 'Bat Removal', slug: 'bat-removal', icon: '🦇' },
  { name: 'Bird Control', slug: 'bird-control', icon: '🐦' },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]['slug'];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    'ant-control':
      'Professional ant control and extermination services in Camden County, NJ. We eliminate carpenter ants, pavement ants, odorous house ants, and other ant species from your home or business.',
    'termite-treatment':
      'Expert termite treatment and prevention for Camden County properties. We offer liquid treatments, bait systems, and comprehensive termite inspections to protect your biggest investment.',
    'bed-bug-removal':
      'Complete bed bug removal services in Camden County. Our heat treatment and chemical solutions eliminate bed bugs at every life stage for proven results.',
    'rodent-control':
      'Effective rodent control for mice and rats in Camden County homes and businesses. We provide trapping, exclusion, and prevention services to keep rodents out for good.',
    'cockroach-control':
      'Professional cockroach extermination in Camden County. We treat German cockroaches, American cockroaches, and Oriental cockroaches with targeted treatments that work.',
    'mosquito-control':
      'Mosquito control and prevention services throughout Camden County, NJ. Reduce mosquito populations around your property with our barrier treatments and larvicide programs.',
    'spider-control':
      'Spider control services for Camden County homes. We eliminate common house spiders, wolf spiders, and brown recluse spiders while treating the insects they feed on.',
    'wasp-hornet-removal':
      'Expert wasp and hornet nest removal in Camden County. We handle yellow jackets, paper wasps, bald-faced hornets, and mud daubers with professional-grade equipment.',
    'flea-tick-treatment':
      'Flea and tick treatment for Camden County homes and yards. Protect your family and pets with our comprehensive indoor and outdoor treatment programs.',
    'wildlife-removal':
      'Humane wildlife removal services in Camden County, NJ. We safely trap and relocate raccoons, squirrels, opossums, skunks, and other nuisance wildlife from your property.',
    'commercial-pest-control':
      'Commercial pest control services for Camden County businesses. We provide customized IPM programs for restaurants, offices, warehouses, healthcare facilities, and retail stores.',
    'raccoon-removal':
      'Professional raccoon removal and exclusion services in Camden County, NJ. Raccoons frequently invade attics, chimneys, and crawl spaces in neighborhoods near Cooper River Park, Winslow Township wooded corridors, and older homes in Haddonfield and Collingswood. Our licensed wildlife technicians use humane live-trapping methods approved by the NJDEP, seal all entry points, and sanitize contaminated areas to protect your family from raccoon roundworm and other health hazards.',
    'squirrel-removal':
      'Expert squirrel removal and attic restoration in Camden County, NJ. Eastern gray squirrels and flying squirrels are among the most common wildlife invaders in Cherry Hill, Voorhees, and Mount Laurel homes, chewing through wiring, insulation, and fascia boards. Our team performs thorough inspections, installs one-way exclusion doors, and seals every gap to prevent re-entry — all in compliance with New Jersey wildlife regulations.',
    'bat-removal':
      'Licensed bat removal and exclusion throughout Camden County, NJ. Big brown bats and little brown bats roost in attics, soffits, and barns across Gloucester Township, Winslow Township, and Clementon — especially near the Pine Barrens corridor. Because bats are protected under NJ law, we use legal one-way exclusion devices outside of maternity season and seal every potential entry point to keep your home bat-free year-round.',
    'bird-control':
      'Professional bird control and deterrent installation in Camden County, NJ. Pigeons, starlings, sparrows, and Canada geese cause property damage and health concerns at commercial buildings, warehouses, and homes throughout Pennsauken, Bellmawr, and Gloucester Township. We install bird netting, spikes, shock track systems, and visual deterrents to protect your property while staying compliant with federal migratory bird laws.',
  };

  return (
    descriptions[slug] ||
    'Professional pest control services in Camden County, NJ. Contact us for a free estimate.'
  );
}
