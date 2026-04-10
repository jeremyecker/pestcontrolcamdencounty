import { SITE_NAME, GEO, SERVICES, PHONE, PHONE_HREF, GMB, SITE_URL } from '@/site.config';
import { REGIONS } from '@/hub.config';
import { localBusinessSchema } from '@/lib/seo';
import { getTownCount, getTownsByRegion } from '@/lib/db';
import Schema from '@/components/seo/Schema';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import SeasonalAlert from '@/components/sections/SeasonalAlert';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ReviewsSection from '@/components/sections/ReviewsSection';
import TownGrid from '@/components/sections/TownGrid';
import CTABanner from '@/components/sections/CTABanner';
import FAQSection from '@/components/sections/FAQSection';
import NewYorkNetwork from '@/components/sections/NewYorkNetwork';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
};

const townCount = getTownCount();

const homepageFAQs = [
  {
    question: 'Do your treatments pose any risk to children or pets?',
    answer: `Not at all. We rely on EPA-approved formulations and Integrated Pest Management strategies designed to target pests while remaining safe around kids, dogs, cats, and other household members.`,
  },
  {
    question: `Which neighborhoods and towns in ${GEO.region} do you service?`,
    answer: `Our technicians cover every community in the county — from Cherry Hill and Voorhees down to Gloucester Township and Winslow. If you live in ${GEO.region}, we can be at your door quickly.`,
  },
  {
    question: 'I spotted something today — can you come out right away?',
    answer: `We understand that finding pests feels urgent. That's why we maintain same-day availability for ${GEO.region} homeowners. Reach out by phone or through the online form to grab the next open slot.`,
  },
  {
    question: 'Why are termites such a big concern in Camden County specifically?',
    answer: `Many homes in towns like Haddonfield, Collingswood, and Audubon were built before modern termite barriers existed. The mix of older wood framing and South Jersey humidity creates ideal conditions for subterranean termites. We recommend annual inspections for any home over 30 years old.`,
  },
  {
    question: 'What happens if pests show up again between visits?',
    answer: `Our satisfaction guarantee means we come back at zero additional charge. Just give us a call and we'll schedule a follow-up visit — no questions asked.`,
  },
  {
    question: 'Are you a locally owned business or part of a franchise?',
    answer: `${SITE_NAME} is independently owned and rooted right here in South Jersey. Our crew members live in neighborhoods across Camden County, so we bring firsthand knowledge of local pest patterns to every job.`,
  },
];

// Show 5 towns from each region for a balanced homepage display
const mixedTowns = REGIONS.flatMap(r => getTownsByRegion(r.slug).slice(0, 5));

export default function HomePage() {
  return (
    <>
      <Schema data={localBusinessSchema()} />
      <Hero />
      <TrustBar />
      <SeasonalAlert county="Camden County" />
      <ServicesGrid limit={6} />
      <ReviewsSection limit={3} />
      <TownGrid towns={mixedTowns} />
      <FAQSection faqs={homepageFAQs} />
      <NewYorkNetwork />
      <CTABanner />
    </>
  );
}
