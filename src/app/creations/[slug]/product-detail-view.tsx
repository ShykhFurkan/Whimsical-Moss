"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CreationItem, CREATION_ITEMS } from "@/data/site-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  BotanicalBloomSvg,
} from "@/components/hand-drawn-accents";
import {
  MessageCircle,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Heart,
  Palette,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface ProductDetailViewProps {
  product: CreationItem;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const allImages =
    product.galleryImages && product.galleryImages.length > 0
      ? product.galleryImages
      : [product.image];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const activeImage = allImages[selectedImageIndex] || product.image;

  const whatsappUrl = buildWhatsAppUrl({
    craftType: product.categoryLabel,
    itemTitle: product.title,
  });

  const otherProducts = CREATION_ITEMS.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
      {/* Breadcrumbs & Back Link */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#343D31]/10 pb-6">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#343D31]/70 font-mono uppercase tracking-wider">
          <Link href="/" className="hover:text-[#343D31] hover:underline">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#343D31]/40" />
          <Link href="/creations" className="hover:text-[#343D31] hover:underline">
            Creations
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#343D31]/40" />
          <span className="text-[#343D31] font-semibold truncate max-w-[200px] sm:max-w-none">
            {product.title}
          </span>
        </nav>

        <Link
          href="/creations"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#343D31] hover:text-[#24231F] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Creations</span>
        </Link>
      </div>

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Gallery Column */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Large Image Stage */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#EFE6D7]/60 border border-[#343D31]/15 shadow-md group">
            <Image
              src={activeImage}
              alt={`${product.title} - View ${selectedImageIndex + 1}`}
              fill
              priority={selectedImageIndex === 0}
              sizes="(max-width: 1024px) 100vw, 680px"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />

            {/* Corner Decorative Badge */}
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFEFB]/90 backdrop-blur-xs border border-[#343D31]/15 text-xs font-medium text-[#343D31] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E8C67A]" />
              <span>Studio Original</span>
            </div>

            <div className="absolute bottom-4 right-4 z-10 px-2.5 py-1 rounded-full bg-[#24231F]/70 text-[#FFFEFB] text-xs font-mono backdrop-blur-xs">
              Photo {selectedImageIndex + 1} of {allImages.length}
            </div>
          </div>

          {/* Thumbnail Selector Strip */}
          {allImages.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImageIndex === idx
                      ? "border-[#343D31] ring-2 ring-[#343D31]/20 shadow-sm scale-102"
                      : "border-transparent opacity-70 hover:opacity-100 bg-[#EFE6D7]"
                  }`}
                  aria-label={`View photo angle ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} angle ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 25vw, 120px"
                    loading="lazy"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Maker Touch Note */}
          <div className="p-4 rounded-xl bg-[#EFE6D7]/50 border border-[#343D31]/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#DCE8D5] flex items-center justify-center shrink-0">
              <BotanicalBloomSvg className="w-4 h-4 text-[#343D31]" />
            </div>
            <p className="text-xs sm:text-sm text-[#343D31]/80 leading-relaxed font-[family-name:var(--font-handwriting)] text-base">
              Handmade with patience in small batches. Slight organic variations in petals and strokes make every creation uniquely yours.
            </p>
          </div>
        </div>

        {/* Right Details & Action Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#343D31]/70 px-3 py-1 rounded-full bg-[#EFE6D7]">
                {product.categoryLabel}
              </span>
              <span className="text-xs font-medium text-[#343D31] flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-[#CFA9BA] fill-[#CFA9BA]" />
                <span>One-of-a-kind</span>
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[#24231F] font-normal leading-tight">
              {product.title}
            </h1>

            <p className="font-[family-name:var(--font-handwriting)] text-xl text-[#343D31]">
              Customizable to your preference & theme
            </p>
          </div>

          <p className="text-base text-[#343D31]/85 leading-relaxed">
            {product.description}
          </p>

          {/* Key Materials & Details Card */}
          <div className="p-5 rounded-2xl bg-[#FFFEFB] border border-[#343D31]/15 space-y-4 shadow-xs">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#343D31] flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#E8C67A]" />
              <span>Craftsmanship & Materials</span>
            </h2>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#343D31]/80">
              <div>
                <strong className="text-[#343D31] font-medium block">Tactile Materials:</strong>
                <span>{product.materials}</span>
              </div>

              <div>
                <strong className="text-[#343D31] font-medium block">Customization Notes:</strong>
                <span className="text-[#343D31]">{product.details}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#343D31]/10 grid grid-cols-2 gap-3 text-xs text-[#343D31]/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#343D31]" />
                <span>Gift packaging included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#343D31]" />
                <span>Care guidance provided</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Enquiry Action */}
          <div className="space-y-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#343D31] hover:bg-[#24231F] text-[#FFFEFB] text-sm sm:text-base font-medium shadow-md transition-all active:scale-98"
            >
              <MessageCircle className="w-5 h-5 text-[#E8C67A]" />
              <span>Order / Enquire on WhatsApp</span>
            </a>

            <p className="text-center text-xs text-[#343D31]/70">
              No immediate payment required. We will discuss your exact colors, timeline, and custom preferences first.
            </p>
          </div>

          {/* Bespoke Request Box */}
          <div className="p-5 rounded-2xl bg-[#DCE8D5]/30 border border-[#343D31]/15 space-y-2">
            <h3 className="text-sm font-semibold text-[#343D31]">Want a different colour or combination?</h3>
            <p className="text-xs text-[#343D31]/80 leading-relaxed">
              Every arrangement, bag, or artwork can be tailored to match your favourite colours, specific flowers, or personalised names.
            </p>
            <div className="pt-1">
              <Link
                href="/custom-orders"
                className="text-xs font-semibold text-[#343D31] hover:underline inline-flex items-center gap-1"
              >
                <span>Read how our custom order process works</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Pieces Section */}
      <section className="pt-12 border-t border-[#343D31]/15 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#343D31]/60">
              More From The Studio
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-[#24231F]">
              Other Handcrafted Pieces You Might Love
            </h2>
          </div>
          <Link
            href="/creations"
            className="text-xs sm:text-sm font-medium text-[#343D31] hover:underline inline-flex items-center gap-1"
          >
            <span>View All Works</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProducts.map((item) => (
            <Link
              key={item.id}
              href={`/creations/${item.slug}`}
              className="group paper-card rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div className="relative aspect-4/3 bg-[#EFE6D7]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                  loading="lazy"
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-[11px] font-mono uppercase tracking-wider text-[#343D31] px-2.5 py-0.5 rounded-full bg-[#FFFEFB]/90 backdrop-blur-xs">
                  {item.categoryLabel}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#24231F] group-hover:text-[#343D31] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#343D31]/75 line-clamp-2">
                  {item.description}
                </p>
                <div className="pt-2 text-xs font-semibold text-[#343D31] group-hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
