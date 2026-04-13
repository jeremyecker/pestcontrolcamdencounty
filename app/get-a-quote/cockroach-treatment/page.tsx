import type { Metadata } from 'next';
import LeadForm from '@/components/forms/LeadForm';
import { PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: 'Free Cockroach Treatment Quote | Camden County, NJ' },
  description:
    'Licensed cockroach exterminators in Camden County, NJ. Same-day service for German roaches, American cockroaches & more. Free quote.',
  alternates: { canonical: `${SITE_URL}/get-a-quote/cockroach-treatment/` },
  openGraph: {
    title: 'Free Cockroach Treatment Quote | Camden County, NJ',
    description: 'Licensed cockroach exterminators in Camden County, NJ. Same-day service for German roaches, American cockroaches & more. Free quote.',
    url: `${SITE_URL}/get-a-quote/cockroach-treatment/`,
  },
};

const FAQS = [
  {
    q: "What types of cockroaches are common in Camden County?",
    a: "German cockroaches are by far the most common in kitchens and apartments. American cockroaches (sewer roaches) are larger and often enter through drains. We treat all species effectively.",
  },
  {
    q: "How much does cockroach treatment cost in Camden County?",
    a: "Most cockroach treatments in Camden County cost $300–$450 depending on severity and species. Severe German cockroach infestations may require multiple visits.",
  },
  {
    q: "How many treatments will I need?",
    a: "German cockroaches typically need 2–3 treatments spaced 2–3 weeks apart. American cockroaches often respond to a single treatment plus drain maintenance.",
  },
  {
    q: "Do I need to leave my home during treatment?",
    a: "For gel bait treatments, no — you can stay home. For spray applications, we recommend staying out for 2–4 hours until surfaces dry. We'll let you know what to expect in advance.",
  },
  {
    q: "Why do cockroaches keep coming back after store-bought spray?",
    a: "Store-bought sprays repel cockroaches into hiding but don't eliminate the colony. Professional gel baits and IGRs kill the whole population including eggs — that's why professional treatment is so much more effective.",
  },
];

export default function CockroachTreatmentQuotePage() {
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
              Get a Free Cockroach Treatment Quote in Camden County, NJ
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Cockroaches are a serious health hazard — they contaminate food, trigger asthma, and spread bacteria. Our licensed technicians use targeted gel baits, IGRs, and crack & crevice treatments to eliminate infestations fast in Camden County homes and businesses.
            </p>
            <div className="mt-4 bg-blue-800/50 rounded-lg p-4 border border-blue-700">
              <p className="text-orange-300 font-semibold text-sm mb-1">Typical Cost</p>
              <p className="text-2xl font-bold text-white">$300–$450</p>
              <p className="text-blue-200 text-sm">per treatment &middot; free estimate before any work</p>
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
            Common Questions About Cockroach Treatment
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
          Ready to Get Rid of Cockroaches for Good?
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
