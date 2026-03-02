"use client";
import { useScrollReveal } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "scale";

const classes: Record<Direction, string> = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export function ScrollReveal({ children, direction = "up", delay = 0, className }: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={cn(classes[direction], visible && "visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
