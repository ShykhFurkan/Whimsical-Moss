"use client";

import React, { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  DoodleSparkle,
} from "@/components/hand-drawn-accents";
import {
  MessageCircle,
  Sparkles,
  Gift,
  Clock,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const CRAFT_OPTIONS = [
  {
    id: "pipe-cleaner-bouquet",
    name: "Pipe Cleaner Flower Bouquet",
    badge: "Chenille Velvet",
    description: "Sunflowers, lilies, lavender, tulips, daisies, or roses sculpted in soft chenille pipe cleaners.",
    sampleColors: "Yellow & Pink, Lavender & Sage, Peach & Cream",
    idealFor: "Birthdays, Graduations, Anniversaries, Cheer-up gifts",
  },
  {
    id: "crochet-creations",
    name: "Handmade Crochet Handbag or Bouquet",
    badge: "Spun Yarn",
    description: "Chunky two-tone bags with floral charms, or everlasting crochet rose bouquets in ruffled wraps.",
    sampleColors: "Sky Blue & Cloud White, Terracotta & Oat, Crimson & Rose",
    idealFor: "Valentine's Day, Daily fashion, Keepsake gifts",
  },
  {
    id: "arabic-calligraphy",
    name: "Custom Arabic Calligraphy Plaque",
    badge: "Archival Ink & Frame",
    description: "Personalised Arabic names, Qur'anic Ayahs, wedding dates, or Duas accented with natural peacock feathers.",
    sampleColors: "Gold ink on Black, Deep Emerald on Cream, Walnut or Glass Frame",
    idealFor: "Housewarmings, Weddings, Ramadan, Spiritual corner decor",
  },
  {
    id: "islamic-canvas",
    name: "Hand-Painted Islamic Canvas Art",
    badge: "Stretched Canvas",
    description: "Original acrylic and gouache painting featuring Kaaba silhouettes, Quranic verses, and floral details.",
    sampleColors: "Moody Sunset & Gold, Terracotta & Sage, Warm Interior Ochre",
    idealFor: "Prayer room wall, Living room statement, Nikkah gift",
  },
  {
    id: "phone-case",
    name: "Handmade Pipe Cleaner Phone Case",
    badge: "Wearable Art",
    description: "Rich chenille moss texture with soft dimensional floral blooms and butterfly embellishments.",
    sampleColors: "Emerald Moss & Pink Roses, Lilac Mist & Yellow Daisies",
    idealFor: "Unique everyday accessory, Artsy personalized gift",
  },
];

const FAQS = [
  {
    q: "How does the custom ordering process work?",
    a: "Start by messaging us on WhatsApp with your idea or by using the custom form below. We'll chat about flower varieties, color palettes, sizing, and frame options. Once you are delighted with the plan, we begin crafting hands-on in the studio.",
  },
  {
    q: "Can I request specific flowers or colors not shown on the website?",
    a: "Absolutely! We love bespoke creations. If you have a favourite flower (e.g. cherry blossoms, eucalyptus, daisies) or a tailored event color palette, just share a photo or description with us.",
  },
  {
    q: "How long does a custom order take to make?",
    a: "Because each piece is handmade individually with meticulous care, most orders take 3 to 7 business days to craft before shipping. If you have a specific deadline or birthday, let us know and we'll do our best to accommodate.",
  },
  {
    q: "How is calligraphy verified for Arabic spelling?",
    a: "Before inking the final piece, we can send you a draft layout or spelling confirmation over WhatsApp to ensure every letter, vowel mark, and meaning is accurate to your wishes.",
  },
  {
    q: "Is gift wrapping included with custom orders?",
    a: "Yes! Every order is wrapped with love in crinkled parchment paper, tied with satin ribbon or natural jute twine, and accompanied by a handwritten note card if you'd like to include a message for the recipient.",
  },
];

export function CustomOrderClient() {
  const [selectedCraft, setSelectedCraft] = useState<string>("Pipe Cleaner Flower Bouquet");
  const [customWording, setCustomWording] = useState<string>("");
  const [colorPreference, setColorPreference] = useState<string>("");
  const [occasion, setOccasion] = useState<string>("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const dynamicWhatsAppUrl = buildWhatsAppUrl({
    craftType: selectedCraft,
    customIdea: customWording ? `Details: ${customWording} (${occasion ? `Occasion: ${occasion}` : ""})` : undefined,
    preferredColours: colorPreference || undefined,
  });

  return (
    <div className="space-y-20 py-12 sm:py-16">
      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 text-center max-w-3xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE8D5] border border-[#343D31]/15 text-xs font-medium text-[#343D31]">
          <DoodleSparkle className="w-4 h-4 text-[#343D31]" />
          <span>Made-To-Order Commissions</span>
        </div>

        <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl font-normal text-[#24231F] tracking-tight">
          Bespoke Custom Orders
        </h1>

        <p className="text-[#343D31]/80 text-base sm:text-lg leading-relaxed">
          From personalized flower bouquets that never wilt to custom Arabic calligraphy plaques and
          tailored crochet bags, we bring your heartfelt ideas to life.
        </p>

        <p className="font-[family-name:var(--font-handwriting)] text-xl sm:text-2xl text-[#343D31]">
          Conversational and easy—no rigid checkout forms. Just real conversation and handmade art.
        </p>
      </section>

      {/* Craft Types Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#343D31]/60">
            Commission Possibilities
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F]">
            What We Can Craft For You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CRAFT_OPTIONS.map((craft) => (
            <div
              key={craft.id}
              className="paper-card rounded-2xl p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#343D31] px-2.5 py-1 rounded-full bg-[#EFE6D7]">
                    {craft.badge}
                  </span>
                  <span className="text-xs text-[#343D31]/60 font-[family-name:var(--font-handwriting)] text-base">
                    Customizable
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#24231F]">
                  {craft.name}
                </h3>

                <p className="text-sm text-[#343D31]/80 leading-relaxed">
                  {craft.description}
                </p>

                <div className="pt-3 border-t border-[#343D31]/10 space-y-1.5 text-xs text-[#343D31]/75">
                  <p>
                    <strong className="text-[#343D31]">Popular Palettes:</strong> {craft.sampleColors}
                  </p>
                  <p>
                    <strong className="text-[#343D31]">Great For:</strong> {craft.idealFor}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedCraft(craft.name);
                  const formElement = document.getElementById("order-builder");
                  formElement?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full border border-[#343D31]/20 hover:bg-[#343D31] hover:text-[#FFFEFB] text-[#343D31] text-xs font-semibold tracking-wide transition-all cursor-pointer"
              >
                <span>Select for Custom Request</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Custom Order Message Builder */}
      <section id="order-builder" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFEFB] border border-[#343D31]/15 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-8">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#DCE8D5] via-[#E8C67A] to-[#CFA9BA]" />

          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE6D7] text-xs font-medium text-[#343D31]">
              <Sparkles className="w-3.5 h-3.5 text-[#E8C67A]" />
              <span>Interactive Commission Helper</span>
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F]">
              Build Your WhatsApp Enquiry
            </h2>
            <p className="text-sm text-[#343D31]/80 max-w-xl">
              Fill in what you have in mind and we&apos;ll prepare your exact message. You can edit it
              freely in WhatsApp before sending!
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1: Craft Type */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-[#343D31] block">
                1. Select Craft Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CRAFT_OPTIONS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCraft(c.name)}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                      selectedCraft === c.name
                        ? "border-[#343D31] bg-[#DCE8D5]/40 text-[#24231F] font-semibold ring-1 ring-[#343D31]"
                        : "border-[#343D31]/15 bg-[#F8F3E9]/60 text-[#343D31]/80 hover:bg-[#EFE6D7]"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Custom Wording / Elements */}
            <div className="space-y-2">
              <label htmlFor="custom-wording" className="text-xs font-mono uppercase tracking-widest text-[#343D31] block">
                2. Details, Names, or Specific Flowers
              </label>
              <textarea
                id="custom-wording"
                rows={3}
                value={customWording}
                onChange={(e) => setCustomWording(e.target.value)}
                placeholder="e.g. Yellow sunflower & pink lily bouquet, or Arabic name 'Fatima' framed with gold accent..."
                className="w-full p-3.5 rounded-xl border border-[#343D31]/20 bg-[#F8F3E9]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#343D31] text-[#24231F]"
              />
            </div>

            {/* Step 3: Colors & Occasion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="color-pref" className="text-xs font-mono uppercase tracking-widest text-[#343D31] block">
                  3. Preferred Color Palette
                </label>
                <input
                  id="color-pref"
                  type="text"
                  value={colorPreference}
                  onChange={(e) => setColorPreference(e.target.value)}
                  placeholder="e.g. Forest green, honey gold, blush pink..."
                  className="w-full p-3 rounded-xl border border-[#343D31]/20 bg-[#F8F3E9]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#343D31] text-[#24231F]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="occasion-input" className="text-xs font-mono uppercase tracking-widest text-[#343D31] block">
                  4. Occasion or Target Date
                </label>
                <input
                  id="occasion-input"
                  type="text"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  placeholder="e.g. Birthday gift next Friday, Wedding decor..."
                  className="w-full p-3 rounded-xl border border-[#343D31]/20 bg-[#F8F3E9]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#343D31] text-[#24231F]"
                />
              </div>
            </div>

            {/* WhatsApp Message Preview & CTA */}
            <div className="p-5 rounded-2xl bg-[#EFE6D7]/60 border border-[#343D31]/15 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#343D31]/70">
                <span className="font-mono uppercase tracking-wider font-semibold text-[#343D31]">
                  WhatsApp Message Preview
                </span>
                <span className="font-[family-name:var(--font-handwriting)] text-base text-[#343D31]">
                  Tap below to start chat
                </span>
              </div>

              <p className="text-xs sm:text-sm font-mono text-[#343D31]/90 bg-[#FFFEFB] p-3.5 rounded-xl border border-[#343D31]/10 whitespace-pre-wrap">
                Hi Whimsical Moss! I&apos;m interested in a custom order:&#10;
                • Craft: {selectedCraft}&#10;
                {customWording && `• Notes: ${customWording}\n`}
                {colorPreference && `• Colors: ${colorPreference}\n`}
                {occasion && `• Occasion: ${occasion}\n`}
                Could you please share details, pricing, and timing?
              </p>

              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#343D31] hover:bg-[#24231F] text-[#FFFEFB] text-sm sm:text-base font-medium shadow-md transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 text-[#E8C67A]" />
                <span>Send Custom Order Enquiry on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Assurances Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#FFFEFB] border border-[#343D31]/10 space-y-3 text-center">
            <div className="w-10 h-10 rounded-full bg-[#DCE8D5] mx-auto flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#343D31]" />
            </div>
            <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#24231F]">
              3–7 Days Crafting
            </h3>
            <p className="text-xs sm:text-sm text-[#343D31]/75 leading-relaxed">
              Every item is sculpted, crocheted, or inked one by one with unhurried attention to detail.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFFEFB] border border-[#343D31]/10 space-y-3 text-center">
            <div className="w-10 h-10 rounded-full bg-[#EFE6D7] mx-auto flex items-center justify-center">
              <Gift className="w-5 h-5 text-[#343D31]" />
            </div>
            <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#24231F]">
              Gift-Ready Wrapping
            </h3>
            <p className="text-xs sm:text-sm text-[#343D31]/75 leading-relaxed">
              Arrives wrapped in delicate crinkled parchment with natural ribbon and an optional handwritten card.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFFEFB] border border-[#343D31]/10 space-y-3 text-center">
            <div className="w-10 h-10 rounded-full bg-[#DCE8D5] mx-auto flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#343D31]" />
            </div>
            <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#24231F]">
              Direct Confirmation
            </h3>
            <p className="text-xs sm:text-sm text-[#343D31]/75 leading-relaxed">
              We send photo previews before sealing your parcel so you can be 100% in love with the result.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#343D31]/60">
            Common Inquiries
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F]">
            Custom Order FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFEFB] border border-[#343D31]/15 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-[family-name:var(--font-serif)] text-lg text-[#24231F] hover:text-[#343D31] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#343D31]/60 shrink-0 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#343D31]/80 leading-relaxed border-t border-[#343D31]/10 font-[family-name:var(--font-sans)]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
