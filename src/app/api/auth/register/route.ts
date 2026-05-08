import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { name, email, password, role, studentId, deviceFingerprint } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || 'student',
        studentId,
        deviceFingerprint,
      },
    });

    const token = jwt.sign(
      { id: newUser.id, role: newUser.role, name: newUser.name },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '1d' }
    );

    return NextResponse.json({
      message: 'User created',
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role }
    }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating user', error }, { status: 500 });
  }
}
