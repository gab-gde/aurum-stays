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
          "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600",
          "focus:outline-none focus:border-[#D4A843]/50 focus:ring-1 focus:ring-[#D4A843]/20 transition-all",
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
