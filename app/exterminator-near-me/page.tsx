import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, REGIONS } from '@/hub.config';
import { SERVICES } from '@/lib/services';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  title: 'Exterminator Near Me in Camden County NJ | Licensed & Insured',
  description:
    'Looking for a licensed exterminator near you in Camden County NJ? NJDEP-certified professionals serving Cherry Hill, Voorhees, Haddonfield & more. Call (856) 600-0812.',
  keywords:
    'exterminator near me, exterminator Camden County NJ, licensed exterminator Cherry Hill, pest exterminator Voorhees, NJ exterminator',
};

export default function ExterminatorNearMe() {
  return (
    <div className="min-h-screen">
      <TrustBar />

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
        {' → '}
        <span className="text-gray-900">Exterminator Near Me</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Licensed Exterminator Near Me in Camden County, NJ
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            NJDEP-certified exterminators with the training, tools, and local expertise to eliminate
            any pest from your Camden County home or business.
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
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* What Makes a Great Exterminator */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            What Makes a Great Exterminator? Here Is What to Look For
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            When you search for "exterminator near me" in Camden County, dozens of results appear — national chains,
            solo operators, and everything in between. But not all exterminators are created equal. Choosing the wrong
            one can mean wasted money, continued infestations, and even health risks from improperly applied chemicals.
            Here is what separates a truly professional exterminator from the rest:
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Proper licensing is non-negotiable.</strong> In New Jersey, anyone applying pesticides commercially
            must hold a valid license issued by the New Jersey Department of Environmental Protection (NJDEP). This is
            not optional — it is state law under the New Jersey Pesticide Control Act (N.J.S.A. 13:1F-1 et seq.). A
            licensed exterminator has passed rigorous examinations demonstrating knowledge of pesticide chemistry,
            application methods, safety protocols, integrated pest management, and New Jersey environmental regulations.
            Every technician at Camden County Pest Control holds a current NJDEP pesticide applicator license, and we
            maintain all required business permits and insurance coverage.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>Experience with local pests matters.</strong> Camden County sits in the mid-Atlantic corridor where
            northern and southern pest species overlap. We deal with subterranean termites that thrive in our clay soils,
            carpenter ants attracted to the mature hardwood trees in <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link> and{' '}
            <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,
            German cockroaches in the dense housing of <Link href="/camden-county/lindenwold" className="text-[#2B6CB0] hover:underline">Lindenwold</Link> and{' '}
            <Link href="/camden-county/somerdale" className="text-[#2B6CB0] hover:underline">Somerdale</Link>,
            and wildlife invasions along the wooded edges of <Link href="/camden-county/winslow-township" className="text-[#2B6CB0] hover:underline">Winslow Township</Link> and{' '}
            <Link href="/camden-county/gloucester-township" className="text-[#2B6CB0] hover:underline">Gloucester Township</Link>.
            A great exterminator knows these local patterns and adjusts their approach accordingly.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>An IPM-first approach.</strong> The best exterminators do not just spray chemicals and leave. They
            practice Integrated Pest Management — a comprehensive strategy that starts with thorough inspection and pest
            identification, then uses a combination of exclusion, sanitation, habitat modification, and targeted chemical
            treatments to solve the problem at its source. This approach is more effective, longer-lasting, and safer for
            your family and pets than blanket chemical applications.
          </p>
        </section>

        {/* NJ Licensing Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            New Jersey Exterminator Licensing: What You Need to Know
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            New Jersey has some of the strictest pest control licensing requirements in the country, and for good reason —
            improper pesticide use can contaminate groundwater, harm non-target wildlife, and pose serious health risks
            to humans and pets. As a homeowner or business owner in Camden County, understanding these requirements helps
            you make informed decisions when hiring an exterminator:
          </p>
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-[#1A365D] mb-4">NJ Pesticide Licensing Categories</h3>
            <ul className="text-gray-700 space-y-3">
              <li className="flex gap-2">
                <span className="text-[#DD6B20] font-bold">→</span>
                <span><strong>Commercial Pesticide Applicator:</strong> Required for anyone applying pesticides as part of a business. Must pass written examinations administered by the NJDEP covering general standards and the specific pest control category (Category 7A for General Pest Control, 7D for Wildlife, etc.).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#DD6B20] font-bold">→</span>
                <span><strong>Certified Pesticide Applicator:</strong> A supervisory license for technicians who oversee other applicators. Requires additional testing and experience.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#DD6B20] font-bold">→</span>
                <span><strong>Business Permit:</strong> Every pest control company operating in NJ must hold a valid NJDEP business permit. This permit requires proof of insurance, a designated certified applicator, and compliance with NJ recordkeeping and reporting requirements.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#DD6B20] font-bold">→</span>
                <span><strong>Continuing Education:</strong> Licensed applicators must complete continuing education credits (CEUs) to maintain their licenses, ensuring they stay current with the latest products, techniques, and regulations.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#DD6B20] font-bold">→</span>
                <span><strong>Wildlife Control:</strong> Technicians performing wildlife removal (raccoons, squirrels, bats, birds) must also hold appropriate NJDEP Wildlife Control permits in addition to their pesticide applicator licenses.</span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Always ask to see credentials.</strong> A legitimate exterminator will gladly show you their NJDEP
            license, business permit, and proof of insurance. If they hesitate, that is a major red flag. At Camden County
            Pest Control, our licensing information is available upon request, and every technician carries their license
            card on every job. We are fully transparent because we have nothing to hide.
          </p>
        </section>

        {/* What to Expect from a Visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            What to Expect from a Professional Exterminator Visit
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If you have never hired an exterminator before, you may not know what a professional visit looks like. Here
            is a detailed breakdown of the process when you hire Camden County Pest Control:
          </p>

          <div className="space-y-6 mb-6">
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">1. Initial Consultation</h3>
              <p className="text-gray-700">
                When you call <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>,
                our team gathers information about the pest problem you are experiencing — the type of pest (if known),
                where you are seeing activity, how long it has been going on, and any relevant details about your
                property. This helps us dispatch the right technician with the right equipment for your situation.
              </p>
            </div>
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">2. Thorough Property Inspection</h3>
              <p className="text-gray-700">
                Our technician performs a comprehensive inspection of your property — interior and exterior. This includes
                checking the foundation, crawl space, attic, basement, kitchen, bathrooms, garage, landscaping, and all
                exterior walls. We look for active pest activity, entry points, conducive conditions (moisture, food
                sources, harborage areas), and evidence of previous infestations. For{' '}
                <Link href="/termite-inspection" className="text-[#2B6CB0] hover:underline">termite inspections</Link>,
                we use specialized moisture meters and probing tools to check for hidden damage. This inspection is
                included with your <Link href="/free-pest-inspection" className="text-[#2B6CB0] hover:underline">free pest inspection</Link>.
              </p>
            </div>
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">3. Identification & Assessment</h3>
              <p className="text-gray-700">
                Proper pest identification is crucial because different species require different treatments. For example,
                carpenter ants and odorous house ants look similar but require completely different treatment strategies.
                German cockroaches and American cockroaches behave differently and harbor in different areas. Our
                technicians are trained to identify species accurately, assess infestation severity, and determine the
                most effective treatment approach.
              </p>
            </div>
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">4. Treatment Plan & Transparent Pricing</h3>
              <p className="text-gray-700">
                Before any treatment begins, you receive a detailed explanation of the recommended approach, the products
                to be used, any preparation needed on your part, safety precautions, and a written price quote. We
                believe in full transparency — no hidden fees, no bait-and-switch, and absolutely no pressure to agree
                to services you do not need.
              </p>
            </div>
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">5. Professional Treatment Application</h3>
              <p className="text-gray-700">
                Depending on the pest, treatment may include targeted liquid applications, gel baits, dust formulations,
                granular treatments, mechanical traps, exclusion work, or a combination. Our technicians use
                professional-grade products that are not available in retail stores — these products are more effective,
                longer-lasting, and more precisely targeted than anything you can buy at a hardware store.
              </p>
            </div>
            <div className="border-l-4 border-[#DD6B20] pl-6">
              <h3 className="text-xl font-semibold text-[#1A365D] mb-2">6. Follow-Up & Guarantee</h3>
              <p className="text-gray-700">
                Most treatments include one or more follow-up visits to monitor results, re-treat if necessary, and
                confirm the infestation is fully resolved. We stand behind our work — if the pests come back between
                treatments, so do we, at no additional cost.
              </p>
            </div>
          </div>
        </section>

        {/* Exterminator vs DIY */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Professional Exterminator vs. DIY Pest Control
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Many Camden County homeowners try DIY pest control before calling a professional. While store-bought sprays
            and traps can sometimes handle a minor problem, they often fail for more serious infestations — and can
            actually make the situation worse. Here is an honest comparison:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">❌ DIY Limitations</h3>
              <ul className="text-gray-700 space-y-2">
                <li>→ Retail products are weaker than professional-grade formulations</li>
                <li>→ Without proper identification, you may treat the wrong pest or use the wrong product</li>
                <li>→ Surface sprays repel pests away from treated areas — pushing them deeper into walls and voids</li>
                <li>→ No access to professional baiting systems, exclusion materials, or heat treatment equipment</li>
                <li>→ Risk of overusing pesticides, creating health hazards for your family</li>
                <li>→ No warranty or follow-up if the problem persists</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">✓ Professional Advantages</h3>
              <ul className="text-gray-700 space-y-2">
                <li>→ Access to commercial-grade products and application equipment</li>
                <li>→ Accurate pest identification for targeted, effective treatment</li>
                <li>→ Training in safe handling, application, and dosing of pesticides</li>
                <li>→ Exclusion and structural repairs to prevent re-infestation</li>
                <li>→ Knowledge of pest biology and behavior patterns for strategic placement</li>
                <li>→ Warranty-backed results with free re-treatment if pests return</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            For minor issues like a few ants on the counter, DIY solutions may buy you time. But for termites, bed bugs,
            rodents, cockroach infestations, wildlife in your attic, or any problem that persists despite your efforts,
            a professional exterminator is the smart investment. The cost of professional treatment is almost always less
            than the cost of ongoing DIY failures and the property damage that results from an unresolved infestation.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Our Extermination Services
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our Camden County exterminators are equipped to handle every common residential and commercial pest:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            <Link href="/services/ant-control" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🐜 Ant Control
            </Link>
            <Link href="/services/termite-treatment" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🪵 Termite Treatment
            </Link>
            <Link href="/services/bed-bug-removal" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🛏️ Bed Bug Removal
            </Link>
            <Link href="/services/rodent-control" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🐀 Rodent Control
            </Link>
            <Link href="/services/cockroach-control" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🪳 Cockroach Control
            </Link>
            <Link href="/services/mosquito-control" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🦟 Mosquito Control
            </Link>
            <Link href="/services/spider-control" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🕷️ Spider Control
            </Link>
            <Link href="/services/wasp-hornet-removal" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🐝 Wasp & Hornet Removal
            </Link>
            <Link href="/services/wildlife-removal" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🦝 Wildlife Removal
            </Link>
            <Link href="/services/raccoon-removal" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🦝 Raccoon Removal
            </Link>
            <Link href="/services/bat-removal" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🦇 Bat Removal
            </Link>
            <Link href="/services/commercial-pest-control" className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-lg p-3 transition-colors text-[#1A365D] font-medium">
              🏢 Commercial Pest Control
            </Link>
          </div>
        </section>

        {/* Towns We Serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Camden County Towns We Serve
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our exterminators provide service throughout all of <Link href="/camden-county" className="text-[#2B6CB0] hover:underline">Camden County, NJ</Link>.
            No matter which town you are in, we can be at your property quickly — usually the same day you call. Our
            service coverage includes:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
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
                className="text-[#2B6CB0] hover:underline text-center py-2"
              >
                {town.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Each town in Camden County presents different pest challenges. The densely built neighborhoods of{' '}
            <Link href="/camden-county/runnemede" className="text-[#2B6CB0] hover:underline">Runnemede</Link>,{' '}
            <Link href="/camden-county/bellmawr" className="text-[#2B6CB0] hover:underline">Bellmawr</Link>, and{' '}
            <Link href="/camden-county/audubon" className="text-[#2B6CB0] hover:underline">Audubon</Link> see high rates
            of ant and cockroach activity due to closely spaced homes and shared walls. The larger lots and wooded buffers
            in <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>,{' '}
            <Link href="/camden-county/mount-laurel" className="text-[#2B6CB0] hover:underline">Mount Laurel</Link>, and{' '}
            <Link href="/camden-county/marlton" className="text-[#2B6CB0] hover:underline">Marlton</Link> create
            ideal habitat for wildlife, ticks, and mosquitoes. Our local knowledge means we arrive at your door already
            knowing the most likely pests and the most effective treatment strategies for your specific neighborhood.
          </p>
        </section>

        {/* Questions to Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            5 Questions to Ask Before Hiring an Exterminator
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Protect yourself by asking these questions before hiring any exterminator in Camden County:
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-1">1. "Are you licensed by the NJDEP?"</h3>
              <p className="text-gray-700">Ask to see their license card and business permit. You can verify NJ pest control licenses through the NJDEP website. An unlicensed operator puts your family at risk and may void your homeowners insurance if damage occurs.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-1">2. "Do you carry liability insurance?"</h3>
              <p className="text-gray-700">A professional exterminator carries both general liability and workers&apos; compensation insurance. This protects you from liability if a technician is injured on your property or if treatment causes unintended damage.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-1">3. "What pest control method will you use?"</h3>
              <p className="text-gray-700">A good exterminator explains their approach before starting. If they cannot clearly describe the treatment plan, the products they will use, and why that approach is best for your specific pest, look elsewhere.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-1">4. "Do you offer a written guarantee?"</h3>
              <p className="text-gray-700">Reputable companies stand behind their work with a written warranty. Ask what it covers, how long it lasts, and what happens if the pests return. At Camden County Pest Control, we guarantee our results.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-[#1A365D] mb-1">5. "Can you provide references or reviews?"</h3>
              <p className="text-gray-700">Check Google reviews, ask for local references, and look for a physical business address in Camden County. A company with a strong local reputation has earned it through consistent, quality work.</p>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Pest Control Near Me →</h3>
              <p className="text-gray-600 text-sm">Full-service pest control for every pest in Camden County</p>
            </Link>
            <Link href="/emergency-pest-control" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Emergency Pest Control →</h3>
              <p className="text-gray-600 text-sm">Urgent pest emergencies that cannot wait until tomorrow</p>
            </Link>
            <Link href="/same-day-pest-control" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Same-Day Service →</h3>
              <p className="text-gray-600 text-sm">Book a same-day exterminator visit in Camden County</p>
            </Link>
            <Link href="/free-pest-inspection" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Free Pest Inspection →</h3>
              <p className="text-gray-600 text-sm">Schedule a no-cost, no-obligation inspection today</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            Hire a Licensed Camden County Exterminator Today
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Do not trust your home to an unlicensed operator. Call Camden County Pest Control for a free inspection
            from a fully licensed, insured, and experienced exterminator.
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
              Request Free Quote
            </Link>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <section className="bg-[#1A365D] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 text-lg mb-6">
            NJDEP-licensed exterminators serving all of Camden County. Free inspections, guaranteed results.
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
            name: 'Camden County Pest Control',
            telephone: '(856) 600-0812',
            url: 'https://pestcontrolcamdencounty.com/exterminator-near-me',
            description:
              'Licensed exterminator near you in Camden County, NJ. NJDEP-certified professionals serving all 16 towns.',
            areaServed: {
              '@type': 'County',
              name: 'Camden County',
              containedInPlace: {
                '@type': 'State',
                name: 'New Jersey',
              },
            },
            serviceType: 'Extermination Services',
          }),
        }}
      />
    </div>
  );
}
