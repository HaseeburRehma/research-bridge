'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { MessageCircle, Phone, Plus } from 'lucide-react';

import { site } from '@/content/site';
import { cn } from '@/lib/utils';

const EASE = [0.16, 1, 0.3, 1] as const;

/** Sitewide floating call / WhatsApp control — appears once past the hero. */
export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setVisible(v > 520));

  const actions = [
    {
      label: 'WhatsApp',
      href: site.whatsappText,
      icon: MessageCircle,
      className: 'bg-[#25D366] text-white',
      external: true,
    },
    {
      label: 'Call us',
      href: site.phoneHref,
      icon: Phone,
      className: 'bg-ink-900 text-paper-50',
      external: false,
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 16 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:bottom-7 md:right-7"
        >
          <AnimatePresence>
            {open &&
              actions.map((action, i) => (
                <motion.a
                  key={action.label}
                  href={action.href}
                  {...(action.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: EASE }}
                  className={cn(
                    'flex items-center gap-2.5 rounded-full py-2.5 pl-4 pr-3 text-sm font-medium shadow-[0_16px_36px_-16px_rgba(11,18,38,0.6)]',
                    action.className,
                  )}
                >
                  {action.label}
                  <action.icon className="size-4" />
                </motion.a>
              ))}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close contact options' : 'Contact us'}
            className="relative flex size-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-[0_18px_38px_-14px_var(--color-brand-600)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/40 [animation-duration:2.8s]" />
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative"
            >
              {open ? <Plus className="size-6" /> : <MessageCircle className="size-6" />}
            </motion.span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
