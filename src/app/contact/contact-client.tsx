"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  InstagramIcon,
  DoodleSparkle,
} from "@/components/hand-drawn-accents";
import {
  MessageCircle,
  Clock,
  Sparkles,
  Heart,
  Send,
} from "lucide-react";

export function ContactClient() {
  const [topic, setTopic] = useState("Custom Order Enquiry");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const directWhatsAppUrl = buildWhatsAppUrl({
    craftType: topic,
    customIdea: message ? `${message} ${name ? `(From: ${name})` : ""}` : undefined,
  });

  return (
    <div className="space-y-16 py-12 sm:py-16">
      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 text-center max-w-3xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6D7] border border-[#343D31]/15 text-xs font-medium text-[#343D31]">
          <DoodleSparkle className="w-4 h-4 text-[#343D31]" />
          <span>Conversations & Enquiries</span>
        </div>

        <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl font-normal text-[#24231F] tracking-tight">
          Say Hello &amp; Get in Touch
        </h1>

        <p className="text-base sm:text-lg text-[#343D31]/80 max-w-2xl mx-auto leading-relaxed">
          Whether you have a question about our creations, want to brainstorm a custom gift, or just
          want to say hi, we&apos;d love to hear from you.
        </p>

        <p className="font-[family-name:var(--font-handwriting)] text-2xl text-[#343D31]">
          Friendly, relaxed conversations—no automated bots or waiting in line.
        </p>
      </section>

      {/* Main Two Channels Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp Channel Card */}
          <div className="paper-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 border-2 border-[#343D31]/20">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#343D31] flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#E8C67A]" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#343D31]/60">
                  Primary & Fastest Channel
                </span>
                <h2 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-[#24231F]">
                  WhatsApp Direct Chat
                </h2>
              </div>

              <p className="text-sm text-[#343D31]/80 leading-relaxed">
                Connect directly with the maker. Send voice notes, photos of your favorite flowers, room
                color schemes, or ask anything about materials and timelines.
              </p>

              <div className="pt-2 space-y-2 text-xs text-[#343D31]/75">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#343D31]" />
                  <span>Typically responds within a few hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E8C67A]" />
                  <span>Ideal for custom order discussions &amp; photo previews</span>
                </div>
              </div>
            </div>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#343D31] hover:bg-[#24231F] text-[#FFFEFB] text-sm font-medium shadow-md transition-all active:scale-98"
            >
              <MessageCircle className="w-5 h-5 text-[#E8C67A]" />
              <span>Open WhatsApp Conversation</span>
            </a>
          </div>

          {/* Instagram Channel Card */}
          <div className="paper-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#CFA9BA]/40 flex items-center justify-center">
                <InstagramIcon className="w-6 h-6 text-[#343D31]" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#343D31]/60">
                  Community & Visuals
                </span>
                <h2 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-[#24231F]">
                  Instagram DM &amp; Stories
                </h2>
              </div>

              <p className="text-sm text-[#343D31]/80 leading-relaxed">
                Follow our daily studio reels, watch behind-the-scenes flower making, see customer
                showcases, and send a direct message.
              </p>

              <div className="pt-2 space-y-2 text-xs text-[#343D31]/75">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#CFA9BA]" />
                  <span>{SITE_CONFIG.instagram.handle}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E8C67A]" />
                  <span>Daily craft process, new drops, and inspiration</span>
                </div>
              </div>
            </div>

            <a
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full border border-[#343D31]/30 hover:bg-[#EFE6D7] text-[#343D31] text-sm font-medium transition-all"
            >
              <InstagramIcon className="w-5 h-5 text-[#343D31]" />
              <span>Follow &amp; Message on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Pre-filled Inquiry Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFEFB] border border-[#343D31]/15 rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#343D31]/60">
              Compose Your Message
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl text-[#24231F]">
              Direct Message Pre-filler
            </h2>
            <p className="text-sm text-[#343D31]/80">
              Type your thoughts below, then click to launch directly into WhatsApp with everything ready to send.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name-field" className="text-xs font-mono uppercase tracking-wider text-[#343D31] block">
                  Your Name (Optional)
                </label>
                <input
                  id="name-field"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maryam"
                  className="w-full p-3 rounded-xl border border-[#343D31]/20 bg-[#F8F3E9]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#343D31] text-[#24231F]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="topic-field" className="text-xs font-mono uppercase tracking-wider text-[#343D31] block">
                  What is this regarding?
                </label>
                <select
                  id="topic-field"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#343D31]/20 bg-[#F8F3E9]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#343D31] text-[#24231F]"
                >
                  <option value="Custom Order Enquiry">Custom Order Commission</option>
                  <option value="Handmade Flower Bouquet">Handmade Flower Bouquet</option>
                  <option value="Crochet Bag or Keepsake">Crochet Bag or Bouquet</option>
                  <option value="Arabic Calligraphy Frame">Arabic Calligraphy Frame</option>
                  <option value="Islamic Canvas Wall Art">Islamic Canvas Wall Art</option>
                  <option value="Pipe Cleaner Phone Case">Pipe Cleaner Phone Case</option>
                  <option value="General Question">General Question or Hello</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message-field" className="text-xs font-mono uppercase tracking-wider text-[#343D31] block">
                Your Message or Questions
              </label>
              <textarea
                id="message-field"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about the colors, occasion, or any specific details you would like..."
                className="w-full p-3 rounded-xl border border-[#343D31]/20 bg-[#F8F3E9]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#343D31] text-[#24231F]"
              />
            </div>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#343D31] hover:bg-[#24231F] text-[#FFFEFB] text-sm sm:text-base font-medium shadow-md transition-all active:scale-98 cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#E8C67A]" />
              <span>Launch in WhatsApp Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
