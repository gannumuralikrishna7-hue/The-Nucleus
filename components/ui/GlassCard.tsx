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
  indigo: "hover:border-zinc-500",
  cyan: "hover:border-zinc-500",
  violet: "hover:border-zinc-500",
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
        relative rounded-lg overflow-hidden
        bg-zinc-900 border border-zinc-800
        transition-colors duration-200
        ${hover ? "cursor-pointer" : ""}
        ${glow !== "none" ? glowMap[glow] : ""}
        ${paddingMap[padding]}
        ${className}
      `}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
