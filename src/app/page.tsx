import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpenCheck,
  Compass,
  Layers,
  Lock,
  ScrollText,
  ShieldCheck,
} from 'lucide-react';

import { Hero } from '@/components/site/hero';
import { ServiceCard } from '@/components/site/service-card';
import { FaqAccordion } from '@/components/site/faq-accordion';
import { CtaBand } from '@/components/ui/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { Section, SectionHeading, Eyebrow } from '@/components/ui/section';
import { Stat } from '@/components/ui/stat';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { BorderTrail } from '@/components/motion-primitives/border-trail';

import { services } from '@/content/services';
import { disciplineGroups, faqs, processSteps, testimonials } from '@/content/general';

const marqueeFields = disciplineGroups.flatMap((g) => g.fields);

const whyUs = [
  {
    icon: ShieldCheck,
    title: 'Quality you can defend',
    body: 'Every deliverable is held to the standard it will actually be judged by — a committee, a reviewer, an examiner.',
  },
  {
    icon: Layers,
    title: 'Support across the full arc',
    body: 'From first literature search to final published article, so you are never coordinating disconnected vendors.',
  },
  {
    icon: Lock,
    title: 'Confidentiality as standard',
    body: 'Your research, data, and drafts stay strictly private — a non-negotiable term of every engagement.',
  },
];

export default function HomePage() {
  const topFaqs = faqs.filter((f) => 'top' in f && f.top);

  return (
    <>
      <Hero />

      {/* ── Disciplines marquee ─────────────────────────────── */}
      <div className="border-y border-paper-300 bg-paper-200/70 py-5">
        <InfiniteSlider gap={0} speed={26} speedOnHover={10} className="mask-fade-x">
          {marqueeFields.map((field) => (
            <span
              key={field}
              className="flex items-center gap-8 whitespace-nowrap px-4 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-ink-400"
            >
              {field}
              <span className="size-1 rounded-full bg-brand-400" />
            </span>
          ))}
        </InfiniteSlider>
      </div>

      {/* ── What we do ───────────────────────────────────────── */}
      <Section id="what-we-do" size="lg">
        <div className="container-rb">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="Six services, each available alone or as one end-to-end package"
              lead="Research rarely fails because the idea was weak — it stalls over logistics. We carry the structural and technical weight so you can focus on the argument."
              className="max-w-3xl"
            />
            <Reveal delay={0.2}>
              <ButtonLink href="/services" variant="outline" arrow className="shrink-0">
                All services
              </ButtonLink>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <RevealItem key={service.slug} className="h-full">
                <ServiceCard service={service} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ── Trust band ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 md:py-28">
        <Image
          src="/images/library-stacks.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/94 to-ink-950/70" />
        <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-40" />

        <div className="container-rb relative">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <Eyebrow tone="paper">Trusted by researchers worldwide</Eyebrow>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.9rem,1.2rem+2.4vw,3rem)] leading-[1.1] text-paper-50">
                100+ researchers have moved their projects from stuck to submitted
              </h2>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.8] text-ink-200">
                Across the humanities, social sciences, natural sciences, and professional
                fields. Backed by an established academic institution, our citation
                standards and quality checks meet the same bar as the journals and
                committees that will review your work.
              </p>

              <blockquote className="mt-10 border-l-2 border-brand-500 pl-6">
                <p className="font-display text-[1.3rem] italic leading-snug text-paper-50 md:text-[1.5rem]">
                  &ldquo;Every great researcher needs a great team. We are that team.&rdquo;
                </p>
                <cite className="mt-3 block text-[0.8rem] not-italic tracking-wide text-ink-400">
                  — Research Bridge
                </cite>
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10">
              <Stat value={100} suffix="+" label="Researchers supported worldwide" tone="paper" />
              <Stat value={6} label="Core services, proposal to publication" tone="paper" />
              <Stat value={16} suffix="+" label="Disciplines actively supported" tone="paper" />
              <Stat value={1} label="Revision round built into every engagement" tone="paper" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────── */}
      <Section tone="paper" size="lg">
        <div className="container-rb">
          <SectionHeading
            eyebrow="Why Research Bridge"
            title="Rigorous methods, accurate citations, quality you can defend"
            lead="Three things researchers tell us they could not find elsewhere."
            align="center"
          />

          <RevealGroup className="mt-16 grid gap-5 md:grid-cols-3">
            {whyUs.map((item) => (
              <RevealItem key={item.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-paper-300 bg-paper-50 p-8 transition-colors duration-500 hover:border-brand-200">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white">
                    <item.icon className="size-5.5" />
                  </span>
                  <h3 className="mt-7 font-display text-[1.35rem] leading-snug text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.75] text-ink-500">{item.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <ButtonLink href="/why-us" variant="outline" arrow>
              See everything that sets us apart
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      {/* ── Process ──────────────────────────────────────────── */}
      <Section tone="paper-2" size="lg" id="how-it-works">
        <div className="container-rb">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our process"
              title="A structured, transparent process"
              lead="So you always know what stage your work is at — and nothing ever arrives as a surprise."
              className="max-w-2xl"
            />
            <Reveal delay={0.2}>
              <ButtonLink href="/process" variant="outline" arrow className="shrink-0">
                The full process
              </ButtonLink>
            </Reveal>
          </div>

          <RevealGroup className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <RevealItem key={step.n}>
                <div className="relative h-full">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[2.5rem] leading-none text-brand-500/25">
                      {step.n}
                    </span>
                    {i < processSteps.length - 1 && (
                      <span className="hidden h-px flex-1 bg-gradient-to-r from-paper-400 to-transparent lg:block" />
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-[1.2rem] leading-snug text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9rem] leading-[1.7] text-ink-500">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ── Integrity ────────────────────────────────────────── */}
      <Section tone="paper" size="lg">
        <div className="container-rb">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/integrity-ledger.jpg"
                  alt="An open ledger with careful handwritten entries"
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/45 to-transparent" />
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Academic integrity"
                title="We support, not substitute — your authorship stays yours"
                lead="We organize, edit, analyze, and format. The ideas, the argument, and the intellectual ownership remain entirely yours, and we scope every engagement to stay inside your institution's policy."
              />

              <RevealGroup className="mt-9 space-y-4" stagger={0.07}>
                {[
                  { icon: BookOpenCheck, text: 'Every citation verified against its original source' },
                  { icon: ScrollText, text: 'Originality checks before every written delivery' },
                  { icon: Compass, text: 'We ask your institution’s policy at the outset' },
                ].map((row) => (
                  <RevealItem key={row.text}>
                    <div className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                        <row.icon className="size-4" />
                      </span>
                      <p className="text-[0.95rem] leading-[1.7] text-ink-600">{row.text}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal delay={0.25}>
                <ButtonLink href="/integrity" variant="outline" arrow className="mt-9">
                  Read our integrity commitment
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <Section tone="paper-2" size="lg">
        <div className="container-rb">
          <SectionHeading
            eyebrow="What researchers say"
            title="From stuck to submitted"
            lead="Representative feedback; names withheld per our confidentiality standard."
            align="center"
          />

          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <RevealItem key={t.author} className="h-full">
                <figure className="relative flex h-full flex-col rounded-2xl border border-paper-300 bg-paper-50 p-8">
                  {i === 0 && <BorderTrail className="bg-brand-400/60" size={80} />}
                  <span className="font-display text-5xl leading-none text-brand-500/25">&ldquo;</span>
                  <blockquote className="mt-3 flex-1 text-[1rem] leading-[1.8] text-ink-700">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-7 border-t border-paper-300 pt-5">
                    <span className="block text-[0.9rem] font-medium text-ink-900">{t.author}</span>
                    <span className="block text-[0.82rem] text-ink-400">{t.field}</span>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <ButtonLink href="/testimonials" variant="outline" arrow>
              Read case notes
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <Section tone="paper" size="lg">
        <div className="container-rb">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Common questions"
                title="The four we’re asked most"
                lead="Twelve more, answered in full, on the FAQ page."
              />
              <Reveal delay={0.2}>
                <ButtonLink href="/faq" variant="outline" arrow className="mt-8">
                  All questions
                </ButtonLink>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <FaqAccordion items={topFaqs} />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── Latest insights teaser ───────────────────────────── */}
      <Section tone="paper-2" size="md">
        <div className="container-rb">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Resources"
              title="Practical guidance research-methods courses rarely cover"
              className="max-w-2xl"
            />
            <Reveal delay={0.15}>
              <ButtonLink href="/blog" variant="outline" arrow className="shrink-0">
                Visit the blog
              </ButtonLink>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                href: '/blog/systematic-literature-review-without-losing-momentum',
                title: 'How to Conduct a Systematic Literature Review Without Losing Momentum',
                cat: 'Literature Review',
              },
              {
                href: '/blog/five-citation-mistakes',
                title: 'Five Citation Mistakes That Quietly Undermine Strong Research',
                cat: 'Citations',
              },
              {
                href: '/blog/choosing-the-right-journal',
                title: 'Choosing the Right Journal: Fit Matters More Than Prestige',
                cat: 'Publishing',
              },
            ].map((post) => (
              <RevealItem key={post.href} className="h-full">
                <Link
                  href={post.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-paper-300 bg-paper-50 p-7 transition-[border-color,box-shadow] duration-500 hover:border-brand-200 hover:shadow-[0_24px_50px_-32px_rgba(11,18,38,0.35)]"
                >
                  <span className="text-2xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                    {post.cat}
                  </span>
                  <h3 className="mt-5 font-display text-[1.25rem] leading-snug text-ink-900 transition-colors group-hover:text-brand-700">
                    {post.title}
                  </h3>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-ink-400 transition-colors group-hover:text-brand-600">
                    Read article
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
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
