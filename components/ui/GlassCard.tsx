"use client";

import { HTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  tier?: 1 | 2 | 3;
  dark?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, tier = 2, dark = false, children, ...props }, ref) => {
    const baseClass = dark ? "glass-card-dark" : "glass-card";
    
    const inlineStyles = tier !== 2 && !dark ? {
      background: `var(--glass-tier${tier}-bg)`,
      backdropFilter: `blur(var(--glass-tier${tier}-blur)) saturate(180%)`,
      WebkitBackdropFilter: `blur(var(--glass-tier${tier}-blur)) saturate(180%)`,
    } : {};

    return (
      <div
        ref={ref}
        className={cn(
          baseClass, 
          "transition-all duration-[var(--duration-base)] ease-[var(--ease-glass)]",
          "hover:-translate-y-1 hover:shadow-lg", 
          className
        )}
        style={{ ...inlineStyles, ...props.style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";
export { GlassCard };
