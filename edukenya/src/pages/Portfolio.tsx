import { useMemo, useState } from "react";
import BeforeAfter from "../components/BeforeAfter";
import { categories, portfolio, type Category } from "../data/portfolio";

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<string | null>(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? portfolio
        : portfolio.filter((p) => p.category === (filter as Category)),
    [filter],
  );

  const activeItem = active ? portfolio.find((p) => p.id === active) : null;

  return (
    <section className="pt-28">
      <div className="container-edu">
        <div className="eyebrow">Portfolio</div>
        <h1 className="mt-3 text-4xl sm:text-6xl">Selected client work</h1>
        <p className="mt-4 max-w-2xl text-neutral-300">
          A curated selection of recent edits across CVs, theses, proposals,
          reports, and business documents. Tap any card to open a full
          before &amp; after comparison.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-xs transition ${
                filter === c
                  ? "border-accent bg-accent text-ink-950"
                  : "border-white/10 bg-white/[0.04] text-neutral-300 hover:border-accent/50 hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className="group glass overflow-hidden p-3 text-left transition hover:border-accent/40"
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
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 text-sm text-neutral-300 hover:text-accent"
              aria-label="Close"
            >
              Close ✕
            </button>
            <div className="glass overflow-hidden p-2">
              <BeforeAfter
                before={activeItem.before}
                after={activeItem.after}
                alt={activeItem.title}
                className="aspect-[16/10]"
              />
              <div className="grid gap-6 p-6 md:grid-cols-[2fr,1fr]">
                <div>
                  <div className="eyebrow">{activeItem.category}</div>
                  <h3 className="mt-2 text-3xl">{activeItem.title}</h3>
                  <p className="mt-3 text-neutral-300">
                    {activeItem.description}
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">
                    Client
                  </div>
                  <div className="mt-1 text-neutral-200">
                    {activeItem.client}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeItem.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
