import { prisma } from "@/lib/prisma";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminPropertyTable } from "@/components/admin/AdminPropertyTable";

export default async function AdminPropertiesPage() {
  const properties = await prisma.property.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <AdminLayout>
      <h1 className="font-display text-3xl font-bold text-white mb-8">Properties</h1>
      <AdminPropertyTable properties={properties} />
    </AdminLayout>
  );
}
