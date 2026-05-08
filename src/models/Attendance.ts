import mongoose, { Schema, Document } from 'mongoose';

export interface IAttendance extends Document {
  sessionId: mongoose.Types.ObjectId;
  studentId: mongoose.Types.ObjectId;
  checkInTime: Date;
  checkOutTime?: Date;
  status: 'present' | 'absent' | 'proxy_suspected';
  deviceFingerprint: string;
}

const AttendanceSchema: Schema = new Schema({
  sessionId: { type: Schema.Types.ObjectId, ref: 'Session', required: true },
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  checkInTime: { type: Date, default: Date.now },
  checkOutTime: { type: Date },
  status: { type: String, enum: ['present', 'absent', 'proxy_suspected'], default: 'present' },
  deviceFingerprint: { type: String }, // For checking multiple check-ins from same device
});

export default mongoose.models.Attendance || mongoose.model<IAttendance>('Attendance', AttendanceSchema);
