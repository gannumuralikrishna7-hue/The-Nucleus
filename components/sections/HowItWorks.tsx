"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LogIn, Users, Link2, Rocket } from "lucide-react";
import { AccentText } from "@/components/ui/AccentText";
import { fadeUp, viewportOnce } from "@/lib/animations";

const steps = [
  {
    number: "01",
    icon: <LogIn size={22} />,
    title: "Sign in with Gmail",
    description: "Instant access with your Google account. No complex setup, no IT ticket, no waiting.",
    color: "#4285F4",
  },
  {
    number: "02",
    icon: <Users size={22} />,
    title: "Invite Your Team",
    description: "Create user IDs and assign roles in seconds. Your whole team is onboarded in minutes.",
    color: "#F97316",
  },
  {
    number: "03",
    icon: <Link2 size={22} />,
    title: "Connect Your Tools",
    description: "Google Workspace, WhatsApp, and calling, all connected with one click. Zero manual imports.",
    color: "#0F172A",
  },
  {
    number: "04",
    icon: <Rocket size={22} />,
    title: "Start Closing Deals",
    description: "AI guides your team from day one. See your pipeline, get suggestions, and close faster.",
    color: "#16A34A",
  },
];

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316] mb-4">Get Started</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-4" style={{ letterSpacing: "-0.03em" }}>
            Up and Running in <AccentText>Minutes</AccentText>
          </h2>
          <p className="text-[#475569] text-lg">
            From sign-up to first closed deal, the fastest CRM onboarding you&apos;ve ever experienced.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative" ref={lineRef}>
          {/* Connecting line, desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-[#E2E8F0]">
            <motion.div
              className="h-full bg-[#F97316]"
              style={{ transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
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
                <div
                  className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-white"
                  style={{ border: `2px solid ${step.color}30` }}
                >
                  <span style={{ color: step.color }}>{step.icon}</span>

                  {/* Number badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black text-white"
                    style={{ background: step.color }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-3" style={{ letterSpacing: "-0.01em" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">{step.description}</p>

                {/* Arrow for desktop */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-11 -right-3 text-[#CBD5E1] text-lg z-20"
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

        {/* Bottom note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
            <p className="text-sm text-[#475569]">
              Average setup time: <span className="text-[#16A34A] font-semibold">17 minutes</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
