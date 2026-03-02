import { Card } from "@/components/ui/Card";
import { Building2, CalendarCheck, Users, TrendingUp } from "lucide-react";

const ICONS: Record<string, any> = {
  Properties: Building2, Bookings: CalendarCheck, Users: Users, Revenue: TrendingUp,
};

type StatCard = { label: string; value: string; change: string };

export function AdminStats({ stats }: { stats: StatCard[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s) => {
        const Icon = ICONS[s.label] || Building2;
        return (
          <Card key={s.label} className="!p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm">{s.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{s.value}</p>
                <p className="text-emerald-400 text-xs mt-1">{s.change}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#D4A843]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#D4A843]" strokeWidth={1.5} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
