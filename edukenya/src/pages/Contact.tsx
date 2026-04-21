import { useState } from "react";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "CV / Resume",
    wordCount: "under 1,000",
    deadline: "",
    message: "",
  });

  const update =
    <K extends keyof typeof form>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulated submission — wire up to a backend or form service later.
    setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <section className="pt-28">
      <div className="container-edu grid gap-12 lg:grid-cols-[1fr,1.1fr]">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="mt-3 text-4xl sm:text-6xl">Let's polish your document.</h1>
          <p className="mt-4 max-w-md text-neutral-300">
            Send a few details about your project and I'll reply within 24
            hours with a tailored plan and quote.
          </p>

          <div className="mt-10 space-y-6 text-sm text-neutral-300">
            <div>
              <div className="eyebrow">Email</div>
              <a
                href="mailto:hello@edukenya.studio"
                className="mt-2 block text-lg text-neutral-100 hover:text-accent"
              >
                hello@edukenya.studio
              </a>
            </div>
            <div>
              <div className="eyebrow">Based in</div>
              <div className="mt-2 text-lg text-neutral-100">Nairobi, Kenya</div>
              <div className="text-neutral-400">Working worldwide (remote)</div>
            </div>
            <div>
              <div className="eyebrow">Follow</div>
              <div className="mt-2 flex gap-4">
                <a href="#" className="hover:text-accent">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-accent">
                  Instagram
                </a>
                <a href="#" className="hover:text-accent">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="glass p-8">
          {status === "sent" ? (
            <div className="py-10 text-center">
              <div className="font-display text-3xl text-accent">Asante sana!</div>
              <p className="mt-3 text-neutral-300">
                Your message is in. I'll get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setForm({
                    name: "",
                    email: "",
                    projectType: "CV / Resume",
                    wordCount: "under 1,000",
                    deadline: "",
                    message: "",
                  });
                }}
                className="btn-ghost mt-6"
              >
                Send another
              </button>
            </div>
          ) : (
            <div className="grid gap-5">
              <Field label="Your name">
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="input"
                  placeholder="Jane Student"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className="input"
                  placeholder="you@example.com"
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Project type">
                  <select
                    value={form.projectType}
                    onChange={update("projectType")}
                    className="input"
                  >
                    <option>CV / Resume</option>
                    <option>Cover Letter</option>
                    <option>Thesis / Dissertation</option>
                    <option>Proofreading</option>
                    <option>Business / Proposal</option>
                    <option>Annual Report</option>
                    <option>Typing Services</option>
                    <option>PDF ↔ Word Conversion</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Approximate word count">
                  <select
                    value={form.wordCount}
                    onChange={update("wordCount")}
                    className="input"
                  >
                    <option>under 1,000</option>
                    <option>1,000 – 5,000</option>
                    <option>5,000 – 15,000</option>
                    <option>15,000 – 50,000</option>
                    <option>50,000+</option>
                  </select>
                </Field>
              </div>

              <Field label="Ideal deadline (optional)">
                <input
                  value={form.deadline}
                  onChange={update("deadline")}
                  className="input"
                  placeholder="e.g. by next Friday"
                />
              </Field>

              <Field label="Project details">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className="input resize-none"
                  placeholder="A few sentences on the document, what you need done, and any style/template requirements."
                />
              </Field>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-2 self-start disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p className="text-xs text-neutral-500">
                By submitting this form, you agree to be contacted about your
                project. I never share your details with anyone.
              </p>
            </div>
          )}
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #f5f5f5;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus { border-color: #d4af37; box-shadow: 0 0 0 3px rgba(212,175,55,0.15); }
        .input::placeholder { color: #6b6b7a; }
        select.input option { background: #0b0b10; color: #f5f5f5; }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-xs uppercase tracking-widest text-neutral-400">
        {label}
      </div>
      {children}
    </label>
  );
}
