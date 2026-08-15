export type Service = {
  slug: string;
  index: number;
  title: string;
  short: string;
  promise: string;
  intro: string;
  included: string[];
  forWho: string;
  image: string;
  imageAlt: string;
  pullQuote?: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "literature-review",
    index: 1,
    title: "Literature Review & Source Gathering",
    short: "Literature Review & Sources",
    promise: "The foundation every chapter rests on — and where most momentum is lost.",
    intro:
      "We map the scholarly conversation so your contribution is clearly positioned within it. Not a summary of what exists, but an argument that builds toward the gap your work fills.",
    included: [
      "Systematic & narrative review support",
      "Searches across Scopus, Web of Science, JSTOR & discipline indexes",
      "Screening for relevance, credibility & recency",
      "Thematic synthesis matrices & gap identification",
      "Draft review chapters aligned to your structure",
    ],
    forWho:
      "Graduate students starting a thesis, faculty preparing an article, institutions needing a defensible review of existing scholarship.",
    image: "/images/svc-literature.jpg",
    imageAlt: "Library shelves densely packed with bound academic volumes",
    pullQuote:
      "A strong literature review doesn’t just summarize — it argues. We write reviews that build toward your research gap.",
    deliverables: [
      "Annotated source library",
      "Thematic synthesis matrix",
      "Gap analysis memo",
      "Draft review chapter",
    ],
  },
  {
    slug: "data-analysis",
    index: 2,
    title: "Data Collection, Entry & Analysis",
    short: "Data Collection & Analysis",
    promise: "From raw material to analyzable evidence — cleanly, accurately, defensibly.",
    intro:
      "Data handled in a way your methodology chapter can stand behind: documented decisions, reproducible steps, and outputs formatted for the page they’ll appear on.",
    included: [
      "Survey & questionnaire design support",
      "Data entry & cleaning, quantitative and qualitative",
      "Statistical analysis: SPSS, R, Stata, Excel",
      "Qualitative coding & thematic analysis (NVivo or manual)",
      "Publication-ready tables, charts & figures",
    ],
    forWho:
      "Researchers running surveys, experiments, interviews, or secondary data analysis who need methodologically sound handling from collection through interpretation.",
    image: "/images/svc-data.jpg",
    imageAlt: "Analytical charts displayed across a monitor",
    deliverables: [
      "Cleaned, documented dataset",
      "Analysis output & syntax files",
      "Publication-ready tables and figures",
      "Plain-language results narrative",
    ],
  },
  {
    slug: "academic-writing",
    index: 3,
    title: "Academic Writing, Editing & Formatting",
    short: "Writing, Editing & Formatting",
    promise: "Strong ideas deserve writing that carries them clearly.",
    intro:
      "Drafting, developmental editing, and line-level polish that strengthens structure and register while preserving the voice and argument that make the work yours.",
    included: [
      "Chapter & full-manuscript drafting support",
      "Developmental editing for structure & argument flow",
      "Line editing & proofreading for academic register",
      "Formatting to university, journal & funder styles",
      "Plagiarism & originality checks",
    ],
    forWho:
      "Students finalizing chapters, faculty under deadline, and multilingual researchers polishing academic English without losing nuance.",
    image: "/images/svc-writing.jpg",
    imageAlt: "A researcher writing by hand at a wooden desk",
    deliverables: [
      "Developmental edit report",
      "Tracked-changes manuscript",
      "Clean formatted version",
      "Originality check summary",
    ],
  },
  {
    slug: "citation-support",
    index: 4,
    title: "Reference Management & Citation Support",
    short: "Reference & Citation Support",
    promise: "Citation errors are among the most common — and most avoidable — reasons a strong manuscript gets sent back.",
    intro:
      "Every reference verified against its original source, every style rule applied consistently, and a library you can keep using long after the engagement ends.",
    included: [
      "Reference library setup: Zotero, Mendeley, EndNote",
      "APA, MLA, Chicago, Harvard, IEEE & more",
      "Bibliography compilation & verification",
      "Citation accuracy audits against original sources",
    ],
    forWho:
      "Anyone finalizing a manuscript, thesis, or proposal who wants absolute confidence every citation is correct.",
    image: "/images/svc-citation.jpg",
    imageAlt: "A fountain pen resting on an open notebook",
    deliverables: [
      "Configured reference library",
      "Verified bibliography",
      "Citation audit report",
      "In-text citation corrections",
    ],
  },
  {
    slug: "thesis-and-proposals",
    index: 5,
    title: "Thesis, Article & Proposal Assistance",
    short: "Thesis, Article & Proposal",
    promise: "From a one-page concept note to a full doctoral thesis.",
    intro:
      "Structural and methodological guidance at whichever stage you’re at — shaped by people who have supervised theses and sat on the examining side of the table.",
    included: [
      "Research proposal development & refinement",
      "Thesis structuring & chapter planning",
      "Methodology design & justification",
      "Defense and viva preparation",
      "Revise-and-resubmit response letters",
    ],
    forWho:
      "MPhil and PhD candidates at any stage, and researchers preparing proposals for funders, ethics committees, or publication.",
    image: "/images/svc-thesis.jpg",
    imageAlt: "An open book beside a laptop on a study desk",
    deliverables: [
      "Chapter-by-chapter outline",
      "Methodology justification",
      "Viva question bank & rehearsal notes",
      "Response-to-reviewer letter",
    ],
  },
  {
    slug: "publication-support",
    index: 6,
    title: "Publication Support",
    short: "Publication Support",
    promise: "Getting published is its own discipline.",
    intro:
      "We help you choose the right venue, meet its exact requirements, and respond effectively when reviewers push back — so your work lands where it will actually be read.",
    included: [
      "Journal shortlisting by scope, indexing & fit",
      "Manuscript formatting to journal guidelines",
      "Cover letters & response-to-reviewer letters",
      "Guidance on avoiding predatory journals",
    ],
    forWho:
      "Researchers and faculty submitting to peer-reviewed journals, and scholars seeking the strongest fit for their work.",
    image: "/images/svc-publication.jpg",
    imageAlt: "An open journal on a light surface",
    pullQuote:
      "Publishing well is a strategy, not luck. We help you place your work where it will actually be read, cited, and count toward your career.",
    deliverables: [
      "Ranked journal shortlist",
      "Journal-formatted manuscript",
      "Cover letter draft",
      "Reviewer response strategy",
    ],
  },
];

export const engagementSteps = [
  { n: "01", title: "Share your details & goals", body: "Tell us the topic, the stage, and the deadline you’re working to." },
  { n: "02", title: "We assess and scope the work", body: "A written scope: what’s included, what it costs, and when it lands." },
  { n: "03", title: "We deliver with regular check-ins", body: "Progress you can see, so nothing arrives as a surprise." },
  { n: "04", title: "You review, we revise", body: "A revision round is standard on every engagement, never an upsell." },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
