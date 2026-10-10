import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import {
  BotanicalBloomSvg,
  BotanicalDaisySvg,
  BotanicalBellflowerSvg,
  BotanicalWildSprigSvg,
  BotanicalFloatingPetalSvg,
  DoodleSparkle,
  CurvedArrow,
} from "./hand-drawn-accents";
import { MessageCircle, ArrowRight, Sparkles, Heart } from "lucide-react";

export function HeroSection() {

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 border-b border-[#343D31]/10 bg-gradient-to-b from-[#F8F3E9] to-[#EFE6D7]/40">
      {/* Decorative botanical flourishes in background */}
      <div className="absolute top-4 left-6 pointer-events-none opacity-45">
        <BotanicalBloomSvg className="w-24 h-24 text-[#343D31]" />
      </div>
      <div className="absolute top-12 left-1/4 pointer-events-none opacity-35 hidden sm:block">
        <BotanicalDaisySvg className="w-16 h-16 text-[#343D31] rotate-12" />
      </div>
      <div className="absolute bottom-8 left-12 pointer-events-none opacity-40">
        <BotanicalWildSprigSvg className="w-12 h-20 text-[#343D31] -rotate-12" />
      </div>
      <div className="absolute top-1/3 right-10 pointer-events-none opacity-45 hidden md:block">
        <BotanicalBloomSvg className="w-28 h-28 text-[#343D31] rotate-45" />
      </div>
      <div className="absolute top-8 right-1/4 pointer-events-none opacity-40 hidden lg:block">
        <BotanicalBellflowerSvg className="w-20 h-24 text-[#343D31] rotate-6" />
      </div>
      <div className="absolute bottom-12 right-20 pointer-events-none opacity-35">
        <BotanicalDaisySvg className="w-20 h-20 text-[#343D31] -rotate-6" />
      </div>
      <div className="absolute top-1/2 left-8 pointer-events-none opacity-40">
        <BotanicalFloatingPetalSvg className="w-8 h-8 text-[#CFA9BA] rotate-45" />
      </div>
      <div className="absolute bottom-24 right-1/3 pointer-events-none opacity-40 hidden sm:block">
        <BotanicalFloatingPetalSvg className="w-7 h-7 text-[#E8C67A] -rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Hand-lettered playful tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6D7] border border-[#343D31]/15 shadow-sm">
              <DoodleSparkle className="w-4 h-4 text-[#343D31]" />
              <span className="font-[family-name:var(--font-handwriting)] text-base text-[#343D31] font-semibold">
                An artist&apos;s little sketchbook &amp; studio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal text-[#24231F] leading-[1.08] tracking-tight">
              Little things, <br />
              <span className="italic relative inline-block">
                made with love.
                {/* Hand-drawn underline squiggle */}
                <svg
                  viewBox="0 0 260 20"
                  fill="none"
                  className="absolute -bottom-2.5 left-0 w-full h-4 text-[#E8C67A]"
                  aria-hidden="true"
                >
                  <path
                    d="M3 14 C60 4, 150 18, 255 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy from Content Plan */}
            <p className="text-base sm:text-lg text-[#343D31]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {SITE_CONFIG.shortDescription}
            </p>

            {/* Quick craft category tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              {[
                "Pipe-cleaner flowers",
                "Custom calligraphy",
                "Pocket paintings",
                "One-of-a-kind commissions",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#FFFEFB] border border-[#343D31]/10 text-xs text-[#343D31] font-medium shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/custom-orders"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#343D31] text-[#FFFEFB] text-base font-medium shadow-md hover:bg-[#24231F] hover:shadow-lg transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-[#E8C67A]" />
                <span>Create Something Custom</span>
              </Link>

              <Link
                href="/creations"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFEFB] border border-[#343D31]/20 text-[#343D31] text-base font-medium hover:bg-[#EFE6D7]/60 hover:border-[#343D31]/40 transition-all shadow-xs"
              >
                <span>Explore Creations</span>
                <ArrowRight className="w-4 h-4 text-[#343D31]/70" />
              </Link>
            </div>

            {/* Trust & enquiry note */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#343D31]/70 pt-1">
              <Heart className="w-3.5 h-3.5 text-[#CFA9BA] fill-[#CFA9BA]" />
              <span>Direct conversation with the maker • Custom requests always welcome</span>
            </div>
          </div>

          {/* Right Column: Tactile Sketchbook Collage Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Washi tape on top */}
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#E8C67A]/75 z-20 shadow-xs pointer-events-none"
                style={{
                  clipPath: "polygon(2% 0%, 98% 2%, 97% 98%, 0% 96%)",
                }}
              />

              {/* Main Sketchbook Frame */}
              <div className="bg-[#FFFEFB] border border-[#343D31]/15 rounded-xl p-5 sm:p-6 shadow-xl relative">
                {/* Polaroids / Artwork showcase */}
                <div className="relative rounded-lg overflow-hidden bg-[#EFE6D7] border border-[#343D31]/15 shadow-sm group">
                  <div className="relative w-full h-72 sm:h-80 overflow-hidden">
                    <Image
                      src="/images/hero/hero-artwork.webp"
                      alt="Handcrafted Whimsical Moss studio creations featuring pipe-cleaner flowers, calligraphy, and botanical art"
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24231F]/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-[#FFFEFB] z-10">
                      <div>
                        <p className="font-[family-name:var(--font-serif)] text-lg font-bold leading-tight">
                          Handcrafted Velvet Blooms &amp; Calligraphy
                        </p>
                        <p className="font-[family-name:var(--font-handwriting)] text-sm text-[#E8C67A]">
                          &ldquo;Patience, color, and gentle curves&rdquo;
                        </p>
                      </div>
                      <span className="p-1.5 bg-[#E8C67A] text-[#343D31] rounded-full shadow-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-[#FFFEFB] flex items-center justify-between border-t border-[#343D31]/10 text-xs">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border border-[#343D31]/20 bg-[#FFFEFB] text-[#343D31] shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                        Studio Original
                      </span>
                    </div>
                    <span className="font-[family-name:var(--font-handwriting)] text-sm text-[#343D31]">
                      Studio Select No. 01
                    </span>
                  </div>
                </div>

                {/* Hand-written marginalia note */}
                <div className="mt-4 flex items-center justify-between text-xs text-[#343D31]/80 font-mono">
                  <span>No. 01 — Studio Selected</span>
                  <span className="font-[family-name:var(--font-handwriting)] text-base text-[#343D31]">
                    Every bloom is shaped by hand ✨
                  </span>
                </div>
              </div>

              {/* Floating sketchbook annotation with curved arrow */}
              <div className="hidden sm:flex items-center gap-2 absolute -bottom-8 -left-6 z-10 pointer-events-none">
                <CurvedArrow className="w-8 h-8 text-[#343D31] -rotate-12" />
                <span className="font-[family-name:var(--font-handwriting)] text-lg text-[#343D31] bg-[#FFFEFB] px-2 py-0.5 rounded border border-[#343D31]/10 shadow-xs">
                  Tell me your favourite colors!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
