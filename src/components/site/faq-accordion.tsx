'use client';

import { Plus } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/motion-primitives/accordion';
import { cn } from '@/lib/utils';

export function FaqAccordion({
  items,
  tone = 'ink',
}: {
  items: readonly { q: string; a: string }[];
  tone?: 'ink' | 'paper';
}) {
  return (
    <Accordion
      className={cn(
        'divide-y border-y',
        tone === 'paper' ? 'divide-white/10 border-white/10' : 'divide-paper-300 border-paper-300',
      )}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {items.map((item) => (
        <AccordionItem key={item.q} value={item.q} className="group/faq">
          <AccordionTrigger className="w-full py-6 text-left">
            <div className="flex items-start justify-between gap-6">
              <span
                className={cn(
                  'font-display text-[1.15rem] leading-snug transition-colors duration-300 md:text-[1.28rem]',
                  tone === 'paper'
                    ? 'text-paper-50 group-hover/faq:text-brand-300'
                    : 'text-ink-900 group-hover/faq:text-brand-700',
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  'mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-data-[expanded]/faq:rotate-45',
                  tone === 'paper'
                    ? 'border-white/20 text-paper-100'
                    : 'border-paper-300 text-ink-500 group-hover/faq:border-brand-300 group-hover/faq:text-brand-600',
                )}
              >
                <Plus className="size-3.5" />
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p
              className={cn(
                'max-w-2xl pb-7 pr-12 text-[0.975rem] leading-[1.8]',
                tone === 'paper' ? 'text-ink-300' : 'text-ink-500',
              )}
            >
              {item.a}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
