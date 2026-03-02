import { cn } from "@/lib/utils";

export function Rating({ value, max = 5, size = "sm" }: {
  value: number; max?: number; size?: "sm" | "md";
}) {
  const sizes = { sm: "text-sm", md: "text-lg" };
  return (
    <div className={cn("flex items-center gap-0.5", sizes[size])}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < Math.round(value) ? "text-[#D4A843]" : "text-gray-700"}>
          &#9733;
        </span>
      ))}
      <span className="text-gray-500 text-xs ml-1">{value.toFixed(1)}</span>
    </div>
  );
}
