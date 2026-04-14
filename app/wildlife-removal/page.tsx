import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: `Wildlife Removal Camden County NJ | Raccoons, Squirrels | ${SITE_NAME}` },
  description: `Humane wildlife removal serving Camden County, NJ. Raccoons, squirrels, groundhogs, opossums in Cherry Hill, Voorhees, Haddon Township & more. Licensed NJ wildlife control. Call (856) 600-0812.`,
  alternates: { canonical: `${SITE_URL}/wildlife-removal/` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What wildlife species do you remove in Camden County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We remove raccoons, gray squirrels, flying squirrels, groundhogs, opossums, and skunks throughout Camden County. We serve Cherry Hill, Voorhees, Haddon Township, Haddonfield, Gloucester Township, Winslow Township, and all surrounding communities. We use humane trapping methods and include full exclusion sealing to prevent re-entry."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you respond to a wildlife problem in Camden County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day and next-day wildlife removal service throughout Camden County for urgent situations. Raccoons in attics, squirrels in walls, and skunk situations near homes are priority service calls. Call (856) 600-0812 for immediate scheduling."
      }
    },
    {
      "@type": "Question",
      "name": "Why is exclusion sealing required after wildlife removal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trapping and removing an animal without sealing the entry point guarantees re-infestation by a new animal within weeks. The entry point is the problem — not the individual animal. We seal all identified entry points using galvanized steel mesh, metal flashing, and commercial-grade vent covers that withstand wildlife pressure long-term."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle raccoon removal in Cherry Hill and Voorhees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Raccoon removal is one of our most common service calls in Cherry Hill, Voorhees, and Haddon Township. Camden County's wooded lot neighborhoods and mature tree canopy support large raccoon populations. We handle humane trapping, exclusion sealing, and attic decontamination when feces or urine contamination requires it."
      }
    }
  ]
};

export default function WildlifeRemovalPage() {
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
          <span className="text-gray-900">Wildlife Removal</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🦝 Wildlife Removal Camden County, NJ
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Humane wildlife removal and exclusion serving all of Camden County &mdash; Cherry Hill, Voorhees, Haddon Township, Gloucester Township, Winslow Township &amp; more. Raccoons, squirrels, groundhogs, opossums, and skunks. Same-day service available.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { stat: 'Same-Day', label: 'Service Available' },
            { stat: 'Humane', label: 'Trapping Methods' },
            { stat: 'Licensed', label: 'NJ Wildlife Control' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-brand-light rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-primary">{stat}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        <div className="bg-brand-primary rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-white">
            <h2 className="text-xl font-bold mb-1">Wildlife in Your Camden County Home?</h2>
            <p className="opacity-90 text-sm">Raccoons, squirrels, and groundhogs removed humanely. Same-day service available throughout South Jersey.</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Wildlife Removal and Exclusion Throughout Camden County</h2>
          <div className="prose prose-lg max-w-none">
            <p>Camden County&rsquo;s mix of suburban neighborhoods, mature tree canopy, and proximity to the Pine Barrens in Winslow Township and Waterford Township creates consistent wildlife pressure throughout the county. Raccoons and squirrels find entry points into attics across Cherry Hill, Voorhees, and Haddon Township. Groundhogs burrow under decks and sheds in Gloucester Township and Winslow Township. Opossums and skunks take up residence under porches and in crawl spaces across South Jersey&rsquo;s older residential neighborhoods. Our licensed wildlife removal specialists provide humane trapping, complete exclusion sealing, and attic decontamination when damage requires it.</p>

            <h3>Raccoon Removal in Camden County</h3>
            <p>Raccoons are the most destructive wildlife species entering Camden County homes. They tear through roof vents, push aside ridge caps, and rip open soffits to access attics for denning &mdash; particularly during late winter when females seek protected nesting sites before giving birth in spring. A raccoon in your Cherry Hill or Voorhees attic in February or March means cubs will arrive within weeks, making removal significantly more complex. Raccoon roundworm (Baylisascaris procyonis) in feces poses a genuine health risk requiring professional decontamination rather than DIY cleanup. We handle raccoon trapping, entry point sealing, and attic remediation as an integrated service.</p>

            <h3>Squirrel Removal in Camden County</h3>
            <p>Gray squirrels enter homes through gaps at fascia boards, ridge vents, and where utility lines attach to structures. They chew constantly to maintain their teeth, causing wiring damage that creates real fire risk in Haddonfield, Haddon Township, and Collingswood&rsquo;s older housing stock. Eastern Camden County&rsquo;s mature oak and maple canopy provides abundant squirrel habitat directly adjacent to homes. Flying squirrels are nocturnal and often undetected until populations grow large &mdash; common in wooded Winslow Township neighborhoods near the Pine Barrens transition zone. We provide live trapping of gray squirrels and population management for flying squirrel infestations, followed by complete exclusion sealing to prevent re-entry.</p>

            <h3>Groundhog and Opossum Removal</h3>
            <p>Groundhogs (woodchucks) are common across Gloucester Township, Winslow Township, and the larger-lot neighborhoods of Cherry Hill and Voorhees. They excavate extensive burrow systems under decks, sheds, HVAC equipment pads, and outbuildings, undermining foundations over time. Opossums occupy crawl spaces and the areas under decks and porches throughout Camden County, producing odor and sanitation concerns. Both species are handled with professional trapping and habitat modification to discourage return.</p>

            <h3>Skunk Removal and Odor Remediation</h3>
            <p>Skunks nesting in crawl spaces or under decks in Audubon, Barrington, or Haddon Heights create persistent odor problems that permeate the entire home and require professional remediation to resolve. We remove skunks using specialized equipment and low-stress trapping methods that minimize spray risk, followed by odor treatment and entry point sealing.</p>

            <h3>The Complete Wildlife Removal Process</h3>
            <p>Effective wildlife management requires three phases working together:</p>
            <ul>
              <li><strong>Inspection</strong>: Thorough assessment of all entry points, damage areas, and wildlife activity signs</li>
              <li><strong>Humane trapping and removal</strong>: Species-appropriate trapping methods in compliance with NJ Division of Fish and Wildlife regulations</li>
              <li><strong>Exclusion sealing</strong>: Professional-grade galvanized steel mesh, metal flashing, and commercial vent covers that hold where plastic alternatives fail</li>
              <li><strong>Decontamination</strong> (when indicated): Attic and crawl space remediation for feces and urine contamination</li>
            </ul>

            <h3>Areas We Serve for Wildlife Removal</h3>
            <ul>
              <li>Cherry Hill wildlife removal &mdash; raccoons, squirrels, groundhogs</li>
              <li>Voorhees Township wildlife control</li>
              <li>Haddon Township and Haddonfield wildlife removal</li>
              <li>Gloucester Township and Winslow Township wildlife control</li>
              <li>Collingswood, Audubon, and Haddon Heights wildlife removal</li>
              <li>All Camden County communities</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Wildlife Removal Camden County &mdash; FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "What wildlife species do you remove in Camden County?",
                a: "We remove raccoons, gray squirrels, flying squirrels, groundhogs, opossums, and skunks throughout all of Camden County. Humane trapping and full exclusion sealing are included."
              },
              {
                q: "How quickly can you respond to a wildlife problem in Camden County?",
                a: "Same-day and next-day service is available throughout Camden County for urgent situations. Raccoons in attics, squirrels in walls, and skunk situations are priority calls. Call (856) 600-0812 for immediate scheduling."
              },
              {
                q: "Why is exclusion sealing required after wildlife removal?",
                a: "Removing the animal without sealing the entry point guarantees re-infestation by a new animal within weeks. We seal all identified entry points using galvanized steel mesh, metal flashing, and commercial-grade vent covers that hold long-term."
              },
              {
                q: "Do you handle raccoon removal in Cherry Hill and Voorhees?",
                a: "Yes. Raccoon removal is one of our most frequent service calls in Cherry Hill, Voorhees, and Haddon Township. We handle trapping, exclusion sealing, and attic decontamination when needed."
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">Why Choose Our Camden County Wildlife Removal Service?</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Licensed NJ wildlife control operators</li>
            <li>✅ Same-day service for urgent situations</li>
            <li>✅ Humane trapping methods throughout</li>
            <li>✅ Complete exclusion sealing included &mdash; not just trapping</li>
            <li>✅ Attic decontamination services available</li>
            <li>✅ Serving all 16 municipalities in Camden County</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Wildlife Removed from Your Camden County Property</h2>
          <p className="text-gray-600 mb-6">Humane wildlife removal with complete exclusion sealing. Same-day service available throughout South Jersey.</p>
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
