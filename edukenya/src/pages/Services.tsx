const packages = [
  {
    name: "Single Edit",
    price: "$25",
    unit: "/ image",
    highlight: false,
    features: [
      "Full retouch & color grade",
      "Up to 2 revision rounds",
      "48-hour turnaround",
      "High-res delivery (JPEG + TIFF)",
    ],
  },
  {
    name: "Wedding Gallery",
    price: "from $450",
    unit: "/ gallery",
    highlight: true,
    features: [
      "Up to 300 images, consistent look",
      "Color grading + skin cleanup",
      "Culling assistance available",
      "Private client gallery link",
      "7-day standard turnaround",
    ],
  },
  {
    name: "Brand & Campaign",
    price: "Custom",
    unit: "quote",
    highlight: false,
    features: [
      "Advanced compositing & retouch",
      "Brand-matched color grading",
      "Usage rights consultation",
      "Dedicated production timeline",
    ],
  },
];

const workflow = [
  {
    t: "Brief",
    d: "Share your images, mood board, and intended use. I'll send a tailored quote within 24 hours.",
  },
  {
    t: "Edit",
    d: "Hand-retouched and color-graded in a private workspace — no AI presets.",
  },
  {
    t: "Review",
    d: "Up to two revision rounds. Feedback is easy with our annotated review tool.",
  },
  {
    t: "Deliver",
    d: "Final high-res files delivered through a private, password-protected client gallery.",
  },
];

export default function Services() {
  return (
    <section className="pt-28">
      <div className="container-edu">
        <div className="eyebrow">Services</div>
        <h1 className="mt-3 text-4xl sm:text-6xl">Editing packages</h1>
        <p className="mt-4 max-w-2xl text-neutral-300">
          Transparent pricing for the most common needs. Every project is
          quoted to fit — the numbers below are starting points, not limits.
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
