export const values = [
  {
    title: "Rigor",
    body: "Every method, citation, and claim held to a standard defensible in a viva or peer review.",
  },
  {
    title: "Confidentiality",
    body: "Your research, data, and drafts stay strictly private, always.",
  },
  {
    title: "Partnership",
    body: "We work alongside you, not instead of you — the work stays yours.",
  },
  {
    title: "Timeliness",
    body: "Academic deadlines are non-negotiable, and so is our respect for yours.",
  },
  {
    title: "Accuracy",
    body: "Citations, data, and formatting checked against your institution’s exact standard.",
  },
] as const;

export const audiences = [
  {
    slug: "independent-scholars",
    title: "Independent Scholars & Researchers",
    body: "The structural and technical support a university department would offer — literature reviews, methodological checks, publication-ready formatting.",
    image: "/images/who-scholars.jpg",
    imageAlt: "A researcher reading in a quiet library",
    highlights: ["Literature reviews", "Methodological checks", "Publication-ready formatting"],
  },
  {
    slug: "mphil-phd",
    title: "MPhil & PhD Students",
    body: "Thesis chapters, comprehensive literature reviews, data analysis, and defense prep — aligned to your supervisor’s expectations and university requirements.",
    image: "/images/who-students.jpg",
    imageAlt: "Graduate students working together over a laptop",
    highlights: ["Thesis chapters", "Data analysis", "Viva preparation"],
  },
  {
    slug: "faculty",
    title: "Faculty & Academic Staff",
    body: "Research assistance that respects your authorship and voice, so your writing time goes to the argument, not the admin.",
    image: "/images/who-faculty.jpg",
    imageAlt: "A professor teaching in a lecture hall",
    highlights: ["Manuscript preparation", "Data organization", "Journal submission"],
  },
  {
    slug: "institutions",
    title: "Institutions & Departments",
    body: "Structured, ongoing support across cohorts — ideal for thesis-writing bootcamps, publication drives, and capacity-building programs.",
    image: "/images/who-institutions.jpg",
    imageAlt: "A speaker addressing a large academic audience",
    highlights: ["Cohort programs", "Publication drives", "Progress reporting"],
  },
] as const;

export const teamRoles = [
  {
    title: "Research & Methodology Specialists",
    body: "Graduate training across the humanities, social sciences, and applied sciences — designing studies, running literature reviews, analyzing qualitative and quantitative data.",
  },
  {
    title: "Academic Editors",
    body: "Trained to strengthen clarity, structure, and academic register while preserving your argument and voice.",
  },
  {
    title: "Citation & Formatting Specialists",
    body: "APA, MLA, Chicago, Harvard, IEEE, and university-specific variants, with a verification step built into every audit.",
  },
  {
    title: "Publication Advisors",
    body: "Tracking journal scope, indexing, and turnaround so you place your work strategically, not just prestigiously.",
  },
] as const;

export const disciplineGroups = [
  {
    title: "Humanities & Islamic Studies",
    image: "/images/disc-humanities.jpg",
    imageAlt: "Antique bound volumes stacked on a shelf",
    fields: [
      "Islamic Studies, Theology & Jurisprudence",
      "History & Area Studies",
      "Philosophy & Ethics",
      "Literature & Linguistics",
    ],
  },
  {
    title: "Social Sciences",
    image: "/images/disc-social.jpg",
    imageAlt: "Three researchers in discussion",
    fields: [
      "Sociology & Anthropology",
      "Political Science & International Relations",
      "Education & Pedagogy",
      "Psychology",
    ],
  },
  {
    title: "Business, Law & Finance",
    image: "/images/disc-business.jpg",
    imageAlt: "A document being reviewed and annotated",
    fields: [
      "Islamic Finance & Banking",
      "Law & Legal Studies",
      "Business Administration & Management",
      "Economics",
    ],
  },
  {
    title: "Sciences & Applied Fields",
    image: "/images/disc-sciences.jpg",
    imageAlt: "A microscope on a laboratory bench",
    fields: [
      "Natural & Environmental Sciences",
      "Public Health & Medicine",
      "Computer Science & Emerging Technology (incl. AI Ethics)",
      "Engineering & Applied Sciences",
    ],
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Consultation",
    body: "A conversation about your question, stage, and deadline. No obligation — just clarity.",
    detail: "Fifteen minutes is usually enough to tell whether we’re the right fit, and we’ll say so if we’re not.",
  },
  {
    n: "02",
    title: "Scope & Plan",
    body: "Exactly what’s included, the timeline, and the milestones — chapter-by-chapter for a thesis, a simple estimate for a single task.",
    detail: "Written down before anything starts, so there is never a question about what was agreed.",
  },
  {
    n: "03",
    title: "Work in Progress",
    body: "Regular check-ins so you can review, ask questions, and redirect. Nothing arrives as a surprise.",
    detail: "You see the work as it develops, not as a finished block you have to accept or reject.",
  },
  {
    n: "04",
    title: "Review & Revision",
    body: "A revision round is standard — the first draft of anything, including ours, is rarely the last.",
    detail: "Built into every engagement at no extra cost, because it is part of doing the work properly.",
  },
  {
    n: "05",
    title: "Delivery",
    body: "A submission-ready deliverable, in the exact format and style your institution or journal requires.",
    detail: "Formatted, verified, and checked against the specific guidelines you’re being judged against.",
  },
] as const;

export const differentiators = [
  {
    title: "Rigorous Methods, Accurate Citations, Quality You Can Defend",
    body: "We hold every deliverable to the standard it will actually be judged by — a committee, a reviewer, an examiner.",
  },
  {
    title: "Support at Every Stage",
    body: "Most services specialize narrowly. We cover the full arc, so you’re not coordinating disconnected vendors.",
  },
  {
    title: "Backed by an Established Academic Institution",
    body: "Real academic practice, not generic freelance writing.",
  },
  {
    title: "100+ Researchers, Across Disciplines",
    body: "Experience with the formatting quirks and conventions of a wide range of fields and institutions.",
  },
  {
    title: "Confidentiality as Standard",
    body: "Your research, data, and drafts stay yours — always.",
  },
  {
    title: "Realistic About Deadlines",
    body: "We plan backward from your actual due date, with room for your review and revisions.",
  },
] as const;

export const commitments = {
  always: [
    "Scope every project honestly — including telling you what’s outside our expertise",
    "Keep your research, data, and drafts strictly confidential",
    "Verify every citation and data point against its original source",
    "Deliver on the agreed timeline, or flag delays early — never at the deadline",
    "Preserve your voice, argument, and intellectual ownership",
    "Build in a revision round as standard, not an upsell",
  ],
  never: [
    "Fabricate a citation, data point, or source",
    "Submit work on your behalf without your explicit review",
    "Share your research or data with any third party",
    "Ask you to compromise your institution’s integrity policy",
  ],
} as const;

export const integrityPillars = [
  {
    title: "Authorship Stays With You",
    body: "We support — organizing, editing, analyzing, formatting — never substituting your scholarly voice and judgment.",
  },
  {
    title: "Originality Verification",
    body: "Every written deliverable is checked against plagiarism-detection tools before delivery.",
  },
  {
    title: "Transparent Sourcing",
    body: "Every citation is checked for authenticity — no fabricated citations, no misrepresented findings.",
  },
  {
    title: "Disclosure-Ready Practice",
    body: "We help you describe our involvement accurately wherever your institution requires disclosure.",
  },
  {
    title: "Alignment With Institutional Policy",
    body: "We ask your institution’s policy at the outset and scope our support to stay within it.",
  },
] as const;

export const engagementModels = [
  {
    title: "Single-Task Support",
    body: "One specific piece — a citation audit, a literature search, a chapter edit. Priced per task, clear turnaround agreed upfront.",
    best: "Best when you know exactly what you need",
    examples: ["Citation audit", "Literature search", "Chapter edit", "Formatting pass"],
  },
  {
    title: "Chapter-by-Chapter Support",
    body: "Ongoing support across a thesis, with a consistent point of contact. Priced per chapter or as a package, with milestone check-ins.",
    best: "Our most common engagement",
    examples: ["Per-chapter scope", "Milestone check-ins", "One point of contact", "Package pricing"],
    featured: true,
  },
  {
    title: "Full Project Partnership",
    body: "End-to-end support from literature review through publication — suited to multi-year doctoral timelines and institutional programs.",
    best: "Best for multi-year doctoral work",
    examples: ["Proposal to publication", "Long-horizon planning", "Dedicated team", "Priority scheduling"],
  },
  {
    title: "Institutional & Departmental Packages",
    body: "Retainer or cohort-based support across multiple students or staff, with progress reporting back to the department.",
    best: "Best for departments and cohorts",
    examples: ["Retainer or cohort", "Progress reporting", "Workshops", "Capacity building"],
  },
] as const;

export const institutionalPrograms = [
  {
    title: "Thesis-Writing Bootcamps",
    body: "Time-boxed programs moving a cohort’s chapter or milestone forward together.",
  },
  {
    title: "Publication Drives",
    body: "Coordinated support toward a shared publication goal, including journal shortlisting and citation audits at scale.",
  },
  {
    title: "Research Capacity Building",
    body: "Ongoing embedded support raising the general standard of rigor and writing, often paired with workshops.",
  },
  {
    title: "Custom Reporting",
    body: "Progress reporting tracked against institutional goals — completion rates, publication output.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "I had eighteen months of scattered notes and no structure. Research Bridge turned it into a literature review my supervisor approved on the first read.",
    author: "MPhil Candidate",
    field: "Social Sciences",
  },
  {
    quote:
      "The citation audit alone saved my manuscript — I had no idea how many small inconsistencies had crept in over two years of drafting.",
    author: "PhD Candidate",
    field: "Natural Sciences",
  },
  {
    quote:
      "As faculty, the bottleneck was never the ideas — it was time. Reliable support for data organization meant I could finally finish the paper I’d carried for a year.",
    author: "Faculty Member",
    field: "Business & Management",
  },
] as const;

export const caseNotes = [
  {
    title: "The Stalled Literature Review",
    body: "Eight months of unorganized sources became a thematically organized chapter in three weeks — approved on first submission.",
    metric: "3 weeks",
    metricLabel: "from stuck to approved",
  },
  {
    title: "The Citation Crisis",
    body: "A returned manuscript, corrected via full citation audit, was resubmitted and accepted in the same review cycle.",
    metric: "1 cycle",
    metricLabel: "resubmitted and accepted",
  },
  {
    title: "The Data Backlog",
    body: "300+ survey responses became publication-ready tables, figures, and a defense-ready results explanation.",
    metric: "300+",
    metricLabel: "responses analyzed",
  },
  {
    title: "The Institutional Cohort",
    body: "Twelve thesis-stage students, supported through one semester, measurably improved chapter-one completion rates.",
    metric: "12",
    metricLabel: "students, one semester",
  },
] as const;

export const faqs = [
  {
    q: "Do you write the research for me?",
    a: "No. We organize, edit, and format — the ideas and intellectual ownership stay entirely yours.",
    top: true,
  },
  {
    q: "Is my data kept confidential?",
    a: "Yes, always — as a non-negotiable standard of every engagement.",
    top: true,
  },
  {
    q: "Which citation styles do you cover?",
    a: "All major styles — APA, MLA, Chicago, Harvard, IEEE — plus university- and journal-specific variants.",
  },
  {
    q: "Can you help with a project that’s already underway?",
    a: "Yes — most engagements begin partway through a project.",
  },
  {
    q: "Do you work with researchers outside Pakistan?",
    a: "Yes, internationally, entirely remote.",
    top: true,
  },
  {
    q: "How long does an engagement take?",
    a: "It depends on scope — days for a citation audit, months for full thesis support.",
    top: true,
  },
  {
    q: "What tools do you use for data analysis?",
    a: "SPSS, R, Stata, Excel for quantitative work; NVivo or manual coding for qualitative.",
  },
  {
    q: "Can institutions engage you for multiple students?",
    a: "Yes — structured support for departments and cohorts.",
  },
  {
    q: "How are projects matched to team members?",
    a: "By discipline, methodology, and stage — never through a generalist pool.",
  },
  {
    q: "What if I only need one chapter, not the whole thesis?",
    a: "That’s our most common engagement — scoped and priced independently.",
  },
  {
    q: "Can you help if English isn’t my first language?",
    a: "Yes — preserving your argument and voice while polishing register and clarity.",
  },
  {
    q: "What if I’m not satisfied with a deliverable?",
    a: "A revision round is built into every engagement as standard.",
  },
] as const;

export const beforeYouReachOut = [
  "Your research question or topic, even in draft form",
  "Your current stage: proposal, review, data, drafting, or revision",
  "Your institution’s formatting and citation requirements",
  "Your realistic deadline",
] as const;

export const whoWeWorkWith = [
  "Scholars & independent researchers",
  "MPhil & PhD students",
  "Faculty & academic staff",
  "Universities, research centers & institutions",
] as const;

export const citationStyles = [
  "APA",
  "MLA",
  "Chicago",
  "Harvard",
  "IEEE",
  "Vancouver",
  "OSCOLA",
  "Turabian",
] as const;

export const toolsUsed = [
  "SPSS",
  "R",
  "Stata",
  "NVivo",
  "Zotero",
  "Mendeley",
  "EndNote",
  "Excel",
  "Scopus",
  "Web of Science",
  "JSTOR",
  "LaTeX",
] as const;
