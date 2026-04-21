const skills = [
  "Adobe Photoshop",
  "Adobe Lightroom",
  "Capture One",
  "DaVinci Resolve",
  "Frequency separation",
  "Luminosity masks",
  "Compositing",
  "Color theory",
];

const clients = [
  "Zuri Swim",
  "Kahawa Roasters",
  "House of Jadé",
  "Nairobi Stories",
  "Mara Weddings",
  "Safari Collective",
];

export default function About() {
  return (
    <section className="pt-28">
      <div className="container-edu grid items-start gap-12 lg:grid-cols-[1.1fr,1fr]">
        <div>
          <div className="eyebrow">About</div>
          <h1 className="mt-3 text-4xl sm:text-6xl">
            Hi, I'm <span className="text-accent">Edu</span>.
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            I'm a Nairobi-based photo editor and retoucher with nearly a decade
            of experience working alongside portrait and wedding photographers,
            fashion houses, and independent brands across East Africa and
            beyond.
          </p>
          <p className="mt-4 text-neutral-400">
            My approach is simple: honor the moment, elevate the craft.
            Every image is edited by hand — no stacked AI presets, no rushed
            batch work. Skin stays skin. Light stays true. The story leads.
          </p>
          <p className="mt-4 text-neutral-400">
            I care deeply about the trust that goes into a shoot — yours, and
            your clients'. Everything I touch is delivered through a private,
            password-protected client gallery so you can share previews with
            confidence.
          </p>

          <div className="mt-10">
            <div className="eyebrow">Tools &amp; craft</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="eyebrow">Selected clients</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-neutral-300 sm:grid-cols-3">
              {clients.map((c) => (
                <div key={c} className="glass px-4 py-3 text-center">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-purple-500/10 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80"
            alt="Edu at work"
            className="aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover shadow-glow"
          />
          <div className="glass mt-6 p-6">
            <div className="text-sm text-neutral-300">
              "Working with Edu has completely changed how my wedding galleries
              feel. My couples keep saying they look like film — timeless and
              warm. I don't deliver without him now."
            </div>
            <div className="mt-3 text-xs uppercase tracking-widest text-accent">
              — Naomi W., Mara Weddings
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
