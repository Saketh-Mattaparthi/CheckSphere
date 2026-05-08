import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name, email, password, role, studentId, deviceFingerprint } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'student',
      studentId,
      deviceFingerprint,
    });

    const token = jwt.sign(
      { id: newUser._id, role: newUser.role, name: newUser.name },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '1d' }
    );

    return NextResponse.json({
      message: 'User created',
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role }
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: 'Error creating user', error }, { status: 500 });
  }
}
