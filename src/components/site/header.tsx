'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { ChevronDown, Menu, MessageCircle, Phone, X } from 'lucide-react';

import { nav, site } from '@/content/site';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { ButtonLink } from '@/components/ui/button';
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // Every page opens on a dark hero band, so the unscrolled header sits on ink.
  const onDark = !scrolled && !mobileOpen;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div
        className={cn(
          'transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          scrolled
            ? 'bg-paper-100/85 shadow-[0_1px_0_0_var(--color-paper-300),0_18px_40px_-32px_rgba(11,18,38,0.5)] backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <div className="container-rb">
          <div className="flex h-[var(--header-h)] items-center justify-between gap-6">
            <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
              <Logo tone={onDark ? 'paper' : 'ink'} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
              {nav.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                      onDark
                        ? isActive(item.href)
                          ? 'text-paper-50'
                          : 'text-ink-200 hover:text-paper-50'
                        : isActive(item.href)
                          ? 'text-ink-900'
                          : 'text-ink-500 hover:text-ink-900',
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          'size-3.5 transition-transform duration-300',
                          openMenu === item.label && 'rotate-180',
                        )}
                      />
                    )}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3.5 -bottom-0.5 h-px bg-brand-500"
                        transition={{ duration: 0.45, ease: EASE }}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.children && openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
                        transition={{ duration: 0.28, ease: EASE }}
                        className="absolute left-1/2 top-full w-[min(30rem,90vw)] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-paper-300 bg-paper-50/95 p-2 shadow-[0_30px_60px_-24px_rgba(11,18,38,0.28)] backdrop-blur-xl">
                          <ul className="grid gap-0.5 sm:grid-cols-2">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="group/link block rounded-xl px-3.5 py-3 transition-colors duration-200 hover:bg-brand-50"
                                >
                                  <span className="block text-[0.9rem] font-medium text-ink-900 transition-colors group-hover/link:text-brand-700">
                                    {child.label}
                                  </span>
                                  <span className="mt-0.5 block text-[0.78rem] leading-snug text-ink-400">
                                    {child.blurb}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={site.phoneHref}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-medium transition-colors',
                  onDark
                    ? 'text-ink-200 hover:text-paper-50'
                    : 'text-ink-500 hover:text-ink-900',
                )}
              >
                {site.phoneDisplay}
              </a>
              <ButtonLink href="/contact" size="sm" arrow>
                Start a conversation
              </ButtonLink>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className={cn(
                'flex size-11 items-center justify-center rounded-full border backdrop-blur transition-colors lg:hidden',
                onDark
                  ? 'border-white/20 bg-white/5 text-paper-50'
                  : 'border-paper-300 bg-paper-50/70 text-ink-900',
              )}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        <ScrollProgress className="h-px bg-brand-500" springOptions={{ stiffness: 220, damping: 40 }} />
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[var(--header-h)] z-40 overflow-y-auto bg-paper-100 lg:hidden"
          >
            <div className="container-rb flex min-h-full flex-col pb-10 pt-4">
              <nav aria-label="Mobile">
                <ul className="divide-y divide-paper-300 border-y border-paper-300">
                  {nav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.4, ease: EASE }}
                    >
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="flex-1 py-4 font-display text-2xl text-ink-900"
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <button
                            type="button"
                            aria-label={`Toggle ${item.label} links`}
                            onClick={() =>
                              setMobileSection((s) => (s === item.label ? null : item.label))
                            }
                            className="flex size-10 items-center justify-center rounded-full text-ink-400"
                          >
                            <ChevronDown
                              className={cn(
                                'size-5 transition-transform duration-300',
                                mobileSection === item.label && 'rotate-180',
                              )}
                            />
                          </button>
                        )}
                      </div>
                      <AnimatePresence initial={false}>
                        {item.children && mobileSection === item.label && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                            className="overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block border-l border-paper-300 py-2.5 pl-4 text-[0.95rem] text-ink-500"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                            <li className="h-3" />
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink href="/contact" size="lg" arrow className="w-full">
                  Start a conversation
                </ButtonLink>
                <div className="grid grid-cols-2 gap-3">
                  <ButtonLink href={site.phoneHref} variant="outline" size="lg">
                    <Phone className="size-4" /> Call
                  </ButtonLink>
                  <ButtonLink href={site.whatsappText} variant="outline" size="lg">
                    <MessageCircle className="size-4" /> WhatsApp
                  </ButtonLink>
                </div>
                <p className="mt-3 text-center text-sm text-ink-400">{site.hours}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
