import { Card } from "@/components/ui/Card";

type StatCard = { label: string; value: string; change: string; icon: string };

export function AdminStats({ stats }: { stats: StatCard[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s) => (
        <Card key={s.label} className="!p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm">{s.label}</p>
              <p className="text-2xl font-bold text-white mt-1">{s.value}</p>
              <p className="text-emerald-400 text-xs mt-1">{s.change}</p>
            </div>
            <span className="text-2xl">{s.icon}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
