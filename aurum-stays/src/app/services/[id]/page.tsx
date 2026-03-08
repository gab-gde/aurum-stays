"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Star, Shield, Clock, Users } from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const service = SERVICES.find(s => s.id === params.id);
  const [selectedOption, setSelectedOption] = useState(0);
  const [guestCount, setGuestCount] = useState(2);
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!service) {
    return (
      <>
        <Header />
        <main className="pt-40 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="font-display text-2xl text-white/15 italic">Service not found.</p>
            <Link href="/services" className="text-[var(--gold)] text-sm mt-4 inline-block">Back to Services</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const related = SERVICES.filter(s => s.category === service.category && s.id !== service.id).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero with parallax */}
        <section className="relative h-[65vh] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: `url('${service.image}')` }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-[var(--dark)]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark)]/60 via-transparent to-transparent" />
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
            <Link href="/services" className="inline-flex items-center gap-2 text-white/25 text-[10px] tracking-[0.3em] uppercase hover:text-white/50 transition-colors mb-8 group">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>All Services</span>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1.5 border border-[var(--gold)]/20 text-[var(--gold)] text-[9px] tracking-[0.3em] uppercase">
                {service.category}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light leading-[0.95] mb-4">{service.title}</h1>
            <p className="font-display text-xl md:text-2xl text-[var(--gold)] italic font-light">{service.tagline}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Left content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <ScrollReveal>
                  <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-8 h-[1px] bg-[var(--gold)]/20" />
                      <h2 className="font-display text-2xl text-white font-light">About This <em className="text-[var(--gold)]">Service</em></h2>
                    </div>
                    <p className="text-white/30 text-[15px] leading-[2] font-light">{service.description}</p>
                  </div>
                </ScrollReveal>

                {/* Features */}
                <ScrollReveal delay={100}>
                  <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-8 h-[1px] bg-[var(--gold)]/20" />
                      <h2 className="font-display text-2xl text-white font-light">What&#39;s <em className="text-[var(--gold)]">Included</em></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-px bg-white/[0.02]">
                      {service.features.map(f => (
                        <div key={f} className="bg-[var(--dark)] p-5 flex items-center gap-4 group hover:bg-[#0D0D0D] transition-all duration-500">
                          <Check className="w-4 h-4 text-[var(--gold)]/30 group-hover:text-[var(--gold)] transition-colors duration-500 flex-shrink-0" strokeWidth={1} />
                          <span className="text-white/35 text-sm group-hover:text-white/60 transition-colors duration-500">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Options / Packages */}
                <ScrollReveal delay={200}>
                  <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-8 h-[1px] bg-[var(--gold)]/20" />
                      <h2 className="font-display text-2xl text-white font-light">Choose Your <em className="text-[var(--gold)]">Package</em></h2>
                    </div>
                    <div className="space-y-3">
                      {service.options.map((opt, i) => (
                        <button key={i} onClick={() => setSelectedOption(i)}
                          className={`w-full text-left p-6 border transition-all duration-500 group ${
                            selectedOption === i
                              ? 'border-[var(--gold)]/30 bg-[var(--gold)]/[0.03]'
                              : 'border-white/[0.04] hover:border-white/[0.08] bg-transparent'
                          }`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                  selectedOption === i ? 'border-[var(--gold)]' : 'border-white/15'
                                }`}>
                                  {selectedOption === i && <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />}
                                </div>
                                <h3 className={`text-sm font-medium transition-colors duration-500 ${
                                  selectedOption === i ? 'text-white' : 'text-white/50'
                                }`}>{opt.name}</h3>
                              </div>
                              <p className="text-white/20 text-xs ml-7 font-light">{opt.desc}</p>
                            </div>
                            <span className={`font-display text-xl transition-colors duration-500 whitespace-nowrap ${
                              selectedOption === i ? 'text-[var(--gold)]' : 'text-white/25'
                            }`}>
                              &euro;{opt.price.toLocaleString()}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Trust signals */}
                <ScrollReveal delay={300}>
                  <div className="grid grid-cols-3 gap-px bg-white/[0.02]">
                    {[
                      { icon: Shield, label: "Verified Professionals" },
                      { icon: Clock, label: "Flexible Scheduling" },
                      { icon: Star, label: "5-Star Rated" },
                    ].map(t => (
                      <div key={t.label} className="bg-[var(--dark)] p-6 text-center group hover:bg-[#0D0D0D] transition-all duration-500">
                        <t.icon className="w-5 h-5 text-[var(--gold)]/20 mx-auto mb-3 group-hover:text-[var(--gold)]/50 transition-colors duration-500" strokeWidth={1} />
                        <p className="text-white/20 text-[10px] tracking-[0.15em] uppercase">{t.label}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Sidebar - Booking form */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <div className="border border-white/[0.04] bg-[#0D0D0D]">
                    <div className="p-8 border-b border-white/[0.04]">
                      <p className="text-[10px] text-white/20 tracking-[0.2em] uppercase mb-2">Selected Package</p>
                      <h3 className="text-white text-sm font-medium mb-1">{service.options[selectedOption].name}</h3>
                      <p className="text-white/20 text-xs font-light mb-4">{service.options[selectedOption].desc}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-4xl text-[var(--gold)]">
                          &euro;{service.options[selectedOption].price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 space-y-5">
                      <div className="space-y-2">
                        <label className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium">Preferred Date</label>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-3.5 bg-transparent border border-white/[0.06] text-white text-sm focus:outline-none focus:border-[var(--gold)]/30 transition-all duration-500" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium">Number of Guests</label>
                        <div className="flex border border-white/[0.06]">
                          <button onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                            className="px-4 py-3 text-white/30 hover:text-white border-r border-white/[0.06] transition-colors">−</button>
                          <span className="flex-1 text-center py-3 text-white text-sm">{guestCount}</span>
                          <button onClick={() => setGuestCount(Math.min(20, guestCount + 1))}
                            className="px-4 py-3 text-white/30 hover:text-white border-l border-white/[0.06] transition-colors">+</button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium">Special Requests</label>
                        <textarea rows={3} placeholder="Dietary requirements, preferences..."
                          className="w-full px-4 py-3 bg-transparent border border-white/[0.06] text-white text-sm placeholder:text-white/10 focus:outline-none focus:border-[var(--gold)]/30 transition-all duration-500 resize-none" />
                      </div>

                      {!submitted ? (
                        <button onClick={() => setSubmitted(true)}
                          className="btn-gold-filled w-full justify-center">
                          <span>Request Booking</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <div className="text-center py-4">
                          <Check className="w-6 h-6 text-[var(--gold)] mx-auto mb-3" />
                          <p className="text-[var(--gold)] text-sm font-display italic">Request sent!</p>
                          <p className="text-white/20 text-xs mt-2">Our concierge will confirm within 2 hours.</p>
                        </div>
                      )}

                      <p className="text-white/10 text-[10px] text-center tracking-wider">Free cancellation up to 48h before</p>

                      {/* Bundle CTA */}
                      <div className="border-t border-white/[0.04] pt-5 mt-2">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full" />
                          <p className="text-[var(--gold)] text-[9px] tracking-[0.2em] uppercase font-medium">Bundle &amp; Save 10%</p>
                        </div>
                        <p className="text-white/15 text-xs leading-relaxed mb-4">
                          Add this service when booking a property and save 10% automatically.
                        </p>
                        <Link href="/properties" className="flex items-center justify-center gap-2 w-full py-3 border border-white/[0.06] text-white/30 text-[10px] tracking-[0.2em] uppercase hover:border-[var(--gold)]/20 hover:text-[var(--gold)] transition-all duration-500">
                          <span>Browse Properties</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related services */}
        {related.length > 0 && (
          <section className="py-24 border-t border-white/[0.03]">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-8 h-[1px] bg-[var(--gold)]/20" />
                <h2 className="font-display text-3xl text-white font-light">You May Also <em className="text-[var(--gold)]">Enjoy</em></h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map(s => (
                  <Link key={s.id} href={`/services/${s.id}`}
                    className="group block border border-white/[0.03] hover:border-white/[0.08] transition-all duration-700">
                    <div className="relative h-48 overflow-hidden">
                      <img src={s.image} alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl text-white font-light group-hover:text-[var(--gold)] transition-colors duration-500">{s.title}</h3>
                      <p className="text-white/20 text-xs mt-1">{s.tagline}</p>
                      <p className="text-[var(--gold)]/60 font-display text-sm mt-3">{s.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
