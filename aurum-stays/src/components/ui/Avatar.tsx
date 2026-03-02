import { cn, getInitials } from "@/lib/utils";

export function Avatar({ name, src, size = "md", className }: {
  name: string; src?: string | null; size?: "sm" | "md" | "lg"; className?: string;
}) {
  const sizes = { sm: "w-8 h-8 text-xs", md: "w-10 h-10 text-sm", lg: "w-14 h-14 text-base" };
  if (src) {
    return <img src={src} alt={name} className={cn("rounded-full object-cover", sizes[size], className)} />;
  }
  return (
    <div className={cn("rounded-full bg-gradient-to-br from-[#D4A843] to-[#B8922F] flex items-center justify-center text-[#111217] font-bold", sizes[size], className)}>
      {getInitials(name)}
    </div>
  );
}
