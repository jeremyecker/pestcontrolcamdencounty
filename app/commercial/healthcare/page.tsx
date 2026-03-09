import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Healthcare Pest Control — Camden County, NJ | Zero-Tolerance IPM',
  description:
    'JCAHO-compliant, zero-tolerance pest control for hospitals, urgent care centers & medical offices in Cherry Hill, Voorhees & Camden County NJ. Call (856) 600-0812.',
  keywords:
    'healthcare pest control Camden County NJ, hospital pest control NJ, JCAHO pest control, IPM healthcare facility NJ, Cooper Hospital pest control, medical office exterminator Cherry Hill',
};

const faqItems = [
  {
    question: 'What does "zero-tolerance" pest control mean for healthcare facilities?',
    answer: 'Zero-tolerance means that a single pest sighting in a patient area, sterile supply room, or food service area is treated as an emergency requiring immediate response, not a scheduled service visit. It means that monitoring is designed to detect pest activity at the absolute earliest stage — before patients or staff ever see a pest. And it means that all treatment protocols are designed to eliminate pests without creating any chemical exposure risk to medically vulnerable patients.',
  },
  {
    question: 'How do you handle pest control in patient areas and operating rooms?',
    answer: 'Patient rooms, ICUs, and operating theaters require treatments that use no chemical products with any potential airborne exposure risk. In these areas, we rely exclusively on non-chemical IPM tools: physical exclusion, tamper-resistant monitoring devices, pheromone traps, and glue boards placed out of patient and staff reach. Any corrective treatment requiring chemical application is performed during scheduled facility downtime, with full coordination with your infection control and facilities management teams.',
  },
  {
    question: 'Are your programs JCAHO compliant?',
    answer: 'Yes. The Joint Commission on Accreditation of Healthcare Organizations (JCAHO) expects healthcare facilities to maintain a pest-free environment and to have documented pest management protocols. Our healthcare programs provide the written IPM plan, service documentation, corrective action records, and audit-ready reporting that JCAHO surveyors expect. We coordinate with your Environment of Care (EOC) team to ensure our program aligns with your accreditation documentation.',
  },
  {
    question: 'What notification do you give before treating a healthcare facility?',
    answer: 'We coordinate every service visit with your facilities manager and infection control team in advance. For any treatment requiring chemical application, we provide advance notice sufficient for patient and staff preparation, product Safety Data Sheets (SDS), and post-treatment clearance procedures. We never apply chemical treatments in healthcare settings without the explicit knowledge and approval of your facility management team.',
  },
  {
    question: 'Do you serve urgent care centers and outpatient facilities in addition to hospitals?',
    answer: 'Yes. While we have experience with the complexity of large hospital campuses like Jefferson (formerly Kennedy) and Cooper University Health System facilities, the majority of our healthcare clients are urgent care centers, outpatient surgery centers, medical office buildings, dental practices, and specialty clinics throughout Cherry Hill, Voorhees, and the broader Camden County area. All receive the same zero-tolerance, IPM-based approach.',
  },
];

export default function HealthcarePestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <Link href="/commercial" className="hover:text-[#2B6CB0]">Commercial</Link>
        {' → '}
        <span className="text-gray-900">Healthcare</span>
      </nav>

      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Healthcare Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Zero-tolerance IPM programs for hospitals, urgent care centers, and medical offices throughout Cherry Hill, Voorhees, and Camden County. JCAHO-compliant documentation.
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
            Pest Control for Camden County's Healthcare Facilities
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Camden County is home to a dense concentration of healthcare facilities spanning the full spectrum of medical care — from the major hospital campuses of Jefferson Health (formerly Kennedy Health System) in Cherry Hill and Washington Township, and Cooper University Health System in Camden City, to the dozens of urgent care centers, outpatient surgery centers, medical office buildings, behavioral health facilities, and specialty clinics that have opened throughout Cherry Hill, Voorhees, and the surrounding communities over the past two decades.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Pest control in healthcare settings demands a fundamentally different approach than commercial pest management in other industries. The patients served by healthcare facilities include immunocompromised individuals, surgical patients, neonates, and others for whom a pest-related pathogen exposure or an inappropriate chemical application could have serious health consequences. This reality drives everything about how we design and execute healthcare pest management programs — from the products we select (and equally, the ones we refuse to use) to the notification protocols we follow before every treatment.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The New Jersey Department of Health (NJDOH) has specific guidelines for pest management in licensed healthcare facilities that align with the broader federal infection control framework. The Joint Commission on Accreditation of Healthcare Organizations (JCAHO) includes pest management in its Environment of Care standards — and surveyors who find evidence of pest activity or inadequate pest management documentation during accreditation surveys can issue findings that jeopardize a facility's accreditation status. Our programs are designed to produce the documentation and operational outcomes that satisfy both NJDOH and JCAHO expectations.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every healthcare pest control program we develop begins with a comprehensive facility assessment coordinated with your infection control officer, facilities director, and Environment of Care committee. We map every area of your facility, assign risk classifications (patient care areas, sterile supply, food service, administrative, exterior), and build a program that matches the treatment approach to the risk level of each zone.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Common Pests in Healthcare Facilities</h2>
          <div className="space-y-4">
            {[
              { pest: 'German Cockroaches', risk: 'Critical', detail: 'Frequently introduced via food service deliveries, linen carts, and medical supply shipments. Carry Salmonella, Pseudomonas, and other nosocomial pathogens. Immediate response required for any sighting in patient care areas.' },
              { pest: 'House Mice & Norway Rats', risk: 'Critical', detail: 'Enter through loading docks, utility chases, and HVAC infrastructure common in large hospital buildings. Carry Hantavirus, Leptospira, and Salmonella. Must be controlled before reaching patient areas.' },
              { pest: 'Pharaoh Ants', risk: 'High', detail: 'A specific healthcare pest threat. Pharaoh ants have been documented transmitting Salmonella and Staphylococcus in hospital settings. They are extremely difficult to control with standard perimeter treatments and require specialized baiting protocols.' },
              { pest: 'Stored Product Pests', risk: 'Moderate', detail: 'Food service kitchens in hospital settings are subject to the same stored product pest pressures as commercial restaurants. Regular monitoring of receiving areas and dry goods storage is essential.' },
              { pest: 'Flies', risk: 'High', detail: 'Filth flies in food service and waste handling areas represent a pathogen transmission risk. Fungus gnats and drain flies in patient care restrooms are a frequent source of patient and staff complaints.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#1A365D]">{item.pest}</h3>
                  <span className={`text-sm font-semibold px-2 py-1 rounded ${item.risk === 'Critical' ? 'bg-red-100 text-red-700' : item.risk === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {item.risk} Risk
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Healthcare IPM Protocols</h2>
          <div className="space-y-4">
            {[
              { title: 'Zone-Based Treatment Approach', desc: 'We classify your facility into treatment zones based on patient vulnerability and regulatory requirements. Patient care areas receive non-chemical IPM only. Support areas receive targeted treatments with advance coordination. Exterior and administrative areas can receive standard commercial treatments.' },
              { title: 'Patient Area Restrictions', desc: 'No chemical applications in patient rooms, ICUs, operating rooms, NICU, sterile supply, or pharmacy areas. Physical exclusion, tamper-resistant monitoring, and cultural controls (sanitation, waste management) are the tools for these zones.' },
              { title: 'Pre-Treatment Notification', desc: 'All chemical treatments require advance coordination with your infection control and facilities teams, SDS sheet provision, appropriate wait times before patient and staff re-entry, and post-treatment documentation.' },
              { title: 'JCAHO Documentation', desc: 'Written IPM plan, service reports, pest activity trending, corrective action records, and product use logs maintained in audit-ready format for Environment of Care committee review and JCAHO surveys.' },
              { title: 'Emergency Response Protocol', desc: 'Any pest sighting in a patient care area triggers same-day emergency response. We maintain priority scheduling for all healthcare facility clients with defined response time commitments.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#DD6B20] font-bold text-xl">→</span>
                <div>
                  <strong className="text-[#1A365D]">{item.title}:</strong>{' '}
                  <span className="text-gray-700">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
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
              <p className="text-gray-600 text-sm">Camden County service area</p>
            </Link>
            <Link href="/camden-county/cherry-hill" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Cherry Hill Pest Control →</strong>
              <p className="text-gray-600 text-sm">Serving Cherry Hill healthcare facilities</p>
            </Link>
            <Link href="/camden-county/voorhees" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Voorhees Pest Control →</strong>
              <p className="text-gray-600 text-sm">Voorhees medical campus coverage</p>
            </Link>
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">Healthcare Pest Control — Camden County</h2>
          <p className="text-gray-700 text-lg mb-6">Contact us to schedule a free healthcare facility assessment and discuss a JCAHO-compliant IPM program for your facility.</p>
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
                name: 'Camden County Pest Control — Healthcare Division',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/commercial/healthcare',
                description: 'Zero-tolerance IPM pest control for healthcare facilities across Camden County NJ, including hospitals, urgent care centers, and medical offices.',
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
