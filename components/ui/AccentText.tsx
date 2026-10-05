import { type ReactNode } from "react";

interface AccentTextProps {
  children: ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

/**
 * Highlights a single keyword within a heading in brand orange.
 * Never wrap a full heading in this, only the word(s) that need emphasis.
 */
export function AccentText({ children, className = "", as: Tag = "span" }: AccentTextProps) {
  return (
    <Tag className={`inline text-[#F97316] ${className}`}>
      {children}
    </Tag>
  );
}
