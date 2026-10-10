import React from "react";
import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact & Studio Enquiries | Whimsical Moss",
  description:
    "Get in touch with Whimsical Moss on WhatsApp or Instagram for custom orders, bouquet commissions, calligraphy frames, and general questions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3E9] text-[#24231F]">
      <SiteHeader />
      <main className="flex-1">
        <ContactClient />
      </main>
      <SiteFooter />
    </div>
  );
}
