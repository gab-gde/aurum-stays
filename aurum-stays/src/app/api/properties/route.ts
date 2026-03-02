import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { propertyFilterSchema } from "@/lib/validators";

export async function GET(req: NextRequest) {
  try {
    const params = Object.fromEntries(req.nextUrl.searchParams);
    const filters = propertyFilterSchema.parse(params);
    const where: any = {};
    if (filters.search) where.OR = [
      { title: { contains: filters.search, mode: "insensitive" } },
      { location: { contains: filters.search, mode: "insensitive" } },
    ];
    if (filters.type) where.type = filters.type;
    if (filters.minPrice || filters.maxPrice) {
      where.price = {};
      if (filters.minPrice) where.price.gte = filters.minPrice;
      if (filters.maxPrice) where.price.lte = filters.maxPrice;
    }

    let orderBy: any = { createdAt: "desc" };
    if (filters.sort === "price_asc") orderBy = { price: "asc" };
    if (filters.sort === "price_desc") orderBy = { price: "desc" };
    if (filters.sort === "rating") orderBy = { rating: "desc" };

    const perPage = 12;
    const [properties, total] = await Promise.all([
      prisma.property.findMany({ where, orderBy, skip: (filters.page - 1) * perPage, take: perPage }),
      prisma.property.count({ where }),
    ]);

    return NextResponse.json({ properties, total, pages: Math.ceil(total / perPage) });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
