import { cn, getInitials } from "@/lib/utils";

export function Avatar({ name, src, size = "md", className }: {
  name: string; src?: string | null; size?: "sm" | "md" | "lg"; className?: string;
}) {
  const sizes = { sm: "w-8 h-8 text-[10px]", md: "w-10 h-10 text-xs", lg: "w-14 h-14 text-sm" };
  if (src) {
    return <img src={src} alt={name} className={cn("rounded-full object-cover ring-2 ring-white/5", sizes[size], className)} />;
  }
  return (
    <div className={cn(
      "rounded-full bg-gradient-to-br from-[#D4A843] to-[#B8922F] flex items-center justify-center text-[#111217] font-bold tracking-tight ring-2 ring-[#D4A843]/20",
      sizes[size], className
    )}>
      {getInitials(name)}
    </div>
  );
}
