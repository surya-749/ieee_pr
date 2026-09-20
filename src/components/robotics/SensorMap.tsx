"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SensorMap() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)"
        }}
      />

      <div className="absolute top-1/2 left-3/4 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/10 opacity-50 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full border border-secondary/10 flex items-center justify-center">
          <div className="w-[400px] h-[400px] rounded-full border border-accent/20 flex items-center justify-center relative">
            <motion.div
              className="absolute top-1/2 left-1/2 w-[200px] h-[200px] border-t border-accent rounded-full origin-top-left"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ background: 'conic-gradient(from 0deg, rgba(0,229,255,0.1), transparent 45deg)' }}
            />
            <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
          </div>
        </div>
      </div>

    </div>
  );
}
