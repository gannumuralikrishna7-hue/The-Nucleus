"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LogIn, Users, Link2, Rocket } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { fadeUp, viewportOnce } from "@/lib/animations";

const steps = [
  {
    number: "01",
    icon: <LogIn size={22} />,
    title: "Sign in with Gmail",
    description: "Instant access with your Google account. No complex setup, no IT ticket, no waiting.",
    color: "#4285F4",
    emoji: "🔐",
  },
  {
    number: "02",
    icon: <Users size={22} />,
    title: "Invite Your Team",
    description: "Create user IDs and assign roles in seconds. Your whole team is onboarded in minutes.",
    color: "#5C6BFF",
    emoji: "👥",
  },
  {
    number: "03",
    icon: <Link2 size={22} />,
    title: "Connect Your Tools",
    description: "Google Workspace, WhatsApp, and calling, all connected with one click. Zero manual imports.",
    color: "#A78BFA",
    emoji: "🔗",
  },
  {
    number: "04",
    icon: <Rocket size={22} />,
    title: "Start Closing Deals",
    description: "AI guides your team from day one. See your pipeline, get suggestions, and close faster.",
    color: "#22C55E",
    emoji: "🚀",
  },
];

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(92,107,255,0.04) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5C6BFF] mb-4">Get Started</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
            Up and Running in{" "}
            <GradientText>Minutes</GradientText>
          </h2>
          <p className="text-[#94A3B8] text-lg">
            From sign-up to first closed deal, the fastest CRM onboarding you&apos;ve ever experienced.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative" ref={lineRef}>
          {/* Connecting line, desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            <motion.div
              className="h-full"
              style={{
                background: "linear-gradient(90deg, #5C6BFF, #A78BFA, #00E5FF, #22C55E)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Icon circle */}
                <motion.div
                  className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center mb-6 text-3xl"
                  style={{
                    background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)`,
                    border: `2px solid ${step.color}40`,
                    boxShadow: `0 0 30px ${step.color}20`,
                  }}
                  whileInView={{
                    boxShadow: [`0 0 0px ${step.color}00`, `0 0 40px ${step.color}30`, `0 0 20px ${step.color}20`],
                  }}
                  transition={{ delay: i * 0.15 + 0.4, duration: 0.8 }}
                >
                  {/* Animated number ring */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black text-white"
                    style={{ background: step.color }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15 + 0.5,
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }}
                  >
                    {step.number}
                  </motion.div>

                  <span>{step.emoji}</span>
                </motion.div>

                <h3 className="text-lg font-bold text-white mb-3" style={{ letterSpacing: "-0.01em" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>

                {/* Arrow for desktop */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-11 -right-3 text-white/20 text-lg z-20"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.4 + 0.8, duration: 0.4 }}
                    aria-hidden
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/[0.08]"
            style={{ background: "rgba(17,24,39,0.5)" }}
          >
            <div className="flex -space-x-1">
              {["PS", "AJ", "RK"].map((init, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#0A0A0F] flex items-center justify-center text-[8px] font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${["#5C6BFF","#A78BFA","#00E5FF"][i]}, ${["#A78BFA","#00E5FF","#5C6BFF"][i]})` }}
                >
                  {init}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/60">
              <span className="text-white font-semibold">2,000+ teams</span> onboarded this month · Average setup time:{" "}
              <span className="text-[#22C55E] font-semibold">17 minutes</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
