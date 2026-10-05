"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AccentText } from "@/components/ui/AccentText";
import { GlowButton } from "@/components/ui/GlowButton";
import { fadeUp, viewportOnce, staggerContainer, fanIn } from "@/lib/animations";

const plans = [
  {
    name: "Starter",
    tag: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for individuals and small teams just getting started.",
    color: "#475569",
    featured: false,
    cta: "Get Started Free",
    ctaVariant: "secondary" as const,
    features: [
      "Up to 3 users",
      "500 contacts",
      "Gmail integration",
      "Basic Kanban pipeline",
      "WhatsApp (100 msgs/mo)",
      "Mobile app access",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tag: "Most Popular",
    monthlyPrice: 29,
    yearlyPrice: 23,
    description: "For growing sales teams that need full power and AI intelligence.",
    color: "#F97316",
    featured: true,
    cta: "Start Free Trial",
    ctaVariant: "primary" as const,
    features: [
      "Unlimited users",
      "Unlimited contacts",
      "Full Google Workspace",
      "WhatsApp & calling",
      "AI Co-Pilot (unlimited)",
      "Multi-pipeline Kanban",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
  },
  {
    name: "Enterprise",
    tag: "Custom",
    monthlyPrice: null,
    yearlyPrice: null,
    description: "Custom solutions for large organizations with complex needs.",
    color: "#0F172A",
    featured: false,
    cta: "Contact Sales",
    ctaVariant: "secondary" as const,
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "Custom onboarding",
      "SLA guarantee",
      "SSO and SAML",
      "Advanced security",
      "Custom AI training",
      "API access",
      "White-label option",
    ],
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316] mb-4">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-4" style={{ letterSpacing: "-0.03em" }}>
            Simple Pricing. <AccentText>Powerful Platform.</AccentText>
          </h2>
          <p className="text-[#475569] text-lg">
            Start free. Scale when you&apos;re ready. No surprises.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-[#0F172A]" : "text-[#94A3B8]"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            style={{ background: isAnnual ? "#F97316" : "#E2E8F0" }}
            role="switch"
            aria-checked={isAnnual}
            aria-label="Toggle annual billing"
          >
            <motion.div
              className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md"
              animate={{ x: isAnnual ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
          </button>
          <span className={`text-sm font-medium transition-colors flex items-center gap-2 ${isAnnual ? "text-[#0F172A]" : "text-[#94A3B8]"}`}>
            Annual
            <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-[#F0FDF4] text-[#16A34A]">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fanIn}
              className="relative"
              style={plan.featured ? { marginTop: "-16px", marginBottom: "-16px" } : {}}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#F97316]"
                    style={{ boxShadow: "0 4px 16px rgba(249,115,22,0.35)" }}
                  >
                    <span className="text-white">Most Popular</span>
                  </div>
                </div>
              )}

              <div
                className="relative rounded-2xl overflow-hidden flex flex-col p-7 h-full bg-white"
                style={{
                  border: plan.featured ? "1.5px solid #F97316" : "1px solid #E2E8F0",
                  boxShadow: plan.featured
                    ? "0 24px 60px rgba(249,115,22,0.14)"
                    : "0 4px 16px rgba(15,23,42,0.04)",
                  transform: plan.featured ? "scale(1.05)" : "scale(1)",
                  paddingTop: plan.featured ? "40px" : "28px",
                }}
              >
                <div className="relative z-10">
                  {/* Plan name */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold uppercase tracking-wider" style={{ color: plan.color }}>
                      {plan.name}
                    </span>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${plan.color}15`, color: plan.color }}
                    >
                      {plan.tag}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-1 mb-2">
                    {plan.monthlyPrice !== null ? (
                      <>
                        <span className="text-5xl font-extrabold text-[#0F172A]" style={{ letterSpacing: "-0.03em" }}>
                          $
                          <motion.span
                            key={`${plan.name}-${isAnnual}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                          </motion.span>
                        </span>
                        <span className="text-sm text-[#94A3B8] mb-2">/seat/month</span>
                      </>
                    ) : (
                      <span className="text-5xl font-extrabold text-[#0F172A]" style={{ letterSpacing: "-0.03em" }}>
                        Custom
                      </span>
                    )}
                  </div>

                  {isAnnual && plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                    <div className="text-xs text-[#16A34A] mb-4">
                      Billed annually. Save ${(plan.monthlyPrice - (plan.yearlyPrice || 0)) * 12}/seat/year.
                    </div>
                  )}

                  <p className="text-sm text-[#475569] mb-6 leading-relaxed">{plan.description}</p>

                  <GlowButton
                    variant={plan.featured ? "primary" : "secondary"}
                    size="md"
                    href="#signup"
                    className="w-full justify-center mb-7"
                    ariaLabel={plan.cta}
                  >
                    {plan.cta}
                  </GlowButton>

                  <div className="border-t border-[#E2E8F0] pt-6">
                    <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-4">What&apos;s included</div>
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-[#0F172A]">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: `${plan.color}15` }}
                          >
                            <Check size={10} style={{ color: plan.color }} />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-sm text-[#94A3B8] mt-12"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
