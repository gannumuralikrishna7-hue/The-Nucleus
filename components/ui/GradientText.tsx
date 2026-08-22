import { type ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  from?: string;
  via?: string;
  to?: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GradientText({
  children,
  from = "#5C6BFF",
  via = "#00E5FF",
  to = "#A78BFA",
  className = "",
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={`inline ${className}`}
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${via} 50%, ${to} 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </Tag>
  );
}
