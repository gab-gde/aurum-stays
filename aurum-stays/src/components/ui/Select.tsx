"use client";
import { cn } from "@/lib/utils";
import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, ...props }, ref) => (
    <div className="space-y-1.5">
      {label && <label className="text-sm text-gray-400 font-medium">{label}</label>}
      <select
        ref={ref}
        className={cn(
          "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white",
          "focus:outline-none focus:border-[#D4A843]/50 transition-all appearance-none cursor-pointer",
          className
        )}
        {...props}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-[#16171F]">{o.label}</option>
        ))}
      </select>
    </div>
  )
);
Select.displayName = "Select";
