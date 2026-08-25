import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import SeasonalAlert from '@/components/sections/SeasonalAlert';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Termite Inspection Camden County NJ | Free Assessment',
  description:
    'Free termite assessment for Camden County homeowners. Call (856) 600-0812 — no obligation, no pressure. Get answers by phone today.',
  keywords:
    'termite inspection Camden County NJ, free termite assessment, termite inspection Cherry Hill, WDI report New Jersey, termite treatment NJ, Sentricon Camden County',
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

const faqData = [
  {
    question: `Is the termite assessment really free with no obligation?`,
    answer: `Yes. The phone assessment costs you nothing, and there's no obligation to book anything afterward. We'll give you information and pricing on the call, and you can decide what to do from there — no pressure.`,
  },
  {
    question: `What happens on the call? How is the assessment provided?`,
    answer: `You'll speak directly with a licensed Rest Easy representative. You describe what you've observed — signs of possible termite activity, conditions around your property, any concerns you have — and the representative discusses what those signs may indicate and what treatment options might apply. If treatment is appropriate, you'll get a price right there on the call.`,
  },
  {
    question: `What are common signs of termite activity I should describe?`,
    answer: `Helpful things to mention include mud tubes on walls or foundations, discarded wings near windows or doors, wood that sounds hollow when tapped, visible damage to wood, wood-to-soil contact around your home, and any moisture issues like leaks or damp areas. The more detail you can share, the more useful the conversation will be.`,
  },
  {
    question: `Is the free assessment done in person or by phone?`,
    answer: `The free assessment is conducted entirely by phone. There's no on-site visit as part of the free assessment — that only happens if you decide to book and pay for treatment or another service afterward.`,
  },
  {
    question: `Do you offer WDI reports for real estate transactions?`,
    answer: `Yes, we offer official WDI (Wood Destroying Insect) reports for property purchases, sales, and refinances. This is a separate paid service that involves a real on-site inspection by a licensed inspector, producing a genuine written report. It is not included in or bundled with the free phone assessment.`,
  },
  {
    question: `What termite treatment options are available?`,
    answer: `Common treatment approaches include liquid soil-barrier treatments and in-ground bait-station systems. Treatment is a separate paid service performed on-site by a technician after you decide to book — it's not part of the free phone assessment. Your representative can discuss which options may be appropriate for your situation based on what you describe.`,
  },
  {
    question: `Can I get an assessment for a rental or commercial property?`,
    answer: `Yes. The free phone assessment is available for residential properties you own, rental properties, and commercial properties. Just let us know the type of property when you call so we can tailor the conversation accordingly.`,
  },
];

export default function TermiteInspection() {
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
              mainEntity: faqData.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
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
              {`Free Termite Assessment by Phone for Camden County, NJ Homeowners — Get Answers Today`}
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              {`Concerned about termites? Talk directly with a licensed Rest Easy Pest Control representative — no home visit required, no obligation to book anything. Call us, describe what you've observed, and get a straight answer plus pricing on the spot. It's that simple.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18566000812"
                className="bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                📞 {`Call (856) 600-0812 Now`}
              </a>
              <Link
                href="/contact"
                className="bg-white text-orange-900 font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors"
              >
                {`Get Your Free Assessment`}
              </Link>
            </div>
          </div>
        </section>

        <SeasonalAlert county="Camden County" compact />

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-16">

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              {`How Your Free Termite Assessment Works`}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {`Getting answers about a potential termite problem doesn't have to mean waiting days for someone to come to your home. Here's exactly what happens when you reach out for your free phone assessment:`}
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">{`Call Us or Submit the Online Form`}</h3>
                  <p className="text-gray-700">{`Reach out however is most convenient for you. A licensed Rest Easy representative will be ready to speak with you — no automated phone trees, no waiting for a callback days later.`}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">{`Describe What You've Observed`}</h3>
                  <p className="text-gray-700">{`Tell us what you're seeing. Mud tubes along your foundation? Discarded wings near a window? Wood that sounds hollow when you tap it? Moisture issues in your basement or crawl space? The more detail you can share, the better we can help.`}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">{`Get a Professional Assessment Based on Your Description`}</h3>
                  <p className="text-gray-700">{`Our licensed representative will discuss what those signs may indicate, what conditions might be contributing to the problem, and what treatment options typically apply — all based entirely on what you describe to us.`}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A365D]">{`Receive Pricing on the Spot — Then Decide`}</h3>
                  <p className="text-gray-700">{`If treatment makes sense for your situation, we'll give you a price right there on the call. No waiting for a quote to arrive by email days later. You can book on the spot or take time to think it over — no pressure, no obligation either way.`}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Phone Assessment */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              {`Why We Start With a Phone Assessment`}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">{`You shouldn't have to wait days to schedule an appointment just to find out whether you might have a termite problem. That's why we've made the first step as fast and convenient as possible.`}</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">{`When you call for your free assessment, you speak directly with a licensed representative who can discuss what you're observing and give you real answers immediately — often within the same conversation. There's no need to rearrange your schedule, take time off work, or wait at home for a technician to arrive before you've even decided whether you want to move forward.`}</p>
            <p className="text-gray-700 text-lg leading-relaxed">{`This approach respects your time. You get information and pricing right away, and you can make an informed decision from there. If you do decide to book treatment or any other service, that's when we schedule time to come to your property and do the hands-on work.`}</p>
          </section>

          {/* Recognizing Termite Activity — general education */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              {`What to Look For: Common Signs of Termite Activity`}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {`Before you call, it helps to take a few minutes to observe your property. Here are common signs that homeowners notice when termites may be present — and these are exactly the kinds of details that are useful to describe on the phone:`}
            </p>
            <div className="space-y-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">{`Mud Tubes`}</h3>
                <p className="text-gray-700">{`Termites build narrow, mud-colored tubes along foundations, walls, or other surfaces to travel between their colony and their food source. These tubes are often about the width of a pencil and may appear on interior or exterior walls, near the foundation, or in crawl spaces.`}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">{`Discarded Wings`}</h3>
                <p className="text-gray-700">{`In spring and sometimes fall, reproductive termites (called swarmers) emerge to start new colonies. After they land, they shed their wings. Finding small, translucent wings near windowsills, doors, or light fixtures can indicate swarmers have been present.`}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">{`Hollow-Sounding or Damaged Wood`}</h3>
                <p className="text-gray-700">{`Wood that sounds hollow when you tap it, or wood that appears blistered, warped, or damaged for no obvious reason, may have termite activity inside. Baseboards, door frames, and window frames are common areas to check.`}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">{`Wood-to-Soil Contact`}</h3>
                <p className="text-gray-700">{`Any place where wooden parts of your home touch the soil directly — such as deck posts, porch steps, or siding that extends to ground level — creates an easy access point for termites. This is a risk factor worth mentioning, even if you haven't seen active signs.`}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">{`Moisture Issues`}</h3>
                <p className="text-gray-700">{`Termites thrive in moist environments. Leaky pipes, poor drainage, or damp basements and crawl spaces can create conditions that attract termite activity.`}</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {`When you call for your free assessment, describing these kinds of observations helps our representative give you the most useful information possible about what you may be dealing with.`}
            </p>
          </section>

          {/* Treatment Options — general, post-booking */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              {`Termite Treatment: What Happens If You Decide to Move Forward`}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {`Termite treatment is a separate service that you schedule and pay for only if you decide it's right for your situation — it's not part of the free phone assessment itself. If you choose to book treatment after your assessment call, a technician will come to your property to perform the work on-site. Treatment methods are selected based on the situation, but common approaches include:`}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-3">{`Liquid Soil-Barrier Treatments`}</h3>
                <p className="text-gray-700 text-sm">{`A liquid termiticide is applied to the soil around and beneath the structure, creating a continuous barrier that termites cannot cross without contacting the treatment.`}</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#1A365D] mb-3">{`In-Ground Bait-Station Systems`}</h3>
                <p className="text-gray-700 text-sm">{`Bait stations are installed in the soil around the perimeter of the property. Termites that find the stations consume the bait and carry it back to their colony, gradually eliminating the colony over time.`}</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {`Your representative can discuss which approach may be appropriate for your situation during your free phone assessment, based on what you describe.`}
            </p>
          </section>

          {/* WDI Callout — the one real paid written deliverable */}
          <section className="mb-12 bg-amber-50 border border-amber-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
              {`Need a WDI Report for a Real Estate Transaction?`}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">{`If you're buying, selling, or refinancing a property, you may need an official Wood Destroying Insect (WDI) report. This is a separate paid service — not included in the free phone assessment.`}</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">{`A WDI report involves a real on-site inspection performed by a licensed inspector after you book and pay for the service. The inspector examines the property in person and produces a genuine written report documenting the findings. This report is the kind of official documentation required by lenders, real estate agents, and title companies for property transactions.`}</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">{`Rest Easy Pest Control offers WDI reports in New York, New Jersey, and Pennsylvania. This is the only written report our company provides for any service — it is a paid inspection with a formal written deliverable, and it is completely separate from the free phone assessment described on this page.`}</p>
            <p className="text-gray-700 text-lg leading-relaxed">{`If you need a WDI report, let us know when you call and we can explain how that process works.`}</p>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Frequently Asked Questions — Termite Inspection in Camden County
            </h2>
            <div className="space-y-6">
              {faqData.map((item) => (
                <div key={item.question} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-[#1A365D] mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
              Termite &amp; Wood-Destroying Insect Services from Camden County Pest Control
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Link href="/termite-exterminator" className="block bg-amber-50 hover:bg-amber-100 rounded-lg p-5 transition-colors">
                <h3 className="font-semibold text-[#1A365D] mb-1">Termite Treatment →</h3>
                <p className="text-gray-600 text-sm">Liquid barrier and bait-station treatment options for active infestations</p>
              </Link>
              <Link href="/free-pest-estimate" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
                <h3 className="font-semibold text-[#1A365D] mb-1">Free Pest Estimate →</h3>
                <p className="text-gray-600 text-sm">Free phone estimate for any pest issue in Camden County</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
              {`Ready to Get Answers About Your Termite Concerns?`}
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              {`If you're a homeowner in Camden County, NJ, and you've noticed signs that concern you — or you just want peace of mind — we're here to help. Call Rest Easy Pest Control at (856) 600-0812 or request your free assessment online. There's no cost, no obligation, and no pressure. Just a straightforward conversation with a licensed representative who can help you understand what you're dealing with and what your options are.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18566000812"
                className="bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                📞 Call (856) 600-0812 Now
              </a>
              <Link
                href="/contact"
                className="bg-[#1A365D] hover:bg-[#2B6CB0] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                Get Your Free Assessment
              </Link>
            </div>
          </section>
        </main>

        {/* CTA Banner */}
        <section className="bg-[#1A365D] text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Termite Inspection — Camden County</h2>
            <p className="text-blue-200 text-lg mb-6">
              Free phone assessment. No obligation. WDI reports available for real estate transactions. All of Camden County.
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
                'Free termite phone assessment in Camden County NJ — no obligation. WDI reports available as a separate paid service for real estate transactions.',
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
