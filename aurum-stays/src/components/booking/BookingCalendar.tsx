"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function BookingCalendar({ onSelect, bookedDates = [] }: {
  onSelect: (date: string) => void; bookedDates?: string[];
}) {
  const [current, setCurrent] = useState(new Date());
  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: (number | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const monthName = current.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  function isBooked(day: number) {
    const d = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return bookedDates.includes(d);
  }

  function isPast(day: number) {
    return new Date(year, month, day) < new Date(new Date().toDateString());
  }

  return (
    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => setCurrent(new Date(year, month - 1))} className="text-gray-400 hover:text-[#D4A843] transition-colors p-1">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-white font-medium text-sm">{monthName}</span>
        <button onClick={() => setCurrent(new Date(year, month + 1))} className="text-gray-400 hover:text-[#D4A843] transition-colors p-1">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-600 mb-2">
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => <span key={d}>{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => day === null ? <div key={`e${i}`} /> : (
          <button key={day} disabled={isBooked(day) || isPast(day)}
            onClick={() => {
              const d = `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
              onSelect(d);
            }}
            className={cn(
              "h-9 rounded-lg text-sm transition-all duration-200",
              isBooked(day) ? "bg-red-500/10 text-red-400/60 cursor-not-allowed line-through" :
              isPast(day) ? "text-gray-700 cursor-not-allowed" :
              "text-gray-300 hover:bg-[#D4A843]/20 hover:text-[#D4A843]"
            )}>
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
