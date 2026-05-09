"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent-400" />
          <span className="text-xs font-semibold tracking-widest text-accent-400 uppercase">
            Showcase
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8"
        >
          Building Digital <br />
          <span className="text-gradient">Masterpieces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          A collection of high-fidelity applications, intelligent systems, and experimental interfaces 
          crafted with precision and passion.
        </motion.p>
      </div>
    </section>
  );
}
