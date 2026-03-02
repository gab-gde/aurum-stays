"use client";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Dropdown({ trigger, children, className }: {
  trigger: React.ReactNode; children: React.ReactNode; className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div className={cn("absolute right-0 top-full mt-2 bg-[#111] border border-white/[0.06] py-1 z-50 animate-fade-in min-w-[200px]", className)}>
          {children}
        </div>
      )}
    </div>
  );
}
