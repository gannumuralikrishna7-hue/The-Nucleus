"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export function GlowButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  icon,
  iconPosition = "right",
  disabled = false,
  type = "button",
  ariaLabel,
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-[#5C6BFF] text-white border border-[#5C6BFF] hover:shadow-[0_0_24px_rgba(92,107,255,0.5),0_0_60px_rgba(92,107,255,0.2)]",
    secondary:
      "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50",
    ghost: "bg-transparent text-white border border-transparent hover:bg-white/5",
  };

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 font-medium
    h-12 rounded-xl transition-all duration-300 select-none overflow-hidden
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C6BFF]
    disabled:opacity-40 disabled:pointer-events-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && (
        <motion.span
          className="flex-shrink-0"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {icon}
        </motion.span>
      )}

      {/* Shimmer sweep on primary */}
      {variant === "primary" && (
        <span
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-700"
          aria-hidden
        />
      )}
    </>
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
    className: `group ${baseClasses}`,
    "aria-label": ariaLabel,
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
