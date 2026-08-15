# Research Bridge

Marketing site for **Research Bridge** — the academic research consultancy backed by **Research Dexa** (the RD monogram in the mark). Copy comes from the client-approved content doc; the plan follows the Phase 1 MVP brief while going beyond it to a full 19-page site so nothing sits on a "coming soon" panel.

```
Next.js 16 (App Router, static export-friendly)
Tailwind v4 (design tokens in globals.css)
motion + Lenis (smooth scrolling, driven by motion's frame loop)
motion-primitives (a curated subset, copied into src/components/motion-primitives)
Web3Forms (contact form → your inbox, zero backend)
```

## Local development

```bash
pnpm install
pnpm dev            # http://localhost:3200
pnpm build          # type-checks + prerenders every route
pnpm start          # serve the production build
```

## Routes

| URL | Purpose |
|---|---|
| `/` | Hero, marquee of disciplines, services grid, trust band with counters, why-us, process, integrity, testimonials, top FAQs, blog teaser, CTA |
| `/about` `/who-we-serve` `/expertise` `/disciplines` `/why-us` | Company narrative and audience |
| `/services` + `/services/[slug]` (×6) | Overview and detail pages for every service in the doc |
| `/process` `/pricing` `/integrity` `/commitment` `/institutions` | How we work |
| `/blog` + `/blog/[slug]` (×13) | Full articles for every title in the resources list |
| `/faq` `/testimonials` `/contact` | Q&A, case notes, contact form |
| `/privacy` `/terms` | Legal placeholders (flagged for counsel) |
| `/sitemap.xml` `/robots.txt` | SEO |

## Design system

Everything is tokenised in `src/app/globals.css` under `@theme`.

- **Brand blue** `#5170FF` — sampled from the Research Dexa mark and expanded into a 50 → 900 ramp
- **Ink** — deep navy `#070b1a` for dark bands and text
- **Paper** — warm neutrals `#faf8f4` for the body
- **Brass** — an academic warm accent for glows and highlights
- **Type** — Inter for UI, Newsreader (serif) for display headings

Reusable primitives live in `src/components/ui/*` (button, section heading, page hero, CTA band, stat, reveal, markdown renderer). Sitewide chrome is in `src/components/site/*` (header with mega-menu, footer, floating call/WhatsApp, smooth-scroll wrapper).

## Motion

- **Lenis** smooth scroll is bound to motion's frame loop in `src/components/site/smooth-scroll.tsx` so scroll-linked animations stay in sync.
- **Scroll progress bar** sits under the sticky header (`ScrollProgress` primitive) and on every article page.
- **`Reveal` / `RevealGroup`** are the two building blocks used across every section — blur+slide entrance triggered on scroll, staggered for grids.
- Hero uses a parallax cover image, `TextEffect` for the headline reveal, and `TextLoop` for the "proposal → publication" verb cycle.
- Service cards use `Tilt`; the header has an animated ink line; CTA bands use `Spotlight`; the disciplines strip and tools list use `InfiniteSlider` with an edge mask; the pricing card uses `BorderTrail`.
- All motion is gated by `prefers-reduced-motion` — the globals.css block collapses durations to near-zero.

## Contact form

`POST /api/contact` accepts JSON, validates on the server, and forwards to Web3Forms.

Set the access key before deploying:

```bash
# .env.local
WEB3FORMS_ACCESS_KEY=your-key-from-web3forms.com
```

Without the key the endpoint returns a helpful error asking the visitor to call or WhatsApp, so the form fails gracefully.

Form features: honeypot field, email regex validation, inline field errors, sticky values on error, a friendly success state, animated status transitions, and a mobile-first layout.

## Brand & imagery

- `public/brand/research-dexa.png` — the RD monogram with the white background removed, used in the footer alongside "Backed by Research Dexa"
- `public/images/*` — 26 landscape covers, 13 blog covers, sourced from Unsplash and matched carefully to the content
- The bridge mark used sitewide is drawn in SVG in `src/components/site/logo.tsx` (a span between two piers, in the brand blue)

## Deploying

The build produces a fully static site (except the `/api/contact` route). Vercel, Netlify, or Cloudflare Pages all work with zero config — set `WEB3FORMS_ACCESS_KEY` and go. Point `researchbridge.com.pk` at the host from the registrar.

## Phase 2 (from the MVP plan)

Everything the plan lists as Phase 2 is already in place: individual service pages, dedicated Who We Serve / Process / Pricing / Integrity / Institutions pages, all thirteen blog articles, full FAQ and testimonials pages. What remains for a real launch:

1. Get the Web3Forms key and swap in the receiving email
2. Replace the placeholder Privacy / Terms with counsel-reviewed copy
3. Collect and attribute real testimonials to replace the illustrative ones
4. Add Google Analytics (or Plausible) if you want traffic data
