import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("border border-white/[0.04] bg-[#111] p-6", className)}>{children}</div>;
}
