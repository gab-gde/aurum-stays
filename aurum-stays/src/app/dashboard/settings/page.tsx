"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/components/providers/AuthProvider";
import { api } from "@/lib/api";
import { ArrowRight } from "lucide-react";

export default function SettingsPage() {
  const { user, refresh } = useAuth();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setMsg("");
    const fd = new FormData(e.currentTarget);
    try {
      await api.user.update({ name: fd.get("name") as string, email: fd.get("email") as string });
      await refresh();
      setMsg("Settings updated.");
    } catch { setMsg("Error updating settings."); }
    finally { setLoading(false); }
  }

  return (
    <>
      <Header />
      <main className="pt-40 pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="text-[var(--gold)] text-[11px] tracking-[0.4em] uppercase font-medium mb-4">Dashboard</p>
            <h1 className="font-display text-4xl md:text-5xl font-light"><em className="text-[var(--gold)]">Settings</em></h1>
          </div>
          <div className="max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="name" label="Full Name" defaultValue={user?.name || ""} required />
              <Input name="email" label="Email" type="email" defaultValue={user?.email || ""} required />
              <button type="submit" disabled={loading} className="btn-gold">
                <span>{loading ? "Saving..." : "Save Changes"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              {msg && <p className="text-[var(--gold)] text-sm font-display italic">{msg}</p>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
