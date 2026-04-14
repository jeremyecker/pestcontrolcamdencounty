import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: `Tick Control Camden County NJ | Yard Treatment | ${SITE_NAME}` },
  description: `Professional tick control for Camden County, NJ yards. Deer ticks, dog ticks, and lone star ticks near Cooper River Greenway, Winslow Township, and throughout South Jersey. Call (856) 600-0812.`,
  alternates: { canonical: `${SITE_URL}/tick-control/` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What tick species are present in Camden County, NJ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Camden County has three primary tick species: the deer tick (black-legged tick), which is the Lyme disease vector and most common near wooded areas in Winslow Township and along the Cooper River Greenway; the American dog tick, common in lawn borders and open areas throughout Cherry Hill and Voorhees; and the lone star tick, which is expanding northward into South Jersey and has been documented in Camden County."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I treat my yard for ticks in Camden County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For effective tick suppression in Camden County, we recommend monthly barrier spray treatments from April through October. Homes adjacent to wooded conservation areas, deer trails, or the Cooper River Greenway may benefit from additional treatment frequency during peak spring and fall tick activity windows."
      }
    },
    {
      "@type": "Question",
      "name": "Is tick treatment safe for children and pets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our tick treatments use EPA-registered products applied to vegetation and lawn borders — not indoor living areas. We provide a re-entry time (typically 30-60 minutes after treatment dries) after which the treated area is safe for children and pets. We also offer biological tick control options using entomopathogenic fungi."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer tick treatment near the Cooper River Greenway?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We serve all communities along the Cooper River watershed including Cherry Hill, Pennsauken, Collingswood, Haddon Township, and Haddonfield. Yards backing up to the Greenway trail system or adjacent wooded areas receive our highest-priority tick management recommendations."
      }
    }
  ]
};

export default function TickControlPage() {
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
          <span className="text-gray-900">Tick Control</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🦟 Tick Control Camden County, NJ
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional tick yard treatment serving all of Camden County &mdash; Cherry Hill, Voorhees, Winslow Township, Haddonfield, Collingswood &amp; more. Protect your family from Lyme disease-carrying deer ticks. Monthly barrier spray programs available.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { stat: 'Monthly', label: 'Barrier Programs' },
            { stat: 'Licensed', label: 'NJ Applicators' },
            { stat: 'Free', label: 'Yard Assessments' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-brand-light rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-primary">{stat}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        <div className="bg-brand-primary rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-white">
            <h2 className="text-xl font-bold mb-1">Tick Problem in Camden County?</h2>
            <p className="opacity-90 text-sm">Protect your yard and family from ticks throughout the Cooper River watershed and beyond.</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tick Control for Camden County Yards and Properties</h2>
          <div className="prose prose-lg max-w-none">
            <p>Camden County sits within New Jersey&rsquo;s highest-risk zone for Lyme disease transmission. The combination of the Cooper River Greenway trail system, proximity to the Pine Barrens in Winslow Township and Waterford Township, and abundant white-tailed deer populations in Cherry Hill, Voorhees, and Haddon Township creates sustained deer tick pressure throughout the spring, summer, and fall seasons. Our licensed tick control specialists provide professional yard treatment programs that reduce tick populations in the areas where your family actually spends time &mdash; lawn borders, landscape beds, wooded edges, and children&rsquo;s play areas.</p>

            <h3>Tick Species in Camden County and the Diseases They Carry</h3>
            <p><strong>Deer ticks (Ixodes scapularis)</strong> &mdash; also called black-legged ticks &mdash; are the primary Lyme disease vector in South Jersey. Nymphal deer ticks, active from May through July, are the size of a poppy seed and responsible for the majority of Lyme disease cases in Camden County because they go undetected. Adult deer ticks peak in activity in fall (October through December) and early spring. They are most concentrated along the edges where lawn meets vegetation &mdash; exactly where families and pets spend time outdoors.</p>
            <p><strong>American dog ticks</strong> are larger and more visible but carry Rocky Mountain spotted fever. They are common across Camden County&rsquo;s suburban lawns, parks, and open areas. Unlike deer ticks, dog ticks require several hours of attachment to transmit disease, giving a critical window for post-outdoor tick checks.</p>
            <p><strong>Lone star ticks</strong> are aggressively expanding northward into South Jersey. They have been confirmed in Camden County and surrounding counties. Their bite can cause alpha-gal syndrome &mdash; a meat allergy &mdash; in addition to other illness. Their active host-seeking behavior (questing from vegetation and crawling toward hosts) makes them more likely to be encountered than deer ticks in some areas.</p>

            <h3>High-Risk Areas in Camden County for Tick Exposure</h3>
            <p>Cooper River Greenway trail users in Cherry Hill, Pennsauken, and Haddon Township face consistent deer tick exposure, particularly in sections where the trail passes through wooded or brushy terrain. Winslow Township and Waterford Township homes bordering the Pinelands experience the highest overall tick pressure in the county. Voorhees Township&rsquo;s wooded lot neighborhoods, particularly near Kresson Road and the Voorhees Town Center border areas, see significant tick activity from April through November. Even suburban Cherry Hill backyards backing up to landscape buffers, retention areas, or neighbor wooded lots carry meaningful tick risk without professional treatment.</p>

            <h3>Professional Tick Barrier Treatment: How It Works</h3>
            <p>Our tick control program focuses on the &ldquo;tick zone&rdquo; &mdash; the border between manicured lawn and surrounding vegetation where ticks quest for hosts. We apply EPA-registered barrier spray treatments to tall grass, brush edges, groundcover, landscape beds, and wooded perimeter areas using backpack and ride-on equipment. A single treatment provides three to four weeks of residual tick suppression. Monthly treatments from April through October maintain effective protection throughout the active tick season. We also treat leaf litter accumulation areas, stone walls, and wood pile borders that serve as overwintering habitat.</p>

            <h3>Tick Control for Specific Camden County Properties</h3>
            <ul>
              <li>Residential yards in Cherry Hill, Voorhees, and Haddonfield</li>
              <li>Properties adjacent to the Cooper River Greenway in Pennsauken and Collingswood</li>
              <li>Winslow Township and Waterford Township homes near conservation land</li>
              <li>Gloucester Township residential neighborhoods with wooded borders</li>
              <li>Haddon Township and Haddon Heights older neighborhoods with mature tree canopy</li>
              <li>HOA communities and common areas throughout Camden County</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tick Control Camden County &mdash; FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "What tick species are present in Camden County, NJ?",
                a: "Camden County has three primary tick species: deer ticks (the Lyme disease vector, most common in wooded areas near Winslow Township and the Cooper River Greenway), American dog ticks (common in lawn borders throughout Cherry Hill and Voorhees), and lone star ticks (expanding northward into South Jersey)."
              },
              {
                q: "How often should I treat my yard for ticks in Camden County?",
                a: "We recommend monthly barrier spray treatments from April through October. Homes adjacent to wooded conservation areas, deer trails, or the Cooper River Greenway may benefit from additional frequency during peak spring and fall tick windows."
              },
              {
                q: "Is tick treatment safe for children and pets?",
                a: "Yes. Treatments are applied to vegetation and lawn borders, not indoor areas. A standard re-entry window of 30 to 60 minutes after the product dries applies, after which treated areas are safe for children and pets."
              },
              {
                q: "Do you offer tick treatment near the Cooper River Greenway?",
                a: "Yes. We serve all communities along the Cooper River watershed including Cherry Hill, Pennsauken, Collingswood, Haddon Township, and Haddonfield. Greenway-adjacent yards receive priority tick management recommendations."
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">Why Choose Our Camden County Tick Control Service?</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Licensed &amp; insured NJ pesticide applicators</li>
            <li>✅ Monthly barrier spray programs for season-long protection</li>
            <li>✅ Targeted treatment of actual tick zones, not broadcast lawn spraying</li>
            <li>✅ Deer tick, dog tick, and lone star tick control</li>
            <li>✅ Serving Cooper River Greenway communities and Pinelands-border townships</li>
            <li>✅ Free yard tick assessments available</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Tick Control for Your Camden County Yard</h2>
          <p className="text-gray-600 mb-6">Protect your family from Lyme disease-carrying ticks throughout Camden County, NJ.</p>
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
