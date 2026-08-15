import type { Metadata } from 'next';
import Image from 'next/image';
import { Check, Landmark, X } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading, Eyebrow } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { commitments, teamRoles, values } from '@/content/general';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Research Bridge closes the gap between valuable research and the support it deserves — our mission, story, values, and the team behind the work.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="The Bridge Between Great Ideas and Finished Research"
        lead="Research Bridge was founded on a simple observation: the researchers doing the most valuable work often have the least support."
        image="/images/campus-stone.jpg"
        imageAlt="A historic university building in stone"
        crumbs={[{ href: '/about', label: 'About' }]}
      />

      {/* Founding observation */}
      <Section size="lg">
        <div className="container-rb">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <Eyebrow>The gap we close</Eyebrow>
                <p className="mt-6 font-display text-[clamp(1.5rem,1.1rem+1.4vw,2.1rem)] leading-[1.28] text-ink-900">
                  A brilliant hypothesis sits unfinished for months over a disorganized
                  literature review. A strong dataset goes unanalyzed because its
                  researcher is teaching four courses.
                </p>
              </div>
            </Reveal>

            <div className="space-y-6 text-[1.05rem] leading-[1.85] text-ink-600">
              <Reveal delay={0.1}>
                <p>
                  A well-argued thesis loses marks over citation formatting that has
                  nothing to do with the quality of the ideas inside it. None of these are
                  failures of scholarship. They are failures of support — and they are the
                  reason Research Bridge exists.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  We close that gap. Not by thinking for researchers, but by carrying the
                  structural and technical weight of a project so they can focus on the
                  argument itself.
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="!mt-12 rounded-2xl border border-paper-300 bg-paper-50 p-8">
                  <Eyebrow tone="brand">Our mission</Eyebrow>
                  <p className="mt-5 font-display text-[1.35rem] leading-snug text-ink-900">
                    Dependable, rigorous research support at every stage — from first
                    literature search to final published article — so good ideas are never
                    lost to logistics.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Our story */}
      <Section tone="paper-2" size="lg">
        <div className="container-rb">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/story-shelves.jpg"
                  alt="Bookshelves filled with academic volumes"
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Our story"
                title="Built by people who have sat on the other side of the table"
                lead="Research Bridge grew out of hands-on academic experience: supervising theses, reviewing manuscripts, and guiding graduate students through the unwritten rules of publishing."
              />
              <Reveal delay={0.2}>
                <p className="mt-6 text-[1.02rem] leading-[1.85] text-ink-600">
                  Most researchers don&rsquo;t need someone to think for them — they need a
                  disciplined partner to carry the structural and technical weight of a
                  project so they can focus on the argument itself. That is the whole of
                  what we do, and the reason our scope is deliberately bounded.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section size="lg">
        <div className="container-rb">
          <SectionHeading
            eyebrow="Our values"
            title="Five commitments that shape every engagement"
            align="center"
          />

          <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <RevealItem key={value.title} className="h-full">
                <div className="group h-full rounded-2xl border border-paper-300 bg-paper-50 p-8 transition-colors duration-500 hover:border-brand-200">
                  <span className="font-display text-[2.25rem] leading-none text-brand-500/25 transition-colors duration-500 group-hover:text-brand-500/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-6 font-display text-[1.35rem] text-ink-900">{value.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.75] text-ink-500">{value.body}</p>
                </div>
              </RevealItem>
            ))}

            <RevealItem className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-ink-950 p-8 text-paper-100">
                <Landmark className="size-7 text-brand-400" />
                <div className="mt-8">
                  <h3 className="font-display text-[1.3rem] leading-snug text-paper-50">
                    Backed by an established academic institution
                  </h3>
                  <p className="mt-3 text-[0.9rem] leading-[1.7] text-ink-300">
                    Grounding our consultancy in real scholarly practice — shaped by people
                    who have served as supervisors, reviewers, and examiners.
                  </p>
                </div>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </Section>

      {/* Team roles */}
      <Section tone="paper-2" size="lg">
        <div className="container-rb">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="The team"
                title="Specialists, not a generalist writing pool"
                lead="Researchers, editors, and methodologists with direct experience in academic supervision, peer review, and publication. Every project is matched to the team members with relevant disciplinary background."
              />
              <Reveal delay={0.2}>
                <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-6">
                  <p className="text-[0.95rem] leading-relaxed text-brand-800">
                    One point of contact coordinates every engagement — you never explain
                    your project&rsquo;s context twice.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.26}>
                <ButtonLink href="/expertise" variant="outline" arrow className="mt-8">
                  More on our expertise
                </ButtonLink>
              </Reveal>
            </div>

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {teamRoles.map((role) => (
                <RevealItem key={role.title} className="h-full">
                  <div className="h-full rounded-2xl border border-paper-300 bg-paper-50 p-7">
                    <h3 className="font-display text-[1.15rem] leading-snug text-ink-900">
                      {role.title}
                    </h3>
                    <p className="mt-3 text-[0.9rem] leading-[1.75] text-ink-500">{role.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* Commitment */}
      <Section size="lg" id="commitment">
        <div className="container-rb">
          <SectionHeading
            eyebrow="Our commitment"
            title="What we will always do — and what we never will"
            align="center"
          />

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-paper-300 bg-paper-50 p-8 md:p-10">
                <h3 className="flex items-center gap-3 font-display text-[1.4rem] text-ink-900">
                  <span className="flex size-8 items-center justify-center rounded-full bg-brand-500 text-white">
                    <Check className="size-4" />
                  </span>
                  We will always
                </h3>
                <ul className="mt-7 space-y-4">
                  {commitments.always.map((item) => (
                    <li key={item} className="flex gap-3.5 text-[0.95rem] leading-[1.75] text-ink-600">
                      <Check className="mt-1 size-4 shrink-0 text-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl bg-ink-950 p-8 text-paper-100 md:p-10">
                <h3 className="flex items-center gap-3 font-display text-[1.4rem] text-paper-50">
                  <span className="flex size-8 items-center justify-center rounded-full bg-white/10 text-paper-50">
                    <X className="size-4" />
                  </span>
                  We will never
                </h3>
                <ul className="mt-7 space-y-4">
                  {commitments.never.map((item) => (
                    <li key={item} className="flex gap-3.5 text-[0.95rem] leading-[1.75] text-ink-300">
                      <X className="mt-1 size-4 shrink-0 text-ink-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-9 border-t border-white/10 pt-6 font-display text-[1.15rem] italic leading-snug text-paper-50">
                  &ldquo;Quality you can defend — in front of a supervisor, a reviewer, or a
                  committee.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
