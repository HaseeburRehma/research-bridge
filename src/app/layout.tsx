import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader } from 'next/font/google';

import './globals.css';
import { site } from '@/content/site';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { FloatingContact } from '@/components/site/floating-contact';
import { SmoothScroll } from '@/components/site/smooth-scroll';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Academic Research Consultancy`,
    template: `%s — ${site.name}`,
  },
  description:
    'Academic research consultancy and writing support for scholars, MPhil and PhD candidates, faculty, and institutions worldwide. Literature reviews, data analysis, editing, citations and publication support.',
  keywords: [
    'academic research consultancy',
    'thesis support',
    'literature review service',
    'PhD research help',
    'citation and referencing',
    'publication support',
    'Pakistan research consultancy',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Every Great Researcher Needs a Great Team`,
    description:
      'Rigorous methods, accurate citations, quality you can defend — support at every stage from proposal to publication.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Academic Research Consultancy`,
    description:
      'Support at every stage, from proposal to publication. Backed by an established academic institution.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#faf8f4',
  colorScheme: 'light',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description:
    'Academic research consultancy and writing support for scholars, MPhil and PhD candidates, faculty, and institutions.',
  url: site.url,
  telephone: site.phoneDisplay,
  parentOrganization: { '@type': 'Organization', name: site.parent },
  areaServed: 'Worldwide',
  address: { '@type': 'PostalAddress', addressCountry: 'PK' },
  openingHours: 'Mo-Sa 10:00-19:00',
  knowsAbout: [
    'Literature review',
    'Research methodology',
    'Academic editing',
    'Citation management',
    'Thesis supervision support',
    'Journal publication',
  ],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm focus:text-paper-50"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingContact />
        </SmoothScroll>
      </body>
    </html>
  );
}
