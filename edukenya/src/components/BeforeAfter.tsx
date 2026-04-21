import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  alt?: string;
  className?: string;
};

export default function BeforeAfter({
  before,
  after,
  alt = "",
  className = "",
}: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      updateFromClientX(x);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [updateFromClientX]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 select-none ${className}`}
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        updateFromClientX(e.touches[0].clientX);
      }}
    >
      <img
        src={after}
        alt={alt ? `${alt} — after` : "after"}
        className="block h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={alt ? `${alt} — before` : "before"}
          className="block h-full w-full object-cover"
          draggable={false}
        />
      </div>

      <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-white">
        Before
      </div>
      <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-[10px] uppercase tracking-widest text-ink-950">
        After
      </div>

      <div
        className="absolute inset-y-0 w-0.5 bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
        style={{ left: `${pos}%` }}
      />
      <button
        aria-label="Drag to compare"
        className="absolute top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink-950 shadow-lg ring-2 ring-accent"
        style={{ left: `${pos}%` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
