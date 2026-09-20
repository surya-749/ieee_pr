"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    id: '01',
    name: 'LINE FOLLOWER',
    subtitle: 'AUTONOMOUS NAVIGATION SYSTEM',
    parts: ['Sensors', 'Control Logic', 'Motor Control', 'Autonomous Navigation'],
    problem: 'How can a robot autonomously navigate a predefined path?',
    approach: ['IR Sensors', 'Decision Logic', 'Motor Controller', 'Robot'],
    result: 'Autonomous path-following robot'
  },
  {
    id: '02',
    name: 'HOSPITAL LOCATOR',
    subtitle: 'EMERGENCY ROUTING SYSTEM',
    parts: ['Geolocation', 'Pathfinding', 'API Integration', 'UI/UX'],
    problem: 'How to find the fastest route to the nearest hospital in an emergency?',
    approach: ['User Location', 'Maps API', 'Dijkstra Algorithm', 'React Native App'],
    result: 'Real-time emergency navigation app'
  }
];

export default function ProjectLab() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section className="py-32 px-8 md:px-24 border-t border-secondary/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-secondary mb-16 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-secondary/50" />
          PROJECT_LAB
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj) => (
            <div 
              key={proj.id}
              className="border border-secondary/20 p-8 hover:border-accent/50 transition-colors group cursor-pointer bg-background/50 backdrop-blur"
              onClick={() => setActiveProject(activeProject === proj.id ? null : proj.id)}
            >
              <div className="font-mono text-xs text-secondary mb-4">PROJECT {proj.id}</div>
              <h3 className="text-2xl font-display mb-1">{proj.name}</h3>
              <div className="font-mono text-xs text-accent mb-8">{proj.subtitle}</div>

              <div className="space-y-2 mb-8 font-mono text-sm text-secondary">
                {proj.parts.map((part, i) => (
                  <div key={i}>0{i+1} ─ {part}</div>
                ))}
              </div>

              <div className="font-mono text-xs text-primary group-hover:text-accent transition-colors">
                [ {activeProject === proj.id ? 'CLOSE PROJECT' : 'EXPLORE PROJECT'} ]
              </div>

              <AnimatePresence>
                {activeProject === proj.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-8 pt-8 border-t border-secondary/20"
                  >
                    <div className="font-mono text-xs space-y-8 text-secondary">
                      <div>
                        <div className="text-primary mb-2">THE PROBLEM</div>
                        <p>{proj.problem}</p>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        ↓
                      </div>

                      <div>
                        <div className="text-primary mb-2">THE APPROACH</div>
                        <div className="flex flex-col gap-2">
                          {proj.approach.map((step, i) => (
                            <div key={i} className="flex flex-col items-start gap-2">
                              <div>{step}</div>
                              {i < proj.approach.length - 1 && <div className="ml-4">↓</div>}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        ↓
                      </div>

                      <div>
                        <div className="text-primary mb-2">THE RESULT</div>
                        <p className="text-accent">{proj.result}</p>
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
