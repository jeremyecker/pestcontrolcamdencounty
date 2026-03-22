import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Pest Control Near Me in Camden County NJ | Same-Day Service',
  description:
    'Searching for pest control near me in Camden County? Local, licensed exterminators serving Cherry Hill, Voorhees, Haddonfield & all 16 towns. Call (856) 600-0812 for a free estimate.',
  keywords:
    'pest control near me, pest control Camden County, exterminator near me, pest control Cherry Hill, pest control Voorhees NJ',
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

export default function PestControlNearMe() {
  const faqItems = [
    {
      question: 'How quickly can you get to my home in Camden County?',
      answer:
        'Because we are based in Camden County, we can typically schedule a same-day appointment for calls received before noon. We serve Cherry Hill, Voorhees, Haddonfield, Collingswood, Pennsauken, Gloucester Township, Winslow Township, Marlton, and all 16 towns. For pest emergencies, we offer priority emergency response including evenings and weekends.',
    },
    {
      question: 'Do you offer free estimates in Camden County, NJ?',
      answer:
        'Yes. Every residential and commercial pest inspection in Camden County is free and comes with no obligation. Our NJDEP-licensed technician visits your property, identifies the pest, and provides a written estimate before any work begins.',
    },
    {
      question: 'Are your pest control treatments family-friendly?',
      answer:
        'Absolutely. We use EPA-registered products applied according to label directions by licensed technicians. Our Integrated Pest Management approach minimizes chemical use, and we always provide specific safety instructions for your household before and after treatment. Our methods are family-friendly and effective.',
    },
    {
      question: 'What areas of Camden County do you serve?',
      answer:
        'We serve all of Camden County, including Cherry Hill, Voorhees, Haddonfield, Collingswood, Marlton, Mount Laurel, Pennsauken, Gloucester Township, Winslow Township, Lindenwold, Bellmawr, Audubon, Barrington, Somerdale, Runnemede, and Clementon.',
    },
    {
      question: 'Do you offer ongoing pest control plans in NJ?',
      answer:
        'Yes. We offer monthly, bi-monthly, and quarterly pest management plans that provide ongoing protection against ants, cockroaches, spiders, rodents, and other common Camden County pests. Ongoing plans include regular inspections, preventive treatments, and priority scheduling for any issues between visits.',
    },
    {
      question: 'Are your technicians licensed by the NJDEP?',
      answer:
        'Every technician on our team holds a valid New Jersey Department of Environmental Protection (NJDEP) pesticide applicator license. We also carry full general liability and workers\u2019 compensation insurance. We are a fully compliant, professional operation serving all of Camden County.',
    },
    {
      question: 'What are the most common pests in Camden County, NJ?',
      answer:
        'The most common pest problems in Camden County include subterranean termites (especially in older homes in Haddonfield, Collingswood, and Audubon), house mice and Norway rats, carpenter ants, German cockroaches, bed bugs, wasps and yellow jackets, mosquitoes, and wildlife such as raccoons and squirrels. Our team handles all of these throughout the county.',
    },
  ];

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
        <span className="text-gray-900">Pest Control Near Me</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pest Control Near Me — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Local, licensed pest control professionals serving all 16 towns in Camden County.
            Fast response, free estimates, and proven results.
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
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Intro Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Your Search for &quot;Pest Control Near Me&quot; Ends Here
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            When you search for &quot;pest control near me&quot; in Camden County, New Jersey, you are looking for a company that
            understands the unique pest pressures of South Jersey — the humid summers that fuel ant and cockroach
            explosions, the aging housing stock in towns like <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link> and{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link> that
            invites termites and rodents, and the suburban woodlands from <Link href="/camden-county/winslow-township" className="text-[#2B6CB0] hover:underline">Winslow Township</Link> to{' '}
            <Link href="/camden-county/clementon" className="text-[#2B6CB0] hover:underline">Clementon</Link> where wildlife
            conflicts are a daily reality. Camden County Pest Control is headquartered right here in Camden County and has
            been protecting homes and businesses across all 16 communities for years.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We are not a national franchise dispatching a technician from out of state. Our team lives and works in
            Camden County. We know that the neighborhoods surrounding Cooper River Park see heavy raccoon and squirrel
            activity every spring, that the older Victorian homes along Kings Highway in Haddonfield require specialized
            termite treatment approaches, and that the commercial corridors along Route 130 in{' '}
            <Link href="/camden-county/pennsauken" className="text-[#2B6CB0] hover:underline">Pennsauken</Link> and{' '}
            <Link href="/camden-county/bellmawr" className="text-[#2B6CB0] hover:underline">Bellmawr</Link> demand
            ongoing commercial pest management programs. That local expertise translates directly into faster, more
            effective pest control for your property.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Across the county, different communities face different challenges. In <Link href="/camden-county/marlton" className="text-[#2B6CB0] hover:underline">Marlton</Link> and{' '}
            <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>, newer
            suburban developments back up against wooded buffers where deer ticks, mosquitoes, and wildlife are a
            constant concern. In <Link href="/camden-county/gloucester-township" className="text-[#2B6CB0] hover:underline">Gloucester Township</Link>{' '}
            and <Link href="/camden-county/winslow-township" className="text-[#2B6CB0] hover:underline">Winslow Township</Link>,
            the large lot sizes and proximity to South Jersey wetlands and forests create pressure from rodents,
            stinging insects, and wildlife year-round. Our technicians respond to all of these communities with the
            same speed and professionalism, because we know the territory.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every technician on our team is licensed by the New Jersey Department of Environmental Protection (NJDEP) and
            trained in Integrated Pest Management (IPM) — the gold standard approach that targets the root cause of
            infestations rather than simply spraying chemicals. Whether you are dealing with ants marching across your
            kitchen counter, a rat scratching in the wall at 2 a.m., or a wasp nest over your front door, we have the
            training, equipment, and local knowledge to solve the problem quickly and effectively.
          </p>
        </section>

        {/* How to Find a Licensed NJ Exterminator */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            How to Find a Licensed Exterminator in Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Not all pest control companies operating in South Jersey are created equal. New Jersey requires all commercial
            pesticide applicators to hold a valid license issued by the NJDEP under the New Jersey Pesticide Control Act
            (N.J.S.A. 13:1F-1 et seq.). A licensed exterminator has passed rigorous examinations covering pesticide
            chemistry, responsible application, Integrated Pest Management, and environmental regulations. When you hire an
            unlicensed operator, you are risking your family&apos;s health, your property, and potentially your homeowners
            insurance coverage.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Here is what to look for when searching for pest control near you in Camden County:
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-xl">→</span>
              <div>
                <strong className="text-[#1A365D]">Valid NJDEP License:</strong>{' '}
                <span className="text-gray-700">Ask to see the technician&apos;s individual applicator license and the company&apos;s business permit. You can verify NJ pest control licenses through the NJDEP online portal.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-xl">→</span>
              <div>
                <strong className="text-[#1A365D]">Proof of Insurance:</strong>{' '}
                <span className="text-gray-700">Any legitimate pest control company carries general liability and workers&apos; compensation insurance. This protects you from liability if something goes wrong during treatment.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-xl">→</span>
              <div>
                <strong className="text-[#1A365D]">Local Presence:</strong>{' '}
                <span className="text-gray-700">A company based in Camden County understands local pest pressures, seasonal patterns, and the specific housing types and construction methods common to South Jersey. Generic national chains lack this regional insight.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-xl">→</span>
              <div>
                <strong className="text-[#1A365D]">IPM-Trained Technicians:</strong>{' '}
                <span className="text-gray-700">Integrated Pest Management uses inspection, identification, and targeted treatment instead of blanket chemical applications. Ask if the company practices IPM — it results in more effective, longer-lasting pest control with less chemical exposure.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-xl">→</span>
              <div>
                <strong className="text-[#1A365D]">Written Estimates and Guarantee:</strong>{' '}
                <span className="text-gray-700">Never agree to pest control service without a written estimate. A professional company provides a clear price, explains the treatment plan, and stands behind the work with a warranty.</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Camden County Pest Control meets every one of these standards. Our NJDEP licensing, insurance coverage, local
            expertise, and satisfaction guarantee are not marketing claims — they are the foundation of how we operate
            every single day across Cherry Hill, <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>,{' '}
            <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>,{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>, and
            every other town in the county.
          </p>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Every Pest Problem, One Local Team
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            One of the biggest advantages of calling a full-service local pest control company is that we handle
            everything under one roof. You do not need to call one company for ants, another for termites, and a third
            for wildlife. Our Camden County team is equipped and licensed to treat every common pest in the region:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#1A365D] mb-2">🐜 Insect Control</h3>
              <ul className="text-gray-700 space-y-1">
                <li>→ <Link href="/services/ant-control" className="text-[#2B6CB0] hover:underline">Ant Control</Link> — carpenter ants, pavement ants, odorous house ants</li>
                <li>→ <Link href="/services/termite-treatment" className="text-[#2B6CB0] hover:underline">Termite Treatment</Link> — liquid barriers, bait systems, inspections</li>
                <li>→ <Link href="/services/bed-bug-removal" className="text-[#2B6CB0] hover:underline">Bed Bug Removal</Link> — heat treatment and chemical solutions</li>
                <li>→ <Link href="/services/cockroach-control" className="text-[#2B6CB0] hover:underline">Cockroach Control</Link> — German, American, and Oriental species</li>
                <li>→ <Link href="/services/mosquito-control" className="text-[#2B6CB0] hover:underline">Mosquito Control</Link> — barrier treatments and larvicide programs</li>
                <li>→ <Link href="/services/flea-tick-treatment" className="text-[#2B6CB0] hover:underline">Flea &amp; Tick Treatment</Link> — indoor and outdoor programs</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#1A365D] mb-2">🦝 Wildlife &amp; More</h3>
              <ul className="text-gray-700 space-y-1">
                <li>→ <Link href="/services/rodent-control" className="text-[#2B6CB0] hover:underline">Rodent Control</Link> — mice, rats, trapping, and exclusion</li>
                <li>→ <Link href="/services/spider-control" className="text-[#2B6CB0] hover:underline">Spider Control</Link> — house spiders, wolf spiders, brown recluse</li>
                <li>→ <Link href="/services/wasp-hornet-removal" className="text-[#2B6CB0] hover:underline">Wasp &amp; Hornet Removal</Link> — yellow jackets, paper wasps</li>
                <li>→ <Link href="/services/wildlife-removal" className="text-[#2B6CB0] hover:underline">Wildlife Removal</Link> — raccoons, squirrels, bats, opossums</li>
                <li>→ <Link href="/services/raccoon-removal" className="text-[#2B6CB0] hover:underline">Raccoon Removal</Link> — humane trapping and exclusion</li>
                <li>→ <Link href="/services/commercial-pest-control" className="text-[#2B6CB0] hover:underline">Commercial Pest Control</Link> — restaurants, offices, warehouses</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            No matter what pest is invading your Camden County property, our team has treated it hundreds of times before.
            We carry the specific products, equipment, and training required for each species — from termite bait
            stations to bat exclusion valves to commercial bird netting — so you get targeted, effective treatment instead
            of a generic spray-and-pray approach.
          </p>
        </section>

        {/* Towns Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Serving All 16 Towns in Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            When you search for pest control near me, proximity matters. Our technicians are based right here in
            Camden County, which means shorter response times and technicians who are genuinely familiar with your
            neighborhood. We provide residential and commercial pest control throughout:
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
            Each community in Camden County has its own pest control challenges. <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link> — the county&apos;s largest
            township — features a mix of mid-century homes and newer construction, both of which attract different pest
            species. The newer developments in <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link> and{' '}
            <Link href="/camden-county/marlton" className="text-[#2B6CB0] hover:underline">Marlton</Link> may
            seem less vulnerable, but construction disturbance often drives rodents and wildlife into brand-new homes.
            Meanwhile, the older downtown areas of <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,{' '}
            <Link href="/camden-county/audubon" className="text-[#2B6CB0] hover:underline">Audubon</Link>, and{' '}
            <Link href="/camden-county/barrington" className="text-[#2B6CB0] hover:underline">Barrington</Link> have
            the kind of established infrastructure — stone foundations, mature trees, dense landscaping — that termites
            and carpenter ants love. The spacious wooded lots of{' '}
            <Link href="/camden-county/gloucester-township" className="text-[#2B6CB0] hover:underline">Gloucester Township</Link>{' '}
            and <Link href="/camden-county/winslow-township" className="text-[#2B6CB0] hover:underline">Winslow Township</Link>{' '}
            border South Jersey&apos;s forests and see high wildlife, tick, and mosquito pressure year-round.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why Camden County Homeowners Choose Us
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-3xl">🏠</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">Locally Owned &amp; Operated</h3>
                <p className="text-gray-700">
                  We are not a faceless national chain. Our owners, managers, and technicians all live in South Jersey.
                  When you call us, you speak to someone who knows Camden County — not a call center in another state.
                  That local commitment means we stand behind our work with a satisfaction guarantee because our
                  reputation in this community is everything.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">📋</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">NJDEP Licensed &amp; Fully Insured</h3>
                <p className="text-gray-700">
                  Every technician holds a valid New Jersey Department of Environmental Protection pesticide applicator
                  license. We carry full general liability and workers&apos; compensation insurance. When you hire us, you
                  are hiring a fully compliant, professional operation — not someone working out of the back of a pickup
                  truck with off-the-shelf products from a hardware store.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">⚡</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">Same-Day &amp; Emergency Service</h3>
                <p className="text-gray-700">
                  Many pest emergencies cannot wait. A wasp nest over your front door, a rat inside your kitchen, or
                  a bat flying through your bedroom requires immediate attention. We offer{' '}
                  <Link href="/same-day-pest-control" className="text-[#2B6CB0] hover:underline">same-day pest control</Link>{' '}
                  appointments for most situations and{' '}
                  <Link href="/emergency-pest-control" className="text-[#2B6CB0] hover:underline">emergency pest control</Link>{' '}
                  response for urgent problems — including evenings and weekends when other companies are closed.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💰</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">Free Inspections &amp; Honest Pricing</h3>
                <p className="text-gray-700">
                  We offer <Link href="/free-pest-inspection" className="text-[#2B6CB0] hover:underline">free pest inspections</Link>{' '}
                  for all residential and commercial properties in Camden County. Our technician will identify the pest,
                  assess the severity of the infestation, and provide a written estimate before any work begins. No
                  hidden fees, no surprise charges, no pressure tactics. Just honest, transparent pricing from a local
                  company that wants to earn your trust and your long-term business.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🌿</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">Integrated Pest Management (IPM)</h3>
                <p className="text-gray-700">
                  We use an IPM approach that prioritizes inspection, identification, and targeted treatment over
                  blanket chemical applications. This means we use the least amount of product necessary to solve the
                  problem, reducing exposure risks for your family, pets, and the environment. When chemical treatment
                  is required, we use EPA-registered products applied precisely where they will be most effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Camden County Pest Challenges */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Common Pest Challenges in Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Camden County&apos;s geography and climate create a perfect storm for pest activity. Situated in the
            Delaware Valley with hot, humid summers and mild winters, the region supports year-round pest populations
            that are more diverse and aggressive than many other parts of the country. Here are the most common pest
            challenges we address for Camden County residents:
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Termites</strong> are the single most destructive pest in New Jersey. The state falls within a
            &quot;moderate to heavy&quot; termite pressure zone according to the USDA, and eastern subterranean termites thrive in
            Camden County&apos;s moist clay soils. Homes built before 1990 — common in{' '}
            <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>,{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,
            and <Link href="/camden-county/audubon" className="text-[#2B6CB0] hover:underline">Audubon</Link> — are
            at highest risk. Our <Link href="/services/termite-treatment" className="text-[#2B6CB0] hover:underline">termite treatment</Link> and{' '}
            <Link href="/termite-inspection" className="text-[#2B6CB0] hover:underline">termite inspection</Link>{' '}
            services protect your home from this silent destroyer.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Rodents</strong> — particularly house mice and Norway rats — are a year-round problem throughout
            Camden County. They invade through gaps as small as a dime, contaminate food supplies, damage wiring, and
            spread disease. Infestations spike every fall as temperatures drop and rodents seek indoor warmth. Our{' '}
            <Link href="/services/rodent-control" className="text-[#2B6CB0] hover:underline">rodent control</Link>{' '}
            program combines trapping, exclusion, and sanitation for lasting results.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Ants and cockroaches</strong> dominate the summer months. Camden County&apos;s humid climate
            accelerates reproduction cycles, and both pests exploit the tiniest cracks to access food and water inside
            your home. We offer targeted <Link href="/services/ant-control" className="text-[#2B6CB0] hover:underline">ant control</Link>{' '}
            and <Link href="/services/cockroach-control" className="text-[#2B6CB0] hover:underline">cockroach control</Link>{' '}
            treatments that eliminate active infestations and prevent re-infestation.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Wildlife</strong> conflicts are increasingly common, especially in the southern and eastern parts of
            Camden County where suburban development meets wooded areas. Raccoons, squirrels, bats, and birds cause
            property damage and pose health risks. Our <Link href="/services/wildlife-removal" className="text-[#2B6CB0] hover:underline">wildlife removal</Link>{' '}
            team is licensed by the NJDEP and uses humane methods to resolve conflicts safely. We also offer specialized{' '}
            <Link href="/services/raccoon-removal" className="text-[#2B6CB0] hover:underline">raccoon removal</Link>,{' '}
            <Link href="/services/squirrel-removal" className="text-[#2B6CB0] hover:underline">squirrel removal</Link>,{' '}
            <Link href="/services/bat-removal" className="text-[#2B6CB0] hover:underline">bat removal</Link>, and{' '}
            <Link href="/services/bird-control" className="text-[#2B6CB0] hover:underline">bird control</Link> services.
          </p>
        </section>

        {/* What to Expect */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            What to Expect When You Call
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We have streamlined our process to make hiring pest control as simple and stress-free as possible. Here is
            exactly what happens when you contact Camden County Pest Control:
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">1</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Call or Request a Quote Online</h3>
                <p className="text-gray-700">
                  Call us at <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a> or
                  fill out our <Link href="/contact" className="text-[#2B6CB0] hover:underline">online contact form</Link>.
                  Describe the pest, the location, and the urgency. Our team will schedule an inspection — often the
                  same day you call.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Free On-Site Inspection</h3>
                <p className="text-gray-700">
                  A licensed technician visits your property, inspects the interior and exterior, identifies the pest
                  species and entry points, and determines the severity of the infestation. This inspection is
                  completely free with no obligation.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Custom Treatment Plan &amp; Quote</h3>
                <p className="text-gray-700">
                  Based on the inspection findings, we develop a treatment plan tailored to your specific pest,
                  property type, and budget. You receive a clear, written estimate covering all costs before we
                  begin any work.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">4</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Professional Treatment</h3>
                <p className="text-gray-700">
                  Our technician carries out the agreed-upon treatment using professional-grade products and equipment.
                  We explain every step, provide safety instructions for household members and pets, and answer all of
                  your questions.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">5</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Follow-Up &amp; Prevention</h3>
                <p className="text-gray-700">
                  We schedule follow-up visits as needed to ensure the infestation is fully resolved. We also provide
                  detailed prevention recommendations and offer ongoing maintenance plans to keep pests from returning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Lead Capture Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            More Ways We Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/exterminator-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Exterminator Near Me →</h3>
              <p className="text-gray-600 text-sm">Licensed, NJDEP-certified exterminators in Camden County</p>
            </Link>
            <Link href="/emergency-pest-control" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Emergency Pest Control →</h3>
              <p className="text-gray-600 text-sm">Urgent pest emergencies that cannot wait until tomorrow</p>
            </Link>
            <Link href="/same-day-pest-control" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Same-Day Service →</h3>
              <p className="text-gray-600 text-sm">Book a same-day exterminator visit in Camden County</p>
            </Link>
            <Link href="/free-pest-inspection" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Free Pest Inspection →</h3>
              <p className="text-gray-600 text-sm">Schedule a no-cost, no-obligation inspection today</p>
            </Link>
            <Link href="/termite-inspection" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Termite Inspection →</h3>
              <p className="text-gray-600 text-sm">Free termite assessment for Camden County homes</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Frequently Asked Questions — Pest Control Near Me in Camden County
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-[#1A365D] mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            Stop Searching — Start Solving Your Pest Problem Today
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            You found us by searching for pest control near you in Camden County, and we are ready to help. Call now
            for a free inspection and same-day service availability.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 text-lg mb-6">
            Camden County&apos;s trusted pest control team is just a phone call away.
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
                name: 'Camden County Pest Control',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/pest-control-near-me',
                description:
                  'Local pest control services near you in Camden County, NJ. Licensed exterminators serving all 16 towns with same-day service and free estimates.',
                areaServed: {
                  '@type': 'County',
                  name: 'Camden County',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'New Jersey',
                  },
                },
                serviceType: 'Pest Control',
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Pest Control Services',
                  itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ant Control' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Termite Treatment' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rodent Control' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bed Bug Removal' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wildlife Removal' } },
                  ],
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'How quickly can you get to my home in Camden County?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Because we are based in Camden County, we can typically schedule a same-day appointment for calls received before noon. We serve Cherry Hill, Voorhees, Haddonfield, Collingswood, Pennsauken, Gloucester Township, Winslow Township, Marlton, and all 16 towns. For pest emergencies, we offer priority emergency response including evenings and weekends.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you offer free estimates in Camden County, NJ?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Every residential and commercial pest inspection in Camden County is free and comes with no obligation. Our NJDEP-licensed technician visits your property, identifies the pest, and provides a written estimate before any work begins.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are your pest control treatments family-friendly?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Absolutely. We use EPA-registered products applied according to label directions by licensed technicians. Our Integrated Pest Management approach minimizes chemical use, and we always provide specific safety instructions for your household before and after treatment. Our methods are family-friendly and effective.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What areas of Camden County do you serve?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We serve all of Camden County, including Cherry Hill, Voorhees, Haddonfield, Collingswood, Marlton, Mount Laurel, Pennsauken, Gloucester Township, Winslow Township, Lindenwold, Bellmawr, Audubon, Barrington, Somerdale, Runnemede, and Clementon.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are your technicians licensed by the NJDEP?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Every technician on our team holds a valid New Jersey Department of Environmental Protection (NJDEP) pesticide applicator license. We also carry full general liability and workers compensation insurance.',
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
