"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BotanicalBloomSvg, InstagramIcon } from "./hand-drawn-accents";
import { MessageCircle, Menu, X } from "lucide-react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <header className="sticky top-0 z-40 bg-[#F8F3E9]/90 backdrop-blur-md border-b border-[#343D31]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Wordmark & Flourish */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-[#343D31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#343D31] rounded-sm"
        >
          <div className="w-9 h-9 rounded-full bg-[#DCE8D5] flex items-center justify-center border border-[#343D31]/15 group-hover:rotate-12 transition-transform duration-300">
            <BotanicalBloomSvg className="w-6 h-6 text-[#343D31]" />
          </div>
          <div>
            <span className="font-[family-name:var(--font-serif)] text-2xl font-bold tracking-tight block leading-none">
              {SITE_CONFIG.brandName}
            </span>
            <span className="font-[family-name:var(--font-handwriting)] text-sm text-[#343D31]/80 block leading-tight">
              handmade art & bespoke crafts
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#343D31]/90"
        >
          <Link
            href="/creations"
            className="hover:text-[#343D31] transition-colors hover:underline underline-offset-4 decoration-[#E8C67A] decoration-2"
          >
            Creations
          </Link>
          <Link
            href="/custom-orders"
            className="hover:text-[#343D31] transition-colors hover:underline underline-offset-4 decoration-[#E8C67A] decoration-2"
          >
            Custom Orders
          </Link>
          <Link
            href="/maker"
            className="hover:text-[#343D31] transition-colors hover:underline underline-offset-4 decoration-[#E8C67A] decoration-2"
          >
            The Maker
          </Link>
          <Link
            href="/process"
            className="hover:text-[#343D31] transition-colors hover:underline underline-offset-4 decoration-[#E8C67A] decoration-2"
          >
            Behind The Scenes
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#343D31] transition-colors hover:underline underline-offset-4 decoration-[#E8C67A] decoration-2"
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={SITE_CONFIG.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#343D31]/80 hover:text-[#343D31] hover:bg-[#EFE6D7] rounded-full transition-colors"
            title="Follow on Instagram"
            aria-label="Instagram Profile"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#343D31] text-[#FFFEFB] text-sm font-medium shadow-sm hover:bg-[#24231F] hover:shadow transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#E8C67A]" />
            <span>Start Custom Enquiry</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#343D31] text-[#FFFEFB]"
            aria-label="Start WhatsApp Enquiry"
          >
            <MessageCircle className="w-4 h-4 text-[#E8C67A]" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#343D31] hover:bg-[#EFE6D7] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#343D31]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#343D31]/10 bg-[#FFFEFB] px-6 py-5 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#343D31]">
            <Link
              href="/creations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#343D31]/5"
            >
              Creations Gallery
            </Link>
            <Link
              href="/custom-orders"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#343D31]/5"
            >
              Custom Order Process
            </Link>
            <Link
              href="/maker"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#343D31]/5"
            >
              Meet The Maker
            </Link>
            <Link
              href="/process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#343D31]/5"
            >
              Behind The Scenes
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#343D31]/5"
            >
              Contact & Enquiries
            </Link>
            <a
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-1 text-[#343D31]/80"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram Profile</span>
            </a>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#343D31] text-[#FFFEFB] text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4 text-[#E8C67A]" />
            <span>Send Custom Order Message</span>
          </a>
        </div>
      )}
    </header>
  );
}
