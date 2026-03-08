import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--dark)] flex items-center justify-center text-center px-4 relative overflow-hidden grain">
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920')" }} />
      <div className="relative">
        <h1 className="font-display text-[15rem] font-light text-white/[0.02] leading-none select-none">404</h1>
        <div className="mt-[-4rem]">
          <p className="text-white/20 text-lg font-display italic font-light mb-4">Page not found</p>
          <p className="text-white/10 text-sm mb-12 max-w-sm mx-auto font-light">The page you&#39;re looking for has moved, been removed, or never existed.</p>
          <Link href="/" className="btn-gold">
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
