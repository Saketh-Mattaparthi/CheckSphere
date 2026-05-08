import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/mongodb';
import Session from '@/models/Session';
import Attendance from '@/models/Attendance';

// Helper function to calculate distance using Haversine formula
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in metres
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    const token = authHeader.split(' ')[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');

    if (decoded.role !== 'student') {
      return NextResponse.json({ message: 'Only students can check in' }, { status: 403 });
    }

    await dbConnect();
    const { sessionId, secretCode, lat, lng, deviceFingerprint } = await req.json();

    const session = await Session.findById(sessionId);
    if (!session || session.status !== 'active') {
      return NextResponse.json({ message: 'Session not found or inactive' }, { status: 404 });
    }

    if (session.secretCode !== secretCode) {
      return NextResponse.json({ message: 'Invalid session code' }, { status: 400 });
    }

    // Geofencing verification
    const distance = getDistance(session.location.lat, session.location.lng, lat, lng);
    if (distance > session.location.radius) {
      return NextResponse.json({ message: 'You are outside the classroom proximity zone' }, { status: 403 });
    }

    // Check if already checked in
    const existing = await Attendance.findOne({ sessionId, studentId: decoded.id });
    if (existing) {
      return NextResponse.json({ message: 'Already checked in' }, { status: 400 });
    }

    // Proxy Detection: Check if another student checked in with same device fingerprint
    const proxyCheck = await Attendance.findOne({ sessionId, deviceFingerprint });
    let status = 'present';
    if (proxyCheck && deviceFingerprint) {
       status = 'proxy_suspected';
    }

    const attendance = await Attendance.create({
      sessionId,
      studentId: decoded.id,
      deviceFingerprint,
      status
    });

    return NextResponse.json({
      message: status === 'proxy_suspected' ? 'Checked in, but flagged for proxy review' : 'Check-in successful',
      attendance
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: 'Error during check-in', error }, { status: 500 });
  }
}
