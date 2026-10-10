import React from "react";
import { CreationItem } from "@/data/site-content";
import { DevPlaceholderBadge } from "./dev-placeholder-badge";

export function ArtworkVisualCanvas({
  artType,
  accentColor,
}: {
  artType: CreationItem["placeholderArtType"];
  accentColor: string;
}) {
  return (
    <div
      className="relative w-full h-56 flex items-center justify-center overflow-hidden rounded-t-lg transition-transform duration-300 group-hover:scale-[1.02]"
      style={{ backgroundColor: accentColor }}
    >
      {/* Subtle paper grain texture overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#24231F 0.75px, transparent 0.75px), radial-gradient(#24231F 0.75px, #FFFEFB 0.75px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      />

      {artType === "pipe-bloom" && (
        <svg viewBox="0 0 160 160" className="w-36 h-36 drop-shadow-sm" fill="none">
          {/* Chenille Pipe Cleaner textured petals */}
          <circle cx="80" cy="80" r="16" fill="#E8C67A" stroke="#343D31" strokeWidth="2.5" />
          <path
            d="M80 64 C65 30 95 30 80 64"
            fill="#DCE8D5"
            stroke="#343D31"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M96 80 C130 65 130 95 96 80"
            fill="#CFA9BA"
            stroke="#343D31"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M80 96 C95 130 65 130 80 96"
            fill="#DCE8D5"
            stroke="#343D31"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M64 80 C30 95 30 65 64 80"
            fill="#CFA9BA"
            stroke="#343D31"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Stem & Leaves */}
          <path d="M80 96 Q78 125 82 145" stroke="#343D31" strokeWidth="3.5" strokeLinecap="round" />
          <path
            d="M81 115 Q102 105 95 122 Q84 122 81 120"
            fill="#DCE8D5"
            stroke="#343D31"
            strokeWidth="2"
          />
        </svg>
      )}

      {artType === "calligraphy-scroll" && (
        <div className="relative w-44 h-32 bg-[#FFFEFB] border border-[#343D31]/20 shadow-sm p-4 flex flex-col justify-between rounded-sm transform rotate-[-1.5deg]">
          <div className="w-8 h-1 bg-[#E8C67A] rounded-full" />
          <div className="font-[family-name:var(--font-handwriting)] text-2xl text-[#24231F] leading-tight text-center">
            With gentle joy & mossy thoughts
          </div>
          <div className="flex justify-between items-center text-[10px] text-[#343D31]/60 font-mono">
            <span>sumi & gold</span>
            <span className="w-2 h-2 rounded-full bg-[#E8C67A]" />
          </div>
        </div>
      )}

      {artType === "mini-canvas" && (
        <div className="relative w-36 h-36 bg-[#FFFEFB] border-4 border-[#343D31]/10 shadow-md p-3 flex flex-col justify-end overflow-hidden transform rotate-[1deg]">
          {/* Hand-painted gradient mountain & wildflower simulation */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#DCE8D5] via-[#E8C67A]/30 to-[#F8F3E9]" />
          <svg viewBox="0 0 100 60" className="absolute bottom-0 left-0 right-0 w-full" fill="none">
            <path d="M0 50 Q25 35 50 48 T100 42 L100 60 L0 60 Z" fill="#343D31" fillOpacity="0.8" />
            <circle cx="25" cy="38" r="3" fill="#E8C67A" />
            <circle cx="60" cy="35" r="2.5" fill="#CFA9BA" />
            <circle cx="85" cy="39" r="3" fill="#FFFEFB" />
          </svg>
          <span className="relative z-10 text-[9px] font-mono tracking-widest text-[#FFFEFB] uppercase">
            Meadow Study
          </span>
        </div>
      )}

      {artType === "mixed-commission" && (
        <div className="relative w-40 h-32 bg-[#FFFEFB] border border-[#343D31]/15 shadow-sm p-3 flex items-center justify-center rounded transform rotate-[-0.5deg]">
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-[#CFA9BA]/60" />
          <div className="text-center space-y-1">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#DCE8D5] border border-[#343D31]/20 flex items-center justify-center font-[family-name:var(--font-serif)] text-base font-bold text-[#343D31]">
              WM
            </div>
            <p className="text-[11px] font-[family-name:var(--font-handwriting)] text-[#24231F]">
              Handcrafted bespoke gift set
            </p>
          </div>
        </div>
      )}

      {/* Floating developmental indicator badge */}
      <div className="absolute bottom-2.5 left-2.5">
        <DevPlaceholderBadge label="Concept Preview" />
      </div>
    </div>
  );
}
