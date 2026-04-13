import type { Metadata } from 'next';
import LeadForm from '@/components/forms/LeadForm';
import { PHONE, PHONE_HREF, GEO, SERVICES, SITE_URL } from '@/site.config';

export const metadata: Metadata = {
  title: { absolute: 'Get a Free Pest Control Quote | Camden County, NJ' },
  description:
    'Request a free pest control estimate for your Camden County home or business. Licensed exterminator — same-day service available in Cherry Hill, Voorhees, Gloucester Township, and Haddonfield.',
  alternates: { canonical: `${SITE_URL}/get-a-quote/` },
  openGraph: {
    title: 'Get a Free Pest Control Quote | Camden County, NJ',
    description:
      'Request a free pest control estimate for your Camden County home or business. Same-day service available.',
    url: `${SITE_URL}/get-a-quote/`,
  },
};

const WHY_US = [
  { icon: '⚡', title: 'Same-Day Service', body: 'Many jobs booked and treated the same day you call — no waiting around for a pest problem to get worse.' },
  { icon: '✅', title: 'Licensed & Insured', body: 'Fully licensed in New Jersey. Every technician is background-checked and trained for safe, effective treatments.' },
  { icon: '🔒', title: 'Discreet Visits', body: 'Unmarked vehicles available on request. We respect your privacy and your neighbors\' curiosity.' },
  { icon: '💯', title: 'Satisfaction Guarantee', body: 'If pests come back between scheduled visits, so do we — at no extra charge.' },
  { icon: '📞', title: 'Real People Answer', body: 'Call or submit this form and a real person follows up — usually within minutes during business hours.' },
];

const COMMON_PESTS = [
  { name: 'Ants', slug: 'ant-control', icon: '🐜' },
  { name: 'Bed Bugs', slug: 'bed-bug-removal', icon: '🛏️' },
  { name: 'Cockroaches', slug: 'cockroach-control', icon: '🪳' },
  { name: 'Mice & Rats', slug: 'rodent-control', icon: '🐀' },
  { name: 'Mosquitoes', slug: 'mosquito-control', icon: '🦟' },
  { name: 'Termites', slug: 'termite-treatment', icon: '🪵' },
  { name: 'Wasps & Hornets', slug: 'wasp-hornet-removal', icon: '🐝' },
  { name: 'Fleas & Ticks', slug: 'flea-tick-treatment', icon: '🦗' },
  { name: 'Spiders', slug: 'spider-control', icon: '🕷️' },
  { name: 'Wildlife', slug: 'wildlife-removal', icon: '🦝' },
  { name: 'Commercial', slug: 'commercial-pest-control', icon: '🏢' },
];

const FAQS = [
  {
    q: 'How quickly can you come out?',
    a: `In most cases we can schedule same-day or next-day service throughout Camden County. Call us at ${PHONE} for the fastest response.`,
  },
  {
    q: 'Do I need to leave my home during treatment?',
    a: 'It depends on the treatment type. For most general pest control visits, you can stay home. For bed bug heat treatments or heavy chemical applications, we\'ll let you know in advance what\'s needed.',
  },
  {
    q: 'Is the quote really free?',
    a: 'Yes — 100% free, no obligation. We\'ll assess your situation and give you a straightforward quote before any work begins.',
  },
  {
    q: 'Do you service the whole county?',
    a: 'Yes. We cover all of Camden County including Cherry Hill, Voorhees, Gloucester Township, Haddonfield, Collingswood, and Pennsauken.',
  },
  {
    q: 'What if the pests come back?',
    a: 'We stand behind our work. If covered pests return between scheduled visits, we come back at no additional charge.',
  },
];

export default function GetAQuotePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1A365D] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-3">
              Free Estimate — No Obligation
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Get a Free Pest Control Quote in Camden County, NJ
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Same-day service available. Licensed, insured, and trusted by Camden County{' '}
              homeowners and businesses. Fill out the form and we&rsquo;ll follow up fast.
            </p>
            <ul className="space-y-2 text-blue-100 mb-6">
              <li><span className="text-green-400">✓</span> No pressure, no gimmicks — just honest pricing</li>
              <li><span className="text-green-400">✓</span> Serving all of Camden County</li>
              <li><span className="text-green-400">✓</span> Response within minutes during business hours</li>
            </ul>
            <div className="mt-8 pt-6 border-t border-blue-800">
              <p className="text-blue-300 text-sm mb-1">Prefer to call?</p>
              <a href={PHONE_HREF} className="text-3xl font-extrabold text-white hover:text-orange-300 transition-colors">
                {PHONE}
              </a>
              <p className="text-blue-400 text-xs mt-1">Mon&ndash;Sat 7am&ndash;7pm &middot; Same-day emergency line</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Request Your Free Quote</h2>
            <p className="text-sm text-gray-500 mb-5">We&rsquo;ll get back to you ASAP — usually within minutes.</p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A365D] mb-3">
            Why Camden County Chooses Us
          </h2>
          <p className="text-center text-gray-400 mb-10">
            We live and work here too — that&rsquo;s why we treat every home like our own.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item) => (
              <div key={item.title} className="bg-[#EBF0F5] rounded-2xl p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#1A365D] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pest Grid */}
      <section className="bg-[#EBF0F5] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A365D] mb-3">
            What Pest Do You Have?
          </h2>
          <p className="text-center text-gray-400 mb-10">
            We treat all common pests in Camden County — click to learn more about each service.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {COMMON_PESTS.map((pest) => (
              <a
                key={pest.slug}
                href={`/${pest.slug}/`}
                className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="text-4xl mb-2">{pest.icon}</div>
                <p className="font-semibold text-[#1A365D] text-sm group-hover:text-orange-500 transition-colors">
                  {pest.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-3">
            Serving All of Camden County, NJ
          </h2>
          <p className="text-gray-400 mb-8">
            We cover Camden County including:
          </p>
          <p className="text-gray-700 leading-loose">
            Cherry Hill · Voorhees · Gloucester Township · Haddonfield · Collingswood · Pennsauken · Camden · Haddon Township · Audubon · Winslow · Clementon · Blackwood · Barrington · Magnolia · Lawnside · Merchantville
          </p>
          <a href="/service-areas/" className="inline-block mt-6 text-blue-700 font-semibold hover:underline">
            View all service areas &rarr;
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#EBF0F5] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A365D] text-center mb-10">
            Common Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-[#1A365D] text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1A365D] py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">Ready to Get Rid of Pests for Good?</h2>
        <p className="text-blue-200 mb-6">
          Call now or submit the form above — same-day service available throughout Camden County.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors"
        >
          Call {PHONE}
        </a>
      </section>
    </main>
  );
}
