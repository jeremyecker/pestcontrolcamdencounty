import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Commercial Pest Control — Camden County, NJ | Licensed & Insured',
  description:
    'Professional commercial pest control for restaurants, offices, warehouses, healthcare, schools & more across Camden County, NJ. NJDEP-licensed. Call (856) 600-0812.',
  keywords:
    'commercial pest control Camden County NJ, commercial exterminator Cherry Hill, pest control restaurants NJ, office pest control, warehouse pest control, healthcare pest control NJ',
};

const verticals = [
  {
    title: 'Restaurants',
    slug: 'restaurants',
    icon: '🍽️',
    desc: 'NJ Health Code-compliant IPM programs, cockroach & rodent control, health inspection prep for Cherry Hill and South Jersey dining.',
  },
  {
    title: 'Office Buildings',
    slug: 'office-buildings',
    icon: '🏢',
    desc: 'Discreet, scheduled pest management for Cherry Hill office parks, Pennsauken business districts, and Camden waterfront offices.',
  },
  {
    title: 'Warehouses',
    slug: 'warehouses',
    icon: '🏭',
    desc: 'Rodent exclusion, dock door sealing, and pallet storage protocols for Pennsauken Industrial Park and distribution centers.',
  },
  {
    title: 'Healthcare Facilities',
    slug: 'healthcare',
    icon: '🏥',
    desc: 'Zero-tolerance IPM for hospitals, urgent care centers, and medical offices throughout Cherry Hill, Voorhees, and Camden.',
  },
  {
    title: 'Schools',
    slug: 'schools',
    icon: '🏫',
    desc: 'NJ IPM Act-compliant programs, parent notification procedures, and summer treatments for Camden County schools.',
  },
  {
    title: 'Retail',
    slug: 'retail',
    icon: '🛍️',
    desc: 'Rodent and cockroach control for Cherry Hill Mall, Voorhees Town Center, Marlton Crossing, and South Jersey retail.',
  },
  {
    title: 'Food Processing',
    slug: 'food-processing',
    icon: '🏗️',
    desc: 'FDA/FSMA-compliant pest management, HACCP support, and detailed documentation for food facilities in Pennsauken and Camden.',
  },
  {
    title: 'Property Management',
    slug: 'property-management',
    icon: '🔑',
    desc: 'Multi-unit bed bug protocols, tenant notification compliance, and recurring contracts for Camden County rental housing.',
  },
  {
    title: 'Hospitality',
    slug: 'hospitality',
    icon: '🏨',
    desc: 'Bed bug prevention programs, guest room inspection protocols, and fast-response service for Route 70/38 hotels.',
  },
  {
    title: 'Apartment Complexes',
    slug: 'apartment-complexes',
    icon: '🏘️',
    desc: 'Shared-wall pest management, bed bug programs, and cockroach control for high-density housing in Cherry Hill and Collingswood.',
  },
];

export default function CommercialPage() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <span className="text-gray-900">Commercial Pest Control</span>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Commercial Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Industry-specific programs for restaurants, healthcare, warehouses, schools, and more.
            NJDEP-licensed technicians. Recurring service contracts. Guaranteed results.
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* Intro */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Camden County's Commercial Pest Control Specialists
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Commercial pest control in Camden County, New Jersey is not a one-size-fits-all business. The county's diverse economic landscape — anchored by the Cherry Hill commercial corridor along Routes 38 and 70, the Camden City industrial waterfront, the Cherry Hill Mall trade area, and the sprawling Pennsauken industrial zones along Route 130 — demands pest management expertise that is tailored to each industry vertical. A restaurant facing a health inspection has entirely different pest control priorities than a warehouse managing incoming pallets or a hospital protecting immunocompromised patients.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Camden County Pest Control has built industry-specific programs for every major commercial sector in the county. Our NJDEP-licensed technicians understand the regulatory environment each business operates in — from the New Jersey Health Code requirements that govern food service establishments to the NJ IPM Act protocols that apply to public schools to the JCAHO compliance standards that healthcare facilities must maintain. We do not just eliminate pests; we build programs that protect your facility, your license, your reputation, and your bottom line.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Cherry Hill commercial corridor along Routes 38 and 70 is one of the densest retail and dining concentrations in South Jersey. Hundreds of restaurants, office buildings, retail centers, and service businesses operate within a few square miles of the Haddonfield Road intersection, creating intense competition for resources and significant pest pressure from shared infrastructure, neighboring properties, and heavy vehicular and foot traffic. Our team serves every business category in this corridor with the frequency and documentation standards that commercial operators demand.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Camden City's industrial waterfront and the Pennsauken industrial zones present a different set of challenges. Warehouses, distribution centers, food processors, and manufacturing facilities in these areas deal with rodent pressure from the adjacent Delaware River corridor, high-traffic loading docks that create constant entry points, and the kind of large, complex structures that require systematic exclusion programs rather than reactive spot treatments. Our commercial team has the equipment and experience to manage pest pressure across buildings of any size.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            For property managers and apartment complex operators throughout Cherry Hill, Collingswood, and the rest of Camden County, the challenges are different again — shared walls that allow pests to migrate between units, tenant notification requirements under New Jersey law, and the complexity of coordinating treatments across multiple occupied units. Our property management program is specifically designed to address these multi-unit dynamics with minimum disruption and maximum compliance.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Every commercial account we manage begins with a detailed site assessment. We walk your facility, identify existing pest activity and conducive conditions, review your operational processes for pest risk factors, and develop a written Integrated Pest Management plan. That plan becomes the foundation of your service contract, with treatment frequency, documentation standards, and communication protocols tailored to your specific industry and regulatory requirements.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Camden County's commercial businesses deserve pest control partners who understand their industry, not just their pest problems. Browse our vertical-specific programs below, or call <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a> to speak with a commercial pest control specialist today.
          </p>
        </section>

        {/* Verticals Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Commercial Pest Control by Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verticals.map((v) => (
              <Link
                key={v.slug}
                href={`/commercial/${v.slug}`}
                className="block bg-white border border-gray-200 hover:border-[#2B6CB0] rounded-xl p-6 transition-all hover:shadow-md group"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-xl font-bold text-[#1A365D] mb-2 group-hover:text-[#2B6CB0] transition-colors">
                  {v.title} →
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why Camden County Businesses Choose Us
          </h2>
          <div className="space-y-4">
            {[
              { icon: '📋', title: 'NJDEP Licensed & Fully Insured', text: 'Every technician holds a valid NJ Department of Environmental Protection pesticide applicator license. We carry full general liability and workers\' compensation insurance for every commercial account.' },
              { icon: '📊', title: 'Detailed Service Documentation', text: 'We provide written service reports after every visit — pest activity levels, treatments applied, conducive conditions noted, and recommendations. Documentation your auditors and inspectors expect.' },
              { icon: '🔄', title: 'Recurring Service Contracts', text: 'Commercial pest control requires consistency. Our monthly, bi-monthly, and quarterly contracts provide scheduled visits, priority response between visits, and the continuity that protects your facility year-round.' },
              { icon: '🌿', title: 'IPM-Based Programs', text: 'Integrated Pest Management is the standard for commercial facilities. We use inspection, monitoring, and targeted treatments to minimize chemical use while maximizing effectiveness — essential for food service, healthcare, and schools.' },
              { icon: '⚡', title: 'Fast Emergency Response', text: 'A pest issue before a health inspection or during a guest stay cannot wait until next week. Our commercial clients receive priority scheduling and emergency response coverage for critical situations.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A365D]">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            Get a Commercial Pest Control Quote Today
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Call or contact us online to schedule a free commercial site assessment. We serve every industry across all of Camden County, NJ.
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

      {/* Bottom CTA Bar */}
      <section className="bg-[#1A365D] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h2>
          <p className="text-blue-200 text-lg mb-6">
            Camden County's commercial pest control specialists — licensed, insured, and industry-ready.
          </p>
          <a
            href="tel:+18566000812"
            className="inline-block bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors"
          >
            📞 Call (856) 600-0812
          </a>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Camden County Pest Control — Commercial Division',
            telephone: '(856) 600-0812',
            url: 'https://pestcontrolcamdencounty.com/commercial',
            description:
              'Commercial pest control services for restaurants, offices, warehouses, healthcare, schools, retail, and more across Camden County, NJ.',
            areaServed: { '@type': 'County', name: 'Camden County', containedInPlace: { '@type': 'State', name: 'New Jersey' } },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Commercial Pest Control Services',
              itemListElement: verticals.map((v) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: `${v.title} Pest Control` },
              })),
            },
          }),
        }}
      />
    </div>
  );
}
