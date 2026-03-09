import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Restaurant Pest Control — Camden County, NJ | Health Code Compliant',
  description:
    'NJ Health Code-compliant restaurant pest control for Cherry Hill, Voorhees & all of Camden County. IPM programs, cockroach & rodent control, health inspection prep. Call (856) 600-0812.',
  keywords:
    'restaurant pest control Camden County NJ, pest control Cherry Hill restaurants, cockroach control restaurant NJ, rodent control food service, health inspection pest control NJ',
};

const faqItems = [
  {
    question: 'Does my restaurant need a pest control service contract in New Jersey?',
    answer:
      'New Jersey Health Code Section 8-501 requires food establishments to be free from evidence of pests. While there is no specific mandate for a written contract, health inspectors routinely ask to see pest control service records. A documented IPM program with service reports is the best way to demonstrate compliance and avoid violations. Most Cherry Hill and Camden County restaurants on a scheduled contract report far fewer issues during surprise inspections.',
  },
  {
    question: 'How often should a restaurant receive pest control service?',
    answer:
      'Most full-service restaurants in Camden County benefit from monthly service at minimum. High-volume establishments — particularly those in the Route 38/70 corridor with adjacent dumpster areas — often require bi-weekly visits. Your service frequency is determined during a site assessment based on pest pressure, facility age, neighboring properties, and your operational hours.',
  },
  {
    question: 'Can you treat a restaurant while it is open?',
    answer:
      'Most of our restaurant treatments are scheduled during non-service hours — early morning before prep begins or late evening after close. Many IPM tools such as tamper-resistant bait stations, pheromone traps, and glue boards can be inspected and serviced without closing. Any chemical applications that require evacuation are scheduled at times agreed upon with your management.',
  },
  {
    question: 'What is your approach to German cockroaches in a restaurant kitchen?',
    answer:
      'German cockroaches are the dominant cockroach species in commercial kitchens throughout South Jersey. Our approach combines gel bait applications in harborage areas (under equipment, inside wall voids near heat sources, and behind dishwashers), insect growth regulators to break the breeding cycle, crack-and-crevice applications where warranted, and glue trap monitoring to track population trends. We never rely on broadcast sprays in food prep areas.',
  },
  {
    question: 'Will your technicians provide documentation I can show during a health inspection?',
    answer:
      'Yes. After every service visit, we provide a written service report documenting areas inspected, pest activity levels, treatments applied, products used (with EPA registration numbers), and recommendations for structural or sanitation corrections. We also maintain a pest control log binder that can be kept on-site for immediate presentation to health inspectors.',
  },
];

export default function RestaurantsPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <Link href="/commercial" className="hover:text-[#2B6CB0]">Commercial</Link>
        {' → '}
        <span className="text-gray-900">Restaurants</span>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Restaurant Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            NJ Health Code-compliant IPM programs for Cherry Hill's dense restaurant corridor and every South Jersey food establishment. German cockroaches, rodents, drain flies — eliminated before your next inspection.
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
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* Intro */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            The Cherry Hill Restaurant Corridor — South Jersey's Highest-Risk Pest Environment
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Cherry Hill has one of the densest restaurant corridors in South Jersey. The intersection of Routes 38, 70, and Haddonfield Road anchors a concentration of national chains, local independents, fast casual operators, and food courts that stretches across several miles and includes hundreds of food service establishments. This density creates a pest environment unlike anything found in less commercially developed parts of Camden County — pests transfer easily between neighboring businesses through shared infrastructure, shared dumpster enclosures, and the constant movement of delivery vehicles and food supply chains.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            For Camden County restaurant operators, pest control is not optional — it is a legal and operational requirement. New Jersey Health Code Section 8-501 mandates that food establishments be maintained free from evidence of insects, rodents, and other pests. A single German cockroach spotted by a health inspector during a routine inspection can result in a notice of violation, a reduced score, a required re-inspection, and in serious cases, a temporary closure. The reputational damage from a public health inspection violation is often more costly than the pest control contract that would have prevented it.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Beyond the regulatory risk, pest infestations in a restaurant represent a direct threat to food safety. German cockroaches carry Salmonella, E. coli, and other pathogens on their bodies and in their feces. Rodents contaminate food supplies, damage packaging, and gnaw through wiring. Drain flies — common in the wet, organic-rich floor drains found in commercial kitchens — indicate sanitation deficiencies that invite other, more serious pest species. Effective pest control in a restaurant setting requires understanding food service operations from the inside out.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our restaurant pest control programs for Camden County are built on Integrated Pest Management principles — inspection, monitoring, sanitation recommendations, exclusion, and targeted treatment. We do not use broadcast sprays in food prep areas. We do not apply products in ways that create food contamination risks. Every product we use is selected based on efficacy, food service compatibility, and NJ regulatory compliance.
          </p>
        </section>

        {/* Common Pests */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Common Pests in Camden County Restaurants
          </h2>
          <div className="space-y-6">
            {[
              { pest: 'German Cockroaches', detail: 'The most destructive pest in commercial kitchens. German cockroaches breed explosively in warm, humid environments near food and water — exactly the conditions found behind commercial dishwashers, under fryers, and inside electrical conduit voids. A single gravid female can produce over 30,000 offspring in a year. Early intervention is critical.' },
              { pest: 'House Mice & Norway Rats', detail: 'Rodents exploit every gap in a restaurant structure, drawn by food odors, warmth, and water. They contaminate food, damage packaging, gnaw through wiring (creating fire hazards), and leave droppings and urine throughout storage areas. Our rodent control program combines trapping, exclusion, and sanitation protocols.' },
              { pest: 'Drain Flies (Phorid & Fruit Flies)', detail: 'Fly infestations in restaurants originate from organic buildup in floor drains, mop sinks, and under equipment. Drain flies breed in the gelatinous biofilm that accumulates in drain lines. Our treatment targets the source — drain cleaning, bacterial digesters, and enzyme treatments — not just the adult flies.' },
              { pest: 'American Cockroaches', detail: 'Larger than German cockroaches, American cockroaches migrate in from outdoors through floor drains, utility penetrations, and loading dock doors. They are common in basement prep areas and utility corridors in older restaurant buildings throughout Cherry Hill and Collingswood.' },
              { pest: 'Stored Product Pests', detail: 'Weevils, grain moths, and beetle species infest dry goods when incoming deliveries are not inspected. We include inspection protocols for receiving areas and provide guidance on proper food storage to minimize stored product pest risk.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-[#1A365D] text-lg mb-2">{item.pest}</h3>
                <p className="text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Treatment Protocols */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Our Restaurant Pest Control Treatment Protocols
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Every restaurant pest control program begins with a comprehensive site assessment. Our technician maps your entire facility — kitchen, prep areas, storage, receiving dock, dining room, bar, and exterior perimeter — identifying active pest activity, conducive conditions, and structural vulnerabilities. This assessment becomes the basis of a written IPM plan customized for your operation.
          </p>
          <div className="space-y-4 mb-6">
            {[
              { step: 'Monitoring & Inspection', desc: 'Glue traps and pheromone monitors are placed in high-risk areas. Population trends are tracked and documented at every visit, giving you data to demonstrate compliance and identifying emerging problems before they become violations.' },
              { step: 'Cockroach Control', desc: 'Gel bait applications in harborage areas (behind equipment, inside wall voids, under sinks), insect growth regulators to interrupt the breeding cycle, and targeted crack-and-crevice treatments. No broadcast sprays in food prep areas.' },
              { step: 'Rodent Exclusion & Control', desc: 'Identification and sealing of entry points (gaps around pipes, floor drains, dock doors), interior tamper-resistant bait stations in non-food areas, and snap trap programs in kitchen and storage areas as appropriate.' },
              { step: 'Fly Management', desc: 'Drain treatments with bacterial digesters and enzyme cleaners to eliminate breeding sources, exterior fly bait in dumpster areas, and UV light trap placement recommendations for dining and prep areas.' },
              { step: 'Documentation', desc: 'Written service reports after every visit, a pest control log binder maintained on-site for health inspector review, and a corrective action report when structural or sanitation conditions require attention.' },
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

        {/* Service Contracts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why a Regular Service Contract Matters for Restaurants
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Reactive pest control — calling when you see a cockroach — is the most expensive and least effective approach for a restaurant. By the time you see a German cockroach in your dining room, there are hundreds more in your kitchen wall voids. By the time a customer spots a mouse, your storage area has already been contaminated. A scheduled service contract shifts your pest management from reactive to proactive.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Regular service visits maintain continuous monitoring that catches pest activity before populations establish. They provide the documented service history that health inspectors expect to see. They include priority response between scheduled visits for any urgent issues. And they provide the kind of ongoing technician familiarity with your facility that allows our team to spot structural changes — a new delivery dock door that does not seal properly, a broken floor drain cover, a refrigeration unit relocated near a wall void — before they create pest entry opportunities.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Most Camden County restaurants on our service contract program experience fewer health inspection issues, lower overall pest control costs, and better peace of mind. Contact us to discuss a contract frequency that fits your operation and budget.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Frequently Asked Questions — Restaurant Pest Control in Camden County
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

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/commercial" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Commercial Pest Control →</strong>
              <p className="text-gray-600 text-sm">All commercial verticals for Camden County</p>
            </Link>
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Pest Control Near Me →</strong>
              <p className="text-gray-600 text-sm">Local service coverage across Camden County</p>
            </Link>
            <Link href="/camden-county/cherry-hill" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Cherry Hill Pest Control →</strong>
              <p className="text-gray-600 text-sm">Serving the Route 38/70 restaurant corridor</p>
            </Link>
            <Link href="/camden-county/pennsauken" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Pennsauken Pest Control →</strong>
              <p className="text-gray-600 text-sm">Industrial and food service coverage</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            Protect Your Restaurant Before the Next Inspection
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Call now to schedule a free restaurant pest assessment for your Camden County food service establishment.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'LocalBusiness',
                name: 'Camden County Pest Control — Restaurant Division',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/commercial/restaurants',
                description: 'NJ Health Code-compliant restaurant pest control programs for Cherry Hill and all of Camden County, NJ.',
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
