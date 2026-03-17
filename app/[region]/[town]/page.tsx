import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getRegion } from '@/lib/regions';
import { BRAND, SERVICE_TOWN_ROUTES } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';
import { TOWN_OPENERS } from '@/data/town-openers';
import { CITY_LAYER7 } from '@/data/layer7-data';

export async function generateMetadata({ params }: { params: Promise<{ region: string; town: string }> }): Promise<Metadata> {
  const { region: regionSlug, town: townSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) return {};
  const townName = townSlug.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
  return {
    title: `Pest Control in ${townName}, NJ`,
    description: `Licensed pest control in ${townName}, NJ. Termites, rodents, ants, cockroaches & more. Same-day service available. Call ${BRAND.phoneFormatted}.`,
    openGraph: {
      title: `Pest Control in ${townName}, NJ`,
      description: `Licensed pest control in ${townName}, NJ. Call ${BRAND.phoneFormatted} for same-day service.`,
    },
  };
}

export async function generateStaticParams() {
  const { REGIONS } = await import('@/hub.config');
  return REGIONS.flatMap(region =>
    region.towns.map((town: string) => ({
      region: region.slug,
      town: town.toLowerCase().replace(/\s+/g, '-'),
    }))
  );
}

export default async function TownPage({ params }: { params: Promise<{ region: string; town: string }> }) {
  const { region: regionSlug, town: townSlug } = await params;
  const region = getRegion(regionSlug);
  if (!region) notFound();

  const townName = townSlug.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
  const isValidTown = region.towns.some(
    (t: string) => t.toLowerCase().replace(/\s+/g, '-') === townSlug
  );
  if (!isValidTown && region.towns.length > 0) notFound();

  const layer7 = CITY_LAYER7[townSlug];
  const nearbyTowns = layer7?.nearby || [];
  const neighborhoods = layer7?.neighborhoods;

  const services = [
    { name: 'Termite Control', icon: '🪵', desc: 'Liquid treatments, bait systems, pre-treat inspections' },
    { name: 'Rodent Control', icon: '🐭', desc: 'Exclusion, trapping, and sanitation guidance' },
    { name: 'Cockroach Extermination', icon: '🪳', desc: 'German cockroach specialists, gel bait programs' },
    { name: 'Ant Control', icon: '🐜', desc: 'Carpenter ants, pavement ants, odorous house ants' },
    { name: 'Bed Bug Treatment', icon: '🛏️', desc: 'Heat treatment and chemical protocols' },
    { name: 'Stink Bug Control', icon: '🐛', desc: 'Exclusion sealing + perimeter treatments' },
  ];

  const genericFaqs = [
    {
      q: `How quickly can you respond in ${townName}?`,
      a: `We offer same-day and next-morning service throughout Camden County, including ${townName}. Call before noon for same-day availability.`,
    },
    {
      q: 'Are your treatments family-friendly?',
      a: `Yes. We use EPA-registered products applied by licensed NJ exterminators. Most treatments are clear to re-enter within 1-4 hours.`,
    },
    {
      q: 'Do you treat termites in Camden County?',
      a: `Termites are one of the most common threats in South Jersey. We offer liquid barrier treatments, Sentricon bait systems, and pre-construction pre-treats throughout ${townName} and surrounding areas.`,
    },
    {
      q: 'Is there a warranty on your pest control services?',
      a: 'We offer a 30-day re-service guarantee on most pest treatments. Termite protection plans include annual inspections.',
    },
  ];

  const faqs = layer7?.faqs || genericFaqs;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.name,
    telephone: BRAND.phoneFormatted,
    url: `https://${BRAND.domain}`,
    areaServed: {
      '@type': 'City',
      name: townName,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Camden County, NJ',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Pest Control Services in ${townName}`,
      itemListElement: services.map(s => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/camden-county/" className="hover:text-brand-primary">Camden County</Link>
          {' → '}
          <span className="text-gray-900">{townName}</span>
        </nav>

        {/* Hero */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pest Control in {townName}, NJ
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {TOWN_OPENERS[townSlug] || `${region.pestContext} Our licensed Camden County exterminators serve ${townName} with same-day availability, transparent pricing, and family-friendly treatments.`}
        </p>

        {/* Neighborhoods callout (major hubs only) */}
        {neighborhoods && (
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-lg p-5 mb-6">
            <p className="text-gray-700 mb-3">{neighborhoods.intro}</p>
            <div className="flex flex-wrap gap-2">
              {neighborhoods.neighborhoods.map((n) => (
                <span key={n} className="bg-white border border-blue-200 rounded-full px-3 py-1 text-sm text-gray-700">{n}</span>
              ))}
            </div>
          </div>
        )}

        {/* Trust stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { stat: 'Same-Day', label: 'Service Available' },
            { stat: 'Licensed', label: 'NJ Exterminators' },
            { stat: '35+', label: 'Towns Covered' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-brand-light rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-primary">{stat}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-white">
            <h2 className="text-xl font-bold mb-1">Need pest control in {townName}?</h2>
            <p className="text-brand-light opacity-90 text-sm">Same-day service available throughout Camden County.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact/"
              className="inline-block bg-brand-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors whitespace-nowrap"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:+1${BRAND.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-bold py-3 px-6 rounded-lg transition-colors hover:bg-gray-100 whitespace-nowrap"
            >
              📞 {BRAND.phoneFormatted}
            </a>
          </div>
        </div>

        {/* Services Grid — linked to service×town pages */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pest Control Services Available in {townName}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {SERVICE_TOWN_ROUTES.map((svc) => (
            <Link
              key={svc.slug}
              href={`/${regionSlug}/${svc.slug}/${townSlug}/`}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <div className="text-2xl mb-2">{svc.icon}</div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{svc.name} in {townName}</h3>
              <p className="text-sm text-blue-600 mt-1">Learn more →</p>
            </Link>
          ))}
        </div>

        {/* Internal links */}
        <div className="bg-gray-50 rounded-lg p-5 mb-10">
          <h3 className="font-bold text-gray-900 mb-3">More Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/pest-control-near-me/" className="text-brand-primary hover:underline">Pest Control Near Me — Camden County</Link></li>
            <li><Link href="/exterminator-near-me/" className="text-brand-primary hover:underline">Exterminator Near Me — Camden County NJ</Link></li>
            <li><Link href="/termite-inspection/" className="text-brand-primary hover:underline">Free Termite Inspection — South Jersey</Link></li>
            <li><Link href="/same-day-pest-control/" className="text-brand-primary hover:underline">Same Day Pest Control — Camden County</Link></li>
          </ul>
        </div>

        {/* Nearby Towns */}
        {nearbyTowns.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-5 mb-10">
            <h3 className="font-bold text-gray-900 mb-3">Also Serving Nearby Towns</h3>
            <div className="flex flex-wrap gap-2">
              {nearbyTowns.map((t) => (
                <Link
                  key={t.slug}
                  href={`/camden-county/${t.slug}/`}
                  className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm text-brand-primary hover:bg-brand-light transition-colors"
                >
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      <CTABanner />
    </>
  );
}
