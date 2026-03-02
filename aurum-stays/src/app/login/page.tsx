"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { api } from "@/lib/api";
import { useAuth } from "@/components/providers/AuthProvider";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { refresh } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setError("");
    const fd = new FormData(e.currentTarget);
    try {
      await api.auth.login({ email: fd.get("email") as string, password: fd.get("password") as string });
      await refresh();
      router.push("/dashboard");
    } catch (err: any) { setError(err.message); }
    finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left: Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200')" }} />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-12 left-12">
          <p className="font-display text-4xl text-white font-light italic">Experience<br/>the Extraordinary</p>
        </div>
      </div>
      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center px-8 bg-[var(--dark)]">
        <div className="w-full max-w-md">
          <Link href="/" className="font-display text-xl text-white tracking-[0.3em] uppercase font-light">Aurum</Link>
          <h1 className="font-display text-4xl text-white font-light mt-10 mb-2">Welcome <em className="text-[var(--gold)]">Back</em></h1>
          <p className="text-white/30 text-sm mb-12">Sign in to your account</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input name="email" label="Email" type="email" placeholder="your@email.com" required />
            <Input name="password" label="Password" type="password" placeholder="Enter your password" required />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" disabled={loading} className="btn-gold w-full justify-center">
              <span>{loading ? "Signing in..." : "Sign In"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <p className="text-white/20 text-sm mt-10">
            No account?{" "}
            <Link href="/register" className="text-[var(--gold)] hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
