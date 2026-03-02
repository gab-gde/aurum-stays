"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Building2, CalendarCheck, Users, ArrowLeft } from "lucide-react";

const ICONS: Record<string, any> = { LayoutDashboard, Building2, CalendarCheck, Users };

const NAV = [
  { href: "/admin", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/admin/properties", label: "Properties", icon: "Building2" },
  { href: "/admin/bookings", label: "Bookings", icon: "CalendarCheck" },
  { href: "/admin/users", label: "Users", icon: "Users" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#16171F] border-r border-white/[0.04] p-6 flex flex-col">
      <Link href="/" className="font-display text-xl font-bold gold-text tracking-[0.15em] mb-10">AURUM</Link>
      <nav className="flex-1 space-y-1">
        {NAV.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <Link key={item.href} href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-300",
                pathname === item.href
                  ? "bg-[#D4A843]/10 text-[#D4A843] font-medium"
                  : "text-gray-500 hover:text-white hover:bg-white/5"
              )}>
              <Icon className="w-4 h-4" strokeWidth={1.5} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <Link href="/" className="flex items-center gap-2 text-gray-600 text-sm hover:text-[#D4A843] transition-colors mt-auto">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to site
      </Link>
    </aside>
  );
}
