import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111217] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="font-display text-8xl font-bold gold-text mb-4">404</h1>
        <p className="text-gray-400 text-xl mb-8">This page could not be found.</p>
        <Link href="/" className="btn-gold inline-block">Return Home</Link>
      </div>
    </div>
  );
}
