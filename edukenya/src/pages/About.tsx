const skills = [
  "Microsoft Word",
  "Google Docs",
  "Adobe InDesign",
  "LaTeX",
  "PowerPoint & Keynote",
  "APA / MLA / Harvard",
  "Grammarly Premium",
  "Typesetting",
];

const clients = [
  "Savanna Foods",
  "Habari Media",
  "Uhuru Youth NGO",
  "Mwangi Coffee Co.",
  "Mara Consulting",
  "Nairobi University Guild",
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
            I'm a Nairobi-based editor and document designer with nearly a
            decade of experience shaping CVs, theses, proposals, and business
            documents for students, professionals, and organizations across
            East Africa and beyond.
          </p>
          <p className="mt-4 text-neutral-400">
            My approach is simple: honor the voice, elevate the craft. Every
            document is hand-edited — no AI paste jobs, no batch templates.
            Your tone stays yours. The structure just works harder.
          </p>
          <p className="mt-4 text-neutral-400">
            I care deeply about the trust that comes with sending me your
            draft — your thesis, your pitch, your resume. Everything I touch
            is delivered through a private, password-protected client link so
            you can share previews with confidence.
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
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
            alt="Edu at work"
            className="aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover shadow-glow"
          />
          <div className="glass mt-6 p-6">
            <div className="text-sm text-neutral-300">
              "Edu turned my messy 180-page draft into a university-ready
              thesis in under two weeks. The formatting, the references, the
              tone — flawless. I'll never submit anything without him again."
            </div>
            <div className="mt-3 text-xs uppercase tracking-widest text-accent">
              — Kamau M., MSc. candidate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
