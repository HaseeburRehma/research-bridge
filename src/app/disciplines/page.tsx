import type { Metadata } from 'next';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { disciplineGroups } from '@/content/general';

export const metadata: Metadata = {
  title: 'Disciplines We Cover',
  description:
    'Research support across the humanities, Islamic studies, social sciences, business, law, finance, and the applied sciences.',
};

export default function DisciplinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Disciplines we cover"
        title="Research Support Across Disciplines"
        lead="A representative — not exhaustive — list. If your field isn’t here, reach out; every project is matched individually to team members with relevant disciplinary background."
        image="/images/disc-humanities.jpg"
        imageAlt="Antique bound volumes on a shelf"
        crumbs={[{ href: '/disciplines', label: 'Disciplines' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <RevealGroup className="grid gap-5 md:grid-cols-2" stagger={0.11}>
            {disciplineGroups.map((group) => (
              <RevealItem key={group.title} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-paper-300 bg-paper-50">
                  <div className="relative aspect-[16/7] overflow-hidden">
                    <Image
                      src={group.image}
                      alt={group.imageAlt}
                      fill
                      sizes="(min-width: 768px) 45vw, 92vw"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/25 to-transparent" />
                    <h2 className="absolute inset-x-6 bottom-5 font-display text-[1.4rem] leading-snug text-paper-50 md:text-[1.6rem]">
                      {group.title}
                    </h2>
                  </div>

                  <ul className="flex-1 divide-y divide-paper-200 px-7 py-2">
                    {group.fields.map((field) => (
                      <li
                        key={field}
                        className="flex items-start gap-3 py-4 text-[0.95rem] leading-snug text-ink-600"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-400" />
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col items-start gap-6 rounded-2xl bg-ink-950 p-8 text-paper-100 sm:flex-row sm:items-center md:p-10">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                <Sparkles className="size-5.5" />
              </span>
              <p className="text-[1.05rem] leading-[1.75] text-ink-200">
                Particular depth in{' '}
                <span className="text-paper-50">Islamic Studies</span>,{' '}
                <span className="text-paper-50">Islamic finance</span>, and the intersection
                of <span className="text-paper-50">AI ethics with classical jurisprudence</span>{' '}
                — a strength unique to our institutional backing.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper-2" size="md">
        <div className="container-rb">
          <SectionHeading
            eyebrow="Not listed?"
            title="Reach out anyway — every project is matched individually"
            lead="The list above is representative rather than exhaustive. Tell us your field and stage, and we’ll tell you honestly whether we’re the right fit."
            align="center"
          />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
