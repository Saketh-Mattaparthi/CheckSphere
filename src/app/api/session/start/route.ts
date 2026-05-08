import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/db';

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    const token = authHeader.split(' ')[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');

    if (decoded.role !== 'teacher' && decoded.role !== 'admin') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    const { className, subject, lat, lng, radius } = await req.json();

    // Generate a random 6-character alphanumeric secret code
    const secretCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    const newSession = await prisma.session.create({
      data: {
        teacherId: decoded.id,
        className,
        subject,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        radius: parseFloat(radius) || 50,
        secretCode,
        status: 'active'
      }
    });

    return NextResponse.json({
      message: 'Session started',
      session: newSession
    }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error starting session', error }, { status: 500 });
  }
}
