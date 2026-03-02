import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";
import { formatDate } from "@/lib/utils";

export function PropertyReviews({ reviews }: { reviews: any[] }) {
  if (!reviews?.length) {
    return <p className="text-gray-500">No reviews yet.</p>;
  }
  return (
    <div className="space-y-6">
      {reviews.map((r) => (
        <div key={r.id} className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/5">
          <Avatar name={r.user.name} src={r.user.avatar} />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white font-medium">{r.user.name}</p>
              <span className="text-gray-600 text-xs">{formatDate(r.createdAt)}</span>
            </div>
            <Rating value={r.rating} />
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">{r.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
