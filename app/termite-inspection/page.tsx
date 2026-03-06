import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Termite Inspection Camden County NJ | Free Estimates',
  description:
    'Professional termite inspection in Camden County NJ. Protect your home from costly termite damage. Real estate inspections available. Call (856) 600-0812.',
  keywords:
    'termite inspection Camden County, termite inspection NJ, termite inspection Cherry Hill, WDI inspection, real estate termite inspection, termite damage Camden County',
};

export default function TermiteInspection() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <span className="text-gray-900">Termite Inspection</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Termite Inspection in Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Termites cause more property damage than fires, floods, and storms combined in New Jersey.
            A professional inspection is your first line of defense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18566000812"
              className="bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Call (856) 600-0812
            </a>
            <Link
              href="/contact"
              className="bg-white text-[#1A365D] font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors"
            >
              Schedule Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* Why Termite Inspections Matter */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why Termite Inspections Matter in Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            New Jersey is classified as a "moderate to heavy" termite pressure zone by the United States Department of
            Agriculture. Eastern subterranean termites — the most destructive termite species in the northeastern United
            States — are endemic throughout Camden County. These termites live in underground colonies that can contain
            hundreds of thousands of individuals, and they access your home through the soil, exploiting cracks in
            foundations, gaps around plumbing penetrations, and expansion joints as narrow as 1/32 of an inch.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The challenge with termites is that they work silently. A colony can feed on the structural wood inside your
            walls, floor joists, and support beams for 3–5 years before you see any visible signs. By that point,
            significant damage has already occurred. In Camden County, we regularly inspect homes in{' '}
            <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>,{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>, and{' '}
            <Link href="/camden-county/audubon" className="text-[#2B6CB0] hover:underline">Audubon</Link> — communities
            with many homes built in the early-to-mid 20th century — where termite damage is discovered in structural
            members that homeowners assumed were perfectly sound.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The average cost of termite damage repair in New Jersey ranges from $3,000 to $15,000, with severe cases
            exceeding $30,000. Homeowners insurance does not cover termite damage because it is considered a maintenance
            issue — meaning the financial burden falls entirely on you. A professional termite inspection is the only
            reliable way to detect an active infestation before the damage becomes catastrophic.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-4">
            <h3 className="font-semibold text-amber-800 text-lg mb-2">⚠️ Important for Camden County Homeowners</h3>
            <p className="text-gray-700">
              Camden County&apos;s moist clay soils, high water table near the Delaware River and Cooper River
              corridors, and mature tree canopy create ideal conditions for subterranean termite colonies. Homes with
              basements, crawl spaces, or slab foundations with cracks are all vulnerable. If your home has not had a
              professional termite inspection within the past 2 years, scheduling one should be a priority.
            </p>
          </div>
        </section>

        {/* What a Termite Inspection Involves */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            What a Professional Termite Inspection Involves
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            A termite inspection by Camden County Pest Control is a thorough, systematic evaluation of your property.
            Here is exactly what our licensed inspector examines during a termite inspection:
          </p>
          <div className="space-y-6">
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Exterior Foundation Inspection</h3>
              <p className="text-gray-700">
                We inspect the entire exterior foundation wall, looking for mud tubes — the pencil-width tunnels that
                subterranean termites build to travel between the soil and your home. We check along the foundation,
                behind exterior stairs, around porch attachments, where utility lines enter the building, and at grade
                changes. We also look for wood-to-soil contact (a major risk factor), damaged or deteriorated
                foundation vents, and moisture conditions that attract termites.
              </p>
            </div>
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Basement & Crawl Space Inspection</h3>
              <p className="text-gray-700">
                The basement or crawl space is where most termite activity begins. Our inspector examines the sill
                plate (where the wood framing sits on the foundation), floor joists, support posts, and any exposed
                wood. We use probing tools to test wood integrity — termite-damaged wood may look normal on the surface
                but crumbles when probed. We also use moisture meters, as high moisture content attracts termites and
                indicates conditions conducive to infestation.
              </p>
            </div>
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Interior Room-by-Room Inspection</h3>
              <p className="text-gray-700">
                We inspect all accessible interior areas, focusing on walls adjacent to the foundation, around plumbing
                fixtures (termites follow moisture), window and door frames, baseboards, and any areas where you have
                noticed bubbling paint, sagging floors, or hollow-sounding wood. In homes throughout{' '}
                <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
                <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>, and{' '}
                <Link href="/camden-county/mount-laurel" className="text-[#2B6CB0] hover:underline">Mount Laurel</Link>,
                we pay special attention to finished basements where drywall and flooring can conceal termite activity.
              </p>
            </div>
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Attic Inspection</h3>
              <p className="text-gray-700">
                While termites typically enter from below, severe infestations can extend into upper floors and attic
                spaces. We inspect exposed framing, rafters, and sheathing for damage, and check for signs of other
                wood-destroying organisms (carpenter ants, powder post beetles) that can also compromise your home&apos;s
                structure.
              </p>
            </div>
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Garage & Attached Structures</h3>
              <p className="text-gray-700">
                Garages, sheds, porches, and decks attached to or near your home are inspected for termite activity
                and conditions that could facilitate infestation (stored wood, mulch against the foundation, poor
                drainage).
              </p>
            </div>
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Detailed Written Report</h3>
              <p className="text-gray-700">
                After the inspection, you receive a detailed written report documenting our findings — areas of active
                infestation (if any), areas of previous damage or treatment, conditions conducive to termite activity,
                and our recommendations. If treatment is needed, we provide a clear explanation of options and a written
                price quote.
              </p>
            </div>
          </div>
        </section>

        {/* Real Estate Inspections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Real Estate Termite Inspections (WDI Reports)
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If you are buying or selling a home in Camden County, a Wood-Destroying Insect (WDI) inspection is a
            critical part of the real estate transaction. While not technically required by New Jersey law for all sales,
            most mortgage lenders — especially FHA, VA, and USDA loan programs — require a WDI inspection as a condition
            of financing. Even for conventional loans, a WDI inspection is strongly recommended to protect the buyer&apos;s
            investment.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our real estate termite inspections follow the NPMA-33 form — the nationally standardized Wood-Destroying
            Insect Inspection Report recognized by all mortgage lenders and real estate professionals. The inspection
            covers termites, carpenter ants, carpenter bees, and powder post beetles. We provide:
          </p>
          <ul className="text-gray-700 space-y-2 mb-4">
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>Fast turnaround:</strong> We understand real estate timelines. We offer expedited scheduling and can typically provide the completed NPMA-33 report within 24–48 hours of the inspection.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>Lender-accepted documentation:</strong> Our reports meet the requirements of all major mortgage programs including FHA, VA, USDA, and conventional lenders.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>Clear communication:</strong> We explain our findings in plain language to both buyers and sellers, and can coordinate directly with your real estate agent if needed.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>Treatment if needed:</strong> If active termites or damage are found, we can provide a treatment quote immediately — helping keep your transaction on track without delays.</span>
            </li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            Camden County has one of the most active real estate markets in South Jersey, with homes in{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
            <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>,{' '}
            <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>, and{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>{' '}
            frequently changing hands. We work with real estate agents and title companies throughout the county to
            provide timely, accurate WDI inspections that keep closings on schedule.
          </p>
        </section>

        {/* Signs of Termites */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Signs You Need a Termite Inspection Now
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Do not wait for your next real estate transaction to get a termite inspection. If you notice any of these
            warning signs in your Camden County home, schedule an inspection immediately:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#1A365D] mb-1">🔍 Mud Tubes on Foundation</h3>
              <p className="text-gray-600 text-sm">Pencil-width mud tubes on your foundation walls, piers, or support posts are a definitive sign of subterranean termite activity.</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#1A365D] mb-1">🪟 Bubbling or Peeling Paint</h3>
              <p className="text-gray-600 text-sm">Unexplained bubbling, peeling, or discoloration of paint on walls, especially near the foundation, can indicate termite damage behind the surface.</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#1A365D] mb-1">🚪 Stiff Doors or Windows</h3>
              <p className="text-gray-600 text-sm">Doors and windows that suddenly become hard to open or close may indicate termite damage to the surrounding framing, causing warping.</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#1A365D] mb-1">🦟 Winged Insects (Swarmers)</h3>
              <p className="text-gray-600 text-sm">Swarms of winged insects emerging indoors — especially in spring — are reproductive termites leaving a mature colony inside your home. This is an emergency.</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#1A365D] mb-1">🪵 Hollow-Sounding Wood</h3>
              <p className="text-gray-600 text-sm">Tap wood surfaces along walls and door frames. A hollow sound suggests termites have consumed the interior while leaving the surface intact.</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#1A365D] mb-1">📏 Sagging or Buckled Floors</h3>
              <p className="text-gray-600 text-sm">Floors that feel spongy, sag, or buckle without explanation may have termite-damaged floor joists or subfloor sheathing underneath.</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Even if you do not notice any of these signs, the NJDEP and pest control industry experts recommend annual
            termite inspections for all homes in high-risk areas — which includes all of Camden County. An inspection
            catches problems early, when treatment is simpler and less expensive. Our{' '}
            <Link href="/free-pest-inspection" className="text-[#2B6CB0] hover:underline">free pest inspection</Link>{' '}
            includes a visual termite check, and we offer comprehensive termite-specific inspections for a thorough evaluation.
          </p>
        </section>

        {/* Treatment Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Termite Treatment Options After Inspection
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If our inspection reveals active termites or conditions highly conducive to infestation, we recommend one
            or both of the following treatment approaches, depending on your situation:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-3">Liquid Barrier Treatment</h3>
              <p className="text-gray-700 mb-3">
                A liquid termiticide (such as Termidor) is applied to the soil around and beneath your foundation,
                creating a continuous chemical barrier. Termites that pass through the treated zone are eliminated and
                spread the product to nestmates through contact, collapsing the colony. Liquid treatments provide
                immediate protection and can last 5–10 years in the soil.
              </p>
              <p className="text-gray-600 text-sm italic">Best for: Active infestations requiring immediate knockdown, pre-construction treatment, and homes with accessible perimeters.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-3">Bait Station System</h3>
              <p className="text-gray-700 mb-3">
                Monitoring and baiting stations are installed in the ground around your home&apos;s perimeter. Termite
                workers find the bait, consume it, and share it with the colony — including the queen. This approach
                eliminates the entire colony, not just the foraging workers. Bait systems are monitored on a regular
                schedule to ensure ongoing protection.
              </p>
              <p className="text-gray-600 text-sm italic">Best for: Ongoing colony elimination, properties where liquid treatment access is limited, and homeowners who prefer a low-chemical approach.</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Learn more about our full <Link href="/services/termite-treatment" className="text-[#2B6CB0] hover:underline">termite treatment</Link>{' '}
            program, which includes treatment, monitoring, and warranty protection for your Camden County home.
          </p>
        </section>

        {/* Inspection for All Towns */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Termite Inspections Across Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We provide termite inspections for homes and commercial properties in all 16{' '}
            <Link href="/camden-county" className="text-[#2B6CB0] hover:underline">Camden County</Link> communities:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { name: 'Cherry Hill', slug: 'cherry-hill' },
              { name: 'Voorhees', slug: 'voorhees' },
              { name: 'Haddonfield', slug: 'haddonfield' },
              { name: 'Collingswood', slug: 'collingswood' },
              { name: 'Marlton', slug: 'marlton' },
              { name: 'Mount Laurel', slug: 'mount-laurel' },
              { name: 'Pennsauken', slug: 'pennsauken' },
              { name: 'Gloucester Twp', slug: 'gloucester-township' },
              { name: 'Winslow Twp', slug: 'winslow-township' },
              { name: 'Lindenwold', slug: 'lindenwold' },
              { name: 'Bellmawr', slug: 'bellmawr' },
              { name: 'Audubon', slug: 'audubon' },
              { name: 'Barrington', slug: 'barrington' },
              { name: 'Somerdale', slug: 'somerdale' },
              { name: 'Runnemede', slug: 'runnemede' },
              { name: 'Clementon', slug: 'clementon' },
            ].map((town) => (
              <Link
                key={town.slug}
                href={`/camden-county/${town.slug}`}
                className="bg-amber-50 hover:bg-amber-100 text-[#1A365D] font-medium py-2 px-3 rounded-lg text-center transition-colors text-sm"
              >
                {town.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Termite risk varies somewhat by neighborhood. Homes near waterways (Cooper River, Delaware River), in low-lying
            areas with high soil moisture, or with mature trees close to the foundation tend to face the highest risk.
            The historic homes of <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>{' '}
            and <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,
            mid-century ranches in <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>, and
            newer construction in <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link> and{' '}
            <Link href="/camden-county/mount-laurel" className="text-[#2B6CB0] hover:underline">Mount Laurel</Link> all
            benefit from regular termite inspections.
          </p>
        </section>

        {/* Final CTA */}
        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            Schedule Your Termite Inspection Today
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Do not wait until you see damage. A professional termite inspection catches infestations early and saves
            you thousands in repair costs. Contact us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18566000812"
              className="bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Call (856) 600-0812
            </a>
            <Link
              href="/contact"
              className="bg-[#1A365D] hover:bg-[#2B6CB0] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              Schedule Online
            </Link>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <section className="bg-[#1A365D] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Home from Termites</h2>
          <p className="text-blue-200 text-lg mb-6">
            Professional termite inspections for all Camden County homes and businesses. Real estate WDI reports available.
          </p>
          <a
            href="tel:+18566000812"
            className="inline-block bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors"
          >
            📞 Call (856) 600-0812
          </a>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'PestControlService',
            name: 'Camden County Pest Control - Termite Inspection',
            telephone: '(856) 600-0812',
            url: 'https://pestcontrolcamdencounty.com/termite-inspection',
            description:
              'Professional termite inspection services in Camden County, NJ. Residential and real estate WDI inspections for all 16 towns.',
            areaServed: {
              '@type': 'County',
              name: 'Camden County',
              containedInPlace: {
                '@type': 'State',
                name: 'New Jersey',
              },
            },
            serviceType: 'Termite Inspection',
          }),
        }}
      />
    </div>
  );
}
