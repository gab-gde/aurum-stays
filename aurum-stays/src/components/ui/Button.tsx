"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "ghost" | "danger";
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", loading, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-500",
        variant === "gold" && "btn-gold-filled",
        variant === "outline" && "border border-white/10 text-white/60 hover:text-white hover:border-white/30 px-6 py-3.5 text-xs tracking-[0.15em] uppercase",
        variant === "ghost" && "text-white/40 hover:text-white px-4 py-3 text-xs tracking-wider uppercase",
        variant === "danger" && "border border-red-500/20 text-red-400 hover:bg-red-500/10 px-6 py-3.5 text-xs tracking-wider uppercase",
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  )
);
Button.displayName = "Button";
