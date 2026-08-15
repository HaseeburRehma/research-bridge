import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Eyebrow } from './section';
import { Reveal } from './reveal';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';

export type Crumb = { href: string; label: string };

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  crumbs = [],
  children,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-[calc(var(--header-h)+3.5rem)] pb-20 text-paper-100 md:pb-28">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ''}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/92 to-ink-950" />
          <ProgressiveBlur
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
            direction="bottom"
            blurIntensity={0.5}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-[12%] h-80 w-[36rem] rounded-full bg-brand-500/20 blur-[120px]"
      />

      <div className="container-rb relative">
        {crumbs.length > 0 && (
          <Reveal blur={false} y={8}>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-[0.78rem] text-ink-400">
                <li>
                  <Link href="/" className="transition-colors hover:text-paper-100">
                    Home
                  </Link>
                </li>
                {crumbs.map((c, i) => (
                  <li key={c.href} className="flex items-center gap-1.5">
                    <ChevronRight className="size-3.5 opacity-50" />
                    {i === crumbs.length - 1 ? (
                      <span className="text-ink-200">{c.label}</span>
                    ) : (
                      <Link href={c.href} className="transition-colors hover:text-paper-100">
                        {c.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        <div className={cn('max-w-4xl', align === 'center' && 'mx-auto text-center')}>
          <Reveal blur={false} y={10}>
            <Eyebrow tone="paper">{eyebrow}</Eyebrow>
          </Reveal>

          <TextEffect
            as="h1"
            per="word"
            preset="blur"
            speedReveal={1.6}
            speedSegment={1.1}
            delay={0.1}
            className="mt-6 font-display text-[clamp(2.25rem,1.3rem+3.4vw,4.25rem)] leading-[1.04] text-paper-50"
          >
            {title}
          </TextEffect>

          {lead && (
            <Reveal delay={0.25}>
              <p
                className={cn(
                  'mt-7 max-w-2xl text-[1.0625rem] leading-[1.8] text-ink-200 md:text-[1.15rem]',
                  align === 'center' && 'mx-auto',
                )}
              >
                {lead}
              </p>
            </Reveal>
          )}

          {children && (
            <Reveal delay={0.35}>
              <div className={cn('mt-10', align === 'center' && 'flex justify-center')}>
                {children}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
