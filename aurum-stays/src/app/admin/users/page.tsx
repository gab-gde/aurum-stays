import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Badge } from "@/components/ui/Badge";

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    include: { _count: { select: { bookings: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <AdminLayout>
      <div className="mb-12">
        <p className="text-[var(--gold)] text-[10px] tracking-[0.4em] uppercase font-medium mb-3">Management</p>
        <h1 className="font-display text-3xl text-white font-light"><em className="text-[var(--gold)]">Users</em></h1>
      </div>
      <div className="border border-white/[0.04] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.04]">
              {["Name","Email","Role","Bookings","Joined"].map(h => (
                <th key={h} className="text-left px-6 py-4 text-[10px] text-white/25 uppercase tracking-[0.2em] font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                <td className="px-6 py-4 text-white text-sm">{u.name}</td>
                <td className="px-6 py-4 text-white/40 text-sm">{u.email}</td>
                <td className="px-6 py-4"><Badge variant={u.role === "ADMIN" ? "gold" : "default"}>{u.role}</Badge></td>
                <td className="px-6 py-4 text-white/40 text-sm">{u._count.bookings}</td>
                <td className="px-6 py-4 text-white/25 text-xs">{new Date(u.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
