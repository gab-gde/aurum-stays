"use client";
import { useState, useEffect, useRef } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return progress;
}

export function useSectionProgress(threshold = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const h = window.innerHeight;
      // 0 when top of section hits bottom of viewport
      // 1 when bottom of section hits top of viewport
      const total = rect.height + h;
      const current = h - rect.top;
      setProgress(Math.max(0, Math.min(1, current / total)));
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return { ref, progress };
}
