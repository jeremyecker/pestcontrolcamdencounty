import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Office Building Pest Control — Camden County, NJ | Discreet & Scheduled',
  description:
    'Professional pest control for office buildings, business parks & corporate campuses across Cherry Hill, Pennsauken & Camden County NJ. Quarterly contracts. Call (856) 600-0812.',
  keywords:
    'office pest control Camden County NJ, pest control Cherry Hill office park, commercial pest control Pennsauken, break room cockroach control NJ, office building exterminator',
};

const faqItems = [
  {
    question: 'How do you handle pest control in an occupied office building without disrupting employees?',
    answer: 'We schedule most treatments during off-hours — early morning before staff arrive or after close of business. For ongoing monitoring (bait stations, glue traps, tamper-resistant devices), we service these during business hours with minimal disruption. Our technicians wear professional uniforms and carry discreet service equipment — no spray rigs, no strong odors, no disruption to your workplace environment.',
  },
  {
    question: 'What pests are most common in Cherry Hill and Pennsauken office buildings?',
    answer: 'German cockroaches in break rooms and kitchenettes are the most common office pest complaint we receive. House mice and Norway rats are a close second, particularly in office parks adjacent to wooded buffers or near loading areas. Ants — odorous house ants and pavement ants — are extremely common in summer, entering through perimeter gaps and foraging to food sources in common areas. Occasional invaders like stink bugs, centipedes, and earwigs are also frequently reported.',
  },
  {
    question: 'Can you service a multi-tenant office building with different tenants on different floors?',
    answer: 'Yes. We work with property managers and building engineers to develop programs covering common areas (lobbies, hallways, server rooms, mechanical spaces, loading docks) and coordinate with individual tenants for suite-level service as needed. All service is documented and reported to building management.',
  },
  {
    question: 'What does a quarterly office pest control contract include?',
    answer: 'Our standard quarterly contract includes four scheduled visits per year, interior and exterior inspection, monitoring device placement and servicing, treatment of any active pest activity, written service reports after each visit, and priority response for any pest issues between scheduled visits. We tailor frequency based on your building\'s pest history and risk profile.',
  },
  {
    question: 'Do you provide pest control for Camden waterfront office developments?',
    answer: 'Yes. The Camden waterfront development corridor — including the new office and mixed-use projects near the Benjamin Franklin Bridge — presents unique pest challenges due to proximity to the Delaware River, urban rodent populations, and the transition from industrial to commercial use. We have experience managing pest programs for these properties.',
  },
];

export default function OfficeBuildingsPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <Link href="/commercial" className="hover:text-[#2B6CB0]">Commercial</Link>
        {' → '}
        <span className="text-gray-900">Office Buildings</span>
      </nav>

      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Office Building Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Discreet, scheduled pest management for Cherry Hill office parks, Pennsauken business districts, and Camden waterfront developments. Quarterly contracts with detailed documentation.
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
            Pest Control for Camden County's Commercial Office Market
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Camden County hosts a substantial commercial office market centered on Cherry Hill's Route 70 and Route 38 corridors, the Pennsauken business district along Route 130, and the growing Camden waterfront development near the Benjamin Franklin Bridge. These office parks, corporate campuses, and multi-tenant buildings present pest control challenges that differ significantly from residential or retail settings — employees, tenants, and visitors expect a pest-free professional environment, and a visible pest problem in a common area or individual office can damage tenant relationships, affect lease renewals, and create liability concerns.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The most common source of pest complaints in Cherry Hill and Pennsauken office buildings is the break room and kitchenette. German cockroaches thrive in the warm, food-rich environment behind commercial refrigerators, inside cabinet voids near sinks, and under coffee makers. Once established in a break room, they spread rapidly through wall voids and plumbing chases to adjacent offices. Our experience treating hundreds of commercial kitchenettes throughout Camden County has given us a precise, effective protocol for eliminating cockroach infestations in office settings without disrupting the workday.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Rodents are the second most common office pest complaint across the county. House mice enter through gaps at the base of exterior walls, around utility penetrations, and beneath loading dock doors. Once inside, they establish nesting sites in drop ceiling voids, mechanical rooms, and storage areas. Norway rats are less common in upper-floor offices but regularly affect ground-floor suites and basement mechanical spaces in older buildings throughout Cherry Hill and Pennsauken. Our rodent programs combine exclusion — permanently sealing entry points — with interior trapping and monitoring.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            For property managers overseeing multi-tenant buildings, pest control documentation is increasingly important for tenant relations and lease agreements. We provide written service reports after every visit and maintain a service history that demonstrates the property's commitment to professional building management.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Common Office Building Pests</h2>
          <div className="space-y-4">
            {[
              { pest: 'German Cockroaches', area: 'Break rooms, kitchenettes, server rooms', detail: 'Breed explosively near warmth and food. A break room infestation can spread building-wide within months through wall void systems.' },
              { pest: 'House Mice', area: 'Ground floor perimeters, storage, drop ceilings', detail: 'Enter through gaps as small as a dime. Contaminate surfaces, damage wiring, and leave evidence that alarms tenants and employees.' },
              { pest: 'Odorous House Ants', area: 'Common areas, break rooms, window frames', detail: 'Follow moisture trails from the exterior perimeter to food sources inside. Peaks in summer months throughout Cherry Hill office parks.' },
              { pest: 'Stink Bugs & Occasional Invaders', area: 'Upper floors, window areas, exterior walls', detail: 'Aggregate on warm building exteriors in fall and enter through gaps around windows and utility penetrations to overwinter.' },
              { pest: 'Fruit Flies', area: 'Break rooms, recycling areas, floor drains', detail: 'Breed in organic matter in floor drains and around recycling bins. Fast population growth makes quick identification of the source critical.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#1A365D]">{item.pest}</h3>
                  <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">{item.area}</span>
                </div>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Our Office Building Service Program</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our commercial office program is built around scheduled quarterly service with optional monthly or bi-monthly upgrades for high-risk buildings. Every program includes:
          </p>
          <div className="space-y-3">
            {[
              'Initial comprehensive site assessment covering all interior and exterior areas',
              'Placement of monitoring devices (tamper-resistant stations, glue monitors) in break rooms, mechanical spaces, and perimeter areas',
              'Targeted treatment of any active pest activity using IPM-appropriate products',
              'Exterior perimeter treatment to reduce migration pressure from landscaped areas and parking lots',
              'Rodent exclusion recommendations and sealing of identified entry points',
              'Written service reports after each visit for property manager records',
              'Priority response for any pest complaints between scheduled visits',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#DD6B20] font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why Regular Service Contracts Matter for Office Buildings
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Office buildings are complex ecosystems with dozens of potential pest entry points, multiple occupant behaviors affecting pest attractants, and seasonal pressures that shift the dominant pest species throughout the year. A quarterly contract ensures that your building receives professional attention before seasonal pressures peak — rodent exclusion before the fall entry season, perimeter treatments before summer ant pressure, and ongoing monitoring that catches new pest activity before it becomes a tenant complaint.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Property managers who maintain documented pest control contracts also have a clear record to share with tenants, lenders, and potential buyers — demonstrating proactive facility management and protecting the property's value.
          </p>
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
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Pest Control Near Me →</strong>
              <p className="text-gray-600 text-sm">Camden County coverage map</p>
            </Link>
            <Link href="/camden-county/cherry-hill" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Cherry Hill Pest Control →</strong>
              <p className="text-gray-600 text-sm">Cherry Hill office park service</p>
            </Link>
            <Link href="/camden-county/pennsauken" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Pennsauken Pest Control →</strong>
              <p className="text-gray-600 text-sm">Business district coverage</p>
            </Link>
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">Schedule Your Office Building Assessment</h2>
          <p className="text-gray-700 text-lg mb-6">Free commercial site assessment for Camden County office buildings. Same-day response for urgent situations.</p>
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
                name: 'Camden County Pest Control — Office Buildings',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/commercial/office-buildings',
                description: 'Pest control for office buildings across Cherry Hill, Pennsauken, and Camden County NJ.',
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
