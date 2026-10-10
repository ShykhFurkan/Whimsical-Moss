import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whimsical-moss.vercel.app"),
  title: "Whimsical Moss — Handmade Crafts, Calligraphy & Custom Art",
  description:
    "A little world of handmade creations. Whimsical pipe-cleaner crafts, custom dip-pen calligraphy, mini-canvases, and bespoke commissions made with care.",
  openGraph: {
    title: "Whimsical Moss — Handmade Crafts, Calligraphy & Custom Art",
    description:
      "A little world of handmade creations. Whimsical pipe-cleaner crafts, custom calligraphy, and bespoke commissions made with care.",
    siteName: "Whimsical Moss",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} ${caveat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F3E9] text-[#24231F] selection:bg-[#E8C67A]/40 selection:text-[#343D31]">
        {children}
      </body>
    </html>
  );
}
