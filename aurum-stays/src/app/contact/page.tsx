"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Input } from "@/components/ui/Input";
import { api } from "@/lib/api";
import { MapPin, Mail, Phone, ArrowRight, Clock } from "lucide-react";

const info = [
  { icon: MapPin, title: "Visit Us", text: "42 Avenue Montaigne, 75008 Paris, France" },
  { icon: Mail, title: "Email Us", text: "hello@aurumstays.com" },
  { icon: Phone, title: "Call Us", text: "+33 1 42 68 00 00" },
  { icon: Clock, title: "Concierge Hours", text: "24/7, 365 days a year" },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      await api.contact({ name: fd.get("name"), email: fd.get("email"), subject: fd.get("subject"), message: fd.get("message") });
      setMsg("Message sent successfully. We'll respond within 24 hours.");
      (e.target as HTMLFormElement).reset();
    } catch { setMsg("Failed to send. Please try again."); }
    finally { setLoading(false); }
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=85')" }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-[var(--dark)]/30" />
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-12 h-[1px] bg-[var(--gold)]" />
              <p className="text-[var(--gold)] text-[10px] tracking-[0.5em] uppercase font-medium">Get in Touch</p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light">
              Contact <em className="text-[var(--gold)]">Us</em>
            </h1>
          </div>
        </section>

        <section className="py-32">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-5 gap-20">
              {/* Info */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <p className="text-white/30 text-[15px] leading-[2] font-light mb-14">
                    Whether you&#39;re looking for your next extraordinary stay or have a question about our services,
                    our team is here to help. We typically respond within 2 hours.
                  </p>
                  <div className="space-y-10">
                    {info.map(i => (
                      <div key={i.title} className="flex items-start gap-5 group">
                        <div className="w-10 h-10 border border-white/[0.06] flex items-center justify-center group-hover:border-[var(--gold)]/20 transition-all duration-500">
                          <i.icon className="w-4 h-4 text-[var(--gold)]/30 group-hover:text-[var(--gold)] transition-colors duration-500" strokeWidth={1} />
                        </div>
                        <div>
                          <h3 className="text-white text-sm font-medium mb-1">{i.title}</h3>
                          <p className="text-white/25 text-sm font-light">{i.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <ScrollReveal delay={200}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input name="name" label="Your Name" placeholder="John Doe" required />
                      <Input name="email" label="Email Address" type="email" placeholder="john@example.com" required />
                    </div>
                    <Input name="subject" label="Subject" placeholder="How can we help?" required />
                    <div className="space-y-2">
                      <label className="text-[10px] text-white/25 uppercase tracking-[0.25em] font-medium">Message</label>
                      <textarea name="message" rows={7} required placeholder="Tell us about your dream stay..."
                        className="w-full px-5 py-4 bg-transparent border border-white/[0.06] text-white text-sm placeholder:text-white/15 focus:outline-none focus:border-[var(--gold)]/30 transition-all duration-500 resize-none leading-relaxed" />
                    </div>
                    <div className="flex items-center gap-6">
                      <button type="submit" disabled={loading} className="btn-gold">
                        <span>{loading ? "Sending..." : "Send Message"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      {msg && <p className="text-[var(--gold)] text-sm font-display italic">{msg}</p>}
                    </div>
                  </form>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
