"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  onClick?: () => void;
  ariaExpanded?: boolean;
};

export function HeroBadge({ onClick, ariaExpanded = false }: Props) {
  return (
    <button
      type="button"
      className="hero-badge hero-badge-button"
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-controls="workspace"
    >
      <span className="live-dot" />
      <span className="hero-badge-text">CURRENTLY BUILDING</span>
      <b>CHILD ONLINE
        safetyProtocol </b>
      <ChevronDown
        size={19}
        aria-hidden="true"
        className={`hero-badge-chevron ${ariaExpanded ? "is-open" : ""}`}
      />
    </button>
  );
}
