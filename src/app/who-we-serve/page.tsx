import type { Metadata } from 'next';
import Image from 'next/image';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { audiences } from '@/content/general';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Who We Serve',
  description:
    'Independent scholars, MPhil and PhD students, faculty, and institutions — how Research Bridge supports each.',
};

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who we serve"
        title="Scholars, Students, Faculty & Institutions"
        lead="Rigorous methods, accurate citations, quality you can defend — support at every stage from proposal to publication, scoped to who you are and where you are stuck."
        image="/images/who-students.jpg"
        imageAlt="Researchers collaborating around a laptop"
        crumbs={[{ href: '/who-we-serve', label: 'Who We Serve' }]}
      />

      <Section size="lg">
        <div className="container-rb space-y-20 md:space-y-28">
          {audiences.map((audience, i) => (
            <div
              key={audience.slug}
              id={audience.slug}
              className="grid scroll-mt-32 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20"
            >
              <Reveal className={cn(i % 2 === 1 && 'lg:order-2')}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={audience.image}
                    alt={audience.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 92vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-paper-50/90 px-3 py-1 font-display text-[0.75rem] text-ink-700 backdrop-blur">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </Reveal>

              <div className={cn(i % 2 === 1 && 'lg:order-1')}>
                <SectionHeading
                  eyebrow={`For ${audience.title.split(' & ')[0].toLowerCase()}`}
                  title={audience.title}
                  lead={audience.body}
                  as="h2"
                />
                <Reveal delay={0.2}>
                  <ul className="mt-8 flex flex-wrap gap-2.5">
                    {audience.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border border-paper-300 bg-paper-50 px-4 py-2 text-[0.82rem] text-ink-600"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper-2" size="md">
        <div className="container-rb">
          <Reveal>
            <figure className="mx-auto max-w-3xl text-center">
              <blockquote className="font-display text-[clamp(1.4rem,1rem+1.6vw,2.15rem)] leading-[1.3] text-ink-900">
                &ldquo;Rigorous methods, accurate citations, quality you can defend —
                support at every stage from proposal to publication.&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[0.8rem] uppercase tracking-[0.2em] text-ink-400">
                Research Bridge
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
