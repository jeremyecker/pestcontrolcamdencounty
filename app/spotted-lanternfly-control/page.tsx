import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: `Spotted Lanternfly Control Camden County NJ | ${SITE_NAME}` },
  description: `Spotted lanternfly confirmed in Camden County, NJ. Professional treatment for ornamental trees, grapes, and landscape plants. Serving Cherry Hill, Voorhees, Gloucester Township and all of South Jersey. Call (856) 600-0812.`,
  alternates: { canonical: `${SITE_URL}/spotted-lanternfly-control/` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is spotted lanternfly confirmed in Camden County, NJ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Spotted lanternfly has been confirmed in Camden County, New Jersey. The county is within the NJ Department of Agriculture quarantine zone. Residents and businesses must follow specific rules about moving outdoor items and plant material."
      }
    },
    {
      "@type": "Question",
      "name": "What plants does spotted lanternfly damage in South Jersey?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spotted lanternfly feeds on over 70 plant species. It prefers tree of heaven but also damages grapes, hops, apples, maples, walnuts, willows, and many ornamental trees common in Camden County landscapes."
      }
    },
    {
      "@type": "Question",
      "name": "What professional treatment options exist for spotted lanternfly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional options include trunk injection (delivers systemic insecticide directly into the tree for season-long protection), systemic soil treatment (absorbed through roots), contact and residual spray for adult aggregations, and egg mass removal services. Our licensed NJ applicators recommend the right combination for each property."
      }
    },
    {
      "@type": "Question",
      "name": "Does professional treatment fully eliminate spotted lanternfly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional treatment significantly reduces populations on your property and protects high-value trees. Because spotted lanternfly adults fly readily, reinfestation from surrounding areas is possible. Trunk injection combined with systemic soil treatment provides the most comprehensive season-long protection for ornamental trees in Camden County."
      }
    }
  ]
};

export default function SpottedLanternflyControlPage() {
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
          <span className="text-gray-900">Spotted Lanternfly Control</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Spotted Lanternfly Control Camden County, NJ
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Spotted lanternfly is confirmed in Camden County. Licensed NJ applicators providing trunk injection, systemic soil treatment, and contact spray for ornamental trees, grapes, and landscape plants. Serving Cherry Hill, Voorhees, Gloucester Township &amp; all of South Jersey.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { stat: 'Confirmed', label: 'In Camden County' },
            { stat: 'Licensed', label: 'NJ Applicators' },
            { stat: 'Free', label: 'Property Assessments' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-brand-light rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-primary">{stat}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        <div className="bg-brand-primary rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-white">
            <h2 className="text-xl font-bold mb-1">Spotted Lanternfly on Your Property?</h2>
            <p className="opacity-90 text-sm">Professional treatment available for ornamental trees and landscape plants throughout Camden County, NJ.</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Spotted Lanternfly in Camden County: What Property Owners Need to Know</h2>
          <div className="prose prose-lg max-w-none">
            <p>Spotted lanternfly (Lycorma delicatula) is an invasive pest from Asia first detected in Pennsylvania in 2014 and now established throughout New Jersey, including Camden County. The pest poses serious risk to ornamental trees, fruit plantings, grapes, hops, and landscape plants across Cherry Hill, Voorhees, Gloucester Township, and the rural-transitional communities of Winslow Township near the Pine Barrens. Camden County is within the NJ Department of Agriculture&rsquo;s quarantine zone, which means specific regulations apply to moving outdoor items from affected areas.</p>

            <h3>Identifying Spotted Lanternfly Life Stages in Camden County</h3>
            <p><strong>Egg masses</strong> (September through June): Flat, gray, putty-like masses containing 30 to 50 eggs, laid on smooth flat surfaces &mdash; tree bark, stone walls, fence posts, outdoor furniture, and vehicles. Scraping and destroying egg masses in fall and winter is the single most impactful action property owners can take.</p>
            <p><strong>Nymphs</strong> (May through September): Early instars are black with white spots. Later instars develop red patches. Nymphs aggregate on host plants in large numbers and are more vulnerable to contact treatments than mobile adults.</p>
            <p><strong>Adults</strong> (July through December): Adults have gray forewings with black spots and red hindwings visible in flight. They aggregate in large numbers on preferred host plants through fall before laying eggs and dying.</p>

            <h3>Plants at Risk in Camden County Landscapes</h3>
            <p>Spotted lanternfly&rsquo;s preferred host is tree of heaven (Ailanthus altissima), which grows abundantly along roads and disturbed areas throughout Camden County. When tree of heaven is scarce, it moves to high-value plants including ornamental maples (heavily attacked in Cherry Hill and Voorhees residential landscapes), backyard fruit trees (apples, peaches, cherries) common across South Jersey, grapes and hops relevant to small-scale production near Winslow Township, and walnuts, lindens, and willows throughout the county. Heavy feeding causes oozing wounds, dieback, and sticky honeydew that promotes sooty mold growth on surfaces below.</p>

            <h3>Professional Treatment Options</h3>
            <p><strong>Trunk injection</strong> delivers systemic insecticide directly into the tree&rsquo;s vascular system, providing season-long protection for high-value ornamentals. Ideal near pollinator gardens or water features where spray is restricted.</p>
            <p><strong>Systemic soil treatment</strong> applies systemic insecticide to the root zone for uptake through the root system. Appropriate for large trees where injection is impractical.</p>
            <p><strong>Contact and residual spray</strong> rapidly reduces adult aggregations on property perimeters, fence lines, and structure surfaces where spotted lanternfly are massing.</p>
            <p><strong>Egg mass removal services</strong> in fall reduce next-season populations before spring hatch.</p>

            <h3>Camden County Property Owner Obligations</h3>
            <p>Camden County is within the NJ Department of Agriculture quarantine zone. Property owners must inspect outdoor items &mdash; vehicles, equipment, furniture &mdash; before moving them out of the zone. Report sightings at sl.survey.nj.gov. Businesses moving regulated items must obtain a permit. Our team can advise on compliance requirements during any service visit.</p>

            <h3>Areas We Serve for Spotted Lanternfly Treatment</h3>
            <ul>
              <li>Cherry Hill spotted lanternfly treatment</li>
              <li>Voorhees Township ornamental tree protection</li>
              <li>Gloucester Township and Winslow Township treatment</li>
              <li>Haddonfield and Haddon Township</li>
              <li>Pennsauken and Collingswood</li>
              <li>All Camden County communities within the quarantine zone</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Spotted Lanternfly Control Camden County &mdash; FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is spotted lanternfly confirmed in Camden County, NJ?",
                a: "Yes. Spotted lanternfly is confirmed and established in Camden County, which is within the NJ Department of Agriculture quarantine zone. Specific regulations apply to moving outdoor items from affected areas."
              },
              {
                q: "What plants does spotted lanternfly damage in South Jersey?",
                a: "Spotted lanternfly damages over 70 plant species including ornamental maples, grapes, hops, apples, walnuts, and many other landscape plants common across Camden County."
              },
              {
                q: "What professional treatment options exist for spotted lanternfly?",
                a: "Trunk injection, systemic soil treatment, contact spray, and egg mass removal are all available. Our licensed NJ applicators recommend the right combination based on your property's plants and infestation level."
              },
              {
                q: "Does professional treatment fully eliminate spotted lanternfly?",
                a: "Treatment significantly reduces populations and protects high-value trees. Because adults fly, some reinfestation from surrounding areas is possible. Trunk injection combined with systemic soil treatment provides the most comprehensive season-long protection."
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">Why Choose Our Camden County Spotted Lanternfly Service?</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Licensed NJ pesticide applicators certified for spotted lanternfly treatment</li>
            <li>✅ Trunk injection, systemic soil, and contact spray options</li>
            <li>✅ Egg mass removal to reduce next-season populations</li>
            <li>✅ Quarantine compliance guidance available</li>
            <li>✅ Serving all Camden County communities in the quarantine zone</li>
            <li>✅ Free property assessments</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Protect Your Trees from Spotted Lanternfly Today</h2>
          <p className="text-gray-600 mb-6">Professional spotted lanternfly treatment throughout Camden County, NJ. Licensed applicators available now.</p>
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
