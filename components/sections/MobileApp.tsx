"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Bell, Layers, ArrowRight } from "lucide-react";
import { slideFromLeft, slideFromRight, viewportOnce, staggerContainer, staggerItem } from "@/lib/animations";

const AppleLogo = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zm3.63-3.333c.843-1.012 1.4-2.427 1.245-3.843-1.207.052-2.662.805-3.531 1.817-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.688z" />
  </svg>
);

const GooglePlayLogo = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
  </svg>
);

const PhoneMockup1 = () => (
  <div
    className="relative w-[220px] mx-auto rounded-[36px] overflow-hidden border-2 border-[#14110F]/10 bg-[#FBF9F6]"
    style={{ boxShadow: "0 40px 80px rgba(20,17,15,0.16)" }}
  >
    {/* Status bar */}
    <div className="flex items-center justify-between px-6 pt-4 pb-2">
      <span className="text-[10px] text-[#4A4238] font-medium">9:41</span>
      <div className="flex items-center gap-1">
        <div className="w-3 h-1.5 rounded-sm border border-[#8A8072] relative">
          <div className="absolute left-0.5 top-0.5 bottom-0.5 w-1/2 rounded-sm bg-[#3F7A4E]" />
        </div>
      </div>
    </div>

    {/* Incoming call screen */}
    <div className="px-6 pb-8 flex flex-col items-center">
      <div className="mt-6 mb-4 text-xs text-[#8A8072] uppercase tracking-widest">Incoming Call</div>
      <div className="w-20 h-20 rounded-full bg-[#14110F] flex items-center justify-center text-2xl font-bold text-white mb-4">
        RK
      </div>
      <div className="text-base font-bold text-[#14110F] mb-1">Ravi Kumar</div>
      <div className="text-xs text-[#8A8072] mb-1">Acme Corp</div>
      <div className="text-[10px] px-2.5 py-1 rounded-full font-medium mb-8 bg-[#F5E3D3] text-[#C45C1A]">
        Lead Score: 87, High Value
      </div>

      {/* Call actions */}
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 rounded-full bg-[#EF4444] flex items-center justify-center">
          <Phone size={20} className="text-white rotate-[135deg]" />
        </div>
        <div className="w-14 h-14 rounded-full bg-[#3F7A4E] flex items-center justify-center">
          <Phone size={20} className="text-white" />
        </div>
      </div>

      {/* AI insight */}
      <div className="mt-6 w-full p-3 rounded-xl border border-[#C45C1A]/20 text-[10px] text-[#4A4238] leading-relaxed bg-[#F5E3D3]">
        <span className="text-[#C45C1A] font-semibold">AI: </span>
        Last spoke 3 days ago. Ravi was interested in enterprise pricing. Mention the 30% Q4 discount.
      </div>
    </div>
  </div>
);

const PhoneMockup2 = () => (
  <div
    className="relative w-[220px] mx-auto rounded-[36px] overflow-hidden border-2 border-[#14110F]/10 bg-[#FBF9F6]"
    style={{ boxShadow: "0 40px 80px rgba(20,17,15,0.16)" }}
  >
    {/* Status bar */}
    <div className="flex items-center justify-between px-6 pt-4 pb-2">
      <span className="text-[10px] text-[#4A4238] font-medium">9:41</span>
      <div className="text-[10px] text-[#25D366] font-semibold">WhatsApp</div>
    </div>

    {/* WhatsApp header */}
    <div className="px-4 py-3 flex items-center gap-3 border-b border-[#E6DFD3] bg-[#F3EEE5]">
      <div className="w-9 h-9 rounded-full bg-[#14110F] flex items-center justify-center text-xs font-bold text-white">AC</div>
      <div>
        <div className="text-xs font-semibold text-[#14110F]">Acme Corp Team</div>
        <div className="text-[10px] text-[#3F7A4E]">3 members online</div>
      </div>
    </div>

    {/* Messages */}
    <div className="px-4 py-3 space-y-2.5 h-64 overflow-hidden">
      {[
        { msg: "Can we get a custom plan for 50 seats?", sent: false, time: "9:32" },
        { msg: "Absolutely! Let me pull up the enterprise pricing for you.", sent: true, time: "9:33" },
        { msg: "What's the discount for annual billing?", sent: false, time: "9:34" },
        { msg: "30% off for annual, plus a dedicated account manager.", sent: true, time: "9:35" },
        { msg: "That sounds great. Sending to our CFO now.", sent: false, time: "9:36" },
      ].map((m, i) => (
        <div key={i} className={`flex ${m.sent ? "justify-end" : "justify-start"}`}>
          <div
            className="text-[10px] px-2.5 py-1.5 rounded-xl max-w-[85%] leading-relaxed"
            style={{
              background: m.sent ? "#F5E3D3" : "#FBF9F6",
              color: "#14110F",
              border: m.sent ? "none" : "1px solid #E6DFD3",
              borderRadius: m.sent ? "14px 4px 14px 14px" : "4px 14px 14px 14px",
            }}
          >
            {m.msg}
            <div className="text-[8px] text-[#8A8072] mt-0.5 text-right">{m.time}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div className="px-4 py-3 flex items-center gap-2 border-t border-[#E6DFD3]">
      <div className="flex-1 rounded-full px-3 py-1.5 text-[10px] text-[#8A8072] bg-[#F3EEE5]">
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
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#F3EEE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2
              className="font-display text-[#14110F] mb-6"
              style={{ fontSize: "clamp(32px, 4.2vw, 48px)", fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              The Nucleus goes where your team goes.
            </h2>
            <p className="text-[#4A4238] text-lg leading-relaxed mb-8">
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
                <motion.li key={f.text} variants={staggerItem} className="flex items-center gap-3 text-[#14110F]">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#F5E3D3]">
                    <span className="text-[#C45C1A]">{f.icon}</span>
                  </div>
                  {f.text}
                </motion.li>
              ))}
            </motion.ul>

            {/* App store badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Download on App Store", icon: <AppleLogo size={22} /> },
                { label: "Get it on Google Play", icon: <GooglePlayLogo size={22} /> },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#E6DFD3] bg-[#FBF9F6] cursor-default select-none"
                >
                  <span className="text-[#14110F]">{badge.icon}</span>
                  <div>
                    <div className="text-[9px] text-[#8A8072] uppercase tracking-widest">Available on</div>
                    <div className="text-sm font-semibold text-[#14110F]">{badge.label.split(" on ")[1] || badge.label.split(" it on ")[1]}</div>
                  </div>
                </div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
