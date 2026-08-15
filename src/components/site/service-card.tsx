'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import type { Service } from '@/content/services';
import { cn } from '@/lib/utils';
import { Tilt } from '@/components/motion-primitives/tilt';

export function ServiceCard({
  service,
  className,
  showImage = true,
}: {
  service: Service;
  className?: string;
  showImage?: boolean;
}) {
  return (
    <Tilt rotationFactor={5} isRevese springOptions={{ stiffness: 240, damping: 26 }}>
      <Link
        href={`/services/${service.slug}`}
        className={cn(
          'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-paper-300 bg-paper-50 transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand-200 hover:shadow-[0_28px_60px_-32px_rgba(11,18,38,0.4)]',
          className,
        )}
      >
        {showImage && (
          <div className="relative aspect-[16/9] overflow-hidden bg-paper-200">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-ink-950/5 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-paper-50/90 px-2.5 py-1 font-display text-[0.7rem] tracking-wide text-ink-600 backdrop-blur">
              {String(service.index).padStart(2, '0')}
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h3 className="font-display text-[1.4rem] leading-snug text-ink-900 transition-colors duration-300 group-hover:text-brand-700">
            {service.short}
          </h3>
          <p className="mt-3 flex-1 text-[0.925rem] leading-relaxed text-ink-500">
            {service.promise}
          </p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-brand-600">
            Explore this service
            <ArrowUpRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Tilt>
  );
}
