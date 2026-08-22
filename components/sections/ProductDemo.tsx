"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Zap, MessageSquare, LayoutGrid, BookUser, ArrowRight } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { fadeUp, viewportOnce } from "@/lib/animations";

const tabs = [
  {
    id: "leads",
    label: "Lead Tracking",
    icon: <BarChart3 size={15} />,
    content: (
      <div className="rounded-xl overflow-hidden border border-white/[0.08]" style={{ background: "rgba(10,10,22,0.95)" }}>
        <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Active Leads, Q4 2025</span>
          <div className="flex items-center gap-2">
            <div className="text-xs px-2 py-1 rounded-lg text-[#A1A1AA] font-medium" style={{ background: "rgba(161,161,170,0.1)" }}>
              48 active
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2">
          {[
            { name: "Priya Sharma", company: "TechCorp", stage: "Qualified", value: "$120K", score: 92, lastContact: "2h ago" },
            { name: "Alex Johnson", company: "Acme Corp", stage: "Proposal", value: "$89K", score: 87, lastContact: "1d ago" },
            { name: "Ravi Kumar", company: "StartupXYZ", stage: "Prospects", value: "$34K", score: 71, lastContact: "3d ago" },
            { name: "Sarah Chen", company: "Nexus Systems", stage: "Negotiation", value: "$220K", score: 95, lastContact: "4h ago" },
          ].map((lead) => (
            <div
              key={lead.name}
              className="flex items-center gap-4 p-3 rounded-lg border border-white/[0.05] hover:border-[#C86522]/30 hover:bg-[#C86522]/5 transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C86522] to-[#B45318] flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                {lead.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white">{lead.name}</div>
                <div className="text-xs text-white/40">{lead.company}</div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-semibold text-[#A1A1AA]">{lead.value}</div>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <div
                  className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: lead.stage === "Qualified" ? "rgba(200,101,34,0.15)" : lead.stage === "Proposal" ? "rgba(180,83,24,0.15)" : lead.stage === "Negotiation" ? "rgba(226,138,75,0.15)" : "rgba(148,163,184,0.15)",
                    color: lead.stage === "Qualified" ? "#C86522" : lead.stage === "Proposal" ? "#B45318" : lead.stage === "Negotiation" ? "#E28A4B" : "#A1A1AA",
                  }}
                >
                  {lead.stage}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs font-bold" style={{ color: lead.score > 88 ? "#A1A1AA" : lead.score > 75 ? "#B45318" : "#A1A1AA" }}>
                  {lead.score}
                </div>
                <div className="text-[10px] text-white/25 hidden lg:block">{lead.lastContact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ai",
    label: "AI Suggestions",
    icon: <Zap size={15} />,
    content: (
      <div className="rounded-xl overflow-hidden border border-white/[0.08]" style={{ background: "rgba(10,10,22,0.95)" }}>
        <div className="p-4 border-b border-white/[0.06] flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C86522] to-[#E28A4B] flex items-center justify-center">
            <Zap size={12} className="text-white" />
          </div>
          <span className="text-sm font-semibold text-white">AI Co-Pilot Insights</span>
          <div className="ml-auto text-[10px] text-[#A1A1AA] font-medium">Live analysis</div>
        </div>
        <div className="p-4 space-y-3">
          {[
            { priority: "URGENT", icon: "🎯", title: "Reach out to Meera Singh now", detail: "She opened your proposal 3 times in the last 4 hours. Strike while the iron is hot.", cta: "Send Message", color: "#C86522" },
            { priority: "HIGH", icon: "📞", title: "Call Ravi Kumar, best window today", detail: "AI predicts 78% response rate at 11am today based on his past engagement patterns.", cta: "Start Call", color: "#E28A4B" },
            { priority: "MEDIUM", icon: "✉️", title: "Send follow-up to Acme Corp", detail: "It's been 3 days. Draft prepared based on your last conversation context.", cta: "Review Draft", color: "#B45318" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border flex items-start gap-4"
              style={{ background: `${item.color}08`, borderColor: `${item.color}20` }}
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded" style={{ background: `${item.color}20`, color: item.color }}>
                    {item.priority}
                  </span>
                </div>
                <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                <div className="text-xs text-white/50 leading-relaxed mb-3">{item.detail}</div>
                <button className="text-xs font-semibold flex items-center gap-1 transition-all hover:gap-2" style={{ color: item.color }}>
                  {item.cta} <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: <MessageSquare size={15} />,
    content: (
      <div className="rounded-xl overflow-hidden border border-white/[0.08]" style={{ background: "rgba(10,10,22,0.95)" }}>
        <div className="p-4 border-b border-white/[0.06] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#C86522] flex items-center justify-center text-xs font-bold text-white">W</div>
          <span className="text-sm font-semibold text-white">WhatsApp Inbox</span>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#A1A1AA]" />
            <span className="text-xs text-white/50">7 unread</span>
          </div>
        </div>
        <div className="flex h-[280px]">
          <div className="w-40 border-r border-white/[0.06] overflow-hidden flex-shrink-0">
            {[
              { name: "Priya S.", preview: "Got the proposal!", time: "10:05", unread: 2 },
              { name: "TechCorp", preview: "Can we reschedule?", time: "9:45", unread: 0 },
              { name: "Ravi K.", preview: "Thanks for the demo", time: "Yesterday", unread: 1 },
            ].map((chat) => (
              <div key={chat.name} className="flex items-center gap-2 px-3 py-2.5 border-b border-white/[0.05] hover:bg-white/5 transition-colors">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C86522] to-[#B45318] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                  {chat.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-white">{chat.name}</span>
                    <span className="text-[9px] text-white/30">{chat.time}</span>
                  </div>
                  <div className="text-[9px] text-white/40 truncate">{chat.preview}</div>
                </div>
                {chat.unread > 0 && (
                  <div className="w-4 h-4 rounded-full bg-[#C86522] flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex-1 p-4 space-y-2 overflow-hidden">
              {[
                { msg: "Got the proposal! Impressive 🔥", sent: false },
                { msg: "Great! Want to walk you through ROI?", sent: true },
                { msg: "Yes! Friday 3pm works?", sent: false },
                { msg: "Perfect, sending invite now 📅", sent: true },
              ].map((m, i) => (
                <div key={i} className={`flex ${m.sent ? "justify-end" : "justify-start"}`}>
                  <div
                    className="text-[10px] px-2.5 py-1.5 rounded-xl max-w-[80%] text-white/80 leading-relaxed"
                    style={{
                      background: m.sent ? "rgba(200,101,34,0.35)" : "rgba(255,255,255,0.07)",
                    }}
                  >
                    {m.msg}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-white/[0.06] flex items-center gap-2">
              <div className="flex-1 rounded-lg px-3 py-2 text-[10px] text-white/30 border border-white/[0.08]" style={{ background: "rgba(255,255,255,0.03)" }}>
                Type a message...
              </div>
              <div className="w-7 h-7 rounded-full bg-[#C86522] flex items-center justify-center flex-shrink-0">
                <ArrowRight size={12} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "kanban",
    label: "Kanban",
    icon: <LayoutGrid size={15} />,
    content: (
      <div className="rounded-xl overflow-hidden border border-white/[0.08] p-4" style={{ background: "rgba(10,10,22,0.95)" }}>
        <div className="grid grid-cols-4 gap-3">
          {[
            { col: "Prospects", color: "#A1A1AA", count: 12, cards: ["TechCorp Ltd, $45K", "Nexus Systems, $28K", "FinTechPro, $67K"] },
            { col: "Qualified", color: "#C86522", count: 8, cards: ["Acme Corp, $120K", "InnovateCo, $67K"] },
            { col: "Proposal", color: "#B45318", count: 5, cards: ["GlobalTech, $89K", "StartupXYZ, $55K"] },
            { col: "Closed", color: "#A1A1AA", count: 11, cards: ["DataSoft, $45K 🎉", "CloudBase, $78K 🎉"] },
          ].map((col) => (
            <div key={col.col} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: col.color }}>{col.col}</span>
                <span className="text-[9px] text-white/30">{col.count}</span>
              </div>
              {col.cards.map((card, i) => (
                <div key={i} className="p-2 rounded-lg text-[9px] text-white/70 border" style={{ background: `${col.color}08`, borderColor: `${col.color}20` }}>
                  {card}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "contacts",
    label: "Contacts",
    icon: <BookUser size={15} />,
    content: (
      <div className="rounded-xl overflow-hidden border border-white/[0.08]" style={{ background: "rgba(10,10,22,0.95)" }}>
        <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Contact Profile</span>
          <div className="text-xs text-[#C86522] font-medium">Full history</div>
        </div>
        <div className="p-4 flex gap-6">
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C86522] to-[#B45318] flex items-center justify-center text-lg font-bold text-white">PS</div>
            <div className="mt-2 text-sm font-semibold text-white">Priya Sharma</div>
            <div className="text-xs text-white/40">VP Sales · TechCorp</div>
            <div className="mt-2 text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(200,101,34,0.15)", color: "#C86522" }}>
              Score: 92
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">Activity Timeline</div>
            <div className="space-y-2">
              {[
                { icon: "📧", text: "Email opened, Q4 Proposal", time: "2h ago", color: "#C86522" },
                { icon: "💬", text: "WhatsApp: 'Got the proposal!'", time: "10:05 AM", color: "#C86522" },
                { icon: "📞", text: "Call logged, 12 min", time: "Yesterday", color: "#E28A4B" },
                { icon: "📄", text: "Proposal sent, $120K deal", time: "2d ago", color: "#B45318" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-sm flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-white/70">{item.text}</div>
                    <div className="text-[9px] text-white/25">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function ProductDemo() {
  const [activeTab, setActiveTab] = useState("leads");

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <section id="demo" className="relative py-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(180,83,24,0.04) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C86522] mb-4">Live Demo</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ letterSpacing: "-0.03em" }}>
            See <GradientText>The Nucleus</GradientText> in Action
          </h2>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
          role="tablist"
          aria-label="Product demo sections"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative"
              style={{
                background: activeTab === tab.id ? "rgba(200,101,34,0.15)" : "rgba(255,255,255,0.04)",
                color: activeTab === tab.id ? "#fff" : "rgba(255,255,255,0.5)",
                border: activeTab === tab.id ? "1px solid rgba(200,101,34,0.35)" : "1px solid transparent",
              }}
            >
              <span style={{ color: activeTab === tab.id ? "#C86522" : "inherit" }}>{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                  style={{ background: "linear-gradient(90deg, #C86522, #E28A4B)" }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeContent}
          </motion.div>
        </AnimatePresence>

        {/* Footer link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors group"
          >
            Or watch the full demo
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
