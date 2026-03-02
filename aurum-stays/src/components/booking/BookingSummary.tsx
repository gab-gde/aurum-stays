import { calculateNights, formatPrice } from "@/lib/utils";
import { CLEANING_FEE, SERVICE_FEE_RATE } from "@/lib/constants";

export function BookingSummary({ pricePerNight, checkIn, checkOut }: {
  pricePerNight: number; checkIn: string; checkOut: string;
}) {
  const nights = calculateNights(checkIn, checkOut);
  if (nights <= 0) return null;
  const subtotal = pricePerNight * nights;
  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);
  const total = subtotal + CLEANING_FEE + serviceFee;

  return (
    <div className="space-y-3 pt-4 border-t border-white/10 text-sm">
      <div className="flex justify-between text-gray-400">
        <span>{formatPrice(pricePerNight)} x {nights} nights</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      <div className="flex justify-between text-gray-400">
        <span>Cleaning fee</span>
        <span>{formatPrice(CLEANING_FEE)}</span>
      </div>
      <div className="flex justify-between text-gray-400">
        <span>Service fee (8%)</span>
        <span>{formatPrice(serviceFee)}</span>
      </div>
      <div className="flex justify-between text-white font-bold text-base pt-3 border-t border-white/10">
        <span>Total</span>
        <span className="text-[#D4A843] font-display">{formatPrice(total)}</span>
      </div>
    </div>
  );
}
