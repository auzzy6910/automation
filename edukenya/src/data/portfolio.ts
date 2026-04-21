export type Category =
  | "Portraits"
  | "Weddings"
  | "Fashion"
  | "Product"
  | "Landscape";

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
    id: "amara-studio",
    title: "Amara — Studio Portrait",
    client: "Amara M.",
    category: "Portraits",
    tags: ["skin retouch", "color grade", "dodge & burn"],
    before: UNSPLASH("photo-1524504388940-b1c1722653e1"),
    after: UNSPLASH("photo-1502767089025-6572583495f4"),
    description:
      "Editorial studio portrait with frequency-separation skin retouching and a warm, filmic color grade.",
  },
  {
    id: "karibu-wedding",
    title: "Karibu — Wedding Day",
    client: "Grace & Daniel",
    category: "Weddings",
    tags: ["highlight recovery", "warm tones", "skin cleanup"],
    before: UNSPLASH("photo-1519741497674-611481863552"),
    after: UNSPLASH("photo-1511795409834-ef04bbd61622"),
    description:
      "Outdoor ceremony in soft golden hour light — recovered highlights, enriched skin tones, and a painterly background.",
  },
  {
    id: "savanna-fashion",
    title: "Savanna — Fashion Editorial",
    client: "House of Zuri",
    category: "Fashion",
    tags: ["fabric detail", "cinematic grade", "liquify"],
    before: UNSPLASH("photo-1496747611176-843222e1e57c"),
    after: UNSPLASH("photo-1469334031218-e382a71b716b"),
    description:
      "High-fashion editorial with cinematic teal-and-gold grade, sharpened fabric detail, and subtle shape refinement.",
  },
  {
    id: "kahawa-product",
    title: "Kahawa — Product Shoot",
    client: "Kahawa Roasters",
    category: "Product",
    tags: ["background clean", "shadow", "color match"],
    before: UNSPLASH("photo-1461023058943-07fcbe16d735"),
    after: UNSPLASH("photo-1447933601403-0c6688de566e"),
    description:
      "Coffee packaging hero shot — composited onto a clean seamless, added natural contact shadow, brand-matched tones.",
  },
  {
    id: "rift-valley",
    title: "Rift Valley — Landscape",
    client: "Personal",
    category: "Landscape",
    tags: ["sky replace", "dehaze", "luminosity masks"],
    before: UNSPLASH("photo-1500530855697-b586d89ba3ee"),
    after: UNSPLASH("photo-1506905925346-21bda4d32df4"),
    description:
      "Dramatic rift valley landscape — luminosity-masked contrast, dehaze, and a subtle sky replacement.",
  },
  {
    id: "nia-beauty",
    title: "Nia — Beauty Close-up",
    client: "Nia K.",
    category: "Portraits",
    tags: ["beauty retouch", "eye pop", "color grade"],
    before: UNSPLASH("photo-1544005313-94ddf0286df2"),
    after: UNSPLASH("photo-1531123897727-8f129e1688ce"),
    description:
      "Beauty close-up with natural skin, enhanced eye clarity, and a soft cinematic grade.",
  },
  {
    id: "boda-street",
    title: "Boda — Street Portrait",
    client: "Nairobi Stories",
    category: "Portraits",
    tags: ["moody grade", "vignette", "detail recovery"],
    before: UNSPLASH("photo-1506794778202-cad84cf45f1d"),
    after: UNSPLASH("photo-1507003211169-0a1dd7228f2d"),
    description:
      "Candid street portrait with moody, desaturated grade and recovered shadow detail.",
  },
  {
    id: "zuri-campaign",
    title: "Zuri — Brand Campaign",
    client: "Zuri Swim",
    category: "Fashion",
    tags: ["composite", "skin", "grade"],
    before: UNSPLASH("photo-1515886657613-9f3515b0c78f"),
    after: UNSPLASH("photo-1492106087820-71f1a00d2b11"),
    description:
      "Swimwear campaign — composited locations, refined skin, and a crisp brand-aligned color palette.",
  },
];

export const categories: ("All" | Category)[] = [
  "All",
  "Portraits",
  "Weddings",
  "Fashion",
  "Product",
  "Landscape",
];
