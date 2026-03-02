"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function BookingCalendar({ onSelect, blocked = [] }: {
  onSelect: (date: Date) => void; blocked?: string[];
}) {
  const [current, setCurrent] = useState(new Date());
  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const days = Array.from({ length: 42 }, (_, i) => {
    const day = i - firstDay + 1;
    if (day < 1 || day > daysInMonth) return null;
    return new Date(year, month, day);
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <button type="button" onClick={() => setCurrent(new Date(year, month - 1))}
          className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all">
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
        <span className="text-white text-sm tracking-wider">
          {current.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </span>
        <button type="button" onClick={() => setCurrent(new Date(year, month + 1))}
          className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all">
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => (
          <div key={d} className="text-white/20 text-[10px] uppercase tracking-wider py-2">{d}</div>
        ))}
        {days.map((d, i) => {
          if (!d) return <div key={i} />;
          const past = d < today && d.toDateString() !== today.toDateString();
          const isBlocked = blocked.includes(d.toISOString().split("T")[0]);
          return (
            <button key={i} type="button" disabled={past || isBlocked}
              onClick={() => onSelect(d)}
              className={`py-2 text-sm transition-all duration-300 ${
                past || isBlocked ? 'text-white/10 cursor-not-allowed' :
                'text-white/50 hover:text-[var(--gold)] hover:bg-[var(--gold)]/5'
              }`}>
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
