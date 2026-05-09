"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Terminal, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveLink,
  githubLink,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden group hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06060c] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Code className="w-4 h-4 text-primary-400" />
          <span className="text-xs font-semibold tracking-wider text-primary-400 uppercase">
            Project
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary-400 transition-colors"
            >
              <Terminal className="w-4 h-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
