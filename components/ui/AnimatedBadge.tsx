"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedBadgeProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedBadge({ children, className = "" }: AnimatedBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
      className={`relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full overflow-hidden cursor-default ${className}`}
      style={{
        background: "rgba(17, 24, 39, 0.8)",
        border: "1px solid transparent",
        backgroundClip: "padding-box",
      }}
    >
      {/* Gradient border */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #5C6BFF, #00E5FF, #A78BFA) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          padding: "1px",
        }}
        aria-hidden
      />

      {/* Shimmer sweep */}
      <motion.span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      <span className="relative z-10 text-sm font-medium text-white/90 flex items-center gap-2">
        {children}
      </span>
    </motion.div>
  );
}
