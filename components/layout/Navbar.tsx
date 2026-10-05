"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronDown, Mail, MessageSquare, Brain, LayoutGrid, Users, Settings } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { NucleusLogo } from "@/components/ui/NucleusLogo";

const features = [
  { icon: <Mail size={16} />, title: "Google Workspace", desc: "Gmail, Drive, Sheets, Docs & Calendar" },
  { icon: <MessageSquare size={16} />, title: "WhatsApp & Calling", desc: "Multi-channel communication" },
  { icon: <Brain size={16} />, title: "AI Intelligence", desc: "Smart suggestions & lead scoring" },
  { icon: <LayoutGrid size={16} />, title: "Kanban Pipelines", desc: "Visual deal management" },
  { icon: <Users size={16} />, title: "Contacts Hub", desc: "Full relationship history" },
  { icon: <Settings size={16} />, title: "Team Management", desc: "Roles, permissions & activity" },
];

const navLinks = [
  { label: "Features", hasDropdown: true },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

const Wordmark = () => (
  <div className="flex items-center gap-2.5">
    <NucleusLogo size={32} />
    <span className="font-bold text-[#0F172A] text-lg tracking-tight">The Nucleus</span>
  </div>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          height: "72px",
          background: scrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" aria-label="The Nucleus home">
            <Wordmark />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors rounded-lg hover:bg-[#F8FAFC]"
                    onMouseEnter={() => setFeaturesOpen(true)}
                    onMouseLeave={() => setFeaturesOpen(false)}
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                    aria-expanded={featuresOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <motion.span
                      animate={{ rotate: featuresOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {featuresOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        onMouseEnter={() => setFeaturesOpen(true)}
                        onMouseLeave={() => setFeaturesOpen(false)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] rounded-2xl p-4 bg-white border border-[#E2E8F0]"
                        style={{ boxShadow: "0 24px 60px rgba(15,23,42,0.12)" }}
                        role="menu"
                        aria-label="Features menu"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {features.map((f) => (
                            <motion.a
                              key={f.title}
                              href="#features"
                              role="menuitem"
                              whileHover={{ backgroundColor: "#F8FAFC" }}
                              className="flex items-start gap-3 p-3 rounded-xl transition-colors"
                            >
                              <span className="mt-0.5 text-[#F97316]">{f.icon}</span>
                              <div>
                                <div className="text-sm font-medium text-[#0F172A]">{f.title}</div>
                                <div className="text-xs text-[#475569] mt-0.5">{f.desc}</div>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                          <span className="text-xs text-[#94A3B8]">
                            AI-powered CRM platform
                          </span>
                          <a href="#features" className="text-xs text-[#F97316] hover:text-[#EA580C] transition-colors font-medium">
                            See all features
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors rounded-lg hover:bg-[#F8FAFC] relative group"
                  whileHover="hover"
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-1.5 left-4 right-4 h-px bg-[#F97316]"
                    initial={{ scaleX: 0 }}
                    variants={{ hover: { scaleX: 1 } }}
                    style={{ transformOrigin: "left" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              )
            )}
          </div>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="#login"
              className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              Log in
            </motion.a>
            <GlowButton
              variant="primary"
              size="sm"
              href="#signup"
              ariaLabel="Get started with The Nucleus for free"
            >
              Get Started Free
            </GlowButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] lg:hidden bg-white"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col h-full px-6 py-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <Wordmark />
                <button
                  className="p-2 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-2">
                {[...navLinks, { label: "Log in", href: "#login" }].map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href || "#"}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-2xl font-semibold text-[#0F172A] py-3 border-b border-[#E2E8F0] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-auto"
              >
                <GlowButton variant="primary" size="lg" href="#signup" className="w-full justify-center">
                  Get Started Free
                </GlowButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
