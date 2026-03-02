import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { formatPrice } from "@/lib/utils";

export function AdminPropertyTable({ properties }: { properties: any[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/5">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/5 text-left text-gray-500">
            <th className="p-4">Property</th>
            <th className="p-4">Type</th>
            <th className="p-4">Price</th>
            <th className="p-4">Location</th>
            <th className="p-4">Status</th>
            <th className="p-4">Rating</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((p) => (
            <tr key={p.id} className="border-b border-white/5 hover:bg-white/5 transition">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img src={p.images?.[0]} alt="" className="w-12 h-12 rounded-lg object-cover" />
                  <span className="text-white font-medium">{p.title}</span>
                </div>
              </td>
              <td className="p-4"><Badge variant="gold">{p.type}</Badge></td>
              <td className="p-4 text-[#D4A843]">{formatPrice(p.price)}</td>
              <td className="p-4 text-gray-400">{p.location}</td>
              <td className="p-4"><Badge variant={p.featured ? "success" : "default"}>{p.featured ? "Featured" : "Standard"}</Badge></td>
              <td className="p-4"><Rating value={p.rating} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
