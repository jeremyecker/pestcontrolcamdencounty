import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'School Pest Control — Camden County, NJ | NJ IPM Act Compliant',
  description:
    'NJ IPM Act-compliant pest control for public and private schools across Camden County NJ. Parent notification, summer treatments, Cherry Hill, Camden City & Voorhees schools. Call (856) 600-0812.',
  keywords:
    'school pest control Camden County NJ, NJ IPM Act schools, pest control Cherry Hill East West, Camden City schools pest control, school exterminator NJ, IPM school program',
};

const faqItems = [
  {
    question: 'What is the NJ IPM Act and how does it apply to schools?',
    answer: 'The New Jersey Integrated Pest Management in Schools Act (N.J.S.A. 13:1F-19 et seq.) requires all public and charter schools in New Jersey to implement an IPM program and to notify parents and staff before pesticide applications. Schools must designate an IPM coordinator, maintain service records, post notification in common areas 72 hours before treatment, and report annually to the NJDEP. Our school programs are specifically designed to meet all NJ IPM Act requirements.',
  },
  {
    question: 'How does parent and staff notification work for school pest control?',
    answer: 'Under the NJ IPM Act, schools must provide at least 72 hours advance notice before any pesticide application to any parent or staff member who has requested notification. Schools must also maintain a registry of individuals requesting notification and post notices in common areas. We provide model notification language, maintain treatment records for your IPM coordinator\'s files, and can assist with your annual reporting obligations.',
  },
  {
    question: 'When is the best time to treat a school for pest problems?',
    answer: 'Summer — when students and most staff are out of the building — provides the optimal window for intensive treatments, exclusion work, and preventive applications that would require elaborate notification procedures during the school year. We schedule major treatment programs for June-August and shift to monitoring-based maintenance visits during the academic year, with any necessary chemical treatments performed during school breaks or weekends with appropriate notification.',
  },
  {
    question: 'What pests are most common in Camden County schools?',
    answer: 'German cockroaches in cafeteria kitchens and locker rooms are the most common pest complaint we receive from Camden County schools. Rodents (mice and rats) in older school buildings — particularly in Camden City and Cherry Hill East and West — are also frequent. Ants trailing into classrooms through exterior wall gaps are extremely common in spring and fall. Stinging insects nesting in athletic field structures, bleacher areas, and building facades are a warm-weather concern. Bed bugs are occasionally introduced via student belongings.',
  },
  {
    question: 'Do you serve private and parochial schools as well as public schools?',
    answer: 'Yes. While private and parochial schools are not required by the NJ IPM Act to follow the same protocols as public schools, we apply the same IPM standards to all school environments. Children in any school setting deserve the same level of care regarding chemical exposure and pest management effectiveness.',
  },
];

export default function SchoolsPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <Link href="/commercial" className="hover:text-[#2B6CB0]">Commercial</Link>
        {' → '}
        <span className="text-gray-900">Schools</span>
      </nav>

      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            School Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            NJ IPM Act-compliant programs for Cherry Hill East/West, Camden City schools, Eastern Regional, and every school in the county. Notification-compliant, child-safe, and thoroughly documented.
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
            NJ IPM Act-Compliant Pest Control for Camden County Schools
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Camden County's public school landscape is extensive, spanning major comprehensive high schools like Cherry Hill East and Cherry Hill West — among the largest and most recognized in South Jersey — to the Camden City School District's urban campuses, Voorhees Middle and Eastern Regional High School in Voorhees Township, and dozens of elementary schools, middle schools, charter schools, and parochial institutions spread across every community in the county.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Every public school in New Jersey is governed by the NJ Integrated Pest Management in Schools Act, which establishes specific requirements for how pest management must be conducted in school buildings. The Act requires an IPM approach that prioritizes non-chemical methods, mandates advance notification to parents and staff before any pesticide application, requires annual reporting to the NJDEP, and holds school IPM coordinators responsible for compliance. Failure to comply can result in NJDEP enforcement action and the kind of parent and community concern that no school administration wants to manage.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our school pest control programs are built from the ground up to satisfy NJ IPM Act requirements. We work with your designated IPM coordinator to establish all required documentation, notification procedures, and reporting protocols. Our technicians understand that school environments — with their mix of cafeterias, classrooms, locker rooms, gymnasiums, athletic storage areas, and mechanical spaces — create unique pest habitats that require zone-specific treatment approaches rather than generic pest control.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The concentration of Camden County's larger school buildings — Cherry Hill East and West, Voorhees, and Eastern Regional — creates particular challenges because of building age, campus size, and the volume of student movement that brings pest introductions from hundreds of households into a single building every day. Our programs for these campuses are scaled to match the complexity of the facilities.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Common Pests in Camden County Schools</h2>
          <div className="space-y-4">
            {[
              { pest: 'German Cockroaches', area: 'Cafeteria kitchens, concession stands', detail: 'School cafeteria kitchens operate under the same NJ Health Code requirements as commercial restaurants. German cockroaches in school food service areas require the same targeted IPM approach used in commercial kitchens.' },
              { pest: 'Rodents', area: 'Older buildings, custodial areas, storage rooms', detail: 'Older Camden County schools have decades of rodent entry points accumulated in their foundations and utility infrastructure. Fall entry season brings annual pressure that summer exclusion work is designed to prevent.' },
              { pest: 'Ants', area: 'Classrooms, hallways, cafeteria', detail: 'Odorous house ants and pavement ants trail from exterior perimeter gaps into classrooms and common areas in spring and fall. Exterior perimeter treatment and gap sealing are the most effective long-term controls.' },
              { pest: 'Stinging Insects', area: 'Athletic fields, bleachers, building facades', detail: 'Yellow jacket nests in athletic field structures, ground nests near bleachers, and paper wasp nests on building facades are warm-weather concerns that require prompt removal to protect students during outdoor activities.' },
              { pest: 'Bed Bugs', area: 'Classrooms, coat areas, health office', detail: 'Bed bugs are occasionally introduced via student backpacks and clothing from infested homes. School health offices need a clear protocol for inspecting and responding to bed bug introductions without stigmatizing affected students.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#1A365D]">{item.pest}</h3>
                  <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">{item.area}</span>
                </div>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Summer Treatment Programs</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Summer is the most important window for intensive pest control work in school buildings. With students and most staff out of the building, the access and treatment options available during June, July, and August far exceed what is practical during the school year. Our summer school treatment programs include:
          </p>
          <div className="space-y-3">
            {[
              'Comprehensive cafeteria kitchen treatment for cockroaches, including behind and under all cooking equipment and appliances',
              'Interior rodent exclusion — sealing all identified entry points in foundations, utility penetrations, and mechanical spaces',
              'Perimeter exclusion and exterior rodent bait station setup before the fall entry season',
              'Stinging insect nest removal and treatment from all identified nesting sites on the building exterior and athletic structures',
              'Locker room and restroom drain treatment for fly breeding source elimination',
              'Attic and crawl space inspection and exclusion for wildlife entry (common in older Camden County school buildings)',
              'Full facility documentation update for your IPM coordinator\'s annual NJDEP reporting',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#DD6B20] font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
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
              <p className="text-gray-600 text-sm">Camden County coverage</p>
            </Link>
            <Link href="/camden-county/cherry-hill" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Cherry Hill Pest Control →</strong>
              <p className="text-gray-600 text-sm">Cherry Hill East & West service area</p>
            </Link>
            <Link href="/camden-county/voorhees" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <strong className="text-[#1A365D]">Voorhees Pest Control →</strong>
              <p className="text-gray-600 text-sm">Voorhees school district coverage</p>
            </Link>
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">NJ IPM Act-Compliant School Pest Programs</h2>
          <p className="text-gray-700 text-lg mb-6">Contact us to schedule a free school facility assessment. We work with your IPM coordinator to build a fully compliant program.</p>
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
                name: 'Camden County Pest Control — Schools',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/commercial/schools',
                description: 'NJ IPM Act-compliant school pest control for public and private schools across Camden County NJ.',
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
