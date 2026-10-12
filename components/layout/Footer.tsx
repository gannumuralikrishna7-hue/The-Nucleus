import { NucleusLogo } from "@/components/ui/NucleusLogo";

const footerLinks = {
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const NucleusLogoSmall = () => (
  <div className="flex items-center gap-2">
    <NucleusLogo size={28} />
    <span className="font-display text-[#14110F] text-base" style={{ fontWeight: 600 }}>The Nucleus</span>
  </div>
);

export function Footer() {
  return (
    <footer
      className="relative border-t border-[#E6DFD3] bg-[#F3EEE5]"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2">
            <NucleusLogoSmall />
            <p className="mt-4 text-sm text-[#4A4238] leading-relaxed max-w-[200px]">
              Where every relationship, conversation, and opportunity comes together.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[#14110F] uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#4A4238] hover:text-[#C45C1A] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#E6DFD3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8A8072]">
            © 2026 The Nucleus. All rights reserved.
          </p>
          <p className="text-sm text-[#8A8072]">
            Built for teams who move fast.
          </p>
        </div>
      </div>
    </footer>
  );
}
