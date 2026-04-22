import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Emergency Pest Control Camden County NJ | 24/7 Response',
  description:
    'Emergency pest control in Camden County NJ. Same-day response for bed bugs, wasps, rodents, and other urgent pest situations. Call (856) 600-0812 now.',
  keywords:
    'emergency pest control, emergency exterminator Camden County, 24 hour pest control NJ, same day exterminator Cherry Hill, emergency pest control Camden NJ',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'PestControlService'],
  name: 'Camden County Pest Control',
  url: 'https://pestcontrolcamdencounty.com',
  telephone: '+18566000812',
  image: 'https://pestcontrolcamdencounty.com/images/og-default.jpg',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'NJ',
    addressCountry: 'US',
  },
};

export default function EmergencyPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />


      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <span className="text-gray-900">Emergency Pest Control</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🚨</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Emergency Pest Control in Camden County, NJ
          </h1>
          <p className="text-xl text-red-100 mb-8">
            Pest emergencies do not wait for business hours. Our licensed Camden County technicians respond
            quickly to urgent infestations — including evenings and weekends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18566000812"
              className="bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors animate-pulse"
            >
              🚨 EMERGENCY: (856) 600-0812
            </a>
            <Link
              href="/contact"
              className="bg-white text-red-900 font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors"
            >
              Request Emergency Service
            </Link>
          </div>
          <p className="text-red-200 mt-4">
            Camden County, NJ · Fast Response · NJDEP Licensed
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* What Constitutes a Pest Emergency */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            What Constitutes a Pest Emergency in Camden County, NJ?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Not every pest sighting is an emergency — but many infestations in Camden County homes and businesses can
            rapidly escalate from inconvenience to serious health hazard or structural threat. As a local, NJDEP-licensed
            pest control provider, we have responded to hundreds of genuine pest emergencies throughout{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
            <Link href="/camden-county/camden" className="text-[#2B6CB0] hover:underline">Camden</Link>,{' '}
            <Link href="/camden-county/pennsauken" className="text-[#2B6CB0] hover:underline">Pennsauken</Link>, and{' '}
            <Link href="/camden-county/gloucester-township" className="text-[#2B6CB0] hover:underline">Gloucester Township</Link>.
            Here is a clear guide to what warrants an emergency call:
          </p>

          {/* Bed Bug Emergency */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-red-800 mb-3">🚨 Bed Bug Outbreak</h3>
            <p className="text-gray-700 mb-3">
              Bed bugs are one of the most psychologically distressing and behaviorally challenging pests in New Jersey.
              Camden County has seen a significant increase in bed bug cases over the past decade, driven largely by
              the region&apos;s high population density and frequent travel. A bed bug outbreak is an emergency when:
            </p>
            <ul className="text-gray-700 space-y-2 mb-3">
              <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> You discover bites on multiple family members or wake up with unexplained welts</li>
              <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> You see live bed bugs on your mattress, box spring, or bedding</li>
              <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> You find blood smears or dark fecal spots on your sheets or furniture</li>
              <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> An infestation is discovered in a hotel, rental property, or care facility you operate</li>
              <li className="flex gap-2"><span className="text-red-600 font-bold">→</span> A tenant reports bed bugs and your rental property is occupied</li>
            </ul>
            <p className="text-gray-700">
              Bed bugs reproduce rapidly — a single fertilized female can produce a colony of hundreds within weeks.
              Delaying treatment by even a few days allows the infestation to spread to adjacent rooms and units. Early
              emergency response is critical to containing the outbreak before it becomes a building-wide problem.
            </p>
          </div>

          {/* Wasp/Stinging Insects Emergency */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-yellow-800 mb-3">🐝 Wasp Nest Near Children, Pets, or High-Traffic Areas</h3>
            <p className="text-gray-700 mb-3">
              New Jersey&apos;s hot summers produce explosive populations of yellow jackets, bald-faced hornets, and paper
              wasps. Most stinging insect nests are manageable when discovered early — but a large wasp or hornet nest
              in a high-risk location is a genuine emergency requiring same-day response:
            </p>
            <ul className="text-gray-700 space-y-2 mb-3">
              <li className="flex gap-2"><span className="text-yellow-700 font-bold">→</span> A wasp or hornet nest is located within 10 feet of a door, window, outdoor play area, or high-traffic walkway</li>
              <li className="flex gap-2"><span className="text-yellow-700 font-bold">→</span> A child, pet, or family member with known bee or wasp allergies (anaphylaxis risk) is present in the household</li>
              <li className="flex gap-2"><span className="text-yellow-700 font-bold">→</span> A nest inside a wall void, attic, or crawl space is already releasing wasps into living areas</li>
              <li className="flex gap-2"><span className="text-yellow-700 font-bold">→</span> Ground-nesting yellow jackets have been accidentally disturbed and are aggressively defending their colony</li>
              <li className="flex gap-2"><span className="text-yellow-700 font-bold">→</span> A large bald-faced hornet or European hornet nest is within reach of children&apos;s outdoor play equipment</li>
            </ul>
            <p className="text-gray-700">
              Do not attempt to remove a large wasp, hornet, or yellow jacket nest yourself. An agitated colony of
              several hundred stinging insects can deliver hundreds of stings in seconds, which is potentially fatal
              even for people without known allergies. Our emergency team responds with full protective equipment and
              professional-strength treatments to eliminate the nest quickly and completely.
            </p>
          </div>

          {/* Rodent Food Contamination Emergency */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-orange-800 mb-3">🐀 Rodent Infestation with Active Food Contamination</h3>
            <p className="text-gray-700 mb-3">
              Mice and rats are not merely a nuisance in Camden County homes and businesses — they are a genuine public
              health threat. A rodent infestation with evidence of food contamination requires emergency intervention:
            </p>
            <ul className="text-gray-700 space-y-2 mb-3">
              <li className="flex gap-2"><span className="text-orange-700 font-bold">→</span> Rodent droppings found in kitchen cabinets, food pantries, or on food preparation surfaces</li>
              <li className="flex gap-2"><span className="text-orange-700 font-bold">→</span> Gnaw marks on food packaging, bread bags, cereal boxes, or produce</li>
              <li className="flex gap-2"><span className="text-orange-700 font-bold">→</span> Rodent activity in a commercial kitchen, restaurant, grocery store, or food service establishment</li>
              <li className="flex gap-2"><span className="text-orange-700 font-bold">→</span> Evidence of rodents in a child care center, school, or elder care facility</li>
              <li className="flex gap-2"><span className="text-orange-700 font-bold">→</span> Rodent urine smell or visible tracks on food shelving</li>
            </ul>
            <p className="text-gray-700 mb-3">
              Rodents carry and spread Hantavirus, Salmonella, Leptospirosis, and other serious diseases through their
              droppings, urine, and saliva. Once a rodent has contaminated food storage or preparation areas, the
              contamination risk extends well beyond what is visually apparent. For food businesses in Camden County,
              a rodent emergency also carries immediate regulatory consequences — health department inspections,
              temporary closures, and licensing violations.
            </p>
            <p className="text-gray-700">
              Our emergency rodent response includes assessment of contamination extent, immediate trapping and
              exclusion measures, and detailed sanitation and decontamination recommendations to ensure food-safe
              conditions are restored as quickly as possible.
            </p>
          </div>

          {/* Wildlife Emergency */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-purple-800 mb-3">🦝 Wildlife in Living Spaces</h3>
            <p className="text-gray-700 mb-3">
              When wildlife enters living areas — rather than confined to an attic or crawl space — it is an emergency.
              These situations require immediate professional response:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex gap-2"><span className="text-purple-700 font-bold">→</span> A bat found flying in a bedroom or other living area (potential rabies exposure — NJ Department of Health recommends testing)</li>
              <li className="flex gap-2"><span className="text-purple-700 font-bold">→</span> A raccoon inside a home, particularly if it is behaving erratically (potential distemper or rabies)</li>
              <li className="flex gap-2"><span className="text-purple-700 font-bold">→</span> A skunk trapped inside a structure or garage</li>
              <li className="flex gap-2"><span className="text-purple-700 font-bold">→</span> Squirrels or raccoons that have damaged wiring, insulation, or structural components in the attic</li>
            </ul>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            If your situation matches any of the above scenarios — or if you have a gut feeling that your pest problem
            cannot wait — call us now at{' '}
            <a href="tel:+18566000812" className="text-[#2B6CB0] font-bold hover:underline">(856) 600-0812</a>.
            Our emergency line is answered by a real person who can assess your situation and dispatch a technician
            immediately. We serve all of Camden County, including Cherry Hill, Pennsauken, Camden, Gloucester Township,
            and surrounding communities.
          </p>
        </section>

        {/* Why Emergency Response Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why Fast Emergency Pest Response Matters in New Jersey
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            New Jersey&apos;s dense population, older housing stock, and humid climate create conditions where pest problems
            escalate rapidly. What starts as a small mouse problem in October can become a full structural infestation
            by November. A handful of bed bugs brought home from a trip can multiply into a hundred-insect colony within
            a month. A wasp nest discovered in June can grow to contain thousands of workers by August.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            For Camden County residents, the older homes in Pennsauken, the densely packed neighborhoods of Camden City,
            and the mixed commercial-residential corridors throughout Gloucester Township create specific pathways for
            rapid pest spread. When a pest emergency is identified, every hour of delay increases both the extent of the
            infestation and the cost of remediation.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            For businesses in Camden County — especially food service establishments, healthcare facilities, child care
            centers, and hospitality businesses — a pest emergency carries additional urgency. New Jersey Department of
            Health regulations require immediate notification and treatment for certain pest situations. A delayed
            response can result in forced temporary closure, revenue loss, and reputational damage that takes months to
            recover from.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Camden County Pest Control maintains emergency response capacity specifically because we understand these
            stakes. We are not a 9-to-5 operation that sends you to voicemail after hours. When you call our emergency
            line, you reach a licensed technician who can assess your situation immediately and respond that same day —
            including evenings, weekends, and holidays.
          </p>
        </section>

        {/* What We Treat as Emergency */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Emergency Services We Provide Across Camden County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-3">🛏️ Bed Bug Emergencies</h3>
              <p className="text-gray-700 text-sm">Emergency inspections, heat treatment scheduling, and interim containment protocols for hotels, apartments, and residences throughout Camden County.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-3">🐝 Stinging Insect Removal</h3>
              <p className="text-gray-700 text-sm">Same-day removal of wasp nests, hornet colonies, and yellow jacket ground nests from dangerous locations near people, pets, and children.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-3">🐀 Emergency Rodent Control</h3>
              <p className="text-gray-700 text-sm">Immediate trapping, exclusion, and contamination assessment for mice and rat infestations with active food contact or structural access.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-3">🦇 Bat Removal</h3>
              <p className="text-gray-700 text-sm">Emergency bat removal from living spaces with guidance on NJ Department of Health rabies exposure protocols when human contact has occurred.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-3">🦝 Wildlife in Structure</h3>
              <p className="text-gray-700 text-sm">Emergency wildlife trapping and removal for raccoons, squirrels, opossums, or skunks that have entered living areas of a home or business.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-3">🏢 Commercial Food Safety</h3>
              <p className="text-gray-700 text-sm">Emergency pest management for food service businesses facing imminent health inspection, regulatory violation, or active contamination event.</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="tel:+18566000812"
              className="inline-block bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors"
            >
              🚨 Call Emergency Line: (856) 600-0812
            </a>
          </div>
        </section>

        {/* How Our Emergency Response Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            How Our Emergency Response Works
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">1</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Call — Any Time</h3>
                <p className="text-gray-700">
                  Call <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>.
                  Our emergency line is answered by a real person — not a recording or an answering service.
                  Describe the pest and situation as clearly as possible over the phone so we can
                  prepare the right equipment and products before we arrive.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Same-Day Dispatch</h3>
                <p className="text-gray-700">
                  We dispatch the closest available licensed technician to your location in Camden County.
                  Our coverage of Cherry Hill, Camden, Pennsauken, and Gloucester Township means we can reach
                  most locations within 1-2 hours during business hours. Evening and weekend response times may
                  vary depending on technician availability, but we always prioritize true emergencies.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">On-Site Assessment &amp; Treatment</h3>
                <p className="text-gray-700">
                  Upon arrival, our technician performs a rapid but thorough assessment, identifies the pest, evaluates
                  the scope of the emergency, and implements immediate treatment. We carry emergency supplies for bed bug
                  initial containment, wasp nest removal, rodent snap trapping, and wildlife exclusion materials on
                  every vehicle, so we can begin treatment immediately without waiting for a return visit.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">4</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Follow-Up Plan</h3>
                <p className="text-gray-700">
                  After the emergency treatment, we develop a follow-up plan to ensure the problem is fully resolved
                  and does not recur. For bed bugs, this typically includes a comprehensive heat or chemical treatment
                  protocol. For rodents, it includes exclusion and long-term trapping. For wildlife, it includes
                  full exclusion after all animals have been removed. We schedule follow-up visits and stand behind our
                  work with a satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Emergency Pest Control Coverage — Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We maintain emergency coverage across all of Camden County. Our technicians are strategically distributed
            throughout the county to minimize response times. Key service areas for emergency pest control include:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {[
              { name: 'Cherry Hill', slug: 'cherry-hill' },
              { name: 'Camden', slug: 'camden' },
              { name: 'Pennsauken', slug: 'pennsauken' },
              { name: 'Gloucester Township', slug: 'gloucester-township' },
              { name: 'Voorhees', slug: 'voorhees' },
              { name: 'Winslow Township', slug: 'winslow-township' },
              { name: 'Haddonfield', slug: 'haddonfield' },
              { name: 'Collingswood', slug: 'collingswood' },
              { name: 'Lindenwold', slug: 'lindenwold' },
              { name: 'Bellmawr', slug: 'bellmawr' },
              { name: 'Mount Laurel', slug: 'mount-laurel' },
              { name: 'Marlton', slug: 'marlton' },
            ].map((town) => (
              <Link
                key={town.slug}
                href={`/camden-county/${town.slug}`}
                className="bg-red-50 hover:bg-red-100 text-[#1A365D] font-medium py-3 px-4 rounded-lg text-center transition-colors text-sm"
              >
                {town.name}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Frequently Asked Questions — Emergency Pest Control in Camden County
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">What counts as a pest control emergency in New Jersey?</h3>
              <p className="text-gray-700">
                A pest emergency is any situation posing an immediate health, safety, or public health risk that cannot
                wait for a scheduled appointment. In Camden County, this includes: bed bug outbreaks in occupied
                residences, large wasp or hornet nests near children or people with allergies, rodent infestations with
                active food contamination, bats found in living spaces, wildlife inside the home, and cockroach or rodent
                infestations in food service businesses facing regulatory scrutiny. If you are unsure whether your
                situation qualifies, call us — we will assess it honestly.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">How fast can you respond to an emergency in Camden County?</h3>
              <p className="text-gray-700">
                For calls received during business hours (7 AM – 7 PM), we typically dispatch a technician within 1-2
                hours to Cherry Hill, Camden, Pennsauken, and Gloucester Township. We offer evening and weekend
                response for genuine emergencies. Call our emergency line at{' '}
                <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>{' '}
                and we will give you an honest ETA based on current technician availability.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Can you treat a wasp nest the same day I call?</h3>
              <p className="text-gray-700">
                Yes. Wasp, hornet, and yellow jacket nest removal is one of our most common same-day emergency calls.
                Our technicians carry the specialized protective equipment and professional-grade wasp/hornet products
                on every vehicle. We can typically remove nests of any size — paper wasp nests, bald-faced hornet
                aerial nests, and ground-nesting yellow jacket colonies — in a single visit.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">What should I do if I find a bat in my bedroom in NJ?</h3>
              <p className="text-gray-700">
                Do not release the bat outside. Per New Jersey Department of Health guidelines, a bat found in a room
                where people were sleeping should be captured for rabies testing if there is any possibility of
                exposure (particularly for sleeping people, children, or anyone who cannot reliably report a bite).
                Contain the bat in the room by closing doors, and call us immediately. We will respond as an emergency
                and coordinate with local health authorities if rabies testing is required. This is an extremely
                time-sensitive situation.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">My restaurant has rodents before a health inspection — what do I do?</h3>
              <p className="text-gray-700">
                Call us immediately at{' '}
                <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>.
                We provide emergency pest control for food service establishments throughout Camden County and
                understand the regulatory environment in NJ. We can respond same-day to implement trapping, exclusion,
                and documentation of corrective action. We also provide service documentation that can support your
                communication with the Camden County Health Department inspector.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Is emergency pest control treatment family-friendly?</h3>
              <p className="text-gray-700">
                Yes. Even in emergency situations, we use EPA-registered products applied by NJDEP-licensed technicians
                according to label requirements. We will always advise you on any necessary precautions — such as
                temporarily vacating a treated area or keeping pets away from a treated surface — before we apply any
                product. Our emergency treatments are both family-friendly and effective.
              </p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/same-day-pest-control" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Same-Day Pest Control →</h3>
              <p className="text-gray-600 text-sm">Book a same-day exterminator visit across Camden County</p>
            </Link>
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Pest Control Near Me →</h3>
              <p className="text-gray-600 text-sm">Local pest control for every pest in Camden County</p>
            </Link>
            <Link href="/exterminator-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Exterminator Near Me →</h3>
              <p className="text-gray-600 text-sm">Licensed, NJDEP-certified exterminators throughout Camden County</p>
            </Link>
            <Link href="/free-pest-inspection" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Free Pest Inspection →</h3>
              <p className="text-gray-600 text-sm">No-cost, no-obligation property inspection for Camden County</p>
            </Link>
            <Link href="/services/bed-bug-removal" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Bed Bug Removal →</h3>
              <p className="text-gray-600 text-sm">Heat treatment and chemical protocols for bed bug elimination</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            Pest Emergency? Do Not Wait.
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Every hour matters when you are dealing with a pest emergency in Camden County. Call now for immediate
            response from a licensed, local pest control professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18566000812"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              🚨 Call (856) 600-0812 NOW
            </a>
            <Link
              href="/contact"
              className="bg-[#1A365D] hover:bg-[#2B6CB0] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              Request Emergency Service
            </Link>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <section className="bg-[#1A365D] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Camden County Emergency Pest Control</h2>
          <p className="text-blue-200 text-lg mb-6">
            NJDEP-licensed technicians. Fast response. All of Camden County.
          </p>
          <a
            href="tel:+18566000812"
            className="inline-block bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors"
          >
            🚨 Emergency Line: (856) 600-0812
          </a>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'EmergencyService',
                name: 'Camden County Pest Control — Emergency Services',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/emergency-pest-control',
                description:
                  'Emergency pest control services in Camden County, NJ. Same-day response for bed bugs, wasps, rodents, and other urgent pest emergencies.',
                areaServed: {
                  '@type': 'County',
                  name: 'Camden County',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'New Jersey',
                  },
                },
                openingHours: 'Mo-Su 00:00-24:00',
                serviceType: 'Emergency Pest Control',
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What counts as a pest control emergency in New Jersey?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'A pest emergency is any situation posing an immediate health, safety, or public health risk. This includes bed bug outbreaks, large wasp or hornet nests near children, rodent infestations with active food contamination, bats in living spaces, and wildlife inside the home.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How fast can you respond to an emergency in Camden County?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'For calls received during business hours (7 AM to 7 PM), we typically dispatch a technician within 1-2 hours to Cherry Hill, Camden, Pennsauken, and Gloucester Township. We also offer evening and weekend emergency response.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can you treat a wasp nest the same day I call?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Wasp, hornet, and yellow jacket nest removal is one of our most common same-day emergency calls. Our technicians carry specialized protective equipment and professional-grade products on every vehicle.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What should I do if I find a bat in my bedroom in NJ?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Do not release the bat outside. Per NJ Department of Health guidelines, a bat found in a sleeping area should be captured for rabies testing. Contain the bat by closing doors and call us immediately. We will respond as an emergency and coordinate with local health authorities if needed.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is emergency pest control treatment family-friendly?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Even in emergency situations, we use EPA-registered products applied by NJDEP-licensed technicians. We advise on precautions before applying any product. Our emergency treatments are family-friendly and effective.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </div>
  );
}
