import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function PUT(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { name, email } = await req.json();
    const updated = await prisma.user.update({
      where: { id: user.id },
      data: { name, email },
    });
    return NextResponse.json({ id: updated.id, name: updated.name, email: updated.email });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to update" }, { status: 500 });
  }
}
