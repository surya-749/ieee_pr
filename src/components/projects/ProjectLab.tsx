"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data/projects';

export default function ProjectLab() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 px-8 md:px-24 border-t border-secondary/10 relative bg-[#08090B]">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-secondary mb-16 flex items-center gap-4 text-xs">
          <span className="w-8 h-[1px] bg-secondary/50" />
          PROJECT_LAB
        </div>

        <div className="space-y-8">
          {PROJECTS.map((proj) => (
            <div 
              key={proj.id}
              className="border border-secondary/20 hover:border-accent/50 transition-colors group bg-background/50 backdrop-blur"
            >
              {/* Header/Teaser */}
              <button 
                onClick={() => setActiveProject(activeProject === proj.id ? null : proj.id)}
                className="w-full text-left p-8 flex flex-col md:flex-row md:items-center justify-between gap-8"
              >
                <div>
                  <div className="font-mono text-[10px] text-secondary mb-2">PROJECT_{proj.id}</div>
                  <h3 className="text-2xl font-display mb-1 text-primary group-hover:text-accent transition-colors">{proj.name}</h3>
                  <div className="font-mono text-xs text-secondary">{proj.subtitle}</div>
                </div>
                <div className="font-mono text-[10px] text-secondary border border-secondary/20 px-4 py-2 group-hover:border-accent group-hover:text-accent transition-colors">
                  {activeProject === proj.id ? 'CLOSE SYSTEM' : 'ACCESS RECORD'}
                </div>
              </button>

              {/* Expansion Detail */}
              <AnimatePresence>
                {activeProject === proj.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 border-t border-secondary/20 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-8 font-mono text-sm">
                        
                        {/* Status Panel */}
                        <div className="md:col-span-3 space-y-6">
                          <div>
                            <div className="text-[10px] text-secondary mb-1">SYSTEM STATUS</div>
                            <div className="text-accent flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" /> ACTIVE
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] text-secondary mb-1">COMPONENTS</div>
                            <div className="text-primary space-y-1">
                              {proj.parts.map((p, i) => <div key={i}>» {p}</div>)}
                            </div>
                          </div>
                        </div>

                        {/* Engineering Case Study */}
                        <div className="md:col-span-9 space-y-12">
                          <div className="border border-secondary/20 p-6 bg-secondary/5 relative">
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-secondary" />
                            <div className="text-[10px] text-accent mb-4">PROBLEM STATEMENT</div>
                            <p className="text-secondary leading-relaxed">{proj.problem}</p>
                          </div>

                          <div>
                            <div className="text-[10px] text-accent mb-6">SYSTEM APPROACH</div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                              {proj.approach.map((step, i) => (
                                <div key={i} className="flex flex-col md:flex-row items-center gap-4 w-full">
                                  <div className="border border-secondary/30 px-4 py-3 flex-1 text-center text-primary text-xs w-full">
                                    {step}
                                  </div>
                                  {i < proj.approach.length - 1 && <div className="text-secondary/50">→</div>}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="text-[10px] text-accent mb-4">FINAL OUTPUT</div>
                            <p className="text-primary">{proj.result}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
