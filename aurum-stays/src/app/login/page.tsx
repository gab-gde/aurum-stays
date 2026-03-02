"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { api } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setError("");
    const fd = new FormData(e.currentTarget);
    try {
      await api.auth.login({ email: fd.get("email") as string, password: fd.get("password") as string });
      router.push("/dashboard");
    } catch (err: any) { setError(err.message); }
    finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#111217]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-display text-3xl font-bold gold-text tracking-wider">AURUM</Link>
          <h1 className="font-display text-2xl font-bold text-white mt-6">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>
        <div className="luxury-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input name="email" label="Email" type="email" placeholder="your@email.com" required />
            <Input name="password" label="Password" type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" required />
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <Button type="submit" loading={loading} className="w-full">Sign In</Button>
          </form>
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">
          Don&#39;t have an account?{" "}
          <Link href="/register" className="text-[#D4A843] hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}
