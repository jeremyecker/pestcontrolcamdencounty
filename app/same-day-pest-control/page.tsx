import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Same-Day Pest Control Camden County NJ | Book Today',
  description:
    'Same-day pest control service in Camden County NJ. Call before noon for a same-day appointment. Serving all 16 towns. Call (856) 600-0812.',
  keywords:
    'same day pest control, same day exterminator Camden County, pest control today NJ, fast pest control Cherry Hill, quick exterminator Voorhees',
};

export default function SameDayPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <span className="text-gray-900">Same-Day Pest Control</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Same-Day Pest Control in Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Need pest control today? Call before noon and we will have a licensed technician at your
            door the same day. Available across all 16 Camden County towns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18566000812"
              className="bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Call (856) 600-0812
            </a>
            <Link
              href="/contact"
              className="bg-white text-[#1A365D] font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors"
            >
              Book Same-Day Service
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* How Same-Day Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            How Same-Day Pest Control Works
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Most pest control companies in New Jersey schedule appointments 3–5 days out. That is fine for a routine
            maintenance visit — but when you wake up to ants swarming your kitchen, a cockroach in your bathroom, or
            mouse droppings in your pantry, waiting until next week is not acceptable. At Camden County Pest Control,
            we reserve same-day appointment slots specifically for urgent situations because we understand that pests
            do not operate on a schedule.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our same-day service is available Monday through Saturday for residential and commercial properties throughout
            Camden County. The process is straightforward:
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl">1</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">Call Before Noon</h3>
                <p className="text-gray-700">
                  Call <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>{' '}
                  or submit a <Link href="/contact" className="text-[#2B6CB0] hover:underline">contact request</Link>{' '}
                  before 12:00 PM. Tell us about the pest issue — what you are seeing, where in the home or business,
                  and how long it has been happening. For best availability, morning calls are ideal, but we do our best
                  to accommodate afternoon requests when possible.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl">2</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">We Confirm Your Time Window</h3>
                <p className="text-gray-700">
                  Based on your location and the current schedule, we confirm a same-day appointment window — typically
                  a 2-hour block so you are not stuck waiting all day. We send a text confirmation and our technician
                  calls when they are en route to your property.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl">3</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">Licensed Technician Arrives</h3>
                <p className="text-gray-700">
                  Your NJDEP-licensed technician arrives with the equipment and products needed for your specific pest.
                  They perform a thorough inspection, identify the pest and the scope of the problem, and explain the
                  recommended treatment plan and pricing before beginning any work.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-xl">4</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A365D]">Same-Day Treatment</h3>
                <p className="text-gray-700">
                  Most pest treatments begin and are completed during the same visit. For larger projects (whole-house
                  bed bug heat treatment, extensive wildlife exclusion, etc.), we begin the process the same day and
                  schedule completion at the earliest possible time. You do not wait days just to get the process started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Which Pests Qualify */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Which Pests Qualify for Same-Day Service?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our same-day service covers virtually every pest we treat. Here are the situations where same-day service
            is most commonly requested in Camden County:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">🐜 Ant Invasions</h3>
              <p className="text-gray-700 text-sm">
                When ants suddenly appear in large numbers — marching through your kitchen, bathroom, or along window
                sills — same-day treatment stops the invasion before it establishes deeper trails into your home.
                Camden County&apos;s warm, humid summers from June through September drive massive ant activity,
                especially in <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link> and{' '}
                <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>.
              </p>
              <Link href="/services/ant-control" className="text-[#2B6CB0] text-sm font-semibold hover:underline mt-2 inline-block">
                Ant control details →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">🪳 Cockroach Sightings</h3>
              <p className="text-gray-700 text-sm">
                Seeing a cockroach during the day almost always indicates a significant infestation — daytime activity
                means the harborage areas are overcrowded. Same-day treatment targets the colony before it multiplies
                further.
              </p>
              <Link href="/services/cockroach-control" className="text-[#2B6CB0] text-sm font-semibold hover:underline mt-2 inline-block">
                Cockroach control details →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">🐀 Rodent Activity</h3>
              <p className="text-gray-700 text-sm">
                Fresh droppings, gnaw marks, or a rodent sighting means mice or rats have found entry into your home.
                Same-day trapping and exclusion assessment prevents the problem from growing. Rodent activity is
                especially high in fall and winter across all Camden County communities.
              </p>
              <Link href="/services/rodent-control" className="text-[#2B6CB0] text-sm font-semibold hover:underline mt-2 inline-block">
                Rodent control details →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">🐝 Wasp Nests</h3>
              <p className="text-gray-700 text-sm">
                A new wasp or hornet nest discovered near a doorway, deck, or play area is both a safety concern and
                a same-day priority. We eliminate the nest and the colony in a single visit.
              </p>
              <Link href="/services/wasp-hornet-removal" className="text-[#2B6CB0] text-sm font-semibold hover:underline mt-2 inline-block">
                Wasp removal details →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">🕷️ Spider Infestations</h3>
              <p className="text-gray-700 text-sm">
                While most spiders in Camden County are harmless, a sudden increase in spider activity or the discovery
                of a venomous species warrants quick treatment. Our same-day service addresses both the spiders and the
                insects they are feeding on.
              </p>
              <Link href="/services/spider-control" className="text-[#2B6CB0] text-sm font-semibold hover:underline mt-2 inline-block">
                Spider control details →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">🦟 Mosquito Problems</h3>
              <p className="text-gray-700 text-sm">
                Hosting an outdoor event this weekend but your yard is swarming with mosquitoes? Same-day barrier
                treatment can dramatically reduce mosquito populations before your guests arrive.
              </p>
              <Link href="/services/mosquito-control" className="text-[#2B6CB0] text-sm font-semibold hover:underline mt-2 inline-block">
                Mosquito control details →
              </Link>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            For true emergencies — bats inside your home, an active wasp attack, or a termite swarm — we offer
            priority <Link href="/emergency-pest-control" className="text-[#2B6CB0] hover:underline">emergency pest control</Link>{' '}
            response that goes beyond our standard same-day service, including evening and weekend availability.
          </p>
        </section>

        {/* Coverage Across All 16 Towns */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Same-Day Coverage Across All 16 Camden County Towns
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our same-day service is available throughout <Link href="/camden-county" className="text-[#2B6CB0] hover:underline">Camden County</Link>.
            Because our technicians live and work in the region, drive times are short and we can serve the entire county
            efficiently in a single day. Same-day appointment availability covers:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { name: 'Cherry Hill', slug: 'cherry-hill' },
              { name: 'Voorhees', slug: 'voorhees' },
              { name: 'Haddonfield', slug: 'haddonfield' },
              { name: 'Collingswood', slug: 'collingswood' },
              { name: 'Marlton', slug: 'marlton' },
              { name: 'Mount Laurel', slug: 'mount-laurel' },
              { name: 'Pennsauken', slug: 'pennsauken' },
              { name: 'Gloucester Twp', slug: 'gloucester-township' },
              { name: 'Winslow Twp', slug: 'winslow-township' },
              { name: 'Lindenwold', slug: 'lindenwold' },
              { name: 'Bellmawr', slug: 'bellmawr' },
              { name: 'Audubon', slug: 'audubon' },
              { name: 'Barrington', slug: 'barrington' },
              { name: 'Somerdale', slug: 'somerdale' },
              { name: 'Runnemede', slug: 'runnemede' },
              { name: 'Clementon', slug: 'clementon' },
            ].map((town) => (
              <Link
                key={town.slug}
                href={`/camden-county/${town.slug}`}
                className="bg-blue-50 hover:bg-blue-100 text-[#1A365D] font-medium py-2 px-3 rounded-lg text-center transition-colors text-sm"
              >
                {town.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you are in one of the larger townships like <Link href="/camden-county/gloucester-township" className="text-[#2B6CB0] hover:underline">Gloucester Township</Link>{' '}
            or <Link href="/camden-county/winslow-township" className="text-[#2B6CB0] hover:underline">Winslow Township</Link>,
            or in one of the compact boroughs like <Link href="/camden-county/runnemede" className="text-[#2B6CB0] hover:underline">Runnemede</Link>{' '}
            or <Link href="/camden-county/barrington" className="text-[#2B6CB0] hover:underline">Barrington</Link>, our
            same-day service reaches you quickly.
          </p>
        </section>

        {/* Why Same-Day Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why Same-Day Treatment Matters
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            When it comes to pest control, faster treatment almost always means better outcomes. Here is why getting
            same-day service is worth the call:
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-xl">→</span>
              <div>
                <strong className="text-[#1A365D]">Smaller infestations are cheaper to treat.</strong>{' '}
                <span className="text-gray-700">
                  A single ant trail is a one-visit treatment. A colony that has had a week to establish satellite
                  nests throughout your walls may require multiple visits and more product. The same principle applies
                  to cockroaches, rodents, and especially bed bugs.
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-xl">→</span>
              <div>
                <strong className="text-[#1A365D]">Property damage is minimized.</strong>{' '}
                <span className="text-gray-700">
                  Rodents chewing wiring, termites consuming structural wood, and raccoons tearing up insulation — all
                  of these cause ongoing damage every day they go untreated. Same-day service stops the clock on property
                  damage.
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-xl">→</span>
              <div>
                <strong className="text-[#1A365D]">Health risks are reduced.</strong>{' '}
                <span className="text-gray-700">
                  Cockroach allergens trigger asthma attacks. Rodent droppings carry dangerous pathogens. Mosquitoes
                  transmit diseases. The sooner pests are eliminated, the sooner your home is safe for your family.
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-xl">→</span>
              <div>
                <strong className="text-[#1A365D]">Peace of mind is restored.</strong>{' '}
                <span className="text-gray-700">
                  Let us be honest — knowing pests are in your home is stressful. Waiting days for an appointment while
                  the problem continues is even worse. Same-day service means you sleep better tonight.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Same-Day for Commercial */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Same-Day Pest Control for Camden County Businesses
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            For businesses, pest problems are not just a nuisance — they are a liability. A restaurant with a
            cockroach sighting, a retail store with a mouse problem, or a warehouse with a pigeon infestation cannot
            afford to wait days for treatment. Our same-day{' '}
            <Link href="/services/commercial-pest-control" className="text-[#2B6CB0] hover:underline">commercial pest control</Link>{' '}
            service is designed for the urgency that businesses face:
          </p>
          <ul className="text-gray-700 space-y-2 mb-4">
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>Restaurants and food service:</strong> A single pest sighting can result in a health department violation, negative reviews, and lost customers. We provide discreet, rapid treatment that minimizes disruption to your operations.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>Healthcare facilities:</strong> Hospitals, nursing homes, and medical offices have zero tolerance for pest activity. We offer same-day response with treatments that meet healthcare sanitation standards.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>Retail and office spaces:</strong> Rodent droppings, ant trails, or spider webs in customer-facing areas damage your reputation. Same-day treatment restores your professional environment.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#DD6B20] font-bold">→</span>
              <span><strong>Warehouses and industrial:</strong> Bird infestations, rodents in stored products, or insect contamination of inventory require immediate attention to prevent product loss and regulatory issues.</span>
            </li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            Camden County&apos;s commercial corridors along Route 70, Route 130, and Route 73 — spanning{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
            <Link href="/camden-county/pennsauken" className="text-[#2B6CB0] hover:underline">Pennsauken</Link>,{' '}
            <Link href="/camden-county/bellmawr" className="text-[#2B6CB0] hover:underline">Bellmawr</Link>, and{' '}
            <Link href="/camden-county/marlton" className="text-[#2B6CB0] hover:underline">Marlton</Link> — are all
            within our same-day service area. We understand the unique pest pressures of commercial properties and
            respond accordingly.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Frequently Asked Questions About Same-Day Service
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Is there an extra charge for same-day service?</h3>
              <p className="text-gray-700">
                No. Our same-day service is priced the same as a standard appointment. We believe fast response should
                be the standard, not a premium add-on. You receive a free inspection and a written quote before any
                treatment begins — just like a regular appointment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">What if I call after noon?</h3>
              <p className="text-gray-700">
                We do our best to accommodate afternoon requests for same-day service. If same-day is not available, we
                will schedule you for the first available slot — often the next morning. For urgent situations that
                cannot wait, our <Link href="/emergency-pest-control" className="text-[#2B6CB0] hover:underline">emergency pest control</Link>{' '}
                service provides evening and weekend response.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Do I need to prepare anything before the technician arrives?</h3>
              <p className="text-gray-700">
                For most pest treatments, no special preparation is needed. For specific situations (bed bug treatment,
                flea treatment), we will provide preparation instructions when you schedule. Generally, just ensure the
                technician can access the affected areas — clear clutter around baseboards, provide attic access if
                needed, and secure pets during the visit.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Is the inspection really free?</h3>
              <p className="text-gray-700">
                Yes. Our <Link href="/free-pest-inspection" className="text-[#2B6CB0] hover:underline">free pest inspection</Link>{' '}
                covers a complete assessment of your property with no obligation. If you decide not to proceed with
                treatment after the inspection, you owe us nothing.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            Get Same-Day Pest Control — Call Now
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Do not wait days for pest control. Call Camden County Pest Control now for a same-day appointment
            with a licensed, local exterminator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18566000812"
              className="bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              📞 Call (856) 600-0812
            </a>
            <Link
              href="/contact"
              className="bg-[#1A365D] hover:bg-[#2B6CB0] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              Book Online
            </Link>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <section className="bg-[#1A365D] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Pest Control Today?</h2>
          <p className="text-blue-200 text-lg mb-6">
            Call before noon for same-day service. No extra charge. All 16 Camden County towns covered.
          </p>
          <a
            href="tel:+18566000812"
            className="inline-block bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors"
          >
            📞 Call (856) 600-0812
          </a>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'PestControlService',
            name: 'Camden County Pest Control - Same Day Service',
            telephone: '(856) 600-0812',
            url: 'https://pestcontrolcamdencounty.com/same-day-pest-control',
            description:
              'Same-day pest control service in Camden County, NJ. Call before noon for a same-day appointment. Serving all 16 towns.',
            areaServed: {
              '@type': 'County',
              name: 'Camden County',
              containedInPlace: {
                '@type': 'State',
                name: 'New Jersey',
              },
            },
            serviceType: 'Same Day Pest Control',
          }),
        }}
      />
    </div>
  );
}
