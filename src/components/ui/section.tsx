'use client';

import { cn } from '@/lib/utils';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { Reveal } from './reveal';

export function Eyebrow({
  children,
  tone = 'ink',
  className,
}: {
  children: React.ReactNode;
  tone?: 'ink' | 'paper' | 'brand';
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 text-2xs font-semibold uppercase tracking-[0.2em]',
        tone === 'ink' && 'text-ink-400',
        tone === 'paper' && 'text-brand-200',
        tone === 'brand' && 'text-brand-600',
        className,
      )}
    >
      <span
        className={cn(
          'h-px w-6',
          tone === 'paper' ? 'bg-brand-300/60' : 'bg-current opacity-40',
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = 'ink',
  align = 'left',
  className,
  titleClassName,
  as = 'h2',
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: 'ink' | 'paper';
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
  as?: 'h1' | 'h2' | 'h3';
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal blur={false} y={10}>
          <Eyebrow tone={tone === 'paper' ? 'paper' : 'ink'}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <TextEffect
        as={as}
        per="word"
        preset="blur"
        speedReveal={1.7}
        speedSegment={1.1}
        className={cn(
          'font-display text-[clamp(1.9rem,1.1rem+2.6vw,3.35rem)] leading-[1.08]',
          tone === 'paper' ? 'text-paper-50' : 'text-ink-900',
          align === 'center' && 'mx-auto max-w-3xl',
          titleClassName,
        )}
      >
        {title}
      </TextEffect>
      {lead && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              'max-w-2xl text-[1.0625rem] leading-[1.75]',
              tone === 'paper' ? 'text-ink-200' : 'text-ink-500',
              align === 'center' && 'mx-auto',
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = 'paper',
  id,
  size = 'md',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'paper' | 'paper-2' | 'ink' | 'transparent';
  id?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        size === 'sm' && 'py-16 md:py-20',
        size === 'md' && 'py-20 md:py-28',
        size === 'lg' && 'py-24 md:py-36',
        tone === 'paper' && 'bg-paper-100',
        tone === 'paper-2' && 'bg-paper-200',
        tone === 'ink' && 'bg-ink-950 text-paper-100',
        className,
      )}
    >
      {children}
    </section>
  );
}

/** A thin brand rule used to separate major bands. */
export function HairRule({ tone = 'ink' }: { tone?: 'ink' | 'paper' }) {
  return (
    <div
      className={cn(
        'h-px w-full',
        tone === 'ink'
          ? 'bg-gradient-to-r from-transparent via-ink-200 to-transparent'
          : 'bg-gradient-to-r from-transparent via-white/15 to-transparent',
      )}
    />
  );
}
