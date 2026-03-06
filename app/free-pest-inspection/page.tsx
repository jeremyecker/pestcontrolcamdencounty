import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import TrustBar from '@/components/TrustBar';

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
            Free Pest Inspection in Camden County, NJ
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
            Here is everything our free inspection covers:
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
                  utility areas, and any rooms where you have noticed pest activity. We check behind appliances, inside
                  cabinets, around plumbing fixtures, along baseboards, and in storage areas. We also look for signs
                  of moisture intrusion, which attracts many pest species.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Pest Identification</h3>
                <p className="text-gray-700">
                  Accurate pest identification is the foundation of effective treatment. Many pests look similar but
                  require completely different treatment strategies. Carpenter ants vs. odorous house ants, German
                  cockroaches vs. American cockroaches, mice vs. rats, subterranean termites vs. carpenter ants — our
                  technicians are trained to identify the exact species and assess the infestation level accurately.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Entry Point Mapping</h3>
                <p className="text-gray-700">
                  We identify how pests are getting into your home — gaps in the foundation, cracks around pipes,
                  damaged vent screens, gaps under doors, unsealed utility penetrations, and more. Understanding
                  entry points is essential because treatment alone is not enough; if you do not seal the entry
                  points, pests will return.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Written Assessment & Recommendations</h3>
                <p className="text-gray-700">
                  After the inspection, you receive a clear, written assessment of our findings — what pest (if any)
                  is present, the estimated severity, the entry points and contributing conditions, and our recommended
                  treatment approach. If treatment is warranted, we provide a written price quote with no hidden fees.
                  If no treatment is needed, we tell you that too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* All Pests Covered */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Every Pest Covered Under One Free Inspection
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our free inspection covers all common residential pests found in Camden County. You do not need to know
            what the pest is before you call — that is our job. Our technicians are trained to identify and assess:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#1A365D] mb-2">Crawling Insects</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>→ <Link href="/services/ant-control" className="text-[#2B6CB0] hover:underline">Ants</Link> (carpenter, pavement, odorous)</li>
                <li>→ <Link href="/services/cockroach-control" className="text-[#2B6CB0] hover:underline">Cockroaches</Link> (German, American, Oriental)</li>
                <li>→ <Link href="/services/spider-control" className="text-[#2B6CB0] hover:underline">Spiders</Link> (house, wolf, brown recluse)</li>
                <li>→ <Link href="/services/bed-bug-removal" className="text-[#2B6CB0] hover:underline">Bed Bugs</Link></li>
                <li>→ <Link href="/services/flea-tick-treatment" className="text-[#2B6CB0] hover:underline">Fleas & Ticks</Link></li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#1A365D] mb-2">Wood-Destroying Pests</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>→ <Link href="/services/termite-treatment" className="text-[#2B6CB0] hover:underline">Subterranean Termites</Link></li>
                <li>→ Carpenter Ants</li>
                <li>→ Carpenter Bees</li>
                <li>→ Powder Post Beetles</li>
                <li>→ <Link href="/termite-inspection" className="text-[#2B6CB0] hover:underline">Full termite inspections</Link> also available</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#1A365D] mb-2">Wildlife & Flying Pests</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>→ <Link href="/services/rodent-control" className="text-[#2B6CB0] hover:underline">Mice & Rats</Link></li>
                <li>→ <Link href="/services/raccoon-removal" className="text-[#2B6CB0] hover:underline">Raccoons</Link></li>
                <li>→ <Link href="/services/squirrel-removal" className="text-[#2B6CB0] hover:underline">Squirrels</Link></li>
                <li>→ <Link href="/services/bat-removal" className="text-[#2B6CB0] hover:underline">Bats</Link></li>
                <li>→ <Link href="/services/wasp-hornet-removal" className="text-[#2B6CB0] hover:underline">Wasps & Hornets</Link></li>
                <li>→ <Link href="/services/mosquito-control" className="text-[#2B6CB0] hover:underline">Mosquitoes</Link></li>
                <li>→ <Link href="/services/bird-control" className="text-[#2B6CB0] hover:underline">Pest Birds</Link></li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            We also provide <Link href="/services/commercial-pest-control" className="text-[#2B6CB0] hover:underline">commercial pest inspections</Link>{' '}
            for restaurants, retail stores, offices, warehouses, healthcare facilities, and other business properties
            throughout Camden County. Commercial inspections include all of the above plus assessment of food safety
            compliance, IPM program recommendations, and documentation for health department requirements.
          </p>
        </section>

        {/* How to Schedule */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            How to Schedule Your Free Inspection
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Scheduling is simple and takes less than 5 minutes:
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl">1</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">Call or Submit a Request</h3>
                <p className="text-gray-700">
                  Call us at <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>{' '}
                  during business hours, or submit a request anytime through our{' '}
                  <Link href="/contact" className="text-[#2B6CB0] hover:underline">online form</Link>. Let us know your
                  address, the pest concern (if you know it), and your preferred appointment time.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl">2</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">We Confirm Your Appointment</h3>
                <p className="text-gray-700">
                  We schedule your free inspection at a time that works for you — including{' '}
                  <Link href="/same-day-pest-control" className="text-[#2B6CB0] hover:underline">same-day appointments</Link>{' '}
                  for calls received before noon. We provide a convenient 2-hour window so you are not stuck waiting
                  all day.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl">3</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">Licensed Technician Inspects Your Property</h3>
                <p className="text-gray-700">
                  Our NJDEP-licensed technician performs the complete inspection described above — exterior, interior,
                  pest identification, entry point mapping, and conducive condition assessment. The inspection typically
                  takes 30–60 minutes depending on property size.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl">4</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">You Receive Your Assessment — Free, No Strings</h3>
                <p className="text-gray-700">
                  After the inspection, the technician walks you through the findings, answers your questions, and
                  provides a written assessment. If treatment is recommended, you receive a clear quote. If not, you
                  have peace of mind. Either way, the inspection is 100% free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            What to Expect During the Inspection Visit
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We want you to feel comfortable and informed throughout the process. Here is what a typical free inspection
            visit looks like:
          </p>
          <ul className="text-gray-700 space-y-3">
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>Our technician arrives in a marked company vehicle</strong> and introduces themselves with their name and NJDEP license number. They will be in uniform and carry identification.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>They will ask you about the problem</strong> — what you have been seeing, where, and for how long. Your observations provide valuable context that helps focus the inspection.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>The inspection is non-invasive.</strong> We do not drill holes, move heavy furniture, or cause any disruption to your home. The inspection uses visual examination, probing tools, moisture meters, and a flashlight to assess accessible areas.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>You are welcome to accompany the technician</strong> as they inspect. Many homeowners find it educational to see their property through a pest control professional&apos;s eyes — you will learn where the vulnerable areas are and how pests are likely to enter.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>There is absolutely no pressure to purchase services.</strong> Our technicians are trained professionals, not salespeople. If you need time to consider the recommendations, that is perfectly fine. The written assessment and quote are yours to review at your own pace.</span>
            </li>
          </ul>
        </section>

        {/* All 16 Towns */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Free Inspections for All 16 Camden County Towns
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our free pest inspection service is available to every homeowner and business in{' '}
            <Link href="/camden-county" className="text-[#2B6CB0] hover:underline">Camden County</Link>.
            We serve the entire county — from the Delaware River communities in the west to the Pine Barrens-adjacent
            towns in the east:
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
                className="bg-green-50 hover:bg-green-100 text-[#1A365D] font-medium py-2 px-3 rounded-lg text-center transition-colors text-sm"
              >
                {town.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Each Camden County community has unique pest pressures. The heavily wooded areas around{' '}
            <Link href="/camden-county/winslow-township" className="text-[#2B6CB0] hover:underline">Winslow Township</Link>{' '}
            and <Link href="/camden-county/clementon" className="text-[#2B6CB0] hover:underline">Clementon</Link> near the
            Pine Barrens see more wildlife and tick activity. The established suburban neighborhoods of{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link> and{' '}
            <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link> deal with
            termites, ants, and rodents. The compact boroughs of{' '}
            <Link href="/camden-county/barrington" className="text-[#2B6CB0] hover:underline">Barrington</Link>,{' '}
            <Link href="/camden-county/somerdale" className="text-[#2B6CB0] hover:underline">Somerdale</Link>, and{' '}
            <Link href="/camden-county/runnemede" className="text-[#2B6CB0] hover:underline">Runnemede</Link> see cockroach
            and ant pressure from closely spaced homes. Our free inspection accounts for these local factors.
          </p>
        </section>

        {/* Why Free */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why Do We Offer Free Inspections?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            You might wonder how we can afford to send a licensed technician to your property at no charge. The answer
            is simple: we believe a free inspection is the best way to build trust with Camden County homeowners.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Many people delay calling a pest control company because they are worried about cost, afraid of being
            pressured into unnecessary services, or uncertain whether they even have a real problem. Our free inspection
            removes all of those barriers. You get professional-grade information with no financial risk and no pressure.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            In our experience, homeowners who receive a thorough, honest inspection — even when it reveals no current
            infestation — remember that experience. They come back to us when a real problem arises, and they recommend
            us to their neighbors. That is how we have built our reputation across Camden County, and it is a model
            that works for everyone.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Looking for more information about our services? Visit our{' '}
            <Link href="/pest-control-near-me" className="text-[#2B6CB0] hover:underline">pest control near me</Link>{' '}
            page for a complete overview, or read about our{' '}
            <Link href="/exterminator-near-me" className="text-[#2B6CB0] hover:underline">exterminator qualifications</Link>{' '}
            and licensing. For urgent issues, check our{' '}
            <Link href="/emergency-pest-control" className="text-[#2B6CB0] hover:underline">emergency pest control</Link>{' '}
            and <Link href="/same-day-pest-control" className="text-[#2B6CB0] hover:underline">same-day service</Link> options.
          </p>
        </section>

        {/* Final CTA */}
        <section className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            Schedule Your Free Inspection — No Obligation
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Find out exactly what is going on with your property — for free. Our licensed technician will inspect
            your home, identify any pest activity, and provide a written assessment at no cost.
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
              Schedule Free Inspection
            </Link>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <section className="bg-[#1A365D] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Free Inspection. Free Quote. Zero Obligation.</h2>
          <p className="text-blue-200 text-lg mb-6">
            Every pest problem starts with knowing what you are dealing with. Let us inspect your Camden County
            property at no cost.
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
            name: 'Camden County Pest Control - Free Inspection',
            telephone: '(856) 600-0812',
            url: 'https://pestcontrolcamdencounty.com/free-pest-inspection',
            description:
              'Free pest inspection for all homes and businesses in Camden County, NJ. No obligation, all pests covered, all 16 towns served.',
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
              description: 'Free pest inspection with no obligation',
            },
          }),
        }}
      />
    </div>
  );
}
