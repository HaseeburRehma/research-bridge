import type { Metadata } from 'next';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { Stat } from '@/components/ui/stat';
import { differentiators } from '@/content/general';

export const metadata: Metadata = {
  title: 'Why Choose Research Bridge',
  description:
    'Six reasons researchers choose Research Bridge — defensible quality, full-arc support, institutional backing, cross-disciplinary experience, confidentiality and realistic deadlines.',
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why choose Research Bridge"
        title="What Sets Us Apart"
        lead="Rigorous methods, accurate citations, quality you can defend — held to the standard your work will actually be judged by."
        image="/images/testimonials-library.jpg"
        imageAlt="Students studying in a historic library"
        crumbs={[{ href: '/why-us', label: 'Why Choose Us' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <RevealGroup className="grid gap-px overflow-hidden rounded-2xl border border-paper-300 bg-paper-300 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <RevealItem key={item.title} className="h-full">
                <div className="group flex h-full flex-col bg-paper-50 p-8 transition-colors duration-500 hover:bg-brand-50 md:p-10">
                  <span className="font-display text-[2rem] leading-none text-brand-500/25 transition-colors duration-500 group-hover:text-brand-500/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-6 font-display text-[1.3rem] leading-snug text-ink-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 flex-1 text-[0.95rem] leading-[1.8] text-ink-500">
                    {item.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section tone="ink" size="lg">
        <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-40" />
        <div className="container-rb relative">
          <SectionHeading
            eyebrow="By the numbers"
            title="Experience that shows up in the details"
            tone="paper"
            align="center"
          />
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            <Stat value={100} suffix="+" label="Researchers supported worldwide" tone="paper" />
            <Stat value={16} suffix="+" label="Disciplines actively covered" tone="paper" />
            <Stat value={8} suffix="+" label="Citation styles handled routinely" tone="paper" />
            <Stat value={6} label="Core services, proposal to publication" tone="paper" />
          </div>
        </div>
      </Section>

      <Section tone="paper-2" size="lg">
        <div className="container-rb">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Honest about limits"
              title="What we won’t claim"
              lead="Every consultancy says it is rigorous. Here is where we draw our own boundaries."
            />
            <RevealGroup className="space-y-5">
              {[
                {
                  title: 'We are not a rescue service for tomorrow’s deadline',
                  body: 'We plan backward from your real due date, with room for your review. If the time is genuinely not there, we will tell you rather than take the work.',
                },
                {
                  title: 'We do not cover every field equally',
                  body: 'Our depth is uneven, and honestly so. If your project sits outside our expertise, we say so at scoping — that is part of the commitment.',
                },
                {
                  title: 'We do not write your argument',
                  body: 'The ideas and intellectual ownership stay yours. If what you need is someone to think for you, we are the wrong partner.',
                },
              ].map((item) => (
                <RevealItem key={item.title}>
                  <div className="rounded-2xl border border-paper-300 bg-paper-50 p-7">
                    <h3 className="font-display text-[1.2rem] leading-snug text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.93rem] leading-[1.75] text-ink-500">{item.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="mt-14 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/commitment" variant="outline" arrow>
              Our full commitment
            </ButtonLink>
            <ButtonLink href="/testimonials" variant="outline" arrow>
              What researchers say
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
