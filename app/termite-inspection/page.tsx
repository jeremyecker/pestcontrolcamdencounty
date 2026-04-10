import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import SeasonalAlert from '@/components/sections/SeasonalAlert';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Termite Inspection Camden County NJ | Free Assessment | WDI Reports',
  description:
    'Free termite inspection in Camden County NJ. Eastern subterranean termite experts serving Haddonfield, Cherry Hill, Collingswood & all of South Jersey. WDI reports available. NJDEP licensed.',
  keywords:
    'termite inspection Camden County NJ, free termite inspection, termite inspection Cherry Hill, WDI report New Jersey, termite treatment NJ, Sentricon Camden County',
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

export default function TermiteInspection() {
  const faqItems = [
    {
      question: 'What are the signs of termites in a Camden County home?',
      answer:
        'The most reliable indicators of Eastern subterranean termite activity include: mud tubes (pencil-sized tunnels) running along foundation walls, sill plates, or from soil to wood; discarded termite wings found near windows, doors, or light fixtures during spring swarm season (March-May); wood that sounds hollow when tapped; buckling or warping paint on wood surfaces; damaged wood with a honeycomb appearance inside; wood-to-soil contact where termites can easily access structural wood; and visible termite workers or soldiers in soil samples. Many homeowners discover termites only when wood damage is already advanced — early inspection prevents costly structural repairs.',
    },
    {
      question: 'How do termites get into a Camden County home?',
      answer:
        'Eastern subterranean termites live in soil and build mud tubes from the soil to wood as a protected pathway to food. Common entry points in South Jersey homes include: direct wood-to-soil contact (decks, fence posts, basement rim joists, porches); gaps in foundation walls or basement walls; cracks in concrete slabs or foundation; areas where wooden structural members touch soil; and locations with poor drainage that create moisture around the foundation. The older housing stock in Haddonfield, Pennsauken, and Collingswood is particularly vulnerable because of historical construction practices that allowed wood-to-soil contact. Termites cannot be kept out by inspection alone — exclusion and ongoing monitoring are essential.',
    },
    {
      question: 'What is the difference between an inspection and a WDI (Wood Destroying Insect) report?',
      answer:
        'A termite inspection is an assessment of your property to identify active or past termite activity, conducive conditions, and treatment recommendations. A WDI (Wood Destroying Organism) report is a formal legal document required by New Jersey statute (N.J.S.A. 45:15-16.64) for real estate transactions. The WDI report documents the presence or absence of wood-destroying insects (termites, carpenter ants, wood-boring beetles) and wood rot. Lenders and title companies require a WDI report for mortgage transactions. Our termite inspection can be documented as a WDI report when needed for a real estate closing in Camden County.',
    },
    {
      question: 'How long does a termite inspection take in Camden County?',
      answer:
        "A thorough termite inspection of a typical single-family home takes 45 minutes to 1.5 hours depending on the home's age, size, accessibility of the crawl space/basement, and presence of conducive conditions. Our technician inspects the entire exterior perimeter, foundation, all accessible interior areas, the basement and/or crawl space, the attic, and any area showing signs of termite or wood rot activity. We do not rush termite inspections — the information gathered protects your investment.",
    },
    {
      question: 'Do I need termite treatment if inspection shows no current activity?',
      answer:
        "If a thorough inspection shows no active termite activity but the home has conducive conditions (wood-to-soil contact, poor drainage, previous termite history), preventive treatment is highly recommended. A liquid barrier (Termidor) around the foundation is cost-effective insurance against future termite infestation — Termidor remains effective for 10+ years. However, prevention through exclusion (removing wood-to-soil contact, improving drainage) is equally important. We recommend a treatment plan customized to your Camden County home's specific risk profile.",
    },
    {
      question: 'What is the cost of a termite inspection or termite treatment in Camden County?',
      answer:
        'Termite inspections are free with a written report. Termite treatment in Camden County costs $800–$2,500 depending on treatment method, property size, and infestation extent. Liquid barrier treatments for average homes typically fall in the $1,000–$1,800 range. Call (856) 430-6244 for a free inspection and written quote.',
    },
    {
      question: 'How often should I have my Camden County home inspected for termites?',
      answer:
        "The National Pest Management Association recommends annual termite inspections for most homes, with more frequent inspections for homes in high-risk situations: homes with prior termite activity, homes with significant wood-to-soil contact, older pre-1960 homes in South Jersey, and homes with moisture problems. If you've installed a Termidor barrier or Sentricon bait system, ongoing monitoring is essential to ensure the system remains effective.",
    },
    {
      question: 'Can termite damage be repaired?',
      answer:
        'Yes, wood damaged by termites can be repaired or replaced depending on the extent of damage. Early detection is critical because termite damage often progresses undetected for months or years before becoming visible. Once termites are eliminated through professional treatment, a licensed contractor can assess structural damage and make repairs. Structural damage in load-bearing beams or sill plates may require temporary shoring during repairs. Prompt treatment after termite discovery minimizes repair costs.',
    },
  ];

  return (
    <div className="min-h-screen">
      <TrustBar />
      <>
        {/* FAQ JSON-LD Schema - FIRST ELEMENT */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                { '@type': 'Question', 'name': 'What are the signs of termites in a Camden County home?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Signs include mud tubes along foundations, discarded wings during spring, hollow-sounding wood, buckling paint, and visible termite workers. Early inspection prevents costly structural repairs.' } },
                { '@type': 'Question', 'name': 'How do termites get into a Camden County home?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Termites build mud tubes from soil to wood. Entry points include wood-to-soil contact, foundation cracks, gaps in basement walls, and poor drainage areas.' } },
                { '@type': 'Question', 'name': 'What is a WDI (Wood Destroying Insect) report?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'A WDI report is a formal legal document required for NJ real estate transactions documenting the presence or absence of termites, carpenter ants, wood-boring beetles, and wood rot.' } },
                { '@type': 'Question', 'name': 'How long does a termite inspection take?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'A thorough inspection of a typical home takes 45 minutes to 1.5 hours and includes interior, exterior, basement, attic, and crawl space assessment.' } },
                { '@type': 'Question', 'name': 'Do I need termite treatment if no activity is found?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'If conducive conditions exist (wood-to-soil contact, poor drainage), preventive Termidor treatment is recommended — it remains effective for 10+ years.' } },
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Breadcrumbs */}
        <nav className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2B6CB0]">Home</Link>
          {' → '}
          <span className="text-gray-900">Termite Inspection</span>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 to-orange-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Termite Inspection Camden County, NJ — Free Assessment
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Eastern subterranean termites cause billions in damage across South Jersey every year.
              Our NJDEP-licensed technicians provide free termite inspections that protect your investment.
              WDI reports available for real estate transactions.
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
                className="bg-white text-orange-900 font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors"
              >
                Schedule Free Inspection
              </Link>
            </div>
          </div>
        </section>

        <SeasonalAlert county="Camden County" compact />

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-16">

          {/* Why Termites Are Critical */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Why Termite Inspection Is Critical for Camden County Homeowners
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Termites are the silent destroyers of South Jersey. Unlike pest infestations that announce themselves
              with visible activity or unpleasant odors, termites work hidden inside walls, sill plates, joists, and
              structural wood for months or years before damage becomes obvious. The NPMA (National Pest Management
              Association) estimates that termites cause over $5 billion in damage in the United States annually — more
              than fire, floods, or hurricanes combined.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Camden County's older housing stock — particularly in{' '}
              <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>,{' '}
              <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,{' '}
              <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>, and{' '}
              <Link href="/camden-county/pennsauken" className="text-[#2B6CB0] hover:underline">Pennsauken</Link> — was built before
              modern termite-resistant construction standards. Many pre-1960 homes still have wood-to-soil contact, poor
              foundation drainage, and construction techniques that provided ideal conditions for Eastern subterranean
              termites. A single colony of termites can consume one pound of wood per year. An infestation discovered
              five years into its establishment may have already compromised structural integrity.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Professional termite inspection is not optional for Camden County homeowners — it is essential insurance
              against catastrophic structural damage. Early detection through regular inspection limits damage and
              treatment costs.
            </p>
          </section>

          {/* Termites in Camden County — Enriched Section */}
          <section className="mb-10 mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termites in Camden County, NJ — Species &amp; Behavior</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Camden County homeowners deal almost exclusively with Eastern subterranean termites (Reticulitermes flavipes),
                the most destructive termite species in New Jersey. Unlike drywood termites (which are rare in South Jersey)
                or subterranean species found in warmer regions, Eastern subterranean termites must maintain moisture contact
                with soil. They build mud tubes from soil to wood — these pencil-sized tunnels are the most reliable sign
                of infestation.
              </p>
              <p className="text-gray-700 mb-4">
                A single Eastern subterranean termite colony can contain hundreds of thousands of workers and may extend
                across multiple properties. Colonies mature over 3-8 years. Swarmers (winged reproductive termites) emerge
                from colonies in spring (March through May in New Jersey), seeking new locations to establish satellite colonies.
                Discovering swarmers inside your home is a reliable indicator of an established colony nearby — possibly inside
                your own structure.
              </p>
              <h3 className="text-xl font-bold text-[#1A365D] mt-6 mb-3">How We Inspect for Termites in Camden County</h3>
              <ul className="text-gray-700 space-y-3 mb-4">
                <li><strong>Complete exterior assessment</strong> — Foundation perimeter, rim joists, deck connections, sill plates, window frames, and wood-to-soil contact areas. Any location where soil touches wood is a potential termite entry point.</li>
                <li><strong>Full basement/crawl space inspection</strong> — The crawl space is often the most critical area. We inspect every sill plate, band board, support column, and connection point where termites would establish mud tubes.</li>
                <li><strong>Attic and roof assembly inspection</strong> — Less common but possible, termite activity in upper story wood is usually advanced infestation with significant hidden damage.</li>
                <li><strong>Conducive conditions assessment</strong> — Poor drainage, excess moisture, wood-to-soil contact, debris storage against the foundation — all conditions that attract and sustain termite colonies.</li>
                <li><strong>Soil sampling if needed</strong> — When termite activity is suspected but not visually confirmed, we may take soil samples to identify termite workers and establish the extent of infestation.</li>
              </ul>
            </div>
          </section>

          {/* Termite FAQ Section — New Enriched Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Termite Inspection in Camden County — FAQ</h2>
            <div className="space-y-4">
              {[
                { q: 'What should I do if I find termite mud tubes in my Camden County basement?', a: 'Do not disturb the mud tubes. Active mud tubes containing live termites confirm an infestation. Contact us immediately for same-day or next-day inspection. Photograph the tubes if possible. Do not spray insecticide — this scatters termites without eliminating the colony.' },
                { q: 'Can termites cause structural damage before I see signs in my Cherry Hill or Haddonfield home?', a: 'Absolutely. Termites often cause extensive hidden damage before visible signs appear. Wood damage deep inside joists or sill plates may be complete while the surface appears intact. By the time mud tubes are visible or wood sounds hollow, months of damage may have occurred. Annual inspections catch infestations early.' },
                { q: 'Is the free termite inspection really necessary if my home was built in the 1990s or later?', a: 'Even newer homes can have termite issues if conducive conditions exist — poor drainage, wood-to-soil contact, or soil contact with HVAC components. Older homes (pre-1960) have significantly higher risk. Annual inspection is recommended regardless of age, but especially for homes built before modern termite-resistant construction standards.' },
              ].map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-5 bg-white">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Termite Season */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Termite Season in Camden County — When to Schedule Inspection
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Although termite activity occurs year-round in South Jersey, termite swarm season (when winged reproductive
              termites emerge from colonies to establish new nests) occurs in spring: March through May in New Jersey.
              This is the most visible indicator of an established colony — when you see flying termites inside your home,
              it means a mature colony is present and has been feeding on your structure for years.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              However, termite workers remain active inside the colony year-round, feeding on wood even when you cannot
              see them. Winter dormancy is a myth — termites continue consuming wood throughout winter in South Jersey.
              The best time to schedule a termite inspection is before spring swarm season (January–February), so that
              if infestation is discovered, preventive treatment can be installed before the colony becomes more active
              in spring.
            </p>
            <div className="bg-orange-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-[#1A365D] mb-3">Schedule Your Inspection</h3>
              <p className="text-gray-700 mb-3">
                Do not wait until you see swarmers to schedule a termite inspection. Early detection saves thousands
                in structural repairs.
              </p>
              <a
                href="tel:+18566000812"
                className="inline-block bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                📞 Call (856) 600-0812
              </a>
            </div>
          </section>

          {/* Treatment Options */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Termite Treatment Options for Camden County Homes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-3">💉 Termidor Liquid Barrier</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li><strong>How it works:</strong> Non-repellent liquid applied into soil around foundation perimeter, creating a continuous chemical barrier against termites.</li>
                  <li><strong>Duration:</strong> Termidor remains effective for 10+ years under normal soil conditions.</li>
                  <li><strong>Advantage:</strong> Proven technology with decades of history; eliminates active infestations while providing long-term protection.</li>
                  <li><strong>Best for:</strong> Homes with active termite activity or significant wood-to-soil contact.</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-3">🎯 Sentricon Bait System</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li><strong>How it works:</strong> In-ground bait stations containing slow-acting insecticide that termites consume and share with the colony, eventually eliminating the entire population.</li>
                  <li><strong>Monitoring:</strong> Stations are monitored regularly; bait is replenished as termites consume it.</li>
                  <li><strong>Advantage:</strong> Targets termites actively feeding; colony-wide elimination; less disruptive than liquid barriers.</li>
                  <li><strong>Best for:</strong> Ongoing prevention and monitoring; ideal for homes with moderate risk.</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Most Camden County homes benefit from a combination approach: Termidor liquid barrier around the foundation
              for immediate protection, combined with Sentricon bait stations for ongoing monitoring and colony elimination.
              Our inspection determines the right strategy for your home.
            </p>
          </section>

          {/* Real Estate Transactions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              WDI Reports for Real Estate Transactions — New Jersey Requirements
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              If you are buying or selling a home in Camden County, New Jersey law requires a Wood Destroying Organism
              (WDI) inspection and report before closing. The WDI report (Form NJDEP-13645) documents the presence or
              absence of termites, carpenter ants, wood-boring beetles, wood rot, and other wood-destroying organisms.
              Lenders and title companies require this report. A thorough termite inspection can be documented as a
              formal WDI report for your real estate transaction.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-[#1A365D] mb-2">We Provide WDI Reports for:</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>→ Home purchases in Camden County and South Jersey</li>
                <li>→ Refinancing transactions</li>
                <li>→ Estate sales</li>
                <li>→ Apartment and condo buildings</li>
                <li>→ Commercial properties</li>
              </ul>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-4">💰 How Much Does Termite Treatment Cost in Camden County?</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <div className="font-bold text-[#1A365D] text-lg mb-1">Termite Inspection</div>
                  <div className="text-2xl font-bold text-[#DD6B20] mb-1">Free</div>
                  <div className="text-gray-600 text-sm">Comprehensive inspection, written report</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <div className="font-bold text-[#1A365D] text-lg mb-1">Termite Treatment</div>
                  <div className="text-2xl font-bold text-[#DD6B20] mb-1">$800–$2,500</div>
                  <div className="text-gray-600 text-sm">Depending on method and severity</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">Pricing depends on property size, infestation severity, and treatment method. We provide a free, no-obligation written estimate before any work begins.</p>
              <a href="tel:+18564306244" className="inline-block bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                📞 Get Free Estimate — (856) 430-6244
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Frequently Asked Questions — Termite Inspection in Camden County
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-[#1A365D] mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Termite & Wood-Destroying Insect Services from Camden County Pest Control
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Link href="/termite-exterminator" className="block bg-amber-50 hover:bg-amber-100 rounded-lg p-5 transition-colors">
                <h3 className="font-semibold text-[#1A365D] mb-1">Termite Treatment →</h3>
                <p className="text-gray-600 text-sm">Termidor and Sentricon treatment options for active infestations</p>
              </Link>
              <Link href="/free-pest-estimate" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
                <h3 className="font-semibold text-[#1A365D] mb-1">Free Pest Estimate →</h3>
                <p className="text-gray-600 text-sm">Assessment of all pest issues in your Camden County home</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
              Termite Inspection in Camden County — Schedule Your Free Assessment Today
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Early detection prevents thousands in structural repairs. Our NJDEP-licensed technicians provide
              comprehensive free termite inspections throughout Camden County. Call now.
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
                Schedule Free Inspection
              </Link>
            </div>
          </section>
        </main>

        {/* CTA Banner */}
        <section className="bg-[#1A365D] text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Termite Inspection — Camden County</h2>
            <p className="text-blue-200 text-lg mb-6">
              NJDEP-licensed technicians. Free assessment. WDI reports for real estate. All of Camden County.
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
              '@type': 'LocalBusiness',
              name: 'Camden County Pest Control — Termite Inspection',
              telephone: '(856) 600-0812',
              url: 'https://pestcontrolcamdencounty.com/termite-inspection',
              description:
                'Free termite inspection in Camden County NJ. Eastern subterranean termite experts. NJDEP licensed. WDI reports available.',
              areaServed: {
                '@type': 'County',
                name: 'Camden County',
                containedInPlace: {
                  '@type': 'State',
                  name: 'New Jersey',
                },
              },
              serviceType: 'Termite Inspection',
            })
          }}
        />
      </>
    </div>
  );
}
