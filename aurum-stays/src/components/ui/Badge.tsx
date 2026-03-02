import { cn } from "@/lib/utils";

type Variant = "gold" | "success" | "warning" | "danger" | "default";

const variants: Record<Variant, string> = {
  gold: "bg-[#D4A843]/10 text-[#D4A843] border-[#D4A843]/20",
  success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  danger: "bg-red-500/10 text-red-400 border-red-500/20",
  default: "bg-white/5 text-gray-400 border-white/10",
};

export function Badge({ children, variant = "default", className }: {
  children: React.ReactNode; variant?: Variant; className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border", variants[variant], className)}>
      {children}
    </span>
  );
}
