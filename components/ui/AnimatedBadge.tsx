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
      className={`relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 overflow-hidden cursor-default ${className}`}
      style={{
        background: "#18181B",
      }}
    >
      <span className="relative z-10 text-sm font-medium text-white/90 flex items-center gap-2">
        {children}
      </span>
    </motion.div>
  );
}
