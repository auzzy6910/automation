export type Category =
  | "CV & Resume"
  | "Thesis & Dissertation"
  | "Business"
  | "Proposal"
  | "Report"
  | "Academic";

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: Category;
  tags: string[];
  before: string;
  after: string;
  description: string;
};

const UNSPLASH = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const portfolio: PortfolioItem[] = [
  {
    id: "achieng-cv",
    title: "Achieng — Executive CV",
    client: "Achieng O.",
    category: "CV & Resume",
    tags: ["rewrite", "ATS-friendly", "layout"],
    before: UNSPLASH("photo-1455390582262-044cdead277a"),
    after: UNSPLASH("photo-1586281380349-632531db7ed4"),
    description:
      "Two-page executive CV rewritten and redesigned from a plain Word doc — ATS-friendly structure, impact-led bullet points, and a clean typographic hierarchy.",
  },
  {
    id: "kamau-thesis",
    title: "Kamau — Master's Thesis",
    client: "Kamau M.",
    category: "Thesis & Dissertation",
    tags: ["APA 7th", "TOC", "captions", "pagination"],
    before: UNSPLASH("photo-1434030216411-0b793f4b4173"),
    after: UNSPLASH("photo-1568667256549-094345857637"),
    description:
      "180-page Master's thesis formatted to university template — APA 7th references, automated table of contents, figure/table captions, page numbering, and consistent heading styles.",
  },
  {
    id: "savanna-pitch",
    title: "Savanna — Investor Pitch Deck",
    client: "Savanna Foods",
    category: "Business",
    tags: ["layout", "brand fonts", "charts"],
    before: UNSPLASH("photo-1450101499163-c8848c66ca85"),
    after: UNSPLASH("photo-1553729459-efe14ef6055d"),
    description:
      "Rough pitch content transformed into a polished, brand-consistent deck with clean charts and a tight narrative flow.",
  },
  {
    id: "uhuru-proposal",
    title: "Uhuru — Grant Proposal",
    client: "Uhuru Youth NGO",
    category: "Proposal",
    tags: ["structure", "proofread", "template"],
    before: UNSPLASH("photo-1519455953755-af066f52f1a6"),
    after: UNSPLASH("photo-1454165804606-c3d57bc86b40"),
    description:
      "USAID-style grant proposal restructured for clarity — sections aligned to the funder's template, proofread end-to-end, and typeset for easy reviewer scanning.",
  },
  {
    id: "habari-report",
    title: "Habari — Annual Report",
    client: "Habari Media",
    category: "Report",
    tags: ["long-form layout", "typesetting", "infographics"],
    before: UNSPLASH("photo-1486312338219-ce68d2c6f44d"),
    after: UNSPLASH("photo-1507679799987-c73779587ccf"),
    description:
      "64-page annual report typeset from scratch — column grids, callouts, custom infographics, and a magazine-grade feel.",
  },
  {
    id: "nia-journal",
    title: "Nia — Journal Submission",
    client: "Nia K. (PhD)",
    category: "Academic",
    tags: ["journal template", "LaTeX-to-Word", "citations"],
    before: UNSPLASH("photo-1519682337058-a94d519337bc"),
    after: UNSPLASH("photo-1455390582262-044cdead277a"),
    description:
      "Academic paper converted to the target journal's template — citations reformatted, figure resolution upgraded, and a detailed compliance checklist attached.",
  },
  {
    id: "zuri-resume",
    title: "Zuri — Designer Resume",
    client: "Zuri N.",
    category: "CV & Resume",
    tags: ["design resume", "portfolio link", "typography"],
    before: UNSPLASH("photo-1517842645767-c639042777db"),
    after: UNSPLASH("photo-1586282391129-76a6df230234"),
    description:
      "Designer-focused one-pager with a confident type system, subtle color accent, and a link-ready digital portfolio footer.",
  },
  {
    id: "mwangi-proposal",
    title: "Mwangi — Business Plan",
    client: "Mwangi Coffee Co.",
    category: "Business",
    tags: ["financials", "tables", "brand polish"],
    before: UNSPLASH("photo-1518458028785-8fbcd101ebb9"),
    after: UNSPLASH("photo-1553729459-efe14ef6055d"),
    description:
      "40-page business plan with polished financial tables, 3-year projections, and a brand-consistent cover and section dividers.",
  },
];

export const categories: ("All" | Category)[] = [
  "All",
  "CV & Resume",
  "Thesis & Dissertation",
  "Business",
  "Proposal",
  "Report",
  "Academic",
];
