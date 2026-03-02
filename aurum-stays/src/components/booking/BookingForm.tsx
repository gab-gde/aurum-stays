"use client";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { BookingSummary } from "./BookingSummary";
import { api } from "@/lib/api";
import { CalendarCheck, AlertCircle, Check } from "lucide-react";

export function BookingForm({ property }: { property: any }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleBook() {
    if (!checkIn || !checkOut) return setMessage("Please select dates.");
    setLoading(true);
    setMessage("");
    setSuccess(false);
    try {
      await api.bookings.create({ propertyId: property.id, checkIn, checkOut, guests });
      setMessage("Booking request sent!");
      setSuccess(true);
    } catch (err: any) {
      setMessage(err.message || "Failed to book. Please sign in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="luxury-card p-6 sticky top-24 space-y-5">
      <div className="flex items-baseline justify-between">
        <p className="text-[#D4A843] font-display text-2xl font-bold">
          \u20ac{property.price.toLocaleString()}
        </p>
        <span className="text-gray-500 text-sm">per night</span>
      </div>
      <div className="gold-divider" />
      <Input type="date" label="Check-in" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      <Input type="date" label="Check-out" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      <Input type="number" label="Guests" min={1} max={property.maxGuests}
        value={guests} onChange={(e) => setGuests(+e.target.value)} />
      {checkIn && checkOut && (
        <BookingSummary pricePerNight={property.price} checkIn={checkIn} checkOut={checkOut} />
      )}
      <Button onClick={handleBook} loading={loading} className="w-full">
        <CalendarCheck className="w-4 h-4" /> Request Booking
      </Button>
      {message && (
        <div className={`flex items-center gap-2 text-sm justify-center ${success ? "text-emerald-400" : "text-red-400"}`}>
          {success ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          {message}
        </div>
      )}
    </div>
  );
}
