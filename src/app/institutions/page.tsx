import type { Metadata } from 'next';
import Image from 'next/image';
import { BarChart3, GraduationCap, Layers, Users } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { Stat } from '@/components/ui/stat';
import { institutionalPrograms } from '@/content/general';

export const metadata: Metadata = {
  title: 'For Institutions',
  description:
    'Thesis-writing bootcamps, publication drives, research capacity building and custom reporting for universities, departments and research centres.',
};

const icons = [GraduationCap, Layers, Users, BarChart3];

export default function InstitutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Institutional partnerships"
        title="Working With Universities & Research Centers"
        lead="Structured, ongoing support across cohorts — with progress reporting tracked against the goals your department actually answers for."
        image="/images/institutions-campus.jpg"
        imageAlt="Students walking across a university campus"
        crumbs={[{ href: '/institutions', label: 'For Institutions' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {institutionalPrograms.map((program, i) => {
              const Icon = icons[i];
              return (
                <RevealItem key={program.title} className="h-full">
                  <div className="group h-full rounded-2xl border border-paper-300 bg-paper-50 p-8 transition-colors duration-500 hover:border-brand-200 md:p-10">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white">
                      <Icon className="size-5.5" />
                    </span>
                    <h2 className="mt-7 font-display text-[1.45rem] leading-snug text-ink-900">
                      {program.title}
                    </h2>
                    <p className="mt-4 text-[0.98rem] leading-[1.8] text-ink-500">
                      {program.body}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 md:py-28">
        <Image
          src="/images/who-institutions.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/94 to-ink-950/70" />
        <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-40" />

        <div className="container-rb relative">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="What a cohort engagement looks like"
                title="Twelve thesis-stage students, one semester, measurably better completion"
                tone="paper"
                lead="Structured support delivered across a cohort rather than one student at a time — with reporting back to the department at each milestone."
              />
              <Reveal delay={0.2}>
                <blockquote className="mt-10 border-l-2 border-brand-500 pl-6">
                  <p className="font-display text-[1.25rem] italic leading-snug text-paper-50 md:text-[1.45rem]">
                    &ldquo;Backed by an established academic institution, and built to extend
                    that same rigor into every partnership we take on.&rdquo;
                  </p>
                </blockquote>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              <Stat value={12} label="Students supported in a single semester cohort" tone="paper" />
              <Stat value={4} label="Program formats, from bootcamp to retainer" tone="paper" />
              <Stat value={100} suffix="+" label="Researchers supported worldwide" tone="paper" />
              <Stat value={16} suffix="+" label="Disciplines actively covered" tone="paper" />
            </div>
          </div>
        </div>
      </section>

      <Section tone="paper-2" size="lg">
        <div className="container-rb">
          <SectionHeading
            eyebrow="How partnerships start"
            title="Three conversations, then a written program"
            align="center"
          />
          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                n: '01',
                title: 'Scoping with the department',
                body: 'Which cohort, which milestone, and what the department is measured on.',
              },
              {
                n: '02',
                title: 'A pilot with one group',
                body: 'A time-boxed program with a defined deliverable, so results are visible before scale.',
              },
              {
                n: '03',
                title: 'Reporting and renewal',
                body: 'Progress tracked against institutional goals — completion rates, publication output.',
              },
            ].map((step) => (
              <RevealItem key={step.n} className="h-full">
                <div className="h-full rounded-2xl border border-paper-300 bg-paper-50 p-8">
                  <span className="font-display text-[2rem] leading-none text-brand-500/25">
                    {step.n}
                  </span>
                  <h3 className="mt-5 font-display text-[1.2rem] leading-snug text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.75] text-ink-500">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <CtaBand
        title="Discuss a departmental program."
        body="Tell us the cohort, the milestone, and the semester you’re planning for. We’ll come back with a written program and a reporting structure."
        primaryLabel="Talk to us about a cohort"
      />
    </>
  );
}
