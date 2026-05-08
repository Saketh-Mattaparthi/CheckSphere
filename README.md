# CheckSphere 🚀

CheckSphere is a smart attendance system built with **Next.js 15**, **Prisma**, and **PostgreSQL**. It uses GPS (Geofencing) to make sure students are actually in the classroom, preventing proxy attendance and making tracking easy for everyone.

## 🌟 Features

- **Multi-Role Dashboards**: Custom portals for Admins, Teachers, and Students.
- **Geofenced Check-ins**: Students can only mark attendance if their physical location is within the teacher-defined perimeter.
- **Dynamic Session Codes**: Live rotating codes prevent sharing outside the classroom.
- **Anti-Proxy Integrity**: Device fingerprinting prevents multiple check-ins from the same device.
- **AntiGravity Design System**: A premium, futuristic glassmorphic UI using Tailwind CSS and Framer Motion.
- **Real-Time Analytics**: Visual trends using Recharts.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: PostgreSQL (Cloud-hosted on Neon.tech)
- **ORM**: Prisma (Type-safe SQL access)
- **Styling**: Tailwind CSS v4 & Framer Motion
- **Auth**: JWT (JSON Web Tokens) with Role-Based Access Control

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18+) installed. You will also need a PostgreSQL database URL (Neon.tech recommended).

### 2. Environment Variables
Create a `.env` file in the root directory and add:
```env
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

### 3. Installation
Install the dependencies and sync your database:
```bash
npm install
npx prisma generate
npx prisma db push
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
