"use client";

import { TextareaHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-md border border-[var(--color-crystal)] bg-[var(--glass-tier3-bg)] px-4 py-3 text-sm text-[var(--color-carbon)] transition-colors placeholder:text-[var(--color-slate)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(192,144,112,0.25)] focus-visible:border-[var(--color-terracotta)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
