"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "none" | "indigo" | "cyan" | "violet";
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

const glowMap = {
  none: "",
  indigo:
    "hover:shadow-[0_0_30px_rgba(92,107,255,0.2),0_0_60px_rgba(92,107,255,0.08)] hover:border-[#5C6BFF]/30",
  cyan: "hover:shadow-[0_0_30px_rgba(0,229,255,0.2),0_0_60px_rgba(0,229,255,0.08)] hover:border-[#00E5FF]/30",
  violet:
    "hover:shadow-[0_0_30px_rgba(167,139,250,0.2),0_0_60px_rgba(167,139,250,0.08)] hover:border-[#A78BFA]/30",
};

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
        relative rounded-2xl overflow-hidden
        bg-[rgba(17,24,39,0.6)] backdrop-blur-xl
        border border-white/[0.08]
        transition-all duration-300
        ${hover ? "cursor-pointer" : ""}
        ${glow !== "none" ? glowMap[glow] : ""}
        ${paddingMap[padding]}
        ${className}
      `}
    >
      {/* Inner gradient border effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%)",
        }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
