import { cn } from "@/lib/utils";

export function Avatar({ name, size = "md", className }: { name: string; size?: "sm" | "md" | "lg"; className?: string }) {
  const initials = name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  const sizes = { sm: "w-8 h-8 text-[10px]", md: "w-10 h-10 text-xs", lg: "w-14 h-14 text-sm" };
  return (
    <div className={cn("rounded-full border border-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] font-semibold tracking-wider", sizes[size], className)}>
      {initials}
    </div>
  );
}
