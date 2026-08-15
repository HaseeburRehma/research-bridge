export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  body: string;
};

export const categories = [
  "Literature Review",
  "Citations",
  "Publishing",
  "Data & Methods",
  "Writing",
  "Doctoral Life",
] as const;

export const posts: Post[] = [
  {
    slug: "systematic-literature-review-without-losing-momentum",
    title: "How to Conduct a Systematic Literature Review Without Losing Momentum",
    excerpt:
      "Turn a sprawling reading list into an argument with a precise question, two-pass screening, and thematic organization.",
    category: "Literature Review",
    readingTime: "7 min read",
    date: "2026-07-28",
    image: "/images/blog/systematic-review.jpg",
    imageAlt: "Rows of library shelving in soft focus",
    featured: true,
    body: `Most literature reviews do not fail because the researcher read too little. They fail because the researcher read without a stopping rule, and eight months later has four hundred PDFs and no chapter.

A systematic review is not a heavier version of a normal review. It is a *lighter* one, because every decision is made once, in advance, and then simply followed.

## Start with a question narrow enough to answer

"What does the literature say about microfinance?" is not a review question. It is a subject heading. A review question specifies a population, an intervention or phenomenon, and an outcome — and it implies which studies are in and which are out.

Compare: *"How has group-lending microfinance affected household savings behaviour in South Asia since 2010?"* That question tells you the databases to search, the date cut-off, the geography filter, and — crucially — when to stop.

If your question does not tell you when to stop, it is not yet a question.

## Write the protocol before the first search

A protocol is one page. It records:

- The databases you will search, and why those
- Your exact search strings, per database
- Inclusion and exclusion criteria
- The date range and language limits
- How disagreements about inclusion get resolved

Writing this down costs an hour. Not writing it down costs you the ability to describe your method in the viva, and invites the question every examiner eventually asks: *how do you know you didn’t just find the studies that agreed with you?*

## Screen in two passes, never one

The single biggest source of lost momentum is reading full texts too early. Screen in two passes.

**Pass one — titles and abstracts only.** Decide in under thirty seconds per record. You are answering one question: could this plausibly meet the criteria? Err toward inclusion; a false positive costs you five minutes later, a false negative costs you a source you never learn about.

**Pass two — full text.** Now apply the criteria strictly, and record the reason for every exclusion. Those reasons become your PRISMA flow diagram, and the diagram is what makes the review auditable.

## Extract into a matrix, not into prose

Do not start writing paragraphs while you read. Build a synthesis matrix: one row per study, columns for method, sample, context, key finding, and limitation. Add a column for the theme you think it belongs to, and expect that column to change three times.

The matrix is the review. Once it is full, the themes are visible as clusters of rows, the gaps are visible as empty cells, and the writing becomes description of a structure that already exists.

## Organize by theme, never by study

The most common structural failure in a graduate literature review is the annotated bibliography in disguise: *Ahmed (2018) found… Khan (2019) found… Rahman (2021) found…* Each paragraph is about a study. None of them are about the field.

Organize by claim instead. Each section advances one point about the state of knowledge, and studies appear as evidence for or against that point. Several studies belong in the same paragraph when they agree; the interesting paragraphs are the ones where they don’t.

## End at the gap, deliberately

A review is an argument, and its conclusion is your research question. By the final section the reader should already be able to guess what you are about to study, because you have shown them precisely where the scholarship stops.

Name the gap concretely. Not "more research is needed" — which is true of everything — but "no study to date has examined this mechanism in a context where X holds, and the theoretical reason to expect a different result is Y."

That sentence is why your project exists. Everything before it was building toward being able to write it.`,
  },
  {
    slug: "five-citation-mistakes",
    title: "Five Citation Mistakes That Quietly Undermine Strong Research",
    excerpt:
      "Mismatched references, inconsistent formatting, secondary citation, and the other errors reviewers catch first.",
    category: "Citations",
    readingTime: "5 min read",
    date: "2026-07-14",
    image: "/images/blog/citation-mistakes.jpg",
    imageAlt: "A red pen resting on an open book",
    featured: true,
    body: `Reviewers form an impression of a manuscript’s care long before they finish assessing its argument. Citations are where that impression is made, because citations are the one part of a paper that can be checked in seconds and either holds up or does not.

Here are the five errors we find most often in citation audits — none of which reflect the quality of the underlying research, and all of which cost it credibility.

## 1. The in-text citation that isn’t in the reference list

The most common error, and the easiest to catch. It usually appears when a paragraph is moved between drafts, or when a source is cut from the bibliography during trimming but survives in the body.

Every citation audit should begin with a mechanical reconciliation in both directions: every in-text citation appears in the list, and every list entry is cited at least once. A reference manager does not do this for you if you have been typing citations by hand in some places.

## 2. Secondary citation presented as primary

You read Hassan (2020), who discusses Weber’s argument, and you cite Weber. You have now claimed to have read something you have not, and if Hassan characterised it loosely, you have inherited the error without knowing.

If you genuinely cannot access the original, cite it honestly: *(Weber, 1922, as cited in Hassan, 2020)*. It is a slightly weaker sentence and a much stronger paper. Reviewers who know the original literature notice this immediately, and it is one of the fastest ways to lose an examiner’s confidence.

## 3. Year and edition drift

A source cited as 2015 in one chapter and 2016 in another; a second edition in the list and a first edition’s page numbers in the text. This happens when sources are gathered across years, from different databases, some of which record the online-first date and some the issue date.

Verify every entry against the actual publication, not against another database record. Google Scholar’s exported citations are frequently wrong about page ranges and occasionally about years.

## 4. Style applied inconsistently across sections

APA in the body, something closer to Harvard in the footnotes, and a bibliography with mixed capitalisation of titles. Almost always a sign that different chapters were written at different times, or that co-authors used different tools.

Pick the style, find the *official* manual rather than a university summary page, and apply it in one dedicated pass at the end. Do not attempt to maintain consistency continuously while drafting — you will not, and the effort is better spent on the argument.

## 5. Over-citation of the wrong kind

Four sources appended to an uncontroversial sentence, and none attached to the genuinely contestable claim two lines later. Citation density is not a measure of scholarship; citation *placement* is.

Cite where a reader could reasonably ask "says who?" Do not cite the general and uncontested. And when several sources support one claim, ask whether all of them are actually doing work, or whether three of them are there because they were in the folder.

## The underlying discipline

Every one of these is a verification failure rather than a knowledge failure. The fix is structural: keep a single reference library from the first day, add each source at the moment you read it rather than at the end, and treat the final citation pass as a distinct piece of work with its own time budget — not something to be squeezed into the last evening before submission.`,
  },
  {
    slug: "choosing-the-right-journal",
    title: "Choosing the Right Journal: Fit Matters More Than Prestige",
    excerpt:
      "Scope alignment, indexing, turnaround time, and how to spot a mismatch before you submit.",
    category: "Publishing",
    readingTime: "6 min read",
    date: "2026-06-30",
    image: "/images/blog/choosing-journal.jpg",
    imageAlt: "An open book photographed from above",
    featured: true,
    body: `The instinct is to submit to the highest-ranked journal that might conceivably take the paper, and work downward through rejections. It is a reasonable-sounding strategy that routinely costs researchers eighteen months.

A better one starts from fit.

## Scope is a real constraint, not a formality

Desk rejection — rejection without review — is overwhelmingly a scope decision. The editor reads the abstract, concludes the paper is not what the journal’s readers come to it for, and returns it within a week. Nothing about the paper’s quality entered the decision.

Read the scope statement, then read the last two issues. The scope statement is aspirational; the last two issues are the truth. If nothing published recently resembles your paper in method, subject, or level of abstraction, the fit is wrong regardless of what the statement says.

## Ask what the journal is indexed in, and why it matters to you

Indexing determines who finds your work and, in many systems, whether it counts. Scopus, Web of Science, and discipline-specific indexes each matter differently depending on your institution’s promotion criteria and your national research council’s recognised list.

Find out which list governs your career *before* you shortlist. A well-regarded journal that your institution does not recognise is a year of work that does not count toward the thing you needed it to count toward.

## Weigh turnaround honestly against your timeline

Many journals publish median times to first decision. Where they do not, the received-and-accepted dates printed on recent articles will tell you.

A nine-month first decision is not a problem for a faculty member with a long horizon. It is a serious problem for a doctoral candidate who needs a publication before submission, and for whom a rejection at month nine leaves no room to place the paper elsewhere.

## Read the reference list of your own paper

Your citations are a map of your scholarly conversation. If six of your key sources appeared in the same journal, that journal’s readers are already engaged with your question, and its reviewers will understand your framing without being persuaded of the field’s basic premises first.

This is the single most reliable fit signal available, and it costs nothing to check.

## The predatory-journal check

Four questions, in this order:

1. **Is it indexed where it claims to be?** Verify on the index’s own site, not on the journal’s.
2. **Is the editorial board real and reachable?** Pick two names and check their institutional pages. Predatory journals list scholars who never agreed to serve.
3. **Is the turnaround implausibly fast?** Genuine peer review does not conclude in seventy-two hours.
4. **When is the fee mentioned?** Legitimate article-processing charges are disclosed openly before submission. A fee that first appears after acceptance is the defining pattern.

Any single failure is reason enough to walk away. Publication in a predatory venue is difficult to undo — the paper is now published, so a reputable journal cannot take it.

## Shortlist three, in order

Choose a reach, a target, and a solid fit — then format for the first and submit. If it is rejected, the second submission should take days rather than weeks, because you decided in advance where it was going.

The researchers who publish steadily are rarely the ones with the best individual papers. They are the ones who never spend three months deciding where to send the next one.`,
  },
  {
    slug: "common-data-analysis-pitfalls",
    title: "Common Data Analysis Pitfalls in Graduate Research",
    excerpt:
      "Why most analysis errors trace back to decisions made before the analysis even starts.",
    category: "Data & Methods",
    readingTime: "6 min read",
    date: "2026-06-16",
    image: "/images/blog/data-pitfalls.jpg",
    imageAlt: "A screen displaying dense analytical data",
    body: `By the time a supervisor sees an output table, the decisive errors have usually already happened — in the instrument, the sampling, or the coding scheme. Analysis is where problems become visible, not where they originate.

## Measuring something adjacent to what you claim

A questionnaire item asks how satisfied respondents are with a service. The paper concludes something about service *quality*. These are different constructs, and the gap between them is not closed by a good regression.

Before collecting anything, write the sentence you hope to put in your conclusion, then ask whether the instrument can actually support it. If it cannot, change the instrument, not the sentence.

## Running the analysis the software makes easy

SPSS makes a t-test easy. That is not a reason for your data to be analysed by one. Assumptions — independence, distribution, homogeneity of variance, adequate cell sizes — are conditions, not formalities, and the software will happily produce a p-value when none of them hold.

Choose the test from the question and the data structure, then check its assumptions explicitly and report the check. An examiner who sees the assumption test reported stops worrying about the rest.

## Treating missing data as absent rather than informative

Deleting incomplete cases is a decision with consequences, not a cleanup step. If responses are missing because a question was sensitive, the people who skipped it differ systematically from those who did not, and listwise deletion has just biased your sample.

Report how much data was missing, where, and what you did about it. This is a paragraph, not an appendix, and reviewers look for it.

## Coding qualitative data without an audit trail

Thematic analysis is not less rigorous than statistics; it is rigorous differently. The rigour lives in the trail: an initial codebook, documented revisions, examples of coded extracts, and — where the design calls for it — a second coder with reported agreement.

Themes that appear in the results without any account of how they were derived read as impressions. The same themes, with the derivation shown, read as findings.

## Fishing, then reporting the catch

Twenty comparisons at p < .05 will produce roughly one significant result from pure noise. Running many and reporting the interesting ones is how a field fills with results that do not replicate.

Decide the primary analysis in advance. Exploratory work is legitimate and worth doing — but label it exploratory, correct for multiplicity where appropriate, and do not let a discovered pattern quietly become the hypothesis the study was designed to test.

## Confusing statistical and practical significance

With a large enough sample, trivial differences become significant. A two-point difference on a hundred-point scale may be real and still mean nothing to anyone.

Report effect sizes and confidence intervals alongside p-values, and say plainly what the magnitude means in the context of your field. "Significant" answers whether an effect is likely present; only effect size answers whether anyone should care.

## The habit that prevents most of this

Write the methodology chapter before you collect the data. Not the final version — the working version, in full sentences, describing exactly what you will do and why.

Almost every pitfall above becomes obvious while writing that chapter, and every one of them is cheaper to fix before the data exists than after.`,
  },
  {
    slug: "research-proposal-approved-first-attempt",
    title: "Writing a Research Proposal That Gets Approved on the First Attempt",
    excerpt: "Falsifiable questions, justified methods, and honest feasibility.",
    category: "Doctoral Life",
    readingTime: "6 min read",
    date: "2026-06-02",
    image: "/images/blog/research-proposal.jpg",
    imageAlt: "A person writing notes in a notebook",
    body: `A proposal is not an essay about a topic. It is a case that a specific, answerable question is worth answering, that you have a defensible way to answer it, and that you can do so with the time and access you actually have.

Committees reject proposals for a small number of recurring reasons. Nearly all of them are avoidable.

## The question must be falsifiable

"Exploring the impact of social media on youth" cannot be answered, only discussed. A committee reading it cannot picture the finding, so it cannot judge whether the study is worth approving.

A good question implies its own answer’s shape. *"Does daily use of image-based platforms predict body-image dissatisfaction among undergraduate women in Lahore, controlling for baseline self-esteem?"* — a reader immediately knows what data would settle it, and what a null result would look like.

If you cannot describe the result that would prove you wrong, the question is not ready.

## The literature section justifies the question, nothing else

Proposal literature reviews sprawl because they try to demonstrate reading. Their actual job is narrower: establish that the question has not been answered, and that there is theoretical reason to expect a particular answer.

Three to five pages, ending at the gap. Everything that does not build toward the gap belongs in the eventual thesis chapter, not here.

## Methods must be justified, not merely stated

"A questionnaire will be distributed to 200 respondents" states a method. It does not justify one. Why a survey rather than interviews? Why 200 — what does that give you in power terms? How are they sampled, and what does the sampling frame exclude?

Every methodological choice should be followed by the reason it was chosen over the obvious alternative. That single habit distinguishes proposals that pass from proposals that come back with a page of questions.

## Feasibility is assessed, and honesty helps you

Committees have watched students propose forty interviews with senior officials and complete eleven. They are reading for realism.

State your access explicitly: which institution, which gatekeeper, whether permission is already secured. Include the ethics timeline as a real dependency. Where a risk exists, name it and give the fallback. A proposal that says "if access to Group A is refused, the design remains viable with Group B" reads as competence, not doubt.

## The timeline must contain the parts that actually take time

Most student timelines allocate months to data collection and weeks to analysis and writing. Real projects run the other way.

Include ethics approval, instrument piloting, transcription, supervisor turnaround, and revision rounds. A timeline showing three months for writing is more credible than one showing three weeks, because everyone reading it has written a thesis.

## Write the abstract last, and make it exact

The abstract is what circulates, and often the only part every committee member reads closely. It needs the question, the design, the sample, and the intended contribution — in that order, in about two hundred words, with no throat-clearing.

If the abstract is vague, the committee arrives at the proposal already unsure what you are proposing, and nothing later in the document fully recovers.`,
  },
  {
    slug: "preparing-for-your-thesis-defense",
    title: "Preparing for Your Thesis Defense: What Committees Actually Test",
    excerpt: "Methodological justification, limitations, and rehearsing out loud.",
    category: "Doctoral Life",
    readingTime: "5 min read",
    date: "2026-05-19",
    image: "/images/blog/thesis-defense.jpg",
    imageAlt: "A presenter speaking in front of a large screen",
    body: `Candidates prepare for the defense by re-reading the thesis. Committees are not testing whether you remember it. They are testing whether you understand the decisions inside it well enough to defend the ones you might have made differently.

## Every choice will be questioned as a choice

The recurring form of examination question is: *why this, rather than that?* Why this framework, this sample size, this method of coding, this exclusion?

For each significant decision, you should be able to state the alternative you rejected and the reason. "I used thematic analysis" is an answer that invites follow-up. "I considered grounded theory, but the study tested an existing framework rather than building one, so thematic analysis fitted the aim" ends the line of questioning.

Make a list of your twenty most consequential decisions. Write two sentences on each. That list is the core of your preparation.

## Limitations are a test of judgement

Every study has limitations, and committees know yours better than you would like. What they are assessing is whether you know which ones matter.

Weak: "The sample size was small." Strong: "With 84 respondents the study was underpowered to detect interaction effects, so the moderation analysis should be read as exploratory — which is why the conclusions rest on the main effects."

Naming a limitation and bounding its consequence demonstrates control. Listing limitations generically suggests you have not thought about them.

## Know the shape of your field’s disagreements

Examiners often come from adjacent positions. If a live methodological or theoretical dispute touches your work, you should be able to characterise both sides fairly and say where you stand and why.

You are not required to have resolved the dispute. You are required to know it exists.

## Rehearse aloud, to someone who will interrupt

Silent re-reading builds recognition, not recall. Speaking builds recall.

Present your study in ten minutes to someone outside your field, and let them stop you whenever a term is unclear. Then do it again in three minutes. The compression forces you to identify what is actually central, and the central version is what you will need when a question arrives from an unexpected angle.

## "I don’t know" is an available answer

Used precisely, it is a strong one: *"I don’t know — that wasn’t examined in this design. It would need a longitudinal sample, and it’s the natural next study."*

Improvising confidently past a gap is the failure mode examiners are actually watching for. A candidate who marks the edge of their evidence is demonstrating exactly the judgement the degree certifies.

## On the day

Bring a clean copy with your own tabs. Answer the question asked rather than the one you prepared. Take the pause before answering — silence reads as consideration, and speed rarely reads as confidence.

And remember what the meeting is: your supervisor has judged the work ready. The defense is where you demonstrate that the judgement inside it is yours.`,
  },
  {
    slug: "apa-mla-chicago-harvard-what-differs",
    title: "APA, MLA, Chicago, Harvard: What Actually Differs, and Why It Matters",
    excerpt: "The discipline-specific logic behind each citation style.",
    category: "Citations",
    readingTime: "5 min read",
    date: "2026-05-05",
    image: "/images/blog/citation-styles.jpg",
    imageAlt: "Bound books arranged on a dark shelf",
    body: `Citation styles look like arbitrary rules about punctuation. They are not. Each encodes what its discipline considers most important about a source, and knowing the logic makes the rules almost predictable.

## APA puts the date first because recency is evidence

*(Ahmed, 2021)*. In psychology, education, and most social sciences, a finding’s date bears directly on its weight: methods improve, populations shift, and a 1998 result may have been superseded. Putting the year in every in-text citation lets a reader assess currency without turning to the bibliography.

APA also uses sentence case for article titles and initials rather than full first names — both consistent with a field where the finding matters more than the individual authorial voice.

## MLA puts the page first because the text is the evidence

*(Ahmed 47)*. In literary and cultural study, the argument is made *about a passage*, and a reader may want to check it. The page number is what makes verification possible; the date rarely changes what a 1912 novel says.

MLA gives full author names and title case, because in the humanities the author and the specific work are part of the argument rather than a delivery mechanism for a result.

## Chicago offers two systems, for two kinds of work

**Notes-bibliography** — the footnote system — suits history and the humanities, where a citation frequently carries commentary: provenance, a competing account, a translation note. Footnotes hold prose; parenthetical citations cannot.

**Author-date** is Chicago’s science-facing variant, and behaves much like APA.

Choosing between them is a choice about whether your citations need to say anything beyond pointing.

## Harvard is a family, not a standard

There is no single Harvard authority. It is a general author-date convention that each university implements slightly differently — which is why "Harvard style" from one institution’s guide will not match another’s.

If your institution specifies Harvard, use *your institution’s* guide as the authority. Do not import a formatting profile from elsewhere and assume it matches.

## IEEE numbers because engineering cites densely

*[7]*. When a paragraph may cite a dozen prior systems, author-date citations would overwhelm the sentence. Numbered references keep the text readable and the reference list ordered by first appearance.

## Why the differences matter beyond compliance

Two practical reasons.

First, style errors signal carelessness in the one place a reviewer can verify carelessness cheaply — and that impression carries into how the rest is read.

Second, styles are not interchangeable at the level of *information collected*. MLA needs page ranges APA often does not; Chicago notes may need publisher location; IEEE needs a specific author-initial format. Choosing your style late means going back to sources for details you did not record.

Decide the style at the start, configure your reference manager to it, and capture full metadata as you go. Switching later is mechanical only if the underlying data is complete — and it usually is not.`,
  },
  {
    slug: "time-management-for-graduate-researchers",
    title: "Time Management for Graduate Researchers",
    excerpt: "Why a calendar beats a to-do list for hitting thesis deadlines.",
    category: "Doctoral Life",
    readingTime: "5 min read",
    date: "2026-04-21",
    image: "/images/blog/time-management.jpg",
    imageAlt: "A wall calendar marking dates",
    body: `A thesis is not a large task. It is several hundred small ones, spread across a period long enough that nothing feels urgent until suddenly everything is. To-do lists handle tasks. They do not handle time, which is the actual scarce resource.

## Lists lie about capacity

A to-do list can hold thirty hours of work on a day containing four. It gives no signal that you have over-committed, and produces the specific exhaustion of finishing a productive day with a longer list than you started with.

A calendar cannot lie. Work placed in a calendar occupies real hours, and when the week is full, the fullness is visible. The discipline is not writing things down; it is assigning them a time.

## Protect writing hours the way you protect a class

Writing is the only activity in a doctorate that nobody schedules for you, and it is the one thing the degree is assessed on. Reading, meetings, teaching, and admin all arrive with their own deadlines and will consume every unallocated hour.

Place two to three writing blocks in the week, in your best hours, before anything else claims them. Treat them as immovable. Ninety minutes, four times a week, produces a thesis; occasional eight-hour heroics do not, because they cannot be sustained across three years.

## Plan backward from the submission date

Take the deadline. Subtract the university’s binding and formatting period. Subtract your supervisor’s turnaround on the full draft — ask, do not assume; three weeks is common. Subtract your own revision time. Subtract a buffer for the disruption that will happen.

What remains is your true drafting window, and it is always shorter than the one on the official timeline. Planning backward is how people discover in month four that they need to start writing now, rather than in month fourteen.

## Give tasks a definition of done

"Work on Chapter 3" has no end state, which is why it reappears for eleven consecutive days. "Draft the sampling section, 600 words" ends. Finished tasks generate momentum; perpetual tasks generate avoidance.

The most useful trick in academic writing is to stop mid-flow, at a point where you know the next sentence. Starting the next session then costs nothing, and the blank-page cost is where most days are lost.

## Separate reading from research

Reading feels productive and is nearly infinite. Left unbounded, it will absorb the hours meant for analysis and writing, and it is the most common way a second year disappears.

Cap it. One reading block per day, with a purpose stated before it starts. If it is not serving a section you are writing, it is a hobby with a defensible cover story.

## Track hours for one week, honestly

Not to optimise — to calibrate. Almost every researcher who does this discovers that their forty-hour week contains twelve to eighteen hours of focused work, and that the rest is admin, email, and low-value reading.

That number is not a failure. It is the real budget, and plans built on it survive contact with the year. Plans built on the imaginary forty do not.`,
  },
  {
    slug: "spot-a-predatory-journal",
    title: "How to Spot a Predatory Journal Before You Submit",
    excerpt: "Four checks — indexing, editorial board, turnaround, and fee timing.",
    category: "Publishing",
    readingTime: "4 min read",
    date: "2026-04-07",
    image: "/images/blog/predatory-journals.jpg",
    imageAlt: "A stack of hardbound books",
    body: `Predatory journals collect a fee, publish nearly anything, and provide no meaningful peer review. Their damage is durable: a paper published in one cannot be resubmitted elsewhere, and its presence on a CV raises questions about everything listed near it.

The invitation emails have improved considerably. The underlying signals have not.

## Check the indexing claim at the index, not the journal

Predatory journals list Scopus, Web of Science, and DOAJ on their homepages routinely. Verify by searching the index’s own site for the journal title or ISSN.

Watch for near-miss impact metrics too. "Global Impact Factor", "Universal Impact Factor", and similar are invented services that sell numbers. The genuine article is Clarivate’s Journal Impact Factor, and it exists only for journals in the Web of Science Core Collection.

## Check whether the editorial board is real and consenting

Pick two board members and search their institutional pages. Predatory journals list scholars who never agreed to serve, and sometimes people who are dead.

Also look for what is missing: no institutional affiliations, no contact addresses beyond a Gmail account, no named editor-in-chief. A legitimate journal is transparent about who is responsible for it, because that responsibility is the product.

## Check the turnaround promise

"Peer review completed within 72 hours." "Publication within one week of acceptance."

Real peer review requires finding two or three qualified reviewers, who then read a manuscript in the time their own work allows. Four to twelve weeks to a first decision is normal. Anything dramatically faster is describing a process that does not include review.

## Check when the fee appears

Legitimate open-access journals disclose article-processing charges openly, before submission, on a page you can find without asking. The charge is a business model, not a secret.

Predatory journals disclose the fee after acceptance — a moment engineered so that withdrawing feels like losing something you have already won. If you cannot find the fee policy before submitting, that is the answer.

## Two further signals

**Absurdly broad scope.** A journal covering "engineering, medicine, humanities and social sciences" has no coherent reviewer pool, because no such pool exists.

**Solicitation by flattery.** Unsolicited email praising a paper of yours and inviting a submission — often in a field adjacent to but not actually yours — is a mail-merge, not a compliment.

## If you have already submitted

Withdraw in writing, immediately, and keep the correspondence. Some journals will claim a withdrawal fee; you generally owe nothing if no review has occurred and you have not signed a transfer of copyright.

If it has already been published, talk to your supervisor or research office before doing anything else. The paper cannot simply be resubmitted elsewhere — it exists — and the route forward depends on your institution’s policy and the journal’s actual copyright position. It is recoverable more often than people assume, but not by ignoring it.`,
  },
  {
    slug: "qualitative-quantitative-or-mixed-methods",
    title: "Qualitative, Quantitative, or Mixed Methods: Choosing Based on Your Question",
    excerpt: "Working backward from the evidence you actually need.",
    category: "Data & Methods",
    readingTime: "5 min read",
    date: "2026-03-24",
    image: "/images/blog/methods-choice.jpg",
    imageAlt: "Printed bar and pie charts on a document",
    body: `Methodological choice is frequently made on temperament — some researchers like numbers, others like interviews — and then justified afterward. The justification is usually visible as such.

The question decides. Work backward from the evidence that would actually settle it.

## Quantitative answers how much, how many, how often, and whether a relationship holds

If your question concerns magnitude, frequency, distribution, or whether an association survives controls, you need numbers on enough cases to support inference.

Quantitative work requires that the construct can be measured with reasonable validity, and that you can reach a sample large enough to detect the effect you expect. Both are constraints to check before committing, not after.

What it will not tell you is why. A significant coefficient establishes that something moves together; it is silent on mechanism.

## Qualitative answers how, why, and what it is like

If your question concerns process, meaning, interpretation, or the experience of a phenomenon from the inside, you need depth rather than breadth.

Qualitative work requires access to participants who can speak to the phenomenon, and enough analytic discipline to derive themes from data rather than from expectation. It will not tell you how common something is, and a well-designed qualitative study does not attempt to.

The most frequent error is treating a small qualitative sample as a weak quantitative one — reporting that "seven of twelve participants mentioned X" as if it were a prevalence estimate.

## Mixed methods answers a question that genuinely has two parts

Mixed methods is not a way of strengthening a study by adding a second dataset. It is appropriate when the question contains two components requiring different evidence, and the design specifies how the strands relate.

Three common designs:

- **Explanatory sequential** — quantitative first, then qualitative to explain the pattern. Use when you expect a result you will need to interpret.
- **Exploratory sequential** — qualitative first, then quantitative to test what emerged. Use when the constructs are not yet well defined in your context.
- **Convergent** — both in parallel, compared at interpretation. Use when you want corroboration from independent angles.

Say which you are using and why. A study that collects both without specifying the relationship produces two thin studies rather than one strong one.

## The feasibility filter

Mixed methods roughly doubles the work: two instruments, two analyses, two literatures on method, and an integration argument. It is often the right choice for a funded team and the wrong one for a single candidate on a three-year timeline.

Choosing a well-executed single-method study over a rushed mixed-methods one is a judgement examiners respect — and one you should be able to state plainly in the viva.

## The test

Write the sentence you want in your conclusion. Then ask what evidence would make a sceptical reader accept it.

If the answer involves a number, you are quantitative. If it involves an account, you are qualitative. If it genuinely involves both, and you can say how they connect, you are mixed — and you now have the justification paragraph your methodology chapter needs.`,
  },
  {
    slug: "using-ai-tools-in-academic-research",
    title: "Using AI Tools in Academic Research: Where the Line Actually Is",
    excerpt: "Documentation, accuracy, and disclosure in a fast-evolving policy landscape.",
    category: "Writing",
    readingTime: "6 min read",
    date: "2026-03-10",
    image: "/images/blog/ai-in-research.jpg",
    imageAlt: "A screen showing structured data output",
    body: `Institutional policy on AI is being written while researchers are already using the tools. The result is genuine uncertainty about what is permitted — and a temptation to resolve it by not asking.

A more durable approach: reason from the principles that were already in place, because they have not changed.

## The principle that has not changed

Academic integrity has always rested on two commitments: the intellectual work is yours, and your claims about sources are true.

Neither commitment is about which tools you used. A calculator does not compromise authorship; a research assistant does not either, provided their contribution is acknowledged where convention requires. AI tools are assessed the same way — by whether your authorship survives and your sourcing remains honest.

## Where AI use is generally uncontroversial

- **Language polishing** of text you wrote — grammar, register, concision. Long-accepted from human editors, particularly for multilingual researchers.
- **Reformatting** — converting citation styles, restructuring tables, adjusting to journal templates.
- **Explaining concepts to you** — the same role as a textbook or a colleague, where the output informs your understanding rather than appearing in your text.
- **Code assistance** for analysis you designed and can verify line by line.

## Where it becomes a problem

- **Generating substantive argument or interpretation** that appears as your scholarly reasoning. This is the authorship line, and it is the one that matters.
- **Producing citations.** Language models fabricate references that look entirely plausible — correct-seeming authors, journals, volumes, and DOIs for papers that do not exist. Fabricated citations are a serious integrity finding regardless of intent, and "the tool produced it" is not a defence.
- **Summarising sources you have not read**, then citing them. You are vouching for a characterisation you cannot verify.
- **Analysing data in ways you cannot explain.** If you cannot reconstruct and defend the procedure, you cannot defend the finding.

## The verification rule

Anything an AI tool produces that ends up in your work must be verifiable by you, from the original source, before it goes in.

Every citation checked against the actual paper. Every factual claim traced. Every analytical step reproducible. This is not an AI-specific standard — it is the standard that already applied to notes, to co-authors, and to research assistants.

## Disclosure

Norms vary and are moving, so check three places: your institution’s academic integrity policy, your supervisor’s expectations, and the target journal’s author guidelines. Many publishers now require a statement on AI use, and most prohibit listing an AI system as an author — reasonably, since authorship entails accountability.

Where disclosure is required, be specific and unembarrassed: *"Language-editing assistance was provided by [tool] for grammar and clarity; all content, analysis, and citations are the author’s own and were verified against original sources."*

Vague disclosure attracts more scrutiny than precise disclosure. So does the absence of any.

## Keep a use log

A short running note of which tools you used, for what, and when. It costs a line per session.

If a question ever arises — and in the current environment, questions arise — the difference between a researcher who can immediately describe their practice and one reconstructing it from memory is the difference between a short conversation and a long one.`,
  },
  {
    slug: "competitive-scholarship-application",
    title: "Building a Competitive Scholarship or Fellowship Application",
    excerpt: "Fit, specificity, and giving your recommenders real material to work with.",
    category: "Doctoral Life",
    readingTime: "5 min read",
    date: "2026-02-24",
    image: "/images/blog/scholarship-application.jpg",
    imageAlt: "A person writing on a printed page",
    body: `Selection panels read hundreds of applications in a compressed period. Most are competent, and competence does not distinguish. What distinguishes is evidence of fit and specificity — two things generic applications cannot fake.

## Fit is assessed first, and it is checkable

Every scheme funds something particular: a discipline, a region, a career stage, a policy goal. Panels begin by asking whether you are what the scheme is for.

Read the scheme’s own description of its purpose, and read the profiles of recent recipients. Then make the alignment explicit rather than leaving the panel to infer it. If the scheme funds research with development impact, your application should say what impact, on whom, through what mechanism.

Applications that could have been sent to any funder are rejected quickly, and correctly.

## Specificity is the strongest available signal

"I am passionate about improving education in rural communities" is a sentence anyone can write.

"I want to test whether the teacher-mentoring model piloted in three Punjab districts holds in schools without reliable electricity, because the original evaluation excluded them" is a sentence only someone who has done the reading can write.

The second demonstrates knowledge, specificity, and a real gap. It is also more interesting to read, which matters more than it should at application two hundred.

## The research proposal must be legible to a non-specialist

Panels are usually mixed-discipline. Your assessor may be three fields away.

Lead with the problem in plain language, then the question, then the approach. Technical detail belongs after the reader is oriented, not before. If a colleague from another department cannot restate your project after one read, the panel will not either.

## Recommenders need material, not a request

The strongest letters are specific, and specificity requires that your recommender has the details in front of them. Send, four weeks ahead:

- The scheme’s description and criteria
- Your draft proposal and personal statement
- A short note on what you would like emphasised, and why
- A reminder of concrete things you did in their course, lab, or supervision — with dates

This is not presumptuous; it is standard, and experienced referees expect it. A letter that says "she completed a difficult replication study in my methods course, identifying an error in the original coding scheme" carries weight. "A strong and diligent student" does not.

## Budget and timeline are assessed as evidence of realism

Underestimating costs does not read as modesty. It reads as inexperience — and panels have seen projects fail from exactly that.

Cost the work honestly, justify each line briefly, and build in contingency. If the scheme caps funding below the true cost, say how the remainder is covered.

## Write it early enough to leave it alone

The most common practical failure is submitting a first draft under deadline pressure. Applications improve substantially on rereading after a break, and the improvements are the specific kind — vague sentences becoming concrete, claims acquiring evidence.

Finish two weeks early. Reread cold. The version you send should not be the version you wrote.`,
  },
  {
    slug: "writing-academic-english-as-a-multilingual-researcher",
    title: "Writing Academic English as a Multilingual Researcher",
    excerpt: "Why register, not grammar, is usually the real editing need.",
    category: "Writing",
    readingTime: "5 min read",
    date: "2026-02-10",
    image: "/images/blog/academic-english.jpg",
    imageAlt: "Open books arranged on a table",
    body: `Multilingual researchers are frequently told their English "needs work" without being told which part. The assumption is grammar. In practice, grammar is rarely the issue — the manuscripts we edit are usually grammatically sound and stylistically mismatched.

The gap is register: the specific conventions of academic English, which are learned by immersion rather than taught, and which differ from academic conventions in other languages.

## Hedging is a convention, not a weakness

English academic writing hedges claims heavily. *The results suggest. This may indicate. One possible explanation is.*

To a writer trained in a tradition that values assertive scholarly statement, this reads as a lack of confidence, and the instinct is to strengthen it. But in English-language journals, an unhedged claim reads as overreach, and reviewers respond to it as a failure of scholarly caution rather than as conviction.

Calibrate the hedge to the evidence. Strong evidence: *demonstrates*. Correlational evidence: *is associated with*. A plausible interpretation: *may reflect*. The precision of the hedge is itself a signal of methodological awareness.

## Metadiscourse carries the structure

English academic prose signposts constantly. *This section examines. Having established X, we turn to Y. Three factors are considered below; the first is.*

Some traditions consider this redundant, since a well-organised text should not need to announce its own organisation. English readers do not experience it as redundancy — they use it to navigate, and its absence makes an argument feel harder to follow than it is.

Adding explicit signposting is often the single highest-impact edit to a manuscript that reviewers described as "difficult to follow".

## Sentence length is doing work

Long sentences with multiple subordinate clauses are standard in German, Arabic, and Urdu academic prose, and carry sophistication in those traditions. In English they are read as unclear.

The convention is one main idea per sentence, with the subject early and the verb close behind it. This is not a simplification of thought — the complexity moves into how sentences relate rather than into how each is built.

## The article system is genuinely hard, and matters less

If your first language has no articles, *a/an/the* will remain the most persistent surface difficulty, and it is worth knowing that it barely affects how your argument is received. Reviewers notice article errors and read past them.

Spend your editing effort on register and structure, which affect whether the argument lands, and leave the articles to a final proofreading pass.

## What good editing preserves

The purpose of editing is not to make your writing sound as though a native speaker wrote it. It is to remove the friction between your argument and the reader, so the argument is assessed on its merits.

Your framing, your emphasis, the way you construct a case — these are yours, and they are frequently the more interesting for having been formed in another intellectual tradition. An editor who flattens those has done damage, not work.

## A practical habit

Choose three recent papers in your target journal and read them for structure rather than content. Mark how they open a section, how they signal a transition, how they hedge a finding.

That is the register you are writing into, and it is learnable by direct observation far faster than by general instruction.`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const featuredPosts = posts.filter((p) => p.featured);
