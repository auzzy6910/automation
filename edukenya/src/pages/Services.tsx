const packages = [
  {
    name: "Proofread & Edit",
    price: "KES 5 / word",
    unit: "from",
    highlight: false,
    features: [
      "Grammar, spelling, punctuation",
      "Clarity & style improvements",
      "Tracked changes in Word",
      "48-hour turnaround",
      "One revision round",
    ],
  },
  {
    name: "CV / Resume Package",
    price: "KES 3,500",
    unit: "/ CV",
    highlight: true,
    features: [
      "Full rewrite + ATS-ready layout",
      "Tailored to target role",
      "Cover letter add-on available",
      "LinkedIn summary optimization",
      "Unlimited revisions for 7 days",
    ],
  },
  {
    name: "Thesis / Long-form",
    price: "from KES 15,000",
    unit: "/ project",
    highlight: false,
    features: [
      "Formatting to university / journal template",
      "APA, Harvard, MLA, or Chicago",
      "Auto-TOC, captions, pagination",
      "References & citations cleanup",
      "Dedicated timeline & milestones",
    ],
  },
];

const workflow = [
  {
    t: "Brief",
    d: "Send your draft (Word, PDF, or Google Docs) and tell me what you're aiming for. I'll quote within 24 hours.",
  },
  {
    t: "Edit",
    d: "Hand-edited in Word with tracked changes — every suggestion is yours to accept or reject.",
  },
  {
    t: "Review",
    d: "We review together. Up to two revision rounds included on every project.",
  },
  {
    t: "Deliver",
    d: "Final Word + PDF delivered through a private, password-protected client link.",
  },
];

export default function Services() {
  return (
    <section className="pt-28">
      <div className="container-edu">
        <div className="eyebrow">Services</div>
        <h1 className="mt-3 text-4xl sm:text-6xl">Editing packages</h1>
        <p className="mt-4 max-w-2xl text-neutral-300">
          Transparent starting prices for the most common projects. Every
          document is quoted to fit — the numbers below are starting points,
          not ceilings.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`glass relative flex flex-col p-8 ${
                p.highlight ? "border-accent/60 shadow-glow" : ""
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink-950">
                  Most popular
                </div>
              )}
              <div className="font-display text-2xl">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <div className="font-display text-4xl text-accent">
                  {p.price}
                </div>
                <div className="text-sm text-neutral-400">{p.unit}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-neutral-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn-ghost mt-8 self-start">
                Request a quote
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Typing Services",
              d: "Handwritten notes, scanned PDFs, or audio recordings typed into clean, formatted documents.",
            },
            {
              t: "PDF ↔ Word Conversion",
              d: "Preserve your layout perfectly when converting between PDF, Word, and Google Docs.",
            },
            {
              t: "Proposals & Business Plans",
              d: "Structured, investor-ready proposals with clean financial tables and brand styling.",
            },
            {
              t: "Annual Reports",
              d: "Magazine-grade typesetting for NGO and corporate reports, including infographics.",
            },
            {
              t: "Academic Papers",
              d: "Journal-template formatting, citation cleanup, and compliance checks.",
            },
            {
              t: "Cover Letters",
              d: "Targeted, confident one-pagers matched to your CV and the role you're chasing.",
            },
          ].map((s) => (
            <div key={s.t} className="glass p-5">
              <div className="font-display text-lg">{s.t}</div>
              <div className="mt-2 text-sm text-neutral-400">{s.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="eyebrow">How it works</div>
          <h2 className="mt-3 text-3xl sm:text-4xl">A simple workflow</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((w, i) => (
              <div key={w.t} className="glass p-6">
                <div className="font-display text-3xl text-accent">
                  0{i + 1}
                </div>
                <div className="mt-2 text-xl">{w.t}</div>
                <div className="mt-2 text-sm text-neutral-400">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
