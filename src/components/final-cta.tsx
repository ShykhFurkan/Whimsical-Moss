import React from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  BotanicalBloomSvg,
  BotanicalDaisySvg,
  BotanicalBellflowerSvg,
  BotanicalFloatingPetalSvg,
  DoodleSparkle,
  WashiTapeStrip,
  InstagramIcon,
} from "./hand-drawn-accents";
import { MessageCircle } from "lucide-react";

export function FinalCta() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section className="py-24 bg-[#F8F3E9] relative overflow-hidden">
      {/* Decorative botanical flourishes in corners & edges */}
      <div className="absolute -bottom-8 -left-8 pointer-events-none opacity-25">
        <BotanicalBloomSvg className="w-48 h-48 text-[#343D31]" />
      </div>
      <div className="absolute -top-8 -right-8 pointer-events-none opacity-25">
        <BotanicalBloomSvg className="w-48 h-48 text-[#343D31] rotate-90" />
      </div>
      <div className="absolute top-1/4 left-10 pointer-events-none opacity-30 hidden sm:block">
        <BotanicalDaisySvg className="w-20 h-20 text-[#343D31] rotate-12" />
      </div>
      <div className="absolute bottom-1/4 right-12 pointer-events-none opacity-35 hidden sm:block">
        <BotanicalBellflowerSvg className="w-20 h-24 text-[#343D31] -rotate-12" />
      </div>
      <div className="absolute top-12 left-1/3 pointer-events-none opacity-30">
        <BotanicalFloatingPetalSvg className="w-8 h-8 text-[#E8C67A] rotate-45" />
      </div>
      <div className="absolute bottom-8 right-1/3 pointer-events-none opacity-30">
        <BotanicalFloatingPetalSvg className="w-8 h-8 text-[#CFA9BA] -rotate-12" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <WashiTapeStrip className="-top-3 left-1/2 -translate-x-1/2" rotation="0.5deg" color="#E8C67A" />

        <div className="bg-[#FFFEFB] border border-[#343D31]/15 rounded-3xl p-8 sm:p-14 text-center space-y-8 shadow-xl relative">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE6D7] border border-[#343D31]/10 text-xs font-medium text-[#343D31]">
            <DoodleSparkle className="w-4 h-4 text-[#E8C67A]" />
            <span>Ready When You Are</span>
          </div>

          <div className="space-y-4 max-w-xl mx-auto">
            <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl font-normal text-[#24231F] tracking-tight">
              Have a little idea?
            </h2>

            <p className="text-base sm:text-lg text-[#343D31]/80 leading-relaxed">
              Tell us what you&apos;re imagining, and let&apos;s explore what we can make together.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#343D31] text-[#FFFEFB] text-base font-medium shadow-md hover:bg-[#24231F] hover:shadow-lg transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-[#E8C67A]" />
              <span>Let&apos;s Make It Real</span>
            </a>

            <a
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#FFFEFB] border border-[#343D31]/20 text-[#343D31] text-base font-medium hover:bg-[#EFE6D7]/60 transition-all shadow-xs"
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Follow On Instagram</span>
            </a>
          </div>

          <p className="font-[family-name:var(--font-handwriting)] text-lg text-[#343D31]/80 pt-2">
            No pressure, no automated carts — just an honest conversation about making.
          </p>
        </div>
      </div>
    </section>
  );
}
