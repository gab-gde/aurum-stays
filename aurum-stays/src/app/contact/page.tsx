"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { api } from "@/lib/api";

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

  const info = [
    { icon: "\ud83d\udccd", title: "Visit Us", text: "42 Avenue Montaigne, 75008 Paris, France" },
    { icon: "\ud83d\udce7", title: "Email Us", text: "hello@aurumstays.com" },
    { icon: "\ud83d\udcde", title: "Call Us", text: "+33 1 42 68 00 00" },
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <Container className="max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-[#D4A843] tracking-[0.2em] uppercase text-sm mb-3">Get in Touch</p>
            <h1 className="font-display text-4xl font-bold">Contact Us</h1>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {info.map(i => (
              <Card key={i.title} className="text-center !p-6">
                <span className="text-3xl mb-3 block">{i.icon}</span>
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-[#D4A843]/50 transition-all resize-none" />
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
