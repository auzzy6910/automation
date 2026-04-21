import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lastPath = useRef(location.pathname);
  useEffect(() => {
    if (lastPath.current !== location.pathname) {
      lastPath.current = location.pathname;
      setOpen(false);
    }
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-edu flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 text-accent ring-1 ring-accent/30">
            <span className="font-display text-lg font-bold">e</span>
          </span>
          <span className="font-display text-lg tracking-wide">
            Edu<span className="text-accent">Kenya</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = location.pathname === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm transition ${
                  active
                    ? "text-accent"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link to="/contact" className="btn-primary hidden md:inline-flex">
          Start a Project
        </Link>

        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink-950/95 md:hidden">
          <div className="container-edu flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="py-3 text-neutral-200 hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary mt-2 self-start">
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
