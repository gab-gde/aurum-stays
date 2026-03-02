import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminStats } from "@/components/admin/AdminStats";
import { formatPrice } from "@/lib/utils";

export default async function AdminPage() {
  const [properties, bookings, users] = await Promise.all([
    prisma.property.count(),
    prisma.booking.findMany(),
    prisma.user.count(),
  ]);
  const revenue = bookings.reduce((sum, b) => sum + b.totalPrice, 0);

  return (
    <AdminLayout>
      <div className="mb-12">
        <p className="text-[var(--gold)] text-[10px] tracking-[0.4em] uppercase font-medium mb-3">Overview</p>
        <h1 className="font-display text-3xl text-white font-light">Admin <em className="text-[var(--gold)]">Dashboard</em></h1>
      </div>
      <AdminStats stats={[
        { label: "Properties", value: properties, icon: "Building2" },
        { label: "Bookings", value: bookings.length, icon: "CalendarCheck" },
        { label: "Users", value: users, icon: "Users" },
        { label: "Revenue", value: formatPrice(revenue), icon: "DollarSign" },
      ]} />
    </AdminLayout>
  );
}
