import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Apartment Complex Pest Control — Camden County, NJ | Bed Bug & Cockroach Programs',
  description:
    'Comprehensive pest control for apartment complexes in Cherry Hill, Collingswood, Camden & across Camden County NJ. Shared-wall programs, bed bug protocols. Call (856) 600-0812.',
  keywords:
    'apartment complex pest control Camden County NJ, bed bug apartment Cherry Hill NJ, cockroach control apartment building NJ, multi-family pest control South Jersey, apartment exterminator Camden County',
};

const faqItems = [
  {
    question: 'How do you prevent pests from spreading between apartments?',
    answer: 'Preventing inter-unit pest transfer requires whole-building thinking. We use a combination of physical exclusion (sealing pipe penetrations, electrical penetrations, and gaps at shared walls), whole-building monitoring to detect activity before it spreads, and coordinated treatment of infested and adjacent units simultaneously. Treating a single infested unit in isolation is almost always ineffective in multi-family buildings because the structural pathways that allowed the infestation to establish remain open for re-infestation.',
  },
  {
    question: 'What is the typical process for handling a cockroach infestation in a multi-unit building?',
    answer: 'Our multi-unit cockroach program begins with a building-wide assessment to understand where activity is concentrated and how severe the infestation is in each affected unit. We then treat all infested units simultaneously, plus adjacent units based on structural risk. Treatment uses gel bait, insect growth regulators, and targeted crack-and-crevice applications. Follow-up inspections at 2 weeks and 4 weeks confirm that activity is declining. For buildings with chronic cockroach problems, we develop a whole-building IPM program that addresses structural conducive conditions in addition to treatment.',
  },
  {
    question: 'How do you handle bed bug programs in an apartment building with resistant or uncooperative tenants?',
    answer: 'Tenant preparation and cooperation are important for bed bug treatment effectiveness. We provide clear preparation instructions to all affected tenants and work with your property management team on communication. In cases where tenants are uncooperative, we can advise on the legal mechanisms available under NJ law for landlords to gain access for necessary treatment. We document all preparation instructions provided and all access attempts made.',
  },
  {
    question: 'What exterior pest control do you provide for apartment complex common areas?',
    answer: 'Apartment complex common areas — parking lots, dumpster enclosures, landscaped buffers, laundry facilities, mailbox areas, and building entrances — require specific treatment approaches. Exterior rodent bait stations around dumpster areas and building perimeters, ant and perimeter insect treatments on exterior foundations, and wasp/hornet treatments on building facades and overhangs are standard components of our apartment complex exterior programs.',
  },
  {
    question: 'Do you offer building-wide quarterly contracts for apartment complexes?',
    answer: 'Yes. Our apartment complex contracts are typically structured as building-wide quarterly programs covering common areas, exterior perimeter, and any occupied units with active pest reports, plus on-call response for urgent tenant reports between scheduled visits. Building-wide contracts provide cost predictability for property managers and ensure that the entire building receives consistent attention rather than only reacting to individual tenant complaints.',
  },
];

export default function ApartmentComplexesPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <Link href="/commercial" className="hover:text-[#2B6CB0]">Commercial</Link>
        {' → '}
        <span className="text-gray-900">Apartment Complexes</span>
      </nav>

      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Apartment Complex Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Whole-building pest management for high-density housing in Cherry Hill, Collingswood, Camden, and across Camden County. Shared-wall pest transfer control, bed bug programs, and cockroach elimination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18566000812" className="bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
              📞 Call (856) 600-0812
            </a>
            <Link href="/contact" className="bg-white text-[#1A365D] font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Multi-Family Pest Control Built for Camden County Apartment Buildings
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Apartment complexes represent the most complex pest control environment in the residential market. High-density housing in Cherry Hill, Collingswood, and Camden City concentrates dozens or hundreds of households under shared roofs, with shared walls, shared plumbing systems, shared electrical conduits, and shared structural voids that create interconnected pathways for pest movement between units. A German cockroach infestation that begins in one kitchen can seed an entire floor within months via shared pipe chases. Bed bugs introduced by a single new resident can spread to multiple adjacent units before the first tenant complaint reaches the office.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Cherry Hill's apartment market includes a substantial number of mid-rise and garden apartment communities dating from the 1960s through the 1980s — a building vintage that brings its own pest infrastructure challenges. Older construction features more numerous and larger penetrations at shared walls, less complete perimeter sealing, and aging mechanical systems with gaps that modern construction's tighter building envelopes do not. These buildings require more intensive exclusion work and more frequent monitoring than newer construction.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Collingswood's apartment stock is even older — Victorian-era and early-twentieth-century multi-family buildings that have been divided and subdivided over decades, with the kind of structural complexity and accumulated penetrations that make pest management a ongoing commitment rather than a one-time fix. The Camden City rental market includes large multi-family buildings that face urban pest pressure — dense Norway rat populations, significant cockroach pressure, and bed bug rates that reflect the broader challenges of urban housing density.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Regardless of building age, our apartment complex programs share a fundamental principle: pests in multi-family buildings require a whole-building management approach. Individual unit treatments that ignore the structural pest pathways connecting all units in a building are temporary at best. Our programs address the full ecosystem of the apartment building — not just the units where tenants are complaining.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Shared-Wall Pest Transfer — The Core Challenge</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            In any multi-family building, pests do not respect unit boundaries. They move freely through the structural pathways that connect all units: plumbing chase penetrations where water supply and drain pipes pass through shared walls and floor/ceiling assemblies; electrical conduit systems that run throughout the building infrastructure; gaps in the fireblocking between units; and under apartment entrance doors (particularly for German cockroaches and bed bugs, which are small enough to transit a quarter-inch gap).
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our shared-wall pest transfer management approach includes physical exclusion of identified penetrations in affected areas, treatment of infested and adjacent units simultaneously, monitoring device placement in high-transfer-risk areas (near plumbing penetrations, utility closets), and structural assessment reports that document conducive conditions for your maintenance team to address.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Common Pests in Camden County Apartment Complexes</h2>
          <div className="space-y-4">
            {[
              { pest: 'German Cockroaches', detail: 'The dominant multi-family pest problem throughout Cherry Hill, Collingswood, and Camden City. A single heavily infested unit can introduce cockroaches to an entire floor via plumbing penetrations within weeks. Requires coordinated whole-floor treatment and follow-up monitoring.' },
              { pest: 'Bed Bugs', detail: 'Introduced via new residents, guests, or secondhand furniture. Spread to adjacent units through shared wall voids and under apartment doors. Require rapid response inspection of affected and adjacent units, coordinated treatment, and tenant notification compliance.' },
              { pest: 'House Mice', detail: 'Enter through building perimeter gaps and travel through wall voids throughout the building. Ground-floor and basement-level units are most affected, but rodents in wall voids can appear in upper-floor units near penetrations.' },
              { pest: 'Ants', detail: 'Odorous house ants and pavement ants enter through perimeter gaps and trail to food sources throughout the building. Exterior perimeter treatment and gap sealing at the foundation level provide the most effective long-term control.' },
              { pest: 'Stored Product Pests', detail: 'Pantry beetles and grain moths occasionally spread between units via shared wall voids. Rapid identification and treatment of the source unit limits spread.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-[#1A365D] text-lg mb-2">{item.pest}</h3>
                <p className="text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-[#1A365D] mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/commercial" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Commercial Pest Control →</strong>
              <p className="text-gray-600 text-sm">All commercial verticals</p>
            </Link>
            <Link href="/commercial/property-management" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Property Management Programs →</strong>
              <p className="text-gray-600 text-sm">Multi-unit portfolio management</p>
            </Link>
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Pest Control Near Me →</strong>
              <p className="text-gray-600 text-sm">Camden County service area</p>
            </Link>
            <Link href="/camden-county/cherry-hill" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Cherry Hill Pest Control →</strong>
              <p className="text-gray-600 text-sm">Cherry Hill apartment complex coverage</p>
            </Link>
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">Apartment Complex Pest Programs — Camden County</h2>
          <p className="text-gray-700 text-lg mb-6">Free building assessment for apartment complex managers and owners across Camden County NJ. Call today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18566000812" className="bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
              📞 Call (856) 600-0812
            </a>
            <Link href="/contact" className="bg-[#1A365D] hover:bg-[#2B6CB0] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'LocalBusiness',
                name: 'Camden County Pest Control — Apartment Complexes',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/commercial/apartment-complexes',
                description: 'Multi-family apartment complex pest control for Cherry Hill, Collingswood, Camden City, and all of Camden County NJ.',
                areaServed: { '@type': 'County', name: 'Camden County', containedInPlace: { '@type': 'State', name: 'New Jersey' } },
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqItems.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
              },
            ],
          }),
        }}
      />
    </div>
  );
}
