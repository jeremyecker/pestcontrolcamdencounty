import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: 'Free Pest Estimate | Camden County, NJ',
  description:
    'Call (856) 600-0812 for a free, no-obligation pest estimate in Camden County. Speak with a licensed rep and get pricing on the spot.',
  keywords:
    'free pest estimate, pest estimate Camden County, free exterminator estimate, free termite quote NJ, pest estimate Cherry Hill',
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
    question: `Is the estimate really free with no obligation?`,
    answer: `Yes, completely. There's no charge for the phone assessment, and you're under no obligation to book service afterward. We provide pricing and information so you can make the decision that's right for you — no pressure.`,
  },
  {
    question: `What happens on the call? How is the estimate provided?`,
    answer: `When you call, you'll speak with a licensed Rest Easy representative. You'll describe your pest concern and share details about your property. Based on that conversation, we'll discuss your situation, explain factors that may be contributing to the issue, and give you a price for service — all during that same phone call.`,
  },
  {
    question: `What types of pests are covered?`,
    answer: `Our team handles a wide range of common household and property pests, including ants, roaches, mice, rats, spiders, wasps, hornets, and many others. When you call, let us know what you're dealing with and we'll confirm how we can help.`,
  },
  {
    question: `Can I get an estimate for a rental or commercial property?`,
    answer: `Absolutely. Whether you're a homeowner, landlord, property manager, or business owner, we're happy to provide a free phone estimate for residential and commercial properties alike.`,
  },
  {
    question: `Do you offer WDI reports for real estate transactions?`,
    answer: `Yes, we do — but this is a separate paid service, not part of the free phone estimate. A WDI (Wood Destroying Insect) report requires a scheduled on-site inspection after booking and payment, and it results in an official written report. Contact us to learn more about pricing and scheduling.`,
  },
  {
    question: `What about bed bugs?`,
    answer: `Bed bug concerns are addressed through a separate paid, on-site inspection — not the free phone estimate. During that visit, a technician examines the area and discusses findings with you verbally on site. No written report or photographs are produced from a bed bug inspection. Call us to ask questions or to schedule.`,
  },
];

export default function FreePestEstimate() {
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
        <span className="text-gray-900">Free Pest Estimate</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {`Free Pest Control Estimate in Camden County, NJ`}
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            {`Get a straightforward answer about your pest problem—without waiting for a home visit. Call Rest Easy Pest Control for a free phone assessment with a licensed representative. Describe your situation, get a price on the spot, and decide if you'd like to book. No obligation, no pressure, no hassle.`}
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
              className="bg-white text-[#1A365D] font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors"
            >
              {`Get Your Free Estimate`}
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            {`How Your Free Estimate Works`}
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">1</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">{`Reach Out`}</h3>
                <p className="text-gray-700">{`Call us or submit the online form to connect with a licensed Rest Easy Pest Control representative. We're here to listen and ready to help.`}</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">{`Describe Your Situation`}</h3>
                <p className="text-gray-700">{`Tell us about the pest issue you're experiencing and share relevant details about your property—the type of structure, where you've noticed activity, and anything else that might be helpful.`}</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">{`Get Expert Guidance`}</h3>
                <p className="text-gray-700">{`Based on what you describe, our representative will discuss your situation, explain what may be contributing to the problem, and answer your questions—all over the phone.`}</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">4</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">{`Receive Your Price and Decide`}</h3>
                <p className="text-gray-700">{`On that same call, you'll receive a clear price for service. From there, you can book an appointment or simply take time to think it over. There's no obligation and no pressure either way.`}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Phone Assessment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            {`Why We Provide Estimates by Phone`}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`We know your time is valuable. That's why our free estimates are handled over the phone rather than requiring you to schedule and wait for a home visit before you've even decided to move forward.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`When you call, you speak directly with a licensed representative who can assess your situation based on what you describe, answer your questions, and provide pricing—all in one conversation. You get the information you need right away, without carving time out of your day for an appointment.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`If you choose to book service, that's when our technicians come to your property to do the hands-on work. But there's no need to commit to a visit just to find out what things might cost.`}</p>
        </section>

        {/* WDI Callout — separate paid product, never bundled with the free estimate */}
        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            {`Need a Wood Destroying Insect Report for a Real Estate Transaction?`}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`If you're buying, selling, or refinancing a property and need an official WDI (Wood Destroying Insect) report, Rest Easy Pest Control offers this as a separate paid service.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`A WDI report involves a thorough on-site inspection conducted by a licensed technician after the service is booked and paid for. You'll receive a genuine written report documenting the findings—the kind of official documentation that lenders and real estate professionals require.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`Please note: The WDI report is a distinct service from our free phone estimate. It is not included in, and should not be confused with, the no-cost assessment described on this page.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed">{`Contact us to learn more or to schedule your WDI inspection.`}</p>
        </section>

        {/* Bed Bug Note — separate paid, on-site, verbal findings only */}
        <section className="mb-12 bg-rose-50 border border-rose-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            {`A Note About Bed Bug Concerns`}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`If you suspect a bed bug issue, we understand the urgency. Bed bug situations are handled through a paid, on-site inspection—not through our free phone estimate.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`During this visit, a trained technician examines the affected areas and discusses the findings with you verbally, right there on site. This allows for a direct conversation about what's been found and what steps may be appropriate.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed">{`Please be aware that no written report or photographs are produced from a bed bug inspection. If you have questions about scheduling a bed bug inspection, give us a call.`}</p>
        </section>

        {/* Towns Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Free Estimate Serving All of Camden County
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We provide free phone estimates throughout all 16 municipalities in Camden County, NJ. {`No matter where you are located in the county, we can provide a free estimate over the phone:`}
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
                className="bg-blue-50 hover:bg-blue-100 text-[#1A365D] font-medium py-3 px-4 rounded-lg text-center transition-colors text-sm"
              >
                {town.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            For same-day service, call before noon at{' '}
            <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            {`Frequently Asked Questions — Free Estimate in Camden County`}
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

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/termite-inspection" className="block bg-amber-50 hover:bg-amber-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">WDI Reports &amp; Termite Service →</h3>
              <p className="text-gray-600 text-sm">Official WDI reports and termite treatment for Camden County</p>
            </Link>
            <Link href="/free-pest-inspection" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Free Pest Inspection →</h3>
              <p className="text-gray-600 text-sm">Free phone estimate for any pest issue in Camden County</p>
            </Link>
            <Link href="/same-day-pest-control" className="block bg-green-50 hover:bg-green-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Same-Day Service →</h3>
              <p className="text-gray-600 text-sm">Book a same-day service across Camden County</p>
            </Link>
            <Link href="/fast-response-pest-control" className="block bg-orange-50 hover:bg-orange-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Fast Response Service →</h3>
              <p className="text-gray-600 text-sm">Immediate response for urgent pest situations</p>
            </Link>
            <Link href="/exterminator-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Exterminator Near Me →</h3>
              <p className="text-gray-600 text-sm">NJDEP-licensed exterminators throughout Camden County</p>
            </Link>
            <Link href="/pest-control-near-me" className="block bg-blue-50 hover:bg-blue-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Pest Control Near Me →</h3>
              <p className="text-gray-600 text-sm">Full-service local pest control for every Camden County pest</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            {`Ready to Get Your Free Estimate?`}
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            {`If you're dealing with a pest problem in Camden County, Rest Easy Pest Control is here to help. Call us at (856) 600-0812 or submit the form on this page to speak with a licensed representative.`}
          </p>
          <p className="text-gray-700 text-lg mb-6">
            {`There's no cost, no obligation, and no pressure—just honest answers and clear pricing so you can decide what's right for you.`}
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
              Get a Free Estimate
            </Link>
          </div>
        </section>
      </main>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'PestControlService',
                name: 'Camden County Pest Control — Free Estimate',
                telephone: '(856) 600-0812',
                url: 'https://pestcontrolcamdencounty.com/free-pest-estimate',
                description:
                  `Free pest control estimate in Camden County — no obligation. Call (856) 600-0812 to describe your problem and get a price on the spot.`,
                areaServed: {
                  '@type': 'County',
                  name: 'Camden County',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'New Jersey',
                  },
                },
                serviceType: 'Free Estimate',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  description: 'Free phone estimate — no obligation',
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqData.map((item) => ({
                  '@type': 'Question',
                  name: item.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
    </div>
  );
}
