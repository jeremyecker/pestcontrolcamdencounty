import type { Metadata } from 'next';
import { GEO, SITE_NAME } from '@/site.config';
import { generatePageMetadata, localBusinessSchema } from '@/lib/seo';
import Schema from '@/components/seo/Schema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import ReviewsSection from '@/components/sections/ReviewsSection';
import CTABanner from '@/components/sections/CTABanner';
import TrustBar from '@/components/sections/TrustBar';

export const metadata: Metadata = generatePageMetadata({
  title: `Customer Reviews`,
  description: `Read real reviews from homeowners across ${GEO.region}. See why families trust ${SITE_NAME} for licensed, reliable pest control.`,
  path: '/reviews',
});

export default function ReviewsPage() {
  return (
    <>
      <Schema data={localBusinessSchema()} />
      <Breadcrumbs items={[{ label: 'Reviews' }]} />
      <h1 className="sr-only">Real Reviews from {GEO.region} Homeowners</h1>
      <TrustBar />
      <ReviewsSection limit={6} title={`Real Reviews from ${GEO.region} Homeowners`} />
      <CTABanner />
    </>
  );
}
