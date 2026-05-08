"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fingerprint, Lock, Mail, User, ShieldCheck } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    studentId: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to register");

      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md glass-card p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-primary-400"></div>
        
        <div className="text-center mb-6">
          <ShieldCheck className="w-12 h-12 text-accent-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gradient mb-2">Initialize Profile</h1>
          <p className="text-gray-400">Create your SmartPresence identity</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-all"
                placeholder="Neo"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-all"
                placeholder="neo@matrix.edu"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-300 ml-1">Role</label>
              <select
                name="role"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-white focus:outline-none focus:border-accent-400 transition-all appearance-none"
                onChange={handleChange}
                value={formData.role}
              >
                <option value="student" className="bg-gray-900">Student</option>
                <option value="teacher" className="bg-gray-900">Teacher</option>
                <option value="admin" className="bg-gray-900">Admin</option>
              </select>
            </div>

            {formData.role === "student" && (
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300 ml-1">Student ID</label>
                <input
                  type="text"
                  name="studentId"
                  required={formData.role === "student"}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-400 transition-all"
                  placeholder="ID-1337"
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="space-y-1 pt-1">
            <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="password"
                name="password"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-all"
                placeholder="••••••••"
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-gradient-to-r from-accent-500 to-accent-400 text-white font-medium py-3 rounded-xl hover:shadow-lg hover:shadow-accent-500/25 transition-all active:scale-[0.98] disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              "Complete Setup"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Already have an identity?{" "}
          <Link href="/login" className="text-accent-400 hover:text-accent-300 transition-colors">
            Access Terminal
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
