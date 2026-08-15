'use client';

import { MessageCircle, Phone } from 'lucide-react';

import { site } from '@/content/site';
import { ButtonLink } from './button';
import { Reveal } from './reveal';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { Spotlight } from '@/components/motion-primitives/spotlight';

export function CtaBand({
  title = 'Tell us where you’re stuck.',
  body = 'A messy reference list, an unfinished chapter, a dataset that needs cleaning. We’ll tell you exactly how we can help — usually within one conversation.',
  primaryLabel = 'Start a conversation',
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative bg-paper-100 py-16 md:py-24">
      <div className="container-rb">
        <div className="group relative overflow-hidden rounded-[1.75rem] bg-ink-950 px-7 py-14 md:px-16 md:py-20">
          <Spotlight
            className="from-brand-400/25 via-brand-500/10 to-transparent blur-2xl"
            size={420}
          />
          <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-50" />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-brand-500/25 blur-[110px]"
          />

          <div className="relative max-w-2xl">
            <TextEffect
              as="h2"
              per="word"
              preset="blur"
              speedReveal={1.7}
              className="font-display text-[clamp(1.9rem,1.2rem+2.4vw,3rem)] leading-[1.1] text-paper-50"
            >
              {title}
            </TextEffect>

            <Reveal delay={0.15}>
              <p className="mt-6 text-[1.05rem] leading-[1.8] text-ink-200">{body}</p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact" size="lg" arrow>
                  {primaryLabel}
                </ButtonLink>
                <ButtonLink href={site.phoneHref} variant="ghostLight" size="lg">
                  <Phone className="size-4" />
                  {site.phoneDisplay}
                </ButtonLink>
                <ButtonLink href={site.whatsappText} variant="ghostLight" size="lg">
                  <MessageCircle className="size-4" />
                  WhatsApp
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="mt-8 text-[0.82rem] text-ink-400">
                {site.hours} · No obligation, no generic pitch.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
