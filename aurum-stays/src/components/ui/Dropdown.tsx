"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Dropdown({ trigger, children, className }: {
  trigger: React.ReactNode; children: React.ReactNode; className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">{trigger}</div>
      {open && (
        <div className={cn(
          "absolute right-0 top-full mt-2 min-w-[200px] bg-[#16171F] border border-white/10 rounded-xl shadow-2xl py-2 z-50 animate-fade-in",
          className
        )} onClick={() => setOpen(false)}>
          {children}
        </div>
      )}
    </div>
  );
}
