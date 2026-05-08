# SmartPresence Pro 🚀

SmartPresence Pro is a futuristic, full-stack intelligence system for contactless classroom attendance. It eliminates proxy attendance through a combination of geofencing, dynamic QR code verification, and device fingerprinting.

## 🌟 Features

- **Multi-Role Dashboards**: Custom portals for Admins, Teachers, and Students.
- **Geofenced Check-ins**: Students can only mark attendance if their physical location is within the teacher-defined perimeter.
- **Dynamic Session Codes**: Live rotating codes prevent sharing outside the classroom.
- **Anti-Proxy Integrity**: Device fingerprinting prevents multiple check-ins from the same device.
- **AntiGravity Design System**: A premium, futuristic glassmorphic UI using Tailwind CSS and Framer Motion.
- **Real-Time Analytics**: Visual trends using Recharts.

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (App Router), React, Tailwind CSS v4, Framer Motion, Recharts
- **Backend**: Next.js API Routes (Node.js/Express-like environment)
- **Database**: MongoDB (Mongoose)
- **Authentication**: Custom JWT Authentication with Role-Based Access Control

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed. You also need a MongoDB database (local or Atlas).

### 2. Environment Variables
Create a `.env.local` file in the root directory and add the following:
```env
MONGODB_URI=mongodb://localhost:27017/smartpresence
JWT_SECRET=your_super_secret_jwt_key
```

### 3. Installation
Install the dependencies:
```bash
npm install
```

### 4. Running the Development Server
Start the Next.js development server:
```bash
npm run dev
```
Navigate to `http://localhost:3000` to view the application.

## 👥 Usage Guide

1. **Initialize Setup**: Go to `/register` and create an account. You can choose to register as an `admin`, `teacher`, or `student`.
2. **Access Terminal**: Go to `/login` to access your respective dashboard.
3. **Teacher Flow**: Navigate to "Initialize Session", set the class details, and start the live session. A code will appear.
4. **Student Flow**: Navigate to "Join Live Session", ensure you are physically near the coordinates, and enter the code displayed on the teacher's screen.
