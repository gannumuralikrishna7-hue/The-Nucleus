"use client";

import { motion } from "framer-motion";
import { Target, PenSquare, Bell, ArrowRight } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeUp, viewportOnce, staggerContainer } from "@/lib/animations";

const aiCards = [
  {
    icon: <Target size={22} />,
    iconColor: "#E28A4B",
    iconBg: "rgba(226,138,75,0.12)",
    title: "Know Who to Reach Next",
    description:
      "The Nucleus AI analyzes engagement signals: emails opened, calls answered, and proposals viewed. It tells your team exactly which lead to prioritize right now.",
    badge: "Lead Scoring",
    demo: (
      <div className="mt-4 space-y-2">
        {[
          { name: "Meera Singh", score: 94, bar: "94%", color: "#A1A1AA", reason: "Viewed proposal 3x" },
          { name: "Alex Johnson", score: 87, bar: "87%", color: "#C86522", reason: "Replied to email" },
          { name: "Ravi Kumar", score: 61, bar: "61%", color: "#B45318", reason: "Opened last week" },
        ].map((lead) => (
          <div key={lead.name} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C86522] to-[#B45318] flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0">
              {lead.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-medium text-white/80">{lead.name}</span>
                <span className="text-[10px] font-bold" style={{ color: lead.color }}>{lead.score}</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: lead.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: lead.bar }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
              </div>
              <div className="text-[9px] text-white/30 mt-0.5">{lead.reason}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: <PenSquare size={22} />,
    iconColor: "#B45318",
    iconBg: "rgba(180,83,24,0.12)",
    title: "Write the Perfect Email",
    description:
      "Context-aware email suggestions generated from conversation history, lead behavior, and CRM data, so your team never stares at a blank page again.",
    badge: "AI Drafts",
    demo: (
      <div className="mt-4">
        <div
          className="rounded-lg p-3 border border-white/[0.07]"
          style={{ background: "rgba(180,83,24,0.05)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#B45318]/60" />
            <span className="text-[9px] text-white/30 font-mono">AI Draft, based on last 3 interactions</span>
          </div>
          <TypewriterText
            text={`Hi Meera,\n\nFollowing up on the proposal I sent. I noticed you've had a chance to review it. Happy to walk you through the ROI projections or answer any questions!\n\nBest,\nArjun`}
          />
        </div>
      </div>
    ),
  },
  {
    icon: <Bell size={22} />,
    iconColor: "#C86522",
    iconBg: "rgba(200,101,34,0.12)",
    title: "Never Miss a Follow-Up",
    description:
      "Smart reminders and next-action recommendations so no deal slips through the cracks. The Nucleus tracks every touchpoint and knows when it's time to act.",
    badge: "Smart Reminders",
    demo: (
      <div className="mt-4 space-y-2">
        {[
          { icon: "🔔", text: "Follow up with Ravi. 3 days since last contact", urgent: true },
          { icon: "📞", text: "Call Sarah at 11am. Peak engagement window", urgent: false },
          { icon: "✉️", text: "Send Acme Corp their custom proposal", urgent: false },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 + 0.3 }}
            className="flex items-start gap-2.5 p-2.5 rounded-lg border border-white/[0.06] hover:border-[#C86522]/30 transition-colors"
            style={{ background: item.urgent ? "rgba(200,101,34,0.07)" : "rgba(255,255,255,0.03)" }}
          >
            <span className="text-base flex-shrink-0">{item.icon}</span>
            <span className="text-[10px] text-white/70 leading-relaxed">{item.text}</span>
            {item.urgent && (
              <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded font-bold flex-shrink-0" style={{ background: "rgba(200,101,34,0.2)", color: "#C86522" }}>
                NOW
              </span>
            )}
          </motion.div>
        ))}
      </div>
    ),
  },
];

function TypewriterText({ text }: { text: string }) {
  return (
    <motion.div
      className="text-[10px] text-white/60 leading-relaxed font-mono whitespace-pre-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      {text}
      <motion.span
        className="inline-block w-0.5 h-3 bg-[#B45318] ml-0.5 align-middle cursor-blink"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  );
}

export function AISpotlight() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(8, 8, 20, 0.7)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,101,34,0.06) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#E28A4B] mb-4">AI Features</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ letterSpacing: "-0.03em" }}>
            <GradientText from="#C86522" via="#E28A4B" to="#B45318">Intelligence</GradientText>{" "}
            Built Into Every Workflow
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-lg leading-relaxed">
            The Nucleus doesn&apos;t just store data. It understands it and helps your team act on it instantly.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {aiCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, rotateY: 30, scale: 0.92 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: "800px" }}
            >
              <GlassCard
                hover
                glow={i === 0 ? "cyan" : i === 1 ? "violet" : "indigo"}
                padding="lg"
                className="h-full flex flex-col"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative"
                  style={{ background: card.iconBg }}
                >
                  <span style={{ color: card.iconColor }}>{card.icon}</span>
                  {/* Pulsing glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ background: card.iconBg }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden
                  />
                </div>

                {/* Badge */}
                <div className="mb-3">
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                    style={{ background: `${card.iconColor}15`, color: card.iconColor }}
                  >
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3" style={{ letterSpacing: "-0.01em" }}>
                  {card.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed flex-1">{card.description}</p>

                {/* Demo area */}
                {card.demo}

                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <a
                    href="#"
                    className="text-xs font-semibold flex items-center gap-1.5 group transition-all"
                    style={{ color: card.iconColor }}
                  >
                    Learn more
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
