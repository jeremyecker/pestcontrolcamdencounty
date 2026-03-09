import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Food Processing Pest Control — Camden County, NJ | FDA/FSMA Compliant',
  description:
    'FDA/FSMA-compliant pest control for food processing facilities in Pennsauken & Camden County NJ. HACCP support, zero-tolerance programs & detailed audit documentation. Call (856) 600-0812.',
  keywords:
    'food processing pest control Camden County NJ, FDA FSMA pest control NJ, HACCP pest management, food plant pest control Pennsauken, food safety pest control South Jersey',
};

const faqItems = [
  {
    question: 'How does the FDA Food Safety Modernization Act (FSMA) affect pest control in food facilities?',
    answer: 'FSMA requires food facilities to implement a written Food Safety Plan that includes preventive controls for pest management. Your pest control program must be documented as a prerequisite program (PRP) or preventive control, with written procedures, monitoring records, corrective actions, and verification activities. FDA inspectors reviewing your facility will expect to see current pest control service records, any pest activity documentation, and corrective action reports for any pest findings. Our food facility programs are designed to meet FSMA documentation requirements.',
  },
  {
    question: 'What is HACCP and how does your pest control program support it?',
    answer: 'Hazard Analysis and Critical Control Points (HACCP) is a systematic approach to food safety that identifies biological, chemical, and physical hazards in food production. Pest management is a fundamental prerequisite program (PRP) that supports HACCP by preventing pest-related contamination before it can reach critical control points. Our HACCP support includes written pest management procedures, monitoring records formatted for HACCP documentation, and corrective action reports that demonstrate your team\'s response to any pest findings.',
  },
  {
    question: 'What documentation do you provide for third-party food safety audits?',
    answer: 'We provide service reports after every visit, pest activity trending reports, product use logs with EPA registration numbers, corrective action records, and a written IPM program document. For SQF, BRC, FSSC 22000, AIB, or customer-specific audits, we can format our documentation to match your audit standard\'s requirements and participate in pre-audit reviews with your food safety team.',
  },
  {
    question: 'How do you handle allergen concerns in food processing facilities?',
    answer: 'Rodent and insect contamination in a food processing facility can create allergen cross-contact risk if pest activity occurs in allergen-containing ingredients or finished product areas. Our programs designate allergen zones and ensure that any pest activity in these areas receives immediate response, thorough documentation, and notification to your food safety team. Product hold and recall decisions are yours to make — our role is to provide complete, accurate documentation of any pest findings.',
  },
  {
    question: 'Do you provide pest control for food processing facilities operating on a 24-hour schedule?',
    answer: 'Yes. Many food processing facilities in the Pennsauken and Camden industrial zones operate 24/7. We coordinate service windows with your production schedule and sanitation team. For facilities with continuous production, we schedule treatments during line changeovers, CIP (clean-in-place) cycles, and scheduled sanitation periods. Exterior and non-production area services can be conducted during any shift.',
  },
];

export default function FoodProcessingPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <Link href="/commercial" className="hover:text-[#2B6CB0]">Commercial</Link>
        {' → '}
        <span className="text-gray-900">Food Processing</span>
      </nav>

      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Food Processing Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            FDA/FSMA-compliant programs, HACCP prerequisite support, and zero-tolerance pest management for food processing facilities in Pennsauken, Camden, and across South Jersey.
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
            Food Safety Pest Management for Camden County's Food Processing Sector
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Camden County's industrial zones — primarily concentrated in Pennsauken Township along Route 130 and in Camden City's industrial corridor — include a significant number of food processing, packaging, co-packing, and distribution facilities. These operations range from large regional food manufacturers to specialty food processors, beverage operations, and food-grade contract packagers serving markets throughout the Northeast.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Pest management in a food processing environment is fundamentally different from commercial pest control in any other setting. The stakes are categorically higher: a pest contamination event in a food processing facility can result in FDA action, product recall, facility shutdown, customer contract loss, and permanent reputational damage. The documentation requirements are more demanding. The treatment restrictions — in terms of products that can be used in the presence of food, food contact surfaces, or food packaging materials — are more stringent. And the coordination required with your food safety, operations, and sanitation teams is more complex.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The FDA Food Safety Modernization Act (FSMA), fully implemented since 2016, requires food facilities to have written preventive controls for pest management as part of their Food Safety Plan. Your pest control program is no longer just an operational necessity — it is a regulatory requirement with specific documentation, monitoring, corrective action, and verification obligations. An FDA inspector who finds evidence of pest activity without adequate documentation of your pest management program's response can issue a Warning Letter that creates significant regulatory burden.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our food processing pest control programs are designed to meet FSMA requirements from day one. We provide the written IPM program document, service records formatted for food safety documentation systems, corrective action reports, and trend analysis reports that your food safety team needs to demonstrate compliance during FDA inspections and third-party audits.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Food Facility Pest Risks & Protocols</h2>
          <div className="space-y-5">
            {[
              { title: 'Rodents', risk: 'Critical', detail: 'Rodents in a food processing facility represent the most serious pest contamination risk. Norway rat and house mouse droppings, urine, and hair are direct food adulteration contaminants. Our rodent program for food facilities combines exterior perimeter exclusion, interior exclusion (sealing all entry points), interior monitoring with numbered and mapped bait stations, and an emergency response protocol for any interior sightings.' },
              { title: 'Stored Product Insects', risk: 'Critical', detail: 'Grain beetles, flour moths, and weevils can infest raw ingredient storage, contaminate finished products, and survive within packaging. Pheromone trap monitoring, receiving area inspection protocols, and rapid response to any interceptions protect your inventory and your customer relationships.' },
              { title: 'Flies', risk: 'High', detail: 'Filth flies in production environments represent a contamination vector for pathogenic bacteria. Fruit flies and phorid flies breed in organic waste and floor drains. Our fly management program targets breeding sources — drain biofilm, waste management practices, raw material spills — rather than adult fly populations.' },
              { title: 'Cockroaches', risk: 'High', detail: 'German cockroaches in break rooms and utility areas can migrate to production zones via shared infrastructure. Our food facility cockroach program uses gel bait in non-production harborage areas and regular monitoring at production zone perimeters to detect any migration before it becomes a production contamination event.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#1A365D]">{item.title}</h3>
                  <span className={`text-sm font-semibold px-2 py-1 rounded ${item.risk === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'}`}>{item.risk}</span>
                </div>
                <p className="text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">FSMA Documentation & Audit Readiness</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our food facility pest control programs provide the complete documentation package required for FSMA compliance and third-party audit readiness:
          </p>
          <div className="space-y-3">
            {[
              'Written IPM Program document covering scope, procedures, responsibilities, and verification activities',
              'Service reports after every visit with standardized activity ratings, treatments applied, and product use logs (EPA reg. numbers, application rates, target areas)',
              'Numbered station maps showing placement of all monitoring devices throughout the facility',
              'Pest activity trending reports showing population trends over time',
              'Corrective action reports for any pest findings, documenting immediate response, root cause investigation, and verification of effectiveness',
              'Annual program review documentation',
              'Pre-audit review meetings with your food safety team upon request',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#DD6B20] font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
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
            <Link href="/commercial/warehouses" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Warehouse Pest Control →</strong>
              <p className="text-gray-600 text-sm">Industrial pest management</p>
            </Link>
            <Link href="/camden-county/pennsauken" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Pennsauken Pest Control →</strong>
              <p className="text-gray-600 text-sm">Industrial zone coverage</p>
            </Link>
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Pest Control Near Me →</strong>
              <p className="text-gray-600 text-sm">Camden County coverage</p>
            </Link>
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">FSMA-Compliant Food Facility Pest Programs</h2>
          <p className="text-gray-700 text-lg mb-6">Free site assessment for Camden County food processing facilities. We work with your food safety team from day one.</p>
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
                name: 'Camden County Pest Control — Food Processing',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/commercial/food-processing',
                description: 'FDA/FSMA-compliant pest control for food processing facilities in Pennsauken and Camden County NJ.',
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
