"use client";
import { useState } from "react";
import { Rating } from "@/components/ui/Rating";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/components/providers/AuthProvider";
import { api } from "@/lib/api";
import { ArrowRight } from "lucide-react";

export function PropertyReviews({ reviews, propertyId }: { reviews: any[]; propertyId: string }) {
  const { user } = useAuth();
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) return;
    setLoading(true); setError("");
    const fd = new FormData(e.currentTarget);
    try {
      await api.reviews.create({
        propertyId, rating,
        
        comment: fd.get("comment") as string,
      });
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) { setError(err.message); }
    finally { setLoading(false); }
  }

  return (
    <div>
      {reviews.length === 0 ? (
        <p className="text-white/20 text-sm italic font-display">No reviews yet. Be the first to share your experience.</p>
      ) : (
        <div className="space-y-0 divide-y divide-white/[0.04]">
          {reviews.map((r) => (
            <div key={r.id} className="py-8 first:pt-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] text-[10px] font-semibold tracking-wider">
                    {r.user.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-white text-sm">{r.user.name}</p>
                    <p className="text-white/20 text-[10px] tracking-wider">{new Date(r.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
                  </div>
                </div>
                <Rating value={r.rating} />
              </div>
              {null}
              <p className="text-white/30 text-sm leading-relaxed">{r.comment}</p>
            </div>
          ))}
        </div>
      )}

      {user && !success && (
        <form onSubmit={handleSubmit} className="mt-12 pt-12 border-t border-white/[0.04]">
          <h3 className="font-display text-xl text-white font-light mb-6">Leave a <em className="text-[var(--gold)]">Review</em></h3>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/30 text-xs uppercase tracking-wider">Rating</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(v => (
                <button key={v} type="button" onClick={() => setRating(v)}
                  className={`w-8 h-8 border text-xs transition-all duration-300 ${v <= rating ? 'border-[var(--gold)] text-[var(--gold)] bg-[var(--gold)]/10' : 'border-white/10 text-white/20'}`}>
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">Your Review</label>
              <textarea name="comment" rows={4} required placeholder="Share your experience..."
                className="w-full px-4 py-3.5 bg-transparent border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[var(--gold)]/40 transition-all duration-500 resize-none" />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" disabled={loading} className="btn-gold">
              <span>{loading ? "Submitting..." : "Submit Review"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
      {success && (
        <p className="text-[var(--gold)] text-sm mt-8 font-display italic">Thank you for your review.</p>
      )}
    </div>
  );
}
