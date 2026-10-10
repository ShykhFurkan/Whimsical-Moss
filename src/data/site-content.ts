export interface CreationItem {
  id: string;
  title: string;
  category: "pipe-cleaner" | "calligraphy" | "paintings" | "custom";
  categoryLabel: string;
  description: string;
  materials: string;
  details: string;
  isPlaceholder: boolean;
  placeholderArtType: "pipe-bloom" | "calligraphy-scroll" | "mini-canvas" | "mixed-commission";
  accentColor: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  note: string;
}

export interface StudioHighlight {
  id: string;
  title: string;
  description: string;
  accent: string;
}

export const CRAFT_CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "pipe-cleaner", label: "Pipe-Cleaner Crafts" },
  { id: "calligraphy", label: "Calligraphy & Ink" },
  { id: "paintings", label: "Paintings & Flora" },
  { id: "custom", label: "Custom Creations" },
] as const;

export const CREATION_ITEMS: CreationItem[] = [
  {
    id: "item-1",
    title: "Velvet Meadow Bouquet",
    category: "pipe-cleaner",
    categoryLabel: "Pipe-Cleaner Crafts",
    description:
      "Everlasting floral arrangement sculptured with soft, pliable velvet pipe-cleaners in moss green, buttercup yellow, and blush.",
    materials: "Chenille stems, floral wire, wooden vase perch",
    details: "Handmade bloom by bloom. Never fades.",
    isPlaceholder: true,
    placeholderArtType: "pipe-bloom",
    accentColor: "#DCE8D5",
  },
  {
    id: "item-2",
    title: "Bespoke Poetry Keepsake Plaque",
    category: "calligraphy",
    categoryLabel: "Calligraphy & Ink",
    description:
      "Fluid, rhythmic dip-pen calligraphy inscribed onto deckle-edged handmade cotton rag paper with subtle gold mica accents.",
    materials: "Sumi ink, handmade cotton paper, 24k gold gouache",
    details: "Custom verses, vows, or favourite lyrics.",
    isPlaceholder: true,
    placeholderArtType: "calligraphy-scroll",
    accentColor: "#EFE6D7",
  },
  {
    id: "item-3",
    title: "Pocket Meadow Wildflower Study",
    category: "paintings",
    categoryLabel: "Paintings & Flora",
    description:
      "An intimate gouache & watercolor study on miniature cold-pressed paper capturing wild buttercups, ferns, and forest moss.",
    materials: "Artist-grade gouache, 300gsm cold-press paper",
    details: "Warm earth tones with botanical precision.",
    isPlaceholder: true,
    placeholderArtType: "mini-canvas",
    accentColor: "#E8C67A",
  },
  {
    id: "item-4",
    title: "Handmade Lavender & Moss Desk Bud",
    category: "pipe-cleaner",
    categoryLabel: "Pipe-Cleaner Crafts",
    description:
      "Charming miniature potted companion with textured velvet lavender sprigs nestled in a tiny ceramic cup.",
    materials: "Plush chenille yarn-wire, hand-molded clay base",
    details: "Tactile, playful desk ornament.",
    isPlaceholder: true,
    placeholderArtType: "pipe-bloom",
    accentColor: "#CFA9BA",
  },
  {
    id: "item-5",
    title: "Gilded Botanical Bookmark & Lettering",
    category: "calligraphy",
    categoryLabel: "Calligraphy & Ink",
    description:
      "Personalised name bookmark featuring delicate olive branch flourishes and calligraphy finished with a velvet ribbon.",
    materials: "Heavy watercolor cardstock, sepia ink, silk tassel",
    details: "A thoughtful, tactile gift for book lovers.",
    isPlaceholder: true,
    placeholderArtType: "calligraphy-scroll",
    accentColor: "#DCE8D5",
  },
  {
    id: "item-6",
    title: "Twilight Forest Mini-Canvas",
    category: "paintings",
    categoryLabel: "Paintings & Flora",
    description:
      "Layered acrylic & gouache piece exploring deep pine silhouettes against a glowing honey dusk sky.",
    materials: "Stretched 4x4 canvas, matte varnish finish",
    details: "Compact artwork designed for mantels and desks.",
    isPlaceholder: true,
    placeholderArtType: "mini-canvas",
    accentColor: "#343D31",
  },
  {
    id: "item-7",
    title: "Celebration Floral Box Set",
    category: "custom",
    categoryLabel: "Custom Creations",
    description:
      "A harmonious pairing of sculptured pipe-cleaner roses alongside a hand-lettered dedication card nestled in shredded paper.",
    materials: "Mixed media: velvet wire, custom stationery, kraft box",
    details: "Crafted specifically for anniversaries and milestones.",
    isPlaceholder: true,
    placeholderArtType: "mixed-commission",
    accentColor: "#CFA9BA",
  },
  {
    id: "item-8",
    title: "Bespoke Story Shadowbox",
    category: "custom",
    categoryLabel: "Custom Creations",
    description:
      "A layered dimensional keepsake combining mini-paintings, 3D pipe-cleaner botanical elements, and handwritten calligraphy.",
    materials: "Glass frame, mixed media, archival adhesives",
    details: "Collaborative commission tailored to your memories.",
    isPlaceholder: true,
    placeholderArtType: "mixed-commission",
    accentColor: "#EFE6D7",
  },
];

export const ORDER_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Share Your Idea",
    description:
      "Have a theme, colour palette, occasion, or reference photo in mind? Reach out on WhatsApp with your thoughts—no matter how rough.",
    note: "Feel free to send sketches, Pinterest links, or favourite flowers.",
  },
  {
    step: "02",
    title: "Discuss The Details",
    description:
      "We'll explore what's possible, discuss materials, sizing, and craft options, and suggest creative directions.",
    note: "Enquiries are conversational with no obligation to purchase.",
  },
  {
    step: "03",
    title: "Confirm Before Making",
    description:
      "Once you're delighted with the plan and timetable, we confirm every detail before hands-on crafting begins in the studio.",
    note: "Each piece is made patiently by hand with dedicated care.",
  },
];

export const STUDIO_HIGHLIGHTS: StudioHighlight[] = [
  {
    id: "materials",
    title: "Curated Tactile Materials",
    description:
      "Every piece starts with quality elements: plush chenille stems, heavyweight deckle-edge papers, and lightfast pigments.",
    accent: "#DCE8D5",
  },
  {
    id: "crafting",
    title: "Patient Hand Shaping",
    description:
      "Petals are coiled, twisted, and sculpted one by one; calligraphy curves are inked stroke by deliberate stroke.",
    accent: "#EFE6D7",
  },
  {
    id: "details",
    title: "Thoughtful Nuances",
    description:
      "Subtle gold dust accents, handwritten notes, and tailored palettes ensure no two pieces are ever identical.",
    accent: "#E8C67A",
  },
  {
    id: "packaging",
    title: "Gift-Ready Presentation",
    description:
      "Wrapped in crinkled parchment and tied with natural cord so receiving your package feels like a personal gift.",
    accent: "#CFA9BA",
  },
];
