"use client";
import { useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

const icons = { success: CheckCircle, error: AlertCircle, info: Info };
const styles = {
  success: "border-green-500/20 text-green-400",
  error: "border-red-500/20 text-red-400",
  info: "border-white/10 text-white/60",
};

export function Toast({ message, type = "info", onClose }: {
  message: string; type?: "success" | "error" | "info"; onClose: () => void;
}) {
  useEffect(() => { const t = setTimeout(onClose, 5000); return () => clearTimeout(t); }, [onClose]);
  const Icon = icons[type];
  return (
    <div className={`fixed bottom-8 right-8 z-50 bg-[#111] border ${styles[type]} px-5 py-4 flex items-center gap-3 animate-slide-up max-w-sm`}>
      <Icon className="w-4 h-4 flex-shrink-0" />
      <p className="text-sm">{message}</p>
      <button onClick={onClose} className="ml-auto text-white/20 hover:text-white transition-colors">
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
