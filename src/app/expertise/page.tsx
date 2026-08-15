import type { Metadata } from 'next';
import Image from 'next/image';
import { UserRoundCheck } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading, Eyebrow } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { citationStyles, teamRoles, toolsUsed } from '@/content/general';

export const metadata: Metadata = {
  title: 'Our Expertise',
  description:
    'Researchers, editors, and methodologists with direct experience in academic supervision, peer review, and publication — not a generalist writing pool.',
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Our expertise"
        title="The Team Behind Research Bridge"
        lead="Researchers, editors, and methodologists with direct experience in academic supervision, peer review, and publication — not a generalist writing pool. Every project is matched to the team members with relevant disciplinary background."
        image="/images/expertise-team.jpg"
        imageAlt="A research team in discussion around a table"
        crumbs={[{ href: '/expertise', label: 'Our Expertise' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {teamRoles.map((role, i) => (
              <RevealItem key={role.title} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-paper-300 bg-paper-50 p-8 transition-colors duration-500 hover:border-brand-200 md:p-10">
                  <span className="font-display text-[2.5rem] leading-none text-brand-500/20 transition-colors duration-500 group-hover:text-brand-500/45">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-6 font-display text-[1.45rem] leading-snug text-ink-900">
                    {role.title}
                  </h2>
                  <p className="mt-4 text-[0.98rem] leading-[1.8] text-ink-500">{role.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-start gap-6 rounded-2xl bg-ink-950 p-8 text-paper-100 sm:flex-row sm:items-center md:p-10">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                <UserRoundCheck className="size-5.5" />
              </span>
              <p className="font-display text-[1.3rem] leading-snug text-paper-50 md:text-[1.5rem]">
                One point of contact coordinates every engagement — you never explain your
                project&rsquo;s context twice.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Tools */}
      <Section tone="paper-2" size="lg">
        <div className="container-rb">
          <SectionHeading
            eyebrow="Tools & standards"
            title="The software and style manuals we work in daily"
            lead="Whatever your department specifies, we already work in it — and we verify against the official manual rather than a summary page."
            align="center"
          />

          <Reveal delay={0.15} className="mt-14">
            <div className="rounded-2xl border border-paper-300 bg-paper-50 py-8">
              <p className="mb-6 text-center text-2xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                Research & analysis tools
              </p>
              <InfiniteSlider gap={20} speed={22} speedOnHover={8} className="mask-fade-x">
                {toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="whitespace-nowrap rounded-full border border-paper-300 px-5 py-2.5 font-display text-[1.05rem] text-ink-700"
                  >
                    {tool}
                  </span>
                ))}
              </InfiniteSlider>

              <p className="mb-6 mt-10 text-center text-2xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                Citation styles
              </p>
              <InfiniteSlider gap={20} speed={20} speedOnHover={8} reverse className="mask-fade-x">
                {citationStyles.map((style) => (
                  <span
                    key={style}
                    className="whitespace-nowrap rounded-full bg-brand-50 px-5 py-2.5 font-display text-[1.05rem] text-brand-700"
                  >
                    {style}
                  </span>
                ))}
              </InfiniteSlider>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Institutional backing */}
      <Section size="lg">
        <div className="container-rb">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/institutions-campus.jpg"
                  alt="A university campus walkway"
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Eyebrow>Institutional backing</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(1.7rem,1.1rem+2vw,2.6rem)] leading-[1.15] text-ink-900">
                Backed by an established academic institution
              </h2>
              <div className="mt-6 space-y-5 text-[1.02rem] leading-[1.85] text-ink-600">
                <p>
                  Research Bridge operates with the institutional backing of an established
                  research and legal-thought centre — grounding our consultancy in real
                  scholarly practice, shaped by people who have sat on the other side of the
                  table as supervisors, reviewers, and examiners.
                </p>
                <p>
                  That backing shows up in particular depth in Islamic Studies, Islamic
                  finance, and the intersection of AI ethics with classical jurisprudence —
                  a strength unique to our position.
                </p>
              </div>
              <ButtonLink href="/disciplines" variant="outline" arrow className="mt-9">
                Disciplines we cover
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
