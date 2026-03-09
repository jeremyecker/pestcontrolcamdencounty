import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Retail Pest Control — Camden County, NJ | Cherry Hill Mall & Shopping Centers',
  description:
    'Professional pest control for retail stores, shopping centers & malls across Camden County NJ. Cherry Hill Mall, Voorhees Town Center, Marlton Crossing & more. Call (856) 600-0812.',
  keywords:
    'retail pest control Camden County NJ, Cherry Hill Mall pest control, shopping center exterminator NJ, Voorhees Town Center pest control, pest control retail store South Jersey',
};

const faqItems = [
  {
    question: 'How do you handle pest control in a retail store without disrupting customers?',
    answer: 'We schedule all visible treatment work during non-operating hours — before store opening or after close. Monitoring devices (tamper-resistant bait stations, glue monitors) can be serviced during business hours with no customer disruption. Our technicians work in professional uniforms with discreet equipment. For mall-based retailers, we coordinate with mall management and security for access during off-hours.',
  },
  {
    question: 'What are the most common pests in South Jersey retail stores?',
    answer: 'Rodents in back-stock areas and loading docks are the most reported retail pest issue in Camden County. Cockroaches — German cockroaches in stores with food service components, and American cockroaches in stock rooms that share walls with restaurants or food courts — are close behind. Ants trail from perimeter entry points to food-related products on shelves. Stored product pests (beetles, moths) infest dry goods and natural fiber products when receiving inspections are inadequate.',
  },
  {
    question: 'Cherry Hill Mall has many restaurants and food service tenants. Does that affect pest risk for non-food retailers?',
    answer: 'Absolutely. In a mixed-use retail environment like Cherry Hill Mall or Voorhees Town Center, food court waste management, shared utility chases, and common wall construction mean that pest activity in food service tenants can migrate to adjacent non-food retail spaces. Our retail programs include assessments of shared-wall risk and specific protocols for stores adjacent to food service operations.',
  },
  {
    question: 'How do I prevent pests from coming in with new merchandise deliveries?',
    answer: 'Incoming deliveries are one of the most overlooked pest introduction vectors in retail. Cardboard boxes, wooden pallets, and soft goods shipments can all carry pest introductions. We provide written receiving area protocols including pallet inspection procedures, cardboard recycling practices, and staging area management guidelines that significantly reduce introduction risk.',
  },
  {
    question: 'Do you service large-format retail (home improvement, grocery, sporting goods)?',
    answer: 'Yes. Large-format retailers present pest management challenges at a different scale — with extensive receiving docks, large storage areas, seasonal garden and outdoor merchandise, and food service components in many stores. We design programs appropriate for the size and operational complexity of large-format retail throughout Camden County.',
  },
];

export default function RetailPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <Link href="/commercial" className="hover:text-[#2B6CB0]">Commercial</Link>
        {' → '}
        <span className="text-gray-900">Retail</span>
      </nav>

      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Retail Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Discreet, effective pest management for Cherry Hill Mall, Voorhees Town Center, Marlton Crossing, and every retail location across Camden County. Rodents, cockroaches, and pests handled before your customers notice.
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
            Pest Control for Camden County's Retail Environment
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Camden County's retail sector is anchored by three major shopping centers: Cherry Hill Mall on Route 38, one of the largest and oldest enclosed malls in the country; Voorhees Town Center in Voorhees Township; and Marlton Crossing on Route 73 in Evesham. Surrounding these anchors is a dense network of strip shopping centers, lifestyle centers, power centers, and neighborhood retail nodes that line the major commercial corridors of Route 38, Route 70, Route 73, Route 130, and Haddonfield Road.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            For retail tenants and property managers throughout Camden County, pest control is a customer experience and brand reputation issue as much as it is an operational one. A customer who sees a mouse in the back corner of your store, a cockroach near the checkout counter, or rodent droppings near a product display does not just leave — they tell their friends, they post on social media, and they may not come back. In the competitive Camden County retail market, where consumers have abundant alternatives, a pest-related incident can have lasting effects on foot traffic and sales.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The back-stock areas, receiving docks, and storage rooms of retail establishments are pest harborage hotspots that customers never see — but that drive pest pressure into the selling floor if not managed proactively. Norway rats and house mice concentrate in these areas because of the food items, cardboard boxes, and quiet undisturbed spaces common to retail storage. German cockroaches thrive in any back-of-house areas shared with food service tenants, which applies to a large percentage of the retail tenants in Cherry Hill Mall's and Voorhees Town Center's food court adjacent sections.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our retail pest control programs address the full facility — selling floor, stock room, receiving dock, exterior perimeter, and shared-wall interfaces with neighboring tenants — using IPM protocols that balance effective pest management with the scheduling and discretion requirements of a customer-facing retail business.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Common Retail Pests in Camden County</h2>
          <div className="space-y-4">
            {[
              { pest: 'Rodents in Back-Stock Areas', detail: 'House mice and Norway rats concentrate in receiving docks, stock rooms, and areas with product packaging. They damage merchandise, contaminate products, and create liability exposure when discovered by customers or health inspectors.' },
              { pest: 'Cockroaches Near Food Courts', detail: 'Retailers sharing walls with restaurants or food courts face heightened cockroach pressure from shared utility chases and wall voids. German cockroaches particularly move freely between food service and adjacent retail via plumbing and electrical penetrations.' },
              { pest: 'Stored Product Pests', detail: 'Retailers carrying dry foods, pet products, natural fiber goods, or seasonal items are vulnerable to beetle and moth infestations introduced via incoming shipments. Early detection through monitoring is critical to preventing widespread inventory damage.' },
              { pest: 'Ants', detail: 'Perimeter-entry ants — odorous house ants, pavement ants, and carpenter ants — trail from exterior walls into retail spaces, particularly in spring. Exterior treatment and gap sealing provide long-term control.' },
              { pest: 'Flies', detail: 'Retailers with outdoor merchandise displays, garden centers, or adjacent food service tenants face fly pressure that creates a poor customer experience. Source identification and targeted management reduce fly presence in selling areas.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-[#1A365D] text-lg mb-2">{item.pest}</h3>
                <p className="text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Pest-Proofing During Deliveries</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Every delivery truck that arrives at a retail receiving dock is a potential pest introduction event. Mice and cockroaches hide in cardboard boxes, wooden shipping pallets, and bulk merchandise packaging. Once inside your facility, they are extremely difficult to eliminate because they have immediate access to hiding spots, food, and water throughout the building.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our retail programs include specific receiving area protocols: inspection procedures for incoming pallets and cartons, cardboard staging and disposal schedules that prevent cardboard accumulation (a primary rodent harborage material), dock door management to minimize the time loading doors are open, and clear buffer zones between receiving areas and retail storage.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            These protocols are simple, practical, and effective — and they significantly reduce the frequency and severity of pest introductions in retail facilities that implement them consistently.
          </p>
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
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Pest Control Near Me →</strong>
              <p className="text-gray-600 text-sm">Camden County coverage</p>
            </Link>
            <Link href="/camden-county/cherry-hill" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Cherry Hill Pest Control →</strong>
              <p className="text-gray-600 text-sm">Cherry Hill Mall area coverage</p>
            </Link>
            <Link href="/camden-county/voorhees" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Voorhees Pest Control →</strong>
              <p className="text-gray-600 text-sm">Voorhees Town Center coverage</p>
            </Link>
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">Protect Your Retail Store from Pests</h2>
          <p className="text-gray-700 text-lg mb-6">Free commercial assessment for Camden County retail locations. Call or contact us today.</p>
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
                name: 'Camden County Pest Control — Retail',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/commercial/retail',
                description: 'Retail pest control for Cherry Hill Mall, Voorhees Town Center, Marlton Crossing, and shopping centers throughout Camden County NJ.',
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
