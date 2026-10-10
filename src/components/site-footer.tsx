import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BotanicalBloomSvg, InstagramIcon } from "./hand-drawn-accents";
import { MessageCircle, Heart } from "lucide-react";

export function SiteFooter() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <footer className="bg-[#24231F] text-[#FFFEFB] pt-16 pb-12 border-t border-[#343D31]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Info & Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#343D31] flex items-center justify-center border border-[#FFFEFB]/20">
                <BotanicalBloomSvg className="w-5 h-5 text-[#E8C67A]" />
              </div>
              <span className="font-[family-name:var(--font-serif)] text-2xl font-bold tracking-tight text-[#FFFEFB]">
                {SITE_CONFIG.brandName}
              </span>
            </div>

            <p className="text-sm text-[#FFFEFB]/70 max-w-sm leading-relaxed">
              Handmade crafts, calligraphy, paintings, and one-of-a-kind custom commissions made with
              patience and a little imagination.
            </p>

            <p className="font-[family-name:var(--font-handwriting)] text-xl text-[#E8C67A]">
              Made with care, one piece at a time.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#FFFEFB]/40">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-[#FFFEFB]/80">
              <li>
                <Link href="/creations" className="hover:text-[#E8C67A] transition-colors">
                  Creations Gallery
                </Link>
              </li>
              <li>
                <Link href="/custom-orders" className="hover:text-[#E8C67A] transition-colors">
                  Custom Order Process
                </Link>
              </li>
              <li>
                <Link href="/maker" className="hover:text-[#E8C67A] transition-colors">
                  Meet The Maker
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-[#E8C67A] transition-colors">
                  Behind The Scenes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E8C67A] transition-colors">
                  Contact & Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Enquiries & Social Channels */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#FFFEFB]/40">
              Conversations
            </p>
            <div className="space-y-2 text-sm text-[#FFFEFB]/80">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E8C67A] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#E8C67A]" />
                <span>WhatsApp Custom Enquiry</span>
              </a>
              <a
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E8C67A] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#E8C67A]" />
                <span>Instagram Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & technical note */}
        <div className="pt-8 border-t border-[#FFFEFB]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFEFB]/50">
          <p>© 2026 {SITE_CONFIG.brandName}. All rights reserved.</p>

          <div className="flex items-center gap-1.5 text-center">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#CFA9BA] fill-[#CFA9BA]" />
            <span>for bespoke handmade artistry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
