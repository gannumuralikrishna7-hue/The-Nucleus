"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { useEnquiryModal } from "@/components/ui/EnquiryModal";

export function FinalCTA() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-[#14110F]">
      {/* Soft single accent glow, nothing loud */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(196,92,26,0.14) 0%, transparent 60%)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-display text-white mb-6 leading-[1.1]"
          style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 500, letterSpacing: "-0.01em" }}
        >
          Ready to build <em className="italic" style={{ color: "#C45C1A" }}>stronger</em> relationships?
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
          Teams using The Nucleus close deals 3x faster. Join them, no credit card required.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            type="button"
            onClick={openEnquiryModal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-semibold text-white bg-[#C45C1A] hover:bg-[#8F4313] transition-colors duration-200"
          >
            Get Started for Free
            <ArrowRight size={20} />
          </motion.button>

          <a
            href="#demo"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            How does it work
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
