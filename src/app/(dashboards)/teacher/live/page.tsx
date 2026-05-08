"use client";

import { useState } from "react";
import { ScanFace, MapPin, Users, ShieldCheck, PlayCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TeacherLiveSession() {
  const [sessionActive, setSessionActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [className, setClassName] = useState("CS-401");
  const [subject, setSubject] = useState("Data Structures");
  const [secretCode, setSecretCode] = useState("");
  const [studentsJoined, setStudentsJoined] = useState(0);

  const startSession = async () => {
    setLoading(true);
    // Simulate getting location
    setTimeout(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("/api/session/start", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            className,
            subject,
            lat: 37.7749, // simulated coordinates
            lng: -122.4194,
            radius: 50 // 50 meters
          })
        });

        const data = await res.json();
        if (res.ok) {
          setSecretCode(data.session.secretCode);
          setSessionActive(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Live Session</h1>
          <p className="text-gray-400">Initialize and monitor real-time attendance.</p>
        </div>
        {sessionActive && (
          <div className="flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full animate-pulse">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            Session Active
          </div>
        )}
      </div>

      {!sessionActive ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 text-center"
        >
          <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <PlayCircle className="w-10 h-10 text-primary-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Initialize Perimeter</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Starting a live session will lock the attendance geofence to your current coordinates. Ensure you are physically present in the classroom.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8 text-left">
            <div>
              <label className="text-xs text-gray-500 ml-1">Class ID</label>
              <input 
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:border-primary-400 focus:outline-none" 
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 ml-1">Subject</label>
              <input 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:border-primary-400 focus:outline-none" 
              />
            </div>
          </div>

          <button
            onClick={startSession}
            disabled={loading}
            className="bg-gradient-to-r from-primary-500 to-primary-400 text-white font-medium py-3 px-8 rounded-xl hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-70 flex items-center mx-auto"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <ScanFace className="w-5 h-5 mr-2" />}
            {loading ? "Acquiring Coordinates..." : "Lock Coordinates & Start"}
          </button>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass-card p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-medium text-gray-400 mb-2">Dynamic Session Code</h3>
            <div className="text-6xl font-black text-white tracking-widest mb-6">
              {secretCode}
            </div>
            <p className="text-sm text-gray-500">Students must enter this code inside the classroom perimeter to mark attendance.</p>
          </div>

          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-medium flex items-center">
                  <Users className="w-5 h-5 text-primary-400 mr-2" />
                  Live Counter
                </h3>
                <span className="text-2xl font-bold text-white">{studentsJoined}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary-400" style={{ width: `${(studentsJoined / 45) * 100}%` }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">out of 45 enrolled</p>
            </div>

            <div className="glass-panel p-6 rounded-xl">
               <h3 className="text-white font-medium flex items-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-green-400 mr-2" />
                  Integrity Log
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between items-center text-gray-400">
                    <span>Geofence Status</span>
                    <span className="text-green-400">Locked (50m)</span>
                  </li>
                  <li className="flex justify-between items-center text-gray-400">
                    <span>Proxy Detection</span>
                    <span className="text-green-400">Active</span>
                  </li>
                  <li className="flex justify-between items-center text-gray-400">
                    <span>Suspicious Checks</span>
                    <span className="text-white">0</span>
                  </li>
                </ul>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
