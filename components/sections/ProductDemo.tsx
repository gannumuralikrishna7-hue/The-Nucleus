"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Zap, MessageSquare, LayoutGrid, BookUser, ArrowRight, Mail, Phone, Link2, PlayCircle, Building2, Briefcase } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";

const tabs = [
  {
    id: "leads",
    label: "Lead Tracking",
    icon: <BarChart3 size={15} />,
    content: (
      <div className="rounded-xl overflow-hidden border border-[#E6DFD3] bg-[#FBF9F6]" style={{ boxShadow: "0 12px 32px rgba(20,17,15,0.06)" }}>
        <div className="p-4 border-b border-[#E6DFD3] flex items-center justify-between">
          <span className="text-sm font-semibold text-[#14110F]">Active Leads, Q4 2026</span>
          <div className="flex items-center gap-2">
            <div className="text-xs px-2 py-1 rounded-lg text-[#3F7A4E] font-medium bg-[#E9F1EA]">
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
              className="flex items-center gap-4 p-3 rounded-lg border border-[#E6DFD3] hover:border-[#C45C1A]/30 hover:bg-[#F5E3D3] transition-all duration-200 bg-[#F3EEE5]"
            >
              <div className="w-8 h-8 rounded-full bg-[#14110F] flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                {lead.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-[#14110F]">{lead.name}</div>
                <div className="text-xs text-[#8A8072]">{lead.company}</div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-semibold text-[#3F7A4E]">{lead.value}</div>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <div
                  className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: lead.stage === "Qualified" ? "#F5E3D3" : lead.stage === "Proposal" ? "#F1F5F9" : lead.stage === "Negotiation" ? "#F5E3D3" : "#F1F5F9",
                    color: lead.stage === "Qualified" ? "#C45C1A" : lead.stage === "Proposal" ? "#14110F" : lead.stage === "Negotiation" ? "#C45C1A" : "#4A4238",
                  }}
                >
                  {lead.stage}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs font-bold" style={{ color: lead.score > 88 ? "#3F7A4E" : lead.score > 75 ? "#C45C1A" : "#8A8072" }}>
                  {lead.score}
                </div>
                <div className="text-[10px] text-[#8A8072] hidden lg:block">{lead.lastContact}</div>
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
      <div className="rounded-xl overflow-hidden border border-[#E6DFD3] bg-[#FBF9F6]" style={{ boxShadow: "0 12px 32px rgba(20,17,15,0.06)" }}>
        <div className="p-4 border-b border-[#E6DFD3] flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#C45C1A] flex items-center justify-center">
            <Zap size={12} className="text-white" />
          </div>
          <span className="text-sm font-semibold text-[#14110F]">AI Co-Pilot Insights</span>
          <div className="ml-auto text-[10px] text-[#3F7A4E] font-medium">Live analysis</div>
        </div>
        <div className="p-4 space-y-3">
          {[
            { priority: "URGENT", title: "Reach out to Meera Singh now", detail: "She opened your proposal 3 times in the last 4 hours. Strike while the iron is hot.", cta: "Send Message", color: "#C45C1A" },
            { priority: "HIGH", title: "Call Ravi Kumar, best window today", detail: "AI predicts a 78% response rate at 11am today based on his past engagement patterns.", cta: "Start Call", color: "#14110F" },
            { priority: "MEDIUM", title: "Send follow-up to Acme Corp", detail: "It's been 3 days. Draft prepared based on your last conversation context.", cta: "Review Draft", color: "#3F7A4E" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border flex items-start gap-4 bg-[#F3EEE5]"
              style={{ borderColor: "#E6DFD3" }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded" style={{ background: `${item.color}15`, color: item.color }}>
                    {item.priority}
                  </span>
                </div>
                <div className="text-sm font-semibold text-[#14110F] mb-1">{item.title}</div>
                <div className="text-xs text-[#4A4238] leading-relaxed mb-3">{item.detail}</div>
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
      <div className="rounded-xl overflow-hidden border border-[#E6DFD3] bg-[#FBF9F6]" style={{ boxShadow: "0 12px 32px rgba(20,17,15,0.06)" }}>
        <div className="p-4 border-b border-[#E6DFD3] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-xs font-bold text-white">W</div>
          <span className="text-sm font-semibold text-[#14110F]">WhatsApp Inbox</span>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#3F7A4E]" />
            <span className="text-xs text-[#4A4238]">7 unread</span>
          </div>
        </div>
        <div className="flex h-[280px]">
          <div className="w-40 border-r border-[#E6DFD3] overflow-hidden flex-shrink-0">
            {[
              { name: "Priya S.", preview: "Got the proposal!", time: "10:05", unread: 2 },
              { name: "TechCorp", preview: "Can we reschedule?", time: "9:45", unread: 0 },
              { name: "Ravi K.", preview: "Thanks for the demo", time: "Yesterday", unread: 1 },
            ].map((chat) => (
              <div key={chat.name} className="flex items-center gap-2 px-3 py-2.5 border-b border-[#E6DFD3] hover:bg-[#F3EEE5] transition-colors">
                <div className="w-7 h-7 rounded-full bg-[#14110F] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                  {chat.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#14110F]">{chat.name}</span>
                    <span className="text-[9px] text-[#8A8072]">{chat.time}</span>
                  </div>
                  <div className="text-[9px] text-[#4A4238] truncate">{chat.preview}</div>
                </div>
                {chat.unread > 0 && (
                  <div className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col bg-[#F3EEE5]">
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
                      background: m.sent ? "#F5E3D3" : "#FBF9F6",
                      color: "#14110F",
                    }}
                  >
                    {m.msg}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-[#E6DFD3] flex items-center gap-2">
              <div className="flex-1 rounded-lg px-3 py-2 text-[10px] text-[#8A8072] border border-[#E6DFD3] bg-[#FBF9F6]">
                Type a message...
              </div>
              <div className="w-7 h-7 rounded-full bg-[#C45C1A] flex items-center justify-center flex-shrink-0">
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
      <div className="rounded-xl overflow-hidden border border-[#E6DFD3] p-4 bg-[#FBF9F6]" style={{ boxShadow: "0 12px 32px rgba(20,17,15,0.06)" }}>
        <div className="flex items-center gap-1.5 mb-3 text-[10px] font-medium text-[#C45C1A]">
          <Zap size={11} />
          Basket: Enterprise Deals, auto-rule moves cards to Qualified at 80+ score
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[
            { col: "Prospects", color: "#8A8072", count: 12, cards: ["TechCorp Ltd, $45K", "Nexus Systems, $28K", "FinTechPro, $67K"] },
            { col: "Qualified", color: "#C45C1A", count: 8, cards: ["Acme Corp, $120K", "InnovateCo, $67K"] },
            { col: "Proposal", color: "#14110F", count: 5, cards: ["GlobalTech, $89K", "StartupXYZ, $55K"] },
            { col: "Closed", color: "#3F7A4E", count: 11, cards: ["DataSoft, $45K", "CloudBase, $78K"] },
          ].map((col) => (
            <div key={col.col} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: col.color }}>{col.col}</span>
                <span className="text-[9px] text-[#8A8072]">{col.count}</span>
              </div>
              {col.cards.map((card, i) => (
                <div key={i} className="p-2 rounded-lg text-[9px] text-[#4A4238] border bg-[#F3EEE5]" style={{ borderColor: "#E6DFD3" }}>
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
      <div className="rounded-xl overflow-hidden border border-[#E6DFD3] bg-[#FBF9F6]" style={{ boxShadow: "0 12px 32px rgba(20,17,15,0.06)" }}>
        <div className="p-4 border-b border-[#E6DFD3] flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#14110F] flex items-center justify-center text-sm font-bold text-white flex-shrink-0">PS</div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-[#14110F]">Priya Sharma</div>
            <div className="text-xs text-[#8A8072]">VP Sales, TechCorp</div>
          </div>
          <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center text-[#4A4238] hover:text-[#C45C1A] hover:bg-[#F5E3D3] transition-colors flex-shrink-0" aria-label="Open LinkedIn profile">
            <Link2 size={15} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Basic info */}
          <div className="p-4 sm:border-r border-[#E6DFD3]">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[#8A8072] mb-3">Basic Info</div>
            <div className="space-y-3">
              {[
                { icon: <Briefcase size={13} />, text: "VP Sales" },
                { icon: <Building2 size={13} />, text: "TechCorp" },
                { icon: <Mail size={13} />, text: "priya.sharma@techcorp.com" },
                { icon: <Phone size={13} />, text: "+1 415 555 0182" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-[#4A4238]">
                  <span className="text-[#8A8072] flex-shrink-0">{row.icon}</span>
                  <span className="truncate">{row.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Communication */}
          <div className="p-4">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[#8A8072] mb-3">Communication</div>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 text-[#4285F4] flex-shrink-0"><Mail size={13} /></span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-medium text-[#14110F] truncate">Re: Q4 Proposal</div>
                  <div className="text-[9px] text-[#8A8072]">Latest email, 2h ago</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 text-[#25D366] flex-shrink-0"><MessageSquare size={13} /></span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-medium text-[#14110F] truncate">&ldquo;Got the proposal! Impressive.&rdquo;</div>
                  <div className="text-[9px] text-[#8A8072]">Latest WhatsApp, 10:05 AM</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 text-[#C45C1A] flex-shrink-0"><PlayCircle size={13} /></span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-medium text-[#14110F] truncate">Call recording, 12 min</div>
                  <div className="text-[9px] text-[#8A8072]">Yesterday</div>
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
    <section id="demo" className="relative py-24 bg-[#F3EEE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <p className="text-sm text-[#8A8072] mb-3">How it works</p>
          <h2 className="font-display text-[#14110F]" style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 500, letterSpacing: "-0.01em" }}>
            See The Nucleus in action.
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
                background: activeTab === tab.id ? "#F5E3D3" : "#FBF9F6",
                color: activeTab === tab.id ? "#14110F" : "#4A4238",
                border: activeTab === tab.id ? "1px solid rgba(196,92,26,0.35)" : "1px solid #E6DFD3",
              }}
            >
              <span style={{ color: activeTab === tab.id ? "#C45C1A" : "inherit" }}>{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#C45C1A]"
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

      </div>
    </section>
  );
}
