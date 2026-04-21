import { Link } from "react-router-dom";
import BeforeAfter from "../components/BeforeAfter";
import { portfolio } from "../data/portfolio";

const services = [
  {
    title: "Skin & Beauty Retouch",
    desc: "Natural, high-end frequency-separation retouching that keeps texture intact.",
  },
  {
    title: "Color Grading",
    desc: "Signature cinematic looks tailored to your brand or mood board.",
  },
  {
    title: "Wedding Galleries",
    desc: "Consistent, timeless edits across hundreds of images — delivered fast.",
  },
  {
    title: "Product & E-commerce",
    desc: "Clean backgrounds, shadows, and brand-matched tones for catalog-ready shots.",
  },
];

const stats = [
  { k: "250+", v: "Clients served" },
  { k: "30k+", v: "Images retouched" },
  { k: "48 hr", v: "Typical turnaround" },
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
            <div className="eyebrow mb-4">Photo editing · Nairobi</div>
            <h1 className="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Photographs,
              <br />
              <span className="text-accent">refined</span> into art.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-300">
              EduKenya is a boutique photo editing studio helping portrait,
              wedding, and brand photographers deliver imagery that feels
              intentional, timeless, and cinematic.
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
              {["Portraits", "Weddings", "Fashion", "Product", "Landscape"].map(
                (t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ),
              )}
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
          <span className="font-display text-lg">Zuri Swim</span>
          <span className="font-display text-lg">Kahawa Roasters</span>
          <span className="font-display text-lg">House of Jadé</span>
          <span className="font-display text-lg">Nairobi Stories</span>
          <span className="font-display text-lg">Mara Weddings</span>
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
            Every image is hand-edited with care. Choose a single session edit
            or a consistent package across an entire shoot.
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
                  Ready to make your images unforgettable?
                </h2>
                <p className="mt-4 max-w-xl text-neutral-300">
                  Send over a few sample images and what you're going for.
                  You'll get a tailored quote within 24 hours.
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
