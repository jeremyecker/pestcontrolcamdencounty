import type { Metadata } from 'next';
import LeadForm from '@/components/forms/LeadForm';
import { PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: 'Free Rodent Control Quote | Camden County, NJ' },
  description:
    'Licensed rodent exterminators in Camden County, NJ. Mice & rat removal plus exclusion work. Free quote — same-day service available.',
  alternates: { canonical: `${SITE_URL}/get-a-quote/rodent-control/` },
  openGraph: {
    title: 'Free Rodent Control Quote | Camden County, NJ',
    description: 'Licensed rodent exterminators in Camden County, NJ. Mice & rat removal plus exclusion work. Free quote — same-day service available.',
    url: `${SITE_URL}/get-a-quote/rodent-control/`,
  },
};

const FAQS = [
  {
    q: "How do I know if I have mice or rats?",
    a: "Mice leave small, dark droppings (about the size of a grain of rice) and stay close to walls. Rat droppings are larger and capsule-shaped. Both chew wires and leave grease marks along baseboards. If you're unsure, call us — we'll identify the pest and recommend the right treatment.",
  },
  {
    q: "How much does rodent control cost in Camden County?",
    a: "Most rodent control programs in Camden County cost $300–$450 and include both extermination and basic exclusion work to seal entry points. Larger properties or severe infestations may cost more.",
  },
  {
    q: "What does exclusion work mean?",
    a: "Exclusion means sealing the gaps, cracks, and entry points that rodents use to enter your home — around pipes, vents, the foundation, and gaps under doors. Without exclusion, new rodents will eventually find their way back in.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most customers see a dramatic reduction in activity within 7–14 days. Complete elimination typically takes 2–3 visits over 3–4 weeks.",
  },
  {
    q: "Do you use poison bait stations?",
    a: "We use a combination of tamper-resistant bait stations, snap traps, and exclusion depending on your situation. We discuss all options with you so you're comfortable with the approach, especially if you have pets or small children.",
  },
];

export default function RodentControlQuotePage() {
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
              Get a Free Rodent Control Quote in Camden County, NJ
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Mice and rats don&rsquo;t just cause property damage — they spread diseases and contaminate food. Our licensed technicians identify entry points, eliminate active infestations, and seal up your home so rodents can&rsquo;t return.
            </p>
            <div className="mt-4 bg-blue-800/50 rounded-lg p-4 border border-blue-700">
              <p className="text-orange-300 font-semibold text-sm mb-1">Typical Cost</p>
              <p className="text-2xl font-bold text-white">$300–$450</p>
              <p className="text-blue-200 text-sm">includes basic exclusion &middot; free estimate before any work</p>
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
            Common Questions About Rodent Control
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
          Ready to Get Rid of Rodents for Good?
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
