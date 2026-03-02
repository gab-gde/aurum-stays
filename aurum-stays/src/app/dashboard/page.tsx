import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

export default function DashboardPage() {
  const cards = [
    { href: "/dashboard/bookings", icon: "\ud83d\udcc5", title: "My Bookings", desc: "View and manage your reservations" },
    { href: "/dashboard/wishlist", icon: "\u2764\ufe0f", title: "Wishlist", desc: "Properties you\u2019ve saved" },
    { href: "/dashboard/settings", icon: "\u2699\ufe0f", title: "Settings", desc: "Update your profile and preferences" },
    { href: "/properties", icon: "\ud83c\udfe0", title: "Browse", desc: "Discover new luxury properties" },
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <Container className="max-w-4xl">
          <h1 className="font-display text-3xl font-bold text-white mb-8">Dashboard</h1>
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map(c => (
              <Link key={c.href} href={c.href}>
                <Card className="!p-6 h-full hover:border-[#D4A843]/40 transition-all">
                  <span className="text-3xl mb-3 block">{c.icon}</span>
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
