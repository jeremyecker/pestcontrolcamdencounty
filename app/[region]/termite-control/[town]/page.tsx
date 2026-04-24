import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';
import { TOWN_OPENERS } from '@/data/town-openers';
import { CITY_LAYER7 } from '@/data/layer7-data';

const SERVICE_NAME = 'Termite Control';
const SERVICE_SLUG = 'termite-control';
const SERVICE_DESC = 'Liquid barrier, bait systems & annual inspections';

const TOWNS = [
  { name: 'Cherry Hill', slug: 'cherry-hill' },
  { name: 'Voorhees', slug: 'voorhees' },
  { name: 'Haddonfield', slug: 'haddonfield' },
  { name: 'Collingswood', slug: 'collingswood' },
  { name: 'Pennsauken', slug: 'pennsauken' },
  { name: 'Gloucester Township', slug: 'gloucester-township' },
  { name: 'Winslow Township', slug: 'winslow-township' },
  { name: 'Lindenwold', slug: 'lindenwold' },
  { name: 'Bellmawr', slug: 'bellmawr' },
  { name: 'Audubon', slug: 'audubon' },
  { name: 'Barrington', slug: 'barrington' },
  { name: 'Somerdale', slug: 'somerdale' },
  { name: 'Runnemede', slug: 'runnemede' },
  { name: 'Clementon', slug: 'clementon' },
  { name: 'Marlton', slug: 'marlton' },
  { name: 'Mount Laurel', slug: 'mount-laurel' },
  { name: 'Berlin', slug: 'berlin' },
  { name: 'Stratford', slug: 'stratford' },
  { name: 'Pine Hill', slug: 'pine-hill' },
  { name: 'Magnolia', slug: 'magnolia' },
  { name: 'Merchantville', slug: 'merchantville' },
  { name: 'Oaklyn', slug: 'oaklyn' },
  { name: 'Haddon Heights', slug: 'haddon-heights' },
  { name: 'Haddon Township', slug: 'haddon-township' },
  { name: 'Mount Ephraim', slug: 'mount-ephraim' },
  { name: 'Lawnside', slug: 'lawnside' },
  { name: 'Laurel Springs', slug: 'laurel-springs' },
  { name: 'Gibbsboro', slug: 'gibbsboro' },
  { name: 'Waterford Township', slug: 'waterford-township' },
  { name: 'Brooklawn', slug: 'brooklawn' },
  { name: 'Gloucester City', slug: 'gloucester-city' },
  { name: 'Camden', slug: 'camden' },
  { name: 'Hi-Nella', slug: 'hi-nella' },
  { name: 'Chesilhurst', slug: 'chesilhurst' },
  { name: 'Atco', slug: 'atco' },
  { name: 'Blackwood', slug: 'blackwood' },
  { name: 'Chews Landing', slug: 'chews-landing' },
  { name: 'Echelon', slug: 'echelon' },
  { name: 'Erial', slug: 'erial' },
  { name: 'Glendora', slug: 'glendora' }
];

export async function generateMetadata({ params }: { params: Promise<{ region: string; town: string }> }): Promise<Metadata> {
  const { town: townSlug } = await params;
  const town = TOWNS.find(t => t.slug === townSlug);
  if (!town) return {};
  return {
    title: { absolute: `${SERVICE_NAME} in ${town.name}, NJ | Camden County Pest Control` },
    description: `Professional ${SERVICE_NAME.toLowerCase()} in ${town.name}, NJ. ${SERVICE_DESC}. Licensed NJ exterminators. Call ${BRAND.phoneFormatted}.`,
    openGraph: {
      title: `${SERVICE_NAME} in ${town.name}, NJ`,
      description: `Licensed ${SERVICE_NAME.toLowerCase()} serving ${town.name} and all of Camden County, NJ.`,
      url: `https://pestcontrolcamdencounty.com/camden-county/${SERVICE_SLUG}/${town.slug}/`,
      type: 'website',
      siteName: 'Camden County Pest Control',
      images: [{ url: 'https://pestcontrolcamdencounty.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Camden County NJ pest control' }],
      locale: 'en_US',
    },
  };
}

export async function generateStaticParams() {
  return TOWNS.map(t => ({ region: 'camden-county', town: t.slug }));
}

export default async function ServiceTownPage({ params }: { params: Promise<{ region: string; town: string }> }) {
  const { town: townSlug } = await params;
  const town = TOWNS.find(t => t.slug === townSlug);
  if (!town) notFound();

  const layer7 = CITY_LAYER7[townSlug];
  const nearbyTowns = layer7?.nearby || [];
  const neighborhoods = layer7?.neighborhoods;
  const opener = TOWN_OPENERS[townSlug];

  const faqs = layer7?.faqs || [
    {
      q: `How quickly can you respond for ${SERVICE_NAME.toLowerCase()} in ${town.name}?`,
      a: `We offer same-day and next-morning service throughout Camden County including ${town.name}. Call before noon for same-day availability.`,
    },
    {
      q: `Are your ${SERVICE_NAME.toLowerCase()} treatments safe for my family?`,
      a: `Yes. We use EPA-registered products applied by licensed NJ exterminators. Most treatments have a re-entry period of 1-4 hours.`,
    },
    {
      q: `Do you offer a warranty on ${SERVICE_NAME.toLowerCase()} in ${town.name}?`,
      a: `We offer a 30-day re-service guarantee on most pest treatments. Ask about our protection plans for ongoing coverage.`,
    },
    {
      q: `What areas of ${town.name} do you serve?`,
      a: `We serve all neighborhoods and sections of ${town.name} and the surrounding Camden County area. Call us to confirm coverage for your specific address.`,
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.name,
    telephone: PHONE,
    url: `https://${BRAND.domain}`,
    areaServed: {
      '@type': 'City',
      name: town.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Camden County, NJ',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${SERVICE_NAME} in ${town.name}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: SERVICE_NAME },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/camden-county/" className="hover:text-brand-primary">Camden County</Link>
          {' → '}
          <Link href={`/camden-county/${SERVICE_SLUG}/`} className="hover:text-brand-primary">{SERVICE_NAME}</Link>
          {' → '}
          <span className="text-gray-900">{town.name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {SERVICE_NAME} in {town.name}, NJ
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {opener || `Licensed ${SERVICE_NAME.toLowerCase()} serving ${town.name} and all of Camden County. Our NJ-licensed exterminators deliver same-day service with family-friendly treatments.`}
        </p>

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

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { stat: 'Same-Day', label: 'Service Available' },
            { stat: 'Licensed', label: 'NJ Exterminators' },
            { stat: '30-Day', label: 'Re-Service Guarantee' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-brand-light rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-primary">{stat}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        <div className="bg-brand-primary rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-white">
            <h2 className="text-xl font-bold mb-1">Need {SERVICE_NAME.toLowerCase()} in {town.name}?</h2>
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
              📞 {PHONE}
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our {SERVICE_NAME} Service in {town.name}</h2>
        <p className="text-gray-600 mb-8">{SERVICE_DESC}. Our licensed Camden County exterminators use proven methods tailored to the specific pest pressures found in {town.name}, NJ.</p>

        <div className="bg-gray-50 rounded-lg p-5 mb-10">
          <h3 className="font-bold text-gray-900 mb-3">Related Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/pest-control-near-me/" className="text-brand-primary hover:underline">Pest Control Near Me — Camden County</Link></li>
            <li><Link href="/exterminator-near-me/" className="text-brand-primary hover:underline">Exterminator Near Me — Camden County NJ</Link></li>
            <li><Link href={`/camden-county/${townSlug}/`} className="text-brand-primary hover:underline">General Pest Control in {town.name}</Link></li>
            <li><Link href="/termite-inspection/" className="text-brand-primary hover:underline">Free Termite Inspection — South Jersey</Link></li>
          </ul>
        </div>

        {nearbyTowns.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-5 mb-10">
            <h3 className="font-bold text-gray-900 mb-3">Also Serving Nearby Towns</h3>
            <div className="flex flex-wrap gap-2">
              {nearbyTowns.map((t) => (
                <Link
                  key={t.slug}
                  href={`/camden-county/${SERVICE_SLUG}/${t.slug}/`}
                  className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm text-brand-primary hover:bg-brand-light transition-colors"
                >
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
        )}

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
