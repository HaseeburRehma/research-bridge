import Image from 'next/image';

import { cn } from '@/lib/utils';

/**
 * The Research Dexa RD monogram — used as THE brand mark across the site.
 * Rendered as an <img>-backed component so we can serve the real client logo
 * rather than a redrawn SVG.
 */
export function BrandMark({
  className,
  variant = 'mark',
  size = 44,
  priority = false,
}: {
  className?: string;
  variant?: 'mark' | 'lockup';
  size?: number;
  priority?: boolean;
}) {
  const src = variant === 'lockup' ? '/brand/rd-lockup.png' : '/brand/rd-mark.png';
  const naturalRatio = variant === 'lockup' ? 900 / 626 : 720 / 497;
  const width = Math.round(size * naturalRatio);

  return (
    <Image
      src={src}
      alt="Research Dexa"
      width={width}
      height={size}
      priority={priority}
      className={cn('h-auto w-auto object-contain', className)}
      style={{ height: size, width: 'auto' }}
    />
  );
}

export function Logo({
  className,
  tone = 'ink',
  showTagline = true,
  priority = false,
}: {
  className?: string;
  tone?: 'ink' | 'paper';
  showTagline?: boolean;
  priority?: boolean;
}) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <span
        className={cn(
          'flex h-11 items-center justify-center rounded-xl px-2.5',
          // Give the paper-on-ink variant a soft chip so the blue RD stays legible
          // against the dark hero without introducing a hard box on the paper header.
          tone === 'paper' && 'bg-white/95 shadow-[0_6px_20px_-10px_rgba(11,18,38,0.55)]',
        )}
      >
        <BrandMark size={26} priority={priority} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[1.28rem] leading-none tracking-[-0.02em]',
            tone === 'ink' ? 'text-ink-900' : 'text-paper-50',
          )}
        >
          Research Bridge
        </span>
        {showTagline && (
          <span
            className={cn(
              'mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.24em]',
              tone === 'ink' ? 'text-ink-400' : 'text-ink-200/70',
            )}
          >
            by Research Dexa
          </span>
        )}
      </span>
    </span>
  );
}
