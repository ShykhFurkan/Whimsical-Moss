import React from "react";

export function BotanicalBloomSvg({ className = "w-12 h-12 text-[#343D31]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Hand-drawn whimsical flower with organic curves */}
      <path
        d="M50 50 C40 30, 25 35, 30 50 C35 65, 45 55, 50 50 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 50 C60 30, 75 35, 70 50 C65 65, 55 55, 50 50 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 50 C30 60, 35 75, 50 70 C65 65, 55 55, 50 50 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 50 C70 60, 65 75, 50 70"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 50 C45 20, 55 20, 50 50"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle cx="50" cy="50" r="4" fill="currentColor" />
      {/* Stem trailing down */}
      <path
        d="M50 54 Q48 72 52 92"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Little leaf */}
      <path
        d="M51 72 Q64 68 62 78 Q53 79 51 76"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </svg>
  );
}

export function WashiTapeStrip({
  className = "",
  rotation = "-1deg",
  color = "#E8C67A",
}: {
  className?: string;
  rotation?: string;
  color?: string;
}) {
  return (
    <div
      className={`absolute h-6 w-24 pointer-events-none z-10 opacity-75 ${className}`}
      style={{
        backgroundColor: color,
        transform: `rotate(${rotation})`,
        clipPath: "polygon(0% 0%, 98% 2%, 100% 98%, 2% 100%)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
      aria-hidden="true"
    />
  );
}

export function DoodleSparkle({ className = "w-5 h-5 text-[#E8C67A]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function CurvedArrow({ className = "w-10 h-10 text-[#343D31]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 30 Q 30 5, 52 18" />
      <path d="M44 14 L 53 19 L 48 26" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5 text-current" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function BotanicalDaisySvg({ className = "w-12 h-12 text-[#343D31]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      {/* 8 rounded daisy petals */}
      <circle cx="50" cy="50" r="8" fill="#E8C67A" stroke="currentColor" strokeWidth="2" />
      <path d="M50 42 C46 22 54 22 50 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 58 C46 78 54 78 50 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M42 50 C22 46 22 54 42 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 50 C78 46 78 54 58 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 44 C28 28 36 22 44 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 44 C72 28 64 22 56 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 56 C28 72 22 64 44 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 56 C72 72 78 64 56 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Curved organic stem */}
      <path d="M50 60 Q46 80 40 98" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Small leaf */}
      <path d="M47 75 Q32 72 38 82 Q45 80 47 75" fill="#DCE8D5" fillOpacity="0.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function BotanicalBellflowerSvg({ className = "w-10 h-10 text-[#343D31]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" className={className} aria-hidden="true">
      {/* Main arching stem */}
      <path d="M20 95 Q35 50 60 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      {/* Top flower bud */}
      <path d="M60 20 Q70 12 65 5 Q55 12 60 20" fill="#CFA9BA" fillOpacity="0.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Second drooping bell */}
      <path d="M48 38 Q62 36 58 48 Q46 45 48 38" fill="#DCE8D5" fillOpacity="0.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Third drooping bell */}
      <path d="M38 56 Q52 56 46 68 Q36 62 38 56" fill="#E8C67A" fillOpacity="0.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M28 75 Q15 65 24 60 Q30 70 28 75" fill="#DCE8D5" fillOpacity="0.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function BotanicalWildSprigSvg({ className = "w-8 h-12 text-[#343D31]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" fill="none" className={className} aria-hidden="true">
      <path d="M30 95 L30 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Paired little round petals like lavender/moss sprig */}
      <circle cx="20" cy="25" r="4.5" fill="#CFA9BA" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="40" cy="28" r="4.5" fill="#CFA9BA" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="42" r="5" fill="#DCE8D5" fillOpacity="0.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="42" cy="45" r="5" fill="#DCE8D5" fillOpacity="0.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="22" cy="60" r="5" fill="#E8C67A" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="38" cy="63" r="5" fill="#E8C67A" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="30" cy="12" r="4" fill="#CFA9BA" fillOpacity="0.6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function BotanicalFloatingPetalSvg({ className = "w-6 h-6 text-[#343D31]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 20 C10 10, 30 10, 30 20 C30 30, 10 30, 10 20 Z"
        fill="#CFA9BA"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M15 20 Q25 20 25 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}


