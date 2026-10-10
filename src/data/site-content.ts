export interface CreationItem {
  id: string;
  slug: string;
  title: string;
  startingPrice: string;
  category: "pipe-cleaner" | "calligraphy" | "paintings" | "custom";
  categoryLabel: string;
  description: string;
  materials: string;
  details: string;
  image: string;
  galleryImages?: string[];
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
  { id: "custom", label: "Custom & Crochet Creations" },
  { id: "calligraphy", label: "Calligraphy & Ink" },
  { id: "paintings", label: "Hand-Painted Canvas Art" },
] as const;

export const CREATION_ITEMS: CreationItem[] = [
  {
    id: "item-1",
    slug: "pipe-cleaner-phone-case",
    title: "Pipe Cleaner Phone Case",
    startingPrice: "₹400",
    category: "pipe-cleaner",
    categoryLabel: "Pipe-Cleaner Crafts",
    description:
      "A handmade phone case decorated with soft, colourful pipe-cleaner flowers and butterfly details. Its rich green texture and playful pink embellishments make it a unique, creative accessory for anyone who loves artsy, personalised designs.",
    materials: "Chenille pipe-cleaner craft, protective case backing, floral & butterfly charms",
    details: "Tactile emerald chenille moss texture with delicate pink blooms & butterfly accents.",
    image: "/images/products/p1/product1.webp",
    galleryImages: [
      "/images/products/p1/product1.webp",
      "/images/products/p1/product2.webp",
      "/images/products/p1/Emerald Chenille Floral Phone Case.webp",
      "/images/products/p1/Handcrafted Emerald Yarn Phone Case Display.webp",
    ],
    isPlaceholder: false,
    placeholderArtType: "pipe-bloom",
    accentColor: "#DCE8D5",
  },
  {
    id: "item-2",
    slug: "pipe-cleaner-flower-bouquet",
    title: "Handmade Pipe Cleaner Flower Bouquet",
    startingPrice: "₹250",
    category: "pipe-cleaner",
    categoryLabel: "Pipe-Cleaner Crafts",
    description:
      "A little bouquet with a lot of personality. This handmade arrangement features a bright yellow sunflower and a delicate pink lily, carefully crafted from colourful pipe cleaners. Finished with elegant black-and-gold wrapping and a vibrant yellow satin bow, it makes a thoughtful gift for birthdays, anniversaries, or simply brightening someone's day.",
    materials: "Chenille velvet pipe cleaners, floral stems, black & gold luxury wrapping, yellow satin ribbon",
    details: "Customisable Flowers: Choose your favourite flower types and colours to create a bouquet that's uniquely yours.",
    image: "/images/products/p2/Pipe-Cleaner Sunflower and Lily Bouquet.webp",
    galleryImages: [
      "/images/products/p2/Pipe-Cleaner Sunflower and Lily Bouquet.webp",
      "/images/products/p2/Handmade Sunflower and Lily Bouquet.webp",
      "/images/products/p2/Pipe-Cleaner Sunflower Bouquet on Linen.webp",
      "/images/products/p2/Sunlit Chenille Flower Bouquet.webp",
    ],
    isPlaceholder: false,
    placeholderArtType: "pipe-bloom",
    accentColor: "#E8C67A",
  },
  {
    id: "item-3",
    slug: "crochet-rose-bouquet",
    title: "Handmade Crochet Rose Bouquet",
    startingPrice: "₹600",
    category: "custom",
    categoryLabel: "Custom & Crochet Creations",
    description:
      "A little bouquet made to last. This adorable handmade crochet bouquet features vibrant red roses, green yarn leaves, a soft white ruffled border, and a delicate pink wrap, all carefully crafted with yarn to create a charming floral keepsake. Unlike fresh flowers, it won't wilt after a few days.",
    materials: "Soft spun crochet yarn, floral wire stems, lace ruffled border, pink gift wrap",
    details: "Customisable: Choose your favourite flower colours, bouquet wrapping, and decorative details to create a personalised gift made just for you.",
    image: "/images/products/p3/Handmade Crochet Bouquet in Golden Light.webp",
    galleryImages: [
      "/images/products/p3/Handmade Crochet Bouquet in Golden Light.webp",
      "/images/products/p3/Crocheted Rose Bouquet on Stone Pedestal.webp",
      "/images/products/p3/Cozy Crochet Rose Bouquet Collage.webp",
      "/images/products/p3/Handmade Crochet Bouquet Gift Display.webp",
    ],
    isPlaceholder: false,
    placeholderArtType: "mixed-commission",
    accentColor: "#CFA9BA",
  },
  {
    id: "item-4",
    slug: "crochet-handbag",
    title: "Handmade Blue & White Crochet Handbag",
    startingPrice: "₹600",
    category: "custom",
    categoryLabel: "Custom & Crochet Creations",
    description:
      "Add a touch of handmade charm to your everyday style with this beautiful blue and white crochet handbag. Carefully crafted with a chunky, textured crochet pattern, this bag features a stylish two-tone design, a matching crochet handle, and a delicate floral charm with elegant gold-tone accents.",
    materials: "Chunky textured cotton-blend yarn, reinforced handle, handcrafted flower charm with gold-tone accents",
    details: "Customisable Design: Choose your favourite colours, crochet patterns, and decorative charms to create a handbag that reflects your personal style.",
    image: "/images/products/p4/Blue-and-White Crochet Elegance.webp",
    galleryImages: [
      "/images/products/p4/Blue-and-White Crochet Elegance.webp",
      "/images/products/p4/Blue Crochet Handbag in Warm Sunlight.webp",
      "/images/products/p4/Blue-and-White Crochet Bag Lifestyle Collage.webp",
      "/images/products/p4/Crochet Elegance in the Car.webp",
    ],
    isPlaceholder: false,
    placeholderArtType: "mixed-commission",
    accentColor: "#DCE8D5",
  },
  {
    id: "item-5",
    slug: "arabic-calligraphy-framed-art",
    title: "Custom Arabic Calligraphy Framed Art",
    startingPrice: "₹400",
    category: "calligraphy",
    categoryLabel: "Calligraphy & Ink",
    description:
      "Turn your favourite words into a timeless piece of art. Our custom calligraphic art features beautifully crafted lettering in an elegant frame, creating a personalised decoration for your home, workspace, or prayer room. Whether it's your name, a meaningful Arabic phrase, Islamic calligraphy, or a special message, each piece is crafted to reflect your story.",
    materials: "Archival pigment ink, premium cotton cardstock, natural peacock feather accent, glass & wood frame",
    details: "Fully Customisable: Choose what you want written, your preferred calligraphy style, colours, and frame design to create a unique piece made just for you.",
    image: "/images/products/p5/Elegant Arabic Calligraphy with Peacock Feather.webp",
    galleryImages: [
      "/images/products/p5/Elegant Arabic Calligraphy with Peacock Feather.webp",
      "/images/products/p5/Ornate Arabic Calligraphy with Peacock Feather.webp",
      "/images/products/p5/Elegant Islamic Calligraphy Decor.webp",
      "/images/products/p5/Warm Islamic Calligraphy Wall Vignette.webp",
    ],
    isPlaceholder: false,
    placeholderArtType: "calligraphy-scroll",
    accentColor: "#EFE6D7",
  },
  {
    id: "item-6",
    slug: "islamic-canvas-wall-art",
    title: "Hand-Painted Islamic Canvas Wall Art",
    startingPrice: "₹400",
    category: "paintings",
    categoryLabel: "Hand-Painted Canvas Art",
    description:
      "Bring faith, meaning, and artistic beauty into your space with our handmade Islamic canvas paintings. Each piece is carefully hand-painted, combining meaningful Quranic verses and Arabic calligraphy with creative illustrations, rich colours, and elegant details. From the inspiring reminder 'And your Lord never forgets' to the beautiful depiction of the Kaaba.",
    materials: "Artist-grade acrylic & gouache, stretched canvas, protective satin varnish, gold mica accents",
    details: "Customisable Designs: Personalise your canvas with your favourite Quranic verses, Arabic calligraphy, colours, themes, and artwork to create a meaningful piece made just for you.",
    image: "/images/products/p6/Hand-Painted Canvas Art Showcase.webp",
    galleryImages: [
      "/images/products/p6/Hand-Painted Canvas Art Showcase.webp",
      "/images/products/p6/Kaaba Canvas in a Warm Interior.webp",
      "/images/products/p6/Cozy Islamic Art Home Display.webp",
      "/images/products/p6/Watermelon Faith on a Sunny Easel.webp",
    ],
    isPlaceholder: false,
    placeholderArtType: "mini-canvas",
    accentColor: "#343D31",
  },
];

export function getCreationBySlugOrId(identifier: string): CreationItem | undefined {
  return CREATION_ITEMS.find((item) => item.id === identifier || item.slug === identifier);
}

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
