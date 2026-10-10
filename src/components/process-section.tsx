import React from "react";
import Link from "next/link";
import { STUDIO_HIGHLIGHTS } from "@/data/site-content";
import { BotanicalBloomSvg, DoodleSparkle } from "./hand-drawn-accents";
import { DevPlaceholderBadge } from "./dev-placeholder-badge";
import { Layers, Sparkles, Feather, Gift, ArrowRight } from "lucide-react";

export function ProcessSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "materials":
        return <Layers className="w-5 h-5 text-[#343D31]" />;
      case "crafting":
        return <Feather className="w-5 h-5 text-[#343D31]" />;
      case "details":
        return <Sparkles className="w-5 h-5 text-[#343D31]" />;
      case "packaging":
        return <Gift className="w-5 h-5 text-[#343D31]" />;
      default:
        return <BotanicalBloomSvg className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-[#EFE6D7]/40 border-b border-[#343D31]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8C67A]/40 border border-[#343D31]/10 text-xs font-medium text-[#343D31]">
            <DoodleSparkle className="w-4 h-4 text-[#343D31]" />
            <span>Behind The Scenes</span>
          </div>

          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight">
            A little look behind the scenes.
          </h2>

          <p className="text-[#343D31]/80 text-base sm:text-lg leading-relaxed">
            The small details matter: choosing colours, shaping materials, making adjustments, and
            adding the finishing touches.
          </p>
        </div>

        {/* 4 Process Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_HIGHLIGHTS.map((highlight, index) => (
            <div
              key={highlight.id}
              className="paper-card rounded-xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center border border-[#343D31]/15"
                  style={{ backgroundColor: highlight.accent }}
                >
                  {getIcon(highlight.id)}
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#343D31]/50 uppercase tracking-widest">
                    Step {index + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-[#24231F]">
                    {highlight.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#343D31]/80 leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#343D31]/10">
                <DevPlaceholderBadge label="Process Photo Slot" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Full Process & Care Guide */}
        <div className="text-center pt-2">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#343D31] hover:bg-[#24231F] text-[#FFFEFB] text-xs font-semibold tracking-wide transition-all shadow-xs"
          >
            <span>See Full Craft Process &amp; Care Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
