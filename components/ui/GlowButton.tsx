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
      "bg-[#C45C1A] text-white border border-[#C45C1A] shadow-[0_1px_2px_rgba(20,17,15,0.06)] hover:bg-[#8F4313] hover:border-[#8F4313] hover:shadow-[0_8px_24px_rgba(196,92,26,0.28)]",
    secondary:
      "bg-[#FBF9F6] text-[#14110F] border border-[#E6DFD3] hover:border-[#C45C1A]/50 hover:text-[#C45C1A] shadow-[0_1px_2px_rgba(20,17,15,0.04)]",
    ghost: "bg-transparent text-[#14110F] border border-transparent hover:bg-[#F3EEE5]",
  };

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 font-semibold
    h-12 rounded-xl transition-all duration-200 select-none
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C45C1A] focus-visible:ring-offset-2
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
    </>
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
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
