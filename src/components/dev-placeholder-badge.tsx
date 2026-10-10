import React from "react";

interface DevPlaceholderBadgeProps {
  label?: string;
  className?: string;
}

export function DevPlaceholderBadge({
  label = "Concept Reference — Awaiting Owner Photography",
  className = "",
}: DevPlaceholderBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border border-[#343D31]/20 bg-[#EFE6D7]/80 text-[#343D31] tracking-wide ${className}`}
      title="Development placeholder as outlined in OPEN_DECISIONS.md. To be replaced with verified owner material."
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#E8C67A] animate-pulse" />
      <span className="font-mono text-[11px] uppercase tracking-wider">{label}</span>
    </div>
  );
}
