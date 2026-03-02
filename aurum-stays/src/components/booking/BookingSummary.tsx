import { formatPrice } from "@/lib/utils";

export function BookingSummary({ booking }: { booking: any }) {
  return (
    <div className="border border-white/[0.04] p-6">
      <h3 className="font-display text-lg text-white font-light mb-4">Booking Summary</h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-white/30">Check-in</span>
          <span className="text-white/70">{new Date(booking.checkIn).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/30">Check-out</span>
          <span className="text-white/70">{new Date(booking.checkOut).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/30">Guests</span>
          <span className="text-white/70">{booking.guests}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/30">Status</span>
          <span className={`uppercase tracking-wider text-[10px] px-2 py-1 ${
            booking.status === "CONFIRMED" ? "text-green-400 bg-green-400/10" :
            booking.status === "PENDING" ? "text-yellow-400 bg-yellow-400/10" :
            "text-red-400 bg-red-400/10"
          }`}>{booking.status}</span>
        </div>
        <div className="flex justify-between pt-3 border-t border-white/[0.04]">
          <span className="text-white font-medium">Total</span>
          <span className="font-display text-lg text-[var(--gold)]">{formatPrice(booking.totalPrice)}</span>
        </div>
      </div>
    </div>
  );
}
