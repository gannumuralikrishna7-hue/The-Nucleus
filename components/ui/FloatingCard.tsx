"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  floatRange?: number;
  duration?: number;
}

export function FloatingCard({
  children,
  delay = 0,
  className = "",
  floatRange = 8,
  duration = 3,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        opacity: { duration: 0.6, delay: delay + 1.2 },
        scale: { duration: 0.6, delay: delay + 1.2 },
        y: { duration: 0.6, delay: delay + 1.2 },
      }}
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{
        background: "#FBF9F6",
        border: "1px solid #E6DFD3",
        boxShadow: "0 16px 40px rgba(20,17,15,0.10)",
      }}
    >
      {/* Continuous float */}
      <motion.div
        animate={{ y: [0, -floatRange, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="p-4"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
