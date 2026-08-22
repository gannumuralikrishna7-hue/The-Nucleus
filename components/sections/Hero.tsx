"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Bot, Phone, MessageSquare, TrendingUp } from "lucide-react";
import { AnimatedBadge } from "@/components/ui/AnimatedBadge";
import { GlowButton } from "@/components/ui/GlowButton";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { GradientText } from "@/components/ui/GradientText";

const DashboardMockup = () => (
  <div
    className="w-full rounded-2xl overflow-hidden border border-white/[0.12]"
    style={{
      background: "rgba(10,10,22,0.95)",
      boxShadow: "none",
    }}
  >
    {/* Browser chrome */}
    <div
      className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07]"
      style={{ background: "rgba(17,24,39,0.8)" }}
    >
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
      </div>
      <div className="flex-1 mx-4">
        <div
          className="rounded-md px-3 py-1 text-xs text-white/30 flex items-center gap-2"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <div className="w-2 h-2 rounded-full bg-[#A1A1AA]" />
          app.thenucleuscrm.com/pipeline
        </div>
      </div>
    </div>

    {/* App layout */}
    <div className="flex h-[340px]">
      {/* Sidebar */}
      <div
        className="w-48 border-r border-white/[0.06] p-3 flex flex-col gap-1 flex-shrink-0"
        style={{ background: "rgba(8,8,18,0.9)" }}
      >
        <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest px-2 mb-2">
          Navigation
        </div>
        {[
          { label: "Pipeline", active: true, color: "#C86522" },
          { label: "Contacts", active: false },
          { label: "Inbox", active: false },
          { label: "AI Insights", active: false, badge: "3" },
          { label: "Reports", active: false },
          { label: "Settings", active: false },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between px-2 py-1.5 rounded-lg text-xs transition-all"
            style={{
              background: item.active ? "rgba(200,101,34,0.15)" : "transparent",
              color: item.active ? "#fff" : "rgba(255,255,255,0.45)",
              borderLeft: item.active ? `2px solid ${item.color}` : "2px solid transparent",
            }}
          >
            {item.label}
            {item.badge && (
              <span className="bg-[#C86522] text-white text-[9px] px-1.5 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </div>
        ))}

        <div className="mt-auto border-t border-white/[0.06] pt-3">
          <div className="flex items-center gap-2 px-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C86522] to-[#B45318] flex items-center justify-center text-[9px] font-bold text-white">
              AK
            </div>
            <div>
              <div className="text-[10px] text-white/70 font-medium">Arjun Kumar</div>
              <div className="text-[9px] text-white/30">Sales Lead</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white">Sales Pipeline</h3>
          <div className="flex items-center gap-2">
            <div className="text-xs text-white/40">Q4 2025</div>
            <div
              className="text-xs px-2 py-1 rounded-lg text-[#A1A1AA] font-medium"
              style={{ background: "rgba(161,161,170,0.1)" }}
            >
              ↑ 23% this month
            </div>
          </div>
        </div>

        {/* Kanban columns */}
        <div className="grid grid-cols-4 gap-3 h-[260px]">
          {[
            {
              title: "Prospects",
              count: 12,
              color: "#A1A1AA",
              cards: [
                { name: "TechCorp Ltd", value: "$45K", avatar: "TC", hot: false, won: false },
                { name: "Nexus Systems", value: "$28K", avatar: "NS", hot: false, won: false },
              ],
            },
            {
              title: "Qualified",
              count: 8,
              color: "#C86522",
              cards: [
                { name: "Acme Corp", value: "$120K", avatar: "AC", hot: true, won: false },
                { name: "InnovateCo", value: "$67K", avatar: "IC", hot: false, won: false },
              ],
            },
            {
              title: "Proposal",
              count: 5,
              color: "#B45318",
              cards: [
                { name: "GlobalTech", value: "$89K", avatar: "GT", hot: false, won: false },
              ],
            },
            {
              title: "Closed Won",
              count: 3,
              color: "#A1A1AA",
              cards: [
                { name: "StartupXYZ", value: "$55K", avatar: "SX", hot: false, won: true },
              ],
            },
          ].map((col) => (
            <div key={col.title} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: col.color }}>
                  {col.title}
                </span>
                <span className="text-[10px] text-white/30">{col.count}</span>
              </div>
              <div
                className="flex-1 rounded-lg p-2 overflow-hidden flex flex-col gap-1.5"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                {col.cards.map((card) => (
                  <div
                    key={card.name}
                    className="rounded-md p-2 border transition-all"
                    style={{
                      background: card.won
                        ? "rgba(161,161,170,0.08)"
                        : card.hot
                        ? "rgba(200,101,34,0.10)"
                        : "rgba(255,255,255,0.04)",
                      borderColor: card.won
                        ? "rgba(161,161,170,0.2)"
                        : card.hot
                        ? "rgba(200,101,34,0.2)"
                        : "rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <div
                        className="w-5 h-5 rounded flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0"
                        style={{ background: col.color + "33" }}
                      >
                        {card.avatar}
                      </div>
                      <span className="text-[10px] text-white/80 font-medium truncate">{card.name}</span>
                    </div>
                    <div className="text-[10px] font-semibold" style={{ color: col.color }}>
                      {card.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const integrations = ["Google Workspace", "WhatsApp"];

export function Hero() {
  const headline = "The CRM That".split(" ");
  const gradientWords = "Thinks, Talks, and Closes".split(" ");
  const trailingWords = ["With", "You."];

  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedBadge>
            <span className="text-[#E28A4B]">✨</span>
            Now with AI-Powered Lead Intelligence
          </AnimatedBadge>
        </motion.div>

        {/* Headline */}
        <h1
          className="mt-6 text-center font-black tracking-tight leading-[1.05]"
          style={{ fontSize: "clamp(36px, 5.25vw, 66px)", letterSpacing: "-0.03em" }}
        >
          <motion.span
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
            }}
            className="flex flex-wrap justify-center gap-x-4 gap-y-2"
          >
            {headline.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="text-white inline-block"
              >
                {word}
              </motion.span>
            ))}
            {/* Gradient words */}
            {gradientWords.map((word, i) => (
              <motion.span
                key={`g-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                  visible: {
                    opacity: 1, y: 0, filter: "blur(0px)",
                    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="inline-block"
                style={{ color: "#FFFFFF" }}
              >
                {word}
              </motion.span>
            ))}
            {trailingWords.map((word, i) => (
              <motion.span
                key={`t-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                  visible: {
                    opacity: 1, y: 0, filter: "blur(0px)",
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="text-white inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-center text-[#A1A1AA] max-w-2xl leading-relaxed"
          style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
        >
          AI intelligence applied directly to your{" "}
          <span className="text-white/80 font-medium">Gmail, WhatsApp, and call history</span>, so your team
          always knows the next best move.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <GlowButton
            variant="primary"
            size="lg"
            href="#signup"
            icon={<ArrowRight size={18} />}
            ariaLabel="Start for free"
          >
            Start for Free
          </GlowButton>
          <GlowButton
            variant="secondary"
            size="lg"
            href="#demo"
            icon={<Play size={16} />}
            iconPosition="left"
            ariaLabel="Watch product demo"
          >
            Watch Demo
          </GlowButton>
        </motion.div>

        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-10 flex flex-col items-center gap-4 border-y border-zinc-800 py-5 w-full max-w-2xl"
        >
          {/* Integration proof */}
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Trusted by 2,000+ teams. Integrates with</div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {integrations.map((name) => (
              <motion.div
                key={name}
                className="text-xs font-semibold text-zinc-400 border border-zinc-800 rounded-md px-3 py-1.5"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 w-full max-w-5xl relative"
          style={{
            perspective: "1200px",
          }}
        >
          {/* Floating cards */}
          <div className="absolute -left-6 top-1/4 z-20 w-64">
            <FloatingCard delay={0} duration={3.5} floatRange={10}>
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(200,101,34,0.2)" }}
                >
                  <Bot size={16} className="text-[#C86522]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white mb-1">AI Suggestion</div>
                  <div className="text-[11px] text-white/60 leading-relaxed">
                    Follow up with Ravi. 3 days since last contact
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>

          <div className="absolute -right-6 top-12 z-20 w-60">
            <FloatingCard delay={0.3} duration={4} floatRange={8}>
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(226,138,75,0.15)" }}
                >
                  <Phone size={16} className="text-[#E28A4B]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white mb-1">Call Logged</div>
                  <div className="text-[11px] text-white/60">
                    12 min with Sarah Chen
                  </div>
                  <div className="text-[10px] text-[#A1A1AA] mt-1 flex items-center gap-1">
                    <TrendingUp size={10} />
                    High intent detected
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>

          <div className="absolute -right-2 bottom-16 z-20 w-56">
            <FloatingCard delay={0.6} duration={3} floatRange={12}>
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(180,83,24,0.2)" }}
                >
                  <MessageSquare size={16} className="text-[#B45318]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white mb-1">WhatsApp Message</div>
                  <div className="text-[11px] text-white/60">
                    Received from Acme Corp
                  </div>
                  <div className="text-[10px] text-white/30 mt-1">Just now</div>
                </div>
              </div>
            </FloatingCard>
          </div>

          {/* Main dashboard */}
          <motion.div
            style={{ transform: "perspective(1200px) rotateX(4deg) rotateY(-2deg)" }}
            whileHover={{ transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <DashboardMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
