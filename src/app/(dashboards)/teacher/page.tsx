"use client";

import { ScanFace, Users, Clock } from "lucide-react";
import Link from "next/link";

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Teacher Hub</h1>
          <p className="text-gray-400">Manage your classes and start live attendance sessions.</p>
        </div>
        <Link 
          href="/teacher/live"
          className="bg-gradient-to-r from-accent-500 to-accent-400 text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-accent-500/25 transition-all active:scale-[0.98] flex items-center"
        >
          <ScanFace className="w-5 h-5 mr-2" />
          Initialize Session
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-primary-400 mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Today's Attendance</p>
              <h2 className="text-2xl font-bold text-white">84%</h2>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center mb-4">
            <Clock className="w-8 h-8 text-accent-400 mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Next Class</p>
              <h2 className="text-xl font-bold text-white">Advanced Algorithms</h2>
              <p className="text-xs text-gray-500 mt-1">Starts in 45 mins</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-white mb-4">Recent Sessions</h3>
        <div className="glass-panel rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/5 text-gray-300">
              <tr>
                <th className="px-6 py-4 font-medium">Class Name</th>
                <th className="px-6 py-4 font-medium">Subject</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Attendance</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">CS-401</td>
                <td className="px-6 py-4 text-white">Data Structures</td>
                <td className="px-6 py-4">Today, 10:00 AM</td>
                <td className="px-6 py-4">42 / 45</td>
                <td className="px-6 py-4"><span className="text-green-400 bg-green-400/10 px-2 py-1 rounded-full text-xs">Completed</span></td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">CS-402</td>
                <td className="px-6 py-4 text-white">Machine Learning</td>
                <td className="px-6 py-4">Yesterday, 2:00 PM</td>
                <td className="px-6 py-4">38 / 40</td>
                <td className="px-6 py-4"><span className="text-green-400 bg-green-400/10 px-2 py-1 rounded-full text-xs">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
