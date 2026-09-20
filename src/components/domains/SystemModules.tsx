"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOMAINS } from '@/data/domains';

export default function SystemModules() {
  const [activeId, setActiveId] = useState(DOMAINS[0].id);

  return (
    <section id="domains" className="py-32 px-8 md:px-24 border-t border-secondary/10 bg-[#08090B] relative">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-secondary mb-12 flex items-center gap-4 text-xs">
          <span className="w-8 h-[1px] bg-secondary/50" />
          SYSTEM_MODULES
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-col font-mono text-sm border-l border-secondary/20">
            {DOMAINS.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setActiveId(domain.id)}
                className={"text-left py-6 pl-6 relative transition-colors " + (activeId === domain.id ? 'text-primary bg-secondary/5' : 'text-secondary/50 hover:text-secondary hover:bg-secondary/5')}
              >
                {activeId === domain.id && (
                  <motion.div 
                    layoutId="active-module-border" 
                    className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-accent" 
                  />
                )}
                <div className="text-[10px] mb-1 opacity-50">MODULE_{domain.id}</div>
                {domain.name}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 border border-secondary/20 p-8 md:p-12 bg-background/50 relative overflow-hidden group min-h-[450px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {DOMAINS.map((domain) => domain.id === activeId && (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="font-mono text-xs text-secondary mb-8 flex justify-between items-center border-b border-secondary/20 pb-4">
                    <span>SYSTEM: {domain.name}</span>
                    <span className="text-accent flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                      ONLINE
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl text-primary mb-12">{domain.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1">
                    <div>
                      <div className="font-mono text-[10px] text-secondary mb-4 tracking-widest">RESPONSIBILITIES</div>
                      <div className="space-y-4">
                        {domain.desc.map((item, i) => (
                          <div key={i} className="flex items-start gap-4 font-mono text-sm text-secondary/90">
                            <span className="text-accent mt-1">»</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-secondary mb-4 tracking-widest">CORE TECHNOLOGIES</div>
                      <div className="font-mono text-sm text-primary leading-loose">
                        {domain.tech.split(' / ').map(t => (
                          <div key={t} className="inline-block border border-secondary/30 px-3 py-1 mr-2 mb-2 bg-secondary/5">{t}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-secondary/50 group-hover:border-accent transition-colors" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-secondary/50 group-hover:border-accent transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-secondary/50 group-hover:border-accent transition-colors" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-secondary/50 group-hover:border-accent transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
}
