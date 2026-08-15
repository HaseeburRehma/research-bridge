import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

import { ButtonLink } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-ink-950 pt-[var(--header-h)] text-paper-100">
      <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[130px]"
      />

      <div className="container-rb relative py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-2xs uppercase tracking-[0.16em] text-ink-200 backdrop-blur">
          <Compass className="size-3.5" />
          404 — this page hasn’t been written yet
        </span>

        <h1 className="mx-auto mt-8 max-w-2xl font-display text-[clamp(2.2rem,1.4rem+3vw,3.75rem)] leading-[1.05] text-paper-50">
          You’ve reached a corner of the library that isn’t yet catalogued.
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-[1rem] leading-[1.8] text-ink-300">
          The page you were looking for either moved or never existed. Head back to the
          home page, or start a conversation and we’ll point you where you need to go.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" arrow>
            Return home
          </ButtonLink>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-paper-50 transition-colors hover:border-white/50"
          >
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
