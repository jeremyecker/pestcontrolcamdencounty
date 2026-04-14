import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: `Property Management Pest Control Camden County NJ | HOA | ${SITE_NAME}` },
  description: `Professional pest control for HOA communities, apartment complexes, and multi-unit housing in Camden County, NJ. Cherry Hill, Voorhees, Pennsauken, Lindenwold. Contracts available. Call (856) 600-0812.`,
  alternates: { canonical: `${SITE_URL}/property-management-pest-control/` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer pest control contracts for HOA communities in Camden County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer annual and multi-year pest management contracts for HOA communities throughout Camden County including Cherry Hill, Voorhees, and Gloucester Township. Contracts cover common area treatment, perimeter programs, and scheduled preventive service visits with full documentation provided for HOA records."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle bed bugs in multi-unit buildings in Camden County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bed bugs in multi-unit housing require a building-wide approach, not just treatment of the reported unit. We inspect adjacent units, treat all affected spaces with professional chemical protocols or heat treatment, and provide documentation for landlord-tenant legal requirements under NJ law. Building-wide programs are available for apartment complexes in Pennsauken, Lindenwold, and Camden City."
      }
    },
    {
      "@type": "Question",
      "name": "What documentation do you provide for property management clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide written service reports after every visit documenting pest activity found, treatments applied, products used, and recommendations for structural or sanitation corrections. Reports are formatted for property management records and are available digitally. Annual summary reports are provided to all contract clients."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve apartment buildings in Pennsauken and Lindenwold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide building-wide pest management programs for apartment complexes in Pennsauken, Lindenwold, Camden City, and throughout Camden County. Programs address cockroach control, rodent exclusion, bed bug protocols, and perimeter pest prevention on a scheduled basis."
      }
    }
  ]
};

export default function PropertyManagementPestControlPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' \u2192 '}
          <span className="text-gray-900">Property Management Pest Control</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🏘️ Property Management Pest Control Camden County, NJ
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional pest management programs for HOA communities, apartment complexes, and multi-unit housing throughout Camden County &mdash; Cherry Hill, Voorhees, Pennsauken, Lindenwold, Gloucester Township &amp; more. Contracts available. Full documentation provided.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { stat: 'Contracts', label: 'Available' },
            { stat: 'Documented', label: 'Service Reports' },
            { stat: 'Licensed', label: 'NJ Applicators' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-brand-light rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-primary">{stat}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        <div className="bg-brand-primary rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-white">
            <h2 className="text-xl font-bold mb-1">Pest Control for Your Camden County Property?</h2>
            <p className="opacity-90 text-sm">HOA communities, apartment complexes, and multi-unit housing throughout South Jersey. Call for a program quote.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-bold py-3 px-6 rounded-lg transition-colors hover:bg-gray-100 whitespace-nowrap">
              📞 {PHONE}
            </a>
            <Link href="/get-a-quote/" className="inline-block bg-brand-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors whitespace-nowrap">
              Get a Free Quote
            </Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pest Management Programs for Camden County Property Managers and HOAs</h2>
          <div className="prose prose-lg max-w-none">
            <p>Camden County property managers face pest management challenges that single-family residential service does not address. HOA communities in Cherry Hill and Voorhees require common area treatment, perimeter programs, and coordination with individual unit owners. Apartment complexes in Pennsauken, Lindenwold, and Camden City deal with cockroach populations spreading through shared walls, bed bugs requiring building-wide protocols, and rodent pressure from loading areas and dumpster enclosures. Our commercial property management pest control programs are built specifically for these challenges, with full documentation, flexible scheduling, and long-term contracts designed for professional property management operations.</p>

            <h3>HOA Community Pest Control in Cherry Hill and Voorhees</h3>
            <p>Cherry Hill and Voorhees Township have among the highest concentrations of planned HOA communities in South Jersey &mdash; from townhome complexes near the Cherry Hill Mall corridor to large single-family neighborhoods in Voorhees with shared open space, tot lots, and community facilities. HOA pest management programs address:</p>
            <ul>
              <li><strong>Common area perimeter treatment</strong>: Clubhouses, pool houses, community mailbox areas, and shared recreation facilities treated on a scheduled basis for ants, stinging insects, and perimeter pests</li>
              <li><strong>Landscape and groundcover programs</strong>: Tick and mosquito barrier treatment for HOA common areas, walking trails, and retention pond perimeters</li>
              <li><strong>Stinging insect management</strong>: Wasp and hornet nest removal from community structures and common play areas during peak season</li>
              <li><strong>Rodent exclusion consultation</strong>: Assessment of dumpster enclosures, utility areas, and common building entry points</li>
              <li><strong>Documentation for HOA records</strong>: Service reports provided in digital format after every visit</li>
            </ul>

            <h3>Apartment Complex Pest Control in Pennsauken, Lindenwold, and Camden City</h3>
            <p>Multi-unit residential buildings in Camden County&rsquo;s denser communities require a fundamentally different approach than suburban single-family service. Shared walls, common plumbing chases, and the mobility of tenants with their belongings create ongoing pest introduction and spread that unit-by-unit reactive treatment cannot address. Our apartment complex programs include:</p>
            <p><strong>Cockroach control</strong>: Building-wide gel bait programs applied to all units on a scheduled rotation, combined with residual treatment in utility chases, elevator shafts, and shared kitchen areas. German cockroach populations in older Pennsauken and Camden City apartment buildings require aggressive, coordinated treatment to break the breeding cycle across the entire building simultaneously.</p>
            <p><strong>Bed bug protocols</strong>: NJ law places specific obligations on landlords regarding bed bug disclosure and treatment. We provide unit inspection services, building-wide treatment protocols (chemical or heat), and documentation packages that satisfy NJ tenant notification requirements. We also offer proactive annual unit inspections that identify infestations early &mdash; before they spread to multiple units and trigger legal exposure.</p>
            <p><strong>Rodent exclusion</strong>: Multi-unit buildings in Pennsauken near the Route 130 corridor and in Camden City experience rodent pressure from commercial activity in adjacent areas. Building-wide exclusion assessment, bait station programs at exterior perimeter and interior utility areas, and maintenance coordination for structural gaps are all included in commercial rodent programs.</p>
            <p><strong>Perimeter and common area programs</strong>: Lobby areas, laundry rooms, and shared outdoor spaces treated on schedule to prevent pest introduction from exterior pressure.</p>

            <h3>Pharmaceutical and Medical Office Facilities in South Jersey</h3>
            <p>South Jersey&rsquo;s growing pharmaceutical and biotech corridor and Camden County&rsquo;s concentration of medical offices associated with Cooper University Health require pest management that meets the specialized standards of healthcare and regulated manufacturing environments. We provide documentation-driven programs appropriate for facilities subject to third-party audits, with product selection, application methods, and documentation protocols designed for sensitive environments.</p>

            <h3>What Every Property Management Program Includes</h3>
            <ul>
              <li>Initial facility inspection with written assessment and recommendations</li>
              <li>Customized Integrated Pest Management (IPM) plan with specified service frequency and methods</li>
              <li>Scheduled preventive service visits on a calendar aligned with your management cycle</li>
              <li>Written service report after every visit documenting findings, treatments, and recommendations</li>
              <li>Emergency response for pest situations between scheduled visits</li>
              <li>Annual program review and renewal with updated treatment plan as needed</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Management Pest Control Camden County &mdash; FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "Do you offer pest control contracts for HOA communities in Camden County?",
                a: "Yes. Annual and multi-year contracts are available for HOA communities in Cherry Hill, Voorhees, Gloucester Township, and throughout Camden County. Contracts cover common area treatment, perimeter programs, and scheduled service with full documentation."
              },
              {
                q: "How do you handle bed bugs in multi-unit buildings in Camden County?",
                a: "Bed bugs in multi-unit housing require a building-wide approach. We inspect adjacent units, treat all affected spaces with professional chemical or heat protocols, and provide documentation for NJ landlord-tenant legal compliance."
              },
              {
                q: "What documentation do you provide for property management clients?",
                a: "Written service reports after every visit documenting pest activity, treatments applied, products used, and structural recommendations. Annual summary reports provided to all contract clients. Digital format available."
              },
              {
                q: "Do you serve apartment buildings in Pennsauken and Lindenwold?",
                a: "Yes. Building-wide pest management programs for apartment complexes in Pennsauken, Lindenwold, Camden City, and throughout Camden County covering cockroach control, rodent exclusion, bed bug protocols, and perimeter programs."
              }
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5 bg-white">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gray-50 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Why Property Managers Choose Our Camden County Program</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Licensed &amp; insured NJ commercial pest applicators</li>
            <li>✅ Annual and multi-year contracts available</li>
            <li>✅ Full documentation for property management and legal records</li>
            <li>✅ Building-wide bed bug protocols with NJ compliance documentation</li>
            <li>✅ Emergency response between scheduled visits</li>
            <li>✅ Serving HOAs, apartments, and managed properties across Camden County</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get a Property Management Pest Control Program Quote</h2>
          <p className="text-gray-600 mb-6">Professional pest management contracts for HOA communities and multi-unit properties throughout Camden County, NJ.</p>
          <a
            href={PHONE_HREF}
            className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors mr-4 mb-3"
          >
            📞 {PHONE}
          </a>
          <Link
            href="/get-a-quote/"
            className="inline-block bg-brand-accent hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors mb-3"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
