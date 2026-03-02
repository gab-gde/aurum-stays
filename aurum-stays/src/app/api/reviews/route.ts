import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { propertyId, rating, title, comment } = await req.json();
    const review = await prisma.review.create({
      data: { propertyId, userId: user.id, rating, title, comment },
    });
    // Update property avg rating
    const agg = await prisma.review.aggregate({ where: { propertyId }, _avg: { rating: true } });
    if (agg._avg.rating) {
      await prisma.property.update({ where: { id: propertyId }, data: { rating: agg._avg.rating } });
    }
    return NextResponse.json(review, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create review" }, { status: 500 });
  }
}
