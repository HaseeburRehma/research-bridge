import type { Metadata } from 'next';
import { Check, X } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { commitments, values } from '@/content/general';

export const metadata: Metadata = {
  title: 'Our Commitment',
  description:
    'What Research Bridge will always do for every client — and the four things we will never do, under any circumstances.',
};

export default function CommitmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Our commitment"
        title="Our Commitment to Every Client"
        lead="Six things we do on every engagement, and four we will not do under any circumstances — including when asked."
        image="/images/svc-writing.jpg"
        imageAlt="A researcher writing by hand at a wooden desk"
        crumbs={[{ href: '/commitment', label: 'Our Commitment' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-paper-300 bg-paper-50 p-8 md:p-11">
                <h2 className="flex items-center gap-3.5 font-display text-[1.6rem] text-ink-900">
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand-500 text-white">
                    <Check className="size-4.5" />
                  </span>
                  We will always
                </h2>
                <ul className="mt-9 divide-y divide-paper-300">
                  {commitments.always.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 py-5 text-[1rem] leading-[1.75] text-ink-600"
                    >
                      <Check className="mt-1 size-4.5 shrink-0 text-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl bg-ink-950 p-8 text-paper-100 md:p-11">
                <h2 className="flex items-center gap-3.5 font-display text-[1.6rem] text-paper-50">
                  <span className="flex size-9 items-center justify-center rounded-full bg-white/10">
                    <X className="size-4.5" />
                  </span>
                  We will never
                </h2>
                <ul className="mt-9 divide-y divide-white/10">
                  {commitments.never.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 py-5 text-[1rem] leading-[1.75] text-ink-200"
                    >
                      <X className="mt-1 size-4.5 shrink-0 text-ink-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <blockquote className="mt-10 border-t border-white/10 pt-8">
                  <p className="font-display text-[1.3rem] italic leading-snug text-paper-50">
                    &ldquo;Quality you can defend — in front of a supervisor, a reviewer, or a
                    committee. That&rsquo;s the standard every deliverable is held to.&rdquo;
                  </p>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="paper-2" size="lg">
        <div className="container-rb">
          <SectionHeading
            eyebrow="The values underneath"
            title="Five principles these commitments come from"
            align="center"
          />
          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <RevealItem key={value.title} className="h-full">
                <div className="h-full rounded-2xl border border-paper-300 bg-paper-50 p-6">
                  <h3 className="font-display text-[1.2rem] text-ink-900">{value.title}</h3>
                  <p className="mt-3 text-[0.88rem] leading-[1.7] text-ink-500">{value.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/integrity" variant="outline" arrow>
              Academic integrity in full
            </ButtonLink>
            <ButtonLink href="/process" variant="outline" arrow>
              How we work
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
