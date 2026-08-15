import type { Metadata } from 'next';

import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { Reveal } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern engagements with Research Bridge.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of service"
        title="Terms That Govern Our Engagements"
        lead="Placeholder — to be finalised with legal review before launch. Governed by the laws of Pakistan (to be confirmed with counsel)."
        crumbs={[{ href: '/terms', label: 'Terms' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <Reveal>
            <div className="mx-auto max-w-[46rem] space-y-6 text-[1rem] leading-[1.85] text-ink-600">
              <h2 className="!mt-4 font-display text-[1.5rem] text-ink-900">1. Authorship</h2>
              <p>
                All research ideas, arguments, and final authorship remain the client&rsquo;s
                property. Research Bridge provides research support — organising, editing,
                analysing, formatting — and does not claim authorship of any deliverable.
              </p>

              <h2 className="!mt-10 font-display text-[1.5rem] text-ink-900">
                2. Client responsibilities
              </h2>
              <p>
                Clients are responsible for confirming what research assistance their
                institution permits, providing accurate briefs and source materials, and
                reviewing and approving each deliverable within the agreed timeline.
              </p>

              <h2 className="!mt-10 font-display text-[1.5rem] text-ink-900">
                3. Scope, timelines and revisions
              </h2>
              <p>
                Each engagement begins with a written scope covering deliverables, timeline
                and price. A revision round is included as standard on every deliverable.
                Additional revisions beyond the agreed scope may be handled as a change
                request.
              </p>

              <h2 className="!mt-10 font-display text-[1.5rem] text-ink-900">
                4. Payment and cancellation
              </h2>
              <p>
                Payment and cancellation terms are agreed per engagement in writing before
                work begins. Where a project is cancelled mid-engagement, fees are pro-rated
                to work completed and delivered.
              </p>

              <h2 className="!mt-10 font-display text-[1.5rem] text-ink-900">5. Confidentiality</h2>
              <p>
                All research, data, and drafts shared with Research Bridge are treated as
                confidential and are never disclosed to any third party. Everyone working on
                your project is bound to the same standard.
              </p>

              <h2 className="!mt-10 font-display text-[1.5rem] text-ink-900">
                6. Academic integrity
              </h2>
              <p>
                Research Bridge will not produce work intended to circumvent institutional
                integrity policy. Where a request appears to conflict with such policy, we
                will decline the specific task and, where possible, propose an alternative
                that stays within it.
              </p>

              <h2 className="!mt-10 font-display text-[1.5rem] text-ink-900">
                7. Governing law
              </h2>
              <p>
                These terms are governed by the laws of Pakistan. [To be confirmed with
                counsel before launch.]
              </p>

              <p className="!mt-10 text-[0.85rem] text-ink-400">
                Placeholder text; to be replaced with a version reviewed by counsel before
                serious promotion.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
