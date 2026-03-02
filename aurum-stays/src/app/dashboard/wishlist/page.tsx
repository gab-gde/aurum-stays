import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function WishlistPage() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-16">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="text-[var(--gold)] text-[11px] tracking-[0.4em] uppercase font-medium mb-4">Dashboard</p>
            <h1 className="font-display text-4xl md:text-5xl font-light">My <em className="text-[var(--gold)]">Wishlist</em></h1>
          </div>
          <div className="text-center py-20">
            <p className="font-display text-2xl text-white/20 italic font-light mb-6">Your wishlist is empty.</p>
            <Link href="/properties" className="btn-gold"><span>Explore Properties</span></Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
