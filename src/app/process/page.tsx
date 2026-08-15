import type { Metadata } from 'next';
import Image from 'next/image';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { processSteps } from '@/content/general';

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'A structured, transparent five-stage process — consultation, scope, work in progress, review and revision, delivery — so you always know what stage your work is at.',
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="How It Works"
        lead="A structured, transparent process — so you always know what stage your work is at, and nothing ever arrives as a surprise."
        image="/images/process-desk.jpg"
        imageAlt="A researcher writing notes at a desk"
        crumbs={[{ href: '/process', label: 'Our Process' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <div className="relative">
            {/* Spine */}
            <div
              aria-hidden
              className="absolute left-[1.4375rem] top-4 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-brand-300 via-paper-400 to-transparent md:block"
            />

            <RevealGroup className="space-y-14 md:space-y-20" stagger={0.12}>
              {processSteps.map((step) => (
                <RevealItem key={step.n}>
                  <div className="grid gap-6 md:grid-cols-[3rem_1fr] md:gap-10">
                    <div className="relative">
                      <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-paper-300 bg-paper-50 font-display text-[1.05rem] text-brand-600 shadow-[0_8px_20px_-12px_rgba(11,18,38,0.4)]">
                        {step.n}
                      </span>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
                      <div>
                        <h2 className="font-display text-[clamp(1.5rem,1.1rem+1.4vw,2.15rem)] leading-snug text-ink-900">
                          {step.title}
                        </h2>
                        <p className="mt-4 text-[1.02rem] leading-[1.8] text-ink-600">
                          {step.body}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-paper-300 bg-paper-50 p-6 lg:mt-1">
                        <p className="text-[0.92rem] leading-[1.75] text-ink-500">{step.detail}</p>
                      </div>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      <Section tone="ink" size="lg">
        <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-40" />
        <Image
          src="/images/library-stacks.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
        />
        <div className="container-rb relative">
          <Reveal>
            <figure className="mx-auto max-w-3xl text-center">
              <blockquote className="font-display text-[clamp(1.5rem,1.05rem+1.8vw,2.4rem)] leading-[1.28] text-paper-50">
                &ldquo;Support at every stage, from proposal to publication.&rdquo;
              </blockquote>
              <figcaption className="mt-7 text-[0.78rem] uppercase tracking-[0.22em] text-ink-400">
                Research Bridge
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/pricing" variant="ghostLight" size="lg" arrow>
              Ways to work with us
            </ButtonLink>
            <ButtonLink href="/services" variant="ghostLight" size="lg">
              Browse services
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper-2" size="md">
        <div className="container-rb">
          <SectionHeading
            eyebrow="What you can rely on"
            title="Three things that never change, whatever the scope"
            align="center"
          />
          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: 'A written scope before work starts',
                body: 'What’s included, what it costs, and when it lands — agreed before anything begins.',
              },
              {
                title: 'A revision round as standard',
                body: 'Built into every engagement at no extra cost, because it’s part of doing the work properly.',
              },
              {
                title: 'Early warning, never late',
                body: 'If a delay is coming, you hear about it when we see it — not at the deadline.',
              },
            ].map((item) => (
              <RevealItem key={item.title} className="h-full">
                <div className="h-full rounded-2xl border border-paper-300 bg-paper-50 p-8">
                  <h3 className="font-display text-[1.25rem] leading-snug text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.93rem] leading-[1.75] text-ink-500">{item.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
