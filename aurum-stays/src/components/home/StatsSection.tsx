"use client";
import { useScrollReveal, useCountUp } from "@/lib/hooks";
import { Container } from "@/components/layout/Container";
import { Building2, CalendarCheck, Globe, Headphones } from "lucide-react";

function StatItem({ icon: Icon, value, label, suffix = "" }: {
  icon: any; value: number; label: string; suffix?: string;
}) {
  const { ref, visible } = useScrollReveal(0.3);
  const count = useCountUp(value, 2000, 0, visible);
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <Icon className="w-5 h-5 text-[#D4A843]/60 mx-auto mb-4" strokeWidth={1.5} />
      <p className="text-3xl md:text-4xl font-display font-bold gold-text">{count}{suffix}</p>
      <p className="text-gray-500 mt-2 text-[11px] uppercase tracking-[0.25em]">{label}</p>
    </div>
  );
}

export function StatsSection({ totalProperties, totalBookings }: {
  totalProperties: number; totalBookings: number;
}) {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 border-y border-white/[0.04]" />
      <Container className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem icon={Building2} value={totalProperties} suffix="+" label="Luxury Properties" />
          <StatItem icon={CalendarCheck} value={totalBookings} suffix="+" label="Happy Stays" />
          <StatItem icon={Globe} value={12} label="Countries" />
          <StatItem icon={Headphones} value={24} suffix="/7" label="Concierge" />
        </div>
      </Container>
    </section>
  );
}
