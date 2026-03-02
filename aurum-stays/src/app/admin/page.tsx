import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminStats } from "@/components/admin/AdminStats";

export default async function AdminPage() {
  const [properties, bookings, users, revenue] = await Promise.all([
    prisma.property.count(),
    prisma.booking.count(),
    prisma.user.count(),
    prisma.booking.aggregate({ _sum: { totalPrice: true } }),
  ]);

  const stats = [
    { label: "Properties", value: properties.toString(), change: "+2 this month", icon: "\ud83c\udfe0" },
    { label: "Bookings", value: bookings.toString(), change: "+12 this month", icon: "\ud83d\udcc5" },
    { label: "Users", value: users.toString(), change: "+8 this month", icon: "\ud83d\udc64" },
    { label: "Revenue", value: `\u20ac${(revenue._sum.totalPrice || 0).toLocaleString()}`, change: "+15% vs last month", icon: "\ud83d\udcb0" },
  ];

  return (
    <AdminLayout>
      <h1 className="font-display text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
      <AdminStats stats={stats} />
    </AdminLayout>
  );
}
