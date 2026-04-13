import type { Metadata } from 'next';
import LeadForm from '@/components/forms/LeadForm';
import { PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: 'Free Mosquito Treatment Quote | Camden County, NJ' },
  description:
    'Licensed mosquito control in Camden County, NJ. Seasonal yard treatments from $125–$150/visit. Free quote — same-day service available.',
  alternates: { canonical: `${SITE_URL}/get-a-quote/mosquito-treatment/` },
  openGraph: {
    title: 'Free Mosquito Treatment Quote | Camden County, NJ',
    description: 'Licensed mosquito control in Camden County, NJ. Seasonal yard treatments from $125–$150/visit. Free quote — same-day service available.',
    url: `${SITE_URL}/get-a-quote/mosquito-treatment/`,
  },
};

const FAQS = [
  {
    q: "How often do I need mosquito treatments?",
    a: "We recommend treatments every 21 days throughout the season (May through October) for consistent protection. One-time treatments are available but provide only temporary relief.",
  },
  {
    q: "How much does mosquito treatment cost in Camden County?",
    a: "Individual treatments cost $125–$150/visit. Many customers opt for seasonal programs for the best value and consistent protection throughout the summer.",
  },
  {
    q: "Is the mosquito spray safe for kids and pets?",
    a: "Yes — once the spray has dried (typically 30–45 minutes), treated areas are safe for children and pets. We use EPA-registered products applied by licensed technicians.",
  },
  {
    q: "What does your mosquito treatment cover?",
    a: "We treat all resting areas on your property — shrubs, ground cover, woodlines, and shaded areas where mosquitoes shelter during the day. We also advise on eliminating standing water sources.",
  },
  {
    q: "When does mosquito season start in Camden County?",
    a: "Mosquito season typically runs May through October in Camden County. We recommend your first treatment in early May before populations peak. We can schedule seasonal visits in advance so you're protected all summer.",
  },
];

export default function MosquitoTreatmentQuotePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1A365D] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-3">
              Free Estimate &mdash; No Obligation
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Get a Free Mosquito Treatment Quote in Camden County, NJ
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Take back your yard this season. Our licensed technicians provide barrier spray treatments that dramatically reduce mosquito populations on your property throughout the summer.
            </p>
            <div className="mt-4 bg-blue-800/50 rounded-lg p-4 border border-blue-700">
              <p className="text-orange-300 font-semibold text-sm mb-1">Typical Cost</p>
              <p className="text-2xl font-bold text-white">$125–$150/visit</p>
              <p className="text-blue-200 text-sm">seasonal, per visit &middot; free estimate before any work</p>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-700">
              <p className="text-blue-200 text-sm mb-1">Prefer to call?</p>
              <a href={PHONE_HREF} className="text-2xl font-bold text-white hover:text-orange-300 transition-colors">
                {PHONE}
              </a>
              <p className="text-blue-300 text-xs mt-1">Mon&ndash;Sat 7am&ndash;7pm &middot; Same-day available</p>
            </div>
          </div>
          <div>
            <LeadForm variant="page" title="Request Your Free Quote" subtitle="We&rsquo;ll get back to you ASAP &mdash; usually within minutes." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#EBF0F5] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] text-center mb-10">
            Common Questions About Mosquito Treatment
          </h2>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-[#1A365D] mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to hub */}
      <section className="bg-white py-8 px-4 text-center">
        <a href="/get-a-quote/" className="text-[#2B6CB0] font-semibold hover:underline text-sm">
          &larr; Back to all pest control services
        </a>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1A365D] py-14 px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to Get Rid of Mosquitoes for Good?
        </h2>
        <p className="text-blue-100 mb-6">
          Same-day service available throughout Camden County, NJ.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Call {PHONE}
        </a>
      </section>
    </main>
  );
}
