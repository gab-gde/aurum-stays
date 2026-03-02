import { prisma } from "@/lib/prisma";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PropertyGrid } from "@/components/property/PropertyGrid";

export default async function WishlistPage() {
  const wishlists = await prisma.wishlist.findMany({
    include: { property: true },
    take: 20,
  });
  const properties = wishlists.map(w => w.property);

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <Container>
          <h1 className="font-display text-3xl font-bold text-white mb-8">My Wishlist</h1>
          {properties.length === 0 ? (
            <p className="text-gray-500">Your wishlist is empty. Start exploring properties!</p>
          ) : (
            <PropertyGrid properties={properties} />
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
