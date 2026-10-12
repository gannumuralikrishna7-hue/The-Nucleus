"use client";

import { createContext, useContext, useState, type ReactNode, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check } from "lucide-react";

interface EnquiryModalContextValue {
  openEnquiryModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return ctx;
}

const inputClasses =
  "w-full rounded-lg border border-[#E6DFD3] bg-[#FBF9F6] px-3.5 py-2.5 text-sm text-[#14110F] placeholder:text-[#8A8072] focus:outline-none focus:ring-2 focus:ring-[#C45C1A]/40 focus:border-[#C45C1A] transition-colors";

function EnquiryForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      company: form.get("company"),
      email: form.get("email"),
      phone: form.get("phone"),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong.");
      }

      onSubmitted();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="enquiry-name" className="block text-xs font-medium text-[#4A4238] mb-1.5">
          Full name
        </label>
        <input id="enquiry-name" name="name" type="text" required placeholder="Priya Sharma" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="enquiry-company" className="block text-xs font-medium text-[#4A4238] mb-1.5">
          Company
        </label>
        <input id="enquiry-company" name="company" type="text" required placeholder="TechCorp" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="enquiry-email" className="block text-xs font-medium text-[#4A4238] mb-1.5">
          Work email
        </label>
        <input id="enquiry-email" name="email" type="email" required placeholder="priya@techcorp.com" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="enquiry-phone" className="block text-xs font-medium text-[#4A4238] mb-1.5">
          Phone number
        </label>
        <input id="enquiry-phone" name="phone" type="tel" required placeholder="+1 415 555 0182" className={inputClasses} />
      </div>

      {error && (
        <p className="text-xs text-[#DC2626] bg-[#FEF2F2] border border-[#FECACA] rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full h-11 rounded-xl bg-[#C45C1A] text-white font-semibold text-sm hover:bg-[#8F4313] transition-colors disabled:opacity-60 disabled:pointer-events-none"
      >
        {submitting ? "Sending..." : "Submit enquiry"}
      </button>
      <p className="text-[11px] text-[#8A8072] text-center">
        No credit card required. We will get back to you within one business day.
      </p>
    </form>
  );
}

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const close = () => {
    setIsOpen(false);
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <EnquiryModalContext.Provider value={{ openEnquiryModal: () => setIsOpen(true) }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
          >
            <div
              className="absolute inset-0 bg-[#14110F]/50"
              onClick={close}
              aria-hidden
            />

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md rounded-2xl bg-[#FBF9F6] border border-[#E6DFD3] p-6 sm:p-7"
              style={{ boxShadow: "0 24px 60px rgba(20,17,15,0.18)" }}
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-[#8A8072] hover:text-[#14110F] hover:bg-[#F3EEE5] transition-colors"
              >
                <X size={18} />
              </button>

              {submitted ? (
                <div className="py-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E9F1EA] flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-[#3F7A4E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#14110F] mb-2">Thanks, that's in.</h3>
                  <p className="text-sm text-[#4A4238] mb-6">
                    Someone from our team will reach out shortly to get you started.
                  </p>
                  <button
                    onClick={close}
                    className="h-10 px-6 rounded-xl bg-[#F3EEE5] border border-[#E6DFD3] text-sm font-medium text-[#14110F] hover:bg-[#FBF9F6] transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3 id="enquiry-modal-title" className="text-lg font-bold text-[#14110F] mb-1">
                    Get started with The Nucleus
                  </h3>
                  <p className="text-sm text-[#4A4238] mb-5">
                    Tell us a bit about you and we will set you up.
                  </p>
                  <EnquiryForm onSubmitted={() => setSubmitted(true)} />
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </EnquiryModalContext.Provider>
  );
}
