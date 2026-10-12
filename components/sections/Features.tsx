"use client";

import { motion } from "framer-motion";
import {
  Mail, MessageSquare, Brain, LayoutGrid, Check, Phone, Zap, ShoppingBasket,
} from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";

/* ─── Mock UIs ─── */
const GmailMockup = () => (
  <div className="rounded-xl overflow-hidden border border-[#E6DFD3] bg-[#FBF9F6]" style={{ boxShadow: "0 12px 32px rgba(20,17,15,0.06)" }}>
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-2 border-b border-[#E6DFD3] bg-[#F3EEE5]">
      <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
      <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
      <div className="w-3 h-3 rounded-full bg-[#28C840]" />
      <span className="ml-3 text-xs text-[#8A8072]">Gmail, Integrated</span>
    </div>
    {/* Email thread */}
    <div className="p-4 space-y-3">
      {[
        { from: "Priya Sharma", subject: "Re: Q4 Proposal", time: "10:23 AM", preview: "Looks great! Can we schedule a call to...", unread: true },
        { from: "TechCorp Sales", subject: "Partnership Opportunity", time: "9:45 AM", preview: "Hi, we'd love to explore a potential..." },
        { from: "Ravi Kumar", subject: "Demo feedback", time: "Yesterday", preview: "The demo was impressive. A few questions about..." },
      ].map((email, i) => (
        <div
          key={i}
          className="flex items-start gap-3 p-3 rounded-lg border transition-all"
          style={{
            background: email.unread ? "#F5E3D3" : "#F3EEE5",
            borderColor: email.unread ? "rgba(196,92,26,0.25)" : "#E6DFD3",
          }}
        >
          <div className="w-7 h-7 rounded-full bg-[#14110F] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
            {email.from.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-[#14110F] truncate">{email.from}</span>
              <span className="text-[10px] text-[#8A8072] flex-shrink-0">{email.time}</span>
            </div>
            <div className="text-[11px] text-[#4A4238] mt-0.5 truncate">{email.subject}</div>
            <div className="text-[10px] text-[#8A8072] mt-0.5 truncate">{email.preview}</div>
          </div>
        </div>
      ))}
      {/* Drive attachment */}
      <div className="flex items-center gap-2 p-2.5 rounded-lg border border-[#E6DFD3] bg-[#F3EEE5]">
        <div className="w-5 h-5 rounded flex items-center justify-center text-[10px] bg-[#FBF9F6]">📄</div>
        <div className="text-[10px] text-[#4A4238] flex-1">Q4_Proposal_Final.pdf, Google Drive</div>
        <span className="text-[10px] text-[#3F7A4E] font-medium">Linked</span>
      </div>
    </div>
  </div>
);

const WhatsAppMockup = () => (
  <div className="rounded-xl overflow-hidden border border-[#E6DFD3] max-w-[300px] mx-auto bg-[#FBF9F6]" style={{ boxShadow: "0 12px 32px rgba(20,17,15,0.06)" }}>
    <div className="px-4 py-3 border-b border-[#E6DFD3] flex items-center gap-3 bg-[#F3EEE5]">
      <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-xs font-bold text-white">PS</div>
      <div>
        <div className="text-xs font-semibold text-[#14110F]">Priya @ TechCorp</div>
        <div className="text-[10px] text-[#3F7A4E]">Online</div>
      </div>
    </div>
    <div className="p-4 space-y-3">
      {[
        { text: "Hey! Got your proposal. Impressive numbers.", sent: false, time: "10:05" },
        { text: "Thanks Priya! Happy to walk you through the ROI breakdown on a call.", sent: true, time: "10:07" },
        { text: "Perfect. Can we do Friday 3pm?", sent: false, time: "10:08" },
        { text: "Absolutely! I'll send a calendar invite right now.", sent: true, time: "10:09" },
      ].map((msg, i) => (
        <div key={i} className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}>
          <div
            className="max-w-[85%] px-3 py-2 rounded-xl text-[11px] leading-relaxed"
            style={{
              background: msg.sent ? "#F5E3D3" : "#F3EEE5",
              color: "#14110F",
              borderRadius: msg.sent ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
            }}
          >
            {msg.text}
            <div className="text-[9px] text-[#8A8072] mt-1 text-right">{msg.time}</div>
          </div>
        </div>
      ))}
    </div>
    {/* Notification bounce-in */}
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
      className="mx-4 mb-4 p-2.5 rounded-lg border flex items-center gap-2"
      style={{ background: "#E9F1EA", borderColor: "rgba(63,122,78,0.2)" }}
    >
      <MessageSquare size={12} className="text-[#3F7A4E] flex-shrink-0" />
      <span className="text-[10px] text-[#4A4238]">New from Priya @ TechCorp, auto-logged to CRM</span>
    </motion.div>
  </div>
);

const AIMockup = () => (
  <div className="rounded-xl overflow-hidden border border-[#E6DFD3] bg-[#FBF9F6]" style={{ boxShadow: "0 12px 32px rgba(20,17,15,0.06)" }}>
    <div className="px-4 py-3 border-b border-[#E6DFD3] flex items-center gap-2 bg-[#F3EEE5]">
      <div className="w-5 h-5 rounded-full bg-[#C45C1A] flex items-center justify-center">
        <Brain size={10} className="text-white" />
      </div>
      <span className="text-xs font-semibold text-[#14110F]">AI Co-Pilot</span>
      <div className="ml-auto flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#3F7A4E]" />
        <span className="text-[10px] text-[#3F7A4E]">Active</span>
      </div>
    </div>
    <div className="p-4 space-y-3">
      {[
        {
          title: "Priority Lead", name: "Meera Singh",
          detail: "Opened your proposal 3 times today. High intent.", color: "#C45C1A", score: 94,
        },
        {
          title: "Suggested Email", name: "Draft ready for Acme Corp",
          detail: `"Hi Alex, following up on our conversation last week..."`, color: "#14110F", score: null,
        },
        {
          title: "Follow-up Reminder", name: "Ravi Kumar",
          detail: "3 days since last contact. Best time to reach: 11am.", color: "#3F7A4E", score: null,
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 + 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="p-3 rounded-lg border border-[#E6DFD3] flex items-start gap-3 bg-[#F3EEE5]"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: item.color }}>
                {item.title}
              </span>
              {item.score && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: `${item.color}15`, color: item.color }}>
                  {item.score}
                </span>
              )}
            </div>
            <div className="text-xs font-medium text-[#14110F] mb-0.5">{item.name}</div>
            <div className="text-[10px] text-[#4A4238] leading-relaxed">{item.detail}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const KanbanMockup = () => (
  <div className="rounded-xl overflow-hidden border border-[#E6DFD3] bg-[#FBF9F6]" style={{ boxShadow: "0 12px 32px rgba(20,17,15,0.06)" }}>
    <div className="px-4 py-2 border-b border-[#E6DFD3] flex items-center justify-between bg-[#F3EEE5]">
      <span className="text-xs font-semibold text-[#14110F] flex items-center gap-1.5">
        <ShoppingBasket size={12} className="text-[#C45C1A]" />
        Basket: Enterprise Deals
      </span>
      <span className="text-[10px] text-[#8A8072]">3 deals this week</span>
    </div>
    <div className="px-4 pt-2 flex items-center gap-1.5 text-[9px] font-medium text-[#C45C1A]">
      <Zap size={10} />
      Rule: move to Negotiation when score is 85 or higher
    </div>
    <div className="p-3 grid grid-cols-3 gap-2">
      {[
        { title: "Proposal", color: "#14110F", deals: [{ name: "GlobalTech", val: "$89K", tag: "Sent" }] },
        { title: "Negotiation", color: "#C45C1A", deals: [{ name: "StartupXYZ", val: "$55K", tag: "Counter" }] },
        { title: "Closed Won", color: "#3F7A4E", deals: [{ name: "Acme Corp", val: "$120K", tag: "Won" }] },
      ].map((col) => (
        <div key={col.title} className="flex flex-col gap-2">
          <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: col.color }}>
            {col.title}
          </div>
          {col.deals.map((deal) => (
            <div
              key={deal.name}
              className="p-2 rounded-lg border bg-[#F3EEE5]"
              style={{ borderColor: "#E6DFD3" }}
            >
              <div className="text-[10px] font-medium text-[#14110F] mb-1">{deal.name}</div>
              <div className="text-xs font-bold mb-1" style={{ color: col.color }}>{deal.val}</div>
              <div className="text-[9px] px-1.5 py-0.5 rounded inline-block" style={{ background: `${col.color}15`, color: col.color }}>
                {deal.tag}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    <div className="px-3 pb-3">
      <motion.div
        className="flex items-center gap-2 p-2.5 rounded-lg border text-[10px] text-[#4A4238]"
        style={{ background: "#F5E3D3", borderColor: "rgba(196,92,26,0.25)" }}
        animate={{ x: [0, 60, 140, 140, 140] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
      >
        <Zap size={10} className="text-[#C45C1A]" />
        Auto-moved GlobalTech to Negotiation, rule triggered
      </motion.div>
    </div>
  </div>
);

const features = [
  {
    id: "google-workspace",
    side: "left",
    icon: <Mail size={20} />,
    iconColor: "#4285F4",
    tag: "Google Workspace",
    title: "Your Entire Google Workspace, Inside Your CRM",
    description:
      "Stop context switching. The Nucleus natively connects Gmail, Google Drive, Sheets, Docs, Forms, and Calendar, so every email, file, and meeting is instantly linked to the right contact or deal.",
    bullets: [
      "Gmail threads synced automatically",
      "Drive files attached to deals",
      "Calendar events linked to contacts",
      "Google Sheets as a live data source",
    ],
    mockup: <GmailMockup />,
  },
  {
    id: "communication",
    side: "right",
    icon: <Phone size={20} />,
    iconColor: "#25D366",
    tag: "Communication",
    title: "Talk to Clients Where They Are: WhatsApp and Calls, Built In",
    description:
      "Your clients live on WhatsApp. Your team makes calls. The Nucleus logs every conversation automatically. No manual entry, no missed context, no silos.",
    bullets: [
      "WhatsApp messages auto-logged",
      "Calls recorded and transcribed",
      "Unified inbox across all channels",
      "Smart notifications for hot leads",
    ],
    mockup: <WhatsAppMockup />,
  },
  {
    id: "ai-intelligence",
    side: "left",
    icon: <Brain size={20} />,
    iconColor: "#C45C1A",
    tag: "AI Intelligence",
    title: "Your Team's AI Co-Pilot: Always One Step Ahead",
    description:
      "The Nucleus AI analyzes every signal: emails opened, calls missed, and proposals viewed. It tells your team exactly what to do next. No more guessing, just closing.",
    bullets: [
      "Lead scoring based on engagement",
      "AI-written email drafts",
      "Smart follow-up reminders",
      "Next-best-action recommendations",
    ],
    mockup: <AIMockup />,
  },
  {
    id: "pipeline-automation",
    side: "right",
    icon: <LayoutGrid size={20} />,
    iconColor: "#14110F",
    tag: "Pipeline Automation",
    title: "Build Auto Workflows. Let Rules Move Your Deals.",
    description:
      "Clean Kanban boards that your team will actually use, with automation built in. Set rules that move a card from one stage to the next the moment it meets your criteria, and group deals into custom baskets, each with its own rules, so the right deals reach the right people without anyone lifting a finger.",
    bullets: [
      "Auto-move cards between stages on your rules",
      "Custom baskets to group and route deals your way",
      "Drag-and-drop for anything you want to do by hand",
      "Real-time team visibility",
    ],
    mockup: <KanbanMockup />,
  },
];

const FeatureBlock = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const isRight = feature.side === "right";

  return (
    <motion.div
      id={feature.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-28 ${
        index > 0 ? "mt-28" : ""
      }`}
    >
      {/* Mockup */}
      <div className={isRight ? "lg:order-2" : ""}>
        {feature.mockup}
      </div>

      {/* Text */}
      <div className={isRight ? "lg:order-1" : ""}>
        {/* Tag */}
        <div className="flex items-center gap-2 mb-5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${feature.iconColor}15`, color: feature.iconColor }}
          >
            {feature.icon}
          </div>
          <span className="text-sm font-medium" style={{ color: feature.iconColor }}>
            {feature.tag}
          </span>
        </div>

        <h3
          className="text-2xl sm:text-3xl font-bold text-[#14110F] mb-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          {feature.title}
        </h3>
        <p className="text-[#4A4238] leading-relaxed mb-6">{feature.description}</p>

        {/* Bullets */}
        <ul className="space-y-3">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-sm text-[#14110F]">
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${feature.iconColor}15` }}>
                <Check size={11} style={{ color: feature.iconColor }} />
              </div>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mb-20"
        >
          <h2
            className="font-display text-[#14110F]"
            style={{ fontSize: "clamp(32px, 4.2vw, 48px)", fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            One platform. Endless possibilities.
          </h2>
          <p className="mt-4 text-[#4A4238] text-lg leading-relaxed">
            Everything your sales team needs to prospect, communicate, close, and grow in one unified workspace.
          </p>
        </motion.div>

        {features.map((feature, i) => (
          <FeatureBlock key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
