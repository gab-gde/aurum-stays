import { Building2, CalendarCheck, Users, DollarSign } from "lucide-react";

const iconMap: Record<string, any> = { Building2, CalendarCheck, Users, DollarSign };

export function AdminStats({ stats }: { stats: { label: string; value: string | number; icon: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.02]">
      {stats.map(s => {
        const Icon = iconMap[s.icon] || Building2;
        return (
          <div key={s.label} className="bg-[#0D0D0D] p-6">
            <Icon className="w-4 h-4 text-[var(--gold)]/30 mb-4" strokeWidth={1} />
            <p className="font-display text-3xl text-white font-light mb-1">{s.value}</p>
            <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">{s.label}</p>
          </div>
        );
      })}
    </div>
  );
}
