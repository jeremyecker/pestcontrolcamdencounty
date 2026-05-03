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
    neighborhoods: {
      intro: 'Haddonfield is a historic Victorian-era borough chartered in 1695, with a housing stock that spans three centuries. The concentration of pre-1950 homes along Kings Highway and in the downtown historic district creates significant termite and carpenter ant pressure.',
      neighborhoods: ['Kings Highway Historic District', 'Hopkins Pond area', 'Crystal Lake area', 'Downtown Haddonfield', 'South Haddonfield'],
    },
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
    neighborhoods: {
      intro: 'Collingswood is a compact, walkable borough of craftsman bungalows and row homes built primarily between 1910 and 1940. Shared walls create pest transfer pathways between units, and the thriving Knight Avenue restaurant district generates year-round rodent pressure in surrounding residential blocks.',
      neighborhoods: ['Knight Avenue District', 'Collings Avenue corridor', 'North Collingswood', 'Fern Hill', 'Centre Square'],
    },
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
  'bellmawr': {
    faqs: [
      { q: 'What pests are most common in Bellmawr?', a: 'Bellmawr is a dense industrial and residential borough along I-295, and rodent pressure is among the highest in Camden County. The Route 42 interchange and commercial corridors attract rats and mice year-round. Waterbugs (American cockroaches) are common near older sewer infrastructure, and termites affect the older row homes and garden apartments throughout the borough.' },
      { q: 'Are waterbugs a big problem in Bellmawr?', a: 'Yes. Bellmawr has older sewer and storm drain infrastructure that provides easy entry points for American cockroaches, commonly called waterbugs. They typically enter through floor drains, toilet seals, and pipe penetrations. We treat both interior harborage points and exterior entry paths for lasting control.' },
      { q: 'Do you treat rodents near the I-295 and Route 42 area in Bellmawr?', a: 'Absolutely. The I-295 and Route 42 interchange creates ideal rodent habitat — dumpsters, loading docks, and dense commercial activity draw rats and mice into surrounding residential blocks. We use exterior bait stations, exclusion, and interior trapping to break the cycle.' },
      { q: 'How quickly can you respond to a pest problem in Bellmawr?', a: 'Bellmawr is in our core Camden County service area. We typically offer same-day service when you call before noon and next-morning appointments for scheduled treatments. Commercial accounts along the Route 42 corridor can be prioritized.' },
    ],
    nearby: [{ name: 'Runnemede', slug: 'runnemede' }, { name: 'Barrington', slug: 'barrington' }, { name: 'Gloucester Township', slug: 'gloucester-township' }, { name: 'Mount Ephraim', slug: 'mount-ephraim' }],
  },
  'audubon': {
    faqs: [
      { q: 'What are the main pest concerns in Audubon?', a: 'Audubon is a small historic borough with craftsman homes and row houses built between the 1910s and 1930s. Termites and carpenter ants are the top structural concerns in these older wood-frame homes. Rodents and cockroaches can be an issue near the Kings Highway restaurant corridor, and stink bugs are a seasonal nuisance in the fall.' },
      { q: 'Are termites a serious risk in Audubon homes?', a: "Yes. Audubon's older housing stock — much of it built before World War II — is highly vulnerable to Eastern subterranean termites. Wood framing, sill plates, and basement joists in homes of this era are prime targets. We recommend annual inspections for any Audubon home over 40 years old." },
      { q: 'Do you treat carpenter ants in Audubon?', a: 'Carpenter ants are common throughout Audubon, particularly in homes with aging wood trim, window frames, and any wood that has had moisture exposure. We locate satellite colonies, treat entry points, and address moisture conditions that make nesting attractive.' },
      { q: 'Can you handle pest issues near Kings Highway in Audubon?', a: 'Yes. The Kings Highway restaurant and retail corridor generates rodent and cockroach pressure that can spread into nearby residential properties. We serve both commercial businesses along Kings Highway and the surrounding residential blocks with targeted treatments.' },
    ],
    nearby: [{ name: 'Haddonfield', slug: 'haddonfield' }, { name: 'Collingswood', slug: 'collingswood' }, { name: 'Mount Ephraim', slug: 'mount-ephraim' }, { name: 'Barrington', slug: 'barrington' }],
  },
  'barrington': {
    faqs: [
      { q: 'What pests are common in Barrington?', a: "Barrington is a small, dense borough with older housing stock similar to neighboring Audubon and Haddon Heights. Termites are a primary concern in the 1940s-1950s homes that make up much of the borough. Stink bugs are a significant fall nuisance, and rodents are active near the commercial areas along White Horse Pike." },
      { q: 'Are termites a problem in Barrington homes?', a: "Barrington's housing was built largely in the 1940s and 1950s using wood-frame construction with minimal concrete barriers between soil and framing — conditions that favor Eastern subterranean termites. We offer both liquid soil treatments and Sentricon bait systems to protect Barrington homes." },
      { q: 'When do stink bugs become a problem in Barrington?', a: 'Stink bugs typically begin seeking entry into Barrington homes in late September through October as temperatures drop. They congregate on south-facing walls before squeezing through gaps around windows, doors, and utility penetrations. A fall perimeter treatment applied in September significantly reduces invasions.' },
      { q: 'Do you offer rodent control near White Horse Pike in Barrington?', a: 'Yes. The commercial activity along White Horse Pike generates rodent pressure that spills into adjacent residential streets. We use exterior bait stations, entry point exclusion, and interior trapping to control rodent populations in both residential and commercial properties.' },
    ],
    nearby: [{ name: 'Bellmawr', slug: 'bellmawr' }, { name: 'Audubon', slug: 'audubon' }, { name: 'Somerdale', slug: 'somerdale' }, { name: 'Haddon Heights', slug: 'haddon-heights' }],
  },
  'somerdale': {
    faqs: [
      { q: 'What pests are most common in Somerdale?', a: "Somerdale is a small borough of 1950s-1960s cape cods bordering Gloucester Township and the Blackwood commercial area. Termites and ants are the most frequent pest concerns in this era of construction. Rodents are active near the Blackwood commercial corridor, and stink bugs are a seasonal issue in the fall." },
      { q: 'Are termites common in Somerdale?', a: "Yes. The cape cod and ranch-style homes built in Somerdale during the 1950s and 1960s often have wood sill plates and framing close to grade level, which is ideal for Eastern subterranean termite activity. Many older homes in the borough have never had a termite inspection or treatment." },
      { q: 'Do you handle ant problems in Somerdale?', a: 'Absolutely. Pavement ants and carpenter ants are common throughout Somerdale, particularly in homes with older concrete stoops, sidewalk cracks, and mature trees. We treat entry points, eliminate interior foraging trails, and apply exterior perimeter barriers to keep ants out.' },
      { q: 'How quickly can you respond to a pest issue in Somerdale?', a: 'Somerdale is centrally located in our Camden County service area. We typically offer same-day service when you call before noon. Bordering Gloucester Township, we can route technicians efficiently from multiple directions.' },
    ],
    nearby: [{ name: 'Barrington', slug: 'barrington' }, { name: 'Gloucester Township', slug: 'gloucester-township' }, { name: 'Bellmawr', slug: 'bellmawr' }, { name: 'Berlin', slug: 'berlin' }],
  },
  'runnemede': {
    faqs: [
      { q: 'What pests are common in Runnemede?', a: "Runnemede is a small borough near the I-295 interchange and Route 168, with a mix of older wood-frame homes and a commercial corridor that drives pest activity. Rodents are active near restaurants and commercial properties, cockroaches are an issue in restaurant-adjacent buildings, and termites affect older residential homes throughout the borough." },
      { q: 'Do you treat rodents near the commercial areas of Runnemede?', a: "Yes. Runnemede's Route 168 and the I-295 interchange area support significant commercial activity that attracts rats and mice. We deploy exterior bait stations, seal structural entry points, and use interior trapping to control rodent populations in both commercial and nearby residential properties." },
      { q: 'Are cockroaches a problem in Runnemede?', a: 'Cockroaches — particularly German cockroaches — are common in Runnemede properties near food service businesses. They can spread from commercial to residential properties through shared plumbing chases and utility lines. We treat all harborage areas and breeding sites with targeted gel baits and perimeter applications.' },
      { q: 'How serious is termite risk in Runnemede?', a: "Runnemede's older wood-frame homes, many built in the 1940s-1960s, carry significant termite risk. Eastern subterranean termites are active throughout the borough and can cause substantial damage before detection. We recommend inspections for any home over 30 years old, especially those without prior treatment history." },
    ],
    nearby: [{ name: 'Bellmawr', slug: 'bellmawr' }, { name: 'Mount Ephraim', slug: 'mount-ephraim' }, { name: 'Barrington', slug: 'barrington' }, { name: 'Gloucester City', slug: 'gloucester-city' }],
  },
  'clementon': {
    faqs: [
      { q: 'What pests are common in Clementon?', a: "Clementon sits on the suburban-rural edge of Camden County bordering Winslow Township and Gloucester Township. Wildlife pressure is higher here than in more developed boroughs — groundhogs under decks, raccoons in attics, and squirrels in crawl spaces are common calls. Stink bugs emerge from the wooded buffers in fall, and termites are active in older residential structures." },
      { q: 'Do you handle wildlife removal in Clementon?', a: "Yes. Clementon's proximity to wooded areas and open land means more frequent wildlife conflicts than in central Camden County. We handle groundhog exclusion, raccoon eviction, squirrel removal, and full structural exclusion to prevent re-entry. All removal is done humanely and in accordance with New Jersey regulations." },
      { q: 'Are stink bugs a major problem in Clementon?', a: 'Yes. Clementon has wooded buffer areas along its borders that serve as overwintering habitat for brown marmorated stink bugs. Homes adjacent to these wooded edges experience the heaviest invasions in September and October. A fall perimeter treatment before temperatures drop is the most effective prevention strategy.' },
      { q: 'Do you treat termites in Clementon?', a: 'Yes. Older homes in Clementon — particularly those built before 1970 — are at elevated termite risk due to wood-frame construction and soil-to-wood contact common in that era. We offer liquid barrier treatments and Sentricon bait systems, with annual monitoring to maintain protection.' },
    ],
    nearby: [{ name: 'Gloucester Township', slug: 'gloucester-township' }, { name: 'Pine Hill', slug: 'pine-hill' }, { name: 'Stratford', slug: 'stratford' }, { name: 'Lindenwold', slug: 'lindenwold' }],
  },
  'berlin': {
    faqs: [
      { q: 'What pests are most active in Berlin, NJ in the spring?', a: 'In spring, Berlin homeowners most commonly deal with carpenter ants, subterranean termite swarmers, and overwintering stink bugs emerging from wall voids. Wasp and yellowjacket nest-building also begins in May. If you see winged insects indoors in spring, they could be termite or ant swarmers — a licensed inspection can determine which pest you\'re dealing with and where the colony is located.' },
      { q: 'How do I tell the difference between termites and carpenter ants in my Berlin home?', a: 'Both swarm in spring, which creates confusion. Termite swarmers have equal-length wings, a straight-sided body, and straight antennae. Carpenter ant swarmers have a pinched waist, elbowed antennae, and unequal wings. Finding either swarm indoors means an active colony is established somewhere in the structure. A pest inspection can confirm which pest is present and pinpoint the source.' },
      { q: 'Do older homes in Berlin Borough have more pest problems?', a: 'Generally, yes. Homes built before the 1970s predate modern insulation and weatherproofing standards, leaving more entry points for rodents, ants, and overwintering insects. Aging foundations, older wood framing, and decades of plumbing and electrical modifications all contribute. Treatment in older homes often combines pesticide application with exclusion work to close those entry points.' },
      { q: 'What areas of Berlin Borough do you serve?', a: 'Service covers all of Berlin Borough (ZIP code 08009), including the historic downtown, Berlin Heights, the Berlin Park area, the Route 73 commercial corridor, and residential areas throughout the borough. Call (856) 600-0812 to confirm availability and schedule service at your address.' },
    ],
    nearby: [
      { name: 'Pine Hill', slug: 'pine-hill' },
      { name: 'Clementon', slug: 'clementon' },
      { name: 'Voorhees', slug: 'voorhees' },
      { name: 'Gibbsboro', slug: 'gibbsboro' },
      { name: 'Waterford', slug: 'waterford' },
    ],
  },
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
  'lindenwold': {
    faqs: [
      { q: 'What pests are most common in Lindenwold?', a: "Lindenwold is a dense suburban borough near the PATCO Speedline with a mix of Cape Cod homes and garden apartments built in the 1950s-1970s. Cockroaches — particularly German cockroaches — are common in garden apartment complexes. Rodents are active near the commercial strips along Berlin-Cross Keys Road, and termites affect the older wood-frame housing stock throughout the borough." },
      { q: 'Are cockroaches a problem in Lindenwold apartments?', a: "Yes. Lindenwold's garden apartment complexes from the 1960s and 1970s are prone to German cockroach infestations, which spread rapidly between units through shared plumbing and wall voids. Effective treatment requires comprehensive access to all affected units and common areas — we work with property managers to coordinate building-wide programs." },
      { q: 'Do you handle rodent problems in Lindenwold?', a: 'Rodents are active near the commercial corridors in Lindenwold, especially in colder months when they seek warmth in nearby homes and apartment buildings. We use exterior tamper-resistant bait stations, structural exclusion, and interior trapping to eliminate infestations and prevent re-entry.' },
      { q: 'How quickly can you respond to a pest emergency in Lindenwold?', a: 'Lindenwold is within our core Camden County service area. We typically offer same-day service for urgent calls made before noon and next-morning appointments for standard treatments. We service both residential homes and garden apartment complexes throughout the borough.' },
    ],
    nearby: [{ name: 'Clementon', slug: 'clementon' }, { name: 'Stratford', slug: 'stratford' }, { name: 'Laurel Springs', slug: 'laurel-springs' }, { name: 'Pine Hill', slug: 'pine-hill' }],
  },
};
