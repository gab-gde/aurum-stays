"use client";
import { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Check, X, Loader2, Clock, CheckCircle, XCircle, Star } from "lucide-react";

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/bookings").then(r => r.json()).then(setBookings).catch(() => {}).finally(() => setLoading(false));
  }, []);

  async function updateStatus(id: string, status: string) {
    setActionLoading(id);
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
      }
    } catch {}
    setActionLoading(null);
  }

  const statusVariant = (s: string) => s === "CONFIRMED" ? "success" : s === "PENDING" ? "warning" : s === "COMPLETED" ? "gold" : "danger";
  const statusIcon = (s: string) => {
    if (s === "PENDING") return <Clock className="w-3 h-3" />;
    if (s === "CONFIRMED") return <CheckCircle className="w-3 h-3" />;
    if (s === "COMPLETED") return <Star className="w-3 h-3" />;
    return <XCircle className="w-3 h-3" />;
  };

  return (
    <AdminLayout>
      <div className="mb-12">
        <p className="text-[var(--gold)] text-[10px] tracking-[0.4em] uppercase font-medium mb-3">Management</p>
        <h1 className="font-display text-3xl text-white font-light"><em className="text-[var(--gold)]">Bookings</em></h1>
      </div>

      {loading ? (
        <div className="flex items-center gap-3 text-white/20 text-sm">
          <Loader2 className="w-4 h-4 animate-spin" /> Loading bookings...
        </div>
      ) : bookings.length === 0 ? (
        <p className="text-white/20 font-display italic">No bookings yet.</p>
      ) : (
        <div className="border border-white/[0.04] overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-white/[0.04]">
                {["Guest","Property","Dates","Guests","Status","Total","Actions"].map(h => (
                  <th key={h} className="text-left px-6 py-4 text-[10px] text-white/25 uppercase tracking-[0.2em] font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-white text-sm">{b.user?.name || "—"}</p>
                    <p className="text-white/20 text-xs">{b.user?.email}</p>
                  </td>
                  <td className="px-6 py-4 text-white/40 text-sm">{b.property?.title || "—"}</td>
                  <td className="px-6 py-4 text-white/30 text-xs">
                    {new Date(b.checkIn).toLocaleDateString()} — {new Date(b.checkOut).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-white/40 text-sm">{b.guests}</td>
                  <td className="px-6 py-4">
                    <Badge variant={statusVariant(b.status) as any}>
                      <span className="flex items-center gap-1.5">{statusIcon(b.status)} {b.status}</span>
                    </Badge>
                  </td>
                  <td className="px-6 py-4 font-display text-[var(--gold)]">{formatPrice(b.totalPrice)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {actionLoading === b.id ? (
                        <Loader2 className="w-4 h-4 animate-spin text-white/20" />
                      ) : (
                        <>
                          {b.status === "PENDING" && (
                            <>
                              <button onClick={() => updateStatus(b.id, "CONFIRMED")}
                                className="w-8 h-8 border border-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500/10 transition-all"
                                title="Confirm">
                                <Check className="w-3.5 h-3.5" />
                              </button>
                              <button onClick={() => updateStatus(b.id, "CANCELLED")}
                                className="w-8 h-8 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/10 transition-all"
                                title="Cancel">
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </>
                          )}
                          {b.status === "CONFIRMED" && (
                            <>
                              <button onClick={() => updateStatus(b.id, "COMPLETED")}
                                className="w-8 h-8 border border-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all"
                                title="Mark Completed">
                                <Star className="w-3.5 h-3.5" />
                              </button>
                              <button onClick={() => updateStatus(b.id, "CANCELLED")}
                                className="w-8 h-8 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/10 transition-all"
                                title="Cancel">
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </>
                          )}
                          {(b.status === "CANCELLED" || b.status === "COMPLETED") && (
                            <span className="text-white/10 text-[10px] tracking-wider uppercase">No action</span>
                          )}
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
