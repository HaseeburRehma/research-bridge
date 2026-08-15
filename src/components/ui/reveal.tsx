'use client';

import { motion, useInView, type Variants } from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Scroll-triggered entrance. Wraps motion/react's useInView so we keep a
 * className (motion-primitives' InView does not forward one) while matching
 * the same hidden/visible variant contract used across the site.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  blur = true,
  once = true,
  amount = 0.25,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
  amount?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref as never}
      className={cn(className)}
      initial={{ opacity: 0, y, filter: blur ? 'blur(6px)' : 'blur(0px)' }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y, filter: blur ? 'blur(6px)' : 'blur(0px)' }
      }
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE },
  },
};

/** Staggered list/grid that fires when scrolled into view. */
export function RevealGroup({
  children,
  className,
  amount = 0.15,
  stagger = 0.09,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
  stagger?: number;
  as?: 'div' | 'ul' | 'ol';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref as never}
      className={cn(className)}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article';
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag variants={staggerItem} className={cn(className)}>
      {children}
    </MotionTag>
  );
}
