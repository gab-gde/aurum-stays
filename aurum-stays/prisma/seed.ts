import { PrismaClient, Role, PropertyType } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash("admin123", 12);
  const userHash = await bcrypt.hash("user123", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@aurum.com" },
    update: {},
    create: { email: "admin@aurum.com", name: "Aurum Admin", password: hash, role: Role.ADMIN },
  });

  const user = await prisma.user.upsert({
    where: { email: "user@aurum.com" },
    update: {},
    create: { email: "user@aurum.com", name: "Jane Doe", password: userHash, role: Role.USER },
  });

  const properties = [
    {
      title: "Villa Amalfi", slug: "villa-amalfi", type: PropertyType.VILLA,
      description: "Perched on the cliffs of the Amalfi Coast, this stunning villa offers panoramic views of the Mediterranean, an infinity pool, and interiors adorned with hand-painted ceramics.",
      price: 2500, location: "Amalfi Coast", country: "Italy",
      bedrooms: 5, bathrooms: 4, maxGuests: 10, area: 450,
      amenities: ["Pool", "Sea View", "Chef", "Helipad", "Wine Cellar", "Spa"],
      images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200"],
      latitude: 40.6333, longitude: 14.6029, featured: true, rating: 4.9,
    },
    {
      title: "Penthouse Paris", slug: "penthouse-paris", type: PropertyType.PENTHOUSE,
      description: "A breathtaking penthouse in the heart of the 8th arrondissement with floor-to-ceiling windows framing the Eiffel Tower. Art deco interiors meet modern luxury.",
      price: 3200, location: "Paris 8th", country: "France",
      bedrooms: 3, bathrooms: 3, maxGuests: 6, area: 280,
      amenities: ["Eiffel View", "Terrace", "Concierge", "Home Cinema", "Gym", "Sauna"],
      images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"],
      latitude: 48.8698, longitude: 2.3075, featured: true, rating: 4.8,
    },
    {
      title: "Chalet Verbier", slug: "chalet-verbier", type: PropertyType.CHALET,
      description: "An exclusive ski-in/ski-out chalet in Verbier with reclaimed wood interiors, a private spa, and breathtaking Alpine panoramas from every room.",
      price: 4500, location: "Verbier", country: "Switzerland",
      bedrooms: 6, bathrooms: 5, maxGuests: 12, area: 600,
      amenities: ["Ski Access", "Hot Tub", "Fireplace", "Spa", "Wine Cave", "Boot Room"],
      images: ["https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200"],
      latitude: 46.0967, longitude: 7.2292, featured: true, rating: 4.95,
    },
    {
      title: "Estate Saint-Tropez", slug: "estate-saint-tropez", type: PropertyType.ESTATE,
      description: "A sprawling Provençal estate surrounded by vineyards and lavender fields. Features a private beach access, tennis court, and Michelin-worthy kitchen.",
      price: 5800, location: "Saint-Tropez", country: "France",
      bedrooms: 8, bathrooms: 7, maxGuests: 16, area: 900,
      amenities: ["Private Beach", "Tennis", "Vineyard", "Pool", "Helipad", "Staff Quarters"],
      images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200"],
      latitude: 43.2677, longitude: 6.6407, featured: false, rating: 4.85,
    },
    {
      title: "Apartment Milan", slug: "apartment-milan", type: PropertyType.APARTMENT,
      description: "A sleek designer apartment steps from the Duomo. Italian marble, Cassina furniture, and a private rooftop terrace overlooking Milan\u2019s skyline.",
      price: 1800, location: "Milan Centro", country: "Italy",
      bedrooms: 2, bathrooms: 2, maxGuests: 4, area: 160,
      amenities: ["Rooftop Terrace", "Designer Interior", "Concierge", "Parking", "AC", "Washer"],
      images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200"],
      latitude: 45.4642, longitude: 9.1900, featured: false, rating: 4.7,
    },
    {
      title: "Mansion Bordeaux", slug: "mansion-bordeaux", type: PropertyType.MANSION,
      description: "A restored 18th-century mansion in the Bordeaux wine region. Grand salons, original parquet floors, a private chapel, and acres of manicured gardens.",
      price: 3800, location: "Bordeaux", country: "France",
      bedrooms: 7, bathrooms: 6, maxGuests: 14, area: 750,
      amenities: ["Wine Cellar", "Chapel", "Gardens", "Pool", "Library", "Billiard Room"],
      images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"],
      latitude: 44.8378, longitude: -0.5792, featured: true, rating: 4.88,
    },
  ];

  for (const p of properties) {
    await prisma.property.upsert({ where: { slug: p.slug }, update: {}, create: p });
  }

  console.log("Seed complete: admin, user, 6 properties.");
}

main().catch(console.error).finally(() => prisma.$disconnect());
