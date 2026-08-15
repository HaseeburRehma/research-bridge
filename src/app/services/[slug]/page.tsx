import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, PackageCheck, Users } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading, Eyebrow } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { engagementSteps, getService, services } from '@/content/services';
import { faqs } from '@/content/general';
import { FaqAccordion } from '@/components/site/faq-accordion';
import { site } from '@/content/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/services/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.promise} ${service.intro}`.slice(0, 180),
    openGraph: {
      title: `${service.title} — ${site.name}`,
      description: service.promise,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps<'/services/[slug]'>) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const idx = services.findIndex((s) => s.slug === slug);
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  const serviceFaqSlugs = new Set([
    'Do you write the research for me?',
    'Is my data kept confidential?',
    'Can you help with a project that’s already underway?',
    'How long does an engagement take?',
    'How are projects matched to team members?',
  ]);
  const serviceFaqs = faqs.filter((f) => serviceFaqSlugs.has(f.q));

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.index} of 6`}
        title={service.title}
        lead={service.promise}
        image={service.image}
        imageAlt={service.imageAlt}
        crumbs={[
          { href: '/services', label: 'Services' },
          { href: `/services/${service.slug}`, label: service.short },
        ]}
      >
        <ButtonLink href="/contact" size="lg" arrow>
          Discuss this service
        </ButtonLink>
      </PageHero>

      <Section size="lg">
        <div className="container-rb">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="font-display text-[clamp(1.35rem,1rem+1.3vw,1.85rem)] leading-[1.4] text-ink-900">
                  {service.intro}
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-12">
                  <Eyebrow tone="brand">What&rsquo;s included</Eyebrow>
                  <ul className="mt-7 divide-y divide-paper-300 border-y border-paper-300">
                    {service.included.map((item) => (
                      <li key={item} className="flex items-start gap-4 py-5">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                          <Check className="size-3.5" />
                        </span>
                        <span className="text-[1rem] leading-[1.7] text-ink-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {service.pullQuote && (
                <Reveal delay={0.18}>
                  <blockquote className="mt-12 rounded-2xl bg-ink-950 p-8 md:p-10">
                    <p className="font-display text-[1.35rem] italic leading-snug text-paper-50 md:text-[1.55rem]">
                      &ldquo;{service.pullQuote}&rdquo;
                    </p>
                  </blockquote>
                </Reveal>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-paper-300 bg-paper-50 p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Users className="size-4.5" />
                    </span>
                    <h2 className="text-2xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                      Who this is for
                    </h2>
                  </div>
                  <p className="mt-5 text-[0.95rem] leading-[1.75] text-ink-600">
                    {service.forWho}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-5 rounded-2xl border border-paper-300 bg-paper-200 p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-paper-50 text-brand-600">
                      <PackageCheck className="size-4.5" />
                    </span>
                    <h2 className="text-2xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                      Typical deliverables
                    </h2>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 text-[0.92rem] leading-snug text-ink-600">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-400" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-5 rounded-2xl bg-ink-950 p-7 text-paper-100">
                  <p className="text-[0.95rem] leading-[1.7] text-ink-200">
                    Every quote starts with a conversation, not a form. We scope to your
                    actual need.
                  </p>
                  <ButtonLink href="/contact" size="sm" arrow className="mt-6 w-full">
                    Start a conversation
                  </ButtonLink>
                  <a
                    href={site.phoneHref}
                    className="mt-3 block text-center text-[0.85rem] text-ink-300 transition-colors hover:text-paper-50"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section tone="paper-2" size="lg">
        <div className="container-rb">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps, from first message to final delivery"
            align="center"
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((step) => (
              <RevealItem key={step.n}>
                <div className="h-full rounded-2xl border border-paper-300 bg-paper-50 p-7">
                  <span className="font-display text-[2rem] leading-none text-brand-500/30">
                    {step.n}
                  </span>
                  <h3 className="mt-5 font-display text-[1.15rem] leading-snug text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.88rem] leading-[1.7] text-ink-500">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* FAQ */}
      <Section size="lg">
        <div className="container-rb">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="Questions" title="Before you get in touch" />
              <Reveal delay={0.2}>
                <ButtonLink href="/faq" variant="outline" arrow className="mt-8">
                  All questions
                </ButtonLink>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <FaqAccordion items={serviceFaqs} />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Related + prev/next */}
      <Section tone="paper-2" size="lg">
        <div className="container-rb">
          <SectionHeading eyebrow="Explore further" title="Other ways we support researchers" />

          <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <RevealItem key={r.slug} className="h-full">
                <Link
                  href={`/services/${r.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-paper-300 bg-paper-50 p-7 transition-[border-color,box-shadow] duration-500 hover:border-brand-200 hover:shadow-[0_24px_50px_-32px_rgba(11,18,38,0.35)]"
                >
                  <span className="font-display text-[1.6rem] leading-none text-brand-500/25">
                    {String(r.index).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-display text-[1.2rem] leading-snug text-ink-900 transition-colors group-hover:text-brand-700">
                    {r.short}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9rem] leading-[1.7] text-ink-500">
                    {r.promise}
                  </p>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2}>
            <nav className="mt-12 flex flex-col gap-4 border-t border-paper-300 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={`/services/${prev.slug}`}
                className="group flex items-center gap-3 text-[0.9rem] text-ink-500 transition-colors hover:text-brand-700"
              >
                <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>
                  <span className="block text-2xs uppercase tracking-[0.16em] text-ink-400">
                    Previous
                  </span>
                  {prev.short}
                </span>
              </Link>
              <Link
                href={`/services/${next.slug}`}
                className="group flex items-center gap-3 text-right text-[0.9rem] text-ink-500 transition-colors hover:text-brand-700 sm:text-left"
              >
                <span className="sm:text-right">
                  <span className="block text-2xs uppercase tracking-[0.16em] text-ink-400">
                    Next
                  </span>
                  {next.short}
                </span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </nav>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
