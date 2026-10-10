import React from "react";
import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CustomOrderClient } from "./custom-order-client";

export const metadata: Metadata = {
  title: "Bespoke Custom Orders & Commissions | Whimsical Moss",
  description:
    "Order personalized handmade pipe cleaner flower bouquets, crochet bags, custom Arabic calligraphy plaques, and hand-painted Islamic canvas art.",
};

export default function CustomOrdersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3E9] text-[#24231F]">
      <SiteHeader />
      <main className="flex-1">
        <CustomOrderClient />
      </main>
      <SiteFooter />
    </div>
  );
}
