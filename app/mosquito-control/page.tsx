import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: `Mosquito Control Camden County NJ | Yard Treatment | ${SITE_NAME}` },
  description: `Professional mosquito yard treatment for Camden County, NJ. Cherry Hill, Voorhees, Cooper River watershed communities. Monthly barrier spray programs. Call (856) 600-0812.`,
  alternates: { canonical: `${SITE_URL}/mosquito-control/` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does mosquito barrier spray work in Camden County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mosquito barrier spray is applied to the perimeter vegetation of your yard — shrubs, ornamental beds, grass borders, and shaded resting areas. The treatment kills resting adult mosquitoes on contact and leaves a residual effect that continues reducing mosquito activity for three to four weeks. Monthly applications maintain protection throughout the May through September mosquito season in Camden County."
      }
    },
    {
      "@type": "Question",
      "name": "Why do yards near the Cooper River have more mosquitoes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Cooper River and its tributary system through Cherry Hill, Pennsauken, Collingswood, and Haddon Township creates natural mosquito breeding habitat. Standing water in storm drainage areas, floodplains, and ornamental features near the river supports large mosquito populations that spread into adjacent residential yards. Professional yard treatment and larvicide application in these areas provides meaningful relief."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can mosquito control service start in Camden County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-week mosquito treatment scheduling throughout Camden County, including Cherry Hill, Voorhees, Gloucester Township, Haddonfield, Pennsauken, and all surrounding communities. Call (856) 600-0812 to schedule your first treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Is mosquito treatment safe for my family and pets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our mosquito barrier treatments are applied to exterior vegetation and use EPA-registered products. A standard re-entry window of 30 minutes after the product dries applies. We also offer biological control options using Bacillus thuringiensis israelensis (Bti) for standing water features — completely safe for pets, birds, and beneficial insects."
      }
    }
  ]
};

export default function MosquitoControlPage() {
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
          <span className="text-gray-900">Mosquito Control</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🦟 Mosquito Control Camden County, NJ
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional mosquito yard treatment serving Cherry Hill, Voorhees, Pennsauken, Collingswood, Gloucester Township &amp; all of Camden County. Monthly barrier spray programs let you reclaim your outdoor space all season long.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { stat: 'Monthly', label: 'Spray Programs' },
            { stat: 'Same-Week', label: 'Scheduling' },
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
            <h2 className="text-xl font-bold mb-1">Mosquito Problem in Camden County?</h2>
            <p className="opacity-90 text-sm">Monthly barrier treatment programs available throughout South Jersey. Start today.</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mosquito Control Throughout Camden County, NJ</h2>
          <div className="prose prose-lg max-w-none">
            <p>Camden County&rsquo;s mosquito season runs from May through September, with peak activity typically in July and August when summer heat and humidity combine with standing water from seasonal rainfall. The Cooper River watershed &mdash; flowing through Cherry Hill, Pennsauken, Collingswood, and Haddon Township &mdash; creates natural mosquito breeding habitat that feeds residential populations throughout the county. Our licensed mosquito control specialists provide professional barrier spray programs that reduce mosquito populations in your yard by 75 to 90 percent with consistent monthly applications.</p>

            <h3>Why Camden County Yards Have High Mosquito Pressure</h3>
            <p>Several factors make Camden County particularly challenging for mosquito control. The Cooper River and its tributary network creates permanent standing water habitat adjacent to densely populated residential areas. The county&rsquo;s relatively flat topography allows rainwater to pool in lawn depressions, storm drainage features, and landscape beds. Mature tree canopy in neighborhoods throughout Cherry Hill, Voorhees, Haddonfield, and Gloucester Township creates the shaded, humid microenvironments where mosquitoes rest during daylight hours and that barrier spray programs specifically target.</p>
            <p>Residential neighborhoods near Pennsauken&rsquo;s older stormwater infrastructure and the retention areas throughout Voorhees and Cherry Hill planned communities often experience higher-than-average mosquito activity because these features accumulate standing water that is difficult for homeowners to eliminate independently.</p>

            <h3>How Professional Mosquito Barrier Treatment Works</h3>
            <p>Our mosquito control technicians apply EPA-registered barrier spray products to the perimeter vegetation, ornamental beds, and shaded resting areas of your property using backpack misting equipment. The treatment kills resting adult mosquitoes on contact and leaves a residual protective layer on leaf surfaces that continues reducing activity for three to four weeks. Unlike residential foggers, professional barrier spray reaches the specific harborage areas &mdash; the undersides of large leaves, dense shrub interiors, groundcover beds &mdash; where mosquitoes congregate between feeding periods.</p>
            <p>We also address standing water breeding sources that cannot be eliminated: ornamental ponds, birdbaths, and drainage features receive biological larvicide treatment using Bacillus thuringiensis israelensis (Bti), which kills mosquito larvae without any harm to fish, birds, frogs, or beneficial insects.</p>

            <h3>Monthly Program vs. Single Treatment</h3>
            <p>A single mosquito barrier treatment provides meaningful relief for three to four weeks. However, Camden County&rsquo;s proximity to the Cooper River system and its warm, humid summers mean that adult mosquito populations replenish rapidly from surrounding breeding sources. Monthly program clients maintain continuous suppression throughout the season, allowing full use of decks, patios, and yards from May through September. One-time treatments are appropriate for specific events; monthly programs are the right choice for season-long outdoor enjoyment.</p>

            <h3>Areas We Serve in Camden County</h3>
            <ul>
              <li>Cherry Hill mosquito control &mdash; especially yards near the Cooper River parkway system</li>
              <li>Voorhees Township mosquito treatment &mdash; HOA communities and residential yards</li>
              <li>Pennsauken mosquito control &mdash; Cooper River corridor and Route 130 adjacent neighborhoods</li>
              <li>Collingswood and Haddon Township mosquito treatment</li>
              <li>Gloucester Township and Winslow Township mosquito control</li>
              <li>Haddonfield, Haddon Heights, and Audubon mosquito treatment</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mosquito Control Camden County &mdash; FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "How does mosquito barrier spray work in Camden County?",
                a: "Mosquito barrier spray targets the perimeter vegetation and shaded resting areas of your yard. It kills resting adult mosquitoes on contact and leaves a residual effect for three to four weeks. Monthly applications maintain protection throughout Camden County's May through September mosquito season."
              },
              {
                q: "Why do yards near the Cooper River have more mosquitoes?",
                a: "The Cooper River system through Cherry Hill, Pennsauken, Collingswood, and Haddon Township creates natural breeding habitat. Professional yard treatment and standing water larvicide application provides meaningful relief for yards in these areas."
              },
              {
                q: "How soon can mosquito control service start in Camden County?",
                a: "We offer same-week scheduling throughout Camden County including Cherry Hill, Voorhees, Gloucester Township, and all surrounding communities. Call (856) 600-0812 to get started."
              },
              {
                q: "Is mosquito treatment safe for my family and pets?",
                a: "Yes. Barrier treatments use EPA-registered products applied to exterior vegetation. A 30-minute re-entry window after the product dries applies. Biological larvicide (Bti) used in water features is completely safe for pets, fish, birds, and beneficial insects."
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">Why Choose Our Camden County Mosquito Control?</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Licensed &amp; insured NJ pesticide applicators</li>
            <li>✅ Monthly barrier spray programs for season-long protection</li>
            <li>✅ Biological larvicide for standing water features</li>
            <li>✅ 75&ndash;90% mosquito reduction with consistent monthly service</li>
            <li>✅ Serving all Cooper River watershed communities</li>
            <li>✅ Free mosquito yard assessments</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Mosquito Control in Camden County Today</h2>
          <p className="text-gray-600 mb-6">Reclaim your outdoor space this season. Professional mosquito treatment for all of South Jersey.</p>
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
