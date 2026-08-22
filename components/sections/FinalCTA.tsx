"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1a1040 0%, #0d0d2b 25%, #0a1628 50%, #0d102a 75%, #160d1f 100%)",
        }}
        aria-hidden
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(92,107,255,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 40%, rgba(167,139,250,0.15) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 50% 80%, rgba(0,229,255,0.1) 0%, transparent 60%)",
            "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(92,107,255,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 40%, rgba(167,139,250,0.15) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 50% 20%, rgba(0,229,255,0.1) 0%, transparent 60%)",
            "radial-gradient(ellipse 60% 60% at 50% 20%, rgba(92,107,255,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 50% 80%, rgba(167,139,250,0.15) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 50%, rgba(0,229,255,0.1) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(92,107,255,0.5), rgba(0,229,255,0.3), transparent)" }}
        aria-hidden
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ["rgba(92,107,255,0.6)", "rgba(0,229,255,0.6)", "rgba(167,139,250,0.6)"][Math.floor(Math.random() * 3)],
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

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
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" aria-hidden />
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
              background: "linear-gradient(135deg, #5C6BFF 0%, #00E5FF 50%, #A78BFA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
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
          className="text-[#94A3B8] mb-10 mx-auto max-w-xl leading-relaxed"
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
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(255,255,255,0.25), 0 0 80px rgba(92,107,255,0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold text-[#0A0A0F] transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.9) 100%)",
              boxShadow: "0 8px 32px rgba(255,255,255,0.15)",
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
