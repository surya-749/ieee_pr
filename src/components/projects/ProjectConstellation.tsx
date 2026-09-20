"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const TOPOLOGY_DATA = [
  {
    id: 'ai',
    title: 'ARTIFICIAL INTELLIGENCE',
    layer: 'INTELLIGENCE LAYER',
    angle: -45,
    radius: 180,
    status: 'ONLINE',
    desc: 'Neural networks, computer vision, and predictive models.',
    color: '#00E5FF'
  },
  {
    id: 'robotics',
    title: 'ROBOTICS & HARDWARE',
    layer: 'PHYSICAL LAYER',
    angle: 135,
    radius: 220,
    status: 'ACTIVE',
    desc: 'Embedded systems, microcontrollers, and actuator control.',
    color: '#FF4500'
  },
  {
    id: 'software',
    title: 'SOFTWARE SYSTEMS',
    layer: 'APPLICATION LAYER',
    angle: 45,
    radius: 260,
    status: 'ONLINE',
    desc: 'Web architectures, APIs, and user interfaces.',
    color: '#00E5FF'
  },
  {
    id: 'data',
    title: 'DATA INFRASTRUCTURE',
    layer: 'CORE LAYER',
    angle: -135,
    radius: 140,
    status: 'SYNCING',
    desc: 'Cloud storage, telemetry routing, and databases.',
    color: '#A1A1AA'
  }
];

export default function ProjectConstellation() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="py-32 px-8 md:px-24 bg-[#030303] relative overflow-hidden border-t border-secondary/10">
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="font-mono text-secondary mb-8 flex items-center gap-4 text-xs">
          <span className="w-8 h-[1px] bg-secondary/50" />
          SYSTEM_TOPOLOGY
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex-shrink-0 flex items-center justify-center">
            
            <div className="absolute top-1/2 left-1/2">
              
              {[140, 180, 220, 260].map((radius, i) => (
                <div 
                  key={radius}
                  className="absolute rounded-full border border-secondary border-opacity-10 pointer-events-none"
                  style={{ 
                    width: radius * 2, 
                    height: radius * 2,
                    top: -radius,
                    left: -radius,
                    borderStyle: i % 2 === 0 ? 'dashed' : 'solid'
                  }}
                />
              ))}

              <div className="absolute flex flex-col items-center justify-center z-20" style={{ transform: 'translate(-50%, -50%)' }}>
                <div className="w-16 h-16 rounded-full bg-background border border-accent/50 flex items-center justify-center relative shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                  <div className="absolute inset-1 rounded-full border-2 border-accent border-dashed animate-[spin_10s_linear_infinite]" />
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                </div>
                <div className="mt-4 font-mono text-[10px] text-accent tracking-widest bg-background/80 px-2 py-1 border border-accent/20">
                  RAS_CORE
                </div>
              </div>

              <svg className="absolute top-0 left-0 overflow-visible pointer-events-none z-10" style={{ width: 0, height: 0 }}>
                {TOPOLOGY_DATA.map((node) => {
                  const rad = node.angle * (Math.PI / 180);
                  const x = Math.cos(rad) * node.radius;
                  const y = Math.sin(rad) * node.radius;
                  const isActive = activeNode === node.id;
                  
                  return (
                    <line 
                      key={node.id}
                      x1={0} 
                      y1={0} 
                      x2={x} 
                      y2={y} 
                      stroke={isActive ? node.color : "rgba(161, 161, 170, 0.2)"} 
                      strokeWidth={isActive ? "2" : "1"}
                      strokeDasharray={isActive ? "none" : "4 4"}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {TOPOLOGY_DATA.map((node) => {
                const rad = node.angle * (Math.PI / 180);
                const x = Math.cos(rad) * node.radius;
                const y = Math.sin(rad) * node.radius;

                const isActive = activeNode === node.id;
                const isHovered = activeNode !== null && !isActive;

                return (
                  <div 
                    key={node.id}
                    className="absolute z-30"
                    style={{
                      top: y,
                      left: x,
                    }}
                  >
                    <motion.div
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                      whileHover={{ scale: 1.1 }}
                      className="absolute flex items-center justify-center cursor-crosshair group"
                      style={{ transform: 'translate(-50%, -50%)' }}
                    >
                      <div className={"w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors bg-background " + (isActive ? "" : "border-secondary/30")} style={{ borderColor: isActive ? node.color : undefined }}>
                        <div className="w-2 h-2 rounded-full transition-colors" style={{ backgroundColor: isActive ? node.color : '#A1A1AA' }} />
                      </div>

                      <div 
                        className={"absolute top-8 whitespace-nowrap flex flex-col items-center transition-opacity duration-300 " + (isHovered ? 'opacity-20' : 'opacity-100')}
                      >
                        <div className="font-mono text-xs tracking-wider" style={{ color: isActive ? node.color : '#A1A1AA' }}>
                          {node.title}
                        </div>
                        <div className="font-mono text-[8px] text-secondary/50 mt-1 uppercase">
                          [{node.layer}]
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 w-full h-[400px] border border-secondary/20 bg-secondary/5 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            
            <div className="p-8 border-b border-secondary/10 flex justify-between items-center bg-background/50">
              <div className="font-mono text-xs text-secondary">TELEMETRY DATA</div>
              <div className="font-mono text-[10px] text-accent border border-accent/30 px-2 py-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                LIVE FEED
              </div>
            </div>

            <div className="flex-1 p-8 flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                {activeNode ? (
                  TOPOLOGY_DATA.map(node => node.id === activeNode && (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full"
                    >
                      <div className="font-mono text-[10px] mb-2" style={{ color: node.color }}>{node.layer}</div>
                      <h3 className="text-3xl font-display text-primary mb-6">{node.title}</h3>
                      <p className="font-mono text-sm text-secondary/80 leading-relaxed mb-8">
                        {node.desc}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border border-secondary/10 p-4 bg-background/50">
                          <div className="font-mono text-[10px] text-secondary mb-1">SYSTEM STATUS</div>
                          <div className="font-mono text-sm" style={{ color: node.color }}>{node.status}</div>
                        </div>
                        <div className="border border-secondary/10 p-4 bg-background/50">
                          <div className="font-mono text-[10px] text-secondary mb-1">NODE RADIUS</div>
                          <div className="font-mono text-sm text-primary">{node.radius}u</div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center font-mono text-secondary/40 flex flex-col items-center"
                  >
                    <div className="w-12 h-12 border border-secondary/20 rounded-full flex items-center justify-center mb-4">
                      <span className="w-1 h-1 bg-secondary/40 rounded-full" />
                    </div>
                    <div>HOVER OVER A SYSTEM NODE<br/>TO ACCESS TELEMETRY</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="absolute bottom-0 right-0 w-8 h-8 border-t border-l border-secondary/20" />
            <div className="absolute top-0 left-0 w-8 h-8 border-b border-r border-secondary/20" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
