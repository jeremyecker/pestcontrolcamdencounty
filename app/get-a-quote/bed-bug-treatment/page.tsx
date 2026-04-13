import type { Metadata } from 'next';
import LeadForm from '@/components/forms/LeadForm';
import { PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: 'Free Bed Bug Treatment Quote | Camden County, NJ' },
  description:
    'Licensed bed bug exterminators in Camden County. Heat treatment & chemical options. Free inspection quote — same-day service available.',
  alternates: { canonical: `${SITE_URL}/get-a-quote/bed-bug-treatment/` },
  openGraph: {
    title: 'Free Bed Bug Treatment Quote | Camden County, NJ',
    description: 'Licensed bed bug exterminators in Camden County. Heat treatment & chemical options. Free inspection quote — same-day service available.',
    url: `${SITE_URL}/get-a-quote/bed-bug-treatment/`,
  },
};

const FAQS = [
  {
    q: "What's the difference between heat and chemical treatment?",
    a: "Heat treatment raises room temperature to 120°F+, killing all life stages in one visit with no chemical residue. Chemical treatment uses EPA-registered pesticides applied over 1–2 visits. We'll recommend the best option based on your infestation.",
  },
  {
    q: "How much does bed bug treatment cost in Camden County?",
    a: "Bed bug treatment in Camden County ranges from $1,200–$4,500 depending on your home's size and treatment method. We provide a detailed quote after a free inspection — no surprises.",
  },
  {
    q: "How long does treatment take?",
    a: "Heat treatments typically take 6–8 hours for a standard home. Chemical treatments take 2–4 hours per visit, with a follow-up 2 weeks later.",
  },
  {
    q: "Do I need to prepare my home before treatment?",
    a: "Yes — we provide a detailed prep checklist before your appointment. Proper preparation is essential for effective treatment. Our team will walk you through everything in advance.",
  },
  {
    q: "Do you guarantee bed bugs won't come back?",
    a: "We offer a re-service guarantee on our bed bug treatments. If bed bugs are detected within the warranty period, we return at no additional charge.",
  },
];

export default function BedBugTreatmentQuotePage() {
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
              Get a Free Bed Bug Treatment Quote in Camden County, NJ
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Bed bugs are one of the most stressful pest infestations — but they&rsquo;re 100% treatable. Our licensed technicians offer both heat treatment and chemical treatment for Camden County homes, hotels, and apartments.
            </p>
            <div className="mt-4 bg-blue-800/50 rounded-lg p-4 border border-blue-700">
              <p className="text-orange-300 font-semibold text-sm mb-1">Typical Cost</p>
              <p className="text-2xl font-bold text-white">$1,200–$4,500</p>
              <p className="text-blue-200 text-sm">heat or chemical treatment &middot; free estimate before any work</p>
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
            Common Questions About Bed Bug Treatment
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
          Ready to Get Rid of Bed Bugs for Good?
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
