import * as React from "react";
import type { Route } from "./+types/home";

/** Stable server flag: true on SSR render, false in client bundle */
const isServer = typeof document === "undefined";

/* ========================
   Meta
======================== */
export function meta({}: Route.MetaArgs) {
  const title =
    "i🩷Worksheets  -  Free printable worksheets (Pre-K to Grade 5)";
  const description =
    "Free printable worksheets for Pre-K, Kindergarten, and Grades 1 to 5. Math, reading, writing, phonics, handwriting, cursive, and seasonal activities. High-quality, kid-friendly PDFs.";

  return [
    { title },
    { name: "description", content: description },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#7c3aed" }, // purple
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
}

export function loader() {
  return { ok: true };
}

/* ========================
   Page
======================== */
export default function Home({ loaderData }: Route.ComponentProps) {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => setHydrated(true), []);

  // No links in navbar and no broken links on page.
  // Use buttons/spans only.

  return (
    <>
      <SiteHeader />

      <main className="min-h-[100dvh] bg-[#fff7fb] text-slate-900">
        <Hero />

        <div className="max-w-[1180px] mx-auto px-4 pb-14">
          <TrustBar />
          <GradeGrid />
          <SubjectGrid />
          <HowItWorks />
          <QualityPromise />
          <SeoSections />
          <FaqSections />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

/* ========================
   Header / Footer
======================== */
function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200">
      <div className="max-w-[1180px] mx-auto px-4 h-12 flex items-center justify-between">
        <div className="font-extrabold tracking-tight text-slate-900 select-none">
          <span className="mr-1">i</span>
          <span role="img" aria-label="love" className="mr-1">
            🩷
          </span>
          <span className="text-purple-700">Worksheets</span>
        </div>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-3 text-[13px] font-semibold">
            <li>
              <NavPill href="#worksheets">Worksheets</NavPill>
            </li>
            <li>
              <NavPill href="#grades">Grades</NavPill>
            </li>
            <li>
              <NavPill href="#subjects">Subjects</NavPill>
            </li>
            <li>
              <NavPill href="#faq">FAQ</NavPill>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function NavPill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
    >
      {children}
    </a>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-[1180px] mx-auto px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-600">
            <div className="font-semibold text-slate-900">
              i<span className="text-pink-500">🩷</span>Worksheets
            </div>
            <div className="mt-1">
              Printable learning worksheets for Pre-K to Grade 5.
            </div>
          </div>

          <div aria-label="Footer" className="text-sm text-slate-600">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <FooterChip>Privacy</FooterChip>
              <FooterChip>Terms</FooterChip>
              <FooterChip>Contact</FooterChip>
              <FooterChip>About</FooterChip>
            </div>
            <div className="mt-2 text-xs text-slate-500">
              Placeholder footer. Links intentionally disabled on this landing
              page.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50">
      {children}
    </span>
  );
}

/* ========================
   Sections
======================== */
function Hero() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-[1180px] mx-auto px-4 py-10 md:py-14">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Free printable worksheets for kids
            </p>

            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight">
              i<span className="text-pink-500">🩷</span>Worksheets
              <span className="block text-slate-800 mt-2">
                High-quality worksheets for Pre-K to Grade 5
              </span>
            </h1>

            <p className="mt-4 text-slate-600 max-w-[72ch]">
              A growing library of printable worksheets for math, reading,
              writing, phonics, handwriting, cursive, and seasonal activities.
              Built to be clear, kid-friendly, and easy to print.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <HeroChip color="bg-purple-600" text="Math worksheets" />
              <HeroChip color="bg-pink-500" text="Phonics and reading" />
              <HeroChip color="bg-yellow-400" text="Writing practice" />
              <HeroChip color="bg-sky-500" text="Print-friendly PDFs" />
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded-xl font-bold border border-purple-700 bg-purple-700 text-white hover:bg-purple-800 transition-colors cursor-default"
                aria-disabled="true"
                tabIndex={-1}
                title="Placeholder button"
              >
                Browse worksheets
              </button>

              <button
                type="button"
                className="px-4 py-2 rounded-xl font-semibold border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 transition-colors cursor-default"
                aria-disabled="true"
                tabIndex={-1}
                title="Placeholder button"
              >
                View grade topics
              </button>

              <div className="text-sm text-slate-500">
                Early access landing page. Content library is expanding.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-[#fff0f7] to-white p-6 md:p-8">
            <div className="grid gap-4">
              <Card
                title="Made for real learning"
                body="Skill-based worksheets aligned to common grade-level expectations: practice pages, quick checks, and review packs."
                accent="border-pink-200 bg-pink-50"
              />
              <Card
                title="Simple, printable, fast"
                body="Clean layouts, big enough for small hands, and ready for home, classroom, or tutoring."
                accent="border-yellow-200 bg-yellow-50"
              />
              <Card
                title="Quality first"
                body="Each worksheet is curated and improved for clarity and usability. No messy junk pages."
                accent="border-sky-200 bg-sky-50"
              />
            </div>

            <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-sm font-semibold text-slate-900">
                What you can do here
              </div>
              <ul
                id="grades"
                className="mt-2 text-sm text-slate-600 grid gap-2 list-disc pl-5"
              >
                <li>Find worksheets by grade: Pre-K through Grade 5</li>
                <li>Choose a subject: math, reading, writing, and more</li>
                <li>Print and practice in minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroChip({ color, text }: { color: string; text: string }) {
  return (
    <span
      className={[
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold border border-slate-200",
        color,
        "text-white",
      ].join(" ")}
    >
      {text}
    </span>
  );
}

function Card({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <div className={["rounded-2xl border p-5", accent].join(" ")}>
      <div className="text-sm font-bold text-slate-900">{title}</div>
      <p className="mt-1 text-sm text-slate-700">{body}</p>
    </div>
  );
}

function TrustBar() {
  return (
    <section className="mt-8">
      <div className="grid md:grid-cols-4 gap-3">
        {[
          { k: "Grades", v: "Pre-K to Grade 5" },
          { k: "Subjects", v: "Math, reading, writing, more" },
          { k: "Format", v: "Print-ready worksheets" },
          { k: "Style", v: "Clear layouts, kid-friendly" },
        ].map((x) => (
          <div
            key={x.k}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="text-sm font-semibold text-slate-900">{x.k}</div>
            <div className="mt-1 text-sm text-slate-600">{x.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GradeGrid() {
  const grades = [
    { t: "Pre-K worksheets", d: "Early learning, shapes, colors, fine motor" },
    { t: "Kindergarten worksheets", d: "Letters, numbers, phonics, counting" },
    {
      t: "Grade 1 worksheets",
      d: "Addition, reading basics, writing practice",
    },
    { t: "Grade 2 worksheets", d: "Place value, phonics, sentence building" },
    { t: "Grade 3 worksheets", d: "Multiplication, comprehension, grammar" },
    { t: "Grade 4 worksheets", d: "Fractions, reading, writing skills" },
    { t: "Grade 5 worksheets", d: "Decimals, long division, paragraphs" },
  ];

  return (
    <section className="mt-10">
      <h2 className="text-xl font-extrabold text-slate-900">
        Worksheets by grade
      </h2>
      <p className="mt-2 text-sm text-slate-600 max-w-[85ch]">
        Browse printable worksheets by grade level. Each grade includes targeted
        practice for math, reading, and writing, with age-appropriate layouts.
      </p>

      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {grades.map((g) => (
          <div
            key={g.t}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="text-sm font-bold text-slate-900">{g.t}</div>
            <div className="mt-1 text-sm text-slate-600">{g.d}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill bg="bg-purple-50" border="border-purple-200" text="Math" />
              <Pill bg="bg-pink-50" border="border-pink-200" text="Reading" />
              <Pill
                bg="bg-yellow-50"
                border="border-yellow-200"
                text="Writing"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SubjectGrid() {
  const subjects = [
    {
      t: "Math worksheets",
      d: "Counting, addition, subtraction, multiplication, division, fractions, decimals, word problems.",
      tag: "Most searched",
      c: "bg-purple-700",
    },
    {
      t: "Reading worksheets",
      d: "Phonics, sight words, fluency, comprehension passages, vocabulary, sequencing.",
      tag: "Parent favorite",
      c: "bg-pink-500",
    },
    {
      t: "Writing worksheets",
      d: "Handwriting practice, sentence building, punctuation, grammar, creative writing prompts.",
      tag: "Skill builder",
      c: "bg-yellow-400",
    },
    {
      t: "Alphabet and phonics",
      d: "Letter recognition, sounds, blends, digraphs, CVC words, early decoding.",
      tag: "Pre-K to Grade 2",
      c: "bg-sky-500",
    },
    {
      t: "Handwriting and cursive",
      d: "Letter tracing, spacing, penmanship, cursive practice, copywork pages.",
      tag: "Low competition",
      c: "bg-purple-500",
    },
    {
      t: "Holiday and seasonal",
      d: "Seasonal math, word searches, writing prompts, and themed practice worksheets.",
      tag: "Seasonal spike",
      c: "bg-pink-600",
    },
  ];

  return (
    <section className="mt-12">
      <h2 id="subjects" className="text-xl font-extrabold text-slate-900">
        Worksheets by subject
      </h2>
      <p className="mt-2 text-sm text-slate-600 max-w-[85ch]">
        Find printable worksheets for core skills. Start with math and reading
        for the strongest skill progression, then expand into writing,
        handwriting, and seasonal activities.
      </p>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {subjects.map((s) => (
          <div
            key={s.t}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-bold text-slate-900">{s.t}</div>
              <span
                className={[
                  "text-xs font-semibold px-2 py-1 rounded-full text-white",
                  s.c,
                ].join(" ")}
              >
                {s.tag}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill
                bg="bg-slate-50"
                border="border-slate-200"
                text="Printable"
              />
              <Pill
                bg="bg-slate-50"
                border="border-slate-200"
                text="PDF-ready"
              />
              <Pill
                bg="bg-slate-50"
                border="border-slate-200"
                text="No account"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pill({
  bg,
  border,
  text,
}: {
  bg: string;
  border: string;
  text: string;
}) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold text-slate-700",
        bg,
        border,
      ].join(" ")}
    >
      {text}
    </span>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Pick a grade level",
      body: "Choose Pre-K, Kindergarten, or Grades 1 to 5 to match your learner.",
    },
    {
      title: "Choose a subject or skill",
      body: "Math, reading, writing, phonics, handwriting, cursive, and seasonal packs.",
    },
    {
      title: "Print and practice",
      body: "Download print-ready worksheets designed for clarity and easy use.",
    },
    {
      title: "Repeat with confidence",
      body: "Build skills with steady practice, quick review sheets, and mixed skill sets.",
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-xl font-extrabold text-slate-900">
        How i🩷Worksheets works
      </h2>
      <p className="mt-2 text-sm text-slate-600 max-w-[85ch]">
        This landing page is designed to test search intent and engagement while
        the worksheet library grows over time.
      </p>

      <ol className="mt-4 grid gap-3">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex gap-3">
              <div className="shrink-0 h-8 w-8 rounded-full bg-slate-900 text-white text-sm font-bold grid place-items-center">
                {i + 1}
              </div>
              <div>
                <div className="font-semibold text-slate-900">{s.title}</div>
                <div className="mt-1 text-sm text-slate-600">{s.body}</div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function QualityPromise() {
  return (
    <section className="mt-12">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              Quality promise
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-[85ch]">
              This site focuses on quality over volume. Worksheets are curated,
              improved for clarity, and formatted to print cleanly. The goal is
              to build a long-term library that parents and teachers can trust.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full md:max-w-[420px]">
            <Badge
              title="Clear layouts"
              body="Readable spacing and kid-friendly typography."
              accent="bg-yellow-50 border-yellow-200"
            />
            <Badge
              title="Skill-based"
              body="Organized by grade, subject, and skill targets."
              accent="bg-purple-50 border-purple-200"
            />
            <Badge
              title="Print-first"
              body="Works on home printers with minimal ink waste."
              accent="bg-sky-50 border-sky-200"
            />
            <Badge
              title="Growing slowly"
              body="Built over years, not dumped overnight."
              accent="bg-pink-50 border-pink-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <div className={["rounded-2xl border p-4", accent].join(" ")}>
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-xs text-slate-600">{body}</div>
    </div>
  );
}

/* ========================
   SEO sections + Schema
======================== */
function SeoSections() {
  return (
    <section id="worksheets" className="mt-12">
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <header>
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Printable worksheets library
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            Free printable worksheets for Pre-K, Kindergarten, and Grades 1 to 5
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-[90ch]">
            i🩷Worksheets is a growing collection of printable worksheets that
            cover early learning through Grade 5. Use these worksheets for
            homeschooling, classroom centers, tutoring, homework, or skill
            review. Topics include math worksheets, reading worksheets, phonics
            practice, handwriting practice, cursive worksheets, grammar,
            vocabulary, and seasonal learning pages.
          </p>
        </header>

        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm font-bold text-slate-900">
              Popular worksheet types
            </div>
            <ul className="mt-3 text-sm text-slate-700 grid gap-2 list-disc pl-5">
              <li>Math practice worksheets: addition, subtraction, and more</li>
              <li>Reading comprehension worksheets with short passages</li>
              <li>Phonics worksheets: CVC words, blends, and digraphs</li>
              <li>Handwriting worksheets: tracing and letter formation</li>
              <li>Cursive practice worksheets for older grades</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm font-bold text-slate-900">
              Who these worksheets are for
            </div>
            <ul className="mt-3 text-sm text-slate-700 grid gap-2 list-disc pl-5">
              <li>Parents who want printable learning activities</li>
              <li>Teachers who need quick classroom worksheets</li>
              <li>Homeschool families building skill routines</li>
              <li>Tutors who want focused practice pages</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm font-bold text-slate-900">
              What to expect
            </div>
            <ul className="mt-3 text-sm text-slate-700 grid gap-2 list-disc pl-5">
              <li>Print-friendly PDF worksheets</li>
              <li>Grade-level organization and skill grouping</li>
              <li>Clear instructions and clean layout</li>
              <li>New worksheets added steadily over time</li>
            </ul>
          </div>
        </div>

        <section className="mt-8">
          <h3 className="text-lg font-extrabold text-slate-900">
            Worksheet topics by grade
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-[90ch]">
            Start with the grade that matches your learner, then focus on the
            skill areas you want to strengthen. This helps you choose worksheets
            that are appropriately challenging and useful.
          </p>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <TopicBlock
              title="Pre-K and Kindergarten worksheets"
              items={[
                "Alphabet worksheets and letter tracing",
                "Numbers, counting, and number sense",
                "Shapes, colors, and pattern worksheets",
                "Phonics foundations and early sounds",
              ]}
            />
            <TopicBlock
              title="Grades 1 to 5 worksheets"
              items={[
                "Math worksheets: operations, fractions, decimals",
                "Reading worksheets: comprehension and vocabulary",
                "Writing worksheets: grammar and paragraph practice",
                "Handwriting and cursive practice sheets",
              ]}
            />
          </div>
        </section>
      </article>
    </section>
  );
}

function TopicBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="text-sm font-bold text-slate-900">{title}</div>
      <ul className="mt-3 text-sm text-slate-600 grid gap-2 list-disc pl-5">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

/* ========================
   FAQ + JSON-LD
======================== */
function FaqSections() {
  const faqs = [
    {
      q: "Are these worksheets free to print?",
      a: "This site is being built as a free printable worksheet library. Over time, you will find more worksheets across grades and subjects.",
    },
    {
      q: "Which grades are included?",
      a: "Worksheets are planned for Pre-K, Kindergarten, and Grades 1 through 5.",
    },
    {
      q: "What subjects will you cover?",
      a: "Core focus is math, reading, and writing. You will also see phonics, alphabet practice, handwriting, cursive, and some seasonal worksheets.",
    },
    {
      q: "Are the worksheets aligned to school curricula?",
      a: "Worksheets are organized by common grade-level skills. The goal is practical, skill-based practice that fits typical classroom expectations.",
    },
    {
      q: "Will you add answer keys?",
      a: "Some worksheet types may include answers as the library grows. For early grades, many pages are practice-focused rather than test-style.",
    },
    {
      q: "Do I need an account?",
      a: "No. The intent is simple access with printable pages, without accounts.",
    },
  ];

  const websiteUrl = "https://iloveworksheets.com";
  const nowIso = new Date().toISOString();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "i🩷Worksheets",
    url: websiteUrl,
    description:
      "Free printable worksheets for Pre-K, Kindergarten, and Grades 1 to 5. Math, reading, writing, phonics, handwriting, cursive, and seasonal activities.",
    inLanguage: "en",
    dateModified: nowIso,
  };

  return (
    <section id="faq" className="mt-12" aria-label="FAQ">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-extrabold text-slate-900">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-[90ch]">
          Quick answers about printable worksheets, grades, and what to expect
          as the library grows.
        </p>

        <div className="mt-4 grid gap-3">
          {faqs.map((x) => (
            <article
              key={x.q}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="m-0 text-sm font-bold text-slate-900">{x.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{x.a}</p>
            </article>
          ))}
        </div>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </div>
    </section>
  );
}
