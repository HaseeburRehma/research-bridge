import type { Metadata } from 'next';

import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { Reveal } from '@/components/ui/reveal';
import { CtaBand } from '@/components/ui/cta-band';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Research Bridge handles the details you share — what we collect, how we use it, and how to request access or deletion.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title="How We Handle Your Information"
        lead="Placeholder — to be finalised with legal review before launch."
        crumbs={[{ href: '/privacy', label: 'Privacy' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <Reveal>
            <div className="prose-legal mx-auto max-w-[46rem] space-y-6 text-[1rem] leading-[1.85] text-ink-600">
              <p>
                Research Bridge (&ldquo;we&rdquo;, &ldquo;our&rdquo;) collects only the
                contact and project details needed to scope and deliver your engagement,
                together with basic site-usage data (page views and referrer). We do not
                sell, rent, or share client research, data, or drafts.
              </p>

              <h2 className="!mt-12 font-display text-[1.5rem] text-ink-900">What we collect</h2>
              <ul className="space-y-2.5">
                <li>
                  <strong>Enquiry details</strong> — your name, email, optional phone
                  number, role, stage, message and deadline when you submit the contact
                  form or write to us directly.
                </li>
                <li>
                  <strong>Engagement records</strong> — drafts, data and correspondence
                  shared during an active project, retained only as long as needed to
                  deliver and support it.
                </li>
                <li>
                  <strong>Site usage</strong> — anonymised page views, browser and device
                  type, and referrer information, used to understand and improve the site.
                </li>
              </ul>

              <h2 className="!mt-12 font-display text-[1.5rem] text-ink-900">
                How we use your information
              </h2>
              <p>
                We use enquiry details to reply to you and, if you engage us, to plan and
                deliver the work. Engagement records are used solely for the project they
                belong to, and are kept confidential as a non-negotiable standard.
              </p>

              <h2 className="!mt-12 font-display text-[1.5rem] text-ink-900">Confidentiality</h2>
              <p>
                Everyone working on your project is bound to confidentiality. Your research,
                data, drafts and identifying information are never shared with any third
                party — including in marketing, testimonials, or case studies — without your
                explicit, written permission.
              </p>

              <h2 className="!mt-12 font-display text-[1.5rem] text-ink-900">Your rights</h2>
              <p>
                You may request access to, correction of, or deletion of your information at
                any time. Write to us at{' '}
                <a href={`mailto:hello@${site.domain}`} className="link-underline text-brand-700">
                  hello@{site.domain}
                </a>{' '}
                or call{' '}
                <a href={site.phoneHref} className="link-underline text-brand-700">
                  {site.phoneDisplay}
                </a>{' '}
                and we will respond within seven business days.
              </p>

              <h2 className="!mt-12 font-display text-[1.5rem] text-ink-900">
                Cookies and analytics
              </h2>
              <p>
                We may use cookies for essential site function and — if enabled — a
                privacy-respecting analytics service to understand usage. No advertising
                cookies are set, and no personal data is sold or shared with advertisers.
              </p>

              <h2 className="!mt-12 font-display text-[1.5rem] text-ink-900">Changes</h2>
              <p>
                We may update this policy from time to time. Material changes will be
                surfaced clearly on this page.
              </p>

              <p className="!mt-10 text-[0.85rem] text-ink-400">
                This placeholder text will be replaced with a version reviewed by counsel
                before serious promotion. Last updated: this page will carry the actual date
                once finalised.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
