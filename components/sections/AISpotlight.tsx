"use client";

import { motion } from "framer-motion";
import { Target, PenSquare, Bell } from "lucide-react";
import { fadeUp, viewportOnce, staggerContainer } from "@/lib/animations";

const aiCards = [
  {
    icon: <Target size={22} />,
    iconColor: "#C45C1A",
    iconBg: "#F5E3D3",
    title: "Know Who to Reach Next",
    description:
      "The Nucleus AI analyzes engagement signals: emails opened, calls answered, and proposals viewed. It tells your team exactly which lead to prioritize right now.",
    badge: "Lead Scoring",
    demo: (
      <div className="mt-4 space-y-2">
        {[
          { name: "Meera Singh", score: 94, bar: "94%", color: "#3F7A4E", reason: "Viewed proposal 3x" },
          { name: "Alex Johnson", score: 87, bar: "87%", color: "#C45C1A", reason: "Replied to email" },
          { name: "Ravi Kumar", score: 61, bar: "61%", color: "#8A8072", reason: "Opened last week" },
        ].map((lead) => (
          <div key={lead.name} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#14110F] flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0">
              {lead.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-medium text-[#14110F]">{lead.name}</span>
                <span className="text-[10px] font-bold" style={{ color: lead.color }}>{lead.score}</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden bg-[#E6DFD3]">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: lead.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: lead.bar }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
              </div>
              <div className="text-[9px] text-[#8A8072] mt-0.5">{lead.reason}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: <PenSquare size={22} />,
    iconColor: "#14110F",
    iconBg: "#F1F5F9",
    title: "Write the Perfect Email",
    description:
      "Context-aware email suggestions generated from conversation history, lead behavior, and CRM data, so your team never stares at a blank page again.",
    badge: "AI Drafts",
    demo: (
      <div className="mt-4">
        <div className="rounded-lg p-3 border border-[#E6DFD3] bg-[#F3EEE5]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#14110F]/20" />
            <span className="text-[9px] text-[#8A8072] font-mono">AI Draft, based on last 3 interactions</span>
          </div>
          <TypewriterText
            text={`Hi Meera,\n\nFollowing up on the proposal I sent. I noticed you've had a chance to review it. Happy to walk you through the ROI projections or answer any questions.\n\nBest,\nArjun`}
          />
        </div>
      </div>
    ),
  },
  {
    icon: <Bell size={22} />,
    iconColor: "#3F7A4E",
    iconBg: "#E9F1EA",
    title: "Never Miss a Follow-Up",
    description:
      "Smart reminders and next-action recommendations so no deal slips through the cracks. The Nucleus tracks every touchpoint and knows when it's time to act.",
    badge: "Smart Reminders",
    demo: (
      <div className="mt-4 space-y-2">
        {[
          { text: "Follow up with Ravi. 3 days since last contact.", urgent: true },
          { text: "Call Sarah at 11am. Peak engagement window.", urgent: false },
          { text: "Send Acme Corp their custom proposal.", urgent: false },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 + 0.3 }}
            className="flex items-start gap-2.5 p-2.5 rounded-lg border border-[#E6DFD3] hover:border-[#C45C1A]/30 transition-colors"
            style={{ background: item.urgent ? "#F5E3D3" : "#F3EEE5" }}
          >
            <span className="text-[10px] text-[#4A4238] leading-relaxed">{item.text}</span>
            {item.urgent && (
              <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded font-bold flex-shrink-0 bg-[#C45C1A]/15 text-[#C45C1A]">
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
      className="text-[10px] text-[#4A4238] leading-relaxed font-mono whitespace-pre-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      {text}
      <motion.span
        className="inline-block w-0.5 h-3 bg-[#14110F] ml-0.5 align-middle cursor-blink"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  );
}

export function AISpotlight() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#FBF9F6]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mb-16"
        >
          <h2
            className="font-display text-[#14110F]"
            style={{ fontSize: "clamp(32px, 4.2vw, 48px)", fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            Intelligence built into every workflow.
          </h2>
          <p className="mt-4 text-[#4A4238] text-lg leading-relaxed">
            The Nucleus doesn&apos;t just store data. It understands it and helps your team act on it instantly.
          </p>
        </motion.div>

        {/* Cards grid, divided by rules rather than boxed into identical cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 md:divide-x md:divide-[#E6DFD3]"
        >
          {aiCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col min-w-0 ${
                i === 0 ? "md:pr-8" : i === aiCards.length - 1 ? "md:pl-8" : "md:px-8"
              }`}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: card.iconBg }}
              >
                <span style={{ color: card.iconColor }}>{card.icon}</span>
              </div>

              <h3 className="text-lg font-bold text-[#14110F] mb-1" style={{ letterSpacing: "-0.01em" }}>
                {card.title}
              </h3>
              <p className="text-xs font-medium mb-3" style={{ color: card.iconColor }}>{card.badge}</p>
              <p className="text-sm text-[#4A4238] leading-relaxed">{card.description}</p>

              {/* Demo area */}
              {card.demo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
