import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({ value, max = 5, size = "sm" }: {
  value: number; max?: number; size?: "sm" | "md";
}) {
  const sizes = { sm: "w-3.5 h-3.5", md: "w-5 h-5" };
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <Star key={i} className={cn(sizes[size], i < Math.round(value) ? "text-[#D4A843] fill-[#D4A843]" : "text-gray-700")} />
      ))}
      <span className="text-gray-500 text-xs ml-1.5 font-medium">{value.toFixed(1)}</span>
    </div>
  );
}
