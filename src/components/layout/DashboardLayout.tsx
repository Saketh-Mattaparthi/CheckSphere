"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Settings, 
  LogOut,
  ScanFace,
  ShieldCheck,
  Menu,
  X
} from "lucide-react";

const getNavigation = (role: string) => {
  const base = [
    { name: "Dashboard", href: `/${role}`, icon: LayoutDashboard },
  ];

  if (role === "admin") {
    return [
      ...base,
      { name: "System Analytics", href: "/admin/analytics", icon: ShieldCheck },
      { name: "Users", href: "/admin/users", icon: Users },
      { name: "Settings", href: "/admin/settings", icon: Settings },
    ];
  } else if (role === "teacher") {
    return [
      ...base,
      { name: "My Classes", href: "/teacher/classes", icon: Calendar },
      { name: "Live Session", href: "/teacher/live", icon: ScanFace },
    ];
  } else {
    return [
      ...base,
      { name: "Attendance Log", href: "/student/log", icon: Calendar },
      { name: "Join Class", href: "/student/join", icon: ScanFace },
    ];
  }
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/login");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [router]);

  if (!user) return null; // Loading state can go here

  const navigation = getNavigation(user.role);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : 0 }}
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 glass-panel border-r border-white/10 z-50 flex flex-col transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <ScanFace className="w-6 h-6 text-primary-400 mr-3" />
          <span className="text-xl font-bold text-gradient">SmartPresence</span>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-primary-500/10 text-primary-400 border border-primary-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <item.icon className={`w-5 h-5 mr-3 ${isActive ? "text-primary-400" : ""}`} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center px-3 py-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
              {user.name.charAt(0)}
            </div>
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-white truncate">{user.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2 text-red-400 hover:bg-red-400/10 hover:text-red-300 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Disconnect</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden h-16 flex items-center justify-between px-4 glass-panel border-b border-white/10 sticky top-0 z-30">
          <div className="flex items-center">
            <ScanFace className="w-6 h-6 text-primary-400 mr-2" />
            <span className="text-lg font-bold text-gradient">SmartPresence</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
