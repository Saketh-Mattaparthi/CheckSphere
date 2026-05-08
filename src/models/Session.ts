import mongoose, { Schema, Document } from 'mongoose';

export interface ISession extends Document {
  teacherId: mongoose.Types.ObjectId;
  className: string;
  subject: string;
  startTime: Date;
  endTime?: Date;
  status: 'active' | 'completed';
  location: {
    lat: number;
    lng: number;
    radius: number; // in meters
  };
  secretCode: string; // Dynamic QR/Code
  createdAt: Date;
}

const SessionSchema: Schema = new Schema({
  teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  className: { type: String, required: true },
  subject: { type: String, required: true },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date },
  status: { type: String, enum: ['active', 'completed'], default: 'active' },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    radius: { type: Number, default: 50 },
  },
  secretCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Session || mongoose.model<ISession>('Session', SessionSchema);
