import { AdminSidebar } from "./AdminSidebar";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[var(--dark)]">
      <AdminSidebar />
      <main className="flex-1 p-8 lg:p-12">{children}</main>
    </div>
  );
}
