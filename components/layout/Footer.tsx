import { NucleusLogo } from "@/components/ui/NucleusLogo";

const footerLinks = {
  Product: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API Reference", "Community", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const SocialIcons = {
  LinkedIn: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Twitter: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  Instagram: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  ),
  YouTube: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
  ),
};

const socialLinks = [
  { Icon: SocialIcons.LinkedIn, label: "LinkedIn", href: "#" },
  { Icon: SocialIcons.Twitter, label: "Twitter / X", href: "#" },
  { Icon: SocialIcons.Instagram, label: "Instagram", href: "#" },
  { Icon: SocialIcons.YouTube, label: "YouTube", href: "#" },
];

const NucleusLogoSmall = () => (
  <div className="flex items-center gap-2">
    <NucleusLogo size={28} />
    <span className="font-bold text-[#0F172A] text-base tracking-tight">The Nucleus</span>
  </div>
);

export function Footer() {
  return (
    <footer
      className="relative border-t border-[#E2E8F0] bg-[#F8FAFC]"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <NucleusLogoSmall />
            <p className="mt-4 text-sm text-[#475569] leading-relaxed max-w-[200px]">
              Where every relationship, conversation, and opportunity comes together.
            </p>
            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#475569] hover:text-[#F97316] bg-white hover:bg-white border border-[#E2E8F0] hover:border-[#F97316]/40 transition-all duration-200"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[#0F172A] uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#475569] hover:text-[#F97316] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#94A3B8]">
            © 2026 The Nucleus. All rights reserved.
          </p>
          <p className="text-sm text-[#94A3B8]">
            Built for teams who move fast.
          </p>
        </div>
      </div>
    </footer>
  );
}
