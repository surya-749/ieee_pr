"use client";

import { motion } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 bg-grid overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background pointer-events-none" />
      
      <div className="z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-secondary mb-6 flex flex-col md:flex-row md:items-center gap-4"
        >
          <span className="flex items-center gap-2 text-accent">
            <Terminal size={16} /> IEEE RAS
          </span>
          <span className="hidden md:inline text-secondary/50">/</span>
          <span>VIT CHENNAI</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-tight"
        >
          BUILD.<br />
          <span className="text-secondary">AUTOMATE.</span><br />
          INNOVATE.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-secondary max-w-xl mb-12"
        >
          A multidisciplinary community building technology at the intersection of robotics, software, AI and automation.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 font-mono text-sm"
        >
          <a href="#domains" className="group flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 hover:bg-accent transition-colors duration-300">
            [ EXPLORE RAS ]
          </a>
          <a href="#recruit" className="group flex items-center justify-center gap-2 border border-secondary/30 text-primary px-8 py-4 hover:border-accent hover:text-accent transition-colors duration-300">
            [ JOIN THE TEAM ]
          </a>
        </motion.div>
      </div>

      {/* Futuristic Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-12 top-1/3 hidden lg:block opacity-20 pointer-events-none"
      >
        <div className="w-64 h-64 border border-accent rounded-full relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-accent" />
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-highlight rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
