import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { posts } from '@/content/blog';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description:
    'Practical guidance for the parts of academic work research-methods courses rarely cover — literature reviews, citations, publishing, data, writing and doctoral life.',
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Resources & insights"
        title="From the Research Bridge Blog"
        lead="Practical guidance for the parts of academic work research-methods courses rarely cover."
        image="/images/blog/systematic-review.jpg"
        imageAlt="Library shelving in soft focus"
        crumbs={[{ href: '/blog', label: 'Blog' }]}
      />

      {/* Lead article */}
      <Section size="md">
        <div className="container-rb">
          <Reveal>
            <Link
              href={`/blog/${lead.slug}`}
              className="group grid gap-8 overflow-hidden rounded-2xl border border-paper-300 bg-paper-50 transition-[border-color,box-shadow] duration-500 hover:border-brand-200 hover:shadow-[0_36px_70px_-40px_rgba(11,18,38,0.4)] lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
                <Image
                  src={lead.image}
                  alt={lead.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 text-2xs uppercase tracking-[0.16em]">
                  <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
                    Latest
                  </span>
                  <span className="text-ink-400">{lead.category}</span>
                  <span className="text-ink-300">·</span>
                  <span className="text-ink-400">{lead.readingTime}</span>
                </div>

                <h2 className="mt-6 font-display text-[clamp(1.6rem,1.15rem+1.8vw,2.4rem)] leading-[1.15] text-ink-900 transition-colors duration-300 group-hover:text-brand-700">
                  {lead.title}
                </h2>
                <p className="mt-5 text-[1rem] leading-[1.8] text-ink-500">{lead.excerpt}</p>

                <span className="mt-8 inline-flex items-center gap-2 text-[0.88rem] font-medium text-brand-600">
                  Read the article
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Grid */}
      <Section size="md">
        <div className="container-rb">
          <SectionHeading eyebrow="All articles" title="Twelve more, by topic" />

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {rest.map((post) => (
              <RevealItem key={post.slug} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-paper-300 bg-paper-50 transition-[border-color,box-shadow] duration-500 hover:border-brand-200 hover:shadow-[0_28px_60px_-36px_rgba(11,18,38,0.35)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-paper-50/90 px-3 py-1 text-2xs font-semibold uppercase tracking-[0.14em] text-ink-600 backdrop-blur">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-[1.22rem] leading-snug text-ink-900 transition-colors duration-300 group-hover:text-brand-700">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.92rem] leading-[1.75] text-ink-500">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-paper-200 pt-4 text-2xs uppercase tracking-[0.14em] text-ink-400">
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <CtaBand
        title="Have a question these don’t answer?"
        body="Most engagements start with exactly the kind of question these articles raise. Tell us where you’re stuck, and we’ll tell you how we can help."
      />
    </>
  );
}
