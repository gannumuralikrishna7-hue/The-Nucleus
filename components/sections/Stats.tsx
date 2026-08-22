"use client";

import { motion } from "framer-motion";
import { StatCounter } from "@/components/ui/StatCounter";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const stats = [
  { value: 2000, suffix: "+", label: "Teams using The Nucleus", description: "Fast-growing companies" },
  { value: 10, suffix: "M+", label: "Interactions tracked", description: "Emails, calls & messages" },
  { value: 99.4, suffix: "%", label: "Customer satisfaction", description: "Based on NPS surveys", decimals: 1 },
  { value: 3, suffix: "x", label: "Faster deal closure", description: "Compared to legacy CRMs" },
];

export function Stats() {
  return (
    <section className="relative py-20 border-y border-white/[0.06]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="relative flex flex-col items-center text-center px-6 py-10 group"
            >
              {/* Vertical divider */}
              {i < stats.length - 1 && (
                <div className="absolute right-0 top-6 bottom-6 w-px bg-white/[0.07] hidden lg:block" aria-hidden />
              )}

              {/* Number */}
              <div
                className="text-5xl lg:text-6xl font-black tracking-tighter mb-2"
                style={{ color: "#FFFFFF" }}
              >
                <StatCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} duration={2200} />
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-white/80 mb-1">{stat.label}</div>
              <div className="text-xs text-white/30">{stat.description}</div>

                {/* Quiet hover surface */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "rgba(255,255,255,0.025)",
                }}
                aria-hidden
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
