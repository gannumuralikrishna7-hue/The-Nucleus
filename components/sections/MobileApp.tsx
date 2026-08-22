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
          <div className="absolute left-0.5 top-0.5 bottom-0.5 w-1/2 rounded-sm bg-[#A1A1AA]" />
        </div>
      </div>
    </div>

    {/* Incoming call screen */}
    <div className="px-6 pb-8 flex flex-col items-center">
      <div className="mt-6 mb-4 text-xs text-white/50 uppercase tracking-widest">Incoming Call</div>
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C86522] to-[#B45318] flex items-center justify-center text-2xl font-bold text-white mb-4 ring-4 ring-[#C86522]/20">
        RK
      </div>
      <div className="text-base font-bold text-white mb-1">Ravi Kumar</div>
      <div className="text-xs text-white/40 mb-1">Acme Corp</div>
      <div
        className="text-[10px] px-2.5 py-1 rounded-full font-medium mb-8"
        style={{ background: "rgba(200,101,34,0.15)", color: "#C86522" }}
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
          className="w-14 h-14 rounded-full bg-[#A1A1AA] flex items-center justify-center"
          style={{ boxShadow: "0 0 20px rgba(161,161,170,0.4)" }}
        >
          <Phone size={20} className="text-white" />
        </motion.div>
      </div>

      {/* AI insight */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-6 w-full p-3 rounded-xl border border-[#C86522]/20 text-[10px] text-white/60 leading-relaxed"
        style={{ background: "rgba(200,101,34,0.08)" }}
      >
        <span className="text-[#C86522] font-semibold">AI: </span>
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
      <div className="text-[10px] text-[#C86522] font-semibold">WhatsApp</div>
    </div>

    {/* WhatsApp header */}
    <div
      className="px-4 py-3 flex items-center gap-3 border-b border-white/[0.06]"
      style={{ background: "rgba(17,24,39,0.6)" }}
    >
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C86522] to-[#B45318] flex items-center justify-center text-xs font-bold text-white">AC</div>
      <div>
        <div className="text-xs font-semibold text-white">Acme Corp Team</div>
        <div className="text-[10px] text-[#C86522]">● 3 members online</div>
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
              background: m.sent ? "rgba(200,101,34,0.35)" : "rgba(255,255,255,0.08)",
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
      <div className="w-7 h-7 rounded-full bg-[#C86522] flex items-center justify-center">
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
        style={{ background: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(200,101,34,0.06) 0%, transparent 60%)" }}
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
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C86522] mb-4">Mobile App</p>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              The Nucleus Goes Where{" "}
              <GradientText>Your Team Goes</GradientText>
            </h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">
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
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,101,34,0.15)" }}>
                    <span className="text-[#C86522]">{f.icon}</span>
                  </div>
                  {f.text}
                </motion.li>
              ))}
            </motion.ul>

            {/* App store badges */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                  href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex h-12 w-40 items-center gap-3 rounded-lg border border-white/20 bg-black px-3.5 text-left transition-colors duration-200 hover:border-white/40"
                  aria-label="Download on the App Store"
                >
                  <svg viewBox="0 0 24 28" aria-hidden="true" className="h-6 w-5 shrink-0 fill-white">
                    <path d="M19.67 14.87c-.03-3.24 2.65-4.81 2.77-4.88a5.96 5.96 0 0 0-4.69-2.53c-1.98-.2-3.9 1.18-4.9 1.18-1.02 0-2.54-1.16-4.19-1.13a6.17 6.17 0 0 0-5.2 3.17c-2.25 3.9-.57 9.64 1.58 12.8 1.08 1.55 2.34 3.28 4 3.22 1.62-.07 2.23-1.03 4.18-1.03 1.93 0 2.5 1.03 4.19.99 1.74-.03 2.83-1.56 3.87-3.13a12.8 12.8 0 0 0 1.77-3.63 5.62 5.62 0 0 1-3.38-5.03ZM16.45 5.37A5.75 5.75 0 0 0 17.77 1a5.85 5.85 0 0 0-3.79 1.96 5.48 5.48 0 0 0-1.36 4.2 4.84 4.84 0 0 0 3.83-1.79Z" />
                  </svg>
                  <span className="leading-none">
                    <span className="block text-[8px] uppercase tracking-wide text-white/60">Download on the</span>
                    <span className="mt-1 block text-[15px] font-medium tracking-tight text-white">App Store</span>
                  </span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex h-12 w-40 items-center gap-3 rounded-lg border border-white/20 bg-black px-3.5 text-left transition-colors duration-200 hover:border-white/40"
                  aria-label="Get it on Google Play"
                >
                  <svg viewBox="0 0 28 32" aria-hidden="true" className="h-6 w-5 shrink-0">
                    <path fill="#00D7FF" d="M1.5 1.7 16.3 16 1.5 30.3a2.6 2.6 0 0 1-.8-1.9V3.6c0-.7.3-1.4.8-1.9Z" />
                    <path fill="#00F076" d="m2.7 1 16.9 9.5-3.3 3.2L1.5 1.7A2.4 2.4 0 0 1 2.7 1Z" />
                    <path fill="#FFCF32" d="m2.7 31 13.6-12 3.3 3.2L2.7 31a2.4 2.4 0 0 1-1.2-.7Z" />
                    <path fill="#FF4B55" d="m19.6 10.5 5.1 2.9c1.7 1 1.7 3.3 0 4.3l-5.1 3-3.3-3.2 3.3-3.2-3.3-3.2 3.3-.6Z" />
                  </svg>
                  <span className="leading-none">
                    <span className="block text-[8px] uppercase tracking-wide text-white/60">Get it on</span>
                    <span className="mt-1 block text-[15px] font-medium tracking-tight text-white">Google Play</span>
                  </span>
                </motion.a>
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
                background: "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(200,101,34,0.15) 0%, transparent 70%)",
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
