'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { TextLoop } from '@/components/motion-primitives/text-loop';
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';

const EASE = [0.16, 1, 0.3, 1] as const;

const trustChips = [
  '100+ researchers supported',
  'Backed by an established academic institution',
  'Confidentiality as standard',
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[min(100svh,54rem)] flex-col justify-end overflow-hidden bg-ink-950 pb-16 pt-[calc(var(--header-h)+4rem)] text-paper-100 md:pb-24"
    >
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-long-room.jpg"
          alt="The Long Room — a grand two-storey library corridor lined with towering shelves of leather-bound volumes"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.42]"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950" />
      <div className="absolute inset-y-0 left-0 -z-10 w-3/4 bg-gradient-to-r from-ink-950 via-ink-950/90 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-ink opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-[28rem] w-[34rem] animate-drift rounded-full bg-brand-500/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-[24rem] w-[28rem] rounded-full bg-brass-500/10 blur-[120px]"
      />
      <ProgressiveBlur
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32"
        direction="bottom"
        blurIntensity={0.4}
      />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-rb relative">
        <div className="grid items-end gap-14 lg:grid-cols-[1.55fr_1fr]">
          <div>
            <Reveal blur={false} y={12}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-2 pr-4 text-[0.78rem] text-ink-200 backdrop-blur-sm">
                <span className="flex size-6 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                  <Sparkles className="size-3.5" />
                </span>
                Support at every stage, from{' '}
                <TextLoop
                  className="font-medium text-paper-50"
                  interval={2.4}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <span>proposal</span>
                  <span>literature review</span>
                  <span>data analysis</span>
                  <span>drafting</span>
                  <span>publication</span>
                </TextLoop>
              </span>
            </Reveal>

            <TextEffect
              as="h1"
              per="word"
              preset="blur"
              speedReveal={1.35}
              speedSegment={1}
              delay={0.15}
              className="mt-8 font-display text-[clamp(2.6rem,1.2rem+5vw,5.25rem)] leading-[0.99] tracking-[-0.025em] text-paper-50"
            >
              Every Great Researcher Needs a Great Team
            </TextEffect>

            <Reveal delay={0.55}>
              <p className="mt-8 max-w-xl text-[1.05rem] leading-[1.8] text-ink-200 md:text-[1.15rem]">
                Great research shouldn&rsquo;t stall over a messy source pile, a citation
                slip, or a deadline that outran the writing. Research Bridge is the
                dependable partner between your idea and a finished, defensible piece of
                work.
              </p>
            </Reveal>

            <Reveal delay={0.68}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact" size="lg" arrow>
                  Start a conversation
                </ButtonLink>
                <ButtonLink href="/services" variant="ghostLight" size="lg">
                  See services
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Trust card */}
          <Reveal delay={0.8} className="lg:pb-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-7 backdrop-blur-md">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand-500/25 blur-3xl"
              />
              <div className="relative flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-brand-500/15 text-brand-300">
                  <ShieldCheck className="size-4.5" />
                </span>
                <p className="text-2xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                  Trusted by researchers worldwide
                </p>
              </div>

              <p className="relative mt-5 font-display text-[1.35rem] leading-snug text-paper-50">
                Rigorous methods, accurate citations, quality you can defend.
              </p>

              <ul className="relative mt-6 space-y-3 border-t border-white/10 pt-5">
                {trustChips.map((chip, i) => (
                  <motion.li
                    key={chip}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.12, duration: 0.6, ease: EASE }}
                    className="flex items-start gap-3 text-[0.875rem] leading-snug text-ink-200"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-400" />
                    {chip}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

      </motion.div>
    </section>
  );
}
