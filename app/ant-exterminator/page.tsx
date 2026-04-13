import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: `Ant Exterminator Camden County NJ | Same-Day | ${SITE_NAME}` },
  description: `Licensed ant exterminator serving all of Camden County, NJ. Carpenter ants, pavement ants & odorous house ants. Colony elimination at the source. Same-day service available. Call (856) 600-0812.`,
  alternates: { canonical: `${SITE_URL}/ant-exterminator/` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What ant species does your Camden County exterminator treat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Camden County ant exterminators treat all common NJ ant species: carpenter ants (the most structurally damaging — they excavate wood in older Camden County homes), odorous house ants (small, brown, smell like coconut when crushed — common kitchen invaders), and pavement ants (nest under driveways and patios). Each species requires a different treatment approach for lasting results."
      }
    },
    {
      "@type": "Question",
      "name": "How much does an ant exterminator cost in Camden County NJ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ant exterminator costs in Camden County typically range from $300–$450 for a standard treatment. Pricing depends on the species, severity, and size of your home. We offer free, no-obligation estimates — call (856) 600-0812 for an accurate quote."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can an ant exterminator come to my Camden County home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day and next-day ant exterminator service throughout Camden County, including Cherry Hill, Voorhees, Gloucester Township, Haddonfield, Pennsauken, and all surrounding communities."
      }
    },
    {
      "@type": "Question",
      "name": "Why do ants keep coming back after treatment in Camden County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Store-bought sprays kill forager ants but leave the colony — and the queen — intact. Professional ant extermination uses colony-targeting gel bait that workers carry back to eliminate the queen and all brood. For carpenter ants, our exterminators also locate and treat the parent outdoor colony, which is the source of indoor satellite colonies."
      }
    }
  ]
};

export default function AntExterminatorPage() {
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
          <span className="text-gray-900">Ant Exterminator</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🐜 Ant Exterminator Camden County, NJ
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Licensed ant exterminator serving all of Camden County &mdash; Cherry Hill, Voorhees, Gloucester Township, Haddonfield, Pennsauken, Collingswood & more. We eliminate ant colonies at the source. Same-day service available.
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
            <h2 className="text-xl font-bold mb-1">Ant Problem in Camden County?</h2>
            <p className="opacity-90 text-sm">Same-day ant exterminator service available throughout Camden County, NJ.</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ant Exterminators Serving All of Camden County, NJ</h2>
          <div className="prose prose-lg max-w-none">
            <p>Ants are the #1 pest call we receive from Camden County homeowners every spring &mdash; and for good reason. Camden County&rsquo;s mix of older suburban neighborhoods, wooded lots, and dense residential communities creates ideal conditions for carpenter ants, odorous house ants, and pavement ants to thrive. Our licensed NJ ant exterminators serve the entire county, from Cherry Hill and Voorhees to Gloucester Township, Haddonfield, Pennsauken, and beyond.</p>

            <h3>Carpenter Ant Exterminator Camden County</h3>
            <p>Carpenter ants are the most damaging ant species in Camden County. Unlike termites, they don&rsquo;t eat wood &mdash; they excavate galleries in moisture-damaged wood to build nests. Older homes near the PATCO corridor in Haddonfield, Audubon, and Collingswood are especially vulnerable, with wood damage common in sill plates, window frames, and basement beams. Our carpenter ant exterminators locate the outdoor parent colony (in a dead tree or wood pile) and treat both it and any indoor satellite colonies for complete elimination.</p>

            <h3>Odorous House Ant &amp; Pavement Ant Exterminator</h3>
            <p>Odorous house ants (the small brown ones that smell like coconut when crushed) invade Camden County kitchens seeking sugar and moisture. Pavement ants nest under driveways, patios, and foundation slabs throughout Cherry Hill and Gloucester Township. Store-bought sprays scatter colonies without eliminating the queen &mdash; our exterminators use colony-targeting gel bait that reaches the queen and wipes out the entire colony within days.</p>

            <h3>Areas Our Ant Exterminators Serve in Camden County</h3>
            <ul>
              <li>Cherry Hill ant exterminator</li>
              <li>Voorhees ant exterminator</li>
              <li>Gloucester Township ant exterminator</li>
              <li>Haddonfield ant exterminator</li>
              <li>Pennsauken ant exterminator</li>
              <li>Collingswood ant exterminator</li>
              <li>Moorestown ant exterminator</li>
              <li>Lindenwold ant exterminator</li>
              <li>Winslow Township ant exterminator</li>
              <li>All other Camden County communities</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ant Exterminator Camden County &mdash; FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "What ant species does your Camden County exterminator treat?",
                a: "Carpenter ants, odorous house ants, and pavement ants are the most common in Camden County. We also treat fire ants and other species on request. Each requires a different treatment approach."
              },
              {
                q: "How much does an ant exterminator cost in Camden County NJ?",
                a: "Ant exterminator costs in Camden County typically range from $300\u2013$450. Pricing depends on the species, severity, and size of your home. Call (856) 600-0812 for a free estimate."
              },
              {
                q: "How quickly can an ant exterminator come to my Camden County home?",
                a: "We offer same-day and next-day service throughout Camden County, including Cherry Hill, Voorhees, Gloucester Township, Haddonfield, Pennsauken, and all surrounding areas."
              },
              {
                q: "Why do ants keep coming back after treatment?",
                a: "Sprays kill forager ants but leave the queen intact. Our exterminators use colony-targeting gel bait that workers carry back, eliminating the queen and all brood. For carpenter ants, we also treat the outdoor parent colony for lasting control."
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">Why Choose Our Camden County Ant Exterminator?</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Licensed & insured NJ exterminators</li>
            <li>✅ Same-day ant exterminator service available</li>
            <li>✅ Colony elimination — not just surface spraying</li>
            <li>✅ Family and pet-friendly treatments</li>
            <li>✅ Free, no-obligation estimates</li>
            <li>✅ Serving all 16 municipalities in Camden County</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Your Camden County Ant Exterminator Today</h2>
          <p className="text-gray-600 mb-6">Call now for same-day ant exterminator service in Camden County, NJ.</p>
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
