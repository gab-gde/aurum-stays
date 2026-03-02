"use client";
import { useScrollReveal, useCountUp } from "@/lib/hooks";
import { Building2, CalendarCheck, Globe, Headphones } from "lucide-react";

function StatItem({ icon: Icon, value, label, suffix = "" }: {
  icon: any; value: number; label: string; suffix?: string;
}) {
  const { ref, visible } = useScrollReveal(0.3);
  const count = useCountUp(value, 2500, 0, visible);
  return (
    <div ref={ref} className={`text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <Icon className="w-5 h-5 text-[var(--gold)]/40 mx-auto mb-6" strokeWidth={1} />
      <p className="font-display text-5xl md:text-6xl font-light text-white mb-3">{count}{suffix}</p>
      <p className="text-white/25 text-[10px] uppercase tracking-[0.3em]">{label}</p>
    </div>
  );
}

export function StatsSection({ totalProperties, totalBookings }: {
  totalProperties: number; totalBookings: number;
}) {
  return (
    <section className="py-32 border-y border-white/[0.04]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <StatItem icon={Building2} value={totalProperties} suffix="+" label="Luxury Properties" />
          <StatItem icon={CalendarCheck} value={totalBookings} suffix="+" label="Happy Stays" />
          <StatItem icon={Globe} value={12} label="Countries" />
          <StatItem icon={Headphones} value={24} suffix="/7" label="Concierge" />
        </div>
      </div>
    </section>
  );
}
