"use client";

import { Users, ShieldCheck, Activity } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', attendance: 85, proxies: 2 },
  { name: 'Tue', attendance: 88, proxies: 1 },
  { name: 'Wed', attendance: 92, proxies: 0 },
  { name: 'Thu', attendance: 90, proxies: 3 },
  { name: 'Fri', attendance: 95, proxies: 0 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">System Overview</h1>
      <p className="text-gray-400">Monitor overall presence intelligence and system health.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="glass-card p-6">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-primary-400 mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Total Active Students</p>
              <h2 className="text-2xl font-bold text-white">1,248</h2>
            </div>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary-400 w-[80%]"></div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center mb-4">
            <Activity className="w-8 h-8 text-accent-400 mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Live Sessions</p>
              <h2 className="text-2xl font-bold text-white">42</h2>
            </div>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-accent-400 w-[42%]"></div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center mb-4">
            <ShieldCheck className="w-8 h-8 text-green-400 mr-4" />
            <div>
              <p className="text-gray-400 text-sm">System Integrity</p>
              <h2 className="text-2xl font-bold text-white">99.9%</h2>
            </div>
          </div>
          <p className="text-xs text-green-400 mt-2">Zero proxy detections today</p>
        </div>
      </div>
      
      <div className="glass-card p-6 h-[400px] mt-8">
        <h3 className="text-white font-semibold mb-6">Attendance & Proxy Trends</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(6, 6, 12, 0.8)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area type="monotone" dataKey="attendance" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorAttendance)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
