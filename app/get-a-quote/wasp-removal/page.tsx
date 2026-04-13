import type { Metadata } from 'next';
import LeadForm from '@/components/forms/LeadForm';
import { PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: 'Free Wasp & Hornet Removal Quote | Camden County, NJ' },
  description:
    'Licensed wasp & hornet exterminators in Camden County, NJ. Safe nest removal — same-day service available. Free quote.',
  alternates: { canonical: `${SITE_URL}/get-a-quote/wasp-removal/` },
  openGraph: {
    title: 'Free Wasp & Hornet Removal Quote | Camden County, NJ',
    description: 'Licensed wasp & hornet exterminators in Camden County, NJ. Safe nest removal — same-day service available. Free quote.',
    url: `${SITE_URL}/get-a-quote/wasp-removal/`,
  },
};

const FAQS = [
  {
    q: "Is same-day wasp removal available in Camden County?",
    a: "Yes — wasp and hornet nest removal is typically available same-day or next-day throughout Camden County. We know it's urgent and prioritize stinging insect calls.",
  },
  {
    q: "How much does wasp and hornet removal cost in Camden County?",
    a: "Most wasp and hornet removal jobs in Camden County cost $300–$450 depending on nest size, location, and species. Ground nests (yellow jackets) may cost more due to treatment complexity.",
  },
  {
    q: "Do you remove the nest after treatment?",
    a: "We treat the nest first, then remove it once the colony is eliminated. If the nest is in an inaccessible location (inside walls, high eaves), we treat it in place and it will naturally decompose over time.",
  },
  {
    q: "Will wasps rebuild in the same spot?",
    a: "Wasps typically won't rebuild in an exact treated location, but they may build nearby. We can apply deterrents to reduce the likelihood. We recommend monitoring the area for a few weeks after treatment.",
  },
  {
    q: "Can I treat a wasp nest myself?",
    a: "We strongly advise against it. Yellow jackets can attack in large numbers if disturbed, and bald-faced hornets are extremely aggressive when defending their nest. Professional treatment is much safer and more effective.",
  },
];

export default function WaspRemovalQuotePage() {
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
              Get a Free Wasp & Hornet Removal Quote in Camden County, NJ
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Don&rsquo;t risk getting stung — wasp and hornet nests need professional treatment. Our licensed technicians handle paper wasps, yellow jackets, bald-faced hornets, and European hornets safely throughout Camden County.
            </p>
            <div className="mt-4 bg-blue-800/50 rounded-lg p-4 border border-blue-700">
              <p className="text-orange-300 font-semibold text-sm mb-1">Typical Cost</p>
              <p className="text-2xl font-bold text-white">$300–$450</p>
              <p className="text-blue-200 text-sm">per nest removal &middot; free estimate before any work</p>
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
            Common Questions About Wasp & Hornet Removal
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
          Ready to Get Rid of Wasps & Hornets for Good?
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
