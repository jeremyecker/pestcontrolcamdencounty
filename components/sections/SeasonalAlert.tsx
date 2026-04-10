// components/sections/SeasonalAlert.tsx
// Server component — pages using this must add: export const revalidate = 86400

interface Pest {
  name: string;
  emoji: string;
  desc: string;
  href: string;
}

interface SeasonData {
  emoji: string;
  label: string;
  headline: string;
  pests: Pest[];
  tip: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  linkColor: string;
}

interface SeasonalAlertProps {
  county: string;
  compact?: boolean;
}

function getSeason(): 'spring' | 'summer' | 'fall' | 'winter' {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
}

const seasonalData: Record<'spring' | 'summer' | 'fall' | 'winter', SeasonData> = {
  spring: {
    emoji: '🌱',
    label: 'Spring',
    headline: 'Spring Pest Season Is Here in Camden County',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-800',
    linkColor: 'text-green-700',
    pests: [
      {
        name: 'Ants',
        emoji: '🐜',
        desc: 'Odorous house ants and pavement ants become active in April. Colonies appear along driveways, patios, and kitchen baseboards across Camden County.',
        href: '/services/ant-control',
      },
      {
        name: 'Mosquitoes',
        emoji: '🦟',
        desc: 'Breeding accelerates as standing water accumulates. Pre-season yard treatment in April beats peak activity near Cooper River and Haddon Lake parks.',
        href: '/services',
      },
      {
        name: 'Stinging Insects',
        emoji: '🐝',
        desc: 'Wasp and hornet queens begin building nests in April. Early removal prevents large, aggressive summer colonies on porches and under eaves.',
        href: '/services',
      },
    ],
    tip: 'April is the best time to treat — before summer backlogs and at the start of pest activity.',
  },
  summer: {
    emoji: '☀️',
    label: 'Summer',
    headline: 'Summer Pest Activity Is Peaking in Camden County',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-800',
    linkColor: 'text-yellow-700',
    pests: [
      {
        name: 'Mosquitoes',
        emoji: '🦟',
        desc: 'Peak season across Camden County. Areas near Cooper River and Haddon Lake parks have elevated mosquito pressure. Treat every 3–4 weeks.',
        href: '/services',
      },
      {
        name: 'Wasps & Hornets',
        emoji: '🐝',
        desc: "Colonies reach maximum size in July–August. Nests under eaves, decks, and play equipment become aggressive. Don't wait.",
        href: '/services',
      },
      {
        name: 'Ants',
        emoji: '🐜',
        desc: 'Carpenter ant activity peaks in summer. Look for sawdust trails and soft wood near decks and window frames in older Cherry Hill and Haddonfield homes.',
        href: '/services/ant-control',
      },
    ],
    tip: 'Summer is the busiest season. Schedule now to avoid multi-week wait times.',
  },
  fall: {
    emoji: '🍂',
    label: 'Fall',
    headline: 'Fall Pests Are Moving Inside in Camden County',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-800',
    linkColor: 'text-orange-700',
    pests: [
      {
        name: 'Rodents',
        emoji: '🐭',
        desc: 'Mice and rats seek winter warmth starting in October. Older row homes in Camden City and Collingswood are especially vulnerable to mouse entry.',
        href: '/services/rodent-control',
      },
      {
        name: 'Spiders',
        emoji: '🕷️',
        desc: 'Fall brings house spiders, cellar spiders, and wolf spiders indoors throughout Camden County.',
        href: '/services/spider-control',
      },
      {
        name: 'Stink Bugs',
        emoji: '🛡️',
        desc: 'Brown marmorated stink bugs cluster on south-facing walls in October and infiltrate homes through tiny gaps.',
        href: '/services',
      },
    ],
    tip: "Fall exclusion now prevents a winter rodent infestation. Don't wait until you see evidence inside.",
  },
  winter: {
    emoji: '❄️',
    label: 'Winter',
    headline: 'Winter Pests Are Active Indoors in Camden County',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-800',
    linkColor: 'text-blue-700',
    pests: [
      {
        name: 'Rodents',
        emoji: '🐭',
        desc: 'Mice are most active indoors in winter, chewing wiring and contaminating food storage. Act fast — populations double every 3 weeks.',
        href: '/services/rodent-control',
      },
      {
        name: 'Cockroaches',
        emoji: '🪳',
        desc: 'German cockroaches thrive in warm kitchens and bathrooms year-round. Winter is a good time to address infestations in Camden County homes.',
        href: '/services/cockroach-control',
      },
      {
        name: 'Bed Bugs',
        emoji: '🛏️',
        desc: "Bed bugs don't go dormant. Holiday travel and visiting relatives are common introduction events.",
        href: '/bed-bug-exterminator',
      },
    ],
    tip: 'Winter is ideal for a free inspection — pests are concentrated indoors and easier to locate.',
  },
};

export default function SeasonalAlert({ county, compact = false }: SeasonalAlertProps) {
  const season = getSeason();
  const data = seasonalData[season];

  if (compact) {
    return (
      <div className="max-w-4xl mx-auto px-4 mt-4 mb-2">
        <div className={`${data.bgColor} border ${data.borderColor} rounded-lg p-4 flex items-center gap-3`}>
          <span className="text-2xl">{data.emoji}</span>
          <div className="flex-1">
            <span className={`font-semibold ${data.textColor}`}>
              {data.label} Pest Alert — {county}:
            </span>
            <span className="text-gray-700 ml-1">
              {data.pests[0].name} and {data.pests[1].name} are currently active.
            </span>
          </div>
          <a
            href="/contact"
            className={`shrink-0 text-sm font-medium ${data.linkColor} hover:underline`}
          >
            Schedule now →
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className={`${data.bgColor} py-12`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-4xl">{data.emoji}</span>
          <h2 className={`text-2xl font-bold ${data.textColor} mt-2`}>{data.headline}</h2>
          <p className={`${data.textColor} mt-2 text-sm`}>💡 {data.tip}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {data.pests.map((pest) => (
            <a
              key={pest.name}
              href={pest.href}
              className={`block bg-white rounded-xl p-5 border ${data.borderColor} hover:shadow-md transition-shadow`}
            >
              <div className="text-3xl mb-2">{pest.emoji}</div>
              <h3 className={`font-semibold ${data.textColor} mb-1`}>{pest.name}</h3>
              <p className="text-gray-600 text-sm">{pest.desc}</p>
            </a>
          ))}
        </div>
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-[#DD6B20] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Schedule {data.label} Pest Control →
          </a>
        </div>
      </div>
    </section>
  );
}
