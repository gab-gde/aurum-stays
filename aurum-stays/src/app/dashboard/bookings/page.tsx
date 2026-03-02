"use client";
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { api } from "@/lib/api";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.bookings.mine().then(setBookings).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const statusVariant = (s: string) => s === "CONFIRMED" ? "success" : s === "PENDING" ? "warning" : "danger";

  return (
    <>
      <Header />
      <main className="pt-40 pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="text-[var(--gold)] text-[11px] tracking-[0.4em] uppercase font-medium mb-4">Dashboard</p>
            <h1 className="font-display text-4xl md:text-5xl font-light">My <em className="text-[var(--gold)]">Bookings</em></h1>
          </div>

          {loading ? (
            <div className="space-y-4">{[1,2,3].map(i => <div key={i} className="h-24 bg-white/[0.02] animate-pulse" />)}</div>
          ) : bookings.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-white/20 italic font-light mb-6">No bookings yet.</p>
              <Link href="/properties" className="btn-gold"><span>Explore Properties</span></Link>
            </div>
          ) : (
            <div className="space-y-px">
              {bookings.map((b) => (
                <div key={b.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-[#111] border border-white/[0.02] hover:border-white/[0.06] transition-all duration-500">
                  <div className="flex items-center gap-5">
                    {b.property?.images?.[0] && (
                      <img src={b.property.images[0]} alt="" className="w-20 h-14 object-cover hidden sm:block" />
                    )}
                    <div>
                      <h3 className="text-white text-sm font-medium">{b.property?.title || "Property"}</h3>
                      <p className="text-white/20 text-xs mt-1">
                        {new Date(b.checkIn).toLocaleDateString()} — {new Date(b.checkOut).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <Badge variant={statusVariant(b.status) as any}>{b.status}</Badge>
                    <span className="font-display text-lg text-[var(--gold)]">{formatPrice(b.totalPrice)}</span>
                    {b.property?.id && (
                      <Link href={`/properties/${b.property.id}`} className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/20 hover:text-[var(--gold)] hover:border-[var(--gold)]/30 transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
