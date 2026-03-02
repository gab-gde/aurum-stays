import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--dark)] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="font-display text-[12rem] font-light text-white/[0.03] leading-none">404</h1>
        <p className="text-white/30 text-lg mt-[-2rem] mb-12 font-light">This page could not be found.</p>
        <Link href="/" className="btn-gold">
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
