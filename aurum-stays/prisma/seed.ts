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
      description: "Perched on the cliffs of the Amalfi Coast, this stunning villa offers panoramic views of the Mediterranean Sea stretching to infinity. Every room has been thoughtfully designed with hand-painted Vietri ceramics, reclaimed stone floors, and bespoke Italian furnishings. Wake to the sound of waves crashing below, take your morning espresso on the terrace overlooking Positano, and spend evenings dining al fresco as the sun sets over the Tyrrhenian Sea. The infinity pool appears to merge with the ocean horizon, while the private garden path leads directly to a secluded cove beach.",
      price: 2500, location: "Amalfi Coast", country: "Italy",
      bedrooms: 5, bathrooms: 4, maxGuests: 10, area: 450,
      amenities: ["Infinity Pool", "Sea View", "Private Chef", "Helipad", "Wine Cellar", "Spa", "Beach Access", "Garden", "Terrace", "Air Conditioning", "WiFi", "Concierge"],
      images: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=85",
        "https://images.unsplash.com/photo-1602343168117-bb8bbe693f7b?w=1200&q=85",
      ],
      latitude: 40.6333, longitude: 14.6029, featured: true, rating: 4.9,
    },
    {
      title: "Penthouse Paris", slug: "penthouse-paris", type: PropertyType.PENTHOUSE,
      description: "A breathtaking penthouse in the heart of the 8th arrondissement with floor-to-ceiling windows framing the Eiffel Tower in a living painting that changes with every hour. Art deco interiors meet modern luxury with Carrara marble bathrooms, a Boffi kitchen, and a wraparound terrace perfect for champagne at sunset. The building's private courtyard garden provides an oasis of calm, while the 24-hour concierge ensures every desire is met before it's even expressed. This is not merely an apartment — it is a way of life.",
      price: 3200, location: "Paris 8th", country: "France",
      bedrooms: 3, bathrooms: 3, maxGuests: 6, area: 280,
      amenities: ["Eiffel View", "Terrace", "Concierge", "Home Cinema", "Gym", "Sauna", "Wine Cellar", "Parking", "Air Conditioning", "WiFi", "Fireplace"],
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85",
      ],
      latitude: 48.8698, longitude: 2.3075, featured: true, rating: 4.8,
    },
    {
      title: "Chalet Verbier", slug: "chalet-verbier", type: PropertyType.CHALET,
      description: "An exclusive ski-in/ski-out chalet in Verbier where centuries-old reclaimed timber meets contemporary Alpine luxury. Every detail has been curated — from the hand-stitched leather door handles to the bespoke fireplace carved from a single block of Valais granite. The private wellness floor features an indoor pool, hammam, and treatment rooms. After a day on the legendary Mont Fort slopes, retreat to the wine cave housing over 300 bottles, or gather around the outdoor fire pit under a canopy of Alpine stars.",
      price: 4500, location: "Verbier", country: "Switzerland",
      bedrooms: 6, bathrooms: 5, maxGuests: 12, area: 600,
      amenities: ["Ski Access", "Hot Tub", "Fireplace", "Spa", "Wine Cellar", "Indoor Pool", "Sauna", "Boot Room", "Mountain View", "Private Chef", "Gym", "Parking"],
      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=85",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=85",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=85",
      ],
      latitude: 46.0967, longitude: 7.2292, featured: true, rating: 4.95,
    },
    {
      title: "Estate Saint-Tropez", slug: "estate-saint-tropez", type: PropertyType.ESTATE,
      description: "A sprawling Proven\u00e7al estate surrounded by vineyards and lavender fields, where the scent of rosemary and thyme drifts through every open window. This masterfully restored bastide features original 17th-century stone walls, vaulted ceilings, and terra cotta floors warmed by underfloor heating. The grounds include a private beach path leading to a hidden cove, a championship tennis court shaded by century-old plane trees, and a kitchen garden that supplies the resident Michelin-trained chef daily.",
      price: 5800, location: "Saint-Tropez", country: "France",
      bedrooms: 8, bathrooms: 7, maxGuests: 16, area: 900,
      amenities: ["Private Beach", "Tennis", "Vineyard", "Infinity Pool", "Helipad", "Staff Quarters", "Private Chef", "Wine Cellar", "Garden", "Spa", "Gym", "Parking"],
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85",
        "https://images.unsplash.com/photo-1615571022219-eb45cf7faa36?w=1200&q=85",
      ],
      latitude: 43.2677, longitude: 6.6407, featured: false, rating: 4.85,
    },
    {
      title: "Apartment Milan", slug: "apartment-milan", type: PropertyType.APARTMENT,
      description: "A sleek designer apartment steps from the Duomo, conceived as a gallery of contemporary Italian design. Polished Calacatta marble flows through the living spaces, Cassina and B&B Italia furniture creates sculptural focal points, and floor-to-ceiling windows flood every room with Milan's luminous light. The private rooftop terrace — a rare privilege in Centro — offers 360-degree views from the Duomo's spires to the distant Alps, making it the perfect stage for an aperitivo as the city glows below.",
      price: 1800, location: "Milan Centro", country: "Italy",
      bedrooms: 2, bathrooms: 2, maxGuests: 4, area: 160,
      amenities: ["Rooftop Terrace", "Designer Interior", "Concierge", "Parking", "Air Conditioning", "WiFi", "Washer", "Coffee Machine", "Smart Home", "City View"],
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7c5a38?w=1200&q=85",
      ],
      latitude: 45.4642, longitude: 9.1900, featured: false, rating: 4.7,
    },
    {
      title: "Mansion Bordeaux", slug: "mansion-bordeaux", type: PropertyType.MANSION,
      description: "A restored 18th-century mansion in the Bordeaux wine region where aristocratic grandeur meets refined contemporary comfort. Grand salons with original parquet de Versailles floors, gilded mirrors, and crystal chandeliers open onto acres of manicured French gardens designed in the tradition of Le N\u00f4tre. The private chapel hosts intimate gatherings, the billiard room features a rare 1890s Thurston table, and the wine cellar — carved from the estate's limestone foundations — holds vintages dating to 1945.",
      price: 3800, location: "Bordeaux", country: "France",
      bedrooms: 7, bathrooms: 6, maxGuests: 14, area: 750,
      amenities: ["Wine Cellar", "Chapel", "Gardens", "Infinity Pool", "Library", "Billiard Room", "Private Chef", "Spa", "Tennis", "Fireplace", "Parking", "Staff Quarters"],
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=85",
        "https://images.unsplash.com/photo-1615571022219-eb45cf7faa36?w=1200&q=85",
      ],
      latitude: 44.8378, longitude: -0.5792, featured: true, rating: 4.88,
    },
  ];

  // Create reviews
  for (const p of properties) {
    await prisma.property.upsert({ where: { slug: p.slug }, update: { images: p.images, description: p.description, amenities: p.amenities }, create: p });
  }

  // Add sample reviews
  const allProperties = await prisma.property.findMany();
  const reviewTexts = [
    { rating: 5, comment: "Absolutely extraordinary. Every detail was perfect, from the welcome champagne to the breathtaking views at sunrise. We've stayed at luxury properties worldwide, and this is genuinely in a class of its own." },
    { rating: 5, comment: "The concierge arranged a private boat tour that was the highlight of our trip. The property itself is even more stunning than the photos suggest. We're already planning our return." },
    { rating: 4, comment: "Beautiful property with impeccable service. The interiors are magazine-worthy and the location couldn't be better. A truly memorable stay that exceeded our high expectations." },
    { rating: 5, comment: "From the moment we arrived, we felt like royalty. The attention to detail is remarkable — fresh flowers daily, personalized welcome gifts, and a chef who remembered our dietary preferences without being asked." },
  ];

  for (const prop of allProperties) {
    const existingReviews = await prisma.review.count({ where: { propertyId: prop.id } });
    if (existingReviews === 0) {
      for (let i = 0; i < 2; i++) {
        await prisma.review.create({
          data: {
            propertyId: prop.id,
            userId: i === 0 ? admin.id : user.id,
            ...reviewTexts[i],
          },
        });
      }
    }
  }

  console.log("Seed complete: admin, user, 6 properties with images + reviews.");
}

main().catch(console.error).finally(() => prisma.$disconnect());
