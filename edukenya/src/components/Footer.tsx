import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-ink-950">
      <div className="container-edu grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent ring-1 ring-accent/30">
              <span className="font-display text-xl font-bold">e</span>
            </span>
            <span className="font-display text-xl">
              Edu<span className="text-accent">Kenya</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-neutral-400">
            Fine-art photo editing, retouching, and color grading for
            portraits, weddings, fashion, and brands. Based in Nairobi, working
            with clients around the world.
          </p>
        </div>

        <div>
          <div className="eyebrow">Studio</div>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            <li>
              <Link to="/portfolio" className="hover:text-accent">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-accent">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            <li>
              <a
                href="mailto:hello@edukenya.studio"
                className="hover:text-accent"
              >
                hello@edukenya.studio
              </a>
            </li>
            <li>Nairobi, Kenya</li>
            <li>
              <a href="#" className="hover:text-accent">
                Instagram
              </a>
              <span className="mx-2 text-neutral-600">·</span>
              <a href="#" className="hover:text-accent">
                Behance
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-edu flex flex-col items-center justify-between gap-2 py-6 text-xs text-neutral-500 sm:flex-row">
          <div>
            © {new Date().getFullYear()} EduKenya Studio. All rights reserved.
          </div>
          <div>Crafted with care in Nairobi.</div>
        </div>
      </div>
    </footer>
  );
}
