import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-[transform,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] whitespace-nowrap';

const variants = {
  primary:
    'bg-brand-500 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_10px_28px_-12px_var(--color-brand-600)] hover:bg-brand-600 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_16px_34px_-12px_var(--color-brand-600)]',
  ink: 'bg-ink-900 text-paper-50 hover:bg-ink-800 shadow-[0_10px_28px_-14px_rgba(11,18,38,0.8)]',
  outline:
    'border border-ink-200 bg-transparent text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-paper-50',
  ghostLight:
    'border border-white/25 bg-white/5 text-paper-50 backdrop-blur-sm hover:bg-white/15 hover:border-white/45',
  soft: 'bg-brand-50 text-brand-700 hover:bg-brand-100',
} as const;

const sizes = {
  sm: 'h-9 px-4 text-[0.8125rem]',
  md: 'h-11 px-5',
  lg: 'h-[3.25rem] px-7 text-[0.9375rem]',
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className,
  children,
  ...rest
}: ButtonProps & { href: string } & Omit<
    React.ComponentPropsWithoutRef<typeof Link>,
    'href' | 'className' | 'children'
  >) {
  const external = href.startsWith('http') || href.startsWith('tel:');
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], sizes[size], className)}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {content}
    </Link>
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  className,
  children,
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1" />
      )}
    </button>
  );
}
