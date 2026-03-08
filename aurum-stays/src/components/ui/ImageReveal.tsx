"use client";
import { useScrollReveal } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function ImageReveal({ src, alt, className, direction = "up" }: {
  src: string; alt: string; className?: string; direction?: "up" | "right";
}) {
  const { ref, visible } = useScrollReveal(0.15);
  const cls = direction === "right" ? "img-reveal-right" : "img-reveal";
  return (
    <div ref={ref} className={cn(cls, "overflow-hidden", visible && "visible", className)}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
