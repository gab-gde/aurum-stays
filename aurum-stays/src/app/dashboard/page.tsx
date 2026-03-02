"use client";
import { useAuth } from "@/components/providers/AuthProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { CalendarCheck, Heart, Settings, Search, ArrowRight } from "lucide-react";

const cards = [
  { icon: CalendarCheck, title: "My Bookings", desc: "View and manage your reservations", href: "/dashboard/bookings" },
  { icon: Heart, title: "Wishlist", desc: "Properties you have saved", href: "/dashboard/wishlist" },
  { icon: Settings, title: "Settings", desc: "Update your profile and preferences", href: "/dashboard/settings" },
  { icon: Search, title: "Explore", desc: "Discover new luxury properties", href: "/properties" },
];

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <main className="pt-40 pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="text-[var(--gold)] text-[11px] tracking-[0.4em] uppercase font-medium mb-4">Welcome back</p>
            <h1 className="font-display text-4xl md:text-6xl font-light">
              {user?.name?.split(" ")[0] || "Guest"}
            </h1>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.02]">
            {cards.map(c => (
              <Link key={c.href} href={c.href}
                className="group bg-[var(--dark)] p-8 hover:bg-[#111] transition-all duration-700">
                <c.icon className="w-5 h-5 text-[var(--gold)]/30 group-hover:text-[var(--gold)] transition-colors duration-500 mb-6" strokeWidth={1} />
                <h3 className="text-white text-sm font-medium mb-2 group-hover:text-[var(--gold)] transition-colors duration-500">{c.title}</h3>
                <p className="text-white/20 text-xs leading-relaxed mb-6">{c.desc}</p>
                <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-[var(--gold)]/50 transition-all duration-500 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
