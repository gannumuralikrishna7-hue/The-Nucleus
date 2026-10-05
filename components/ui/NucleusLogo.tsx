"use client";

import { motion } from "framer-motion";

interface NucleusLogoProps {
  size?: number;
  className?: string;
}

/**
 * The Nucleus mark: a core with three orbits and their electrons, an atom.
 * Spins on hover as a small interactive touch.
 */
export function NucleusLogo({ size = 32, className = "" }: NucleusLogoProps) {
  return (
    <motion.svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 ${className}`}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      {/* Orbit 1 */}
      <g>
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#F97316" strokeWidth="1.2" strokeOpacity="0.8" />
        <circle cx="29" cy="16" r="1.6" fill="#F97316" />
      </g>
      {/* Orbit 2 */}
      <g transform="rotate(60 16 16)">
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#F97316" strokeWidth="1.2" strokeOpacity="0.55" />
        <circle cx="29" cy="16" r="1.6" fill="#F97316" fillOpacity="0.85" />
      </g>
      {/* Orbit 3 */}
      <g transform="rotate(120 16 16)">
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#F97316" strokeWidth="1.2" strokeOpacity="0.35" />
        <circle cx="29" cy="16" r="1.6" fill="#F97316" fillOpacity="0.7" />
      </g>

      {/* Nucleus core */}
      <circle cx="16" cy="16" r="3.4" fill="#F97316" />
    </motion.svg>
  );
}
