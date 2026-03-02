"use client";
import { useScrollReveal } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function ImageReveal({ src, alt, className }: {
  src: string; alt: string; className?: string;
}) {
  const { ref, visible } = useScrollReveal(0.2);
  return (
    <div ref={ref} className={cn("img-reveal overflow-hidden", visible && "visible", className)}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
