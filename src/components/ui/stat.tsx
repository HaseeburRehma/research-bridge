'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

import { AnimatedNumber } from '@/components/motion-primitives/animated-number';
import { cn } from '@/lib/utils';

export function Stat({
  value,
  suffix = '',
  prefix = '',
  label,
  tone = 'ink',
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  tone?: 'ink' | 'paper';
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (inView) setN(value);
  }, [inView, value]);

  return (
    <div ref={ref} className={cn('flex flex-col gap-2', className)}>
      <div
        className={cn(
          'flex items-baseline font-display text-[clamp(2.5rem,1.8rem+2.2vw,3.75rem)] leading-none tracking-[-0.03em]',
          tone === 'paper' ? 'text-paper-50' : 'text-ink-900',
        )}
      >
        {prefix}
        <AnimatedNumber
          value={n}
          springOptions={{ bounce: 0, duration: 1800 }}
        />
        {suffix}
      </div>
      <p
        className={cn(
          'max-w-[16rem] text-[0.85rem] leading-relaxed',
          tone === 'paper' ? 'text-ink-300' : 'text-ink-500',
        )}
      >
        {label}
      </p>
    </div>
  );
}
