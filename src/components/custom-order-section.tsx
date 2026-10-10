"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ORDER_PROCESS_STEPS } from "@/data/site-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  BotanicalBloomSvg,
  BotanicalDaisySvg,
  BotanicalBellflowerSvg,
  BotanicalFloatingPetalSvg,
  DoodleSparkle,
} from "./hand-drawn-accents";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

export function CustomOrderSection() {
  const [selectedCraft, setSelectedCraft] = useState<string>("Pipe Cleaner Floral Bouquet");
  const [ideaText, setIdeaText] = useState<string>("");
  const [colorPreference, setColorPreference] = useState<string>("");

  const dynamicWhatsAppUrl = buildWhatsAppUrl({
    craftType: selectedCraft,
    customIdea: ideaText || undefined,
    preferredColours: colorPreference || undefined,
  });

  return (
    <section id="custom-orders" className="py-20 bg-[#EFE6D7]/40 border-b border-[#343D31]/10 relative overflow-hidden">
      {/* Background botanical flower accents */}
      <div className="absolute top-10 right-6 pointer-events-none opacity-30">
        <BotanicalBellflowerSvg className="w-24 h-28 text-[#343D31] rotate-12" />
      </div>
      <div className="absolute bottom-16 -left-4 pointer-events-none opacity-30 hidden sm:block">
        <BotanicalBloomSvg className="w-24 h-24 text-[#343D31] -rotate-45" />
      </div>
      <div className="absolute top-1/2 left-4 pointer-events-none opacity-25">
        <BotanicalFloatingPetalSvg className="w-8 h-8 text-[#E8C67A] rotate-12" />
      </div>
      <div className="absolute bottom-8 right-16 pointer-events-none opacity-35">
        <BotanicalDaisySvg className="w-16 h-16 text-[#343D31] -rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCE8D5] border border-[#343D31]/10 text-xs font-medium text-[#343D31]">
            <DoodleSparkle className="w-4 h-4 text-[#343D31]" />
            <span>Commission & Bespoke Gifts</span>
          </div>

          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight">
            You imagine it. <span className="italic">Let&apos;s make it real.</span>
          </h2>

          <p className="text-[#343D31]/80 text-base sm:text-lg leading-relaxed">
            Have a gift idea, a colour palette, a sketch, or something you haven&apos;t seen anywhere else?
            Share what you have in mind. We&apos;ll discuss the details and work out what&apos;s possible.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ORDER_PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#FFFEFB] border border-[#343D31]/12 rounded-xl p-8 relative shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-[family-name:var(--font-serif)] text-3xl text-[#E8C67A] font-bold block">
                  {step.step}
                </span>

                <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#24231F]">
                  {step.title}
                </h3>

                <p className="text-sm text-[#343D31]/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#343D31]/10 flex items-start gap-2 text-xs text-[#343D31]/70">
                <CheckCircle2 className="w-4 h-4 text-[#343D31] shrink-0 mt-0.5" />
                <span className="font-[family-name:var(--font-handwriting)] text-base text-[#343D31]">
                  {step.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Custom Order Message Builder */}
        <div className="bg-[#FFFEFB] border border-[#343D31]/15 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Subtle top decoration */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DCE8D5] via-[#E8C67A] to-[#CFA9BA]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#343D31]/60">
                  Instant Message Preparer
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-[#24231F]">
                  What would you like to create together?
                </h3>
                <p className="text-sm text-[#343D31]/80">
                  Select a category and add any thoughts. We will format your WhatsApp message so it&apos;s
                  ready to send in one tap.
                </p>
              </div>

              {/* Craft Type Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#343D31]">
                  1. Craft Medium:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Pipe Cleaner Floral Bouquet", price: "₹250" },
                    { label: "Pipe Cleaner Phone Case", price: "₹400" },
                    { label: "Crochet Rose Bouquet / Bag", price: "₹600" },
                    { label: "Arabic Calligraphy Plaque", price: "₹400" },
                    { label: "Islamic Canvas Painting", price: "₹400" },
                  ].map((craft) => (
                    <button
                      key={craft.label}
                      type="button"
                      onClick={() => setSelectedCraft(craft.label)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        selectedCraft === craft.label
                          ? "bg-[#343D31] text-[#FFFEFB]"
                          : "bg-[#EFE6D7]/60 text-[#343D31] hover:bg-[#EFE6D7]"
                      }`}
                    >
                      <span>{craft.label}</span>
                      <span className="opacity-75 text-[11px] font-mono">from {craft.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Idea input */}
              <div className="space-y-2">
                <label
                  htmlFor="idea-input"
                  className="block text-xs font-bold uppercase tracking-wider text-[#343D31]"
                >
                  2. Brief Idea or Inspiration (optional):
                </label>
                <input
                  id="idea-input"
                  type="text"
                  value={ideaText}
                  onChange={(e) => setIdeaText(e.target.value)}
                  placeholder="e.g. Lavender & daisy bouquet for my sister's desk"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#343D31]/20 bg-[#F8F3E9]/50 text-sm focus:bg-[#FFFEFB] focus:border-[#343D31]"
                />
              </div>

              {/* Colors input */}
              <div className="space-y-2">
                <label
                  htmlFor="colors-input"
                  className="block text-xs font-bold uppercase tracking-wider text-[#343D31]"
                >
                  3. Preferred Colours or Mood (optional):
                </label>
                <input
                  id="colors-input"
                  type="text"
                  value={colorPreference}
                  onChange={(e) => setColorPreference(e.target.value)}
                  placeholder="e.g. Sage green, honey gold, warm blush"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#343D31]/20 bg-[#F8F3E9]/50 text-sm focus:bg-[#FFFEFB] focus:border-[#343D31]"
                />
              </div>
            </div>

            {/* Live WhatsApp Preview Box */}
            <div className="lg:col-span-5 bg-[#F8F3E9] border border-[#343D31]/15 rounded-xl p-6 space-y-4 shadow-inner">
              <div className="flex items-center justify-between text-xs font-mono text-[#343D31]/70">
                <span>PREVIEW ON WHATSAPP</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              <div className="bg-[#FFFEFB] rounded-lg p-4 border border-[#343D31]/10 text-xs text-[#24231F] font-sans space-y-2 leading-relaxed shadow-xs">
                <p className="font-semibold text-[#343D31]">To: Whimsical Moss Studio</p>
                <p>
                  Hi! I found Whimsical Moss through your website and would love to ask about a custom
                  creation.
                </p>
                <p className="text-[#343D31]/80">
                  <span className="font-medium text-[#343D31]">Craft type:</span> {selectedCraft}
                </p>
                {ideaText && (
                  <p className="text-[#343D31]/80">
                    <span className="font-medium text-[#343D31]">My idea:</span> {ideaText}
                  </p>
                )}
                {colorPreference && (
                  <p className="text-[#343D31]/80">
                    <span className="font-medium text-[#343D31]">Preferred colours/style:</span>{" "}
                    {colorPreference}
                  </p>
                )}
                <p className="text-[#343D31]/60 italic">
                  I can share reference photos or sketches here too!
                </p>
              </div>

              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#343D31] text-[#FFFEFB] text-sm font-medium hover:bg-[#24231F] transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#E8C67A]" />
                <span>Open in WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-[#343D31]/60 font-[family-name:var(--font-handwriting)] text-sm">
                No automatic checkout — orders are confirmed only after your approval.
              </p>

              <div className="pt-2 border-t border-[#343D31]/10 text-center">
                <Link
                  href="/custom-orders"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#343D31] hover:underline"
                >
                  <span>Explore Full Custom Order Guide & Options</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
