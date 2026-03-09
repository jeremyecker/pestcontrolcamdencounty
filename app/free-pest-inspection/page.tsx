import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Free Pest Inspection Camden County NJ | No Obligation',
  description:
    'Schedule a free pest inspection in Camden County NJ. No obligation, no hidden fees. All pests covered, all 16 towns served. Call (856) 600-0812.',
  keywords:
    'free pest inspection, free pest inspection Camden County, free exterminator estimate, free termite inspection NJ, pest inspection Cherry Hill',
};

export default function FreePestInspection() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <span className="text-gray-900">Free Pest Inspection</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Pest Inspection — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Not sure what is bugging you? Our licensed technicians will inspect your property, identify the pest,
            and provide a detailed assessment — completely free, with zero obligation.
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

        {/* What's Included */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            What Is Included in Our Free Pest Inspection
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our free pest inspection is not a quick glance and a sales pitch. It is a genuine, thorough evaluation of
            your property performed by a NJDEP-licensed pest control technician. We offer this service because we
            believe you deserve to understand exactly what is happening in your home before you spend a single dollar
            on treatment. There is no obligation to purchase services after the inspection — the information we provide
            is yours to keep regardless of your decision.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We have performed hundreds of free pest inspections throughout Camden County — in{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link> colonials,{' '}
            <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link> Victorians,{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link> bungalows,{' '}
            <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link> suburban homes,
            commercial properties in <Link href="/camden-county/pennsauken" className="text-[#2B6CB0] hover:underline">Pennsauken</Link>{' '}
            and <Link href="/camden-county/bellmawr" className="text-[#2B6CB0] hover:underline">Bellmawr</Link>, and rental
            units throughout the county. Every inspection is performed to the same professional standard regardless of
            property size or type.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Complete Exterior Property Inspection</h3>
                <p className="text-gray-700">
                  Our technician walks the entire perimeter of your home, examining the foundation, exterior walls,
                  roofline, soffits, fascia, gutters, window frames, door frames, garage, shed, deck, and landscaping.
                  We look for pest entry points, harborage areas, conducive conditions (moisture, wood-to-soil contact,
                  dense vegetation against the structure), and evidence of active pest activity including droppings,
                  damage marks, webs, nests, mud tubes, and burrows.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Thorough Interior Inspection</h3>
                <p className="text-gray-700">
                  Inside your home, we inspect the kitchen, bathrooms, basement, attic, crawl space (if accessible),
                  utility areas, and any rooms where pest activity has been observed. We check behind appliances,
                  under sinks, in utility voids, along baseboards, in storage areas, and anywhere else pests are
                  likely to harbor or travel.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Pest Identification</h3>
                <p className="text-gray-700">
                  Accurate pest identification is more important than most homeowners realize. Carpenter ants and
                  odorous house ants require completely different treatment strategies. German cockroaches and American
                  cockroaches have different harborage preferences and respond to different baiting approaches. Eastern
                  subterranean termites require licensed professionals with specialized equipment. Our technicians are
                  trained to identify all common Camden County pests accurately — not just category-level identification
                  but species-level when treatment depends on it.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Conducive Conditions Assessment</h3>
                <p className="text-gray-700">
                  Beyond identifying active pests, we document all conditions that are making your property vulnerable
                  to infestation — poor drainage, wood-to-soil contact, gaps in the building envelope, improperly
                  stored firewood, standing water, overgrown landscaping, and other factors. Addressing conducive
                  conditions is often the most important long-term step in pest prevention.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Written Inspection Report &amp; Quote</h3>
                <p className="text-gray-700">
                  At the end of the inspection, our technician provides a written report documenting all findings,
                  photographs of significant items, and a detailed treatment recommendation with pricing if treatment
                  is warranted. You receive this report whether or not you decide to proceed with service. The report
                  is yours to keep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Findings in Camden County */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Common Findings in Camden County Home Inspections
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            After hundreds of free inspections throughout Camden County, our technicians have identified the most
            common pest problems and conducive conditions specific to different communities and property types in the
            region. Here is what we regularly find:
          </p>

          <div className="space-y-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-3">Older Homes (Pre-1980) — Haddonfield, Collingswood, Audubon, Barrington</h3>
              <p className="text-gray-700 mb-2">
                The historic and early-20th-century homes in these Camden County communities are the most frequently
                flagged during free inspections. Common findings include:
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>→ Eastern subterranean termite mud tubes on crawl space walls and sill plates</li>
                <li>→ Carpenter ant colonies in moisture-damaged wood around windows, doors, and roof eaves</li>
                <li>→ Mouse activity through gaps in stone or brick foundations and around pipe penetrations</li>
                <li>→ Bat entry through gaps in older soffits, gable vents, and brick mortar joints</li>
                <li>→ Moisture damage and fungal rot creating highly conducive conditions for wood-destroying insects</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-3">Suburban Homes (1980–2005) — Cherry Hill, Voorhees, Mount Laurel</h3>
              <p className="text-gray-700 mb-2">
                Mid-age suburban homes in the major Camden County townships present a distinct set of common inspection
                findings:
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>→ Ant trails from landscaping through slab cracks and expansion joints into kitchen and bathrooms</li>
                <li>→ Rodent entry via gaps around HVAC penetrations, dryer vents, and garage door frames</li>
                <li>→ Yellow jacket or hornet nests in eaves, shutters, and wall voids</li>
                <li>→ Termite activity around deck-to-foundation connections and wood mulch adjacent to foundation</li>
                <li>→ Squirrel access through deteriorated roof-to-soffit junctions</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-3">Newer Homes (Post-2005) — Marlton, Winslow Township, Gloucester Township</h3>
              <p className="text-gray-700 mb-2">
                Even new construction in southern Camden County is not immune. Common inspection findings include:
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>→ Termite activity at concrete slab cold joints and garage expansion gaps</li>
                <li>→ Tick and mosquito pressure from wooded buffers and retention ponds bordering new developments</li>
                <li>→ Deer tick habitat in ornamental landscaping and unmaintained woodland edges</li>
                <li>→ Wildlife pressure as construction displaces populations of raccoons, opossums, and foxes</li>
                <li>→ Ant and spider infiltration through gaps around windows and doors in new construction</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-3">Commercial Properties — Pennsauken, Lindenwold, Runnemede, Bellmawr</h3>
              <p className="text-gray-700 mb-2">
                Commercial properties along Route 130, Route 42, and other Camden County commercial corridors have
                their own inspection profile:
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>→ Cockroach activity in food service establishments, particularly in compressor areas and floor drains</li>
                <li>→ Rodent entry through loading dock gaps, utility penetrations, and roof drains</li>
                <li>→ Bird nesting on HVAC units, loading dock canopies, and rooftop equipment</li>
                <li>→ Fly pressure near food waste areas and exterior dumpsters</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Prepare */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            How to Prepare for Your Free Pest Inspection
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Preparing your home for a pest inspection takes only a few minutes and helps our technician conduct the
            most thorough assessment possible. Here is what we recommend:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-2">✓ Do These Things</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>→ Provide clear access to the crawl space, basement, and attic if possible</li>
                <li>→ Clear items away from foundation walls in the basement or crawl space</li>
                <li>→ Move items stored against exterior walls away so we can inspect the wall surface</li>
                <li>→ Write down when and where you have seen pest activity</li>
                <li>→ Note any specific concerns (damaged wood, soft floors, unusual odors, sounds in walls)</li>
                <li>→ Make sure pets are secure so they do not interfere with the inspection</li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-2">✗ Do Not Do These</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>→ Do not spray pesticides before the inspection — this can scatter pests and make identification harder</li>
                <li>→ Do not deep-clean areas of concern before we arrive — evidence of pest activity is helpful</li>
                <li>→ Do not attempt to seal entry points before the inspection — we need to see them</li>
                <li>→ Do not throw away pest evidence (droppings, shed skins, wings) before we arrive</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            If you are preparing for a <Link href="/termite-inspection" className="text-[#2B6CB0] hover:underline">termite inspection</Link>{' '}
            specifically, please ensure access to the crawl space or basement and clear a path along the interior
            foundation walls if possible. For bed bug inspections, do not move mattresses or furniture from the
            affected room before the inspection — the placement and condition of these items provides important
            diagnostic information.
          </p>
        </section>

        {/* Why Free Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why Do We Offer Free Pest Inspections?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Many Camden County homeowners are surprised that our pest inspections are genuinely free — not a &quot;free
            inspection with a required annual contract&quot; or a &quot;free estimate that is really just a sales call.&quot; Our
            free inspection is exactly what it says: a professional evaluation with no cost, no pressure, and no
            commitment required.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We offer free inspections for a straightforward reason: we are a locally owned Camden County business,
            and our reputation in this community is built on trust and transparency. We believe that informed customers
            make better decisions, and we are confident that when you see the quality of our work — the thoroughness
            of our inspection, the clarity of our reporting, and the professionalism of our technicians — you will
            choose to work with us. We do not need to pressure you with tactics or mandatory contracts.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Free inspections also serve the community. Termite damage, rodent infestations, and other pest problems
            that go undetected for years cause far more damage — and far more expense — than early detection and
            treatment. By making professional inspections accessible and free, we help Camden County homeowners
            catch problems early, before they become expensive structural repairs or health crises.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            For real estate transactions, our free inspections include the formal{' '}
            <Link href="/termite-inspection" className="text-[#2B6CB0] hover:underline">WDI (Wood Destroying Insect) report</Link>{' '}
            when requested, supporting buyers and sellers throughout{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
            <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>,{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,{' '}
            <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>, and all other
            Camden County municipalities.
          </p>
        </section>

        {/* Towns Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Free Pest Inspection Serving All of Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We provide free pest inspections throughout all 16 municipalities in Camden County, NJ. No matter where
            you are located in the county, we can schedule an inspection — usually same-day or next-day:
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
                className="bg-blue-50 hover:bg-blue-100 text-[#1A365D] font-medium py-3 px-4 rounded-lg text-center transition-colors text-sm"
              >
                {town.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            For{' '}
            <Link href="/same-day-pest-control" className="text-[#2B6CB0] hover:underline">same-day inspection appointments</Link>,
            call before noon at{' '}
            <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>.
            For{' '}
            <Link href="/emergency-pest-control" className="text-[#2B6CB0] hover:underline">pest emergencies</Link>{' '}
            requiring immediate inspection — wasp nests near children, bats in living spaces, active rodent
            infestations with food contamination — we offer priority response regardless of time of day.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Frequently Asked Questions — Free Pest Inspection in Camden County
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Is the inspection really free with no obligation?</h3>
              <p className="text-gray-700">
                Yes, completely. Our free pest inspection includes a full interior and exterior property inspection,
                pest identification, conducive conditions assessment, written report with photographs, and a treatment
                quote if treatment is warranted. There is no charge for the inspection regardless of findings, and
                you are under absolutely no obligation to proceed with any treatment. The information we provide is
                yours to keep.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">How long does a free pest inspection take?</h3>
              <p className="text-gray-700">
                For a typical Camden County single-family home, a thorough free pest inspection takes between 45
                minutes and 1.5 hours. Larger properties or those with accessible crawl spaces, full basements, or
                large attics may take longer. Our technician will not rush the inspection — we take the time needed
                to do it properly.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">What pests do you inspect for?</h3>
              <p className="text-gray-700">
                Our free inspection covers all common pests found in Camden County homes and businesses: termites
                (eastern subterranean), ants (carpenter ants, odorous house ants, pavement ants), cockroaches
                (German, American, Oriental), bed bugs, mice, rats, wasps, hornets, yellow jackets, spiders,
                fleas, ticks, mosquitoes, and wildlife (raccoons, squirrels, bats, birds). We also document all
                wood-destroying insects for WDI report purposes.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Can I get a free inspection for a rental property in Camden County?</h3>
              <p className="text-gray-700">
                Yes. We perform free pest inspections for rental properties, apartment buildings, and commercial
                properties throughout Camden County. For landlords managing multiple units, we offer portfolio
                inspection programs. For tenants who have reported pest problems, we coordinate directly with the
                property owner or manager for the inspection. New Jersey tenant&apos;s rights include the right to a
                pest-free living environment, and we are familiar with the relevant NJ landlord-tenant pest control
                responsibilities.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Do you provide a written report after the inspection?</h3>
              <p className="text-gray-700">
                Yes. Every free inspection includes a written report documenting all findings — including photographs
                of significant items, identification of pests found, conducive conditions noted, and recommended
                treatment with pricing. This report is provided to you the same day as the inspection. For real estate
                purposes, this report meets the requirements for a NJ WDI (Wood Destroying Insect) report when
                requested.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">What if pests are found during the inspection?</h3>
              <p className="text-gray-700">
                If our inspection reveals an active pest infestation, we explain the findings in detail, discuss
                treatment options, and provide a written quote. You can proceed with treatment immediately if you
                wish — many inspections result in same-day treatment — or you can take the report, consider the
                options, and call us back at your convenience. There is never any pressure to commit during the
                inspection visit.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Can you do the inspection the same day I call?</h3>
              <p className="text-gray-700">
                In most cases, yes. For calls received before noon, we can typically schedule a{' '}
                <Link href="/same-day-pest-control" className="text-[#2B6CB0] hover:underline">same-day inspection appointment</Link>{' '}
                anywhere in Camden County. For calls after noon, we typically schedule a next-morning appointment.
                For{' '}
                <Link href="/emergency-pest-control" className="text-[#2B6CB0] hover:underline">pest emergencies</Link>,
                we dispatch a technician regardless of the time of day.
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
            <Link href="/termite-inspection" className="block bg-amber-50 hover:bg-amber-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Free Termite Inspection →</h3>
              <p className="text-gray-600 text-sm">Specialized termite assessments and WDI reports for Camden County</p>
            </Link>
            <Link href="/same-day-pest-control" className="block bg-green-50 hover:bg-green-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Same-Day Pest Control →</h3>
              <p className="text-gray-600 text-sm">Book a same-day inspection and treatment across Camden County</p>
            </Link>
            <Link href="/emergency-pest-control" className="block bg-red-50 hover:bg-red-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Emergency Pest Control →</h3>
              <p className="text-gray-600 text-sm">Immediate response for urgent pest emergencies</p>
            </Link>
            <Link href="/exterminator-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Exterminator Near Me →</h3>
              <p className="text-gray-600 text-sm">NJDEP-licensed exterminators throughout Camden County</p>
            </Link>
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Pest Control Near Me →</h3>
              <p className="text-gray-600 text-sm">Full-service local pest control for every Camden County pest</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            Schedule Your Free Pest Inspection Today
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            No cost. No obligation. No pressure. Just a thorough, professional inspection from a NJDEP-licensed
            Camden County pest control team that wants to earn your trust.
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
          <h2 className="text-3xl font-bold mb-4">Free Pest Inspection — All of Camden County, NJ</h2>
          <p className="text-blue-200 text-lg mb-6">
            Truly free. NJDEP licensed. No obligation. Serving all 16 towns.
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
                name: 'Camden County Pest Control — Free Pest Inspection',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/free-pest-inspection',
                description:
                  'Free pest inspection in Camden County, NJ. No obligation, no hidden fees. NJDEP-licensed technicians serving all 16 towns. Written report included.',
                areaServed: {
                  '@type': 'County',
                  name: 'Camden County',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'New Jersey',
                  },
                },
                serviceType: 'Free Pest Inspection',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  description: 'Free pest inspection — no obligation',
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Is the inspection really free with no obligation?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, completely. Our free pest inspection includes a full interior and exterior property inspection, pest identification, written report with photographs, and a treatment quote. There is no charge and absolutely no obligation to proceed with treatment.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How long does a free pest inspection take?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'For a typical Camden County single-family home, a thorough free pest inspection takes between 45 minutes and 1.5 hours depending on property size and accessibility.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What pests do you inspect for?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Our free inspection covers all common pests: termites, ants, cockroaches, bed bugs, mice, rats, wasps, hornets, spiders, fleas, ticks, mosquitoes, and wildlife including raccoons, squirrels, and bats.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you provide a written report after the inspection?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Every free inspection includes a written report documenting all findings with photographs, pest identification, conducive conditions, and a treatment recommendation with pricing if treatment is warranted. Provided the same day as the inspection.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can you do the inspection the same day I call?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'In most cases, yes. For calls received before noon, we typically schedule a same-day inspection anywhere in Camden County. For calls after noon, we typically schedule next-morning. For emergencies, we dispatch immediately.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What if pests are found during the inspection?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'If pests are found, we explain findings in detail, discuss treatment options, and provide a written quote. You can proceed with same-day treatment or take the report and decide at your convenience. There is never any pressure.',
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
