import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { CalendarCheck, Heart, Settings, Search } from "lucide-react";

const cards = [
  { href: "/dashboard/bookings", icon: CalendarCheck, title: "My Bookings", desc: "View and manage your reservations" },
  { href: "/dashboard/wishlist", icon: Heart, title: "Wishlist", desc: "Properties you\u2019ve saved" },
  { href: "/dashboard/settings", icon: Settings, title: "Settings", desc: "Update your profile and preferences" },
  { href: "/properties", icon: Search, title: "Browse", desc: "Discover new luxury properties" },
];

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <Container className="max-w-4xl">
          <h1 className="font-display text-3xl font-bold text-white mb-8">Dashboard</h1>
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map(c => (
              <Link key={c.href} href={c.href}>
                <Card className="!p-6 h-full group">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A843]/10 flex items-center justify-center mb-4 group-hover:bg-[#D4A843]/20 transition-colors">
                    <c.icon className="w-5 h-5 text-[#D4A843]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{c.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{c.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
