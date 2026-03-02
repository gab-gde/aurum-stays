import { Star } from "lucide-react";

export function Rating({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => (
        <Star key={i} className={`w-3 h-3 ${i < Math.round(value) ? "text-[var(--gold)] fill-[var(--gold)]" : "text-white/10"}`} />
      ))}
    </div>
  );
}
