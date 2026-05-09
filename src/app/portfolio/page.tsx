"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/portfolio/ProjectCard";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import CreatorSection from "@/components/portfolio/CreatorSection";
import Link from "next/link";
import { ArrowLeft, Cpu, Globe, Database, Layout } from "lucide-react";

const projects = [
  {
    title: "CheckSphere",
    description: "Intelligence for Classroom Presence. A next-generation attendance system using dynamic geofencing, device fingerprinting, and cryptographic QR codes to eliminate proxy attendance.",
    image: "/projects/checksphere.png",
    tags: ["Next.js 15", "Prisma", "PostgreSQL", "Tailwind CSS", "Geofencing"],
    liveLink: "https://checksphere.vercel.app",
    githubLink: "https://github.com/Saketh-Mattaparthi/CheckSphere"
  },
  {
    title: "LuminaLeaf XAI",
    description: "Explainable AI for Medicinal Plant Identification. A deep learning application that identifies botanical species and provides transparent reasoning for its predictions using XAI techniques.",
    image: "/projects/luminaleaf.png",
    tags: ["React", "Python", "TensorFlow", "XAI", "FastAPI"],
    liveLink: "https://luminaleaf-xai-1.onrender.com",
    githubLink: "https://github.com/Saketh-Mattaparthi/Botanical-AI"
  }
];

const skills = [
  { name: "Frontend", icon: Layout, techs: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", icon: Cpu, techs: ["Node.js", "REST APIs", "JWT Auth", "Bcrypt"] },
  { name: "Database", icon: Database, techs: ["PostgreSQL", "MongoDB", "Prisma ORM", "Neon SQL"] },
  { name: "Global", icon: Globe, techs: ["Vercel", "CI/CD", "Edge Runtime", "SEO Optimization"] }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pb-24">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <Link href="/" className="glass-panel px-4 py-2 flex items-center gap-2 text-sm font-medium text-white hover:bg-white/10 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Link>
        </div>
      </nav>

      <PortfolioHero />

      {/* Projects Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Selected Work</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Tech Stack</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="bg-primary-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.techs.map((tech) => (
                  <li key={tech} className="text-sm text-gray-400 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent-400" />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Creator Section */}
      <CreatorSection />
    </main>
  );
}
