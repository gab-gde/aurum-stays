"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { api } from "@/lib/api";
import { MapPin, Mail, Phone } from "lucide-react";

const info = [
  { icon: MapPin, title: "Visit Us", text: "42 Avenue Montaigne, 75008 Paris, France" },
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
      setMsg("Message sent! We\u2019ll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    } catch { setMsg("Failed to send. Please try again."); }
    finally { setLoading(false); }
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <Container className="max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-[#D4A843] tracking-[0.3em] uppercase text-xs font-medium mb-4">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold">Contact <span className="gold-text">Us</span></h1>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4A843] to-transparent mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {info.map(i => (
              <Card key={i.title} className="text-center !p-6 group">
                <div className="w-10 h-10 rounded-xl bg-[#D4A843]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4A843]/20 transition-colors">
                  <i.icon className="w-4 h-4 text-[#D4A843]" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold mb-1">{i.title}</h3>
                <p className="text-gray-400 text-sm">{i.text}</p>
              </Card>
            ))}
          </div>
          <Card className="max-w-2xl mx-auto !p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input name="name" label="Name" placeholder="Your name" required />
                <Input name="email" label="Email" type="email" placeholder="your@email.com" required />
              </div>
              <Input name="subject" label="Subject" placeholder="How can we help?" required />
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400 font-medium">Message</label>
                <textarea name="message" rows={5} required placeholder="Tell us more..."
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-[#D4A843]/50 transition-all resize-none" />
              </div>
              <Button type="submit" loading={loading} className="w-full">Send Message</Button>
              {msg && <p className="text-center text-sm text-gray-400">{msg}</p>}
            </form>
          </Card>
        </Container>
      </main>
      <Footer />
    </>
  );
}
