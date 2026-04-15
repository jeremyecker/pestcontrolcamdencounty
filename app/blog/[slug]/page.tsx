import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SITE_NAME, PHONE, PHONE_HREF } from '@/site.config';
import { generatePageMetadata, articleSchema } from '@/lib/seo';
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blog-posts';
import Schema from '@/components/seo/Schema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import CTABanner from '@/components/sections/CTABanner';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = getAllBlogPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Schema
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          date: post.date,
          author: 'Camden County Pest Control Team',
        })}
      />
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Post Header */}
              <header className="mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <span className="bg-brand-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h1 className="heading-1 mb-4">{post.title}</h1>
                <p className="text-lg text-gray-600">{post.excerpt}</p>
              </header>

              {/* Post Content */}
              <div
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-brand-light rounded-xl p-6">
                <h3 className="font-bold text-lg text-brand-dark mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Dealing with a pest problem? We&apos;re here to help.
                </p>
                <a
                  href={PHONE_HREF}
                  className="block w-full text-center bg-brand-accent text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  📞 Call {PHONE}
                </a>
              </div>

              {otherPosts.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-brand-dark mb-4">More Articles</h3>
                  <ul className="space-y-3">
                    {otherPosts.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="text-sm text-gray-700 hover:text-brand-primary transition-colors leading-snug block"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
