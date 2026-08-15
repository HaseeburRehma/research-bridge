import type { Metadata } from 'next';
import { Check, Star } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { BorderTrail } from '@/components/motion-primitives/border-trail';
import { engagementModels } from '@/content/general';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Ways to Work With Us',
  description:
    'Single-task support, chapter-by-chapter, full project partnership, or institutional packages. Every project begins with a free scoping conversation.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & engagement models"
        title="Ways to Work With Us"
        lead="Research needs rarely fit one fixed package. Every project begins with a free scoping conversation before any commitment."
        image="/images/pricing-papers.jpg"
        imageAlt="A stack of manuscript pages on a desk"
        crumbs={[{ href: '/pricing', label: 'Ways to Work With Us' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <RevealGroup className="grid gap-5 lg:grid-cols-2" stagger={0.1}>
            {engagementModels.map((model) => (
              <RevealItem key={model.title} className="h-full">
                <div
                  className={cn(
                    'relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 md:p-10',
                    'featured' in model && model.featured
                      ? 'border-transparent bg-ink-950 text-paper-100'
                      : 'border-paper-300 bg-paper-50',
                  )}
                >
                  {'featured' in model && model.featured && (
                    <>
                      <BorderTrail className="bg-brand-400" size={90} />
                      <span className="mb-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-500/15 px-3 py-1.5 text-2xs font-semibold uppercase tracking-[0.16em] text-brand-300">
                        <Star className="size-3" />
                        {model.best}
                      </span>
                    </>
                  )}

                  {!('featured' in model && model.featured) && (
                    <span className="mb-6 inline-flex w-fit rounded-full bg-brand-50 px-3 py-1.5 text-2xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                      {model.best}
                    </span>
                  )}

                  <h2
                    className={cn(
                      'font-display text-[clamp(1.4rem,1.1rem+1vw,1.85rem)] leading-snug',
                      'featured' in model && model.featured ? 'text-paper-50' : 'text-ink-900',
                    )}
                  >
                    {model.title}
                  </h2>

                  <p
                    className={cn(
                      'mt-4 text-[0.98rem] leading-[1.8]',
                      'featured' in model && model.featured ? 'text-ink-200' : 'text-ink-500',
                    )}
                  >
                    {model.body}
                  </p>

                  <ul className="mt-8 flex-1 space-y-3">
                    {model.examples.map((ex) => (
                      <li
                        key={ex}
                        className={cn(
                          'flex items-start gap-3 text-[0.92rem] leading-snug',
                          'featured' in model && model.featured ? 'text-ink-200' : 'text-ink-600',
                        )}
                      >
                        <Check
                          className={cn(
                            'mt-0.5 size-4 shrink-0',
                            'featured' in model && model.featured
                              ? 'text-brand-400'
                              : 'text-brand-500',
                          )}
                        />
                        {ex}
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    href="/contact"
                    variant={'featured' in model && model.featured ? 'primary' : 'outline'}
                    arrow
                    className="mt-9 w-fit"
                  >
                    Scope this
                  </ButtonLink>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2}>
            <blockquote className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-8 md:p-10">
              <p className="font-display text-[clamp(1.25rem,1rem+1vw,1.7rem)] leading-snug text-brand-900">
                &ldquo;Every quote starts with a conversation, not a form. We scope to your
                actual need, not a generic package.&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper-2" size="lg">
        <div className="container-rb">
          <SectionHeading
            eyebrow="How pricing is set"
            title="What a scoping conversation actually covers"
            lead="Fifteen minutes is usually enough. There is no obligation, and no pressure to commit at the end of it."
            align="center"
          />

          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                n: '01',
                title: 'What you need, precisely',
                body: 'Which stage, which deliverable, and what your institution or journal actually requires.',
              },
              {
                n: '02',
                title: 'What it will take',
                body: 'The hours, the specialists involved, and any dependencies — like ethics approval or data access.',
              },
              {
                n: '03',
                title: 'What it will cost',
                body: 'A written figure and timeline, with the revision round already included. No hourly surprises.',
              },
            ].map((item) => (
              <RevealItem key={item.n} className="h-full">
                <div className="h-full rounded-2xl border border-paper-300 bg-paper-50 p-8">
                  <span className="font-display text-[2rem] leading-none text-brand-500/25">
                    {item.n}
                  </span>
                  <h3 className="mt-5 font-display text-[1.2rem] leading-snug text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.75] text-ink-500">{item.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <CtaBand
        title="Start with a free scoping conversation."
        body="No obligation, no generic package. Tell us the stage you’re at and the deadline you’re working to, and we’ll tell you what it would take."
        primaryLabel="Book a scoping call"
      />
    </>
  );
}
