import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Termite Inspection Camden County NJ | Free Assessment | WDI Reports',
  description:
    'Free termite inspection in Camden County NJ. Eastern subterranean termite experts serving Haddonfield, Cherry Hill, Collingswood & all of South Jersey. WDI reports available. Call (856) 600-0812.',
  keywords:
    'termite inspection Camden County NJ, free termite inspection, termite inspection Haddonfield, WDI report New Jersey, termite treatment South Jersey, Sentricon Camden County',
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
            Termite Inspection Camden County, NJ — Free Assessment
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Eastern subterranean termites cause billions in damage across South Jersey every year.
            Our free termite inspections protect Camden County homes from this silent destroyer.
            WDI reports available for real estate transactions.
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
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* Why Termites Are a Major Problem in South Jersey */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why Termites Are a Serious Threat in Camden County, NJ
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If you own a home in Camden County, termites are not a hypothetical risk — they are a near-certain
            threat. New Jersey falls within a &quot;moderate to heavy&quot; termite pressure zone as classified by the
            USDA, and South Jersey&apos;s combination of clay-rich soils, high moisture levels, and a vast stock of
            older wood-framed homes creates conditions where the eastern subterranean termite (<em>Reticulitermes
            flavipes</em>) thrives year-round.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The townships of{' '}
            <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>,{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,{' '}
            <Link href="/camden-county/audubon" className="text-[#2B6CB0] hover:underline">Audubon</Link>, and{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link> contain
            thousands of homes built between 1900 and 1980 — precisely the homes most vulnerable to termite attack.
            Older construction methods used untreated lumber in direct soil contact, lacked the modern physical barriers
            now required by building codes, and were built before modern termite-resistant materials existed. The aging
            wood in the sills, floor joists, and sub-flooring of these homes is an ideal food source for subterranean
            termite colonies that may number in the hundreds of thousands.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Termites operate silently and invisibly for months or years before damage becomes apparent. By the time a
            homeowner notices the telltale signs — soft wood, sagging floors, blistered paint, or the sudden appearance
            of winged swarmers in the spring — a colony may have been feeding on the structure for several years.
            Annual termite inspections by a licensed professional are the only reliable way to catch infestations early,
            before they cause significant structural damage.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The financial stakes are significant. The National Pest Management Association estimates that termites cause
            approximately $5 billion in property damage annually in the United States, with most damage not covered by
            standard homeowners insurance policies. A professional termite inspection costing nothing — combined with
            effective treatment if termites are found — is one of the highest-value investments you can make in
            protecting your Camden County home.
          </p>
        </section>

        {/* Termite Season in NJ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Termite Season in New Jersey: When to Be on High Alert
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Unlike some pest problems that are seasonal, eastern subterranean termites are active year-round in New
            Jersey — the colony continues feeding through winter in soil below the frost line. However, there is a
            critical window in the calendar when termite activity becomes visible and when damage risk accelerates:
          </p>

          <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-amber-800 mb-3">🐝 Swarm Season: March Through June</h3>
            <p className="text-gray-700 mb-3">
              Between March and June — peaking in April and May in Camden County — eastern subterranean termites
              produce winged reproductive forms called &quot;alates&quot; or &quot;swarmers.&quot; On warm, humid days following rain, these
              winged termites emerge from the colony in large numbers to mate and establish new colonies. A termite
              swarm inside your home — typically near windows, doors, or light fixtures — is one of the most
              definitive signs of an established infestation in or near your structure.
            </p>
            <p className="text-gray-700 mb-3">
              Many Camden County homeowners first discover their termite problem during swarm season, when dozens or
              hundreds of winged insects suddenly appear inside the house. This is both alarming and actually
              informative — it tells you definitively that a colony is present and active. If you experience a swarm,
              call us immediately for an emergency inspection. Do not wait for swarm season to pass.
            </p>
            <p className="text-gray-700">
              <strong>Note:</strong> Termite swarmers are frequently confused with flying ants. The key visual
              differences: termites have straight antennae, two pairs of equal-length wings, and a straight body
              without a pinched waist. Flying ants have elbowed antennae, wings of unequal size, and a distinctly
              pinched waist. If you are unsure, collect a sample and call us — our technicians will identify the
              species immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">🌡️ Spring &amp; Summer (March–August)</h3>
              <p className="text-gray-700 text-sm">
                Peak feeding season. Warm soil temperatures accelerate colony growth and wood consumption. Swarm
                season peaks in April-May. This is the highest-risk period for new infestations and the fastest
                period of structural damage accumulation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">❄️ Fall &amp; Winter (September–February)</h3>
              <p className="text-gray-700 text-sm">
                Termites move deeper into soil as temperatures drop but continue feeding in protected areas and inside
                heated structures. Colonies remain active — damage continues throughout the winter inside walls and
                below the frost line. Annual inspection is still recommended regardless of season.
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Best time to schedule your inspection:</strong> February through April, before swarm season begins.
            This allows us to identify any active infestations and begin treatment before the peak damage period of
            spring and summer. If you have not had a termite inspection in the past 12 months, schedule one today
            regardless of the time of year — termite damage waits for no one.
          </p>
        </section>

        {/* Signs of Termite Damage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Signs of Termite Damage in Camden County Homes
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Subterranean termites rarely reveal themselves — the damage is hidden inside wood, often not visible from
            the surface until it is severe. Here are the warning signs to watch for in your Camden County home:
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-amber-600 font-bold text-xl">⚠</span>
              <div>
                <strong className="text-[#1A365D]">Mud Tubes on Foundation Walls</strong>
                <p className="text-gray-700 text-sm">
                  Pencil-width tunnels of soil and saliva built along foundation walls, crawl spaces, or pier blocks
                  are the most reliable visible sign of subterranean termite activity. Check the exterior foundation
                  and interior of the crawl space or basement walls regularly.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-amber-600 font-bold text-xl">⚠</span>
              <div>
                <strong className="text-[#1A365D]">Hollow or Soft Wood</strong>
                <p className="text-gray-700 text-sm">
                  Tap on baseboards, window sills, door frames, and floor joists. Termite-damaged wood sounds hollow
                  and may feel soft or springy. In advanced cases, the wood surface may collapse under minimal pressure.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-amber-600 font-bold text-xl">⚠</span>
              <div>
                <strong className="text-[#1A365D]">Blistered or Buckling Paint</strong>
                <p className="text-gray-700 text-sm">
                  Paint that appears water-damaged, blistered, or bubbled on wood surfaces — even without moisture
                  presence — can indicate termites feeding just below the surface.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-amber-600 font-bold text-xl">⚠</span>
              <div>
                <strong className="text-[#1A365D]">Discarded Termite Wings</strong>
                <p className="text-gray-700 text-sm">
                  After a swarm, winged termites shed their wings. Finding piles of tiny wings near window sills,
                  on floors, or in spider webs near light fixtures is a strong indicator that swarmers have been
                  present, suggesting an established colony nearby.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-amber-600 font-bold text-xl">⚠</span>
              <div>
                <strong className="text-[#1A365D]">Sagging Floors or Ceilings</strong>
                <p className="text-gray-700 text-sm">
                  In advanced infestations, floor joists and support beams can be compromised to the point of
                  structural weakness. Floors that feel &quot;bouncy&quot; or soft spots in hardwood or laminate flooring can
                  indicate sub-floor termite damage. This is an emergency requiring immediate professional assessment.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-amber-600 font-bold text-xl">⚠</span>
              <div>
                <strong className="text-[#1A365D]">Frass (Termite Droppings)</strong>
                <p className="text-gray-700 text-sm">
                  Drywood termites (which occasionally occur in NJ) leave behind tiny, wood-colored pellets called
                  frass. Finding small piles of what appears to be sawdust or coffee grounds near wood surfaces may
                  indicate drywood termite activity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inspection Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Our Termite Inspection Process
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our termite inspection is a thorough, professional evaluation performed by NJDEP-licensed technicians
            who have conducted thousands of termite inspections in Camden County homes. Here is exactly what our
            inspection includes:
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">1</div>
              <div>
                <h3 className="font-semibold text-[#1A365D]">Foundation Perimeter Walk</h3>
                <p className="text-gray-700 text-sm">
                  Complete exterior inspection of the foundation, looking for mud tubes, conducive conditions
                  (wood-to-soil contact, mulch against foundation, moisture), previous damage, and termite entry points.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">2</div>
              <div>
                <h3 className="font-semibold text-[#1A365D]">Crawl Space &amp; Basement Inspection</h3>
                <p className="text-gray-700 text-sm">
                  Full inspection of accessible crawl spaces and basements — the primary termite entry zones in
                  Camden County homes. We probe sill plates, floor joists, support beams, and columns. Moisture
                  readings are taken to identify high-risk zones.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">3</div>
              <div>
                <h3 className="font-semibold text-[#1A365D]">Interior Wood Structure Inspection</h3>
                <p className="text-gray-700 text-sm">
                  Interior inspection of baseboards, window and door frames, visible wood components, and any areas
                  of suspected damage. We use probe tools and moisture meters to detect hidden damage and active
                  termite galleries within wood members.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">4</div>
              <div>
                <h3 className="font-semibold text-[#1A365D]">Garage &amp; Attached Structures</h3>
                <p className="text-gray-700 text-sm">
                  Garage slab edges, interior walls, and any attached structures such as decks or patios are inspected
                  for termite conducive conditions and damage. Garage slabs are a common termite entry point in
                  Camden County homes.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">5</div>
              <div>
                <h3 className="font-semibold text-[#1A365D]">Written Inspection Report</h3>
                <p className="text-gray-700 text-sm">
                  Following the inspection, you receive a written report documenting all findings — including
                  photographs, location of activity or damage, conducive conditions, and recommended treatment
                  if termites are found. For real estate transactions, this report meets NJ requirements for
                  a Wood Destroying Insect (WDI) report.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Termite Treatment Options for Camden County Homes
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            When our inspection reveals active termite infestation or damage, we provide a comprehensive written
            treatment plan and quote. We offer two primary treatment methods for eastern subterranean termites:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">🛡️ Liquid Barrier Treatment</h3>
              <p className="text-gray-700 text-sm mb-3">
                A continuous liquid termiticide is applied to the soil around the entire perimeter of the
                foundation and beneath the slab where applicable, creating an unbroken chemical barrier that
                kills termites attempting to travel between soil and structure.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>→ Fast-acting — begins killing termites within days</li>
                <li>→ Long-lasting protection (5-10 years with repellent formulations)</li>
                <li>→ Non-repellent formulations allow termites to pass through and carry active ingredient back to colony</li>
                <li>→ Ideal for homes with active infestation or previous damage</li>
                <li>→ Required by many mortgage companies for treatment certification</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">🎯 Sentricon Bait System</h3>
              <p className="text-gray-700 text-sm mb-3">
                The Sentricon Always Active bait system installs discreet in-ground stations around your home&apos;s
                perimeter. Termite workers discover the bait stations, consume the active ingredient (noviflumuron),
                and share it with the colony — eventually eliminating the entire colony including the queen.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>→ Eliminates the entire colony, not just foraging workers</li>
                <li>→ Environmentally sensitive approach — minimal soil injection</li>
                <li>→ Proven effectiveness in South Jersey&apos;s termite pressure conditions</li>
                <li>→ Ongoing monitoring included — stations checked annually</li>
                <li>→ Ideal for homes in sensitive environmental areas near waterways</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our licensed technicians will recommend the most appropriate treatment approach based on the inspection
            findings, the severity of the infestation, your property&apos;s construction type, and your preferences.
            Many Camden County homes benefit from a combination approach — liquid treatment at active infestation
            points combined with a Sentricon monitoring and baiting perimeter.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Important note for Camden County homeowners:</strong> Some of our oldest communities —
            <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline"> Haddonfield</Link>,{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,{' '}
            <Link href="/camden-county/audubon" className="text-[#2B6CB0] hover:underline">Audubon</Link>, and
            historic areas of <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link> —
            have homes with stone or brick foundations, tight lot spacing, and mature trees that create specific
            challenges for standard liquid treatments. Our experience with these property types in South Jersey means
            we can develop treatment plans that work within the physical constraints of your specific home.
          </p>
        </section>

        {/* WDI Reports for Real Estate */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            WDI Reports for New Jersey Real Estate Transactions
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If you are buying or selling a home in Camden County, a Wood Destroying Insect (WDI) report — sometimes
            called a &quot;termite letter&quot; or &quot;NPMA-33 form&quot; — is frequently required by mortgage lenders and is a standard
            component of the home inspection process. As licensed NJ pest control operators, we are authorized to
            perform WDI inspections and issue official WDI reports for real estate transactions throughout Camden County,
            including{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
            <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>,{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,{' '}
            <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>, and all other
            municipalities in the county.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-[#1A365D] mb-3">What Is Included in a WDI Report?</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex gap-2">
                <span className="text-[#2B6CB0] font-bold">→</span>
                <span>Identification of any wood-destroying insects found: termites, carpenter ants, carpenter bees, and powderpost beetles</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#2B6CB0] font-bold">→</span>
                <span>Documentation of live insects, damage evidence, or previous treatment history</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#2B6CB0] font-bold">→</span>
                <span>Identification of wood-damaging conditions (moisture, wood-to-soil contact, etc.)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#2B6CB0] font-bold">→</span>
                <span>Official NPMA-33 form signed by a licensed NJ pest control operator</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#2B6CB0] font-bold">→</span>
                <span>Photographs documenting significant findings</span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>For sellers:</strong> Getting a termite inspection and WDI report before listing your Camden County
            home allows you to identify and treat any issues proactively, reducing the risk of a buyer discovering
            termite problems during their inspection and using it as leverage for price reduction or deal cancellation.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>For buyers:</strong> A WDI report from an independent licensed pest control company — not the
            inspector referred by the real estate agent — gives you an objective, professional assessment of the
            property. For older Camden County homes, particularly in Haddonfield, Collingswood, Audubon, and historic
            Cherry Hill neighborhoods, this inspection is especially important given the high termite risk associated
            with older construction.
          </p>
        </section>

        {/* Towns Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Termite Inspection Serving All of Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We provide termite inspections throughout all of Camden County. Our knowledge of the county&apos;s
            varying termite risk levels — from the high-risk older housing stock of{' '}
            <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link> and{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link> to
            the newer construction in <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>{' '}
            and <Link href="/camden-county/marlton" className="text-[#2B6CB0] hover:underline">Marlton</Link>{' '}
            (which are not immune — termites attack new construction too) — allows us to deliver the most thorough
            and accurate inspections in South Jersey.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: 'Cherry Hill', slug: 'cherry-hill' },
              { name: 'Haddonfield', slug: 'haddonfield' },
              { name: 'Collingswood', slug: 'collingswood' },
              { name: 'Audubon', slug: 'audubon' },
              { name: 'Voorhees', slug: 'voorhees' },
              { name: 'Marlton', slug: 'marlton' },
              { name: 'Haddon Heights', slug: 'haddon-heights' },
              { name: 'Haddon Township', slug: 'haddon-township' },
              { name: 'Pennsauken', slug: 'pennsauken' },
              { name: 'Gloucester Twp', slug: 'gloucester-township' },
              { name: 'Bellmawr', slug: 'bellmawr' },
              { name: 'Barrington', slug: 'barrington' },
              { name: 'Runnemede', slug: 'runnemede' },
              { name: 'Lindenwold', slug: 'lindenwold' },
              { name: 'Winslow Twp', slug: 'winslow-township' },
              { name: 'Mount Laurel', slug: 'mount-laurel' },
            ].map((town) => (
              <Link
                key={town.slug}
                href={`/camden-county/${town.slug}`}
                className="bg-amber-50 hover:bg-amber-100 text-[#1A365D] font-medium py-3 px-4 rounded-lg text-center transition-colors text-sm"
              >
                {town.name}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Frequently Asked Questions — Termite Inspection in Camden County, NJ
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Are termites really that common in South Jersey?</h3>
              <p className="text-gray-700">
                Yes — New Jersey is rated &quot;moderate to heavy&quot; for termite pressure by the USDA. Eastern subterranean
                termites are present throughout Camden County, with the highest risk in communities with older housing
                stock like Haddonfield, Collingswood, Audubon, and older neighborhoods in Cherry Hill. South Jersey&apos;s
                clay soils, high moisture levels, and humid climate make it one of the most termite-active regions in
                the northeastern United States.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">When is termite swarm season in Camden County?</h3>
              <p className="text-gray-700">
                Eastern subterranean termite swarm season in Camden County runs from approximately March through June,
                with peak swarming in April and May. Swarms typically occur on warm, humid days — often following
                rainfall — when temperatures exceed 70°F. If you see winged insects emerging from your walls, floors,
                or around windows and doors during this period, call us immediately for an emergency inspection. Do
                not wait.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">How is Sentricon different from liquid termite treatment?</h3>
              <p className="text-gray-700">
                Liquid termiticide creates a chemical barrier in the soil around the foundation, killing termites that
                cross it. Sentricon is a bait system — stations are installed around the perimeter and contain a bait
                that worker termites discover, consume, and share with the colony. Sentricon&apos;s active ingredient
                (noviflumuron) interferes with the molting process, eventually eliminating the entire colony including
                the queen. Both methods are highly effective; the right choice depends on your property type, the
                infestation&apos;s location, and environmental factors. Our inspector will recommend the best approach
                after assessing your home.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Do I need a WDI report to sell my home in NJ?</h3>
              <p className="text-gray-700">
                New Jersey does not require a WDI report by law for home sales, but many mortgage lenders — particularly
                FHA, VA, and conventional lenders — require one as part of their underwriting process. Even when not
                required by the lender, most buyers request a WDI inspection as part of their due diligence. Sellers
                who proactively obtain and share a WDI report from a licensed pest control company often have a smoother
                transaction, as it removes uncertainty and demonstrates transparency. We provide WDI reports throughout
                Camden County on a same-day or next-day basis.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">How long does a termite inspection take?</h3>
              <p className="text-gray-700">
                A thorough termite inspection of a typical Camden County single-family home takes between 45 minutes
                and 1.5 hours, depending on property size, accessibility of the crawl space or basement, and any areas
                requiring closer examination. Our technician will explain all findings in real time and provide a
                written report before leaving. The inspection is completely free with no obligation.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">My home is new construction — do I still need a termite inspection?</h3>
              <p className="text-gray-700">
                Absolutely. Newer homes in Voorhees, Marlton, and Mount Laurel are not immune to termite attack.
                Construction activity disturbs soil and exposes wood, often accelerating termite colonization.
                New Jersey building codes require termite treatment or protection for new construction, but these
                treatments are not permanent. Annual inspections ensure your protection measures remain effective
                and alert you to any new activity before damage occurs.
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/free-pest-inspection" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Free Pest Inspection →</h3>
              <p className="text-gray-600 text-sm">All-pest no-cost inspection for Camden County properties</p>
            </Link>
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Pest Control Near Me →</h3>
              <p className="text-gray-600 text-sm">Full-service pest control throughout Camden County</p>
            </Link>
            <Link href="/services/termite-treatment" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Termite Treatment →</h3>
              <p className="text-gray-600 text-sm">Liquid barrier and Sentricon bait system treatments</p>
            </Link>
            <Link href="/exterminator-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Exterminator Near Me →</h3>
              <p className="text-gray-600 text-sm">NJDEP-licensed exterminators throughout Camden County</p>
            </Link>
            <Link href="/same-day-pest-control" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Same-Day Service →</h3>
              <p className="text-gray-600 text-sm">Same-day termite inspections available — call before noon</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            Protect Your Camden County Home from Termites
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            A free termite inspection is the first and most important step in protecting your South Jersey home.
            Call today to schedule yours — we serve all of Camden County.
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
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <section className="bg-[#1A365D] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Free Termite Inspection — All of Camden County</h2>
          <p className="text-blue-200 text-lg mb-6">
            NJDEP licensed. WDI reports available. Protecting South Jersey homes since day one.
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
            '@graph': [
              {
                '@type': 'PestControlService',
                name: 'Camden County Pest Control — Termite Inspection',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/termite-inspection',
                description:
                  'Free termite inspection in Camden County, NJ. Licensed experts in eastern subterranean termites, Sentricon bait systems, liquid barrier treatments, and WDI reports for real estate transactions.',
                areaServed: {
                  '@type': 'County',
                  name: 'Camden County',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'New Jersey',
                  },
                },
                serviceType: 'Termite Inspection',
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Termite Services',
                  itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Free Termite Inspection' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WDI Report' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sentricon Bait System' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Liquid Termiticide Treatment' } },
                  ],
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Are termites really that common in South Jersey?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes — New Jersey is rated moderate to heavy for termite pressure by the USDA. Eastern subterranean termites are present throughout Camden County, with the highest risk in communities with older housing stock like Haddonfield, Collingswood, and Audubon.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'When is termite swarm season in Camden County?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Eastern subterranean termite swarm season in Camden County runs from approximately March through June, with peak swarming in April and May on warm, humid days following rainfall.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How is Sentricon different from liquid termite treatment?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Liquid termiticide creates a chemical barrier in the soil that kills termites crossing it. Sentricon is a bait system where in-ground stations contain a bait that termite workers discover, share with the colony, and which eventually eliminates the entire colony including the queen.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do I need a WDI report to sell my home in NJ?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'New Jersey does not require a WDI report by law for home sales, but many mortgage lenders and most buyers request one as part of due diligence. We provide NPMA-33 WDI reports throughout Camden County on a same-day or next-day basis.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How long does a termite inspection take?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'A thorough termite inspection of a typical Camden County home takes between 45 minutes and 1.5 hours. Our technician will explain all findings in real time and provide a written report before leaving. The inspection is completely free.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'My home is new construction — do I still need a termite inspection?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Absolutely. Newer homes are not immune to termite attack. Construction activity disturbs soil and exposes wood, often accelerating termite colonization. Annual inspections ensure protection measures remain effective.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </div>
  );
}
