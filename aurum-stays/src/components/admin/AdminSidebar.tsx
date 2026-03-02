"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Building2, CalendarCheck, Users, ArrowLeft } from "lucide-react";

const iconMap: Record<string, any> = { LayoutDashboard, Building2, CalendarCheck, Users };

const nav = [
  { href: "/admin", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/admin/properties", label: "Properties", icon: "Building2" },
  { href: "/admin/bookings", label: "Bookings", icon: "CalendarCheck" },
  { href: "/admin/users", label: "Users", icon: "Users" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-white/[0.04] min-h-screen pt-8 pb-12 flex flex-col bg-[#0A0A0A]">
      <div className="px-6 mb-12">
        <Link href="/" className="font-display text-lg text-white tracking-[0.2em] uppercase font-light">Aurum</Link>
        <p className="text-white/15 text-[10px] tracking-[0.2em] uppercase mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {nav.map(item => {
          const Icon = iconMap[item.icon] || LayoutDashboard;
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}
              className={`flex items-center gap-3 px-4 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                active ? 'text-[var(--gold)] bg-[var(--gold)]/5 border-l-2 border-[var(--gold)]' : 'text-white/30 hover:text-white/60 hover:bg-white/[0.02] border-l-2 border-transparent'
              }`}>
              <Icon className="w-4 h-4" strokeWidth={1} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 mt-auto">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 text-xs text-white/20 hover:text-white/50 transition-colors tracking-[0.15em] uppercase">
          <ArrowLeft className="w-4 h-4" strokeWidth={1} /> Back to Site
        </Link>
      </div>
    </aside>
  );
}
