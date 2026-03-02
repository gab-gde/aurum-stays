import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default async function AdminPropertiesPage() {
  const properties = await prisma.property.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <AdminLayout>
      <div className="mb-12">
        <p className="text-[var(--gold)] text-[10px] tracking-[0.4em] uppercase font-medium mb-3">Management</p>
        <h1 className="font-display text-3xl text-white font-light"><em className="text-[var(--gold)]">Properties</em></h1>
      </div>
      <div className="border border-white/[0.04] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.04]">
              {["Property","Type","Price","Rating","Status"].map(h => (
                <th key={h} className="text-left px-6 py-4 text-[10px] text-white/25 uppercase tracking-[0.2em] font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {properties.map(p => (
              <tr key={p.id} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                <td className="px-6 py-4">
                  <Link href={`/properties/${p.id}`} className="text-white text-sm hover:text-[var(--gold)] transition-colors">{p.title}</Link>
                  <p className="text-white/20 text-xs mt-0.5">{p.location}</p>
                </td>
                <td className="px-6 py-4 text-white/40 text-xs uppercase tracking-wider">{p.type}</td>
                <td className="px-6 py-4 font-display text-[var(--gold)]">{formatPrice(p.price)}</td>
                <td className="px-6 py-4 text-white/40 text-sm">{p.rating?.toFixed(1) || "—"}</td>
                <td className="px-6 py-4"><Badge variant={p.featured ? "gold" : "default"}>{p.featured ? "Featured" : "Standard"}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
