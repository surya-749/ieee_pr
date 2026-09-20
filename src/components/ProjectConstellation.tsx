"use client";

import { motion } from 'framer-motion';

export default function ProjectConstellation() {
  return (
    <section className="py-32 px-8 md:px-24 border-t border-secondary/10 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="font-mono text-secondary mb-16 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-secondary/50" />
          PROJECT_CONSTELLATION
        </div>

        <div className="h-[600px] w-full border border-secondary/20 relative flex items-center justify-center bg-background/80 backdrop-blur">
          {/* Abstract Constellation Representation */}
          <svg className="absolute inset-0 w-full h-full" overflow="visible">
            {/* Lines */}
            <motion.path 
              d="M 30% 30% L 50% 20% L 70% 40% L 50% 70% L 30% 60% Z" 
              fill="none" 
              stroke="rgba(161, 161, 170, 0.2)" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path 
              d="M 50% 20% L 50% 70%" 
              fill="none" 
              stroke="rgba(0, 229, 255, 0.2)" 
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>

          {/* Nodes */}
          <Node x="30%" y="30%" label="Robot" domain="HARDWARE" />
          <Node x="50%" y="20%" label="AI" domain="CORE" />
          <Node x="70%" y="40%" label="Heart" domain="DATA" />
          <Node x="50%" y="70%" label="Document" domain="SOFTWARE" />
          <Node x="30%" y="60%" label="Hospital" domain="DESIGN" />
        </div>
      </div>
    </section>
  );
}

function Node({ x, y, label, domain }: { x: string, y: string, label: string, domain: string }) {
  return (
    <motion.div 
      className="absolute flex flex-col items-center gap-2 group cursor-pointer"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="font-mono text-[10px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 whitespace-nowrap">
        [{domain}]
      </div>
      <div className="w-4 h-4 rounded-full bg-primary border-2 border-background group-hover:bg-accent transition-colors shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.8)]" />
      <div className="font-mono text-xs mt-2 group-hover:text-accent transition-colors">{label}</div>
    </motion.div>
  );
}
