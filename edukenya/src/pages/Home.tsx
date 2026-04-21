import { Link } from "react-router-dom";
import BeforeAfter from "../components/BeforeAfter";
import { portfolio } from "../data/portfolio";

const services = [
  {
    title: "CV & Resume Writing",
    desc: "ATS-friendly resumes and cover letters that get interviews — rewritten, restructured, and typeset.",
  },
  {
    title: "Thesis & Dissertation",
    desc: "University-compliant formatting: APA/Harvard/MLA, TOC, captions, pagination, references.",
  },
  {
    title: "Proofreading & Editing",
    desc: "Grammar, style, and clarity edits — tracked changes so you can see every suggestion.",
  },
  {
    title: "Business & Proposals",
    desc: "Pitch decks, proposals, annual reports, and long-form documents with polished typesetting.",
  },
];

const stats = [
  { k: "500+", v: "Documents edited" },
  { k: "98%", v: "On-time delivery" },
  { k: "24 hr", v: "Typical turnaround" },
  { k: "9 yrs", v: "Of experience" },
];

export default function Home() {
  const featured = portfolio.slice(0, 3);
  const hero = portfolio[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        <div className="container-edu grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="eyebrow mb-4">Document editing · Nairobi</div>
            <h1 className="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Documents,
              <br />
              <span className="text-accent">refined</span> for every reader.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-300">
              EduKenya is a document editing studio helping students,
              professionals, and brands deliver CVs, theses, proposals, and
              reports that are clean, credible, and ready for their moment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/portfolio" className="btn-primary">
                View Portfolio
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-ghost">
                Start a Project
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "CVs & Resumes",
                "Theses & Dissertations",
                "Proposals",
                "Business Docs",
                "Proofreading",
              ].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-purple-500/10 blur-2xl" />
            <BeforeAfter
              before={hero.before}
              after={hero.after}
              alt={hero.title}
              className="aspect-[4/5] shadow-glow"
            />
            <p className="mt-3 text-center text-xs text-neutral-400">
              Drag the slider to compare before &amp; after
            </p>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="container-edu mt-24">
        <div className="glass flex flex-wrap items-center justify-around gap-6 px-8 py-6 text-sm text-neutral-400">
          <span className="font-display text-lg">Savanna Foods</span>
          <span className="font-display text-lg">Habari Media</span>
          <span className="font-display text-lg">Uhuru Youth NGO</span>
          <span className="font-display text-lg">Mwangi Coffee Co.</span>
          <span className="font-display text-lg">Nairobi University Guild</span>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section">
        <div className="container-edu">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Featured work</div>
              <h2 className="mt-3 text-4xl sm:text-5xl">Recent client edits</h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden text-sm text-accent hover:underline sm:block"
            >
              See all projects →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Link
                to="/portfolio"
                key={p.id}
                className="group glass overflow-hidden p-3 transition hover:border-accent/40"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={p.after}
                    alt={p.title}
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-1 pt-4">
                  <div>
                    <div className="font-display text-lg">{p.title}</div>
                    <div className="text-xs text-neutral-400">
                      {p.category} · {p.client}
                    </div>
                  </div>
                  <span className="text-accent opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-ink-900/40">
        <div className="container-edu">
          <div className="eyebrow">What I do</div>
          <h2 className="mt-3 text-4xl sm:text-5xl">Editing services</h2>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Every document is hand-edited with care — no AI paste jobs, no
            rushed batches. Choose a single edit or a package across a larger
            project.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={s.title} className="glass h-full p-6">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent">
                  <span className="font-display text-lg">0{i + 1}</span>
                </div>
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/services" className="btn-ghost">
              Full service list &amp; pricing
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="container-edu grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.v}
              className="glass flex flex-col items-center px-6 py-10 text-center"
            >
              <div className="font-display text-5xl text-accent">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-neutral-400">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-edu">
          <div className="glass relative overflow-hidden p-10 sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr,1fr]">
              <div>
                <div className="eyebrow">Let's work together</div>
                <h2 className="mt-3 text-4xl sm:text-5xl">
                  Have a document you need to shine?
                </h2>
                <p className="mt-4 max-w-xl text-neutral-300">
                  Send your draft and what you're aiming for. You'll get a
                  tailored quote and timeline within 24 hours.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link to="/contact" className="btn-primary">
                  Start a Project
                </Link>
                <Link to="/portfolio" className="btn-ghost">
                  Browse Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
