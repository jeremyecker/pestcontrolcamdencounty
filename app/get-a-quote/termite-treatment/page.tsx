import type { Metadata } from 'next';
import LeadForm from '@/components/forms/LeadForm';
import { PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: 'Free Termite Treatment Quote | Camden County, NJ' },
  description:
    'Licensed termite exterminators in Camden County, NJ. Liquid barrier & bait station options. Free inspection — same-day service available.',
  alternates: { canonical: `${SITE_URL}/get-a-quote/termite-treatment/` },
  openGraph: {
    title: 'Free Termite Treatment Quote | Camden County, NJ',
    description: 'Licensed termite exterminators in Camden County, NJ. Liquid barrier & bait station options. Free inspection — same-day service available.',
    url: `${SITE_URL}/get-a-quote/termite-treatment/`,
  },
};

const FAQS = [
  {
    q: "What types of termite treatment do you offer?",
    a: "We offer liquid barrier treatment (Termidor® or equivalent) which creates a protection zone around your home's foundation, and bait station systems which eliminate the colony over time. We'll recommend the best option after a free inspection.",
  },
  {
    q: "How much does termite treatment cost in Camden County?",
    a: "Termite treatment in Camden County typically costs $800–$2,500 depending on your home's size, construction type, and infestation severity. We provide a free inspection and detailed quote before any work begins.",
  },
  {
    q: "Do I need to leave my home during termite treatment?",
    a: "For most liquid termite treatments, you do not need to vacate. Treatment is applied to the soil around your foundation. We'll advise you of any specific requirements for your situation.",
  },
  {
    q: "How long does termite treatment last?",
    a: "Liquid barrier treatments like Termidor® remain effective for 5+ years. Bait station systems provide ongoing protection with annual monitoring. We recommend annual inspections regardless of treatment type.",
  },
  {
    q: "Does homeowner's insurance cover termite damage?",
    a: "Most standard homeowner's policies do NOT cover termite damage — it's considered a preventable pest issue. This is why early treatment and annual inspections are so important. We can provide documentation for your records.",
  },
];

export default function TermiteTreatmentQuotePage() {
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
              Get a Free Termite Treatment Quote in Camden County, NJ
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Termites cause billions of dollars in structural damage every year — and most homeowners don&rsquo;t realize they have an infestation until it&rsquo;s already serious. Our licensed technicians offer both liquid barrier treatment and bait station systems for Camden County homes.
            </p>
            <div className="mt-4 bg-blue-800/50 rounded-lg p-4 border border-blue-700">
              <p className="text-orange-300 font-semibold text-sm mb-1">Typical Cost</p>
              <p className="text-2xl font-bold text-white">$800–$2,500</p>
              <p className="text-blue-200 text-sm">free inspection before any quote &middot; free estimate before any work</p>
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
            Common Questions About Termite Treatment
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
          Ready to Get Rid of Termites for Good?
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
