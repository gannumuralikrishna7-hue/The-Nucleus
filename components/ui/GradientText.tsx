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
  from = "#FFFFFF",
  via = "#FFFFFF",
  to = "#FFFFFF",
  className = "",
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={`inline ${className}`}
      style={{
        color: to,
      }}
    >
      {children}
    </Tag>
  );
}
