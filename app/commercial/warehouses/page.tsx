import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Warehouse Pest Control — Camden County, NJ | Rodent Exclusion Specialists',
  description:
    'Rodent exclusion, dock door sealing & comprehensive pest control for warehouses in Pennsauken Industrial Park, Gloucester City port & Winslow Township. Call (856) 600-0812.',
  keywords:
    'warehouse pest control Camden County NJ, rodent control warehouse Pennsauken, pest control distribution center NJ, dock door rodent exclusion, industrial pest control South Jersey',
};

const faqItems = [
  {
    question: 'How do rodents get into warehouses so easily?',
    answer: 'Loading dock doors are the primary entry point. Even a properly functioning dock door leaves gaps at the floor, sides, and corners that mice can exploit. Norway rats can squeeze through a gap the diameter of a quarter; house mice need only a dime-sized opening. Beyond dock doors, utility penetrations, floor drains, damaged wall panels, and gaps at the base of overhead doors all provide entry. Our exclusion assessments document every potential entry point in your facility.',
  },
  {
    question: 'What pallet storage practices reduce pest risk?',
    answer: 'Pallets stored directly on the floor create ideal rodent harborage. We recommend storing pallets on racks at least six inches off the floor, rotating pallet stock to eliminate stagnant storage areas, inspecting incoming pallets for egg cases or live pests before moving them into the facility, and establishing a clear buffer zone between stored product and exterior walls. We provide written sanitation and storage recommendations as part of every warehouse assessment.',
  },
  {
    question: 'Do you handle pest control for temperature-controlled warehouses and cold storage facilities?',
    answer: 'Yes. Cold storage and refrigerated distribution centers have distinct pest dynamics — the warm mechanical spaces surrounding refrigeration units attract rodents and cockroaches, while temperature differentials create condensation that supports insect activity. We have experience designing programs for temperature-controlled environments throughout Camden County and South Jersey.',
  },
  {
    question: 'How do you treat a warehouse without disrupting operations?',
    answer: 'We schedule perimeter and exterior treatments during operating hours without facility disruption. Interior bait station servicing, monitoring, and exclusion work can be coordinated with your operations schedule. For facilities operating 24/7, we work with your management to identify inspection windows that minimize impact on receiving, shipping, and storage operations.',
  },
  {
    question: 'What documentation do you provide for third-party audits?',
    answer: 'We provide written service reports after every visit documenting areas inspected, pest activity levels (using our standardized activity scale), products applied, and recommendations. For facilities subject to AIB, SQF, or BRC audits, we provide audit-ready documentation packages including service log summaries, pest trending reports, and corrective action records.',
  },
];

export default function WarehousesPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <Link href="/commercial" className="hover:text-[#2B6CB0]">Commercial</Link>
        {' → '}
        <span className="text-gray-900">Warehouses</span>
      </nav>

      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Warehouse Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Rodent exclusion programs, dock door sealing, and systematic pest management for Pennsauken Industrial Park, Gloucester City, and Winslow Township distribution facilities.
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
            Industrial Pest Control for Camden County's Warehouse and Distribution Sector
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Camden County's industrial geography concentrates significant warehouse and distribution activity in three primary zones: the Pennsauken Industrial Park along Route 130, the Gloucester City port area near the Delaware River, and the Winslow Township distribution corridor in the southeastern part of the county. Each of these zones presents distinct pest pressure challenges driven by geography, facility age, and operational factors — and each requires a pest management approach built for large, complex industrial structures rather than the smaller-scale programs appropriate for offices or retail.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Pennsauken Industrial Park sits adjacent to the Delaware River and urban Camden, creating significant Norway rat pressure from the riverbank corridor. Older industrial buildings in the park have decades of pest entry points accumulated in their foundations, loading dock areas, and utility infrastructure. New tenants frequently inherit rodent problems from previous occupants, and the high-traffic nature of distribution operations — with trucks arriving and departing at all hours — means that dock doors are in constant motion, creating frequent opportunities for pests to enter.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Gloucester City port area, with its proximity to the Delaware River and commercial shipping traffic, faces similar Norway rat pressure plus the potential for exotic pest introductions via shipping containers. Our team is experienced in designing buffer programs for port-adjacent facilities that address both endemic rodent populations and the risk of introductions from incoming shipments.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Winslow Township's distribution centers, serving the South Jersey logistics market, are generally newer construction but face pressure from the surrounding rural and semi-rural landscape — white-footed mice, Norway rats, and occasional wildlife (groundhogs, skunks) testing the perimeter year-round. Our Winslow Township warehouse programs emphasize perimeter exclusion and monitoring that keeps these facilities protected as they scale.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Warehouse Pest Challenges & Treatment Protocols</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Rodent Exclusion in Large Structures',
                detail: 'Large warehouse buildings have hundreds of linear feet of foundation perimeter, multiple dock doors, utility penetrations, and expansion joint gaps. Our exclusion assessments document every potential entry point. We seal gaps with appropriate materials — copper mesh, hardware cloth, commercial rodent-proof door sweeps, and expandable foam — and install exterior rodent monitoring stations at regular intervals around the perimeter.'
              },
              {
                title: 'Dock Door Sealing & Management',
                detail: 'Loading dock doors are the most critical pest entry point in any warehouse. We assess every dock door for seal integrity, threshold gaps, and side clearances. We recommend and coordinate installation of commercial dock door seals, dock leveler pit covers, and door bottom sweeps that prevent rodent entry while maintaining operational efficiency.'
              },
              {
                title: 'Pallet & Storage Protocols',
                detail: 'Improper pallet storage is one of the top harborage contributors in warehouse facilities. We provide written storage protocol recommendations — minimum floor clearance, rotation schedules, incoming pallet inspection procedures, and buffer zone maintenance — and work with your operations team to implement practices that reduce pest risk without disrupting throughput.'
              },
              {
                title: 'Interior Rodent Program',
                detail: 'Interior tamper-resistant bait stations and snap traps are positioned in mechanical rooms, dock pit areas, corner dead spots, and along interior walls where rodent runways are most common. Every station is numbered, mapped, and tracked to create a pest trending record that supports audit compliance.'
              },
              {
                title: 'Stored Product Pest Management',
                detail: 'Warehouses storing food products, grains, paper, or textiles face stored product pest pressure from beetles, moths, and weevils. Pheromone trap monitoring, receiving area protocols, and rapid response to any interceptions protect your inventory and your relationships with retail customers who conduct their own audits.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-[#1A365D] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Why Regular Service Contracts Are Essential for Warehouses</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Warehouse pest control requires ongoing vigilance because the operational dynamics of a distribution facility change constantly — new product lines arrive, dock door configurations change, seasonal employee increases create new food waste sources, and the surrounding landscape shifts with development. A recurring service contract ensures that your pest management program adapts to these changes with regular inspections, updated monitoring placement, and documented trending data.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            For warehouses subject to third-party food safety audits (AIB, SQF, BRC, or customer-specific audits), a documented pest control program is not optional — it is a prerequisite for certification. Auditors expect to see current service contracts, recent service reports, pest activity trending records, and corrective action documentation. Our warehouse programs are designed with audit readiness built in.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Even for non-food warehouses, the cost of a rodent infestation — product damage, employee complaints, and potential OSHA concerns about rodent droppings in the work environment — far exceeds the cost of a professional pest management contract. We offer contract pricing scaled to facility size and service frequency needs.
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
            <Link href="/camden-county/pennsauken" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Pennsauken Pest Control →</strong>
              <p className="text-gray-600 text-sm">Industrial park service area</p>
            </Link>
            <Link href="/camden-county/winslow-township" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Winslow Township Pest Control →</strong>
              <p className="text-gray-600 text-sm">Distribution corridor coverage</p>
            </Link>
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">Get a Warehouse Pest Control Assessment</h2>
          <p className="text-gray-700 text-lg mb-6">Free site assessment for Camden County warehouses and distribution facilities. Call or contact us today.</p>
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
                name: 'Camden County Pest Control — Warehouses & Distribution',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/commercial/warehouses',
                description: 'Warehouse pest control and rodent exclusion for Pennsauken, Gloucester City, and Winslow Township industrial facilities.',
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
