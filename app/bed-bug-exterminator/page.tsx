import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bed Bug Exterminator Camden County NJ | Heat Treatment & Removal',
  description:
    'Professional bed bug exterminators serving Camden County, NJ. Licensed technicians, heat treatment and chemical options, free inspections. Call (856) 600-0812 for same-day response.',
  keywords:
    'bed bug exterminator Camden County, bed bug removal NJ, bed bug treatment Cherry Hill, exterminator near me bed bugs',
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

export default function BedBugExterminator() {
  const faqItems = [
    {
      question: 'How do I know if I have bed bugs in my Camden County home?',
      answer:
        'The most reliable signs of bed bugs include: small reddish-brown insects (about the size of an apple seed) visible in mattress seams, bed frames, or behind headboards; dark rusty-brown staining from excrement on mattresses or box springs; tiny white eggs or pale shed skins in mattress seams and furniture cracks; and waking up with itchy red welts in lines or clusters on exposed skin. In Cherry Hill, Voorhees, and Collingswood apartment buildings, you may also receive notice from neighboring units. If you suspect bed bugs, contact Camden County Pest Control for a free inspection immediately — early treatment is far less costly than treating a widespread infestation.',
    },
    {
      question: 'What is the difference between heat treatment and chemical treatment for bed bugs in NJ?',
      answer:
        'Heat treatment raises the temperature of all infested rooms and contents to 120-135°F for several hours, killing bed bugs at every life stage — including eggs — in a single treatment. It leaves no chemical residue and requires no post-treatment waiting period beyond cooling. Chemical treatment uses NJDEP-approved insecticides applied to baseboards, bed frames, cracks, and crevices in multiple visits (typically 2-3 sessions spaced 2 weeks apart). Heat treatment is faster and more thorough; chemical treatment costs less for smaller or early-stage infestations. Our Camden County technicians will recommend the right approach after a free inspection.',
    },
    {
      question: 'How did bed bugs get into my Cherry Hill or Voorhees home?',
      answer:
        'Bed bugs are hitchhikers, not outdoor pests. The most common introduction points in South Jersey include: travel through hotels, motels, and short-term rentals along the Route 30, Route 70, and I-295 corridors; used furniture from consignment shops, Facebook Marketplace, or curbside; visiting or hosting guests who unknowingly carry them; and, in multi-unit buildings throughout Collingswood, Haddonfield, and Pennsauken, migration from neighboring units through wall voids and electrical conduits. Bed bugs have absolutely no preference for clean versus dirty homes — they need only blood and a hiding place.',
    },
    {
      question: 'Do bed bugs spread between units in Camden County apartment complexes?',
      answer:
        'Yes. In attached and multi-family housing — increasingly common throughout Cherry Hill, Collingswood, Pennsauken, and Lindenwold — bed bugs travel between units via wall voids, electrical outlets, plumbing penetrations, and shared laundry facilities. Single-unit treatment often fails because neighboring units harbor the same population. Camden County Pest Control works with property managers and landlords across the county to coordinate multi-unit inspections and treatments. We also provide the documentation required under New Jersey\'s bed bug disclosure law (N.J.S.A. 46:8-50).',
    },
    {
      question: 'Do I have to throw away my mattress to get rid of bed bugs?',
      answer:
        'In the vast majority of cases, no. With professional heat treatment or targeted chemical treatment, your mattress can be treated and then encased in a bed bug-proof cover, eliminating the need for disposal. Throwing away an infested mattress without proper bagging and sealing typically spreads bed bugs throughout hallways and neighboring units. Camden County Pest Control will advise you on the best course of action for your specific situation after a thorough inspection.',
    },
    {
      question: 'Are your bed bug technicians licensed by the NJDEP?',
      answer:
        'Every Camden County Pest Control technician holds a valid license issued by the New Jersey Department of Environmental Protection (NJDEP) under the New Jersey Pesticide Control Act. Additionally, our technicians are trained and certified by the New Jersey Department of Community Affairs standards for bed bug treatment in residential properties. We carry full general liability and workers\' compensation insurance. Hiring an unlicensed operator for bed bug treatment in New Jersey puts your family and your investment at risk.',
    },
    {
      question: 'How long does bed bug treatment take and when can I return to my bedroom?',
      answer:
        'Heat treatment is typically completed in one full treatment day. After the heat cycle is complete and the room has cooled — usually within a few hours — you can return to the treated space. Chemical treatment requires 2-3 visits spaced 2 weeks apart; between treatments, you can sleep in the treated room after the specified re-entry time (typically 2-4 hours). After heat treatment, bed bugs are killed on the same day; after chemical treatment, elimination occurs gradually over the treatment cycle as bed bugs contact treated surfaces. Camden County Pest Control schedules follow-up inspections after all treatments to confirm eradication.',
    },
  ];

  return (
    <div className="min-h-screen">
      <>
        {/* FAQ JSON-LD Schema - FIRST ELEMENT */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                { '@type': 'Question', 'name': 'How do I know if I have bed bugs in my Camden County home?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The most reliable signs include small reddish-brown insects in mattress seams, dark rusty staining from excrement, tiny white eggs, and red welts on exposed skin.' } },
                { '@type': 'Question', 'name': 'What is the difference between heat treatment and chemical treatment for bed bugs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Heat treatment kills all bed bugs in a single visit at 120-135°F. Chemical treatment uses NJDEP-approved insecticides in 2-3 visits spaced 2 weeks apart.' } },
                { '@type': 'Question', 'name': 'Do bed bugs spread between units in Camden County apartment complexes?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Bed bugs travel between units via wall voids, electrical outlets, and plumbing penetrations. Multi-unit coordination is essential.' } },
                { '@type': 'Question', 'name': 'How long does bed bug treatment take?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Heat treatment is one day. Chemical treatment requires 2-3 visits over 4-6 weeks. Follow-up inspections confirm eradication.' } },
                { '@type': 'Question', 'name': 'Are your bed bug technicians licensed?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Every technician holds a valid NJDEP pesticide applicator license and carries full insurance.' } },
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
          <span className="text-gray-900">Bed Bug Exterminator</span>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bed Bug Exterminator Camden County NJ
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Professional bed bug treatment for homes and businesses throughout Camden County.
              Heat treatment and chemical options, NJDEP-licensed technicians, free inspections.
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
          {/* Intro Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Bed Bug Infestations in Camden County, NJ — What You Need to Know
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Bed bugs have re-emerged as one of the most persistent pest problems in New Jersey, and
              Camden County is no exception. South Jersey&apos;s proximity to Philadelphia and the high volume
              of travel through the region — along I-76, I-295, and Route 130 — makes it a corridor
              for bed bug introduction. Multi-family housing in{' '}
              <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
              <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,
              and <Link href="/camden-county/pennsauken" className="text-[#2B6CB0] hover:underline">Pennsauken</Link>{' '}
              can experience building-wide infestations when a single unit is left untreated. Hotels,
              extended-stay properties, and apartment complexes along the Route 70 and Route 73 commercial
              corridors in Cherry Hill and{' '}
              <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>{' '}
              are frequent sources of introduction into local homes.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Camden County Pest Control has treated bed bug infestations across all 16 towns in Camden
              County for years. Our NJDEP-licensed technicians are trained in the most current and effective
              treatment protocols, including thermal heat treatment and targeted chemical application.
              Whether you are dealing with a single infested bedroom in a{' '}
              <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>{' '}
              single-family home or a multi-unit building in{' '}
              <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,
              we have the experience, equipment, and licensing to eliminate the infestation completely.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Bed bugs are unique among household pests in that they feed exclusively on blood and hide with
              extraordinary effectiveness in mattress seams, box spring fabric, bed frame joints, electrical
              outlets, and even picture frames. They are impossible to control with over-the-counter products
              because they hide where sprays cannot reach. Professional treatment is not optional for a
              successful elimination — it is the only approach that works.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              If you suspect bed bugs in your Camden County home or business, call us now for a free
              inspection. The sooner we assess the infestation, the less costly and disruptive the treatment.
            </p>
          </section>

          {/* Treatment Options */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Bed Bug Treatment Options in Camden County
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-3">🌡️ Heat Treatment</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li><strong>How it works:</strong> Professional heat equipment raises all infested rooms to 120-135°F, killing bed bugs and eggs at every hiding location in a single treatment session.</li>
                  <li><strong>One-day elimination:</strong> No need for multiple visits — all life stages are killed in one treatment.</li>
                  <li><strong>Chemical-free:</strong> No residue, no odor, effective for families and pets after the cooling period.</li>
                  <li><strong>Penetrates everything:</strong> Heat reaches inside walls, mattresses, electronics, and furniture where sprays cannot.</li>
                  <li><strong>Best for:</strong> Severe or widespread infestations, multi-unit situations, clients preferring chemical-free treatment.</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-3">🧪 Chemical Treatment</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li><strong>How it works:</strong> NJDEP-approved insecticides applied precisely to bed frames, baseboards, cracks, and crevices with multiple follow-up treatments.</li>
                  <li><strong>Multiple visits:</strong> 2-3 treatments spaced 2 weeks apart to catch all life stages as eggs hatch.</li>
                  <li><strong>Residual protection:</strong> Ongoing protection between visits helps catch newly hatched nymphs.</li>
                  <li><strong>Cost-effective:</strong> Lower cost than heat treatment, especially for smaller or early-stage infestations.</li>
                  <li><strong>Best for:</strong> Early-stage infestations, budget-sensitive situations, preventive treatment.</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Many Camden County bed bug infestations benefit from a combination approach — heat treatment
              for immediate whole-room elimination followed by targeted chemical application for residual
              protection against any surviving eggs or newly hatched nymphs in extremely difficult-to-reach
              harborage points. Our technicians will recommend the right strategy after a free inspection.
            </p>
          </section>

          {/* Bed Bugs in Camden County — New Enriched Section */}
          <section className="mb-10 mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bed Bugs in Camden County, NJ</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Camden County's dense urban neighborhoods and suburban rowhouse communities create ideal conditions for rapid bed bug spread. The region's mix of hotels, apartment complexes, and older multi-unit housing along transit corridors makes bed bug introduction particularly likely. Once inside a home, bed bugs reproduce quickly — a single fertilized female can establish a full infestation within 4-6 weeks, spreading through shared walls and floors to neighboring units.
              </p>
              <p className="text-gray-700 mb-4">
                The warm, humid climate of South Jersey (especially June through September) accelerates bed bug reproduction and activity cycles. Treatment during peak season can be more challenging due to increased activity and population size. Early detection is critical — a bed bug problem discovered in month one costs far less to treat than an infestation discovered in month three or four.
              </p>
              <h3 className="text-xl font-bold text-[#1A365D] mt-6 mb-3">How We Treat Bed Bugs in Camden County</h3>
              <ul className="text-gray-700 space-y-3 mb-4">
                <li><strong>Heat treatment (120-135°F)</strong> — Kills all life stages in a single full-day treatment; no chemical residue; effective even in difficult-to-reach harborage areas; requires minimal preparation from the homeowner.</li>
                <li><strong>Non-repellent gel baiting</strong> — Worker bed bugs consume bait and share the active ingredient with the colony, eventually eliminating the entire population including the queen; slower than heat but more affordable for early-stage infestations.</li>
                <li><strong>Residual spray application</strong> — NJDEP-approved insecticides applied to baseboards, bed frames, furniture cracks, and electrical outlets; multiple applications spaced 2 weeks apart; workers contact treated surfaces and bring the active ingredient back to the colony.</li>
                <li><strong>Multi-unit coordination</strong> — For rowhouses and apartment buildings throughout Collingswood, Pennsauken, and Lindenwold, simultaneous treatment of all affected units prevents re-infestation from neighboring units; we work with landlords and property managers to ensure compliance with NJ bed bug disclosure law (N.J.S.A. 46:8-50).</li>
              </ul>
            </div>
          </section>

          {/* Bed Bug FAQ Section — New Enriched Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bed Bugs in Camden County — FAQ</h2>
            <div className="space-y-4">
              {[
                { q: 'Why are bed bugs more common in multi-unit housing in Camden County?', a: 'Bed bugs easily travel between units through shared wall voids, electrical conduits, and pipe chases. In rowhouses and apartment complexes throughout Collingswood and Pennsauken, a single untreated unit can serve as a source for adjacent units. Professional treatment must coordinate across multiple units to be effective.' },
                { q: 'How do I protect my Camden County home from bed bugs while traveling?', a: 'Inspect your luggage and belongings before returning home from travel. Keep suitcases off bedroom floors. Immediately wash all travel clothing in hot water and dry on high heat. Inspect hotel mattresses and furniture before placing your belongings on them. Keep luggage in the bathtub (an island protected from bed bug access) while staying in hotels.' },
                { q: 'Can I treat bed bugs myself with over-the-counter products in NJ?', a: 'Over-the-counter bed bug sprays are generally ineffective and often counterproductive — they scatter bed bugs deeper into walls without reaching the colony. Professional NJDEP-licensed treatment is far more likely to achieve complete elimination. Early professional treatment is more cost-effective than months of failed DIY attempts.' },
              ].map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-5 bg-white">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Apartments and Hotels */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Apartment Complexes & Hotels — Common Bed Bug Sources in Camden County
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Two of the most common sources of bed bug introduction in Camden County are apartment complexes
              and hotels. Understanding how infestations spread in these settings is critical to effective
              treatment.
            </p>
            <div className="space-y-6 mb-6">
              <div className="border-l-4 border-[#DD6B20] pl-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">🏢 Apartment Complexes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Apartment complexes and multi-family buildings throughout{' '}
                  <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
                  <Link href="/camden-county/pennsauken" className="text-[#2B6CB0] hover:underline">Pennsauken</Link>,{' '}
                  <Link href="/camden-county/lindenwold" className="text-[#2B6CB0] hover:underline">Lindenwold</Link>,
                  and{' '}
                  <Link href="/camden-county/gloucester-township" className="text-[#2B6CB0] hover:underline">Gloucester Township</Link>{' '}
                  present unique challenges: when one unit is infested, adjacent units are almost always
                  at risk due to travel through shared walls, outlets, and plumbing. New Jersey law
                  (N.J.S.A. 46:8-50) requires landlords to disclose known bed bug infestations to
                  prospective tenants and remediate known infestations promptly. Camden County Pest
                  Control works with property managers to conduct building-wide inspections, coordinate
                  multi-unit treatments, and provide the documentation required for compliance.
                </p>
              </div>
              <div className="border-l-4 border-[#DD6B20] pl-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">🏨 Hotels & Extended-Stay Properties</h3>
                <p className="text-gray-700 leading-relaxed">
                  The commercial corridors of Cherry Hill and Voorhees along Route 70 and Route 38
                  include numerous hotels and extended-stay properties that serve both business travelers
                  and those relocating to South Jersey. Hotel-related infestations — where bed bugs travel
                  home in luggage or clothing — are among the most common sources of bed bug introductions
                  we see in Camden County single-family homes. If you have recently traveled or hosted
                  guests from out of the area and are experiencing unexplained bites or insect sightings
                  in your bedroom, call for a free inspection immediately.
                </p>
              </div>
            </div>
          </section>

          {/* NJ NJDEP Licensed */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              NJDEP-Licensed Bed Bug Technicians Serving All of Camden County
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              In New Jersey, every commercial pesticide applicator must hold a valid license issued by
              the New Jersey Department of Environmental Protection (NJDEP) under the New Jersey Pesticide
              Control Act (N.J.S.A. 13:1F-1 et seq.). Bed bug treatment additionally requires specific
              training under the New Jersey Department of Community Affairs guidelines for residential
              pest control. Every Camden County Pest Control technician holds all required credentials and
              carries full general liability and workers&apos; compensation insurance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Hiring an unlicensed operator for bed bug treatment — which unfortunately occurs in South
              Jersey — typically results in incomplete treatment, re-infestation, and wasted expense.
              Unlicensed operators cannot access professional-grade insecticides, lack the training to
              identify all harborage points, and carry no accountability for failed treatments.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              When you hire Camden County Pest Control, you have our NJDEP license number, insurance
              information, and written treatment guarantee before any work begins. We are a fully compliant,
              professional operation serving{' '}
              <Link href="/camden-county/cherry-hill" className="text-[#2B6CB0] hover:underline">Cherry Hill</Link>,{' '}
              <Link href="/camden-county/voorhees" className="text-[#2B6CB0] hover:underline">Voorhees</Link>,{' '}
              <Link href="/camden-county/haddonfield" className="text-[#2B6CB0] hover:underline">Haddonfield</Link>,{' '}
              <Link href="/camden-county/collingswood" className="text-[#2B6CB0] hover:underline">Collingswood</Link>,
              and all 16 towns in Camden County.
            </p>
          </section>

          {/* What to Expect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              The Camden County Pest Control Bed Bug Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">Free Inspection</h3>
                  <p className="text-gray-700">An NJDEP-licensed technician inspects every room in the property, focusing on all bed bug harborage areas — mattress seams, box springs, bed frames, baseboards, headboards, electrical outlets, and furniture. You receive a full written report of findings.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">Treatment Recommendation</h3>
                  <p className="text-gray-700">Based on the inspection, we recommend the most effective treatment approach — heat, chemical, or combination — and provide a clear, written estimate. No work begins until you approve the plan and price.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">Professional Treatment</h3>
                  <p className="text-gray-700">Our licensed technician carries out the treatment using professional-grade equipment and NJDEP-approved products. We provide detailed preparation instructions before treatment and safety guidelines for re-entry afterward.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-[#DD6B20] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">Follow-Up & Confirmation</h3>
                  <p className="text-gray-700">We schedule follow-up inspections to confirm complete elimination. If bed bugs are found during the warranty period, we return at no additional charge. Your satisfaction and peace of mind are our final product.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Lead Capture Pages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">More Ways We Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/services/bed-bug-removal" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
                <h3 className="font-semibold text-[#1A365D] mb-1">Bed Bug Removal Service →</h3>
                <p className="text-gray-600 text-sm">Full service detail on our bed bug removal treatments</p>
              </Link>
              <Link href="/free-pest-estimate" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
                <h3 className="font-semibold text-[#1A365D] mb-1">Free Pest Estimate →</h3>
                <p className="text-gray-600 text-sm">Schedule a no-cost, no-obligation estimate today</p>
              </Link>
              <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
                <h3 className="font-semibold text-[#1A365D] mb-1">Pest Control Near Me →</h3>
                <p className="text-gray-600 text-sm">Local licensed pest control across all of Camden County</p>
              </Link>
              <Link href="/same-day-pest-control" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
                <h3 className="font-semibold text-[#1A365D] mb-1">Same-Day Service →</h3>
                <p className="text-gray-600 text-sm">Book a same-day exterminator visit in Camden County</p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Frequently Asked Questions — Bed Bug Exterminator in Camden County NJ
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

          {/* Final CTA */}
          <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
              Bed Bugs in Your Camden County Home? Call Us Today.
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Camden County Pest Control provides free bed bug inspections and professional treatment
              throughout all 16 towns in Camden County. Early treatment costs less and resolves faster —
              call now.
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
            <h2 className="text-3xl font-bold mb-4">Camden County&apos;s Bed Bug Specialists</h2>
            <p className="text-blue-200 text-lg mb-6">
              NJDEP-licensed technicians. Heat treatment & chemical options. Free inspections.
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
                  name: 'Camden County Pest Control',
                  telephone: '(856) 600-0812',
                  url: 'https://pestcontrolcamdencounty.com/bed-bug-exterminator',
                  description:
                    'Professional bed bug exterminator serving all 16 towns in Camden County, NJ. Heat treatment and chemical options, NJDEP-licensed technicians, free inspections.',
                  areaServed: {
                    '@type': 'County',
                    name: 'Camden County',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'New Jersey',
                    },
                  },
                  serviceType: 'Bed Bug Extermination',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Bed Bug Treatment Services',
                    itemListElement: [
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bed Bug Heat Treatment' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bed Bug Chemical Treatment' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Free Bed Bug Inspection' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Unit Bed Bug Treatment' } },
                    ],
                  },
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'How do I know if I have bed bugs in my Camden County home?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The most reliable signs of bed bugs include: small reddish-brown insects visible in mattress seams or bed frames; dark rusty-brown staining from excrement on mattresses; tiny white eggs or shed skins in mattress seams; and waking up with itchy red welts in lines or clusters. Call Camden County Pest Control for a free inspection if you suspect an infestation.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is the difference between heat treatment and chemical treatment for bed bugs?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Heat treatment raises room temperatures to 120-135°F, killing all life stages in a single session with no chemical residue. Chemical treatment uses NJDEP-approved insecticides in 2-3 visits. Heat is faster and more thorough; chemical is more affordable for small infestations.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Are your bed bug technicians licensed by the NJDEP?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Every Camden County Pest Control technician holds a valid NJDEP pesticide applicator license under the New Jersey Pesticide Control Act. We carry full general liability and workers\' compensation insurance and provide our license number and insurance information before any work begins.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do bed bugs spread between units in Camden County apartment complexes?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Bed bugs travel between attached units through wall voids, electrical outlets, and plumbing chases. Camden County Pest Control works with property managers to coordinate multi-unit inspections and treatments and provides documentation required under New Jersey bed bug disclosure law (N.J.S.A. 46:8-50).',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do I have to throw away my mattress to get rid of bed bugs?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'In most cases, no. With professional heat or chemical treatment followed by a bed bug encasement cover, your mattress can be saved. Improper disposal typically spreads bed bugs to hallways and neighboring units.',
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </>
    </div>
  );
}
