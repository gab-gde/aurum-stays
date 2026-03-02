"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ADMIN_NAV } from "@/lib/constants";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#16171F] border-r border-white/5 p-6 flex flex-col">
      <Link href="/" className="font-display text-xl font-bold gold-text tracking-wider mb-10">AURUM</Link>
      <nav className="flex-1 space-y-2">
        {ADMIN_NAV.map((item) => (
          <Link key={item.href} href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all",
              pathname === item.href
                ? "bg-[#D4A843]/10 text-[#D4A843] font-medium"
                : "text-gray-500 hover:text-white hover:bg-white/5"
            )}>
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/" className="text-gray-600 text-sm hover:text-[#D4A843] transition mt-auto">
        &#8592; Back to site
      </Link>
    </aside>
  );
}
