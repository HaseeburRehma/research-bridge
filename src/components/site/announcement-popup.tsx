'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { MessageCircle, Phone, Sparkles, X } from 'lucide-react';

import { site } from '@/content/site';
import { cn } from '@/lib/utils';

const EASE = [0.16, 1, 0.3, 1] as const;
const STORAGE_KEY = 'rb:announcement:dismissed:v2';
const REVEAL_DELAY_MS = 1400;
const DISMISS_TTL_DAYS = 7;

/**
 * A once-per-week "we're taking new projects" announcement banner.
 * Slides in from the bottom-right on first visit, respects the user's
 * dismissal for a week via localStorage, and pauses the page beneath
 * with a soft backdrop so it feels like news, not a nag.
 */
export function AnnouncementPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const dismissedAt = Number(raw);
        const ageMs = Date.now() - dismissedAt;
        if (Number.isFinite(dismissedAt) && ageMs < DISMISS_TTL_DAYS * 24 * 60 * 60 * 1000) {
          return;
        }
      }
    } catch {
      // Private mode or storage disabled — still show the banner, just don't remember dismiss.
    }
    const t = window.setTimeout(() => setVisible(true), REVEAL_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Soft backdrop — click to dismiss */}
          <motion.button
            type="button"
            aria-label="Close announcement"
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[60] cursor-default bg-ink-950/45 backdrop-blur-[3px]"
          />

          {/* Card */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="rb-announcement-title"
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.96 }}
            transition={{ duration: 0.65, ease: EASE }}
            className={cn(
              'fixed z-[70] w-[min(30rem,calc(100vw-1.75rem))]',
              'inset-x-3.5 bottom-3.5',
              'sm:inset-x-auto sm:bottom-6 sm:right-6',
            )}
          >
            <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-ink-900/95 text-paper-100 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              {/* Ambient glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-brand-500/30 blur-[80px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-brass-500/20 blur-[80px]"
              />

              <button
                type="button"
                onClick={dismiss}
                aria-label="Close announcement"
                className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full border border-white/12 bg-white/5 text-ink-200 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-paper-50"
              >
                <X className="size-3.5" />
              </button>

              <div className="relative p-6 sm:p-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-2xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                  <Sparkles className="size-3" />
                  New this term
                </span>

                <h2
                  id="rb-announcement-title"
                  className="mt-4 font-display text-[1.55rem] leading-[1.15] text-paper-50 sm:text-[1.7rem]"
                >
                  Taking new research projects for the 2026&ndash;27 cohort.
                </h2>

                <p className="mt-3 text-[0.94rem] leading-[1.7] text-ink-200">
                  Proposal drafting, literature reviews, data analysis, thesis and
                  journal-publication support &mdash; a short call is the fastest
                  way to see if we&rsquo;re a fit.
                </p>

                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={site.whatsappText}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismiss}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#128C7E] px-5 py-3 text-[0.9rem] font-medium text-white transition-colors hover:bg-[#0f7368]"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp us
                  </a>
                  <a
                    href={site.phoneHref}
                    onClick={dismiss}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[0.9rem] font-medium text-paper-50 transition-colors hover:border-white/30 hover:bg-white/10"
                  >
                    <Phone className="size-4" />
                    {site.phoneDisplay}
                  </a>
                </div>

                <p className="mt-4 text-[0.72rem] uppercase tracking-[0.16em] text-ink-400">
                  Replies within one working day
                </p>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
