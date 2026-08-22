"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Quiet contrast band */}
      <div
        className="absolute inset-0"
        style={{
          background: "#111113",
        }}
        aria-hidden
      />
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "#3F3F46" }}
        aria-hidden
      />


      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-sm font-medium text-white/70"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#A1A1AA] animate-pulse" aria-hidden />
          Join 2,000+ teams already growing faster
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-black text-white mb-6 leading-[1.05]"
          style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.03em" }}
        >
          Ready to Build{" "}
          <span
            style={{
              color: "#FFFFFF",
            }}
          >
            Stronger Relationships?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-[#A1A1AA] mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
        >
          Join thousands of teams who use The Nucleus to close more deals, faster. No credit card required.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#signup"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex h-12 items-center gap-3 px-8 rounded-lg text-base font-bold text-[#09090B] transition-colors duration-200 bg-white hover:bg-zinc-200"
            style={{
              background: "#FFFFFF",
            }}
          >
            Get Started for Free
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </motion.a>

          <a
            href="#demo"
            className="text-sm font-medium text-white/50 hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            Watch 2-min demo
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          {[
            "✓ No credit card required",
            "✓ 14-day free trial",
            "✓ Cancel anytime",
            "✓ GDPR compliant",
          ].map((badge) => (
            <span key={badge} className="text-sm text-white/35 font-medium">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
