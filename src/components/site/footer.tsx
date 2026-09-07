import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { footerNav, site } from '@/content/site';
import { BrandMark, Logo } from './logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-paper-200">
      <div className="pointer-events-none absolute inset-0 bg-grid-ink opacity-[0.55]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[130px]"
      />

      <div className="container-rb relative">
        {/* ── Top: Brand + navigation columns ───────────────── */}
        <div className="grid gap-12 py-14 md:py-20 lg:grid-cols-[1.15fr_2fr] lg:gap-16">
          <div>
            <Link href="/" aria-label={`${site.name} — home`}>
              <Logo tone="paper" />
            </Link>
            <p className="mt-6 max-w-sm text-[0.94rem] leading-relaxed text-ink-300">
              Academic research consultancy for scholars, MPhil and PhD
              candidates, faculty, and institutions worldwide.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[0.86rem] font-medium text-paper-100 backdrop-blur transition-colors hover:border-brand-400/50 hover:bg-brand-500/15 hover:text-paper-50"
            >
              Start a conversation
              <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="text-2xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.9rem] text-ink-300 transition-colors duration-200 hover:text-paper-50"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Parent lockup ─────────────────────────────────── */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between md:py-10">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex h-14 items-center justify-center rounded-xl bg-white/95 px-3.5 shadow-[0_10px_28px_-14px_rgba(11,18,38,0.6)] sm:h-16 sm:px-4">
              <BrandMark variant="lockup" size={36} />
            </div>
            <p className="max-w-xs text-[0.8rem] leading-relaxed text-ink-400 sm:text-[0.82rem]">
              Backed by <span className="text-ink-200">Research Dexa</span> — an
              established research and legal-thought centre.
            </p>
          </div>
          <p className="max-w-md text-[0.8rem] leading-relaxed text-ink-400 sm:text-[0.82rem]">
            &ldquo;{site.motto}&rdquo;
          </p>
        </div>

        {/* ── Legal ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[0.78rem] text-ink-400 sm:flex-row sm:items-center sm:justify-between md:py-7 md:text-[0.8rem]">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6">
            <Link href="/privacy" className="transition-colors hover:text-paper-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-paper-100">
              Terms of Service
            </Link>
            <Link href="/integrity" className="transition-colors hover:text-paper-100">
              Academic Integrity
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
