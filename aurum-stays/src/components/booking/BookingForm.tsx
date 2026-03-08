"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { api } from "@/lib/api";
import { formatPrice } from "@/lib/utils";
import { SERVICES } from "@/lib/constants";
import { CalendarCheck, AlertCircle, ArrowRight, Plus, X, ChevronDown, ChevronUp, Check } from "lucide-react";
import Link from "next/link";

// Curated add-ons shown during booking
const ADDON_IDS = ["private-chef", "spa-wellness", "chauffeur", "yacht-charter", "sommelier", "nanny"];

type SelectedAddon = { serviceId: string; optionIndex: number };

export function BookingForm({ propertyId, price }: { propertyId: string; price: number }) {
  const { user } = useAuth();
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [addonsOpen, setAddonsOpen] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddon[]>([]);
  const [expandedAddon, setExpandedAddon] = useState<string | null>(null);

  const nights = checkIn && checkOut ? Math.max(0, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000)) : 0;
  const stayTotal = nights * price;
  const serviceFee = Math.round(stayTotal * 0.1);
  const addonsTotal = selectedAddons.reduce((sum, a) => {
    const svc = SERVICES.find(s => s.id === a.serviceId);
    return sum + (svc?.options[a.optionIndex]?.price || 0);
  }, 0);
  const grandTotal = stayTotal + serviceFee + addonsTotal;

  function toggleAddon(serviceId: string, optionIndex: number) {
    setSelectedAddons(prev => {
      const existing = prev.findIndex(a => a.serviceId === serviceId);
      if (existing >= 0) {
        // If same option, remove. If different option, update.
        if (prev[existing].optionIndex === optionIndex) {
          return prev.filter((_, i) => i !== existing);
        }
        return prev.map((a, i) => i === existing ? { serviceId, optionIndex } : a);
      }
      return [...prev, { serviceId, optionIndex }];
    });
  }

  function removeAddon(serviceId: string) {
    setSelectedAddons(prev => prev.filter(a => a.serviceId !== serviceId));
  }

  function isAddonSelected(serviceId: string) {
    return selectedAddons.some(a => a.serviceId === serviceId);
  }

  function getSelectedOption(serviceId: string) {
    return selectedAddons.find(a => a.serviceId === serviceId)?.optionIndex ?? -1;
  }

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

  const addons = ADDON_IDS.map(id => SERVICES.find(s => s.id === id)).filter(Boolean) as typeof SERVICES;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Dates */}
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

      {/* Guests */}
      <div className="space-y-2">
        <label className="text-[10px] text-white/30 uppercase tracking-[0.15em] font-medium">Guests</label>
        <div className="flex border border-white/[0.08]">
          <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))}
            className="px-4 py-3 text-white/30 hover:text-white border-r border-white/[0.08] transition-colors text-sm">−</button>
          <span className="flex-1 text-center py-3 text-white text-sm">{guests} guest{guests > 1 ? 's' : ''}</span>
          <button type="button" onClick={() => setGuests(Math.min(20, guests + 1))}
            className="px-4 py-3 text-white/30 hover:text-white border-l border-white/[0.08] transition-colors text-sm">+</button>
        </div>
      </div>

      {/* ===== ADD-ON SERVICES ===== */}
      <div className="border-t border-white/[0.04] pt-5">
        <button
          type="button"
          onClick={() => setAddonsOpen(!addonsOpen)}
          className="w-full flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <Plus className={`w-3.5 h-3.5 text-[var(--gold)]/50 transition-transform duration-300 ${addonsOpen ? 'rotate-45' : ''}`} />
            <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase group-hover:text-white/60 transition-colors">
              Add services
            </span>
            {selectedAddons.length > 0 && (
              <span className="w-5 h-5 bg-[var(--gold)] text-[var(--dark)] text-[9px] font-bold flex items-center justify-center">
                {selectedAddons.length}
              </span>
            )}
          </div>
          {addonsOpen ? <ChevronUp className="w-3.5 h-3.5 text-white/20" /> : <ChevronDown className="w-3.5 h-3.5 text-white/20" />}
        </button>

        <div className={`overflow-hidden transition-all duration-700 ${addonsOpen ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-2">
            {addons.map(svc => {
              const selected = isAddonSelected(svc.id);
              const selOpt = getSelectedOption(svc.id);
              const expanded = expandedAddon === svc.id;

              return (
                <div key={svc.id} className={`border transition-all duration-500 ${
                  selected ? 'border-[var(--gold)]/20 bg-[var(--gold)]/[0.02]' : 'border-white/[0.04] hover:border-white/[0.08]'
                }`}>
                  {/* Service header */}
                  <button
                    type="button"
                    onClick={() => setExpandedAddon(expanded ? null : svc.id)}
                    className="w-full flex items-center gap-3 p-3 text-left"
                  >
                    <div className="w-10 h-10 flex-shrink-0 overflow-hidden">
                      <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className={`text-xs font-medium truncate transition-colors duration-300 ${selected ? 'text-[var(--gold)]' : 'text-white/50'}`}>
                          {svc.title}
                        </h4>
                        {selected && <Check className="w-3 h-3 text-[var(--gold)] flex-shrink-0" />}
                      </div>
                      <p className="text-white/15 text-[10px] truncate">{svc.tagline}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {selected && (
                        <button type="button" onClick={(e) => { e.stopPropagation(); removeAddon(svc.id); }}
                          className="w-5 h-5 flex items-center justify-center text-white/15 hover:text-red-400 transition-colors">
                          <X className="w-3 h-3" />
                        </button>
                      )}
                      <ChevronDown className={`w-3 h-3 text-white/15 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {/* Options dropdown */}
                  <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                    <div className="px-3 pb-3 space-y-1.5">
                      <p className="text-[9px] text-white/15 tracking-[0.2em] uppercase mb-2 pl-1">Choose a package</p>
                      {svc.options.map((opt, oi) => (
                        <button
                          key={oi}
                          type="button"
                          onClick={() => toggleAddon(svc.id, oi)}
                          className={`w-full text-left p-3 border transition-all duration-300 flex items-center justify-between gap-2 ${
                            selOpt === oi
                              ? 'border-[var(--gold)]/30 bg-[var(--gold)]/[0.05]'
                              : 'border-white/[0.03] hover:border-white/[0.08]'
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                                selOpt === oi ? 'border-[var(--gold)]' : 'border-white/15'
                              }`}>
                                {selOpt === oi && <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />}
                              </div>
                              <span className={`text-xs transition-colors duration-300 ${selOpt === oi ? 'text-white' : 'text-white/40'}`}>
                                {opt.name}
                              </span>
                            </div>
                            <p className="text-white/15 text-[10px] ml-5 mt-0.5">{opt.desc}</p>
                          </div>
                          <span className={`font-display text-sm flex-shrink-0 transition-colors duration-300 ${
                            selOpt === oi ? 'text-[var(--gold)]' : 'text-white/20'
                          }`}>
                            &euro;{opt.price.toLocaleString()}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 text-center">
            <Link href="/services" className="text-[var(--gold)]/40 text-[9px] tracking-[0.2em] uppercase hover:text-[var(--gold)] transition-colors">
              Browse all services &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* ===== SELECTED ADD-ONS SUMMARY ===== */}
      {selectedAddons.length > 0 && !addonsOpen && (
        <div className="space-y-2 py-3 border-t border-white/[0.04]">
          <p className="text-[9px] text-white/20 tracking-[0.2em] uppercase">Added services</p>
          {selectedAddons.map(a => {
            const svc = SERVICES.find(s => s.id === a.serviceId);
            if (!svc) return null;
            const opt = svc.options[a.optionIndex];
            return (
              <div key={a.serviceId} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Check className="w-3 h-3 text-[var(--gold)]/50 flex-shrink-0" />
                  <span className="text-white/40 text-xs truncate">{svc.title} — {opt.name}</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-white/30 text-xs">{formatPrice(opt.price)}</span>
                  <button type="button" onClick={() => removeAddon(a.serviceId)} className="text-white/15 hover:text-red-400 transition-colors">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ===== PRICE BREAKDOWN ===== */}
      {nights > 0 && (
        <div className="space-y-3 py-5 border-t border-b border-white/[0.04]">
          <div className="flex justify-between text-sm">
            <span className="text-white/30">{formatPrice(price)} &times; {nights} night{nights > 1 ? 's' : ''}</span>
            <span className="text-white/60">{formatPrice(stayTotal)}</span>
          </div>
          {selectedAddons.map(a => {
            const svc = SERVICES.find(s => s.id === a.serviceId);
            if (!svc) return null;
            const opt = svc.options[a.optionIndex];
            return (
              <div key={a.serviceId} className="flex justify-between text-sm">
                <span className="text-white/30 truncate mr-4">{svc.title}</span>
                <span className="text-white/60 flex-shrink-0">{formatPrice(opt.price)}</span>
              </div>
            );
          })}
          <div className="flex justify-between text-sm">
            <span className="text-white/30">Service fee</span>
            <span className="text-white/60">{formatPrice(serviceFee)}</span>
          </div>
          {selectedAddons.length > 0 && (
            <div className="flex justify-between text-xs pt-1">
              <span className="text-[var(--gold)]/40">You save 10% on bundled services</span>
              <span className="text-[var(--gold)]/40">−{formatPrice(Math.round(addonsTotal * 0.1))}</span>
            </div>
          )}
          <div className="flex justify-between pt-3 border-t border-white/[0.04]">
            <span className="text-white text-sm font-medium">Total</span>
            <span className="font-display text-xl text-[var(--gold)]">
              {formatPrice(selectedAddons.length > 0 ? grandTotal - Math.round(addonsTotal * 0.1) : grandTotal)}
            </span>
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
          <span>{loading ? "Booking..." : nights === 0 ? "Select dates" : `Reserve${selectedAddons.length > 0 ? ` + ${selectedAddons.length} service${selectedAddons.length > 1 ? 's' : ''}` : ''}`}</span>
        </button>
      ) : (
        <Link href="/login" className="btn-gold w-full justify-center">
          <span>Sign In to Book</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}

      {selectedAddons.length > 0 && (
        <p className="text-[var(--gold)]/30 text-[9px] text-center tracking-wider">Bundle discount: 10% off all added services</p>
      )}
    </form>
  );
}
