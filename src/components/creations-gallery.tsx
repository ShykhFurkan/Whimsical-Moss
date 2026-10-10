"use client";

import React, { useState } from "react";
import { CRAFT_CATEGORIES, CREATION_ITEMS, CreationItem } from "@/data/site-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArtworkVisualCanvas } from "./artwork-preview-card";
import {
  BotanicalBloomSvg,
  BotanicalDaisySvg,
  BotanicalWildSprigSvg,
  BotanicalFloatingPetalSvg,
} from "./hand-drawn-accents";
import { MessageCircle } from "lucide-react";

export function CreationsGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? CREATION_ITEMS
      : CREATION_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="creations" className="py-20 bg-[#F8F3E9] border-b border-[#343D31]/10 relative overflow-hidden">
      {/* Background botanical flower accents */}
      <div className="absolute top-16 -left-4 pointer-events-none opacity-30">
        <BotanicalDaisySvg className="w-28 h-28 text-[#343D31] -rotate-12" />
      </div>
      <div className="absolute top-1/2 -right-6 pointer-events-none opacity-35 hidden md:block">
        <BotanicalWildSprigSvg className="w-16 h-28 text-[#343D31] rotate-12" />
      </div>
      <div className="absolute bottom-10 left-10 pointer-events-none opacity-30">
        <BotanicalFloatingPetalSvg className="w-8 h-8 text-[#CFA9BA] rotate-45" />
      </div>
      <div className="absolute bottom-20 right-12 pointer-events-none opacity-30 hidden sm:block">
        <BotanicalDaisySvg className="w-16 h-16 text-[#343D31] rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE6D7] border border-[#343D31]/10 text-xs font-medium text-[#343D31]">
            <BotanicalBloomSvg className="w-4 h-4" />
            <span>Selected Portfolio & Explorations</span>
          </div>

          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight">
            A little world of handmade things.
          </h2>

          <p className="text-[#343D31]/80 text-base sm:text-lg leading-relaxed">
            From colourful little blooms to thoughtful lettering and original artwork, explore pieces
            made by hand and ideas made just for you.
          </p>

          <p className="font-[family-name:var(--font-handwriting)] text-lg text-[#343D31]/90">
            Have a custom variation in mind? Any piece can inspire your own tailored piece.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CRAFT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#343D31] text-[#FFFEFB] shadow-sm"
                    : "bg-[#FFFEFB] text-[#343D31]/80 hover:bg-[#EFE6D7] border border-[#343D31]/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item: CreationItem) => {
            const itemWhatsAppUrl = buildWhatsAppUrl({
              craftType: item.categoryLabel,
              itemTitle: item.title,
            });

            return (
              <article
                key={item.id}
                className="group paper-card rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Artwork Visual Slot */}
                  <ArtworkVisualCanvas
                    artType={item.placeholderArtType}
                    accentColor={item.accentColor}
                    image={item.image}
                    title={item.title}
                    isPlaceholder={item.isPlaceholder}
                    galleryImages={item.galleryImages}
                  />

                  {/* Card Content Details */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#343D31]/60 px-2.5 py-0.5 rounded-full bg-[#EFE6D7]">
                        {item.categoryLabel}
                      </span>
                      <span className="text-xs text-[#343D31]/60 font-[family-name:var(--font-handwriting)] text-sm">
                        One-of-a-kind
                      </span>
                    </div>

                    <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#24231F] group-hover:text-[#343D31] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#343D31]/80 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-[#343D31]/10 text-xs text-[#343D31]/70 space-y-1">
                      <p>
                        <strong className="text-[#343D31] font-medium">Materials:</strong>{" "}
                        {item.materials}
                      </p>
                      <p className="italic text-[#343D31]/80">{item.details}</p>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <a
                    href={itemWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-[#343D31]/20 hover:border-[#343D31] hover:bg-[#343D31] hover:text-[#FFFEFB] text-[#343D31] text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-98"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire About This Style</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
