import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Hotel Pest Control — Camden County, NJ | Bed Bug Prevention Programs',
  description:
    'Bed bug prevention, guest room inspection protocols & fast-response pest control for hotels along Route 70/38 in Cherry Hill & Camden County NJ. Call (856) 600-0812.',
  keywords:
    'hotel pest control Camden County NJ, bed bug hotel Cherry Hill NJ, hospitality pest control South Jersey, hotel exterminator NJ, bed bug prevention hotel program',
};

const faqItems = [
  {
    question: 'How quickly can you respond to a bed bug report in a hotel guest room?',
    answer: 'For hotel accounts on our service contract, we provide same-day emergency response for any guest room bed bug report. We understand that a guest with a bed bug complaint needs to be relocated immediately, and that the affected room must be assessed and treated before it can be returned to inventory. We maintain priority scheduling for hospitality clients specifically because the timeline pressure in a hotel setting is unlike any other commercial environment.',
  },
  {
    question: 'What does a bed bug prevention program for a hotel include?',
    answer: 'Our hotel bed bug prevention program includes regular (monthly or quarterly) proactive inspections of all guest rooms using trained technicians and canine detection where available, staff training on identifying early bed bug signs during housekeeping, immediate response inspections for any guest report or housekeeping finding, treatment of confirmed infestations with heat or chemical treatment, adjacent room inspection and preventive treatment, and documentation of all inspections and treatments.',
  },
  {
    question: 'Can you train our housekeeping staff to identify bed bugs?',
    answer: 'Yes. Housekeeping staff are the first line of defense in any hotel bed bug prevention program. We provide staff training covering early signs of bed bug activity (fecal staining, shed skins, live bugs in common harborage areas), the specific areas to check during room cleaning, and how to report suspected findings to management. Well-trained housekeeping staff catch infestations at the earliest stage — before they spread to adjacent rooms.',
  },
  {
    question: 'What other pests besides bed bugs are common in Camden County hotels?',
    answer: 'German cockroaches are found in hotel food service operations, housekeeping storage areas, and vending machine rooms. Rodents affect lower-floor rooms adjacent to exterior walls and mechanical spaces. Ants trail into ground-floor rooms through perimeter entry points. Drain flies appear in restrooms with floor drains. Our hotel pest programs address all of these pests in addition to bed bugs.',
  },
  {
    question: 'Do you provide documentation for hotel brand standard audits?',
    answer: 'Yes. Many hotel brands (Marriott, Hilton, IHG, and others) conduct property condition assessments that include pest management review. We provide service contracts, inspection records, treatment documentation, and pest trending reports formatted to support brand standard compliance. We have experience working with properties across multiple national hotel brands operating in the Camden County market.',
  },
];

export default function HospitalityPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <Link href="/commercial" className="hover:text-[#2B6CB0]">Commercial</Link>
        {' → '}
        <span className="text-gray-900">Hospitality</span>
      </nav>

      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hotel &amp; Hospitality Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Bed bug prevention programs, guest room inspection protocols, and fast-response service for Route 70/38 hotels and hospitality properties throughout Cherry Hill and Camden County.
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
            Pest Control for Cherry Hill and Camden County Hotels
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Route 70 and Route 38 corridors in Cherry Hill host a significant concentration of hotel and hospitality properties serving the South Jersey market — corporate travelers connected to the county's office parks, medical visitors to Jefferson and Cooper health systems, leisure travelers visiting the Philadelphia metropolitan area, and event guests attending the numerous wedding venues, conference centers, and sports facilities throughout Camden County. These properties range from major national brand hotels to independent boutique lodging and extended-stay properties.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Pest control in a hotel environment is uniquely challenging because the guest room is the product. Unlike a restaurant kitchen or a warehouse, where pests can be managed in back-of-house areas with minimal guest visibility, a single bed bug in a guest room is immediately visible to the guest and creates an experience that spreads instantly through review platforms. A single TripAdvisor or Google Review mentioning bed bugs can suppress bookings for months — regardless of how quickly the property addresses the problem. In the hotel business, the cost of a pest incident is not just the treatment; it is the lost revenue, the rebooking costs, the comp nights, and the reputational damage that persists long after the pest is gone.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Bed bugs are the dominant pest concern in every hotel property we serve throughout Camden County. Bed bugs are introduced by guests arriving from infested homes, hotels, or travel accommodations and can spread from a single room to adjacent rooms through shared wall voids and under room doors within weeks of introduction. A proactive bed bug prevention program — with regular room inspections and immediate response to any findings — is the only effective approach for hotels in a high-traveler-volume market like Cherry Hill.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our hospitality pest control programs are built around the operational realities of hotel management: rooms need to be back in inventory as quickly as possible, guest disruption must be minimized, staff need to be trained and empowered to catch problems early, and documentation must be maintained for brand standard audits and any legal questions that arise from guest complaints.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Hotel Pest Management Program Components</h2>
          <div className="space-y-5">
            {[
              { title: 'Proactive Room Inspections', detail: 'Regular inspection of all guest rooms on a rotating schedule — focusing on highest-risk areas (headboards, box springs, nightstand joints, luggage racks, upholstered furniture seams). Early detection dramatically reduces the scope and cost of treatment when infestations are found.' },
              { title: 'Housekeeping Staff Training', detail: 'Housekeeping teams are the front line of pest detection. We provide practical training on identifying early bed bug indicators, the most important areas to check during room turnover, and the reporting protocol for any suspicious findings.' },
              { title: 'Guest Complaint Response', detail: 'Same-day inspection and treatment planning for any guest bed bug report. We provide documentation of our response for guest relations and risk management purposes.' },
              { title: 'Adjacent Room Protocols', detail: 'Confirmed bed bug infestations trigger inspection of all immediately adjacent rooms (above, below, and both sides). Preventive treatment of adjacent rooms based on inspection findings reduces spread risk significantly.' },
              { title: 'Food Service & Back-of-House', detail: 'Hotel food service operations, vending areas, laundry facilities, and mechanical spaces receive regular IPM service to manage cockroaches, rodents, flies, and other non-bed-bug pests that affect guest experience.' },
              { title: 'Brand Audit Documentation', detail: 'Complete service records, inspection logs, treatment documentation, and pest trending reports maintained for brand standard compliance and property condition assessment reviews.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-[#1A365D] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Why Service Contracts Matter for Hotels</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Hotels that rely on reactive pest control — calling only when a guest complains — are perpetually behind the problem. By the time a guest reports bed bugs, the infestation has typically been present for weeks or months. By the time cockroaches are visible in a food service area, the population is already large. The cost of eliminating an established infestation is dramatically higher than the cost of a prevention program that catches it early.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            A service contract also provides the legal protection of documented due diligence. If a guest makes a claim related to pest exposure at your property, your service records demonstrating proactive, professional pest management are your best defense. Hotels without documented pest control programs are significantly more exposed in any legal dispute with a guest making pest-related claims.
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
              <p className="text-gray-600 text-sm">Route 70/38 hotel corridor</p>
            </Link>
            <Link href="/services/bed-bug-removal" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Bed Bug Removal →</strong>
              <p className="text-gray-600 text-sm">Heat treatment & chemical options</p>
            </Link>
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">Protect Your Hotel's Reputation</h2>
          <p className="text-gray-700 text-lg mb-6">Free hospitality pest assessment for Camden County hotels. Same-day emergency response for active issues.</p>
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
                name: 'Camden County Pest Control — Hospitality',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/commercial/hospitality',
                description: 'Hotel and hospitality pest control with bed bug prevention programs for Cherry Hill and Camden County NJ.',
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
