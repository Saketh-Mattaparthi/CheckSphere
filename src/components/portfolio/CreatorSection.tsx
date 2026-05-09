"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";

// Custom Social Icons since some lucide-react versions exclude them
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function CreatorSection() {
  return (
    <section className="container mx-auto px-6 mb-32">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <h2 className="text-2xl font-bold text-white tracking-tight">Meet the Creator</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile Image - Circular */}
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-primary-500/30 p-2 relative overflow-hidden group">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center overflow-hidden">
                <span className="text-4xl md:text-6xl font-black text-white/50 group-hover:scale-110 transition-transform duration-500">SM</span>
                {/* Placeholder for actual image: <img src="/creator.jpg" alt="Saketh Mattaparthi" className="w-full h-full object-cover" /> */}
              </div>
            </div>
            {/* Status Indicator */}
            <div className="absolute bottom-2 right-2 w-4 h-4 md:w-6 md:h-6 bg-emerald-500 rounded-full border-4 border-[#0a0a0b] z-20" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">Saketh Mattaparthi</h3>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-primary-400 font-medium">
                <span>Lead Developer & AI Researcher</span>
                <span className="hidden md:block text-white/20">•</span>
                <span className="flex items-center gap-1.5 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  India
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
              CheckSphere was developed to demonstrate the power of intelligent presence tracking and geofencing in education. 
              By combining modern web architectures with real-time location intelligence, this project aims to bridge the gap 
              between administrative efficiency and technological transparency.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <a 
                href="https://github.com/Saketh-Mattaparthi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors group"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="font-bold">GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
              </a>
              <a 
                href="https://www.linkedin.com/in/saketh-mattaparthi-563514321/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors group"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span className="font-bold">LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
              </a>
              <a 
                href="mailto:saketh.mattaparthi@gmail.com" 
                className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="font-bold">Email</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
