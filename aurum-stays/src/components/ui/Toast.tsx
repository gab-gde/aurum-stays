"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ToastType = "success" | "error" | "info";

const styles: Record<ToastType, string> = {
  success: "border-emerald-500/30 bg-emerald-500/10",
  error: "border-red-500/30 bg-red-500/10",
  info: "border-[#D4A843]/30 bg-[#D4A843]/10",
};

export function Toast({ message, type = "info", onDismiss }: {
  message: string; type?: ToastType; onDismiss: () => void;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => { setVisible(false); setTimeout(onDismiss, 300); }, 4000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl border backdrop-blur-xl transition-all duration-300",
      styles[type], visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    )}>
      <p className="text-sm text-white">{message}</p>
    </div>
  );
}
