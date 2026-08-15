import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { engagementSteps, services } from '@/content/services';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Six core research services — literature review, data analysis, academic writing, citation support, thesis assistance and publication support — available individually or as one end-to-end package.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Support at Every Stage, From Proposal to Publication"
        lead="Research rarely fails because the idea was weak — it stalls over logistics. Six core services, each available individually or combined into one end-to-end package."
        image="/images/svc-literature.jpg"
        imageAlt="Library shelving filled with bound volumes"
        crumbs={[{ href: '/services', label: 'Services' }]}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="lg" arrow>
            Discuss your project
          </ButtonLink>
          <ButtonLink href="/pricing" variant="ghostLight" size="lg">
            Ways to work with us
          </ButtonLink>
        </div>
      </PageHero>

      {/* Index */}
      <div className="border-b border-paper-300 bg-paper-200/60">
        <div className="container-rb">
          <RevealGroup className="flex flex-wrap gap-x-8 gap-y-3 py-6" stagger={0.05}>
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <Link
                  href={`#${service.slug}`}
                  className="group flex items-center gap-2 text-[0.85rem] text-ink-500 transition-colors hover:text-brand-700"
                >
                  <span className="font-display text-[0.8rem] text-brand-500/60">
                    {String(service.index).padStart(2, '0')}
                  </span>
                  {service.short}
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>

      {/* Six services */}
      <Section size="lg">
        <div className="container-rb space-y-24 md:space-y-36">
          {services.map((service, i) => (
            <article key={service.slug} id={service.slug} className="scroll-mt-32">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-20">
                <Reveal className={cn('lg:sticky lg:top-32', i % 2 === 1 && 'lg:order-2')}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 92vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-paper-50/90 px-3.5 py-1.5 text-2xs font-semibold uppercase tracking-[0.16em] text-ink-600 backdrop-blur">
                      Service {service.index} of 6
                    </span>
                  </div>
                </Reveal>

                <div className={cn(i % 2 === 1 && 'lg:order-1')}>
                  <SectionHeading
                    eyebrow={`0${service.index} — ${service.short}`}
                    title={service.title}
                    lead={service.promise}
                    as="h2"
                  />

                  <Reveal delay={0.15}>
                    <p className="mt-6 text-[1rem] leading-[1.85] text-ink-600">{service.intro}</p>
                  </Reveal>

                  <Reveal delay={0.2}>
                    <div className="mt-9 rounded-2xl border border-paper-300 bg-paper-50 p-7">
                      <h3 className="text-2xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                        What&rsquo;s included
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {service.included.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-[0.95rem] leading-[1.7] text-ink-600"
                          >
                            <Check className="mt-1 size-4 shrink-0 text-brand-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  <Reveal delay={0.26}>
                    <div className="mt-5 rounded-2xl bg-paper-200 p-7">
                      <h3 className="text-2xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                        Who this is for
                      </h3>
                      <p className="mt-4 text-[0.95rem] leading-[1.75] text-ink-600">
                        {service.forWho}
                      </p>
                    </div>
                  </Reveal>

                  {service.pullQuote && (
                    <Reveal delay={0.3}>
                      <blockquote className="mt-8 border-l-2 border-brand-500 pl-6 font-display text-[1.25rem] italic leading-snug text-ink-800">
                        &ldquo;{service.pullQuote}&rdquo;
                      </blockquote>
                    </Reveal>
                  )}

                  <Reveal delay={0.34}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group mt-9 inline-flex items-center gap-2 text-[0.9rem] font-medium text-brand-600"
                    >
                      Full detail on {service.short.toLowerCase()}
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* How it works — shown once */}
      <Section tone="ink" size="lg">
        <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-40" />
        <div className="container-rb relative">
          <SectionHeading
            eyebrow="How it works"
            title="The same four steps, whichever service you choose"
            tone="paper"
            align="center"
          />

          <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((step) => (
              <RevealItem key={step.n}>
                <div className="relative border-t border-white/12 pt-6">
                  <span className="font-display text-[2.25rem] leading-none text-brand-400/40">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-[1.2rem] leading-snug text-paper-50">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9rem] leading-[1.7] text-ink-300">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="mt-14 flex justify-center">
            <ButtonLink href="/process" variant="ghostLight" arrow size="lg">
              See the full process
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title="Discuss your project."
        body="Tell us which stage you’re at and what’s blocking it. We’ll scope honestly — including telling you if something falls outside our expertise."
        primaryLabel="Discuss your project"
      />
    </>
  );
}
