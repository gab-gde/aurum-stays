import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export default async function AdminBookingsPage() {
  const bookings = await prisma.booking.findMany({
    include: { user: true, property: true },
    orderBy: { createdAt: "desc" },
  });

  const statusVariant = (s: string) => s === "CONFIRMED" ? "success" : s === "PENDING" ? "warning" : "danger";

  return (
    <AdminLayout>
      <div className="mb-12">
        <p className="text-[var(--gold)] text-[10px] tracking-[0.4em] uppercase font-medium mb-3">Management</p>
        <h1 className="font-display text-3xl text-white font-light"><em className="text-[var(--gold)]">Bookings</em></h1>
      </div>
      <div className="border border-white/[0.04] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.04]">
              {["Guest","Property","Dates","Status","Total"].map(h => (
                <th key={h} className="text-left px-6 py-4 text-[10px] text-white/25 uppercase tracking-[0.2em] font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                <td className="px-6 py-4 text-white text-sm">{b.user.name}</td>
                <td className="px-6 py-4 text-white/40 text-sm">{b.property.title}</td>
                <td className="px-6 py-4 text-white/30 text-xs">
                  {new Date(b.checkIn).toLocaleDateString()} — {new Date(b.checkOut).toLocaleDateString()}
                </td>
                <td className="px-6 py-4"><Badge variant={statusVariant(b.status) as any}>{b.status}</Badge></td>
                <td className="px-6 py-4 font-display text-[var(--gold)]">{formatPrice(b.totalPrice)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
