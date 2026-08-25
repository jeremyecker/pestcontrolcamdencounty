import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: 'Free Pest Inspection Camden County NJ | No Obligation',
  description:
    'Call (856) 600-0812 for a free, no-obligation pest control estimate in Camden County. Get your price over the phone — no home visit required.',
  keywords:
    'free pest inspection, free pest inspection Camden County, free exterminator estimate, free termite inspection NJ, pest inspection Cherry Hill',
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
    answer: `Yes, completely. There's no cost to speak with our licensed representative, no obligation to book service, and no pressure to make a decision on the spot. We'll give you a price, answer your questions, and the choice of whether to move forward is entirely up to you.`,
  },
  {
    question: `What happens on the call? How do you provide the estimate?`,
    answer: `When you call, a licensed Rest Easy representative will ask you to describe the pest issue you're dealing with and provide some details about your property. Based on the information you share, we'll discuss the situation, explain what may be contributing to the problem, and give you a clear price — all on that same call.`,
  },
  {
    question: `What types of pests do you handle?`,
    answer: `Rest Easy Pest Control provides treatment for a wide range of common pests, including ants, roaches, mice, rats, spiders, wasps, hornets, flies, and many others. When you call for your free estimate, simply describe what you're seeing, and we'll let you know how we can help.`,
  },
  {
    question: `Can I get an estimate for a rental property or commercial building?`,
    answer: `Absolutely. Our free phone estimates are available for residential homes, rental properties, apartment buildings, offices, restaurants, warehouses, and other commercial properties. Just let us know the type of property and the pest concern, and we'll provide pricing accordingly.`,
  },
  {
    question: `Do you offer WDI reports for real estate transactions?`,
    answer: `Yes, we do. However, it's important to understand that a WDI (Wood Destroying Insect) report is a separate paid service — it is not included in our free estimate. A WDI report involves a scheduled on-site inspection by a licensed inspector and results in an official written report. If you need this service for a home sale, purchase, or refinance, let us know when you call, and we'll provide details and pricing.`,
  },
  {
    question: `What if I think I have bed bugs?`,
    answer: `Bed bug concerns are handled through a separate paid on-site inspection, not through the free phone estimate. During this visit, a technician examines the property and discusses findings with you verbally on site. Please note that our bed bug inspection does not produce a written report or photographs. Call us to learn more about scheduling this service.`,
  },
];

export default function FreePestInspection() {
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
        <span className="text-gray-900">Free Estimate</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#2B6CB0] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {`Free Pest Control Estimate in Camden County, NJ`}
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            {`Get a no-obligation price for your pest control needs — right over the phone. Call Rest Easy Pest Control and speak directly with a licensed representative who will listen to your concerns, discuss your situation, and provide a straightforward price on the spot. No home visit required before you decide. No pressure to book. Just honest answers and a clear price so you can make the best decision for your home or business.`}
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
                <p className="text-gray-700">{`Call us or submit the online form — whichever is easier for you. A licensed Rest Easy representative will be ready to help.`}</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">{`Describe Your Situation`}</h3>
                <p className="text-gray-700">{`Tell us about the pest issue you're experiencing and share relevant details about your property. The more information you can provide, the more accurate your estimate will be.`}</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">{`We Discuss the Problem`}</h3>
                <p className="text-gray-700">{`Based on what you share, our representative will talk through the situation with you, including any conditions that may be contributing to the problem. We'll answer your questions and make sure you understand what's involved.`}</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">4</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A365D]">{`Get Your Price — No Obligation`}</h3>
                <p className="text-gray-700">{`On that same call, we'll give you a clear, upfront price. From there, the decision is entirely yours. Book service if you're ready, or take time to think it over. There's no pressure either way.`}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Phone Assessment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-6">
            {`Why We Provide Your Estimate Over the Phone`}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`We know your time is valuable. That's why we've designed our free estimate process to give you answers immediately — without the hassle of scheduling a visit, waiting for a technician, or taking time off work before you've even decided to move forward.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`When you call, you speak directly with a licensed representative who understands pest behavior and treatment options. By asking the right questions about what you're seeing and the details of your property, we can provide you with an accurate price right then and there.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`This approach means you get the information you need to make a decision quickly and conveniently. And once you do decide to book service, our technicians arrive fully prepared to address your pest problem — no preliminary visits, no wasted time.`}</p>
        </section>

        {/* WDI Callout — separate paid product, never bundled with the free estimate */}
        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            {`Need a WDI Report for a Real Estate Transaction?`}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`If you're buying, selling, or refinancing a property and need an official Wood Destroying Insect report, Rest Easy Pest Control offers this as a separate paid service.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`A WDI report is a formal inspection conducted on-site by a licensed inspector after you book and pay for the service. The inspector examines the property for evidence of termites and other wood-destroying insects and provides a genuine written report documenting the findings — the kind of documentation required by lenders, attorneys, and real estate professionals.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`Please note: The WDI report is a distinct service from our free phone estimate. It is not included in the free estimate, and the free estimate does not produce any written documentation. If you need a WDI report, simply let us know when you call, and we'll provide pricing and scheduling information for that specific service.`}</p>
        </section>

        {/* Bed Bug Note — separate paid, on-site, verbal findings only */}
        <section className="mb-12 bg-rose-50 border border-rose-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
            {`Concerned About Bed Bugs?`}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`Bed bug situations require a different approach. Because bed bugs can be difficult to identify and are often hidden in hard-to-see areas, we address these concerns through a paid, on-site inspection — not through our free phone estimate.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`During a bed bug inspection, a trained technician visits your property, examines the relevant areas, and discusses the findings with you verbally while on site. This allows for a direct conversation about what was observed and what your options are.`}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`Please be aware that our bed bug inspection does not include a written report or photographs. If you're experiencing a potential bed bug issue, call us to learn more about scheduling this service.`}</p>
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
            For{' '}
            <Link href="/same-day-pest-control" className="text-[#2B6CB0] hover:underline">same-day service</Link>,
            call before noon at{' '}
            <a href="tel:+18566000812" className="text-[#2B6CB0] font-semibold hover:underline">(856) 600-0812</a>.
            For{' '}
            <Link href="/emergency-pest-control" className="text-[#2B6CB0] hover:underline">urgent pest situations</Link>{' '}
            requiring prompt attention — wasp nests near children, bats in living spaces, active rodent
            infestations with food contamination — we offer priority response regardless of time of day.
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
            <Link href="/same-day-pest-control" className="block bg-green-50 hover:bg-green-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Same-Day Pest Control →</h3>
              <p className="text-gray-600 text-sm">Book same-day treatment across Camden County</p>
            </Link>
            <Link href="/emergency-pest-control" className="block bg-red-50 hover:bg-red-100 rounded-lg p-5 transition-colors">
              <h3 className="font-semibold text-[#1A365D] mb-1">Urgent Pest Control →</h3>
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
            {`Ready for Your Free Estimate?`}
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            {`If you're dealing with a pest problem in Camden County, Rest Easy Pest Control is here to help. Call us today to speak with a licensed representative who will listen to your concerns, discuss your situation, and give you a clear price — right over the phone. No cost. No obligation. No pressure. Just straightforward answers and honest pricing so you can decide what's right for you.`}
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
                url: 'https://pestcontrolcamdencounty.com/free-pest-inspection',
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
