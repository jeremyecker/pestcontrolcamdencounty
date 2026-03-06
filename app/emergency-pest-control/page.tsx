import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Emergency Pest Control Camden County NJ | 24/7 Response',
  description:
    'Emergency pest control in Camden County NJ. Wasps, rats, bed bugs, termite swarms — we respond fast when you need us most. Call (856) 600-0812 now.',
  keywords:
    'emergency pest control, emergency exterminator Camden County, 24/7 pest control NJ, urgent pest removal Cherry Hill, emergency rat removal',
};

export default function EmergencyPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <span className="text-gray-900">Emergency Pest Control</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Emergency Pest Control in Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            Some pest situations cannot wait. When you are dealing with a wasp attack, a rat inside your living space,
            a bat in your bedroom, or a termite swarm — call us immediately.
          </p>
          <p className="text-2xl font-bold text-[#DD6B20] mb-8">
            Fast Response — Evenings & Weekends Available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18566000812"
              className="bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors animate-pulse"
            >
              🚨 Call Now: (856) 600-0812
            </a>
            <Link
              href="/contact"
              className="bg-white text-[#1A365D] font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors"
            >
              Request Emergency Service
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* When to Call */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            When Is a Pest Situation an Emergency?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Not every pest sighting requires an emergency call — but some situations are genuinely urgent and should not
            be delayed until Monday morning. A pest emergency exists when there is an immediate threat to your health,
            safety, or property, or when delay will dramatically worsen the problem. In Camden County, we see emergency
            pest situations year-round, driven by the region&apos;s climate, older housing stock, and proximity to
            wooded and waterway habitats. Here are the most common emergencies we respond to:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">🐝 Wasp or Hornet Attack</h3>
              <p className="text-gray-700 mb-3">
                A wasp nest over a doorway, inside a wall void, or in a ground cavity near a play area is a serious
                safety hazard — especially for children and anyone with allergies. Yellow jackets, paper wasps, and
                bald-faced hornets are aggressive when their nests are disturbed, and a single nest can contain
                hundreds or thousands of stinging insects. Do not attempt to remove a nest yourself.
              </p>
              <Link href="/services/wasp-hornet-removal" className="text-[#2B6CB0] font-semibold hover:underline">
                Learn about our wasp & hornet removal →
              </Link>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">🐀 Rat or Mouse in Living Space</h3>
              <p className="text-gray-700 mb-3">
                A rat running across your kitchen floor or a mouse scratching inside your bedroom wall is not just
                disturbing — it indicates a likely larger infestation. Rodents carry diseases (hantavirus,
                leptospirosis, salmonella), contaminate food, and chew through electrical wiring, creating fire hazards.
                In <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
                <Link href="/camden-county/pennsauken" className="text-[#2B6CB0] hover:underline">Pennsauken</Link>, and
                older Camden County neighborhoods, rodent emergencies spike in fall and winter.
              </p>
              <Link href="/services/rodent-control" className="text-[#2B6CB0] font-semibold hover:underline">
                Learn about our rodent control →
              </Link>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">🛏️ Bed Bug Discovery</h3>
              <p className="text-gray-700 mb-3">
                Discovering bed bugs — live insects, shed skins, or blood spots on your sheets — requires immediate
                professional treatment. Every night you wait, bed bugs reproduce and spread to adjacent rooms. A small,
                contained problem on Monday can become a whole-house infestation by Friday. Bed bugs are resistant to
                most over-the-counter products, making professional heat treatment or targeted chemical applications
                essential.
              </p>
              <Link href="/services/bed-bug-removal" className="text-[#2B6CB0] font-semibold hover:underline">
                Learn about our bed bug removal →
              </Link>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">🪵 Termite Swarm</h3>
              <p className="text-gray-700 mb-3">
                If you see hundreds of winged insects emerging from your walls, floors, or foundation, you are witnessing
                a termite swarm — a sign that a mature colony has been silently damaging your home for years. In Camden
                County, termite swarms typically occur from March through May when soil temperatures rise. This is a
                true emergency because it confirms active, established structural damage. Contact us immediately for
                a <Link href="/termite-inspection" className="text-[#2B6CB0] hover:underline">termite inspection</Link>.
              </p>
              <Link href="/services/termite-treatment" className="text-[#2B6CB0] font-semibold hover:underline">
                Learn about our termite treatment →
              </Link>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">🦇 Bat Inside Your Home</h3>
              <p className="text-gray-700 mb-3">
                A bat flying through your living space is an emergency because of the rabies risk. New Jersey has
                confirmed rabid bats every year. If anyone in the home was asleep or a child was in the room with the
                bat, the NJ Department of Health may recommend rabies post-exposure prophylaxis. Do not release the bat —
                it may need to be tested. Call us immediately, and we will safely capture the bat and help you coordinate
                with local health authorities.
              </p>
              <Link href="/services/bat-removal" className="text-[#2B6CB0] font-semibold hover:underline">
                Learn about our bat removal →
              </Link>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">🦝 Wildlife in Living Space</h3>
              <p className="text-gray-700 mb-3">
                A raccoon in your attic, a squirrel that has chewed through your ceiling, or an opossum trapped in your
                garage demands professional handling. Cornered wildlife can be aggressive and may carry rabies or other
                diseases. In wooded areas of <Link href="/camden-county/winslow-township" className="text-[#2B6CB0] hover:underline">Winslow Township</Link>,{' '}
                <Link href="/camden-county/clementon" className="text-[#2B6CB0] hover:underline">Clementon</Link>, and{' '}
                <Link href="/camden-county/gloucester-township" className="text-[#2B6CB0] hover:underline">Gloucester Township</Link>,
                wildlife emergencies are common year-round.
              </p>
              <Link href="/services/wildlife-removal" className="text-[#2B6CB0] font-semibold hover:underline">
                Learn about our wildlife removal →
              </Link>
            </div>
          </div>
        </section>

        {/* Our Emergency Response */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            How Our Emergency Response Works
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            When you call Camden County Pest Control with a pest emergency, here is exactly what happens — and how
            we are different from companies that make you wait:
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">1</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Immediate Phone Assessment</h3>
                <p className="text-gray-700">
                  When you call <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>,
                  you speak with a knowledgeable team member who assesses the urgency of your situation. We ask specific
                  questions to identify the pest, evaluate the safety risk, and determine the fastest appropriate
                  response. If you are in immediate danger (e.g., a wasp nest over the only exit, or a bat in a room
                  with a child), we prioritize your call above routine appointments.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Rapid Technician Dispatch</h3>
                <p className="text-gray-700">
                  Because our technicians are based throughout Camden County, we can often have someone at your door
                  within hours — not days. Our emergency response covers evenings and weekends because pest emergencies
                  do not wait for business hours. Whether you are in{' '}
                  <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>,{' '}
                  <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>, or{' '}
                  <Link href="/camden-county/mount-laurel" className="text-[#2B6CB0] hover:underline">Mount Laurel</Link>,
                  help is close by.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">On-Site Emergency Treatment</h3>
                <p className="text-gray-700">
                  Our technician arrives fully equipped for the specific emergency — wasp suits and rapid knockdown
                  products for stinging insects, live traps and exclusion materials for wildlife, inspection tools for
                  termite swarms, or heat treatment equipment for bed bugs. We handle the immediate threat on the
                  first visit, not just "assess" and schedule a return trip.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">4</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Follow-Up & Prevention Plan</h3>
                <p className="text-gray-700">
                  After the immediate emergency is resolved, we schedule a comprehensive follow-up inspection to
                  address the underlying cause. Emergency treatment stops the crisis; the follow-up treatment ensures
                  it does not happen again. This may include exclusion work, structural repairs, ongoing monitoring,
                  or a maintenance plan to protect your property long-term.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Every Hour Counts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Why Every Hour Counts in a Pest Emergency
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Pest emergencies worsen exponentially with delay. Understanding why timing matters can help you make the
            right call when it counts:
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">Bed Bugs Reproduce Rapidly</h3>
              <p className="text-gray-700">
                A single female bed bug lays 1–5 eggs per day and up to 500 in her lifetime. Within weeks, a handful
                of bed bugs becomes hundreds. Every day you delay treatment, the infestation expands to new rooms and
                furniture, increasing treatment complexity and cost. Our{' '}
                <Link href="/services/bed-bug-removal" className="text-[#2B6CB0] hover:underline">bed bug removal</Link>{' '}
                program uses heat treatment that kills all life stages in a single visit.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">Termite Damage Is Ongoing and Silent</h3>
              <p className="text-gray-700">
                A mature termite colony consumes wood 24 hours a day, 7 days a week. By the time you see a swarm,
                the colony has likely been active for 3–5 years. Every day of continued activity adds to the structural
                damage — damage that can cost tens of thousands of dollars to repair. Scheduling a{' '}
                <Link href="/termite-inspection" className="text-[#2B6CB0] hover:underline">termite inspection</Link>{' '}
                immediately after a swarm event limits additional damage.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">Stinging Insects Are Dangerous</h3>
              <p className="text-gray-700">
                According to the CDC, stinging insects send more than 500,000 people to the emergency room annually
                in the United States. For individuals with venom allergies, a single sting can be life-threatening.
                If you have a wasp or hornet nest near an entry point, play area, or high-traffic zone, do not wait.
                Our <Link href="/services/wasp-hornet-removal" className="text-[#2B6CB0] hover:underline">wasp and hornet removal</Link>{' '}
                team eliminates the threat safely.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">Rodents Cause Fires and Disease</h3>
              <p className="text-gray-700">
                Rodents gnaw on electrical wiring, which is estimated to cause up to 25% of undetermined house fires.
                They also contaminate food preparation surfaces with urine and droppings carrying dangerous pathogens.
                A rat inside your home tonight will bring others — rodents are social animals that follow pheromone
                trails. Our <Link href="/services/rodent-control" className="text-[#2B6CB0] hover:underline">rodent control</Link>{' '}
                team responds quickly with trapping and exclusion.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-2">Wildlife Carries Rabies</h3>
              <p className="text-gray-700">
                New Jersey confirms rabies cases in raccoons, bats, skunks, and foxes every year. If a bat is found
                inside your home, or a raccoon or other wildlife is behaving erratically, the rabies risk is real.
                The NJ Department of Health provides guidelines for potential rabies exposure, and our team can safely
                capture the animal for testing. Our{' '}
                <Link href="/services/raccoon-removal" className="text-[#2B6CB0] hover:underline">raccoon removal</Link>{' '}
                and <Link href="/services/bat-removal" className="text-[#2B6CB0] hover:underline">bat removal</Link>{' '}
                technicians handle these situations daily.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Coverage Area */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Emergency Pest Control Across All of Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our emergency response covers every community in <Link href="/camden-county" className="text-[#2B6CB0] hover:underline">Camden County</Link>.
            Because we have technicians based throughout the region, response times are short regardless of your location:
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
                className="bg-red-50 hover:bg-red-100 text-[#1A365D] font-medium py-2 px-3 rounded-lg text-center transition-colors text-sm"
              >
                {town.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you are near the Delaware River in Pennsauken, deep in the wooded subdivisions of Winslow Township,
            or in a townhome community in <Link href="/camden-county/lindenwold" className="text-[#2B6CB0] hover:underline">Lindenwold</Link>{' '}
            or <Link href="/camden-county/somerdale" className="text-[#2B6CB0] hover:underline">Somerdale</Link>,
            our emergency team can reach you quickly. For non-emergency pest problems that still need fast attention,
            check our <Link href="/same-day-pest-control" className="text-[#2B6CB0] hover:underline">same-day pest control</Link>{' '}
            service.
          </p>
        </section>

        {/* What To Do While Waiting */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            What to Do While Waiting for Emergency Pest Control
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            After you call us, here are some steps you can take to stay safe and minimize damage while our technician
            is en route:
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-lg">→</span>
              <div>
                <strong className="text-[#1A365D]">Stinging insects:</strong>{' '}
                <span className="text-gray-700">Keep everyone away from the nest area. Close windows and doors near the nest. Do not spray the nest with water or retail insecticide — this will agitate the colony and make them more aggressive.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-lg">→</span>
              <div>
                <strong className="text-[#1A365D]">Rodents in living space:</strong>{' '}
                <span className="text-gray-700">Confine the rodent to one room if possible by closing doors. Do not corner it — cornered rodents can bite. Keep pets and children away from the area.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-lg">→</span>
              <div>
                <strong className="text-[#1A365D]">Bats:</strong>{' '}
                <span className="text-gray-700">Close the bat into one room and open a window in that room. Do not handle the bat with bare hands. If anyone may have been bitten or scratched, contact your physician or local health department immediately.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-lg">→</span>
              <div>
                <strong className="text-[#1A365D]">Bed bugs:</strong>{' '}
                <span className="text-gray-700">Do not move bedding, furniture, or clothing to other rooms — this spreads the infestation. Avoid using bug bombs or retail sprays, which scatter bed bugs and make professional treatment harder.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-lg">→</span>
              <div>
                <strong className="text-[#1A365D]">Termite swarms:</strong>{' '}
                <span className="text-gray-700">Collect several swarmers in a plastic bag for identification. Note exactly where they emerged. The swarm itself is harmless — the swarmers do not bite or damage wood — but it confirms a hidden colony that needs professional treatment.</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#DD6B20] font-bold text-lg">→</span>
              <div>
                <strong className="text-[#1A365D]">Wildlife:</strong>{' '}
                <span className="text-gray-700">Do not attempt to trap, handle, or approach the animal. Keep a safe distance, close off access to the rest of the house, and wait for our licensed wildlife control technician.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="bg-red-50 border-2 border-red-300 rounded-xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            🚨 Do Not Wait — Call Now for Emergency Pest Control
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Our emergency team is ready to respond to your Camden County pest emergency. Fast dispatch, professional
            treatment, and guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18566000812"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              🚨 Call (856) 600-0812 Now
            </a>
            <Link
              href="/contact"
              className="bg-[#1A365D] hover:bg-[#2B6CB0] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              Request Emergency Service
            </Link>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/same-day-pest-control" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Same-Day Service →</h3>
              <p className="text-gray-600 text-sm">For urgent but non-emergency pest problems</p>
            </Link>
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Pest Control Near Me →</h3>
              <p className="text-gray-600 text-sm">Full-service pest control for Camden County</p>
            </Link>
            <Link href="/free-pest-inspection" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Free Inspection →</h3>
              <p className="text-gray-600 text-sm">Schedule a no-cost pest inspection</p>
            </Link>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <section className="bg-[#1A365D] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pest Emergency? We Are Here.</h2>
          <p className="text-blue-200 text-lg mb-6">
            Fast, professional emergency pest control for all of Camden County. Evenings and weekends available.
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
            name: 'Camden County Pest Control - Emergency Services',
            telephone: '(856) 600-0812',
            url: 'https://pestcontrolcamdencounty.com/emergency-pest-control',
            description:
              'Emergency pest control services in Camden County, NJ. Fast response for wasps, rodents, bed bugs, termite swarms, bats, and wildlife emergencies.',
            areaServed: {
              '@type': 'County',
              name: 'Camden County',
              containedInPlace: {
                '@type': 'State',
                name: 'New Jersey',
              },
            },
            serviceType: 'Emergency Pest Control',
            availableChannel: {
              '@type': 'ServiceChannel',
              servicePhone: {
                '@type': 'ContactPoint',
                telephone: '+1-856-600-0812',
                contactType: 'emergency',
                availableLanguage: 'English',
              },
            },
          }),
        }}
      />
    </div>
  );
}
