import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_req: NextRequest, { params }: { params: any }) {
  const { id } = await params;
  const property = await prisma.property.findUnique({
    where: { id },
    include: { reviews: { include: { user: { select: { name: true, avatar: true } } }, orderBy: { createdAt: "desc" } } },
  });
  if (!property) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(property);
}
