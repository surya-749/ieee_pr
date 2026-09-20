"use client";

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import SensorMap from '../robotics/SensorMap';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 bg-background overflow-hidden pt-20">
      <SensorMap />
      
      <div className="z-10 max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-secondary mb-6 flex flex-col md:flex-row md:items-center gap-4"
        >
          <span className="flex items-center gap-2 text-accent border border-accent/30 px-3 py-1 bg-accent/5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            RAS CORE ACTIVE
          </span>
          <span className="hidden md:inline text-secondary/50">/</span>
          <span>VIT CHENNAI</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-[5.5rem] font-display font-bold tracking-tight mb-8 leading-[1.1] text-primary"
        >
          BUILD.<br />
          <span className="text-secondary">AUTOMATE.</span><br />
          INNOVATE.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mb-12"
        >
          A multidisciplinary community building technology across robotics, automation, software, AI and IoT.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 font-mono text-sm"
        >
          <a href="#about" className="group relative flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 hover:bg-accent transition-colors duration-300 overflow-hidden">
            <span className="relative z-10">[ EXPLORE RAS ]</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
          </a>
          <a href="#recruit" className="group relative flex items-center justify-center gap-2 border border-secondary/30 text-primary px-8 py-4 hover:border-accent hover:text-accent transition-colors duration-300">
            [ JOIN THE TEAM ]
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-accent transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-transparent group-hover:border-accent transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
