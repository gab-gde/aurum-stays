import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111217] flex items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gold opacity-20" />
      <div className="relative">
        <h1 className="font-display text-[10rem] font-bold gold-text leading-none mb-4">404</h1>
        <p className="text-gray-400 text-xl mb-10">This page could not be found.</p>
        <Link href="/" className="btn-gold inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>
      </div>
    </div>
  );
}
