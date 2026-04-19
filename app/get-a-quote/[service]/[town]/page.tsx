import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import LeadForm from '@/components/forms/LeadForm';
import { PHONE, PHONE_HREF, SITE_URL } from '@/site.config';
import townsData from '@/data/towns.json';

interface FAQ { q: string; a: string; }
interface ServiceConfig {
  label: string; h1Prefix: string; pricing: string; pricingNote: string;
  intro: (town: string) => string; faqs: FAQ[];
}

const SERVICES_MAP: Record<string, ServiceConfig> = {
  'bed-bug-treatment': {
    label: 'Bed Bug Treatment', h1Prefix: 'Free Bed Bug Treatment Quote in',
    pricing: '$1,200\u2013$4,500', pricingNote: 'heat or chemical treatment',
    intro: (town) => `Bed bugs are one of the most stressful infestations \u2014 but they\u2019re 100% treatable. Our licensed technicians serve ${town} with proven heat and chemical treatment options, backed by a satisfaction guarantee.`,
    faqs: [
      { q: 'How much does bed bug treatment cost in Camden County?', a: 'Bed bug treatment ranges from $1,200\u2013$4,500 depending on home size and the method used. We provide a free inspection and detailed quote before any work begins.' },
      { q: 'Heat treatment vs. chemical \u2014 which is better?', a: 'Heat treatment reaches 120\u00b0F+ and kills all life stages in one visit with no chemical residue. Chemical treatment uses EPA-registered pesticides over 1\u20132 visits. We recommend the best fit after your inspection.' },
      { q: 'Do you guarantee your bed bug treatments?', a: 'Yes. We offer a re-service guarantee \u2014 if bed bugs return within the warranty period, we come back at no additional charge.' },
      { q: 'How do I prepare my home before treatment?', a: 'We provide a detailed prep checklist before your appointment. Our team walks you through every step to make sure treatment is as effective as possible.' },
    ],
  },
  'ant-exterminator': {
    label: 'Ant Control', h1Prefix: 'Free Ant Control Quote in',
    pricing: '$300\u2013$450', pricingNote: 'one-time treatment or seasonal plan',
    intro: (town) => `Ants invade Camden County homes every spring \u2014 especially in ${town}. Our licensed technicians identify the colony, treat at the source, and protect your home from future invasions.`,
    faqs: [
      { q: 'How much does ant control cost in Camden County?', a: 'Ant control in Camden County typically runs $300\u2013$450 for a one-time service. Seasonal prevention plans are also available for year-round protection.' },
      { q: 'Why do I keep getting ants every year?', a: 'Most over-the-counter sprays only kill forager ants \u2014 they don\u2019t reach the colony. Our treatments target the source, including carpenter ant galleries and pavement ant nests.' },
      { q: 'Are your ant treatments safe for kids and pets?', a: 'We use EPA-registered products applied by licensed technicians. We\u2019ll advise you on any precautions needed before and after treatment.' },
      { q: 'How long does ant treatment take?', a: 'Most ant treatments take 45\u201390 minutes. We treat interior entry points and the exterior perimeter for complete coverage.' },
    ],
  },
  'rodent-control': {
    label: 'Rodent Control', h1Prefix: 'Free Rodent Control Quote in',
    pricing: '$300\u2013$450', pricingNote: 'removal + exclusion included',
    intro: (town) => `Mice and rats seek warmth in Camden County homes every fall \u2014 especially in ${town}. Our rodent control service includes removal, exclusion (sealing entry points), and a follow-up inspection to keep them out for good.`,
    faqs: [
      { q: 'How much does rodent control cost in Camden County?', a: 'Rodent control in Camden County runs $300\u2013$450 and includes both removal and exclusion work \u2014 sealing the entry points mice and rats use to get inside.' },
      { q: 'How do mice get into homes?', a: 'Mice can squeeze through gaps as small as a dime. Common entry points include gaps around pipes, foundation cracks, dryer vents, and gaps under doors. Our exclusion service seals all of these.' },
      { q: 'Is exclusion included in the price?', a: 'Yes \u2014 our rodent control service always includes exclusion work. Trapping alone doesn\u2019t solve the problem long-term; we seal entry points to prevent re-entry.' },
      { q: 'How long does it take to eliminate a mouse problem?', a: 'Most rodent problems are resolved within 1\u20132 service visits. We set traps, seal entry points, and follow up to confirm the problem is fully resolved.' },
    ],
  },
  'cockroach-exterminator': {
    label: 'Cockroach Exterminator', h1Prefix: 'Free Cockroach Exterminator Quote in',
    pricing: '$300\u2013$450', pricingNote: 'one-time or ongoing plan',
    intro: (town) => `Cockroaches thrive in Camden County\u2019s humid summers and can spread quickly through homes in ${town}. Our targeted treatments eliminate infestations and prevent them from coming back.`,
    faqs: [
      { q: 'How much does cockroach extermination cost in Camden County?', a: 'Cockroach extermination in Camden County runs $300\u2013$450 for a one-time treatment. We also offer ongoing plans for properties with recurring issues.' },
      { q: 'Why are cockroaches so hard to get rid of?', a: 'Cockroaches reproduce rapidly and hide in walls, under appliances, and in drains. Our gel baits and growth regulators break the reproductive cycle \u2014 where store-bought products fail.' },
      { q: 'How long does cockroach treatment take?', a: 'A standard treatment takes 1\u20132 hours. We treat kitchen, bathroom, and utility areas where roaches are most active.' },
      { q: 'Do I need to leave my home during treatment?', a: 'For most treatments, no \u2014 you can remain in your home. We\u2019ll advise you in advance if any precautions are needed.' },
    ],
  },
  'mosquito-treatment': {
    label: 'Mosquito Treatment', h1Prefix: 'Free Mosquito Treatment Quote in',
    pricing: '$125\u2013$150/visit', pricingNote: 'seasonal program available',
    intro: (town) => `Camden County\u2019s wetlands and creeks create ideal mosquito breeding conditions near ${town}. Our family-friendly barrier treatments knock down populations fast and protect your yard all season long.`,
    faqs: [
      { q: 'How much does mosquito treatment cost in Camden County?', a: 'Mosquito barrier treatments run $125\u2013$150 per visit. Most homeowners choose our seasonal program \u2014 monthly treatments from May through September for consistent protection.' },
      { q: 'How does mosquito barrier treatment work?', a: 'We apply a botanical or synthetic barrier spray to shrubs, trees, and grass where mosquitoes rest. Treatments typically remain effective for 3\u20134 weeks.' },
      { q: 'Is mosquito treatment safe for kids and pets?', a: 'We use EPA-registered products and follow all label instructions. We recommend keeping people and pets off treated areas for 30\u201360 minutes while the treatment dries.' },
      { q: 'When should I start mosquito treatments?', a: 'We recommend starting in late April or early May before mosquito season peaks. Early treatments dramatically reduce the population throughout the season.' },
    ],
  },
  'wasp-hornet-removal': {
    label: 'Wasp & Hornet Removal', h1Prefix: 'Free Wasp & Hornet Removal Quote in',
    pricing: '$300\u2013$450', pricingNote: 'nest removal included',
    intro: (town) => `Wasps and hornets build nests under eaves, in sheds, and along rooflines across Camden County \u2014 including in ${town}. Our technicians safely remove nests and treat entry points to prevent rebuilding.`,
    faqs: [
      { q: 'How much does wasp and hornet removal cost in Camden County?', a: 'Wasp and hornet removal in Camden County runs $300\u2013$450, including nest removal and treatment to discourage re-nesting.' },
      { q: 'Is it safe to remove a wasp nest myself?', a: 'Disturbing an active nest without proper equipment can trigger a swarm. Our technicians use protective gear and professional-grade treatments to safely remove nests.' },
      { q: 'What types of stinging insects do you treat?', a: 'We treat yellow jackets, paper wasps, bald-faced hornets, European hornets, and mud daubers \u2014 all common throughout Camden County.' },
      { q: 'Will wasps come back after removal?', a: 'Removed nests are treated to prevent rebuilding. However, new queens may start new nests nearby. We treat nest sites to make them unattractive for future activity.' },
    ],
  },
  'termite-treatment': {
    label: 'Termite Treatment', h1Prefix: 'Free Termite Treatment Quote in',
    pricing: '$800\u2013$2,500', pricingNote: 'free inspection included',
    intro: (town) => `Termites cause billions of dollars in structural damage each year \u2014 and Camden County homes in ${town} are not immune. Our licensed technicians provide thorough inspections and proven treatments to protect your investment.`,
    faqs: [
      { q: 'How much does termite treatment cost in Camden County?', a: 'Termite treatment in Camden County runs $800\u2013$2,500 depending on your home\u2019s size, construction type, and infestation level. We include a free inspection before any quote.' },
      { q: 'What are signs of termites?', a: 'Common signs include mud tubes along foundation walls, hollow-sounding wood, discarded wings near windowsills, and frass (termite droppings) that resembles sawdust.' },
      { q: 'Liquid treatment vs. bait stations \u2014 which is better?', a: 'Liquid termiticide creates a chemical barrier in the soil around your foundation. Bait stations use slow-acting bait that workers carry back to the colony. We recommend the best option based on your home.' },
      { q: 'How long does termite treatment take?', a: 'Liquid treatments typically take 4\u20138 hours for a standard home. Bait station installation takes 2\u20133 hours, with ongoing monitoring visits every 3\u20136 months.' },
    ],
  },
};

type TownEntry = { name: string; slug: string };

function getTownName(slug: string): string {
  const towns = (townsData as { regions: { towns: TownEntry[] }[] }).regions[0].towns;
  return towns.find((t) => t.slug === slug)?.name ??
    slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export async function generateStaticParams() {
  const serviceKeys = Object.keys(SERVICES_MAP);
  const towns = (townsData as { regions: { towns: TownEntry[] }[] }).regions[0].towns;
  return towns.flatMap((town) => serviceKeys.map((service) => ({ service, town: town.slug })));
}

export async function generateMetadata({ params }: { params: { service: string; town: string } }): Promise<Metadata> {
  const svc = SERVICES_MAP[params.service];
  if (!svc) return {};
  const townName = getTownName(params.town);
  const title = `Free ${svc.label} Quote in ${townName}, NJ`;
  const description = `Licensed ${svc.label.toLowerCase()} serving ${townName}, Camden County NJ. ${svc.pricing} \u2014 free estimate, same-day service available.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${SITE_URL}/get-a-quote/${params.service}/${params.town}/` },
    openGraph: { title, description, url: `${SITE_URL}/get-a-quote/${params.service}/${params.town}/` },
  };
}

export default function ServiceTownQuotePage({ params }: { params: { service: string; town: string } }) {
  const svc = SERVICES_MAP[params.service];
  if (!svc) notFound();
  const townName = getTownName(params.town);

  return (
    <main>
      <section className="bg-[#1A365D] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-3">
              Free Estimate &mdash; No Obligation
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {svc.h1Prefix} {townName}, NJ
            </h1>
            <p className="text-blue-100 text-lg mb-6">{svc.intro(townName)}</p>
            <div className="mt-4 bg-blue-800/50 rounded-lg p-4 border border-blue-700">
              <p className="text-orange-300 font-semibold text-sm mb-1">Typical Cost</p>
              <p className="text-2xl font-bold text-white">{svc.pricing}</p>
              <p className="text-blue-200 text-sm">{svc.pricingNote} &middot; free estimate before any work</p>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-700">
              <p className="text-blue-200 text-sm mb-1">Prefer to call?</p>
              <a href={PHONE_HREF} className="text-2xl font-bold text-white hover:text-orange-300 transition-colors">{PHONE}</a>
              <p className="text-blue-300 text-xs mt-1">Mon&ndash;Sat 7am&ndash;7pm &middot; Same-day available</p>
            </div>
          </div>
          <div>
            <LeadForm variant="page" title="Request Your Free Quote" subtitle="We&rsquo;ll get back to you ASAP &mdash; usually within minutes." />
          </div>
        </div>
      </section>

      <section className="bg-[#EBF0F5] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] text-center mb-10">
            Common Questions About {svc.label} in {townName}
          </h2>
          <div className="space-y-4">
            {svc.faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-[#1A365D] mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 px-4 text-center space-x-4">
        <a href={`/get-a-quote/${params.service}/`} className="text-[#2B6CB0] font-semibold hover:underline text-sm">
          &larr; Back to {svc.label} Quotes
        </a>
        <span className="text-gray-300">|</span>
        <a href="/get-a-quote/" className="text-[#2B6CB0] font-semibold hover:underline text-sm">All Services</a>
      </section>

      <section className="bg-[#1A365D] py-14 px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Solve Your Pest Problem in {townName}?</h2>
        <p className="text-blue-100 mb-6">Same-day service available throughout Camden County, NJ.</p>
        <a href={PHONE_HREF} className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors">
          Call {PHONE}
        </a>
      </section>
    </main>
  );
}
