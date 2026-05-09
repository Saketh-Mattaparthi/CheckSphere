"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScanFace, ShieldCheck, Activity, ChevronRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-6">
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center mb-6">
          <ScanFace className="w-16 h-16 text-primary-400 mr-4" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Intelligence for <br/>
          <span className="text-gradient">Classroom Presence</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          CheckSphere utilizes dynamic Geofencing, multi-layer verification, and contactless intelligence to eliminate proxy attendance.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/login" className="w-full sm:w-auto bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition-all flex items-center justify-center hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Access Terminal
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
          <Link href="/portfolio" className="w-full sm:w-auto glass-panel text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all flex items-center justify-center hover:border-white/20">
            View Portfolio
          </Link>
          <Link href="/register" className="w-full sm:w-auto glass-panel text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all flex items-center justify-center hover:border-white/20">
            Initialize Setup
          </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 text-center"
        >
          <div className="bg-primary-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Activity className="w-8 h-8 text-primary-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Live Proximity</h3>
          <p className="text-gray-400 text-sm">Geofenced check-ins dynamically authenticate students inside the classroom perimeter.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card p-8 text-center"
        >
          <div className="bg-accent-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-accent-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Anti-Proxy Integrity</h3>
          <p className="text-gray-400 text-sm">Randomized verification prompts and device fingerprinting block fraudulent attendance.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-card p-8 text-center"
        >
          <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <ScanFace className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Dynamic QR Access</h3>
          <p className="text-gray-400 text-sm">Rotating cryptographic QR codes on the teacher's dashboard ensure real-time attendance.</p>
        </motion.div>
      </div>

    </div>
  );
}
