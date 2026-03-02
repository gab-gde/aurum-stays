import { cn } from "@/lib/utils";

const variants: Record<string, string> = {
  gold: "bg-[var(--gold)]/10 text-[var(--gold)] border-[var(--gold)]/20",
  success: "bg-green-500/10 text-green-400 border-green-500/20",
  warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  danger: "bg-red-500/10 text-red-400 border-red-500/20",
  default: "bg-white/5 text-white/50 border-white/10",
};

export function Badge({ children, variant = "default", className }: {
  children: React.ReactNode; variant?: keyof typeof variants; className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center px-3 py-1 text-[10px] uppercase tracking-[0.15em] border", variants[variant], className)}>
      {children}
    </span>
  );
}
