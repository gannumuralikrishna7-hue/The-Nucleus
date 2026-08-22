"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Bell, Layers, ArrowRight, Check } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { slideFromLeft, slideFromRight, viewportOnce, staggerContainer, staggerItem } from "@/lib/animations";

const PhoneMockup1 = () => (
  <div
    className="relative w-[220px] mx-auto rounded-[36px] overflow-hidden border-2 border-white/10"
    style={{
      background: "linear-gradient(180deg, #0d0d1a 0%, #0a0a0f 100%)",
      boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
    }}
  >
    {/* Status bar */}
    <div className="flex items-center justify-between px-6 pt-4 pb-2">
      <span className="text-[10px] text-white/60 font-medium">9:41</span>
      <div className="flex items-center gap-1">
        <div className="w-3 h-1.5 rounded-sm border border-white/40 relative">
          <div className="absolute left-0.5 top-0.5 bottom-0.5 w-1/2 rounded-sm bg-[#22C55E]" />
        </div>
      </div>
    </div>

    {/* Incoming call screen */}
    <div className="px-6 pb-8 flex flex-col items-center">
      <div className="mt-6 mb-4 text-xs text-white/50 uppercase tracking-widest">Incoming Call</div>
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5C6BFF] to-[#A78BFA] flex items-center justify-center text-2xl font-bold text-white mb-4 ring-4 ring-[#5C6BFF]/20">
        RK
      </div>
      <div className="text-base font-bold text-white mb-1">Ravi Kumar</div>
      <div className="text-xs text-white/40 mb-1">Acme Corp</div>
      <div
        className="text-[10px] px-2.5 py-1 rounded-full font-medium mb-8"
        style={{ background: "rgba(92,107,255,0.15)", color: "#5C6BFF" }}
      >
        Lead Score: 87 · High Value
      </div>

      {/* Call actions */}
      <div className="flex items-center gap-6">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center"
          style={{ boxShadow: "0 0 20px rgba(239,68,68,0.4)" }}
        >
          <Phone size={20} className="text-white rotate-[135deg]" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          className="w-14 h-14 rounded-full bg-[#22C55E] flex items-center justify-center"
          style={{ boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}
        >
          <Phone size={20} className="text-white" />
        </motion.div>
      </div>

      {/* AI insight */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-6 w-full p-3 rounded-xl border border-[#5C6BFF]/20 text-[10px] text-white/60 leading-relaxed"
        style={{ background: "rgba(92,107,255,0.08)" }}
      >
        <span className="text-[#5C6BFF] font-semibold">AI: </span>
        Last spoke 3 days ago. Ravi was interested in enterprise pricing. Mention the 30% Q4 discount.
      </motion.div>
    </div>
  </div>
);

const PhoneMockup2 = () => (
  <div
    className="relative w-[220px] mx-auto rounded-[36px] overflow-hidden border-2 border-white/10"
    style={{
      background: "linear-gradient(180deg, #0d0d1a 0%, #0a0a0f 100%)",
      boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
    }}
  >
    {/* Status bar */}
    <div className="flex items-center justify-between px-6 pt-4 pb-2">
      <span className="text-[10px] text-white/60 font-medium">9:41</span>
      <div className="text-[10px] text-[#25D366] font-semibold">WhatsApp</div>
    </div>

    {/* WhatsApp header */}
    <div
      className="px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]"
      style={{ background: "rgba(17,24,39,0.6)" }}
    >
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#5C6BFF] to-[#A78BFA] flex items-center justify-center text-xs font-bold text-white">AC</div>
      <div>
        <div className="text-xs font-semibold text-white">Acme Corp Team</div>
        <div className="text-[10px] text-[#25D366]">● 3 members online</div>
      </div>
    </div>

    {/* Messages */}
    <div className="px-4 py-3 space-y-2.5 h-64 overflow-hidden">
      {[
        { msg: "Can we get a custom plan for 50 seats?", sent: false, time: "9:32" },
        { msg: "Absolutely! Let me pull up the enterprise pricing for you 📊", sent: true, time: "9:33" },
        { msg: "What's the discount for annual billing?", sent: false, time: "9:34" },
        { msg: "30% off for annual + dedicated account manager 🎯", sent: true, time: "9:35" },
        { msg: "That sounds great. Sending to our CFO now!", sent: false, time: "9:36" },
      ].map((m, i) => (
        <div key={i} className={`flex ${m.sent ? "justify-end" : "justify-start"}`}>
          <div
            className="text-[10px] px-2.5 py-1.5 rounded-xl max-w-[85%] text-white/80 leading-relaxed"
            style={{
              background: m.sent ? "rgba(92,107,255,0.35)" : "rgba(255,255,255,0.08)",
              borderRadius: m.sent ? "14px 4px 14px 14px" : "4px 14px 14px 14px",
            }}
          >
            {m.msg}
            <div className="text-[8px] text-white/25 mt-0.5 text-right">{m.time}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div className="px-4 py-3 flex items-center gap-2 border-t border-white/[0.06]">
      <div
        className="flex-1 rounded-full px-3 py-1.5 text-[10px] text-white/25"
        style={{ background: "rgba(255,255,255,0.05)" }}
      >
        Type a message...
      </div>
      <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center">
        <ArrowRight size={12} className="text-white" />
      </div>
    </div>
  </div>
);

const features = [
  { icon: <Phone size={16} />, text: "Make and receive calls from anywhere" },
  { icon: <MessageSquare size={16} />, text: "WhatsApp conversations on the go" },
  { icon: <Bell size={16} />, text: "Real-time AI nudges and notifications" },
  { icon: <Layers size={16} />, text: "Full CRM access from your pocket" },
];

export function MobileApp() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(92,107,255,0.06) 0%, transparent 60%)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#5C6BFF] mb-4">Mobile App</p>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              The Nucleus Goes Where{" "}
              <GradientText>Your Team Goes</GradientText>
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
              Never miss a deal because you stepped away from your desk. The full power of The Nucleus in your pocket, always on.
            </p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-4 mb-10"
            >
              {features.map((f) => (
                <motion.li key={f.text} variants={staggerItem} className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(92,107,255,0.15)" }}>
                    <span className="text-[#5C6BFF]">{f.icon}</span>
                  </div>
                  {f.text}
                </motion.li>
              ))}
            </motion.ul>

            {/* App store badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Download on App Store", icon: "🍎" },
                { label: "Get it on Google Play", icon: "▶" },
              ].map((badge) => (
                <motion.a
                  key={badge.label}
                  href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/[0.12] hover:border-white/25 transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                  aria-label={badge.label}
                >
                  <span className="text-xl">{badge.icon}</span>
                  <div>
                    <div className="text-[9px] text-white/40 uppercase tracking-widest">Available on</div>
                    <div className="text-sm font-semibold text-white">{badge.label.split(" on ")[1] || badge.label.split(" it on ")[1]}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Phone mockups */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative flex items-center justify-center"
          >
            {/* Phone 1, slightly behind and tilted */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-4 top-4 z-10 opacity-70"
              style={{ transform: "rotate(-6deg) translateX(-30px)" }}
            >
              <PhoneMockup1 />
            </motion.div>

            {/* Phone 2, front and center */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative z-20"
              style={{ transform: "rotate(3deg) translateX(30px)" }}
            >
              <PhoneMockup2 />
            </motion.div>

            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(92,107,255,0.15) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
