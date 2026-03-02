"use client";
import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => (
    <div className="space-y-1.5">
      {label && <label className="text-sm text-gray-400 font-medium">{label}</label>}
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white placeholder:text-gray-600",
          "focus:outline-none focus:border-[#D4A843]/40 focus:shadow-[0_0_0_3px_rgba(212,168,67,0.08)] transition-all duration-300",
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
