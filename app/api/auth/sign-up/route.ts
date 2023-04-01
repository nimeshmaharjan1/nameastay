import prisma from '@/shared/lib/db.lib';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return NextResponse.json({ userId: user.id });
  } catch (error) {
    return NextResponse.error();
  }
}
