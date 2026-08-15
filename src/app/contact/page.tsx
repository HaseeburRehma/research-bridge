import type { Metadata } from 'next';
import { Clock, Globe, ListChecks, MessageCircle, Phone, Users } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { Reveal } from '@/components/ui/reveal';
import { ContactForm } from '@/components/site/contact-form';
import { beforeYouReachOut, whoWeWorkWith } from '@/content/general';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Tell us where you’re stuck and we’ll tell you exactly how Research Bridge can help — usually within one conversation. Call, WhatsApp, or send a message.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s Talk About Your Research"
        lead="Tell us where you’re stuck, and we’ll tell you exactly how Research Bridge can help — usually within one conversation. No obligation, no generic pitch."
        image="/images/contact-desk.jpg"
        imageAlt="A quiet study desk with books and a laptop"
        crumbs={[{ href: '/contact', label: 'Contact' }]}
      />

      <Section size="lg">
        <div className="container-rb">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
            {/* Form */}
            <Reveal>
              <ContactForm />
            </Reveal>

            {/* Details */}
            <aside className="space-y-5">
              <Reveal delay={0.1}>
                <div className="rounded-2xl bg-ink-950 p-7 text-paper-100">
                  <h2 className="text-2xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                    Reach us directly
                  </h2>
                  <ul className="mt-6 space-y-4">
                    <li>
                      <a
                        href={site.phoneHref}
                        className="group flex items-center gap-3.5 text-paper-50 transition-colors hover:text-brand-300"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                          <Phone className="size-4.5" />
                        </span>
                        <span>
                          <span className="block text-[0.72rem] uppercase tracking-[0.16em] text-ink-400">
                            Call
                          </span>
                          <span className="text-[1.02rem]">{site.phoneDisplay}</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={site.whatsappText}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3.5 text-paper-50 transition-colors hover:text-brand-300"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-brand-400 transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                          <MessageCircle className="size-4.5" />
                        </span>
                        <span>
                          <span className="block text-[0.72rem] uppercase tracking-[0.16em] text-ink-400">
                            WhatsApp
                          </span>
                          <span className="text-[1.02rem]">Message us</span>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-center gap-3.5 text-ink-200">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-brand-400">
                        <Globe className="size-4.5" />
                      </span>
                      <span>
                        <span className="block text-[0.72rem] uppercase tracking-[0.16em] text-ink-400">
                          Website
                        </span>
                        <span className="text-[1.02rem]">www.{site.domain}</span>
                      </span>
                    </li>
                  </ul>

                  <div className="mt-7 flex items-start gap-3.5 border-t border-white/10 pt-6">
                    <Clock className="mt-0.5 size-4 shrink-0 text-brand-400" />
                    <p className="text-[0.88rem] leading-relaxed text-ink-300">
                      {site.hours}
                      <br />
                      Messages outside these hours are answered the next business day.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="rounded-2xl border border-paper-300 bg-paper-50 p-7">
                  <h2 className="flex items-center gap-2.5 text-2xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                    <Users className="size-4 text-brand-500" />
                    Who we work with
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {whoWeWorkWith.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[0.92rem] leading-snug text-ink-600"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.26}>
                <div className="rounded-2xl border border-brand-200 bg-brand-50 p-7">
                  <h2 className="flex items-center gap-2.5 text-2xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                    <ListChecks className="size-4" />
                    Before you reach out
                  </h2>
                  <p className="mt-4 text-[0.88rem] leading-relaxed text-brand-800">
                    Not required — but having these to hand makes the first reply far more
                    useful:
                  </p>
                  <ul className="mt-5 space-y-3">
                    {beforeYouReachOut.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[0.9rem] leading-snug text-brand-900"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </Section>
    </>
  );
}
