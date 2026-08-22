"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { fadeUp, viewportOnce } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "The Nucleus completely transformed how our sales team operates. Having Gmail, WhatsApp, and AI insights in one place is a game-changer. We closed 40% more deals last quarter.",
    name: "Priya Sharma",
    role: "VP of Sales",
    company: "TechCorp India",
    initials: "PS",
    gradFrom: "#C86522",
    gradTo: "#B45318",
  },
  {
    quote:
      "I've tried 8 CRMs in 6 years. Nothing comes close to The Nucleus. The AI suggestions alone have saved me 2 hours every single day. It's like having a brilliant assistant who never sleeps.",
    name: "Alex Johnson",
    role: "Founder & CEO",
    company: "StartupXYZ",
    initials: "AJ",
    gradFrom: "#E28A4B",
    gradTo: "#C86522",
  },
  {
    quote:
      "We rolled out The Nucleus across our 50-person sales team in one afternoon. The Google Workspace integration was seamless. Our pipeline visibility went from 30% to 100% overnight.",
    name: "Ravi Kumar",
    role: "Head of Business Development",
    company: "Acme Corp",
    initials: "RK",
    gradFrom: "#B45318",
    gradTo: "#E28A4B",
  },
  {
    quote:
      "The WhatsApp integration is pure gold for our market. Our clients respond 3x faster on WhatsApp than email. And every message is automatically in the CRM. Zero manual work.",
    name: "Sarah Chen",
    role: "Customer Success Director",
    company: "Nexus Systems",
    initials: "SC",
    gradFrom: "#A1A1AA",
    gradTo: "#E28A4B",
  },
  {
    quote:
      "The AI lead scoring is eerily accurate. It flagged Meera Singh as a hot lead. I called her and closed a $200K deal that same day. The ROI on The Nucleus is compelling.",
    name: "Arjun Mehta",
    role: "Sales Manager",
    company: "GlobalTech",
    initials: "AM",
    gradFrom: "#C86522",
    gradTo: "#A1A1AA",
  },
  {
    quote:
      "Implementation took 20 minutes. Our team was fully onboarded by end of day. The support team is incredible. This is what SaaS should feel like: fast, smart, and delightful.",
    name: "Nadia Volkov",
    role: "Operations Lead",
    company: "InnovateCo",
    initials: "NV",
    gradFrom: "#B45318",
    gradTo: "#C86522",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div
      className="flex flex-col p-7 rounded-2xl border flex-shrink-0 w-[340px] sm:w-[380px]"
      style={{
        background: "rgba(17,24,39,0.6)",
        backdropFilter: "blur(20px)",
        borderColor: "rgba(255,255,255,0.07)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-white/75 leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${testimonial.gradFrom}, ${testimonial.gradTo})` }}
          aria-label={`${testimonial.name}'s avatar`}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{testimonial.name}</div>
          <div className="text-xs text-white/40">{testimonial.role} · {testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 4000);
    return () => clearInterval(id);
  }, [isPaused, total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C86522] mb-4">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ letterSpacing: "-0.03em" }}>
            Loved by Teams Who{" "}
            <GradientText>Move Fast</GradientText>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Customer testimonials"
          aria-live="polite"
        >
          {/* Fade masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0A0A0F, transparent)" }}
            aria-hidden
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0A0A0F, transparent)" }}
            aria-hidden
          />

          <motion.div
            className="flex gap-5 pb-4"
            animate={{ x: `calc(-${current * 100 / 3}%)` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{ willChange: "transform" }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/[0.1] hover:border-white/30 hover:bg-white/5 transition-all text-white/60 hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={current === i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: current === i ? "24px" : "8px",
                  height: "8px",
                  background: current === i
                    ? "linear-gradient(90deg, #C86522, #E28A4B)"
                    : "rgba(255,255,255,0.15)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/[0.1] hover:border-white/30 hover:bg-white/5 transition-all text-white/60 hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
