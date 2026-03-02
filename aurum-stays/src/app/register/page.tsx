"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { api } from "@/lib/api";
import { UserPlus } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setError("");
    const fd = new FormData(e.currentTarget);
    try {
      await api.auth.register({
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        password: fd.get("password") as string,
      });
      router.push("/dashboard");
    } catch (err: any) { setError(err.message); }
    finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#111217] relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gold opacity-20" />
      <div className="absolute top-10 left-10 w-32 h-32 border-l border-t border-[#D4A843]/10 hidden md:block" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-r border-b border-[#D4A843]/10 hidden md:block" />
      <div className="w-full max-w-md relative">
        <div className="text-center mb-10">
          <Link href="/" className="font-display text-3xl font-bold gold-text tracking-[0.15em]">AURUM</Link>
          <h1 className="font-display text-2xl font-bold text-white mt-8">Create Account</h1>
          <p className="text-gray-500 mt-2 text-sm">Join the Aurum experience</p>
        </div>
        <div className="luxury-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input name="name" label="Full Name" placeholder="John Doe" required />
            <Input name="email" label="Email" type="email" placeholder="your@email.com" required />
            <Input name="password" label="Password" type="password" placeholder="Min. 6 characters" required />
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <Button type="submit" loading={loading} className="w-full">
              <UserPlus className="w-4 h-4" /> Create Account
            </Button>
          </form>
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-[#D4A843] hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
