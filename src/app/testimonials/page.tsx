import type { Metadata } from 'next';
import Image from 'next/image';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { BorderTrail } from '@/components/motion-primitives/border-trail';
import { caseNotes, testimonials } from '@/content/general';

export const metadata: Metadata = {
  title: 'Testimonials & Case Notes',
  description:
    'What researchers say about working with Research Bridge, plus illustrative case notes from literature reviews, citation audits, data backlogs and institutional cohorts.',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials & case notes"
        title="What Researchers Say"
        lead="Representative feedback; names withheld per our confidentiality standard. Attributed testimonials will be added as they are collected and cleared."
        image="/images/testimonials-library.jpg"
        imageAlt="Students studying in a historic library"
        crumbs={[{ href: '/testimonials', label: 'Testimonials' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <RevealGroup className="grid gap-5 lg:grid-cols-3" stagger={0.12}>
            {testimonials.map((t, i) => (
              <RevealItem key={t.author} className="h-full">
                <figure className="relative flex h-full flex-col rounded-2xl border border-paper-300 bg-paper-50 p-8 md:p-10">
                  {i === 1 && <BorderTrail className="bg-brand-400/70" size={90} />}
                  <span className="font-display text-6xl leading-none text-brand-500/20">
                    &ldquo;
                  </span>
                  <blockquote className="mt-4 flex-1 text-[1.05rem] leading-[1.85] text-ink-700">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 border-t border-paper-300 pt-6">
                    <span className="block font-display text-[1.05rem] text-ink-900">
                      {t.author}
                    </span>
                    <span className="mt-1 block text-[0.82rem] uppercase tracking-[0.14em] text-ink-400">
                      {t.field}
                    </span>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section tone="paper-2" size="lg">
        <div className="container-rb">
          <SectionHeading
            eyebrow="Illustrative scenarios"
            title="Four situations we see repeatedly"
            lead="Composite scenarios drawn from real engagements, to be replaced with permission-cleared case studies ahead of launch."
          />

          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2">
            {caseNotes.map((note) => (
              <RevealItem key={note.title} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-paper-300 bg-paper-50 p-8 transition-colors duration-500 hover:border-brand-200 md:p-10">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-[2.5rem] leading-none text-brand-600">
                      {note.metric}
                    </span>
                    <span className="text-[0.8rem] uppercase tracking-[0.14em] text-ink-400">
                      {note.metricLabel}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-[1.35rem] leading-snug text-ink-900">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.8] text-ink-500">{note.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2}>
            <p className="mt-10 text-center text-[0.82rem] text-ink-400">
              Illustrative scenarios; to be replaced with permission-cleared case studies ahead
              of launch.
            </p>
          </Reveal>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 md:py-28">
        <Image
          src="/images/hero-reading-room.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 to-ink-950" />
        <div className="container-rb relative">
          <Reveal>
            <figure className="mx-auto max-w-3xl text-center">
              <blockquote className="font-display text-[clamp(1.5rem,1.05rem+1.8vw,2.4rem)] leading-[1.28] text-paper-50">
                &ldquo;Every great researcher needs a great team. We are that team.&rdquo;
              </blockquote>
              <figcaption className="mt-7 text-[0.78rem] uppercase tracking-[0.22em] text-ink-400">
                Research Bridge
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
