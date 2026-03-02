"use client";
import { cn } from "@/lib/utils";
import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, ...props }, ref) => (
    <div className="space-y-2">
      {label && <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">{label}</label>}
      <select
        ref={ref}
        className={cn(
          "w-full px-4 py-3.5 bg-transparent border border-white/[0.08] text-white text-sm appearance-none cursor-pointer",
          "focus:outline-none focus:border-[var(--gold)]/40 transition-all duration-500",
          className
        )}
        {...props}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-[#111]">{o.label}</option>
        ))}
      </select>
    </div>
  )
);
Select.displayName = "Select";
