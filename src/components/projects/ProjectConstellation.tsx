"use client";

import { motion } from 'framer-motion';

export default function ProjectConstellation() {
  return (
    <section className="py-24 px-8 md:px-24 bg-[#050505] relative overflow-hidden border-t border-secondary/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.05),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="font-mono text-secondary mb-16 flex items-center gap-4 text-xs">
          <span className="w-8 h-[1px] bg-secondary/50" />
          SYSTEM_TOPOLOGY
        </div>

        <div className="h-[500px] w-full relative flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" overflow="visible">
            <motion.path 
              d="M 30% 30% L 50% 20% L 70% 40% L 50% 70% L 30% 60% Z" 
              fill="none" 
              stroke="rgba(161, 161, 170, 0.15)" 
              strokeWidth="1"
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
            <motion.path 
              d="M 30% 30% L 70% 40%" 
              fill="none" 
              stroke="rgba(161, 161, 170, 0.15)" 
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
          </svg>

          <Node x="30%" y="30%" label="Robotics" domain="HARDWARE" />
          <Node x="50%" y="20%" label="AI" domain="CORE" active />
          <Node x="70%" y="40%" label="Healthcare" domain="DATA" />
          <Node x="50%" y="70%" label="NLP" domain="SOFTWARE" />
          <Node x="30%" y="60%" label="Navigation" domain="DESIGN" />
        </div>
      </div>
    </section>
  );
}

function Node({ x, y, label, domain, active = false }: { x: string, y: string, label: string, domain: string, active?: boolean }) {
  return (
    <motion.div 
      className="absolute flex flex-col items-center gap-2 group cursor-crosshair"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="font-mono text-[10px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 whitespace-nowrap bg-background border border-secondary/20 px-2 py-1">
        [{domain}]
      </div>
      <div className={"w-3 h-3 rounded-full border-2 transition-colors " + (active ? 'bg-accent border-accent shadow-[0_0_15px_rgba(0,229,255,0.6)]' : 'bg-background border-secondary/50 group-hover:border-accent')} />
      <div className="font-mono text-xs mt-2 text-secondary group-hover:text-primary transition-colors">{label}</div>
    </motion.div>
  );
}
