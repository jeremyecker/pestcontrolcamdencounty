import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Free Pest Estimate Camden County NJ | No Obligation',
  description:
    'Get a free pest estimate for your Camden County NJ home. No obligation, no hidden fees. All pests covered, all 16 towns served. Call (856) 600-0812.',
  keywords:
    'free pest estimate, pest estimate Camden County, free exterminator estimate, free termite quote NJ, pest estimate Cherry Hill',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'PestControlService'],
  name: 'Camden County Pest Control',
  url: 'https://pestcontrolcamdencounty.com',
  telephone: '+18566000812',
  image: 'https://pestcontrolcamdencounty.com/images/og-default.jpg',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'NJ',
    addressCountry: 'US',
  },
};

export default function FreePestEstimate() {
  return (
    <div className="min-h-screen">
      <TrustBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <span className="text-gray-900">Free Pest Estimate</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get a Free Pest Estimate — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Not sure what is bugging you? Our licensed technicians will assess your property, identify the pest,
            and provide a detailed cost estimate — completely free, with zero obligation.
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
              Schedule Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* What's Included */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            What Is Included in Our Free Pest Estimate
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our free pest estimate is not a quick glance and a sales pitch. It is a genuine, thorough evaluation of
            your property performed by a NJDEP-licensed pest control technician. We offer this service because we
            believe you deserve to understand exactly what is happening in your home before you spend a single dollar
            on treatment. There is no obligation to purchase services after the estimate — the information we provide
            is yours to keep regardless of your decision.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We have performed hundreds of free estimates throughout Camden County — in{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link> colonials,{' '}
            <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link> Victorians,{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link> bungalows,{' '}
            <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link> suburban homes,
            commercial properties in <Link href="/camden-county/pennsauken" className="text-[#2B6CB0] hover:underline">Pennsauken</Link>{' '}
            and <Link href="/camden-county/bellmawr" className="text-[#2B6CB0] hover:underline">Bellmawr</Link>, and rental
            units throughout the county. Every estimate is performed to the same professional standard regardless of
            property size or type.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Complete Exterior Property Assessment</h3>
                <p className="text-gray-700">
                  Our technician walks the entire perimeter of your home, examining the foundation, exterior walls,
                  roofline, soffits, fascia, gutters, window frames, door frames, garage, shed, deck, and landscaping.
                  We look for pest entry points, harborage areas, conducive conditions (moisture, wood-to-soil contact,
                  dense vegetation against the structure), and evidence of active pest activity.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Thorough Interior Assessment</h3>
                <p className="text-gray-700">
                  Inside your home, we assess the kitchen, bathrooms, basement, attic, crawl space (if accessible),
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
                  cockroaches have different harborage preferences. Our technicians are trained to identify all common
                  Camden County pests accurately — not just category-level identification but species-level when treatment depends on it.
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
                <h3 className="text-lg font-semibold text-[#1A365D]">Written Estimate &amp; Report</h3>
                <p className="text-gray-700">
                  At the end of the estimate, our technician provides a written report documenting all findings,
                  photographs of significant items, and a detailed treatment recommendation with pricing if treatment
                  is warranted. You receive this report whether or not you decide to proceed with service. The report
                  is yours to keep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Findings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Common Findings in Camden County Home Estimates
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            After hundreds of free estimates throughout Camden County, our technicians have identified the most
            common pest problems and conducive conditions specific to different communities and property types in the
            region. Here is what we regularly find:
          </p>

          <div className="space-y-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-3">Older Homes (Pre-1980)</h3>
              <p className="text-gray-700 mb-2">
                Historic homes in Haddonfield, Collingswood, Audubon, and Barrington frequently present pest challenges:
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>→ Eastern subterranean termite mud tubes on crawl space walls and sill plates</li>
                <li>→ Carpenter ant colonies in moisture-damaged wood around windows and roof eaves</li>
                <li>→ Mouse activity through gaps in stone or brick foundations</li>
                <li>→ Bat entry through gaps in older soffits, gable vents, and brick mortar joints</li>
                <li>→ Moisture damage and fungal rot creating conducive conditions for wood-destroying insects</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-3">Suburban Homes (1980–2005)</h3>
              <p className="text-gray-700 mb-2">
                Mid-age suburban homes in Cherry Hill, Voorhees, and Mount Laurel present distinct pest challenges:
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>→ Ant trails from landscaping through slab cracks into kitchens and bathrooms</li>
                <li>→ Rodent entry via gaps around HVAC penetrations and dryer vents</li>
                <li>→ Yellow jacket or hornet nests in eaves and wall voids</li>
                <li>→ Termite activity around deck-to-foundation connections</li>
                <li>→ Squirrel access through deteriorated roof-to-soffit junctions</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-3">Newer Homes (Post-2005)</h3>
              <p className="text-gray-700 mb-2">
                Even new construction in southern Camden County presents predictable pest pressures:
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>→ Termite activity at concrete slab cold joints and garage gaps</li>
                <li>→ Tick and mosquito pressure from wooded buffers and retention ponds</li>
                <li>→ Deer tick habitat in ornamental landscaping</li>
                <li>→ Wildlife pressure as construction displaces raccoon and opossum populations</li>
                <li>→ Ant and spider infiltration through gaps around windows and doors</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-3">Commercial Properties</h3>
              <p className="text-gray-700 mb-2">
                Commercial properties along Route 130, Route 42, and other commercial corridors have distinct profiles:
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>→ Cockroach activity in food service establishments</li>
                <li>→ Rodent entry through loading dock gaps and utility penetrations</li>
                <li>→ Bird nesting on HVAC units and loading dock canopies</li>
                <li>→ Fly pressure near food waste areas and exterior dumpsters</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Prepare */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            How to Prepare for Your Free Pest Estimate
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Preparing your home for an estimate takes only a few minutes and helps our technician conduct the
            most thorough assessment possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-2">✓ Do These Things</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>→ Provide clear access to the crawl space, basement, and attic if possible</li>
                <li>→ Clear items away from foundation walls in the basement or crawl space</li>
                <li>→ Move items stored against exterior walls so we can see the wall surface</li>
                <li>→ Write down when and where you have seen pest activity</li>
                <li>→ Note any specific concerns (damaged wood, soft floors, unusual odors)</li>
                <li>→ Make sure pets are secure so they do not interfere with the estimate</li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-2">✗ Do Not Do These</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>→ Do not spray pesticides before the estimate — this scatters pests</li>
                <li>→ Do not deep-clean areas of concern — evidence of pest activity is helpful</li>
                <li>→ Do not attempt to seal entry points — we need to see them</li>
                <li>→ Do not throw away pest evidence before we arrive</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            For termite estimates specifically, please ensure access to the crawl space or basement and clear a path along the interior
            foundation walls if possible.
          </p>
        </section>

        {/* Why Free Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why Do We Offer Free Pest Estimates?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Many Camden County homeowners are surprised that our pest estimates are genuinely free — not a "free estimate with a required annual contract." Our free estimate is exactly what it says: a professional evaluation with no cost, no pressure, and no
            commitment required.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We offer free estimates for a straightforward reason: we are a locally owned Camden County business,
            and our reputation in this community is built on trust and transparency. We believe that informed customers
            make better decisions, and we are confident that when you see the quality of our work — the thoroughness
            of our estimate, the clarity of our reporting, and the professionalism of our technicians — you will
            choose to work with us.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Free estimates also serve the community. Termite damage, rodent infestations, and other pest problems
            that go undetected for years cause far more damage — and far more expense — than early detection and
            treatment. By making professional estimates accessible and free, we help Camden County homeowners
            catch problems early, before they become expensive repairs.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            For real estate transactions, our estimates include formal WDI (Wood Destroying Insect) reports
            when requested, supporting buyers and sellers throughout Camden County.
          </p>
        </section>

        {/* Towns Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Free Pest Estimate Serving All of Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We provide free pest estimates throughout all 16 municipalities in Camden County, NJ. No matter where
            you are located, we can usually schedule an estimate same-day or next-day:
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
            For same-day estimate appointments, call before noon at{' '}
            <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Frequently Asked Questions — Free Pest Estimate in Camden County
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Is the estimate really free with no obligation?</h3>
              <p className="text-gray-700">
                Yes, completely. Our free pest estimate includes a full interior and exterior property assessment,
                pest identification, conducive conditions assessment, written report with photographs, and a treatment
                quote if treatment is warranted. There is no charge for the estimate and you are under no obligation to proceed.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">How long does a free pest estimate take?</h3>
              <p className="text-gray-700">
                For a typical Camden County single-family home, a thorough free estimate takes between 45
                minutes and 1.5 hours. Larger properties or those with accessible crawl spaces, full basements, or
                large attics may take longer. Our technician will not rush the estimate.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">What pests do you assess for?</h3>
              <p className="text-gray-700">
                Our free estimate covers all common pests found in Camden County homes and businesses: termites, ants,
                cockroaches, bed bugs, mice, rats, wasps, hornets, yellow jackets, spiders, fleas, ticks, mosquitoes, and wildlife.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Can I get a free estimate for a rental property?</h3>
              <p className="text-gray-700">
                Yes. We perform free estimates for rental properties, apartment buildings, and commercial
                properties throughout Camden County. For tenants who have reported pest problems, we coordinate directly
                with the property owner or manager for the estimate.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Do you provide a written report after the estimate?</h3>
              <p className="text-gray-700">
                Yes. Every free estimate includes a written report documenting all findings — including photographs,
                pest identification, conducive conditions noted, and recommended treatment with pricing. This report meets
                the requirements for a NJ WDI (Wood Destroying Insect) report when requested.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">What if pests are found during the estimate?</h3>
              <p className="text-gray-700">
                If our estimate reveals an active pest infestation, we explain the findings in detail, discuss
                treatment options, and provide a written quote. You can proceed with treatment immediately or take the
                report and call back at your convenience. There is never any pressure.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Can you schedule the estimate the same day I call?</h3>
              <p className="text-gray-700">
                In most cases, yes. For calls received before noon, we can typically schedule a same-day estimate anywhere in Camden County.
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
              <h3 className="font-semibold text-[#1A365D] mb-1">Termite Inspection →</h3>
              <p className="text-gray-600 text-sm">Specialized termite assessment and WDI reports for Camden County</p>
            </Link>
            <Link href="/same-day-pest-control" className="block bg-green-50 hover:bg-green-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Same-Day Service →</h3>
              <p className="text-gray-600 text-sm">Book a same-day service across Camden County</p>
            </Link>
            <Link href="/fast-response-pest-control" className="block bg-orange-50 hover:bg-orange-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Fast Response Service →</h3>
              <p className="text-gray-600 text-sm">Immediate response for urgent pest situations</p>
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
            Schedule Your Free Pest Estimate Today
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            No cost. No obligation. No pressure. Just a thorough, professional assessment from a NJDEP-licensed
            Camden County pest control team.
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
              Get a Free Estimate
            </Link>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <section className="bg-[#1A365D] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Free Pest Estimate — All of Camden County, NJ</h2>
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
                name: 'Camden County Pest Control — Free Pest Estimate',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/free-pest-estimate',
                description:
                  'Free pest estimate in Camden County, NJ. No obligation, no hidden fees. NJDEP-licensed technicians serving all 16 towns. Written report included.',
                areaServed: {
                  '@type': 'County',
                  name: 'Camden County',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'New Jersey',
                  },
                },
                serviceType: 'Free Pest Estimate',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  description: 'Free pest estimate — no obligation',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
