"use client";
import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => (
    <div className="space-y-2">
      {label && <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">{label}</label>}
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-3.5 bg-transparent border border-white/[0.08] text-white text-sm placeholder:text-white/20",
          "focus:outline-none focus:border-[var(--gold)]/40 transition-all duration-500",
          error && "border-red-500/50",
          className
        )}
        {...props}
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  )
);
Input.displayName = "Input";
