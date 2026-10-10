import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  BotanicalBloomSvg,
  DoodleSparkle,
} from "@/components/hand-drawn-accents";
import {
  Sparkles,
  Scissors,
  Layers,
  Palette,
  PackageCheck,
  CheckCircle2,
  Heart,
  ArrowRight,
  Sun,
  Droplets,
  Wind,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Behind The Scenes & Craft Process | Whimsical Moss",
  description:
    "See how our handmade pipe cleaner bouquets, crochet accessories, Arabic calligraphy, and canvas paintings are patiently crafted step-by-step.",
};

const CRAFT_STAGES = [
  {
    step: "01",
    title: "Inspiration & Botanical Study",
    subtitle: "From sketchbook to structural idea",
    description:
      "Every piece starts with observation. We study the organic curves of real sunflowers, lilies, and wild foliage, translating their natural geometry into flexible wire forms and gentle color gradients.",
    note: "Selecting harmonious palettes like honey gold, sage green, and soft blush.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Tactile Material Preparation",
    subtitle: "Selecting quality chenille, yarn, and inks",
    description:
      "Only the softest, high-density chenille pipe cleaners and durable cotton-blend yarns are chosen. For calligraphy and paintings, we test ink viscosity and prime stretched canvases with multiple satin ground layers.",
    note: "Lightfast Japanese inks and rich metallic gold mica dust.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Patient Hand Shaping",
    subtitle: "Coiling, looping, and stroke-by-stroke inking",
    description:
      "Petals are coiled and shaped individually with fingertips; crochet bags are built loop-by-loop with consistent tension; calligraphy is drawn with measured breath and steady wrist movement.",
    note: "No machinery or mass dies—every curve is hand-manipulated.",
    icon: Scissors,
  },
  {
    step: "04",
    title: "Nuances, Charms & Accents",
    subtitle: "The subtle touches that make it special",
    description:
      "We add decorative accents such as gold-toned floral bag charms, natural peacock feather plumes, satin bow ribbons, and intricate wire butterfly companions to give each piece character.",
    note: "Small details that turn a simple craft into an heirloom.",
    icon: Palette,
  },
  {
    step: "05",
    title: "Parchment Wrapping & Care Card",
    subtitle: "Gift-ready presentation from our hands to yours",
    description:
      "Each completed creation is lovingly cradled in crinkled parchment paper, secured with satin ribbon or natural jute twine, sealed, and accompanied by a handwritten card and care advice.",
    note: "Opening the box should feel just as delightful as receiving fresh flowers.",
    icon: PackageCheck,
  },
];

const CARE_TIPS = [
  {
    title: "Pipe Cleaner Flowers",
    icon: Wind,
    tips: [
      "Keep away from direct water or high humidity areas.",
      "To remove household dust, simply use a soft makeup brush or a cool hairdryer on low.",
      "Petals have flexible internal wire and can be gently reshaped if bumped.",
    ],
  },
  {
    title: "Crochet Bags & Bouquets",
    icon: Droplets,
    tips: [
      "Spot clean with a damp cloth and mild gentle soap if needed.",
      "Lay flat to dry naturally in shade; do not machine wash or tumble dry.",
      "Store structured bags stuffed lightly with tissue paper to preserve shape.",
    ],
  },
  {
    title: "Calligraphy & Canvas Art",
    icon: Sun,
    tips: [
      "Display away from prolonged harsh midday sun to preserve vibrant pigment depth.",
      "Wipe glass frames with a dry microfiber cloth.",
      "Canvases are sealed with satin varnish and can be dusted lightly with a dry feather duster.",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3E9] text-[#24231F]">
      <SiteHeader />

      <main className="flex-1 space-y-20 py-12 sm:py-16">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE8D5] border border-[#343D31]/15 text-xs font-medium text-[#343D31]">
            <DoodleSparkle className="w-4 h-4 text-[#343D31]" />
            <span>Behind The Scenes</span>
          </div>

          <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl font-normal text-[#24231F] tracking-tight">
            The Crafting Journey
          </h1>

          <p className="text-base sm:text-lg text-[#343D31]/80 max-w-2xl mx-auto leading-relaxed">
            Ever wonder how soft velvet wire turns into an everlasting bloom, or how words become
            timeless wall art? Here is a peek inside our studio workflow.
          </p>

          <p className="font-[family-name:var(--font-handwriting)] text-2xl text-[#343D31]">
            Slow, deliberate, and made with love from the very first petal.
          </p>
        </section>

        {/* Step-by-Step Visual Timeline */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#343D31]/60">
              The 5 Stages of Making
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F]">
              How Each Creation Comes to Life
            </h2>
          </div>

          <div className="space-y-6">
            {CRAFT_STAGES.map((stage) => {
              const IconComponent = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="bg-[#FFFEFB] border border-[#343D31]/12 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center gap-6 justify-between group hover:border-[#343D31]/30 transition-all"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#F8F3E9] border border-[#343D31]/15 flex flex-col items-center justify-center shrink-0 group-hover:bg-[#DCE8D5] transition-colors">
                      <span className="font-[family-name:var(--font-serif)] text-lg font-bold text-[#343D31] leading-none">
                        {stage.step}
                      </span>
                      <IconComponent className="w-4 h-4 text-[#E8C67A] mt-1" />
                    </div>

                    <div className="space-y-2 max-w-xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#24231F]">
                          {stage.title}
                        </h3>
                        <span className="text-xs text-[#343D31]/60 font-mono">
                          • {stage.subtitle}
                        </span>
                      </div>

                      <p className="text-sm text-[#343D31]/80 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 border-t md:border-t-0 md:border-l border-[#343D31]/10 pt-4 md:pt-0 md:pl-6 text-xs text-[#343D31]/80 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#343D31] shrink-0 mt-0.5" />
                    <span className="font-[family-name:var(--font-handwriting)] text-base text-[#343D31]">
                      {stage.note}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Handcrafted Care Guide */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE6D7] text-xs font-medium text-[#343D31]">
              <Heart className="w-3.5 h-3.5 text-[#CFA9BA] fill-[#CFA9BA]" />
              <span>Keeping Your Pieces Beautiful</span>
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F]">
              Handmade Care Guide
            </h2>
            <p className="text-sm text-[#343D31]/80">
              Unlike fresh flowers, your handmade keepsakes don&apos;t need water or sunlight! Here is how to keep them looking fresh forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CARE_TIPS.map((care, idx) => {
              const IconComp = care.icon;
              return (
                <div
                  key={idx}
                  className="paper-card rounded-2xl p-7 space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-[#DCE8D5] flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-[#343D31]" />
                    </div>

                    <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#24231F]">
                      {care.title}
                    </h3>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#343D31]/80">
                      {care.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-[#E8C67A] font-bold text-sm leading-none">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#343D31]/10 text-xs text-[#343D31]/60 font-[family-name:var(--font-handwriting)] text-base">
                    Care instruction card included in every parcel.
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#DCE8D5] mx-auto flex items-center justify-center border border-[#343D31]/15">
            <BotanicalBloomSvg className="w-7 h-7 text-[#343D31]" />
          </div>

          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F]">
            Appreciate the details?
          </h2>

          <p className="text-[#343D31]/80 max-w-xl mx-auto text-base leading-relaxed">
            See the finished results in our studio creations gallery, or dream up your own custom piece.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/creations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#343D31] text-[#FFFEFB] text-sm font-medium hover:bg-[#24231F] transition-all shadow-sm"
            >
              <span>Browse All Creations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/custom-orders"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#343D31]/25 hover:bg-[#EFE6D7] text-[#343D31] text-sm font-medium transition-all"
            >
              <span>Start A Custom Order</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
