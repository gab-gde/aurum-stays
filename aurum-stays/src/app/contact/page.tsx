"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/Input";
import { api } from "@/lib/api";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

const info = [
  { icon: MapPin, title: "Visit Us", text: "42 Avenue Montaigne, 75008 Paris" },
  { icon: Mail, title: "Email Us", text: "hello@aurumstays.com" },
  { icon: Phone, title: "Call Us", text: "+33 1 42 68 00 00" },
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
      setMsg("Message sent successfully.");
      (e.target as HTMLFormElement).reset();
    } catch { setMsg("Failed to send."); }
    finally { setLoading(false); }
  }

  return (
    <>
      <Header />
      <main className="pt-40 pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <p className="text-[var(--gold)] text-[11px] tracking-[0.4em] uppercase font-medium mb-6">Get in Touch</p>
              <h1 className="font-display text-5xl md:text-6xl font-light mb-12">
                Contact <em className="text-[var(--gold)]">Us</em>
              </h1>
              <div className="space-y-10">
                {info.map(i => (
                  <div key={i.title} className="flex items-start gap-5">
                    <i.icon className="w-5 h-5 text-[var(--gold)]/50 mt-0.5" strokeWidth={1} />
                    <div>
                      <h3 className="text-white text-sm font-medium mb-1">{i.title}</h3>
                      <p className="text-white/30 text-sm">{i.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" label="Name" placeholder="Your name" required />
                  <Input name="email" label="Email" type="email" placeholder="your@email.com" required />
                </div>
                <Input name="subject" label="Subject" placeholder="How can we help?" required />
                <div className="space-y-2">
                  <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">Message</label>
                  <textarea name="message" rows={6} required placeholder="Tell us more..."
                    className="w-full px-4 py-3.5 bg-transparent border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[var(--gold)]/40 transition-all duration-500 resize-none" />
                </div>
                <button type="submit" disabled={loading} className="btn-gold">
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {msg && <p className="text-white/40 text-sm">{msg}</p>}
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
