"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { AccentText } from "@/components/ui/AccentText";
import { fadeUp, viewportOnce } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "The Nucleus completely transformed how our sales team operates. Having Gmail, WhatsApp, and AI insights in one place is a game changer. We closed 40% more deals last quarter.",
    name: "Priya Sharma",
    role: "VP of Sales",
    company: "TechCorp India",
    initials: "PS",
  },
  {
    quote:
      "I've tried 8 CRMs in 6 years. Nothing comes close to The Nucleus. The AI suggestions alone have saved me 2 hours every single day. It's like having a brilliant assistant who never sleeps.",
    name: "Alex Johnson",
    role: "Founder & CEO",
    company: "StartupXYZ",
    initials: "AJ",
  },
  {
    quote:
      "We rolled out The Nucleus across our 50-person sales team in one afternoon. The Google Workspace integration was seamless. Our pipeline visibility went from 30% to 100% overnight.",
    name: "Ravi Kumar",
    role: "Head of Business Development",
    company: "Acme Corp",
    initials: "RK",
  },
  {
    quote:
      "The WhatsApp integration is pure gold for our market. Our clients respond 3x faster on WhatsApp than email. And every message is automatically in the CRM. Zero manual work.",
    name: "Sarah Chen",
    role: "Customer Success Director",
    company: "Nexus Systems",
    initials: "SC",
  },
  {
    quote:
      "The AI lead scoring is eerily accurate. It flagged Meera Singh as a hot lead. I called her and closed a $200K deal that same day. The ROI on The Nucleus is compelling.",
    name: "Arjun Mehta",
    role: "Sales Manager",
    company: "GlobalTech",
    initials: "AM",
  },
  {
    quote:
      "Implementation took 20 minutes. Our team was fully onboarded by end of day. The support team is incredible. This is what SaaS should feel like: fast, smart, and delightful.",
    name: "Nadia Volkov",
    role: "Operations Lead",
    company: "InnovateCo",
    initials: "NV",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div
      className="flex flex-col p-7 rounded-2xl border flex-shrink-0 w-[340px] sm:w-[380px] bg-white"
      style={{ borderColor: "#E2E8F0", boxShadow: "0 4px 16px rgba(15,23,42,0.04)" }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-[#F97316] text-[#F97316]" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-[#0F172A] leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 bg-[#0F172A]"
          aria-label={`${testimonial.name}'s avatar`}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-[#0F172A]">{testimonial.name}</div>
          <div className="text-xs text-[#94A3B8]">{testimonial.role}, {testimonial.company}</div>
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
    <section className="relative py-24 overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F97316] mb-4">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A]" style={{ letterSpacing: "-0.03em" }}>
            Loved by Teams Who <AccentText>Move Fast</AccentText>
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
            style={{ background: "linear-gradient(to right, #F8FAFC, transparent)" }}
            aria-hidden
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #F8FAFC, transparent)" }}
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
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E2E8F0] hover:border-[#F97316]/40 hover:bg-white transition-all text-[#475569] hover:text-[#F97316]"
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
                  background: current === i ? "#F97316" : "#CBD5E1",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E2E8F0] hover:border-[#F97316]/40 hover:bg-white transition-all text-[#475569] hover:text-[#F97316]"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
