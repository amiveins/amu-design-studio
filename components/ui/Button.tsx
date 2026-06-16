"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-[var(--duration-base)] ease-[var(--ease-glass)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(192,144,112,0.25)] disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-[var(--color-terracotta)] text-white hover:bg-[var(--color-terracotta-hover)] px-6 py-3 text-[14px] md:text-[16px]",
      secondary: "border border-[var(--color-terracotta)] text-[var(--color-terracotta)] hover:bg-[var(--color-blush)] hover:text-[var(--color-terracotta-hover)] px-6 py-3 text-[14px] md:text-[16px]",
      ghost: "text-[var(--color-terracotta)] hover:bg-[var(--color-blush)] px-4 py-2 text-[14px] md:text-[16px]",
      icon: "p-2 rounded-full hover:bg-[var(--color-blush)] text-[var(--color-terracotta)]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
