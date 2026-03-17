import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BRAND, REGIONS } from '@/hub.config';
import CTABanner from '@/components/sections/CTABanner';

const SERVICE_NAME = 'Bee Removal';
const SERVICE_SLUG = 'bee-removal';
const SERVICE_DESC = 'Safe bee, wasp & hornet nest removal';

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  if (region !== 'camden-county') return {};
  return {
    title: { absolute: `${SERVICE_NAME} in Camden County, NJ | ${BRAND.name}` },
    description: `Professional ${SERVICE_NAME.toLowerCase()} serving all 35 Camden County communities. ${SERVICE_DESC}. Licensed NJ exterminators. Call ${BRAND.phoneFormatted}.`,
    openGraph: {
      title: `${SERVICE_NAME} — Camden County, NJ`,
      description: `Licensed ${SERVICE_NAME.toLowerCase()} serving Cherry Hill, Voorhees, Haddonfield & all of Camden County.`,
    },
  };
}

export async function generateStaticParams() {
  return [{ region: 'camden-county' }];
}

export default async function ServiceIndexPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const regionData = REGIONS.find(r => r.slug === region);
  if (!regionData) notFound();

  const towns = regionData.towns.map((t: string) => ({
    name: t,
    slug: t.toLowerCase().replace(/\s+/g, '-'),
  }));

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${SERVICE_NAME} — Camden County, NJ`,
    provider: {
      '@type': 'LocalBusiness',
      name: BRAND.name,
      telephone: BRAND.phoneFormatted,
      url: `https://${BRAND.domain}`,
    },
    areaServed: towns.map((t: { name: string }) => ({
      '@type': 'City',
      name: t.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Camden County, NJ' },
    })),
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
          <span className="text-gray-900">{SERVICE_NAME}</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {SERVICE_NAME} in Camden County, NJ
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Professional {SERVICE_NAME.toLowerCase()} serving all 35 Camden County communities.
          {SERVICE_DESC}. Licensed NJ exterminators with same-day availability.
        </p>

        <div className="bg-brand-primary rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-white">
            <h2 className="text-xl font-bold mb-1">Need {SERVICE_NAME.toLowerCase()}?</h2>
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

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {SERVICE_NAME} by Town
        </h2>
        <p className="text-gray-600 mb-6">
          Select your town below for local {SERVICE_NAME.toLowerCase()} information, service details, and nearby coverage areas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {towns.map((town: { name: string; slug: string }) => (
            <Link
              key={town.slug}
              href={`/camden-county/${SERVICE_SLUG}/${town.slug}/`}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition-all group text-center"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                {town.name}
              </h3>
              <p className="text-xs text-blue-600 mt-1">View details →</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-5 mb-10">
          <h3 className="font-bold text-gray-900 mb-3">Related Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/pest-control-near-me/" className="text-brand-primary hover:underline">Pest Control Near Me — Camden County</Link></li>
            <li><Link href="/exterminator-near-me/" className="text-brand-primary hover:underline">Exterminator Near Me — Camden County NJ</Link></li>
            <li><Link href="/camden-county/service-areas/" className="text-brand-primary hover:underline">All Service Areas — Camden County</Link></li>
          </ul>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
