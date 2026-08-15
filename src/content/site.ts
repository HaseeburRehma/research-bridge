export const site = {
  name: "Research Bridge",
  tagline: "Academic Research Consultancy",
  parent: "Research Dexa",
  domain: "researchbridge.com.pk",
  url: "https://www.researchbridge.com.pk",
  phoneDisplay: "+92 333 9381201",
  phoneHref: "tel:+923339381201",
  whatsapp: "https://wa.me/923339381201",
  whatsappText:
    "https://wa.me/923339381201?text=Hi%20Research%20Bridge%20%E2%80%94%20I%27d%20like%20to%20discuss%20a%20research%20project.",
  hours: "Monday–Saturday, 10:00 AM–7:00 PM (PKT)",
  motto: "Every great researcher needs a great team. We are that team.",
} as const;

export type NavChild = { href: string; label: string; blurb: string };
export type NavItem = { href: string; label: string; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "About Us", blurb: "Our mission, story and values" },
      { href: "/who-we-serve", label: "Who We Serve", blurb: "Scholars, students, faculty, institutions" },
      { href: "/expertise", label: "Our Expertise", blurb: "The team behind Research Bridge" },
      { href: "/disciplines", label: "Disciplines", blurb: "Fields we support" },
      { href: "/why-us", label: "Why Choose Us", blurb: "What sets our work apart" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "All Services", blurb: "Support at every stage" },
      { href: "/services/literature-review", label: "Literature Review", blurb: "Source gathering & synthesis" },
      { href: "/services/data-analysis", label: "Data & Analysis", blurb: "Collection, entry & statistics" },
      { href: "/services/academic-writing", label: "Writing & Editing", blurb: "Drafting, editing, formatting" },
      { href: "/services/citation-support", label: "Citation Support", blurb: "Reference management & audits" },
      { href: "/services/thesis-and-proposals", label: "Thesis & Proposals", blurb: "Structure, method, defense" },
      { href: "/services/publication-support", label: "Publication Support", blurb: "Journal selection to submission" },
    ],
  },
  {
    href: "/process",
    label: "How We Work",
    children: [
      { href: "/process", label: "Our Process", blurb: "Five transparent stages" },
      { href: "/pricing", label: "Ways to Work With Us", blurb: "Engagement models" },
      { href: "/integrity", label: "Academic Integrity", blurb: "Where the line sits" },
      { href: "/commitment", label: "Our Commitment", blurb: "What we will and won't do" },
      { href: "/institutions", label: "For Institutions", blurb: "Cohorts, bootcamps, retainers" },
    ],
  },
  {
    href: "/blog",
    label: "Resources",
    children: [
      { href: "/blog", label: "Blog & Insights", blurb: "Practical academic guidance" },
      { href: "/faq", label: "FAQ", blurb: "Twelve common questions" },
      { href: "/testimonials", label: "Testimonials", blurb: "What researchers say" },
    ],
  },
];

export const footerNav = [
  {
    title: "Services",
    links: [
      { href: "/services/literature-review", label: "Literature Review & Sources" },
      { href: "/services/data-analysis", label: "Data Collection & Analysis" },
      { href: "/services/academic-writing", label: "Writing, Editing & Formatting" },
      { href: "/services/citation-support", label: "Reference & Citation Support" },
      { href: "/services/thesis-and-proposals", label: "Thesis, Article & Proposal" },
      { href: "/services/publication-support", label: "Publication Support" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/who-we-serve", label: "Who We Serve" },
      { href: "/expertise", label: "Our Expertise" },
      { href: "/disciplines", label: "Disciplines" },
      { href: "/why-us", label: "Why Choose Us" },
      { href: "/institutions", label: "For Institutions" },
    ],
  },
  {
    title: "How We Work",
    links: [
      { href: "/process", label: "Our Process" },
      { href: "/pricing", label: "Ways to Work With Us" },
      { href: "/integrity", label: "Academic Integrity" },
      { href: "/commitment", label: "Our Commitment" },
      { href: "/faq", label: "FAQ" },
      { href: "/testimonials", label: "Testimonials" },
    ],
  },
];
