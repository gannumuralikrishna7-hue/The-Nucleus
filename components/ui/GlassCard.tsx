"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "none" | "orange";
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function GlassCard({
  children,
  className = "",
  hover = false,
  glow = "none",
  padding = "md",
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }
          : {}
      }
      onClick={onClick}
      className={`
        relative rounded-2xl bg-white border border-[#E2E8F0]
        shadow-[0_1px_3px_rgba(15,23,42,0.06)]
        transition-all duration-300
        ${hover ? "cursor-pointer hover:border-[#F97316]/30 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]" : ""}
        ${glow === "orange" ? "hover:shadow-[0_16px_40px_rgba(249,115,22,0.12)]" : ""}
        ${paddingMap[padding]}
        ${className}
      `}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
