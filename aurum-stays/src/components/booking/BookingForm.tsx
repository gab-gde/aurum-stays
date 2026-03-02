"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { api } from "@/lib/api";
import { formatPrice } from "@/lib/utils";
import { CalendarCheck, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function BookingForm({ propertyId, price }: { propertyId: string; price: number }) {
  const { user } = useAuth();
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const nights = checkIn && checkOut ? Math.max(0, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000)) : 0;
  const total = nights * price;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) return router.push("/login");
    setLoading(true); setError("");
    try {
      await api.bookings.create({ propertyId, checkIn, checkOut, guests });
      router.push("/dashboard/bookings");
    } catch (err: any) { setError(err.message); }
    finally { setLoading(false); }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <label className="text-[10px] text-white/30 uppercase tracking-[0.15em] font-medium">Check In</label>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-3 py-3 bg-transparent border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[var(--gold)]/40 transition-all duration-500" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] text-white/30 uppercase tracking-[0.15em] font-medium">Check Out</label>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required
            min={checkIn || new Date().toISOString().split("T")[0]}
            className="w-full px-3 py-3 bg-transparent border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[var(--gold)]/40 transition-all duration-500" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] text-white/30 uppercase tracking-[0.15em] font-medium">Guests</label>
        <select value={guests} onChange={(e) => setGuests(+e.target.value)}
          className="w-full px-3 py-3 bg-transparent border border-white/[0.08] text-white text-sm appearance-none focus:outline-none focus:border-[var(--gold)]/40 transition-all duration-500">
          {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n} className="bg-[#111]">{n} guest{n > 1 ? 's' : ''}</option>)}
        </select>
      </div>

      {nights > 0 && (
        <div className="space-y-3 py-6 border-t border-b border-white/[0.04]">
          <div className="flex justify-between text-sm">
            <span className="text-white/30">{formatPrice(price)} × {nights} night{nights > 1 ? 's' : ''}</span>
            <span className="text-white/60">{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/30">Service fee</span>
            <span className="text-white/60">{formatPrice(Math.round(total * 0.1))}</span>
          </div>
          <div className="flex justify-between pt-3 border-t border-white/[0.04]">
            <span className="text-white text-sm font-medium">Total</span>
            <span className="font-display text-xl text-[var(--gold)]">{formatPrice(Math.round(total * 1.1))}</span>
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle className="w-3.5 h-3.5" /> {error}
        </div>
      )}

      {user ? (
        <button type="submit" disabled={loading || nights === 0} className="btn-gold-filled w-full justify-center">
          <CalendarCheck className="w-4 h-4" />
          <span>{loading ? "Booking..." : "Reserve Now"}</span>
        </button>
      ) : (
        <Link href="/login" className="btn-gold w-full justify-center">
          <span>Sign In to Book</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </form>
  );
}
