"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, Play, Bot, Phone, MessageSquare, TrendingUp, GraduationCap,
  Mail, MessageCircle, HardDrive, Table, FileText, ClipboardList, LayoutGrid, Zap,
} from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { useEnquiryModal } from "@/components/ui/EnquiryModal";

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
    color: "#8A8072",
    cards: [
      { name: "Ravi Kumar", company: "Nexus Systems", value: "$28K" },
      { name: "Sara Ali", company: "FinTechPro", value: "$19K" },
    ],
  },
  {
    title: "Qualified",
    count: 8,
    color: "#C45C1A",
    cards: [
      { name: "Priya Sharma", company: "TechCorp", value: "$45K" },
      { name: "Alex Johnson", company: "InnovateCo", value: "$67K" },
    ],
  },
  {
    title: "Proposal",
    count: 5,
    color: "#14110F",
    cards: [
      { name: "Meera Iyer", company: "GlobalTech", value: "$89K" },
    ],
  },
  {
    title: "Closed Won",
    count: 3,
    color: "#3F7A4E",
    cards: [
      { name: "Karan Shah", company: "StartupXYZ", value: "$55K" },
    ],
  },
];

const DashboardMockup = () => (
  <div
    className="w-full rounded-2xl overflow-hidden border border-[#E6DFD3] bg-[#FBF9F6]"
    style={{ boxShadow: "0 40px 100px rgba(20,17,15,0.14)" }}
  >
    {/* Browser chrome */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E6DFD3] bg-[#F3EEE5]">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 mx-4">
        <div className="rounded-md px-3 py-1 text-xs text-[#8A8072] flex items-center justify-center gap-2 bg-[#FBF9F6] border border-[#E6DFD3] max-w-[220px] mx-auto">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3F7A4E]" />
          thenucleus.in
        </div>
      </div>
    </div>

    {/* App layout */}
    <div className="flex h-[340px]">
      {/* Sidebar */}
      <div className="w-48 border-r border-[#E6DFD3] p-3 flex flex-col gap-1 flex-shrink-0 bg-[#F3EEE5]">
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium bg-[#F5E3D3] text-[#C45C1A] border-l-2 border-[#C45C1A]">
          <LayoutGrid size={14} />
          Pipeline
        </div>

        <div className="text-[10px] font-semibold text-[#8A8072] px-2 mt-4 mb-1">
          Comms
        </div>
        {sidebarComms.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-[#4A4238] hover:bg-[#FBF9F6] transition-colors"
          >
            {item.icon}
            {item.label}
          </div>
        ))}

        <div className="text-[10px] font-semibold text-[#8A8072] px-2 mt-4 mb-1">
          Ops
        </div>
        {sidebarOps.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-[#4A4238] hover:bg-[#FBF9F6] transition-colors"
          >
            {item.icon}
            {item.label}
          </div>
        ))}

        <div className="mt-auto border-t border-[#E6DFD3] pt-3">
          <div className="flex items-center gap-2 px-2">
            <div className="w-6 h-6 rounded-full bg-[#14110F] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
              AK
            </div>
            <div>
              <div className="text-[10px] text-[#14110F] font-medium">Arjun Kumar</div>
              <div className="text-[9px] text-[#8A8072]">Sales Lead</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 overflow-hidden bg-[#FBF9F6]">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-[#14110F]">Sales Pipeline</h3>
          <div className="flex items-center gap-2">
            <div className="text-xs text-[#8A8072]">Q4 2026</div>
            <div className="text-xs px-2 py-1 rounded-lg text-[#3F7A4E] font-medium bg-[#E9F1EA]">
              23% this month
            </div>
          </div>
        </div>

        {/* Automation banner */}
        <div className="flex items-center gap-1.5 mb-3 text-[10px] font-medium text-[#C45C1A]">
          <Zap size={11} />
          Auto-rule active: move to Proposal when score is 85 or higher
        </div>

        {/* Kanban columns */}
        <div className="grid grid-cols-4 gap-3 h-[260px]">
          {kanban.map((col) => (
            <div key={col.title} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold" style={{ color: col.color }}>
                  {col.title}
                </span>
                <span className="text-[10px] text-[#8A8072]">{col.count}</span>
              </div>
              <div className="flex-1 rounded-lg p-2 overflow-hidden flex flex-col gap-1.5 bg-[#F3EEE5]">
                {col.cards.map((card) => (
                  <div
                    key={card.name}
                    className="rounded-md p-2.5 border bg-[#FBF9F6]"
                    style={{ borderColor: "#E6DFD3" }}
                  >
                    <div className="text-xs font-bold text-[#14110F] truncate">{card.name}</div>
                    <div className="text-[10px] text-[#8A8072] mt-0.5 truncate">
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

/** The orbit motif from the logo, built large as a real structural device, not decoration. */
const OrbitField = () => (
  <svg
    viewBox="0 0 800 800"
    className="absolute -right-48 -top-24 w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] lg:-right-64 lg:-top-40 pointer-events-none"
    aria-hidden
  >
    <circle cx="400" cy="400" r="320" stroke="#C45C1A" strokeOpacity="0.14" strokeWidth="1.5" fill="none" />
    <ellipse cx="400" cy="400" rx="320" ry="130" stroke="#C45C1A" strokeOpacity="0.16" strokeWidth="1.5" fill="none" transform="rotate(60 400 400)" />
    <ellipse cx="400" cy="400" rx="320" ry="130" stroke="#C45C1A" strokeOpacity="0.1" strokeWidth="1.5" fill="none" transform="rotate(-60 400 400)" />
    <circle cx="400" cy="400" r="40" fill="#C45C1A" fillOpacity="0.1" />
  </svg>
);

export function Hero() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section
      id="main"
      className="relative overflow-hidden pt-40 pb-20 bg-[#FBF9F6]"
    >
      <OrbitField />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[#14110F] leading-[1.08]"
            style={{ fontSize: "clamp(38px, 5.4vw, 64px)", fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            The CRM that thinks, talks, and <em className="italic" style={{ color: "#C45C1A" }}>closes</em> with you.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[#4A4238] max-w-xl leading-relaxed"
            style={{ fontSize: "clamp(16px, 1.6vw, 19px)" }}
          >
            The Nucleus brings your Gmail, WhatsApp, calls, and AI intelligence into one
            unified workspace, so your team always knows the right move, at the right time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <GlowButton
              variant="primary"
              size="lg"
              onClick={openEnquiryModal}
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
              ariaLabel="See how The Nucleus works"
            >
              How does it work
            </GlowButton>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col gap-3"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#4A4238]">
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-[#C45C1A]" />
                <span>
                  Successfully used by <strong className="text-[#14110F] font-semibold">XLRI Jamshedpur</strong>
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#E6DFD3]" aria-hidden />
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-[#3F7A4E]" />
                <span>
                  Proven to drive <strong className="text-[#14110F] font-semibold">3x faster deal closures</strong>
                </span>
              </div>
            </div>

            {/* Integration proof */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#8A8072]">
              <span>Integrates with</span>
              {integrations.map((name) => (
                <motion.span
                  key={name}
                  className="font-medium text-[#4A4238] hover:text-[#C45C1A] transition-colors"
                  whileHover={{ scale: 1.03 }}
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 w-full max-w-5xl relative mx-auto lg:mx-0 lg:ml-auto"
        >
          {/* Floating cards, peeking from the corners so they never sit over the mockup's content */}
          <div className="hidden lg:block absolute -left-10 -top-10 z-20 w-64">
            <FloatingCard delay={0} duration={3.5} floatRange={8}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#F5E3D3]">
                  <Bot size={16} className="text-[#C45C1A]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#14110F] mb-1">AI Suggestion</div>
                  <div className="text-[11px] text-[#4A4238] leading-relaxed">
                    Follow up with Ravi. 3 days since last contact.
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>

          <div className="hidden lg:block absolute -right-10 -top-10 z-20 w-60">
            <FloatingCard delay={0.3} duration={4} floatRange={7}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#F3EEE5]">
                  <Phone size={16} className="text-[#14110F]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#14110F] mb-1">Call Logged</div>
                  <div className="text-[11px] text-[#4A4238]">
                    12 min with Sarah Chen
                  </div>
                  <div className="text-[10px] text-[#3F7A4E] mt-1 flex items-center gap-1">
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
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#E9F1EA]">
                  <MessageSquare size={16} className="text-[#3F7A4E]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#14110F] mb-1">WhatsApp Message</div>
                  <div className="text-[11px] text-[#4A4238]">
                    Received from Acme Corp
                  </div>
                  <div className="text-[10px] text-[#8A8072] mt-1">Just now</div>
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
