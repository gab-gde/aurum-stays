"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { api } from "@/lib/api";
import { useAuth } from "@/components/providers/AuthProvider";
import { ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const { refresh } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setError("");
    const fd = new FormData(e.currentTarget);
    try {
      await api.auth.register({ name: fd.get("name") as string, email: fd.get("email") as string, password: fd.get("password") as string });
      await refresh();
      router.push("/dashboard");
    } catch (err: any) { setError(err.message); }
    finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block lg:w-[55%] relative">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85')" }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--dark)]/50" />
        <div className="absolute bottom-16 left-16 right-16">
          <div className="w-12 h-[1px] bg-[var(--gold)]/30 mb-8" />
          <p className="font-display text-4xl text-white font-light italic leading-[1.3]">
            Begin your journey<br/>into curated<br/>luxury.
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-8 lg:px-16 bg-[var(--dark)]">
        <div className="w-full max-w-md">
          <Link href="/" className="font-display text-lg text-white tracking-[0.3em] uppercase font-light">Aurum</Link>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light mt-12 mb-2">Create <em className="text-[var(--gold)]">Account</em></h1>
          <p className="text-white/20 text-sm mb-14 font-light">Join the Aurum experience</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input name="name" label="Full Name" placeholder="John Doe" required />
            <Input name="email" label="Email" type="email" placeholder="your@email.com" required />
            <Input name="password" label="Password" type="password" placeholder="Min. 6 characters" required />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" disabled={loading} className="btn-gold w-full justify-center">
              <span>{loading ? "Creating..." : "Create Account"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <p className="text-white/15 text-sm mt-12 font-light">
            Already have an account?{" "}
            <Link href="/login" className="text-[var(--gold)] hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
