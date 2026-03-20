import type { Metadata } from 'next';
import { GEO, SITE_NAME, PHONE, PHONE_HREF } from '@/site.config';
import { generatePageMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import TrustBar from '@/components/sections/TrustBar';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = generatePageMetadata({
  title: `About Us — Your Local Pest Control Experts`,
  description: `${SITE_NAME} is locally owned and operated, protecting homes and families across Camden County, NJ with effective, family-friendly pest control solutions.`,
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
            {SITE_NAME} is a locally owned pest control company right here in {GEO.region}.
            We&apos;re not a national chain and we&apos;re not a call center — we&apos;re your
            neighbors. Our technicians live in the same communities we serve, and we treat your
            home the way we&apos;d treat our own. That&apos;s why families across {GEO.countyFull} trust
            us to keep their homes protected and pest-free.
          </p>

          <h2>What Drives Us</h2>
          <p>
            We got into this business because we believe families shouldn&apos;t have to worry
            about pests in their own homes. Your kitchen should be for cooking — not for ants.
            Your backyard should be for barbecues and playing with the kids — not mosquitoes.
            Your basement should be storage — not a mouse highway.
          </p>
          <p>
            Every treatment we use is chosen with your family in mind. We know you have kids
            running around, dogs and cats who get into everything, and a home you&apos;ve worked
            hard for. That&apos;s why we use EPA-approved products and Integrated Pest Management
            techniques — effective against pests, gentle for your family.
          </p>
          <p>
            South Jersey homes face unique pest challenges. The humid summers bring mosquitoes
            and carpenter ants. The older homes in Haddonfield and Collingswood can attract
            termites. The wooded areas near Winslow and Clementon mean wildlife encounters are
            common. We understand these patterns because we deal with them every single day.
          </p>

          <h2>Why Families Choose Us</h2>
          <ul>
            <li>
              <strong>We&apos;re local — really local:</strong> We live and work in {GEO.region}.
              We know the pest patterns here — the spring ant invasions, the summer
              mosquito season, the fall rodent migrations. This isn&apos;t textbook knowledge;
              it&apos;s what we see every day in your neighbors&apos; homes.
            </li>
            <li>
              <strong>Friendly for kids and pets:</strong> Every product and method we use is selected
              with your family&apos;s well-being as the top priority. We&apos;ll thoroughly explain exactly
              what we&apos;re using and why.
            </li>
            <li>
              <strong>Fast when you need us:</strong> We pride ourselves on quick turnaround,
              and we offer same-day service availability when pests can&apos;t wait. Because when you find mice
              in the pantry, tomorrow feels like forever.
            </li>
            <li>
              <strong>Honest pricing, no surprises:</strong> We provide clear, upfront estimates
              before any work begins. Free estimates for all homes. No hidden fees, no pressure.
            </li>
            <li>
              <strong>We stand behind our work:</strong> If you ever have a concern, give us a call
              and a manager will follow up to make things right. Your satisfaction is our
              priority — that&apos;s how we keep earning your trust.
            </li>
            <li>
              <strong>Discreet service:</strong> We know pest issues can feel embarrassing.
              Our vehicles and technicians are professional and discreet — your neighbors
              won&apos;t know why we&apos;re there unless you tell them.
            </li>
          </ul>

          <h2>Serving Your Community</h2>
          <p>
            We proudly serve every town across {GEO.countyFull}, including Cherry Hill, Voorhees,
            Haddonfield, Collingswood, Pennsauken, Gloucester Township, Marlton, Mount Laurel,
            Winslow Township, Lindenwold, Bellmawr, Audubon, Barrington, Somerdale, Runnemede,
            and Clementon.
          </p>
          <p>
            Whether you&apos;re in a historic home near downtown Haddonfield, a newer development
            in Voorhees, or a family neighborhood in Cherry Hill — we know your area and we
            know the pests that come with it. Our response times across the county are fast
            because we&apos;re already here.
          </p>

          <h2>Let Us Help</h2>
          <p>
            Whether you&apos;ve spotted something concerning or just want peace of mind, give us a
            call at <a href={PHONE_HREF} className="font-bold">{PHONE}</a>. We&apos;ll listen,
            answer your questions, and schedule a free estimate if needed. No pressure,
            no obligation — just honest advice from your neighbors in pest control.
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
