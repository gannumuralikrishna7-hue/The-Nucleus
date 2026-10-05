"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, Play, Bot, Phone, MessageSquare, TrendingUp, GraduationCap,
  Mail, MessageCircle, HardDrive, Table, FileText, ClipboardList, LayoutGrid, Zap,
} from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { AccentText } from "@/components/ui/AccentText";

const sidebarComms = [
  { label: "Mail", icon: <Mail size={14} /> },
  { label: "WhatsApp", icon: <MessageCircle size={14} /> },
  { label: "Calls", icon: <Phone size={14} /> },
];

const sidebarOps = [
  { label: "Drive", icon: <HardDrive size={14} /> },
  { label: "Sheets", icon: <Table size={14} /> },
  { label: "Docs", icon: <FileText size={14} /> },
  { label: "Forms", icon: <ClipboardList size={14} /> },
];

const kanban = [
  {
    title: "Prospects",
    count: 12,
    color: "#94A3B8",
    cards: [
      { name: "Ravi Kumar", company: "Nexus Systems", value: "$28K" },
      { name: "Sara Ali", company: "FinTechPro", value: "$19K" },
    ],
  },
  {
    title: "Qualified",
    count: 8,
    color: "#F97316",
    cards: [
      { name: "Priya Sharma", company: "TechCorp", value: "$45K" },
      { name: "Alex Johnson", company: "InnovateCo", value: "$67K" },
    ],
  },
  {
    title: "Proposal",
    count: 5,
    color: "#0F172A",
    cards: [
      { name: "Meera Iyer", company: "GlobalTech", value: "$89K" },
    ],
  },
  {
    title: "Closed Won",
    count: 3,
    color: "#16A34A",
    cards: [
      { name: "Karan Shah", company: "StartupXYZ", value: "$55K" },
    ],
  },
];

const DashboardMockup = () => (
  <div
    className="w-full rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white"
    style={{ boxShadow: "0 40px 100px rgba(15,23,42,0.14)" }}
  >
    {/* Browser chrome */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 mx-4">
        <div className="rounded-md px-3 py-1 text-xs text-[#94A3B8] flex items-center justify-center gap-2 bg-white border border-[#E2E8F0] max-w-[220px] mx-auto">
          <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
          thenucleus.in
        </div>
      </div>
    </div>

    {/* App layout */}
    <div className="flex h-[340px]">
      {/* Sidebar */}
      <div className="w-48 border-r border-[#E2E8F0] p-3 flex flex-col gap-1 flex-shrink-0 bg-[#F8FAFC]">
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium bg-[#FFF1E7] text-[#F97316] border-l-2 border-[#F97316]">
          <LayoutGrid size={14} />
          Pipeline
        </div>

        <div className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-widest px-2 mt-4 mb-1">
          Comms
        </div>
        {sidebarComms.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-[#475569] hover:bg-white transition-colors"
          >
            {item.icon}
            {item.label}
          </div>
        ))}

        <div className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-widest px-2 mt-4 mb-1">
          Ops
        </div>
        {sidebarOps.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-[#475569] hover:bg-white transition-colors"
          >
            {item.icon}
            {item.label}
          </div>
        ))}

        <div className="mt-auto border-t border-[#E2E8F0] pt-3">
          <div className="flex items-center gap-2 px-2">
            <div className="w-6 h-6 rounded-full bg-[#0F172A] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
              AK
            </div>
            <div>
              <div className="text-[10px] text-[#0F172A] font-medium">Arjun Kumar</div>
              <div className="text-[9px] text-[#94A3B8]">Sales Lead</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 overflow-hidden bg-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-[#0F172A]">Sales Pipeline</h3>
          <div className="flex items-center gap-2">
            <div className="text-xs text-[#94A3B8]">Q4 2026</div>
            <div className="text-xs px-2 py-1 rounded-lg text-[#16A34A] font-medium bg-[#F0FDF4]">
              23% this month
            </div>
          </div>
        </div>

        {/* Automation banner */}
        <div className="flex items-center gap-1.5 mb-3 text-[10px] font-medium text-[#F97316]">
          <Zap size={11} />
          Auto-rule active: move to Proposal when score is 85 or higher
        </div>

        {/* Kanban columns */}
        <div className="grid grid-cols-4 gap-3 h-[260px]">
          {kanban.map((col) => (
            <div key={col.title} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: col.color }}>
                  {col.title}
                </span>
                <span className="text-[10px] text-[#94A3B8]">{col.count}</span>
              </div>
              <div className="flex-1 rounded-lg p-2 overflow-hidden flex flex-col gap-1.5 bg-[#F8FAFC]">
                {col.cards.map((card) => (
                  <div
                    key={card.name}
                    className="rounded-md p-2.5 border bg-white"
                    style={{ borderColor: "#E2E8F0" }}
                  >
                    <div className="text-xs font-bold text-[#0F172A] truncate">{card.name}</div>
                    <div className="text-[10px] text-[#94A3B8] mt-0.5 truncate">
                      {card.company} • {card.value}
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

const integrations = ["Google Workspace", "WhatsApp", "Calls"];

export function Hero() {
  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 bg-white"
    >
      {/* Background: a soft, single radial glow, nothing loud */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.06) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-extrabold tracking-tight leading-[1.1] text-[#0F172A]"
          style={{ fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "-0.03em" }}
        >
          The CRM That Thinks, Talks, and <AccentText>Closes</AccentText> With You.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-center text-[#475569] max-w-2xl leading-relaxed"
          style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
        >
          The Nucleus brings your Gmail, WhatsApp, calls, and AI intelligence into one
          unified workspace, so your team always knows the right move, at the right time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#475569]">
            <div className="flex items-center gap-2">
              <GraduationCap size={16} className="text-[#F97316]" />
              <span>
                Successfully used by <strong className="text-[#0F172A] font-semibold">XLRI Jamshedpur</strong>
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#E2E8F0]" aria-hidden />
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-[#16A34A]" />
              <span>
                Proven to drive <strong className="text-[#0F172A] font-semibold">3x faster deal closures</strong>
              </span>
            </div>
          </div>

          {/* Integration proof */}
          <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest">Integrates seamlessly with</div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {integrations.map((name) => (
              <motion.div
                key={name}
                className="text-xs font-semibold text-[#475569] hover:text-[#F97316] transition-colors uppercase tracking-widest"
                whileHover={{ scale: 1.05 }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 w-full max-w-5xl relative"
        >
          {/* Floating cards, peeking from the corners so they never sit over the mockup's content */}
          <div className="hidden lg:block absolute -left-10 -top-10 z-20 w-64">
            <FloatingCard delay={0} duration={3.5} floatRange={8}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#FFF1E7]">
                  <Bot size={16} className="text-[#F97316]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0F172A] mb-1">AI Suggestion</div>
                  <div className="text-[11px] text-[#475569] leading-relaxed">
                    Follow up with Ravi. 3 days since last contact.
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>

          <div className="hidden lg:block absolute -right-10 -top-10 z-20 w-60">
            <FloatingCard delay={0.3} duration={4} floatRange={7}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#F8FAFC]">
                  <Phone size={16} className="text-[#0F172A]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0F172A] mb-1">Call Logged</div>
                  <div className="text-[11px] text-[#475569]">
                    12 min with Sarah Chen
                  </div>
                  <div className="text-[10px] text-[#16A34A] mt-1 flex items-center gap-1">
                    <TrendingUp size={10} />
                    High intent detected
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>

          <div className="hidden lg:block absolute -right-10 -bottom-10 z-20 w-56">
            <FloatingCard delay={0.6} duration={3} floatRange={9}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#F0FDF4]">
                  <MessageSquare size={16} className="text-[#16A34A]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0F172A] mb-1">WhatsApp Message</div>
                  <div className="text-[11px] text-[#475569]">
                    Received from Acme Corp
                  </div>
                  <div className="text-[10px] text-[#94A3B8] mt-1">Just now</div>
                </div>
              </div>
            </FloatingCard>
          </div>

          {/* Main dashboard */}
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
