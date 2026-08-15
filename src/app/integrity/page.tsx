import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { integrityPillars } from '@/content/general';

export const metadata: Metadata = {
  title: 'Academic Integrity',
  description:
    'We support, not substitute. Authorship stays with you, every citation is verified, and we scope each engagement to stay inside your institution’s policy.',
};

export default function IntegrityPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic integrity & authenticity"
        title="Our Commitment to Academic Integrity"
        lead="We organize, edit, analyze, and format. The ideas, the argument, and the intellectual ownership remain entirely yours — and every engagement is scoped to stay inside your institution’s policy."
        image="/images/integrity-ledger.jpg"
        imageAlt="An open ledger with careful handwritten entries"
        crumbs={[{ href: '/integrity', label: 'Academic Integrity' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <RevealGroup className="space-y-px overflow-hidden rounded-2xl border border-paper-300">
            {integrityPillars.map((pillar, i) => (
              <RevealItem key={pillar.title}>
                <div className="group grid gap-5 bg-paper-50 p-8 transition-colors duration-500 hover:bg-brand-50 md:grid-cols-[auto_1fr_1.2fr] md:items-start md:gap-10 md:p-10">
                  <span className="font-display text-[1.6rem] leading-none text-brand-500/30 transition-colors duration-500 group-hover:text-brand-500/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-[1.35rem] leading-snug text-ink-900 md:text-[1.5rem]">
                    {pillar.title}
                  </h2>
                  <p className="text-[0.98rem] leading-[1.8] text-ink-600">{pillar.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section tone="ink" size="lg">
        <Image
          src="/images/svc-citation.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.1]"
        />
        <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-40" />
        <div className="container-rb relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Where the line sits"
                title="We support, not substitute"
                tone="paper"
                lead="The distinction that governs every engagement: we carry structural and technical weight, never the scholarly judgement that makes the work yours."
              />
            </div>

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'We do', items: ['Organize sources', 'Edit and format', 'Analyze data', 'Verify citations'] },
                { title: 'You do', items: ['Frame the question', 'Make the argument', 'Interpret findings', 'Approve every deliverable'] },
              ].map((col) => (
                <RevealItem key={col.title}>
                  <div className="h-full rounded-2xl border border-white/12 bg-white/[0.04] p-7 backdrop-blur-sm">
                    <h3 className="text-2xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                      {col.title}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {col.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[0.92rem] leading-snug text-ink-200"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      <Section size="md">
        <div className="container-rb">
          <Reveal>
            <div className="flex flex-col items-start gap-7 rounded-2xl border border-brand-200 bg-brand-50 p-8 md:flex-row md:items-center md:p-12">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                <ShieldCheck className="size-6" />
              </span>
              <div className="flex-1">
                <h2 className="font-display text-[1.4rem] leading-snug text-brand-900 md:text-[1.7rem]">
                  Tell us your institution&rsquo;s policy, and we&rsquo;ll scope inside it
                </h2>
                <p className="mt-3 text-[0.98rem] leading-[1.75] text-brand-800">
                  We ask at the outset, every time. If something you need falls outside what
                  your institution permits, we will say so plainly rather than take the work.
                </p>
              </div>
              <ButtonLink href="/contact" arrow className="shrink-0">
                Ask us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
