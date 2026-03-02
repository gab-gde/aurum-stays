"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "gold" | "outline" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  gold: "bg-gradient-to-r from-[#D4A843] to-[#B8922F] text-[#111217] font-semibold hover:shadow-[0_0_30px_rgba(212,168,67,0.3)]",
  outline: "border border-[#D4A843]/40 text-[#D4A843] hover:bg-[#D4A843]/10",
  ghost: "text-gray-400 hover:text-white hover:bg-white/5",
  danger: "bg-red-600/10 text-red-400 border border-red-600/20 hover:bg-red-600/20",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", loading, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {loading && <span className="w-4 h-4 border-2 border-current/20 border-t-current rounded-full animate-spin" />}
      {children}
    </button>
  )
);
Button.displayName = "Button";
