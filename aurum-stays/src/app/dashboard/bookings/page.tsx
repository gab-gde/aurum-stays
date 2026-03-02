import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { formatDate, formatPrice } from "@/lib/utils";

const statusVariant: Record<string, "gold" | "success" | "warning" | "danger" | "default"> = {
  PENDING: "warning", CONFIRMED: "success", CANCELLED: "danger", COMPLETED: "gold",
};

export default async function BookingsPage() {
  const bookings = await prisma.booking.findMany({
    include: { property: { select: { title: true, images: true, location: true } } },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <Container>
          <h1 className="font-display text-3xl font-bold text-white mb-8">My Bookings</h1>
          {bookings.length === 0 ? (
            <p className="text-gray-500">No bookings yet.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map(b => (
                <div key={b.id} className="luxury-card p-5 flex items-center gap-5">
                  <img src={b.property.images?.[0]} alt="" className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold">{b.property.title}</h3>
                    <p className="text-gray-500 text-sm">{b.property.location}</p>
                    <p className="text-gray-400 text-xs mt-1">{formatDate(b.checkIn)} &#8594; {formatDate(b.checkOut)}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <Badge variant={statusVariant[b.status] || "default"}>{b.status}</Badge>
                    <p className="text-[#D4A843] font-display font-bold mt-1">{formatPrice(b.totalPrice)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
