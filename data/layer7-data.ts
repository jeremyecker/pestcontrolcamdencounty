export interface CityFAQ {
  q: string;
  a: string;
}

export interface NearbyTown {
  name: string;
  slug: string;
}

export interface NeighborhoodSection {
  intro: string;
  neighborhoods: string[];
}

export interface CityLayer7 {
  faqs?: CityFAQ[];        // city-specific FAQs (4 per hub)
  nearby?: NearbyTown[];   // 4-6 nearby towns
  neighborhoods?: NeighborhoodSection; // major hubs only
}

export const CITY_LAYER7: Record<string, CityLayer7> = {
  'cherry-hill': {
    faqs: [
      { q: 'What pests are most common in Cherry Hill, NJ?', a: 'Cherry Hill homes most commonly deal with German cockroaches (especially near the Route 38/70 restaurant corridor), termites in older wood-frame homes built in the 1960s-1970s, and rodents drawn by the dense commercial areas. Stink bugs are a major fall nuisance in residential neighborhoods like Barclay Farms and Erlton.' },
      { q: 'Do you serve all of Cherry Hill Township?', a: 'Yes — we cover all Cherry Hill neighborhoods including Barclay Farms, Erlton, Springdale, Kingston, Woodcrest, and the Route 38 commercial corridor.' },
      { q: 'How serious are termites in Cherry Hill?', a: 'Very serious. Cherry Hill has a large stock of homes built in the 1960s and 70s with wood-frame construction and crawl spaces — ideal conditions for Eastern subterranean termites. We recommend annual inspections for homes in these neighborhoods.' },
      { q: 'Can you respond same-day in Cherry Hill?', a: 'Yes. Cherry Hill is our primary service hub in Camden County. We offer same-day service when you call before noon and next-morning scheduling for most situations.' },
    ],
    nearby: [
      { name: 'Voorhees', slug: 'voorhees' },
      { name: 'Haddonfield', slug: 'haddonfield' },
      { name: 'Collingswood', slug: 'collingswood' },
      { name: 'Marlton', slug: 'marlton' },
      { name: 'Pennsauken', slug: 'pennsauken' },
    ],
    neighborhoods: {
      intro: 'Cherry Hill Township spans 24 square miles with distinct residential neighborhoods, each with its own pest profile. Older sections like Erlton and Barclay Farms have higher termite risk due to 1960s construction, while newer sections near Route 70 and Springdale Road see more stink bug pressure from adjacent wooded lots.',
      neighborhoods: ['Barclay Farms', 'Erlton', 'Springdale', 'Kingston', 'Woodcrest', 'Chartwell', 'Fox and Hounds', 'Society Hill'],
    },
  },
  'voorhees': {
    faqs: [
      { q: 'What pests are most common in Voorhees Township?', a: 'Voorhees sees high tick pressure due to its heavily wooded lots and proximity to preserved open space. Stink bugs are a major fall nuisance in neighborhoods like Echelon and Eagle Creek. Carpenter ants are common in wooded areas, and termites affect older sections near Burnt Mill Road.' },
      { q: 'Do you serve all Voorhees neighborhoods?', a: 'Yes — we cover Echelon, Eagle Creek, Voorhees Town Center area, White Horse Pike corridor, and all residential sections of Voorhees Township.' },
      { q: 'Are deer ticks a problem in Voorhees?', a: 'Yes. Voorhees Township borders preserved woodlands and has significant deer populations. We offer perimeter tick treatments for yards, especially effective in spring and fall when tick activity peaks.' },
      { q: 'Do you treat carpenter ants in Voorhees?', a: 'Absolutely. Carpenter ants are common in Voorhees due to the abundant mature trees and wooded buffers. We identify nesting sites, treat satellite colonies, and recommend moisture reduction to prevent return.' },
    ],
    nearby: [
      { name: 'Cherry Hill', slug: 'cherry-hill' },
      { name: 'Marlton', slug: 'marlton' },
      { name: 'Haddonfield', slug: 'haddonfield' },
      { name: 'Gibbsboro', slug: 'gibbsboro' },
    ],
    neighborhoods: {
      intro: 'Voorhees Township developed rapidly in the 1980s and 1990s, creating a mix of wooded cul-de-sac neighborhoods and newer townhome communities. The wooded lots that make Voorhees desirable also create prime habitat for ticks, stink bugs, and carpenter ants.',
      neighborhoods: ['Echelon', 'Eagle Creek', 'Centennial Village', 'Downs Farm', 'Marlton Lakes area'],
    },
  },
  'haddonfield': {
    faqs: [
      { q: 'What are the main pest issues in Haddonfield?', a: 'Haddonfield is a historic Victorian-era borough with homes dating to the 1800s and early 1900s. Termites are the primary structural concern in older wood-frame homes. Rodents are drawn to the downtown Kings Highway restaurant area. Carpenter ants nest in aging wood sills and trim throughout the borough.' },
      { q: 'Do you handle termite inspections for Haddonfield real estate transactions?', a: 'Yes — we provide NJ Wood Destroying Insect (WDI) reports required for most real estate transactions in New Jersey, including Haddonfield.' },
      { q: 'Is Haddonfield a high-risk area for termites?', a: "Haddonfield's historic housing stock — much of it built before 1950 — is particularly vulnerable to Eastern subterranean termites. Many homes have older fieldstone or brick foundations with wood framing directly in contact with soil." },
      { q: 'How quickly can you respond in Haddonfield?', a: 'Haddonfield is centrally located in our service area. We can typically respond same-day when you call before noon, or next morning for scheduled appointments.' },
    ],
    nearby: [
      { name: 'Collingswood', slug: 'collingswood' },
      { name: 'Cherry Hill', slug: 'cherry-hill' },
      { name: 'Haddon Heights', slug: 'haddon-heights' },
      { name: 'Haddon Township', slug: 'haddon-township' },
      { name: 'Audubon', slug: 'audubon' },
    ],
  },
  'collingswood': {
    faqs: [
      { q: 'What pests are common in Collingswood homes?', a: "Collingswood is a dense borough of craftsman bungalows and row homes built primarily in the 1910s-1930s. Cockroaches — especially German cockroaches — transfer between shared walls. Rodents are drawn by the Knight Avenue restaurant district. Older homes have significant termite risk and carpenter ant activity in aging window frames." },
      { q: 'Do you treat shared-wall cockroach infestations in row homes?', a: 'Yes — shared-wall pest transfer is one of the most common challenges in Collingswood. We treat comprehensively, addressing harborage points in shared wall voids and coordinating with neighboring units when needed.' },
      { q: 'How do you handle rodents near the downtown restaurant district?', a: 'The Knight Avenue restaurant corridor creates rodent pressure in surrounding residential blocks. We use a combination of exterior exclusion, tamper-resistant bait stations, and interior trapping for comprehensive rodent management.' },
      { q: 'Can you service my Collingswood business?', a: 'Yes. We serve Collingswood restaurants, retail shops, and commercial properties along Knight Avenue, Haddon Avenue, and throughout the borough.' },
    ],
    nearby: [
      { name: 'Haddonfield', slug: 'haddonfield' },
      { name: 'Oaklyn', slug: 'oaklyn' },
      { name: 'Audubon', slug: 'audubon' },
      { name: 'Merchantville', slug: 'merchantville' },
      { name: 'Cherry Hill', slug: 'cherry-hill' },
    ],
  },
  'pennsauken': {
    faqs: [
      { q: 'What pest issues are common in Pennsauken?', a: "Pennsauken's mix of industrial zones along the Delaware River and dense residential neighborhoods creates diverse pest pressure. American cockroaches (waterbugs) are common near the river. Rodents thrive near the industrial corridor along Route 130. Residential areas see standard suburban pests including ants, termites in older homes, and stink bugs." },
      { q: 'Do you serve commercial properties in Pennsauken?', a: 'Yes — the Pennsauken Industrial Park and Route 130 commercial corridor are core service areas. We provide commercial pest programs for warehouses, manufacturing facilities, restaurants, and retail.' },
      { q: "Are waterbugs (American cockroaches) common in Pennsauken?", a: "Yes. Pennsauken's proximity to the Delaware River and older sewer infrastructure creates conditions where American cockroaches (commonly called waterbugs) can enter homes through drains and sewer connections. Treatment requires both interior and exterior approaches." },
      { q: 'Do you respond quickly to Pennsauken?', a: 'Yes — Pennsauken is in our core Camden County coverage area. Same-day service is typically available when you call before noon.' },
    ],
    nearby: [
      { name: 'Cherry Hill', slug: 'cherry-hill' },
      { name: 'Camden', slug: 'camden' },
      { name: 'Collingswood', slug: 'collingswood' },
      { name: 'Merchantville', slug: 'merchantville' },
      { name: 'Barrington', slug: 'barrington' },
    ],
  },
  'gloucester-township': {
    faqs: [
      { q: 'What pests are common in Gloucester Township?', a: 'Gloucester Township is one of the largest municipalities in Camden County with a mix of older established neighborhoods and newer developments along the Route 42 corridor. Termites affect older sections, stink bugs invade from adjacent wooded areas in fall, and rodents are active in winter across the township.' },
      { q: 'Do you cover all of Gloucester Township?', a: 'Yes — we service all Gloucester Township sections including Blackwood, Erial, Chews Landing, Glendora, and the Route 42 commercial corridor.' },
      { q: "What makes Gloucester Township different from other Camden County towns?", a: "Gloucester Township's size means a wide range of housing types — from 1950s cape cods to new construction. Older sections near Blackwood have higher termite risk; newer sections have more wildlife encroachment as development pushes into wooded areas." },
      { q: 'Do you offer termite protection plans in Gloucester Township?', a: 'Yes. We offer both liquid barrier treatments and Sentricon bait systems for Gloucester Township homes, with annual inspection plans to maintain coverage.' },
    ],
    nearby: [
      { name: 'Clementon', slug: 'clementon' },
      { name: 'Bellmawr', slug: 'bellmawr' },
      { name: 'Runnemede', slug: 'runnemede' },
      { name: 'Stratford', slug: 'stratford' },
      { name: 'Somerdale', slug: 'somerdale' },
    ],
  },
  'camden': {
    faqs: [
      { q: 'What are the main pest issues in Camden City?', a: 'Camden City has dense row home neighborhoods with older housing stock, proximity to the Delaware River, and significant cockroach and rodent pressure typical of urban environments. American cockroaches enter through aging sewer lines; German cockroaches thrive in multi-unit housing; rodents are active year-round near food sources and the waterfront.' },
      { q: 'Do you serve residential and commercial properties in Camden?', a: 'Yes — we serve Camden City homes, apartment buildings, restaurants, and commercial properties throughout all neighborhoods.' },
      { q: 'Are there pest control options for renters in Camden?', a: 'Yes. We work directly with renters and can coordinate with property owners. New Jersey tenant rights give renters recourse if landlords fail to address infestations — we can document conditions and provide treatment.' },
      { q: 'How do you handle bed bugs in Camden City apartments?', a: 'Bed bug treatment in multi-unit buildings requires coordinated inspection of adjacent units. We provide both chemical and heat treatment options and work with property managers to implement building-wide protocols.' },
    ],
    nearby: [
      { name: 'Pennsauken', slug: 'pennsauken' },
      { name: 'Collingswood', slug: 'collingswood' },
      { name: 'Brooklawn', slug: 'brooklawn' },
      { name: 'Gloucester City', slug: 'gloucester-city' },
    ],
  },
  'marlton': {
    faqs: [
      { q: 'What pests are common in Marlton?', a: "Marlton is a mix of planned communities from the 1970s-1990s (Kings Grant, The Woodlands, Marlton Lakes) and newer developments near Route 73. Stink bugs are a major fall issue near wooded buffer zones. Termites affect older sections from the 1970s-80s. Carpenter ants are common near the abundant mature trees in established neighborhoods." },
      { q: 'Is Marlton considered part of Evesham Township?', a: 'Yes — Marlton is the main populated center of Evesham Township. We serve all Evesham Township/Marlton addresses throughout the municipality.' },
      { q: 'Do you serve Kings Grant and Marlton Lakes?', a: 'Yes — Kings Grant, Marlton Lakes, The Woodlands, and all Marlton neighborhoods are in our Camden County service area.' },
      { q: 'What about stink bugs? Marlton seems to have a lot of them.', a: 'Stink bugs are extremely common in Marlton because of the wooded buffers surrounding many developments. We offer fall perimeter treatments that significantly reduce stink bug entry before temperatures drop.' },
    ],
    nearby: [
      { name: 'Voorhees', slug: 'voorhees' },
      { name: 'Cherry Hill', slug: 'cherry-hill' },
      { name: 'Mount Laurel', slug: 'mount-laurel' },
      { name: 'Berlin', slug: 'berlin' },
    ],
  },
  'mount-laurel': {
    faqs: [
      { q: 'What pests are most common in Mount Laurel?', a: "Mount Laurel is a planned community with significant corporate office parks and residential development. Stink bugs and carpenter ants are common in wooded residential areas. Rodents are active near the dense commercial corridor along Route 38 and Centerton Road. Termites affect older 1970s-1980s construction." },
      { q: 'Do you serve Mount Laurel businesses and office parks?', a: 'Yes — Mount Laurel has one of the largest corporate/office park concentrations in South Jersey. We provide commercial pest programs for office buildings, restaurants, hotels, and retail centers along Route 38 and the NJ Turnpike corridor.' },
      { q: 'Is Mount Laurel in Camden County?', a: 'Mount Laurel is in Burlington County, just across the county line from Camden County. We service all Mount Laurel addresses throughout the township.' },
      { q: 'Do you offer quarterly commercial service contracts in Mount Laurel?', a: 'Yes — quarterly service contracts are our most popular commercial option for Mount Laurel office buildings and restaurants. We provide detailed service reports for each visit.' },
    ],
    nearby: [
      { name: 'Marlton', slug: 'marlton' },
      { name: 'Cherry Hill', slug: 'cherry-hill' },
      { name: 'Voorhees', slug: 'voorhees' },
    ],
  },
  'winslow-township': {
    faqs: [
      { q: 'What pests are common in Winslow Township?', a: "Winslow Township is one of the largest and most rural municipalities in Camden County. Large wooded lots create significant wildlife pressure — raccoons, squirrels, groundhogs, and deer are common. Ticks are active throughout the wooded areas of Sicklerville, Ancora, and Tansboro. Carpenter ants nest in the abundant mature trees and decayed wood." },
      { q: 'Do you cover all of Winslow Township including Sicklerville?', a: 'Yes — we cover all Winslow Township communities including Sicklerville, Ancora, Tansboro, Blue Anchor, and all rural sections of the township.' },
      { q: 'Is wildlife removal available in Winslow Township?', a: "Yes. Winslow Township's rural character means frequent wildlife conflicts — raccoons in attics, squirrels in crawl spaces, groundhogs under decks. We handle exclusion and humane removal throughout the township." },
      { q: 'Are tick treatments available for large Winslow Township yards?', a: 'Yes. We offer perimeter tick treatments for residential yards up to 2 acres. Spring and fall applications provide the best protection during peak tick season.' },
    ],
    nearby: [
      { name: 'Pine Hill', slug: 'pine-hill' },
      { name: 'Clementon', slug: 'clementon' },
      { name: 'Gloucester Township', slug: 'gloucester-township' },
      { name: 'Waterford Township', slug: 'waterford-township' },
    ],
  },
  'bellmawr': { nearby: [{ name: 'Runnemede', slug: 'runnemede' }, { name: 'Barrington', slug: 'barrington' }, { name: 'Gloucester Township', slug: 'gloucester-township' }, { name: 'Mount Ephraim', slug: 'mount-ephraim' }] },
  'audubon': { nearby: [{ name: 'Haddonfield', slug: 'haddonfield' }, { name: 'Collingswood', slug: 'collingswood' }, { name: 'Mount Ephraim', slug: 'mount-ephraim' }, { name: 'Barrington', slug: 'barrington' }] },
  'barrington': { nearby: [{ name: 'Bellmawr', slug: 'bellmawr' }, { name: 'Audubon', slug: 'audubon' }, { name: 'Somerdale', slug: 'somerdale' }, { name: 'Haddon Heights', slug: 'haddon-heights' }] },
  'somerdale': { nearby: [{ name: 'Barrington', slug: 'barrington' }, { name: 'Gloucester Township', slug: 'gloucester-township' }, { name: 'Bellmawr', slug: 'bellmawr' }, { name: 'Berlin', slug: 'berlin' }] },
  'runnemede': { nearby: [{ name: 'Bellmawr', slug: 'bellmawr' }, { name: 'Mount Ephraim', slug: 'mount-ephraim' }, { name: 'Barrington', slug: 'barrington' }, { name: 'Gloucester City', slug: 'gloucester-city' }] },
  'clementon': { nearby: [{ name: 'Gloucester Township', slug: 'gloucester-township' }, { name: 'Pine Hill', slug: 'pine-hill' }, { name: 'Stratford', slug: 'stratford' }, { name: 'Lindenwold', slug: 'lindenwold' }] },
  'berlin': { nearby: [{ name: 'Stratford', slug: 'stratford' }, { name: 'Voorhees', slug: 'voorhees' }, { name: 'Marlton', slug: 'marlton' }, { name: 'Waterford Township', slug: 'waterford-township' }] },
  'stratford': { nearby: [{ name: 'Berlin', slug: 'berlin' }, { name: 'Somerdale', slug: 'somerdale' }, { name: 'Gloucester Township', slug: 'gloucester-township' }, { name: 'Clementon', slug: 'clementon' }] },
  'pine-hill': { nearby: [{ name: 'Clementon', slug: 'clementon' }, { name: 'Winslow Township', slug: 'winslow-township' }, { name: 'Berlin', slug: 'berlin' }, { name: 'Gloucester Township', slug: 'gloucester-township' }] },
  'magnolia': { nearby: [{ name: 'Barrington', slug: 'barrington' }, { name: 'Somerdale', slug: 'somerdale' }, { name: 'Bellmawr', slug: 'bellmawr' }, { name: 'Gloucester Township', slug: 'gloucester-township' }] },
  'merchantville': { nearby: [{ name: 'Pennsauken', slug: 'pennsauken' }, { name: 'Collingswood', slug: 'collingswood' }, { name: 'Cherry Hill', slug: 'cherry-hill' }, { name: 'Audubon', slug: 'audubon' }] },
  'oaklyn': { nearby: [{ name: 'Collingswood', slug: 'collingswood' }, { name: 'Audubon', slug: 'audubon' }, { name: 'Haddon Township', slug: 'haddon-township' }, { name: 'Cherry Hill', slug: 'cherry-hill' }] },
  'haddon-heights': { nearby: [{ name: 'Haddon Township', slug: 'haddon-township' }, { name: 'Haddonfield', slug: 'haddonfield' }, { name: 'Barrington', slug: 'barrington' }, { name: 'Audubon', slug: 'audubon' }] },
  'haddon-township': { nearby: [{ name: 'Haddon Heights', slug: 'haddon-heights' }, { name: 'Collingswood', slug: 'collingswood' }, { name: 'Oaklyn', slug: 'oaklyn' }, { name: 'Haddonfield', slug: 'haddonfield' }] },
  'mount-ephraim': { nearby: [{ name: 'Bellmawr', slug: 'bellmawr' }, { name: 'Runnemede', slug: 'runnemede' }, { name: 'Gloucester City', slug: 'gloucester-city' }, { name: 'Audubon', slug: 'audubon' }] },
  'lawnside': { nearby: [{ name: 'Haddonfield', slug: 'haddonfield' }, { name: 'Cherry Hill', slug: 'cherry-hill' }, { name: 'Barrington', slug: 'barrington' }, { name: 'Magnolia', slug: 'magnolia' }] },
  'laurel-springs': { nearby: [{ name: 'Stratford', slug: 'stratford' }, { name: 'Clementon', slug: 'clementon' }, { name: 'Somerdale', slug: 'somerdale' }, { name: 'Gloucester Township', slug: 'gloucester-township' }] },
  'gibbsboro': { nearby: [{ name: 'Voorhees', slug: 'voorhees' }, { name: 'Cherry Hill', slug: 'cherry-hill' }, { name: 'Berlin', slug: 'berlin' }, { name: 'Marlton', slug: 'marlton' }] },
  'waterford-township': { nearby: [{ name: 'Winslow Township', slug: 'winslow-township' }, { name: 'Berlin', slug: 'berlin' }, { name: 'Atco', slug: 'atco' }, { name: 'Pine Hill', slug: 'pine-hill' }] },
  'brooklawn': { nearby: [{ name: 'Gloucester City', slug: 'gloucester-city' }, { name: 'Camden', slug: 'camden' }, { name: 'Mount Ephraim', slug: 'mount-ephraim' }, { name: 'Bellmawr', slug: 'bellmawr' }] },
  'gloucester-city': { nearby: [{ name: 'Brooklawn', slug: 'brooklawn' }, { name: 'Bellmawr', slug: 'bellmawr' }, { name: 'Mount Ephraim', slug: 'mount-ephraim' }, { name: 'Camden', slug: 'camden' }] },
  'hi-nella': { nearby: [{ name: 'Somerdale', slug: 'somerdale' }, { name: 'Barrington', slug: 'barrington' }, { name: 'Magnolia', slug: 'magnolia' }, { name: 'Gloucester Township', slug: 'gloucester-township' }] },
  'chesilhurst': { nearby: [{ name: 'Winslow Township', slug: 'winslow-township' }, { name: 'Pine Hill', slug: 'pine-hill' }, { name: 'Berlin', slug: 'berlin' }, { name: 'Waterford Township', slug: 'waterford-township' }] },
  'atco': { nearby: [{ name: 'Waterford Township', slug: 'waterford-township' }, { name: 'Winslow Township', slug: 'winslow-township' }, { name: 'Berlin', slug: 'berlin' }, { name: 'Marlton', slug: 'marlton' }] },
  'lindenwold': { nearby: [{ name: 'Clementon', slug: 'clementon' }, { name: 'Stratford', slug: 'stratford' }, { name: 'Laurel Springs', slug: 'laurel-springs' }, { name: 'Pine Hill', slug: 'pine-hill' }] },
};
