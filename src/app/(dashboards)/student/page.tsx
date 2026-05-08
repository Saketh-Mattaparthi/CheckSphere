"use client";

import { ScanFace, Calendar, Activity } from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Student Portal</h1>
          <p className="text-gray-400">Track your attendance and join live classes.</p>
        </div>
        <Link 
          href="/student/join"
          className="bg-gradient-to-r from-primary-500 to-primary-400 text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all active:scale-[0.98] flex items-center shadow-[0_0_20px_rgba(139,92,246,0.3)]"
        >
          <ScanFace className="w-5 h-5 mr-2" />
          Join Live Session
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center mb-4">
            <Activity className="w-8 h-8 text-primary-400 mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Overall Attendance</p>
              <h2 className="text-2xl font-bold text-white">92.5%</h2>
            </div>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary-400 w-[92.5%]"></div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center mb-4">
            <Calendar className="w-8 h-8 text-accent-400 mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Classes Attended</p>
              <h2 className="text-2xl font-bold text-white">48 / 52</h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="glass-panel p-4 rounded-xl flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">Data Structures</h4>
              <p className="text-sm text-gray-400">CS-401 • Prof. Alan Turing</p>
            </div>
            <div className="text-right">
              <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-xs font-medium">Present</span>
              <p className="text-xs text-gray-500 mt-2">Today, 10:02 AM</p>
            </div>
          </div>
          <div className="glass-panel p-4 rounded-xl flex items-center justify-between border border-red-500/20 bg-red-500/5">
            <div>
              <h4 className="text-white font-medium">Advanced Algorithms</h4>
              <p className="text-sm text-gray-400">CS-405 • Prof. Grace Hopper</p>
            </div>
            <div className="text-right">
              <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-xs font-medium">Absent</span>
              <p className="text-xs text-gray-500 mt-2">Yesterday, 11:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
