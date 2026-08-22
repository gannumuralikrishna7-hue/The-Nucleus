"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

const integrations = [
  { name: "Gmail", color: "#EA4335" },
  { name: "Google Drive", color: "#34A853" },
  { name: "Google Sheets", color: "#34A853" },
  { name: "Google Docs", color: "#4285F4" },
  { name: "Google Calendar", color: "#1A73E8" },
  { name: "Google Forms", color: "#7B4FCB" },
  { name: "WhatsApp", color: "#C86522" },
  { name: "HubSpot", color: "#C86522" },
  { name: "Salesforce", color: "#C86522" },
];

const LogoItem = ({ name, color }: { name: string; color: string }) => (
  <motion.div
    className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/[0.07] flex-shrink-0 group transition-all duration-300"
    style={{ background: "rgba(17,24,39,0.5)", backdropFilter: "blur(8px)" }}
    whileHover={{
      borderColor: `${color}50`,
      backgroundColor: `${color}10`,
      y: -2,
    }}
    transition={{ duration: 0.2 }}
  >
    {/* Color dot icon */}
    <div
      className="w-6 h-6 rounded-md flex-shrink-0 transition-all duration-300"
      style={{ background: `${color}30`, border: `1px solid ${color}40` }}
    >
      <div
        className="w-full h-full rounded-md flex items-center justify-center text-[8px] font-black"
        style={{ color }}
      >
        {name.charAt(0)}
      </div>
    </div>
    <span
      className="text-sm font-medium whitespace-nowrap transition-colors duration-300"
      style={{ color: "rgba(255,255,255,0.45)" }}
    >
      {name}
    </span>
  </motion.div>
);

export function LogoMarquee() {
  const row1 = [...integrations, ...integrations];
  const row2 = [...integrations.slice(6), ...integrations.slice(0, 6), ...integrations.slice(6), ...integrations.slice(0, 6)];

  return (
    <section id="integrations" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-sm font-semibold uppercase tracking-widest text-[#C86522] mb-4"
        >
          Integrations
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ letterSpacing: "-0.02em" }}
        >
          Works with the tools your team already loves
        </motion.h2>
      </div>

      {/* Row 1, left to right */}
      <div className="marquee-container overflow-hidden mb-4">
        <div className="flex gap-3 animate-marquee w-max">
          {row1.map((item, i) => (
            <LogoItem key={`r1-${i}`} {...item} />
          ))}
        </div>
      </div>

      {/* Row 2, right to left */}
      <div className="marquee-container overflow-hidden">
        <div className="flex gap-3 animate-marquee-reverse w-max">
          {row2.map((item, i) => (
            <LogoItem key={`r2-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
