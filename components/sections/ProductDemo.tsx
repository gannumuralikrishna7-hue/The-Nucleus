"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Zap, MessageSquare, LayoutGrid, BookUser, ArrowRight, Mail, Phone, Link2, PlayCircle, Building2, Briefcase } from "lucide-react";
import { AccentText } from "@/components/ui/AccentText";
import { fadeUp, viewportOnce } from "@/lib/animations";

const tabs = [
  {
    id: "leads",
    label: "Lead Tracking",
    icon: <BarChart3 size={15} />,
    content: (
      <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-white" style={{ boxShadow: "0 12px 32px rgba(15,23,42,0.06)" }}>
        <div className="p-4 border-b border-[#E2E8F0] flex items-center justify-between">
          <span className="text-sm font-semibold text-[#0F172A]">Active Leads, Q4 2026</span>
          <div className="flex items-center gap-2">
            <div className="text-xs px-2 py-1 rounded-lg text-[#16A34A] font-medium bg-[#F0FDF4]">
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
              className="flex items-center gap-4 p-3 rounded-lg border border-[#E2E8F0] hover:border-[#F97316]/30 hover:bg-[#FFF1E7] transition-all duration-200 bg-[#F8FAFC]"
            >
              <div className="w-8 h-8 rounded-full bg-[#0F172A] flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                {lead.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-[#0F172A]">{lead.name}</div>
                <div className="text-xs text-[#94A3B8]">{lead.company}</div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-semibold text-[#16A34A]">{lead.value}</div>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <div
                  className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: lead.stage === "Qualified" ? "#FFF1E7" : lead.stage === "Proposal" ? "#F1F5F9" : lead.stage === "Negotiation" ? "#FFF1E7" : "#F1F5F9",
                    color: lead.stage === "Qualified" ? "#F97316" : lead.stage === "Proposal" ? "#0F172A" : lead.stage === "Negotiation" ? "#F97316" : "#475569",
                  }}
                >
                  {lead.stage}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs font-bold" style={{ color: lead.score > 88 ? "#16A34A" : lead.score > 75 ? "#F97316" : "#94A3B8" }}>
                  {lead.score}
                </div>
                <div className="text-[10px] text-[#94A3B8] hidden lg:block">{lead.lastContact}</div>
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
      <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-white" style={{ boxShadow: "0 12px 32px rgba(15,23,42,0.06)" }}>
        <div className="p-4 border-b border-[#E2E8F0] flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#F97316] flex items-center justify-center">
            <Zap size={12} className="text-white" />
          </div>
          <span className="text-sm font-semibold text-[#0F172A]">AI Co-Pilot Insights</span>
          <div className="ml-auto text-[10px] text-[#16A34A] font-medium">Live analysis</div>
        </div>
        <div className="p-4 space-y-3">
          {[
            { priority: "URGENT", title: "Reach out to Meera Singh now", detail: "She opened your proposal 3 times in the last 4 hours. Strike while the iron is hot.", cta: "Send Message", color: "#F97316" },
            { priority: "HIGH", title: "Call Ravi Kumar, best window today", detail: "AI predicts a 78% response rate at 11am today based on his past engagement patterns.", cta: "Start Call", color: "#0F172A" },
            { priority: "MEDIUM", title: "Send follow-up to Acme Corp", detail: "It's been 3 days. Draft prepared based on your last conversation context.", cta: "Review Draft", color: "#16A34A" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border flex items-start gap-4 bg-[#F8FAFC]"
              style={{ borderColor: "#E2E8F0" }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded" style={{ background: `${item.color}15`, color: item.color }}>
                    {item.priority}
                  </span>
                </div>
                <div className="text-sm font-semibold text-[#0F172A] mb-1">{item.title}</div>
                <div className="text-xs text-[#475569] leading-relaxed mb-3">{item.detail}</div>
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
      <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-white" style={{ boxShadow: "0 12px 32px rgba(15,23,42,0.06)" }}>
        <div className="p-4 border-b border-[#E2E8F0] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-xs font-bold text-white">W</div>
          <span className="text-sm font-semibold text-[#0F172A]">WhatsApp Inbox</span>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#16A34A]" />
            <span className="text-xs text-[#475569]">7 unread</span>
          </div>
        </div>
        <div className="flex h-[280px]">
          <div className="w-40 border-r border-[#E2E8F0] overflow-hidden flex-shrink-0">
            {[
              { name: "Priya S.", preview: "Got the proposal!", time: "10:05", unread: 2 },
              { name: "TechCorp", preview: "Can we reschedule?", time: "9:45", unread: 0 },
              { name: "Ravi K.", preview: "Thanks for the demo", time: "Yesterday", unread: 1 },
            ].map((chat) => (
              <div key={chat.name} className="flex items-center gap-2 px-3 py-2.5 border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                <div className="w-7 h-7 rounded-full bg-[#0F172A] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                  {chat.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#0F172A]">{chat.name}</span>
                    <span className="text-[9px] text-[#94A3B8]">{chat.time}</span>
                  </div>
                  <div className="text-[9px] text-[#475569] truncate">{chat.preview}</div>
                </div>
                {chat.unread > 0 && (
                  <div className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col bg-[#F8FAFC]">
            <div className="flex-1 p-4 space-y-2 overflow-hidden">
              {[
                { msg: "Got the proposal! Impressive.", sent: false },
                { msg: "Great! Want to walk you through ROI?", sent: true },
                { msg: "Yes! Friday 3pm works?", sent: false },
                { msg: "Perfect, sending invite now.", sent: true },
              ].map((m, i) => (
                <div key={i} className={`flex ${m.sent ? "justify-end" : "justify-start"}`}>
                  <div
                    className="text-[10px] px-2.5 py-1.5 rounded-xl max-w-[80%] leading-relaxed"
                    style={{
                      background: m.sent ? "#FFF1E7" : "#FFFFFF",
                      color: "#0F172A",
                    }}
                  >
                    {m.msg}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-[#E2E8F0] flex items-center gap-2">
              <div className="flex-1 rounded-lg px-3 py-2 text-[10px] text-[#94A3B8] border border-[#E2E8F0] bg-white">
                Type a message...
              </div>
              <div className="w-7 h-7 rounded-full bg-[#F97316] flex items-center justify-center flex-shrink-0">
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
      <div className="rounded-xl overflow-hidden border border-[#E2E8F0] p-4 bg-white" style={{ boxShadow: "0 12px 32px rgba(15,23,42,0.06)" }}>
        <div className="flex items-center gap-1.5 mb-3 text-[10px] font-medium text-[#F97316]">
          <Zap size={11} />
          Basket: Enterprise Deals, auto-rule moves cards to Qualified at 80+ score
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[
            { col: "Prospects", color: "#94A3B8", count: 12, cards: ["TechCorp Ltd, $45K", "Nexus Systems, $28K", "FinTechPro, $67K"] },
            { col: "Qualified", color: "#F97316", count: 8, cards: ["Acme Corp, $120K", "InnovateCo, $67K"] },
            { col: "Proposal", color: "#0F172A", count: 5, cards: ["GlobalTech, $89K", "StartupXYZ, $55K"] },
            { col: "Closed", color: "#16A34A", count: 11, cards: ["DataSoft, $45K", "CloudBase, $78K"] },
          ].map((col) => (
            <div key={col.col} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: col.color }}>{col.col}</span>
                <span className="text-[9px] text-[#94A3B8]">{col.count}</span>
              </div>
              {col.cards.map((card, i) => (
                <div key={i} className="p-2 rounded-lg text-[9px] text-[#475569] border bg-[#F8FAFC]" style={{ borderColor: "#E2E8F0" }}>
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
      <div className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-white" style={{ boxShadow: "0 12px 32px rgba(15,23,42,0.06)" }}>
        <div className="p-4 border-b border-[#E2E8F0] flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#0F172A] flex items-center justify-center text-sm font-bold text-white flex-shrink-0">PS</div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-[#0F172A]">Priya Sharma</div>
            <div className="text-xs text-[#94A3B8]">VP Sales, TechCorp</div>
          </div>
          <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center text-[#475569] hover:text-[#F97316] hover:bg-[#FFF1E7] transition-colors flex-shrink-0" aria-label="Open LinkedIn profile">
            <Link2 size={15} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Basic info */}
          <div className="p-4 sm:border-r border-[#E2E8F0]">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-3">Basic Info</div>
            <div className="space-y-3">
              {[
                { icon: <Briefcase size={13} />, text: "VP Sales" },
                { icon: <Building2 size={13} />, text: "TechCorp" },
                { icon: <Mail size={13} />, text: "priya.sharma@techcorp.com" },
                { icon: <Phone size={13} />, text: "+1 415 555 0182" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-[#475569]">
                  <span className="text-[#94A3B8] flex-shrink-0">{row.icon}</span>
                  <span className="truncate">{row.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Communication */}
          <div className="p-4">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8] mb-3">Communication</div>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 text-[#4285F4] flex-shrink-0"><Mail size={13} /></span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-medium text-[#0F172A] truncate">Re: Q4 Proposal</div>
                  <div className="text-[9px] text-[#94A3B8]">Latest email, 2h ago</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 text-[#25D366] flex-shrink-0"><MessageSquare size={13} /></span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-medium text-[#0F172A] truncate">&ldquo;Got the proposal! Impressive.&rdquo;</div>
                  <div className="text-[9px] text-[#94A3B8]">Latest WhatsApp, 10:05 AM</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 text-[#F97316] flex-shrink-0"><PlayCircle size={13} /></span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-medium text-[#0F172A] truncate">Call recording, 12 min</div>
                  <div className="text-[9px] text-[#94A3B8]">Yesterday</div>
                </div>
              </div>
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
    <section id="demo" className="relative py-24 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316] mb-4">Live Demo</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A]" style={{ letterSpacing: "-0.03em" }}>
            See <AccentText>The Nucleus</AccentText> in Action
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
                background: activeTab === tab.id ? "#FFF1E7" : "#FFFFFF",
                color: activeTab === tab.id ? "#0F172A" : "#475569",
                border: activeTab === tab.id ? "1px solid rgba(249,115,22,0.35)" : "1px solid #E2E8F0",
              }}
            >
              <span style={{ color: activeTab === tab.id ? "#F97316" : "inherit" }}>{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#F97316]"
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
            className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#F97316] transition-colors group"
          >
            Or watch the full demo
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
