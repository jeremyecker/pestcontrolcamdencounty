import type { Metadata } from 'next';
import LeadForm from '@/components/forms/LeadForm';
import { PHONE, PHONE_HREF, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: 'Free Ant Control Quote | Camden County, NJ' },
  description:
    'Licensed ant exterminators serving Camden County. Free same-day quote for carpenter ants, pavement ants, odorous house ants & more.',
  alternates: { canonical: `${SITE_URL}/get-a-quote/ant-control/` },
  openGraph: {
    title: 'Free Ant Control Quote | Camden County, NJ',
    description: 'Licensed ant exterminators serving Camden County. Free same-day quote for carpenter ants, pavement ants, odorous house ants & more.',
    url: `${SITE_URL}/get-a-quote/ant-control/`,
  },
};

const FAQS = [
  {
    q: "What types of ants do you treat in Camden County?",
    a: "We treat all common species including carpenter ants, odorous house ants, pavement ants, and fire ants. Carpenter ants are the most destructive — if you see large black ants in or around wood structures, call us right away.",
  },
  {
    q: "How much does ant control cost in Camden County?",
    a: "Most ant treatments in Camden County run $300–$450 depending on the species, infestation size, and number of entry points. We always give you a firm price before starting — no surprises.",
  },
  {
    q: "Will one treatment get rid of ants permanently?",
    a: "For most ant species, one treatment plus exclusion recommendations does the job. Carpenter ants may require a follow-up. We stand behind our work with a re-service guarantee.",
  },
  {
    q: "Do I need to leave my home during ant treatment?",
    a: "No — for most ant treatments you can stay home. We use targeted applications that are safe once dry. Our technicians will advise you on any specific precautions.",
  },
  {
    q: "How do I prevent ants from coming back?",
    a: "We'll identify and seal entry points as part of your service. Storing food in sealed containers and fixing moisture issues also help. We'll walk you through prevention steps after treatment.",
  },
];

export default function AntControlQuotePage() {
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
              Get a Free Ant Control Quote in Camden County, NJ
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Whether you&rsquo;re dealing with carpenter ants damaging wood, odorous house ants in your kitchen, or pavement ants invading outside — our licensed technicians identify the species and eliminate the colony, not just the ants you see.
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
            Common Questions About Ant Control
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
          Ready to Get Rid of Ants for Good?
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
