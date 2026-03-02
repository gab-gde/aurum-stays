"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { PROPERTY_TYPES } from "@/lib/constants";
import { Search } from "lucide-react";

export function PropertyFilters() {
  const router = useRouter();
  const params = useSearchParams();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const qs = new URLSearchParams();
    fd.forEach((v, k) => { if (v) qs.set(k, v.toString()); });
    router.push(`/properties?${qs.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="border border-white/[0.04] p-6 mb-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Input name="search" placeholder="Search..." defaultValue={params.get("search") || ""} />
        <Select name="type" options={[
          { value: "", label: "All Types" },
          ...PROPERTY_TYPES.map(t => ({ value: t, label: t.charAt(0) + t.slice(1).toLowerCase() })),
        ]} defaultValue={params.get("type") || ""} />
        <Select name="sort" options={[
          { value: "", label: "Sort by" },
          { value: "price_asc", label: "Price: Low" },
          { value: "price_desc", label: "Price: High" },
          { value: "rating", label: "Top Rated" },
        ]} defaultValue={params.get("sort") || ""} />
        <Input name="minPrice" type="number" placeholder="Min price" defaultValue={params.get("minPrice") || ""} />
        <button type="submit" className="btn-gold-filled flex items-center justify-center gap-2">
          <Search className="w-3.5 h-3.5" /> Filter
        </button>
      </div>
    </form>
  );
}
