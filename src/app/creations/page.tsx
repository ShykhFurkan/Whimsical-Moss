import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CreationsGallery } from "@/components/creations-gallery";
import {
  BotanicalBloomSvg,
  BotanicalDaisySvg,
  BotanicalBellflowerSvg,
  BotanicalWildSprigSvg,
} from "@/components/hand-drawn-accents";
import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Creations & Portfolio | Whimsical Moss",
  description:
    "Explore our full collection of handmade pipe cleaner flower bouquets, crochet bags, custom Arabic calligraphy, and hand-painted Islamic canvas art.",
};

export default function CreationsPage() {
  const customEnquiryUrl = buildWhatsAppUrl();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3E9] text-[#24231F]">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 bg-[#EFE6D7]/40 border-b border-[#343D31]/10 overflow-hidden">
          <div className="absolute top-6 left-6 pointer-events-none opacity-25">
            <BotanicalDaisySvg className="w-24 h-24 text-[#343D31] -rotate-12" />
          </div>
          <div className="absolute bottom-4 right-10 pointer-events-none opacity-20 hidden sm:block">
            <BotanicalBellflowerSvg className="w-20 h-28 text-[#343D31] rotate-12" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-5">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs text-[#343D31]/70 font-mono uppercase tracking-wider">
              <Link href="/" className="hover:text-[#343D31] hover:underline">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#343D31] font-semibold">Creations</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFEFB] border border-[#343D31]/15 text-xs font-medium text-[#343D31] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E8C67A]" />
              <span>Full Studio Showcase</span>
            </div>

            <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl font-normal text-[#24231F] tracking-tight">
              Handcrafted Studio Creations
            </h1>

            <p className="max-w-2xl mx-auto text-[#343D31]/80 text-base sm:text-lg leading-relaxed">
              Every item at Whimsical Moss is crafted stroke-by-stroke and petal-by-petal. Browse our
              original pipe-cleaner floral bouquets, crochet heirlooms, calligraphy plaques, and
              hand-painted canvases.
            </p>

            <p className="font-[family-name:var(--font-handwriting)] text-xl sm:text-2xl text-[#343D31]">
              Each piece can be customized with your favorite colors, verses, or flower styles.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <CreationsGallery />

        {/* Bottom Bespoke Callout Banner */}
        <section className="py-16 bg-[#FFFEFB] border-t border-[#343D31]/10 relative overflow-hidden">
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 hidden md:block">
            <BotanicalWildSprigSvg className="w-24 h-40 text-[#343D31]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#DCE8D5] mx-auto flex items-center justify-center border border-[#343D31]/15">
              <BotanicalBloomSvg className="w-7 h-7 text-[#343D31]" />
            </div>

            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F]">
              Have a bespoke vision in mind?
            </h2>

            <p className="text-[#343D31]/80 max-w-xl mx-auto text-base leading-relaxed">
              Whether you want a bouquet with personalized blooms, an Arabic calligraphy frame with a
              beloved family name, or a customized crochet handbag palette, we love bringing unique ideas
              to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/custom-orders"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#343D31] text-[#FFFEFB] text-sm font-medium hover:bg-[#24231F] transition-all shadow-sm"
              >
                <span>Explore Custom Order Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={customEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#343D31]/25 hover:bg-[#EFE6D7] text-[#343D31] text-sm font-medium transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#343D31]" />
                <span>Chat with Maker on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
