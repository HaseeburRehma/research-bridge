import Link from 'next/link';
import { Clock, MessageCircle, Phone, Globe } from 'lucide-react';

import { footerNav, site } from '@/content/site';
import { BrandMark, Logo } from './logo';
import { ButtonLink } from '@/components/ui/button';

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
        <div className="grid gap-14 py-16 md:py-20 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <Link href="/" aria-label={`${site.name} — home`}>
              <Logo tone="paper" />
            </Link>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ink-300">
              Academic research consultancy and writing support for scholars, MPhil and
              PhD candidates, faculty, and institutions worldwide.
            </p>

            <ul className="mt-8 space-y-3 text-[0.9rem]">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-3 text-paper-100 transition-colors hover:text-brand-300"
                >
                  <Phone className="size-4 text-brand-400" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappText}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-paper-100 transition-colors hover:text-brand-300"
                >
                  <MessageCircle className="size-4 text-brand-400" />
                  WhatsApp
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-ink-300">
                <Globe className="size-4 text-brand-400" />
                www.{site.domain}
              </li>
              <li className="flex items-start gap-3 text-ink-300">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-400" />
                {site.hours}
              </li>
            </ul>

            <ButtonLink href="/contact" variant="ghostLight" size="sm" arrow className="mt-8">
              Start a conversation
            </ButtonLink>
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

        {/* Parent institution — the RD lockup carried in the wordmark */}
        <div className="flex flex-col gap-8 border-t border-white/10 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-16 items-center justify-center rounded-xl bg-white/95 px-4 shadow-[0_10px_28px_-14px_rgba(11,18,38,0.6)]">
              <BrandMark variant="lockup" size={42} />
            </div>
            <p className="max-w-xs text-[0.82rem] leading-relaxed text-ink-400">
              Backed by <span className="text-ink-200">Research Dexa</span> — an established
              research and legal-thought centre.
            </p>
          </div>
          <p className="max-w-md text-[0.82rem] leading-relaxed text-ink-400">
            &ldquo;{site.motto}&rdquo;
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-[0.8rem] text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-paper-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-paper-100">
              Terms of Service
            </Link>
            <Link href="/integrity" className="transition-colors hover:text-paper-100">
              Academic Integrity
            </Link>
            <Link href="/contact" className="transition-colors hover:text-paper-100">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
