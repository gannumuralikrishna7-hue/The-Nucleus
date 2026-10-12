"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { NucleusLogo } from "@/components/ui/NucleusLogo";
import { useEnquiryModal } from "@/components/ui/EnquiryModal";

const Wordmark = () => (
  <div className="flex items-center gap-2.5">
    <NucleusLogo size={32} />
    <span className="font-display text-[#14110F] text-lg" style={{ fontWeight: 600 }}>The Nucleus</span>
  </div>
);

export function Navbar() {
  const { openEnquiryModal } = useEnquiryModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          background: scrolled ? "rgba(251, 249, 246, 0.92)" : "rgba(251, 249, 246, 0.7)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid #E6DFD3" : "1px solid transparent",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" aria-label="The Nucleus home">
            <Wordmark />
          </a>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="#login"
              className="px-4 py-2 text-sm font-medium text-[#4A4238] hover:text-[#14110F] transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              Log in
            </motion.a>
            <GlowButton
              variant="primary"
              size="sm"
              onClick={openEnquiryModal}
              ariaLabel="Get started with The Nucleus for free"
            >
              Get Started Free
            </GlowButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#4A4238] hover:text-[#14110F] hover:bg-[#F3EEE5] transition-colors"
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
            className="fixed inset-0 z-[200] lg:hidden bg-[#FBF9F6]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col h-full px-6 py-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <Wordmark />
                <button
                  className="p-2 rounded-lg text-[#4A4238] hover:text-[#14110F] hover:bg-[#F3EEE5] transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-2">
                <motion.a
                  href="#login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl font-semibold text-[#14110F] py-3 border-b border-[#E6DFD3] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Log in
                </motion.a>
              </nav>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-auto"
              >
                <GlowButton
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setMobileOpen(false);
                    openEnquiryModal();
                  }}
                  className="w-full justify-center"
                >
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
