import {
  BotanicalBloomSvg,
  BotanicalDaisySvg,
  BotanicalWildSprigSvg,
  BotanicalFloatingPetalSvg,
  WashiTapeStrip,
} from "./hand-drawn-accents";
import { DevPlaceholderBadge } from "./dev-placeholder-badge";
import { Palette, Scissors, Sparkles, Heart } from "lucide-react";

export function MakerSection() {
  return (
    <section id="maker" className="py-20 bg-[#F8F3E9] border-b border-[#343D31]/10 relative overflow-hidden">
      {/* Background botanical accents */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-30">
        <BotanicalDaisySvg className="w-24 h-24 text-[#343D31] rotate-12" />
      </div>
      <div className="absolute bottom-6 left-8 pointer-events-none opacity-35 hidden sm:block">
        <BotanicalWildSprigSvg className="w-14 h-24 text-[#343D31] -rotate-12" />
      </div>
      <div className="absolute top-1/2 right-1/4 pointer-events-none opacity-30">
        <BotanicalFloatingPetalSvg className="w-7 h-7 text-[#CFA9BA] rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Sketchbook portrait & tactile studio details */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <WashiTapeStrip className="-top-3 left-10" rotation="-2deg" color="#E8C67A" />

              <div className="paper-card rounded-2xl p-6 sm:p-8 space-y-6">
                {/* Working hands / portrait placeholder illustration */}
                <div className="relative w-full h-72 rounded-xl bg-[#EFE6D7] border border-[#343D31]/15 overflow-hidden flex flex-col items-center justify-center p-6 text-center space-y-4 shadow-inner">
                  <div className="w-20 h-20 rounded-full bg-[#FFFEFB] border border-[#343D31]/20 flex items-center justify-center shadow-sm">
                    <BotanicalBloomSvg className="w-12 h-12 text-[#343D31]" />
                  </div>

                  <div className="space-y-1">
                    <p className="font-[family-name:var(--font-serif)] text-lg font-bold text-[#343D31]">
                      In The Studio
                    </p>
                    <p className="text-xs text-[#343D31]/70 font-mono">
                      Working with hands, ink, and velvet wire
                    </p>
                  </div>

                  <DevPlaceholderBadge label="Studio / Maker Portrait Slot" />
                </div>

                {/* Studio Tools Snippet */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs text-[#343D31]">
                  <div className="p-2 rounded-lg bg-[#F8F3E9] border border-[#343D31]/10 space-y-1">
                    <Scissors className="w-4 h-4 mx-auto text-[#343D31]/80" />
                    <span className="block text-[11px] font-mono">Shaping</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F8F3E9] border border-[#343D31]/10 space-y-1">
                    <Palette className="w-4 h-4 mx-auto text-[#343D31]/80" />
                    <span className="block text-[11px] font-mono">Inking</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F8F3E9] border border-[#343D31]/10 space-y-1">
                    <Sparkles className="w-4 h-4 mx-auto text-[#343D31]/80" />
                    <span className="block text-[11px] font-mono">Finishing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Maker Philosophy & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE6D7] border border-[#343D31]/10 text-xs font-medium text-[#343D31]">
              <Heart className="w-3.5 h-3.5 text-[#CFA9BA] fill-[#CFA9BA]" />
              <span>The Hands Behind Whimsical Moss</span>
            </div>

            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight">
              Made by hand, <span className="italic">with a little heart.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#343D31]/85 leading-relaxed">
              <p>
                Every piece begins with an idea and a love for making things. I enjoy exploring
                tactile materials, trying new details, and turning thoughtful moments into handmade
                creations that bring gentle warmth to someone&apos;s everyday space.
              </p>

              <p>
                Whether it&apos;s the gentle curves of a sculptured pipe-cleaner flower that never wilts,
                the rhythmic dip-pen flow of gold ink on deckle-edged paper, or a pocket wildflower
                painting, each creation is crafted one piece at a time.
              </p>
            </div>

            {/* Owner Note Indicator */}
            <div className="p-4 rounded-xl bg-[#EFE6D7]/60 border border-[#343D31]/15 text-xs text-[#343D31]/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold uppercase tracking-wider text-[10px] text-[#343D31]">
                  Content Note:
                </span>
                <span className="text-[11px] bg-[#FFFEFB] px-2 py-0.5 rounded border border-[#343D31]/10">
                  Approved draft from CONTENT_PLAN.md
                </span>
              </div>
              <p>
                This narrative is awaiting the owner&apos;s personal first-person touch and confirmed
                location details as tracked in <code>OPEN_DECISIONS.md</code>.
              </p>
            </div>

            {/* Hand-lettered signature flourish */}
            <div className="pt-2 flex items-center gap-3">
              <div className="font-[family-name:var(--font-handwriting)] text-3xl text-[#343D31]">
                Whimsical Moss Studio
              </div>
              <span className="text-xs font-mono text-[#343D31]/60">Handmade with care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
