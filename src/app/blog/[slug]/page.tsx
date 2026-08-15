import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

import { Section, SectionHeading, Eyebrow } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { Markdown } from '@/components/ui/markdown';
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress';
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';
import { getPost, posts } from '@/content/blog';
import { site } from '@/content/site';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default async function ArticlePage({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? posts[idx - 1] : null;
  const next = idx < posts.length - 1 ? posts[idx + 1] : null;
  const related = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .concat(posts.filter((p) => p.slug !== slug && p.category !== post.category))
    .slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${site.url}${post.image}`,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ScrollProgress className="fixed inset-x-0 top-0 z-[55] h-0.5 bg-brand-500" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 pb-16 pt-[calc(var(--header-h)+3rem)] text-paper-100 md:pb-24">
        <Image
          src={post.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/93 to-ink-950" />
        <ProgressiveBlur
          className="pointer-events-none absolute inset-x-0 bottom-0 h-36"
          direction="bottom"
          blurIntensity={0.5}
        />
        <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-40" />

        <div className="container-rb relative">
          <Reveal blur={false} y={8}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-[0.82rem] text-ink-300 transition-colors hover:text-paper-50"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              All articles
            </Link>
          </Reveal>

          <div className="mt-9 max-w-3xl">
            <Reveal blur={false} y={10}>
              <div className="flex flex-wrap items-center gap-3 text-2xs uppercase tracking-[0.16em]">
                <span className="rounded-full bg-brand-500/15 px-3 py-1 font-semibold text-brand-300">
                  {post.category}
                </span>
                <span className="text-ink-400">{formatDate(post.date)}</span>
                <span className="text-ink-500">·</span>
                <span className="text-ink-400">{post.readingTime}</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-7 font-display text-[clamp(2rem,1.25rem+2.9vw,3.5rem)] leading-[1.08] text-paper-50">
                {post.title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 text-[1.08rem] leading-[1.8] text-ink-200">{post.excerpt}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Body */}
      <Section size="lg">
        <div className="container-rb">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
            <article className="max-w-[44rem]">
              <Reveal>
                <div className="relative mb-14 aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 92vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <Markdown source={post.body} />
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-16 rounded-2xl border border-brand-200 bg-brand-50 p-8">
                  <Eyebrow tone="brand">Need this done, not just understood?</Eyebrow>
                  <p className="mt-5 font-display text-[1.3rem] leading-snug text-brand-900">
                    We do this work every week — for MPhil and PhD candidates, faculty, and
                    whole departments.
                  </p>
                  <ButtonLink href="/contact" arrow className="mt-7">
                    Start a conversation
                  </ButtonLink>
                </div>
              </Reveal>

              {/* prev / next */}
              <nav className="mt-14 grid gap-4 border-t border-paper-300 pt-8 sm:grid-cols-2">
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group rounded-2xl border border-paper-300 bg-paper-50 p-6 transition-colors hover:border-brand-200"
                  >
                    <span className="flex items-center gap-2 text-2xs uppercase tracking-[0.16em] text-ink-400">
                      <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                      Previous
                    </span>
                    <span className="mt-3 block font-display text-[1.05rem] leading-snug text-ink-900 transition-colors group-hover:text-brand-700">
                      {prev.title}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group rounded-2xl border border-paper-300 bg-paper-50 p-6 text-right transition-colors hover:border-brand-200"
                  >
                    <span className="flex items-center justify-end gap-2 text-2xs uppercase tracking-[0.16em] text-ink-400">
                      Next
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="mt-3 block font-display text-[1.05rem] leading-snug text-ink-900 transition-colors group-hover:text-brand-700">
                      {next.title}
                    </span>
                  </Link>
                )}
              </nav>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-paper-300 bg-paper-50 p-7">
                  <h2 className="text-2xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                    Keep reading
                  </h2>
                  <ul className="mt-6 space-y-5">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={`/blog/${r.slug}`} className="group block">
                          <span className="text-2xs uppercase tracking-[0.14em] text-brand-600">
                            {r.category}
                          </span>
                          <span className="mt-1.5 block font-display text-[1rem] leading-snug text-ink-800 transition-colors group-hover:text-brand-700">
                            {r.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/blog"
                    className="group mt-7 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-brand-600"
                  >
                    All articles
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-5 rounded-2xl bg-ink-950 p-7 text-paper-100">
                  <p className="font-display text-[1.15rem] leading-snug text-paper-50">
                    Support at every stage, from proposal to publication.
                  </p>
                  <ButtonLink href="/services" variant="ghostLight" size="sm" arrow className="mt-6">
                    Our services
                  </ButtonLink>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </Section>

      <Section tone="paper-2" size="md">
        <div className="container-rb">
          <SectionHeading eyebrow="More from the blog" title="Related reading" />
          <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <RevealItem key={r.slug} className="h-full">
                <Link
                  href={`/blog/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-paper-300 bg-paper-50 transition-[border-color,box-shadow] duration-500 hover:border-brand-200 hover:shadow-[0_28px_60px_-36px_rgba(11,18,38,0.35)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      fill
                      sizes="(min-width: 768px) 30vw, 92vw"
                      className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="text-2xs uppercase tracking-[0.14em] text-brand-600">
                      {r.category}
                    </span>
                    <h3 className="mt-3 font-display text-[1.15rem] leading-snug text-ink-900 transition-colors group-hover:text-brand-700">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
