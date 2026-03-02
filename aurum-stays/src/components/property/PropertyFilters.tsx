"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
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
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 mb-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Input name="search" placeholder="Search properties..." defaultValue={params.get("search") || ""} />
        <Select name="type" options={[
          { value: "", label: "All Types" },
          ...PROPERTY_TYPES.map(t => ({ value: t, label: t.charAt(0) + t.slice(1).toLowerCase() })),
        ]} defaultValue={params.get("type") || ""} />
        <Select name="sort" options={[
          { value: "", label: "Sort by" },
          { value: "price_asc", label: "Price: Low to High" },
          { value: "price_desc", label: "Price: High to Low" },
          { value: "rating", label: "Top Rated" },
          { value: "newest", label: "Newest" },
        ]} defaultValue={params.get("sort") || ""} />
        <Input name="minPrice" type="number" placeholder="Min price" defaultValue={params.get("minPrice") || ""} />
        <Button type="submit" variant="gold">
          <Search className="w-4 h-4" /> Filter
        </Button>
      </div>
    </form>
  );
}
