import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { formatDate } from "@/lib/utils";

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <AdminLayout>
      <h1 className="font-display text-3xl font-bold text-white mb-8">Users</h1>
      <div className="overflow-x-auto rounded-2xl border border-white/5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 text-left text-gray-500">
              <th className="p-4">User</th><th className="p-4">Email</th>
              <th className="p-4">Role</th><th className="p-4">Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-b border-white/5 hover:bg-white/5 transition">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar name={u.name} src={u.avatar} size="sm" />
                    <span className="text-white">{u.name}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-400">{u.email}</td>
                <td className="p-4"><Badge variant={u.role === "ADMIN" ? "gold" : "default"}>{u.role}</Badge></td>
                <td className="p-4 text-gray-500">{formatDate(u.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
