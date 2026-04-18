import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: 'Pest Control Camden City NJ | Licensed Exterminator' },
  description: `Licensed exterminator serving Camden City, NJ. Cockroaches, bed bugs, mice & rats in row homes and apartments. Same-day service available. Call (856) 600-0812.`,
  alternates: { canonical: `${SITE_URL}/camden-city/` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What pests are most common in Camden City, NJ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Camden City's dense row homes, aging apartments, and shared walls make cockroaches, bed bugs, and rodents (mice and rats) the most common pest problems. German cockroaches thrive in kitchens and utility areas of older housing stock. Bed bugs spread quickly through multi-unit buildings. Mice and rats enter through gaps in foundations and utility penetrations, especially near the Delaware River waterfront."
      }
    },
    {
      "@type": "Question",
      "name": "How much does pest control cost in Camden City NJ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "General pest control in Camden City typically ranges from $300–$450. Cockroach treatments run $300–$450. Rodent control (including exclusion) is $300–$450. Bed bug treatment ranges from $1,200–$4,500 depending on infestation size and whether heat or chemical treatment is used. Call (856) 600-0812 for a free estimate."
      }
    },
    {
      "@type": "Question",
      "name": "Can you treat apartments and rental units in Camden City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we serve both tenants and landlords throughout Camden City. We work discreetly, schedule around your availability, and can coordinate multi-unit treatments for landlords managing rowhomes or apartment buildings. Same-day service is available."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can an exterminator come to Camden City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day and next-day exterminator service throughout Camden City, NJ — including all neighborhoods: North Camden, Parkside, Cramer Hill, East Camden, Fairview, Waterfront South, and Liberty Park. Call (856) 600-0812 to book the next available slot."
      }
    }
  ]
};

export default function CamdenCityPage() {
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
          <span className="text-gray-900">Camden City</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pest Control Camden City, NJ
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Licensed exterminator serving Camden City &mdash; row homes, apartments, and multi-unit buildings. Cockroaches, bed bugs, mice, and rats eliminated fast. Same-day service available.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { stat: 'Same-Day', label: 'Service Available' },
            { stat: 'Licensed', label: 'NJ Exterminator' },
            { stat: 'Free', label: 'Estimates' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-brand-light rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-primary">{stat}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        <div className="bg-brand-primary rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-white">
            <h2 className="text-xl font-bold mb-1">Pest Problem in Camden City?</h2>
            <p className="opacity-90 text-sm">Same-day exterminator service available throughout Camden City, NJ.</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Exterminator Services in Camden City, NJ</h2>
          <div className="prose prose-lg max-w-none">
            <p>Camden City is the most densely populated city in New Jersey &mdash; a tight grid of row homes, apartments, and multi-family buildings packed along the Delaware River, directly across from Philadelphia. That density means pests spread fast. One infested unit becomes a building problem. One infested building becomes a block problem. Our licensed NJ exterminators understand Camden City&rsquo;s unique housing stock and move quickly to contain and eliminate infestations before they spread.</p>

            <h3>Cockroach Exterminator Camden City NJ</h3>
            <p>German cockroaches are the dominant cockroach species in Camden City&rsquo;s row homes and apartment kitchens. They breed rapidly in wall voids, under sinks, and behind appliances &mdash; a single pair can produce thousands of offspring in a year. Store-bought roach sprays scatter colonies without killing them. Our exterminators use professional-grade gel bait systems and residual treatments that eliminate the entire colony, including egg cases, within days. For multi-unit buildings, we offer coordinated treatment programs to prevent re-infestation from adjacent units.</p>

            <h3>Bed Bug Exterminator Camden City NJ</h3>
            <p>Bed bugs travel fast through shared walls, hallways, and secondhand furniture in Camden City&rsquo;s dense housing. If you&rsquo;re waking up with bites or spotting blood spots on your mattress, don&rsquo;t wait &mdash; bed bug infestations grow exponentially. Our exterminators provide thorough inspections and proven treatment protocols (heat and chemical options available) that eliminate every life stage. We work discreetly and around your schedule.</p>

            <h3>Rodent Exterminator Camden City NJ</h3>
            <p>Mice and rats are a persistent problem in Camden City, particularly near the Delaware River waterfront, North Camden, and along Route 30. They enter through gaps as small as a dime in foundation cracks, utility penetrations, and aging door frames common in older row homes. Our rodent control program includes trapping, removal, and exclusion &mdash; sealing the entry points that keep them coming back. We don&rsquo;t just set traps; we solve the underlying access problem.</p>

            <h3>Camden City Neighborhoods We Serve</h3>
            <ul>
              <li>North Camden exterminator</li>
              <li>Parkside exterminator</li>
              <li>Cramer Hill exterminator</li>
              <li>East Camden exterminator</li>
              <li>Fairview exterminator</li>
              <li>Waterfront South exterminator</li>
              <li>Liberty Park exterminator</li>
              <li>South Camden exterminator</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving Landlords &amp; Property Managers in Camden City</h2>
          <div className="prose prose-lg max-w-none">
            <p>Camden City&rsquo;s large rental market means landlords and property managers face unique pest control challenges. A cockroach or rodent problem in one unit can spread throughout a building &mdash; and a tenant complaint to NJ code enforcement can result in violations. We offer discreet, scheduled pest management programs for rowhome portfolios, multi-family buildings, and apartment complexes throughout Camden City. Our technicians work efficiently to minimize disruption to tenants while delivering thorough, lasting results.</p>
            <p>We also serve businesses along Admiral Wilson Blvd and the Route 30 corridor, including restaurants, warehouses, and Cooper University Health Care facilities requiring commercial pest management.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Camden City Pest Control &mdash; FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "What pests are most common in Camden City, NJ?",
                a: "Cockroaches, bed bugs, and rodents are the most common pest problems in Camden City's dense row homes and apartments. German cockroaches thrive in kitchens of older housing. Bed bugs spread through shared walls and hallways. Mice and rats enter through foundation gaps, especially near the Delaware River waterfront."
              },
              {
                q: "How much does pest control cost in Camden City NJ?",
                a: "General pest control runs $300\u2013$450. Cockroach treatments are $300\u2013$450. Rodent control (including exclusion) is $300\u2013$450. Bed bug treatment ranges from $1,200\u2013$4,500 depending on infestation size. Call (856) 600-0812 for a free estimate."
              },
              {
                q: "Can you treat apartments and rental units in Camden City?",
                a: "Yes \u2014 we serve both tenants and landlords. We work discreetly, schedule around your availability, and can coordinate multi-unit treatments for landlords managing rowhomes or apartment buildings."
              },
              {
                q: "How quickly can an exterminator come to Camden City?",
                a: "Same-day and next-day service is available throughout Camden City, including North Camden, Parkside, Cramer Hill, East Camden, Fairview, Waterfront South, and Liberty Park. Call (856) 600-0812 to book."
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">Why Camden City Residents Choose Us</h2>
          <ul className="space-y-2 text-gray-700">
            <li>&#x2705; Licensed &amp; insured NJ exterminators</li>
            <li>&#x2705; Same-day service available throughout Camden City</li>
            <li>&#x2705; Discreet &mdash; no marked vehicles, no noise</li>
            <li>&#x2705; Tenant and landlord programs available</li>
            <li>&#x2705; Family and pet-friendly treatments</li>
            <li>&#x2705; Free, no-obligation estimates</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Your Camden City Exterminator Today</h2>
          <p className="text-gray-600 mb-6">Call now for same-day pest control service in Camden City, NJ.</p>
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
