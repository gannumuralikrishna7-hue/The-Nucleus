"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-[#0F172A]">
      {/* Soft single accent glow, nothing loud */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(249,115,22,0.14) 0%, transparent 60%)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-sm font-medium text-white/80 border border-white/15 bg-white/5"
        >
          <TrendingUp size={14} className="text-[#F97316]" />
          Proven to drive 3x faster deal closures
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-extrabold text-white mb-6 leading-[1.1]"
          style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.03em" }}
        >
          Ready to Build <span className="text-[#F97316]">Stronger Relationships?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-white/60 mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
        >
          Join the teams who use The Nucleus to close more deals, faster. No credit card required.
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
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-semibold text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors duration-200"
          >
            Get Started for Free
            <ArrowRight size={20} />
          </motion.a>

          <a
            href="#demo"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1.5 group"
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
            "No credit card required",
            "14-day free trial",
            "Cancel anytime",
            "GDPR compliant",
          ].map((badge) => (
            <span key={badge} className="text-sm text-white/40 font-medium">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
