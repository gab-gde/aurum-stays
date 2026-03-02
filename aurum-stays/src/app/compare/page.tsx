import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Rating } from "@/components/ui/Rating";

export default async function ComparePage() {
  const properties = await prisma.property.findMany({ take: 6, orderBy: { rating: "desc" } });

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <Container>
          <div className="text-center mb-12">
            <p className="text-[#D4A843] tracking-[0.2em] uppercase text-sm mb-3">Side by Side</p>
            <h1 className="font-display text-4xl font-bold">Compare Properties</h1>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="p-4 text-left text-gray-500">Feature</th>
                  {properties.map(p => (
                    <th key={p.id} className="p-4 text-left text-white font-display">{p.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <tr className="border-b border-white/5">
                  <td className="p-4 font-medium text-gray-500">Type</td>
                  {properties.map(p => <td key={p.id} className="p-4">{p.type}</td>)}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-medium text-gray-500">Price / night</td>
                  {properties.map(p => <td key={p.id} className="p-4 text-[#D4A843]">{formatPrice(p.price)}</td>)}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-medium text-gray-500">Bedrooms</td>
                  {properties.map(p => <td key={p.id} className="p-4">{p.bedrooms}</td>)}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-medium text-gray-500">Bathrooms</td>
                  {properties.map(p => <td key={p.id} className="p-4">{p.bathrooms}</td>)}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-medium text-gray-500">Max Guests</td>
                  {properties.map(p => <td key={p.id} className="p-4">{p.maxGuests}</td>)}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-medium text-gray-500">Area</td>
                  {properties.map(p => <td key={p.id} className="p-4">{p.area} m\u00b2</td>)}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-medium text-gray-500">Rating</td>
                  {properties.map(p => <td key={p.id} className="p-4"><Rating value={p.rating} /></td>)}
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-500">Location</td>
                  {properties.map(p => <td key={p.id} className="p-4">{p.location}, {p.country}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
