import type { Metadata } from 'next';

import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { FaqAccordion } from '@/components/site/faq-accordion';
import { ButtonLink } from '@/components/ui/button';
import { faqs } from '@/content/general';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Twelve common questions about working with Research Bridge — scope, confidentiality, citation styles, timelines, tools, and revisions.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="Frequently asked questions"
        title="Twelve Questions, Answered Plainly"
        lead="If yours isn’t here, ask — most engagements begin with exactly this kind of question."
        image="/images/svc-thesis.jpg"
        imageAlt="An open book beside a laptop"
        crumbs={[{ href: '/faq', label: 'FAQ' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="lg:sticky lg:top-32">
                <SectionHeading eyebrow="Still unsure?" title="Ask us directly" />
                <Reveal delay={0.15}>
                  <p className="mt-5 text-[0.98rem] leading-[1.8] text-ink-500">
                    Tell us where you&rsquo;re stuck and we&rsquo;ll tell you exactly how we
                    can help — usually within one conversation. No obligation, no generic
                    pitch.
                  </p>
                </Reveal>
                <Reveal delay={0.22}>
                  <ButtonLink href="/contact" arrow className="mt-8">
                    Start a conversation
                  </ButtonLink>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.1}>
              <FaqAccordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
