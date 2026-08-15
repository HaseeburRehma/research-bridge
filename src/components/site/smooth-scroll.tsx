'use client';

import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'motion/react';
import { useEffect, useRef } from 'react';

/**
 * Lenis smooth scrolling, driven by motion's frame loop so scroll-linked
 * animations stay in sync with the smoothed scroll position rather than
 * lagging a frame behind it.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      lenisRef.current?.lenis?.destroy();
      return;
    }

    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
        autoRaf: false,
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
