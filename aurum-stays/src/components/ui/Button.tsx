"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";

type Variant = "gold" | "outline" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  gold: "btn-gold",
  outline: "border border-[#D4A843]/40 text-[#D4A843] hover:bg-[#D4A843]/10 px-7 py-3.5 rounded-xl transition-all duration-300",
  ghost: "text-gray-400 hover:text-white hover:bg-white/5 px-7 py-3.5 rounded-xl transition-all duration-300",
  danger: "bg-red-600/10 text-red-400 border border-red-600/20 hover:bg-red-600/20 px-7 py-3.5 rounded-xl transition-all duration-300",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", loading, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
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
