import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { bookingSchema } from "@/lib/validators";
import { calculateNights } from "@/lib/utils";
import { CLEANING_FEE, SERVICE_FEE_RATE } from "@/lib/constants";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const bookings = await prisma.booking.findMany({
    where: { userId: user.id },
    include: { property: { select: { title: true, slug: true, images: true, location: true } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(bookings);
}

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const data = bookingSchema.parse(body);
    const property = await prisma.property.findUnique({ where: { id: data.propertyId } });
    if (!property) return NextResponse.json({ error: "Property not found" }, { status: 404 });

    const nights = calculateNights(data.checkIn, data.checkOut);
    if (nights <= 0) return NextResponse.json({ error: "Invalid dates" }, { status: 400 });

    const subtotal = property.price * nights;
    const totalPrice = subtotal + CLEANING_FEE + Math.round(subtotal * SERVICE_FEE_RATE);

    const booking = await prisma.booking.create({
      data: { ...data, checkIn: new Date(data.checkIn), checkOut: new Date(data.checkOut), totalPrice, userId: user.id },
    });
    return NextResponse.json(booking, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
