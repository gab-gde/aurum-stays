import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Badge } from "@/components/ui/Badge";
import { formatDate, formatPrice } from "@/lib/utils";

export default async function AdminBookingsPage() {
  const bookings = await prisma.booking.findMany({
    include: { user: { select: { name: true, email: true } }, property: { select: { title: true } } },
    orderBy: { createdAt: "desc" },
  });

  const statusVariant: Record<string, "gold" | "success" | "warning" | "danger" | "default"> = {
    PENDING: "warning", CONFIRMED: "success", CANCELLED: "danger", COMPLETED: "gold",
  };

  return (
    <AdminLayout>
      <h1 className="font-display text-3xl font-bold text-white mb-8">Bookings</h1>
      <div className="overflow-x-auto rounded-2xl border border-white/5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 text-left text-gray-500">
              <th className="p-4">Guest</th><th className="p-4">Property</th>
              <th className="p-4">Dates</th><th className="p-4">Total</th><th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id} className="border-b border-white/5 hover:bg-white/5 transition">
                <td className="p-4">
                  <p className="text-white">{b.user.name}</p>
                  <p className="text-gray-600 text-xs">{b.user.email}</p>
                </td>
                <td className="p-4 text-gray-400">{b.property.title}</td>
                <td className="p-4 text-gray-400 text-xs">{formatDate(b.checkIn)} &#8594; {formatDate(b.checkOut)}</td>
                <td className="p-4 text-[#D4A843]">{formatPrice(b.totalPrice)}</td>
                <td className="p-4"><Badge variant={statusVariant[b.status] || "default"}>{b.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
