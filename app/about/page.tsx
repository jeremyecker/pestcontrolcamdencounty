import type { Metadata } from 'next';
import { GEO, SITE_NAME, PHONE, PHONE_HREF } from '@/site.config';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import TrustBar from '@/components/sections/TrustBar';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = generatePageMetadata({
  title: `About Our Camden County Exterminators`,
  description: `${SITE_NAME} is a locally owned pest control company protecting homes and families across ${GEO.region} with licensed, family-friendly treatments. Licensed & insured.`,
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'About Us' }]} />
      <TrustBar />

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 prose-content">
          <h1 className="heading-1 mb-6">Your Neighbors in Pest Control</h1>

          <p className="text-lg text-gray-600 mb-8">
            When you call {SITE_NAME}, you&apos;re reaching a team that actually lives and
            works right here in {GEO.region}. We&apos;re not routing calls through a distant
            headquarters or dispatching strangers to your doorstep — our technicians shop at
            the same stores, sit in the same PATCO traffic, and deal with the same South Jersey
            weather you do. Protecting your home from pests is personal to us because this
            county is our home too.
          </p>

          <h2>What Drives Us</h2>
          <p>
            Nobody should dread walking into their own kitchen or feel uneasy putting their
            kids to bed. Pests steal your comfort, and we got into this line of work to give
            it back. From ant trails across the counter to raccoons scratching overhead at
            3 a.m., we&apos;ve handled every scenario Camden County can throw at a homeowner.
          </p>
          <p>
            Safety shapes every decision we make on the job. We select EPA-approved products
            and apply Integrated Pest Management methods that zero in on the problem without
            creating new risks for your children, pets, or garden. Before we treat a single
            room, we walk you through the plan so there are no surprises.
          </p>
          <p>
            Living in {GEO.countyFull} means dealing with a specific set of challenges. The
            dense, tree-lined streets of Haddonfield and Collingswood harbor carpenter ants
            and termites drawn to century-old woodwork. Along the Delaware River waterfront
            near Pennsauken and Camden, rodent pressure intensifies in cooler months. In the
            eastern stretches around Winslow and Waterford Township, wooded lots attract ticks,
            wildlife, and mosquitoes from nearby wetlands. We tailor our approach to match the
            exact conditions surrounding your property.
          </p>

          <h2>Why Families Choose Us</h2>
          <ul>
            <li>
              <strong>Deep local roots:</strong> Our technicians grew up in towns like Cherry Hill,
              Bellmawr, and Gloucester Township. We recognize the seasonal rhythms here — the
              spring carpenter ant swarms, the July mosquito peak along Cooper River, the fall
              mice migration into garages and crawl spaces. That hands-on familiarity guides
              every treatment.
            </li>
            <li>
              <strong>Safe for the whole household:</strong> Every product we bring into your home
              is vetted for safety around kids and pets. We&apos;ll explain what&apos;s being applied,
              where it goes, and when it&apos;s safe to resume normal activity.
            </li>
            <li>
              <strong>Rapid response times:</strong> Because we&apos;re based in Camden County —
              not a distant warehouse — we frequently offer same-day visits. When you discover
              a wasp nest above the back door, you shouldn&apos;t have to wait until next week.
            </li>
            <li>
              <strong>Transparent, pressure-free pricing:</strong> We quote a clear price before
              starting any work. Every inspection is free, every estimate is honest, and there
              are never hidden add-ons after the fact.
            </li>
            <li>
              <strong>Guaranteed results:</strong> If pests reappear between scheduled treatments,
              we return and re-treat at no extra charge. One phone call is all it takes to get
              us back on your doorstep.
            </li>
            <li>
              <strong>Low-profile service:</strong> We understand that pest problems can feel
              uncomfortable to share. Our trucks are unmarked and our technicians are discreet —
              your privacy is always respected.
            </li>
          </ul>

          <h2>Serving Your Community</h2>
          <p>
            Our routes span every corner of {GEO.countyFull}. We regularly serve homeowners in
            Cherry Hill, Voorhees, Haddonfield, Collingswood, Pennsauken, Gloucester Township,
            Winslow Township, Lindenwold, Bellmawr, Audubon, Barrington, Somerdale, Runnemede,
            Clementon, Sicklerville, Blackwood, Stratford, and beyond.
          </p>
          <p>
            From the walkable borough streets along the PATCO Speedline corridor to the
            spacious lots out toward Atco and Waterford Township, we adapt our methods to
            fit every property type. A rowhouse in Gloucester City has very different entry
            points than a colonial on a half-acre in Voorhees — and we plan accordingly.
            Because we&apos;re already driving these roads daily, response times stay short
            no matter where you are in the county.
          </p>

          <h2>Let Us Help</h2>
          <p>
            If something is crawling, buzzing, or gnawing where it shouldn&apos;t be, pick up
            the phone and dial <a href={PHONE_HREF} className="font-bold">{PHONE}</a>.
            We&apos;ll talk through what you&apos;re seeing, answer every question, and set up
            a free estimate at a time that works for you. No hard sell, no gimmicks — just
            straightforward help from a team that genuinely cares about this community.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to Protect Your Home?"
        subtitle="Talk to a local expert who understands your community. Free estimates, honest advice."
      />
    </>
  );
}
