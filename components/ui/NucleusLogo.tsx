"use client";

import { motion } from "framer-motion";

interface NucleusLogoProps {
  size?: number;
  className?: string;
}

/**
 * The Nucleus mark: three intersecting orbital rings around a solid core.
 * Spins on hover as a small interactive touch.
 */
export function NucleusLogo({ size = 32, className = "" }: NucleusLogoProps) {
  const color = "#C45C1A";
  return (
    <motion.svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 ${className}`}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="27" stroke={color} strokeWidth="2.2" />
      <ellipse cx="32" cy="32" rx="27" ry="11" stroke={color} strokeWidth="2.2" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="27" ry="11" stroke={color} strokeWidth="2.2" transform="rotate(-60 32 32)" />
      <circle cx="32" cy="32" r="6" fill={color} />
    </motion.svg>
  );
}
