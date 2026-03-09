import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Property Management Pest Control — Camden County, NJ | Multi-Unit Programs',
  description:
    'Pest control programs for property managers in Camden County NJ. Bed bug protocols, tenant notification compliance, recurring contracts for rental housing. Call (856) 600-0812.',
  keywords:
    'property management pest control Camden County NJ, multi-unit pest control NJ, landlord pest control, bed bug apartment NJ, tenant notification pest control NJ, rental housing pest control',
};

const faqItems = [
  {
    question: 'Who is responsible for pest control in a rental property in New Jersey?',
    answer: 'Under New Jersey law, landlords are generally responsible for maintaining rental units free from pests as part of the implied warranty of habitability. For multi-unit buildings, landlords are typically responsible for pest infestations that are structural in origin or that affect common areas. In some cases, when a tenant\'s conduct (food storage, sanitation practices) contributes to an infestation, the allocation of responsibility can shift — but the safest approach for property managers is to maintain proactive pest control programs that prevent infestations rather than waiting to assign blame.',
  },
  {
    question: 'What are the notification requirements for pest control in NJ rental properties?',
    answer: 'New Jersey requires landlords to provide tenants with advance notice before a pesticide application in a rental unit or common area. The specific notice requirement depends on the lease terms and the type of treatment. We provide model tenant notification language for all treatments and can assist with your notification compliance documentation. For properties subject to public housing regulations, additional federal notification requirements may apply.',
  },
  {
    question: 'How do you handle bed bug treatment coordination in an occupied multi-unit building?',
    answer: 'Bed bug programs in multi-unit buildings require coordination across multiple fronts: tenant notification and preparation instructions, inspection of adjacent units to assess spread, treatment scheduling that complies with notification requirements, documentation of findings and treatments, and follow-up inspections to verify effectiveness. We have extensive experience managing these programs in Cherry Hill, Collingswood, and Camden City apartment complexes. We work with your property management team to minimize tenant disruption and maximize program effectiveness.',
  },
  {
    question: 'How do pests spread between units in apartment buildings?',
    answer: 'Pests travel between units via wall voids shared by adjacent units, plumbing chases and pipe penetrations, electrical conduit systems, under apartment entry doors, and through gaps in floor/ceiling assemblies. German cockroaches, bed bugs, and mice all exploit these pathways. Effective multi-unit pest control addresses the entire building ecosystem — treating one unit in isolation while leaving adjacent units uninspected is one of the most common reasons why apartment pest problems persist despite repeated treatments.',
  },
  {
    question: 'Do you offer contracts for property management companies managing multiple properties?',
    answer: 'Yes. We offer portfolio contracts for property management companies managing multiple residential or mixed-use properties in Camden County. Portfolio contracts provide consistent service, simplified billing, and the kind of program continuity that benefits multi-property portfolios. Contact us to discuss program structure and pricing for your portfolio.',
  },
];

export default function PropertyManagementPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <Link href="/commercial" className="hover:text-[#2B6CB0]">Commercial</Link>
        {' → '}
        <span className="text-gray-900">Property Management</span>
      </nav>

      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Property Management Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Multi-unit bed bug protocols, tenant notification compliance, and recurring contracts for Camden County's rental housing stock. Protecting your properties and your tenants.
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
            Pest Control for Camden County's Rental Housing Market
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Camden County has a substantial and diverse rental housing market. Cherry Hill, the county's largest and most populous municipality, includes thousands of rental units across apartment complexes, garden apartments, and single-family rentals spanning every price point. Collingswood, Haddonfield, and Audubon have significant stocks of older single-family and multi-family rental properties in their established residential neighborhoods. Camden City and Pennsauken include substantial multi-unit rental housing. And suburban communities throughout the county have seen steady apartment development as the region's population has grown.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            For property managers overseeing this rental housing stock — whether a single duplex or a portfolio of hundreds of units — pest control presents challenges that are fundamentally different from owner-occupied residential service. The multi-unit nature of most rental properties means that pest activity in one unit can and does spread to adjacent units through shared walls, plumbing chases, and electrical systems. Tenant behavior — food storage practices, sanitation habits, the introduction of used furniture — directly affects pest pressure in ways that property managers cannot fully control. And New Jersey's tenant protection laws create legal and documentation requirements that must be navigated carefully.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our property management pest control programs are designed for the realities of rental property management. We work with your property management team, not just with individual tenants, to develop programs that address the full building ecosystem rather than treating units in isolation. We provide documentation that satisfies NJ legal notification requirements. And we build service contracts that provide the consistency and cost predictability that property portfolios require.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The most important principle in multi-unit pest control is whole-building thinking. Treating a single cockroach-infested unit while leaving the adjacent units uninspected and untreated virtually guarantees re-infestation within weeks. Our programs inspect affected units and all immediately adjacent units, treat based on actual findings, and monitor the entire treated zone for re-infestation. This approach costs more upfront than treating a single unit — but it actually solves the problem.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Bed Bug Programs for Multi-Unit Properties</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Bed bugs are the most challenging pest problem property managers face in multi-unit residential buildings. They travel between units through wall voids, electrical outlets, and under apartment doors. A single introduced infestation, if not identified and treated quickly across all affected units, can spread throughout an entire floor or building within a matter of months.
          </p>
          <div className="space-y-4 mb-4">
            {[
              { step: 'Tenant Report Response', desc: 'We provide same-day or next-day inspection response to all bed bug reports. Early identification is critical to limiting spread.' },
              { step: 'Multi-Unit Inspection', desc: 'Infested unit plus all units sharing walls, floors, or ceilings (up to 5 adjacent units minimum) are inspected as part of every bed bug response.' },
              { step: 'Treatment Planning', desc: 'Written treatment plan specifying affected units, treatment method (heat, chemical, or combination), preparation requirements for tenants, and scheduling.' },
              { step: 'Tenant Notification Compliance', desc: 'Model notification language, advance notice periods, and documentation maintained for all NJ-required notices.' },
              { step: 'Follow-Up Verification', desc: '14-day and 30-day follow-up inspections to verify treatment effectiveness and confirm no re-introduction.' },
              { step: 'Documentation Package', desc: 'Complete service documentation for each incident including inspection findings, treatment records, and follow-up results — valuable for any legal questions about the property\'s pest management history.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#DD6B20] font-bold text-xl">→</span>
                <div>
                  <strong className="text-[#1A365D]">{item.step}:</strong>{' '}
                  <span className="text-gray-700">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Common Pests in Multi-Unit Rental Properties</h2>
          <div className="space-y-4">
            {[
              { pest: 'Bed Bugs', detail: 'The top multi-unit pest challenge. Spread through shared wall infrastructure and introduced via new residents, used furniture, and luggage. Require coordinated whole-building response.' },
              { pest: 'German Cockroaches', detail: 'Thrive in kitchen and bathroom environments, spreading between units through plumbing penetrations and wall voids. A single heavily infested unit can seed an entire building floor within months.' },
              { pest: 'House Mice', detail: 'Enter through building perimeter gaps and travel freely through wall voids between units. Common in older Cherry Hill, Collingswood, and Audubon multi-family properties with aging infrastructure.' },
              { pest: 'Ants', detail: 'Odorous house ants and pavement ants enter through perimeter gaps and forage throughout common areas and individual units. Exterior perimeter treatment is the most effective control.' },
              { pest: 'Stored Product Pests', detail: 'Grain moths and pantry beetles occasionally spread from infested units to neighboring apartments via shared wall voids and common area ventilation.' },
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
            <Link href="/commercial/apartment-complexes" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Apartment Complex Programs →</strong>
              <p className="text-gray-600 text-sm">Large multi-family building programs</p>
            </Link>
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Pest Control Near Me →</strong>
              <p className="text-gray-600 text-sm">Camden County coverage</p>
            </Link>
            <Link href="/camden-county/cherry-hill" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Cherry Hill Pest Control →</strong>
              <p className="text-gray-600 text-sm">Cherry Hill rental property service</p>
            </Link>
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">Property Management Pest Control — Camden County</h2>
          <p className="text-gray-700 text-lg mb-6">Free assessment for property managers and landlords across Camden County. We protect your properties and your tenants.</p>
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
                name: 'Camden County Pest Control — Property Management',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/commercial/property-management',
                description: 'Multi-unit pest control and bed bug programs for property managers across Camden County NJ.',
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
