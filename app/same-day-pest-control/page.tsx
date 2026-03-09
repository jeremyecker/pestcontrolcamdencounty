import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Same Day Pest Control Camden County NJ | Book Before Noon',
  description:
    'Same-day pest control in Camden County NJ. Call before noon for a same-day appointment in Cherry Hill, Voorhees, Haddon Heights, Haddon Township, Collingswood & all 16 towns. (856) 600-0812.',
  keywords:
    'same day pest control, same day exterminator Camden County, same day pest control Cherry Hill, emergency exterminator NJ, next day pest control Camden County',
};

export default function SameDayPestControl() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <span className="text-gray-900">Same Day Pest Control</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
            ⚡ TODAY&apos;S SLOTS AVAILABLE — CALL NOW
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Same Day Pest Control — Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Call before noon for a same-day pest control appointment anywhere in Camden County.
            Local technicians, NJDEP licensed, and ready to solve your pest problem today.
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
              Book Same-Day Online
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* When Same-Day is Critical */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            When Same-Day Pest Control Is Critical in Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Waiting days or weeks for a pest control appointment is not always an option. Camden County homeowners and
            businesses frequently encounter pest situations where a delayed response leads to significantly worse
            outcomes — more extensive property damage, greater health risks, higher treatment costs, and greater
            stress for everyone in the household. Our same-day pest control service is designed specifically for
            these situations, serving{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
            <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>,{' '}
            <Link href="/camden-county/haddon-heights" className="text-[#2B6CB0] hover:underline">Haddon Heights</Link>,{' '}
            <Link href="/camden-county/haddon-township" className="text-[#2B6CB0] hover:underline">Haddon Township</Link>,{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>, and
            every other community in Camden County.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🐜</span>
              <div>
                <h3 className="font-semibold text-[#1A365D]">You Have Guests or a Family Event Tomorrow</h3>
                <p className="text-gray-700">
                  Discovering ants swarming your kitchen, cockroaches under the sink, or a wasp nest over the front
                  door the day before a dinner party or family gathering is one of the most common reasons Camden County
                  residents call for same-day service. We handle these situations every week.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏠</span>
              <div>
                <h3 className="font-semibold text-[#1A365D]">A Home Sale or Inspection Is Pending</h3>
                <p className="text-gray-700">
                  Real estate transactions in Camden County regularly get delayed or derailed by pest problems
                  discovered during buyer inspections. If you are selling and need documentation of treatment before
                  a scheduled home inspection, or if a WDI (wood-destroying insect) report has flagged an issue,
                  our team can provide same-day assessment and treatment to keep your closing on track.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🛏️</span>
              <div>
                <h3 className="font-semibold text-[#1A365D]">Bed Bugs Were Just Discovered</h3>
                <p className="text-gray-700">
                  Bed bug infestations grow exponentially. A colony that is contained today becomes a whole-room
                  infestation next week. If you have just discovered bed bugs in your home, hotel room, or rental
                  property, same-day inspection and initial treatment protocols are critical to containing the outbreak
                  before it spreads.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🐀</span>
              <div>
                <h3 className="font-semibold text-[#1A365D]">A Rodent Is Active in Your Living Space</h3>
                <p className="text-gray-700">
                  Mice and rats rarely appear alone. If you see a rodent in your kitchen, living room, or bedroom during
                  daytime hours, that is a sign of a significant infestation — rodents are nocturnal and only become
                  visible during daylight when competition for resources is high. Same-day trapping and exclusion
                  measures are essential to prevent further spread.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🍽️</span>
              <div>
                <h3 className="font-semibold text-[#1A365D]">A Business Faces an Imminent Health Inspection</h3>
                <p className="text-gray-700">
                  Restaurants, food service businesses, and health care facilities in Camden County cannot afford to
                  wait for a scheduled pest control appointment when facing a health inspection. Same-day service
                  with documentation of corrective action can be the difference between passing an inspection and
                  receiving a violation notice.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            If your situation fits any of these scenarios — or if you simply want the problem solved today rather than
            scheduling it for later — call us at{' '}
            <a href="tel:+18566000812" className="text-[#2B6CB0] font-bold hover:underline">(856) 600-0812</a>{' '}
            before noon to secure a same-day appointment.
          </p>
        </section>

        {/* Response Times */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Typical Response Times Across Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            One of the biggest advantages of working with a locally based pest control company is speed. Because our
            technicians live and work in Camden County, we are never more than a short drive away from any part of the
            county. Here is what you can typically expect:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-semibold text-green-800 mb-2">📞 Call Before Noon</h3>
              <p className="text-gray-700 text-sm">
                For calls received before 12:00 PM, we schedule a same-day appointment for the afternoon. Availability
                is on a first-come, first-served basis. Cherry Hill, Voorhees, Haddon Heights, Haddon Township, and
                Collingswood are typically our fastest response zones.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-semibold text-blue-800 mb-2">📞 Call After Noon</h3>
              <p className="text-gray-700 text-sm">
                For calls received after noon, we schedule an appointment the next morning — typically between 7 AM
                and 10 AM — so you are never waiting more than 24 hours. True emergencies (wasps, bats, active rodents
                in living spaces) are escalated to{' '}
                <Link href="/emergency-pest-control" className="text-[#2B6CB0] hover:underline">emergency service</Link>.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-5">
              <h3 className="font-semibold text-yellow-800 mb-2">⚡ Emergency Priority Queue</h3>
              <p className="text-gray-700 text-sm">
                For genuine pest emergencies (wasps near children, bats in living spaces, rodents with active food
                contamination), you are moved to the top of the queue regardless of call time. Our priority emergency
                response targets dispatch within 1-2 hours for these situations.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5">
              <h3 className="font-semibold text-purple-800 mb-2">🏢 Commercial Priority</h3>
              <p className="text-gray-700 text-sm">
                Commercial accounts in Camden County — restaurants, rental properties, offices, retail stores —
                receive priority scheduling. We maintain dedicated commercial technician routes to ensure rapid
                response for businesses that cannot afford extended downtime due to pest issues.
              </p>
            </div>
          </div>
        </section>

        {/* What Can Be Done Same-Day */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            What Treatments Can Be Done Same-Day?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Many people assume that same-day service means a quick inspection and then a follow-up appointment for
            actual treatment. For the majority of common pest problems in Camden County, that is not the case —
            our technicians arrive equipped to inspect and treat in a single visit. Here is what we can typically
            accomplish on a same-day call:
          </p>
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-green-500 pl-5">
              <h3 className="font-semibold text-[#1A365D]">✓ Ant, Cockroach, and Spider Treatments</h3>
              <p className="text-gray-700 text-sm">
                Targeted residual treatments, gel bait applications, and exterior perimeter treatments can all be
                performed on the initial same-day visit. These are the most common same-day pest control requests
                we receive from Camden County homeowners.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-5">
              <h3 className="font-semibold text-[#1A365D]">✓ Wasp, Hornet, and Yellow Jacket Nest Removal</h3>
              <p className="text-gray-700 text-sm">
                Stinging insect nest removal is always a same-day service. Our technicians carry full protective
                equipment and professional wasp/hornet products on every vehicle. Nests of all sizes — from small
                paper wasp nests to large bald-faced hornet aerial nests to ground-nesting yellow jacket colonies —
                can be treated in a single visit.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-5">
              <h3 className="font-semibold text-[#1A365D]">✓ Rodent Trapping and Initial Exclusion</h3>
              <p className="text-gray-700 text-sm">
                We can place snap traps, glue boards, and exclusion materials on the same-day visit. For more
                extensive exclusion work requiring masonry or major structural repairs, we schedule a return visit,
                but immediate trapping and temporary sealing measures are always available same-day.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-5">
              <h3 className="font-semibold text-[#1A365D]">✓ Mosquito and Tick Barrier Treatments</h3>
              <p className="text-gray-700 text-sm">
                Same-day yard barrier treatments for mosquitoes and ticks are available throughout the season.
                Whether you have an outdoor event this weekend or simply want immediate protection, our backpack
                mist blower treatments provide fast-acting coverage of your entire property.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-5">
              <h3 className="font-semibold text-[#1A365D]">✓ Bed Bug Initial Inspection and Containment</h3>
              <p className="text-gray-700 text-sm">
                Same-day bed bug inspections and initial containment protocols (mattress encasements, interceptors,
                steam treatment of small areas) are available. Full heat treatment or whole-room chemical treatment
                typically requires a scheduled return visit with proper preparation.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-5">
              <h3 className="font-semibold text-[#1A365D]">✓ Wildlife Initial Response</h3>
              <p className="text-gray-700 text-sm">
                For wildlife in attics, crawl spaces, or living areas, same-day trapping setup and assessment is
                available. Complete wildlife exclusion work typically spans multiple visits over several weeks to
                ensure all animals have left the structure before permanent sealing.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-5">
              <h3 className="font-semibold text-[#1A365D]">⚠ Termite Treatment — Requires Scheduling</h3>
              <p className="text-gray-700 text-sm">
                Termite treatments (liquid soil applications, bait station systems) require pre-treatment preparation
                and cannot be rushed. However, we offer same-day{' '}
                <Link href="/termite-inspection" className="text-[#2B6CB0] hover:underline">termite inspections</Link>{' '}
                so you can understand the scope of the problem today and schedule treatment immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Same-Day Coverage Across All of Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our same-day service coverage spans all 16 municipalities in Camden County. With technicians based
            throughout the county, we maintain the fastest response times in the region:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { name: 'Cherry Hill', slug: 'cherry-hill' },
              { name: 'Voorhees', slug: 'voorhees' },
              { name: 'Haddon Heights', slug: 'haddon-heights' },
              { name: 'Haddon Township', slug: 'haddon-township' },
              { name: 'Collingswood', slug: 'collingswood' },
              { name: 'Haddonfield', slug: 'haddonfield' },
              { name: 'Marlton', slug: 'marlton' },
              { name: 'Mount Laurel', slug: 'mount-laurel' },
              { name: 'Pennsauken', slug: 'pennsauken' },
              { name: 'Gloucester Twp', slug: 'gloucester-township' },
              { name: 'Winslow Twp', slug: 'winslow-township' },
              { name: 'Lindenwold', slug: 'lindenwold' },
              { name: 'Bellmawr', slug: 'bellmawr' },
              { name: 'Audubon', slug: 'audubon' },
              { name: 'Barrington', slug: 'barrington' },
              { name: 'Runnemede', slug: 'runnemede' },
            ].map((town) => (
              <Link
                key={town.slug}
                href={`/camden-county/${town.slug}`}
                className="bg-green-50 hover:bg-green-100 text-[#1A365D] font-medium py-3 px-4 rounded-lg text-center transition-colors text-sm"
              >
                ⚡ {town.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Fastest response zones:</strong>{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
            <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>,{' '}
            <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,{' '}
            <Link href="/camden-county/haddon-heights" className="text-[#2B6CB0] hover:underline">Haddon Heights</Link>, and{' '}
            <Link href="/camden-county/haddon-township" className="text-[#2B6CB0] hover:underline">Haddon Township</Link>{' '}
            typically see technician arrival within 2-3 hours of a morning call. More distant areas like{' '}
            <Link href="/camden-county/winslow-township" className="text-[#2B6CB0] hover:underline">Winslow Township</Link>{' '}
            and <Link href="/camden-county/gloucester-township" className="text-[#2B6CB0] hover:underline">Gloucester Township</Link>{' '}
            are served in the afternoon for morning calls.
          </p>
        </section>

        {/* How to Secure a Same-Day Slot */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            How to Secure Your Same-Day Appointment
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-[#1A365D]">Call Before Noon</h3>
                <p className="text-gray-700">
                  Same-day slots fill up, especially in spring and summer when pest activity peaks throughout Camden
                  County. Calling early — ideally by 10 AM — gives you the best chance of securing a morning or early
                  afternoon appointment. Call{' '}
                  <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-[#1A365D]">Describe the Pest and Location</h3>
                <p className="text-gray-700">
                  Tell us the pest (or your best description), where you are seeing it, and how long the problem
                  has been going on. This helps us dispatch the right technician with the right equipment, so we
                  can inspect and treat in a single visit rather than requiring a return trip.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-[#1A365D]">Confirm Your Address and Access</h3>
                <p className="text-gray-700">
                  Provide your full address in Camden County and confirm access to the relevant areas (attic, crawl
                  space, basement, garage, yard). If you have pets, let us know so we can advise on any precautions
                  ahead of the visit.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-[#1A365D]">We Arrive and Solve the Problem</h3>
                <p className="text-gray-700">
                  Your NJDEP-licensed technician arrives at the scheduled time, inspects the property, confirms the
                  pest and treatment plan, provides a written quote, and begins treatment — all in the same visit.
                  No waiting around for a second appointment just to get started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Frequently Asked Questions — Same-Day Pest Control in Camden County
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">How do I guarantee a same-day appointment in Camden County?</h3>
              <p className="text-gray-700">
                Call our line at{' '}
                <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>{' '}
                before noon. Same-day appointments are first come, first served and are subject to technician
                availability in your area of Camden County. Calling early — before 10 AM — maximizes your chances
                of getting a morning appointment. Online booking requests submitted before noon are also eligible for
                same-day service but are confirmed by phone.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">What pests can you treat same-day in Camden County?</h3>
              <p className="text-gray-700">
                We can treat same-day: ants, cockroaches, spiders, wasps, hornets, yellow jackets, fleas, ticks,
                mosquitoes (barrier sprays), bed bugs (initial inspection and containment), rodents (trapping and
                initial exclusion), and wildlife (initial trapping setup). Termite treatments and full bed bug heat
                treatment require a scheduled appointment due to pre-treatment preparation requirements.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Do you serve Cherry Hill and Voorhees same-day?</h3>
              <p className="text-gray-700">
                Yes. <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>{' '}
                and <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>{' '}
                are among our highest-volume same-day service areas in Camden County. We have technicians based near
                these townships and can typically dispatch within 1-2 hours of your call for most pest situations.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Is same-day service more expensive than a scheduled appointment?</h3>
              <p className="text-gray-700">
                No. Our pricing for same-day pest control is the same as our standard pricing for scheduled
                appointments. We do not charge premium rates for same-day availability. You receive the same
                NJDEP-licensed technician, the same professional-grade treatments, and the same satisfaction
                guarantee regardless of when you book. The only difference is speed of response.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Can I get a free inspection on a same-day call?</h3>
              <p className="text-gray-700">
                Yes. Our{' '}
                <Link href="/free-pest-inspection" className="text-[#2B6CB0] hover:underline">free pest inspection</Link>{' '}
                is available on same-day appointments. Your technician will inspect the property, identify the pest,
                and provide a written quote before any treatment begins. There is no charge for the inspection and no
                obligation to proceed with treatment if you are not satisfied with the plan.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">Do you serve Haddon Heights and Haddon Township?</h3>
              <p className="text-gray-700">
                Yes.{' '}
                <Link href="/camden-county/haddon-heights" className="text-[#2B6CB0] hover:underline">Haddon Heights</Link>{' '}
                and{' '}
                <Link href="/camden-county/haddon-township" className="text-[#2B6CB0] hover:underline">Haddon Township</Link>{' '}
                are fully within our same-day service zone. These communities, with their mix of early-20th-century
                homes and established tree canopy, see significant activity from carpenter ants, rodents, and
                termites. Our local team is very familiar with the pest challenges specific to these neighborhoods
                and responds quickly to same-day calls.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#1A365D] mb-2">What if the pest problem is more serious than expected?</h3>
              <p className="text-gray-700">
                If our technician arrives and discovers a larger or more complex infestation than described, we will
                perform the same-day inspection, explain exactly what we found, and provide a revised written quote
                for a comprehensive treatment plan. You are never committed to a treatment until you have reviewed
                and agreed to a written estimate. For complex situations requiring multiple visits, we schedule
                follow-up appointments at the same visit so you do not have to call back.
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
            <Link href="/emergency-pest-control" className="block bg-red-50 hover:bg-red-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Emergency Pest Control →</h3>
              <p className="text-gray-600 text-sm">For true pest emergencies that cannot wait at all</p>
            </Link>
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Pest Control Near Me →</h3>
              <p className="text-gray-600 text-sm">Local pest control for every pest in Camden County</p>
            </Link>
            <Link href="/exterminator-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Exterminator Near Me →</h3>
              <p className="text-gray-600 text-sm">Licensed exterminators throughout Camden County, NJ</p>
            </Link>
            <Link href="/free-pest-inspection" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Free Pest Inspection →</h3>
              <p className="text-gray-600 text-sm">No-cost, no-obligation property inspection — available same-day</p>
            </Link>
            <Link href="/termite-inspection" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Termite Inspection →</h3>
              <p className="text-gray-600 text-sm">Same-day termite assessments for Camden County homes</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            Do Not Wait — Book Your Same-Day Appointment Now
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Same-day slots fill up fast across Camden County. Call before noon for a same-day visit from
            a NJDEP-licensed pest control professional.
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
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <section className="bg-[#1A365D] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Same-Day Pest Control Across Camden County</h2>
          <p className="text-blue-200 text-lg mb-6">
            Call before noon. NJDEP-licensed. All 16 towns served.
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
            '@graph': [
              {
                '@type': 'PestControlService',
                name: 'Camden County Pest Control — Same Day Service',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/same-day-pest-control',
                description:
                  'Same-day pest control in Camden County, NJ. Call before noon for same-day service in Cherry Hill, Voorhees, Haddon Heights, Haddon Township, Collingswood, and all 16 towns.',
                areaServed: {
                  '@type': 'County',
                  name: 'Camden County',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'New Jersey',
                  },
                },
                serviceType: 'Same Day Pest Control',
                availableChannel: {
                  '@type': 'ServiceChannel',
                  servicePhone: '(856) 600-0812',
                  availableLanguage: 'English',
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'How do I guarantee a same-day appointment in Camden County?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Call (856) 600-0812 before noon. Same-day appointments are first come, first served. Calling before 10 AM maximizes your chances. Online booking before noon is also eligible but confirmed by phone.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What pests can you treat same-day in Camden County?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We can treat same-day: ants, cockroaches, spiders, wasps, hornets, yellow jackets, fleas, ticks, mosquitoes, bed bugs (inspection and containment), rodents (trapping and initial exclusion), and wildlife (initial trapping setup).',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is same-day service more expensive than a scheduled appointment?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No. Our pricing for same-day pest control is the same as our standard pricing. We do not charge premium rates for same-day availability.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you serve Haddon Heights and Haddon Township same-day?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Haddon Heights and Haddon Township are fully within our same-day service zone. We have technicians familiar with the pest challenges of these communities and can typically respond within hours of a morning call.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I get a free inspection on a same-day call?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Our free pest inspection is available on same-day appointments. Your technician will inspect, identify the pest, and provide a written quote before any treatment begins, with no obligation to proceed.',
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
