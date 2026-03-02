import { AdminSidebar } from "./AdminSidebar";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#111217]">
      <AdminSidebar />
      <main className="flex-1 p-8 ml-64">{children}</main>
    </div>
  );
}
