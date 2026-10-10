import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  BotanicalBloomSvg,
  WashiTapeStrip,
} from "@/components/hand-drawn-accents";
import {
  Heart,
  Scissors,
  Palette,
  ArrowRight,
  MessageCircle,
  Feather,
  Layers,
  Smile,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Meet The Maker | Whimsical Moss",
  description:
    "Discover the story behind Whimsical Moss, our tactile slow-craft philosophy, materials, and passion for handmade artistry.",
};

export default function MakerPage() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3E9] text-[#24231F]">
      <SiteHeader />

      <main className="flex-1 space-y-20 py-12 sm:py-16">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6D7] border border-[#343D31]/15 text-xs font-medium text-[#343D31]">
            <Heart className="w-3.5 h-3.5 text-[#CFA9BA] fill-[#CFA9BA]" />
            <span>The Story & Studio Philosophy</span>
          </div>

          <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl font-normal text-[#24231F] tracking-tight">
            Meet The Maker Behind Whimsical Moss
          </h1>

          <p className="text-base sm:text-lg text-[#343D31]/80 max-w-2xl mx-auto leading-relaxed">
            A quiet passion for tactile textures, patient slow-crafting, and meaningful art that
            transforms ordinary moments into lasting keepsakes.
          </p>

          <p className="font-[family-name:var(--font-handwriting)] text-2xl text-[#343D31]">
            &ldquo;We don&apos;t just craft objects; we craft feelings and memories.&rdquo;
          </p>
        </section>

        {/* Story & Studio Photo Split */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Studio Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                <WashiTapeStrip className="-top-3 left-10" rotation="-2deg" color="#E8C67A" />

                <div className="paper-card rounded-2xl p-6 sm:p-8 space-y-6">
                  <div className="relative w-full h-84 rounded-xl overflow-hidden border border-[#343D31]/15 shadow-sm group">
                    <Image
                      src="/images/maker/maker-studio.jpg"
                      alt="The maker hands working in the Whimsical Moss studio"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24231F]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-[#FFFEFB] z-10">
                      <p className="font-[family-name:var(--font-serif)] text-lg font-bold">
                        The Quiet Joy of the Studio
                      </p>
                      <p className="text-xs text-[#E8C67A] font-mono">
                        Hand-coiling chenille stems &amp; inking calligraphic letters
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8F3E9] border border-[#343D31]/10 text-xs text-[#343D31]/80 space-y-1">
                    <p className="font-semibold text-[#343D31]">Studio Location &amp; Spirit</p>
                    <p>
                      An independent home studio nestled in soft natural light, surrounded by rolls of
                      chenille stems, skeins of soft cotton yarn, bottles of rich ink, and fresh tea.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* In-depth Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F]">
                How Whimsical Moss Began
              </h2>

              <div className="space-y-4 text-base text-[#343D31]/85 leading-relaxed">
                <p>
                  Whimsical Moss started with a simple longing: to step away from fast-paced mass
                  production and return to the patient, soothing rhythm of making things with hands.
                  I fell in love with tactile, touchable textures—the plush fuzziness of chenille velvet
                  wire, the organic warmth of spun crochet yarn, and the intentional glide of ink on
                  deckle-edged cotton paper.
                </p>

                <p>
                  Fresh flowers fade within days, but a handmade pipe-cleaner bouquet or a crochet rose
                  remains vibrant year after year, holding onto the memory of a birthday, an anniversary,
                  or a simple gesture of gratitude.
                </p>

                <p>
                  Likewise, Arabic calligraphy and hand-painted Islamic art allow us to bring reminders
                  of peace, faith, and Quranic solace into the everyday corners of our homes.
                </p>
              </div>

              {/* Hand-written quote box */}
              <div className="p-6 rounded-2xl bg-[#DCE8D5]/40 border border-[#343D31]/15 space-y-2">
                <p className="font-[family-name:var(--font-handwriting)] text-2xl text-[#343D31]">
                  &ldquo;Every creation leaves this studio as if it were a gift for someone very dear to me.&rdquo;
                </p>
                <p className="text-xs font-mono uppercase tracking-widest text-[#343D31]/60">
                  — The Maker, Whimsical Moss
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Studio Values */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#343D31]/60">
              Guiding Principles
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F]">
              What We Believe In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFFEFB] border border-[#343D31]/12 rounded-2xl p-7 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#DCE8D5] flex items-center justify-center">
                <Scissors className="w-5 h-5 text-[#343D31]" />
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#24231F]">
                Intentional Slow Craft
              </h3>
              <p className="text-sm text-[#343D31]/80 leading-relaxed">
                We don&apos;t rush. Petals are shaped one by one, crochet stitches are tensioned evenly,
                and ink is given time to dry naturally. True craft demands patience.
              </p>
            </div>

            <div className="bg-[#FFFEFB] border border-[#343D31]/12 rounded-2xl p-7 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#EFE6D7] flex items-center justify-center">
                <Layers className="w-5 h-5 text-[#343D31]" />
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#24231F]">
                Tactile Sensory Delight
              </h3>
              <p className="text-sm text-[#343D31]/80 leading-relaxed">
                We choose materials that feel warm and pleasant in hands. Heavyweight cotton papers,
                thick textured chenille, and soft natural fibres you love touching.
              </p>
            </div>

            <div className="bg-[#FFFEFB] border border-[#343D31]/12 rounded-2xl p-7 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#CFA9BA]/40 flex items-center justify-center">
                <Smile className="w-5 h-5 text-[#343D31]" />
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#24231F]">
                Warm Personal Connection
              </h3>
              <p className="text-sm text-[#343D31]/80 leading-relaxed">
                You talk directly with the person holding the scissors and the paintbrush. No corporate
                layers—just friendly, creative collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Studio Materials Showcase */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFEFB] border border-[#343D31]/15 space-y-8 shadow-sm">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE6D7] text-xs font-medium text-[#343D31]">
                <Palette className="w-3.5 h-3.5 text-[#E8C67A]" />
                <span>Materials in the Studio</span>
              </div>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F]">
                The Raw Elements We Work With
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-5 rounded-2xl bg-[#F8F3E9] border border-[#343D31]/10 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#DCE8D5] mx-auto flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-[#343D31]" />
                </div>
                <h4 className="font-semibold text-sm text-[#24231F]">Chenille Stems</h4>
                <p className="text-xs text-[#343D31]/75">
                  High-density, velvety pipe cleaners selected for rich pigment and flexible internal wire.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8F3E9] border border-[#343D31]/10 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#EFE6D7] mx-auto flex items-center justify-center">
                  <Layers className="w-4 h-4 text-[#343D31]" />
                </div>
                <h4 className="font-semibold text-sm text-[#24231F]">Cotton Spun Yarn</h4>
                <p className="text-xs text-[#343D31]/75">
                  Chunky and smooth cotton-blend yarns that hold clean stitch definition and lasting structure.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8F3E9] border border-[#343D31]/10 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#DCE8D5] mx-auto flex items-center justify-center">
                  <Feather className="w-4 h-4 text-[#343D31]" />
                </div>
                <h4 className="font-semibold text-sm text-[#24231F]">Archival Inks</h4>
                <p className="text-xs text-[#343D31]/75">
                  Lightfast Japanese and traditional calligraphy inks with metallic gold mica highlights.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8F3E9] border border-[#343D31]/10 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#EFE6D7] mx-auto flex items-center justify-center">
                  <Palette className="w-4 h-4 text-[#343D31]" />
                </div>
                <h4 className="font-semibold text-sm text-[#24231F]">Artist Canvas</h4>
                <p className="text-xs text-[#343D31]/75">
                  Triple-primed stretched cotton canvas finished with satin UV-resistant protective seal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#DCE8D5] mx-auto flex items-center justify-center border border-[#343D31]/15">
            <BotanicalBloomSvg className="w-7 h-7 text-[#343D31]" />
          </div>

          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F]">
            Ready to bring an idea to life?
          </h2>

          <p className="text-[#343D31]/80 max-w-xl mx-auto text-base leading-relaxed">
            I would love to craft something meaningful for you or someone you cherish. Browse our creations
            or drop me a line on WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/creations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#343D31] text-[#FFFEFB] text-sm font-medium hover:bg-[#24231F] transition-all shadow-sm"
            >
              <span>Explore Studio Creations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#343D31]/25 hover:bg-[#EFE6D7] text-[#343D31] text-sm font-medium transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#343D31]" />
              <span>Say Hello on WhatsApp</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
