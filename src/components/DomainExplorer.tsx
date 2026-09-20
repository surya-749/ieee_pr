"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DOMAINS = [
  {
    id: '01',
    name: 'SOFTWARE',
    title: 'BUILD THE DIGITAL LAYER',
    desc: ['Web Applications', 'Mobile Applications', 'Backend Systems', 'APIs', 'Deployment'],
    tech: 'React / Next.js / Node.js / Firebase',
  },
  {
    id: '02',
    name: 'DATA + AI',
    title: 'TURN DATA INTO DECISIONS',
    desc: ['Machine Learning', 'Data Visualization', 'Prediction Systems', 'AI Applications', 'Analytics'],
    tech: 'Python / TensorFlow / PyTorch / Pandas',
  },
  {
    id: '03',
    name: 'DESIGN',
    title: 'MAKE TECHNOLOGY VISIBLE',
    desc: ['UI/UX', 'Brand Identity', 'Motion', 'Visual Systems', 'Digital Assets'],
    tech: 'Figma / Illustrator / After Effects',
  },
  {
    id: '04',
    name: 'PROJECTS',
    title: 'ENGINEERING & HARDWARE',
    desc: ['Robotics', 'IoT Systems', 'Circuit Design', 'Embedded Systems', 'Automation'],
    tech: 'Arduino / Raspberry Pi / C++ / ROS',
  },
  {
    id: '05',
    name: 'OPERATIONS',
    title: 'RUN THE SYSTEM',
    desc: ['Event Management', 'Finance', 'Sponsorships', 'Logistics', 'Strategy'],
    tech: 'Notion / Excel / Communication',
  },
];

export default function DomainExplorer() {
  const [activeDomain, setActiveDomain] = useState(DOMAINS[0]);

  return (
    <section id="domains" className="py-32 px-8 md:px-24 border-t border-secondary/10 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-secondary mb-12 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-secondary/50" />
          SYSTEM_DOMAINS
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 flex flex-col font-display text-2xl md:text-4xl uppercase">
            {DOMAINS.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setActiveDomain(domain)}
                className={'text-left py-6 border-b border-secondary/20 transition-all duration-300 flex items-center gap-6 ' + (activeDomain.id === domain.id ? 'text-primary' : 'text-secondary/50 hover:text-secondary')}
              >
                <span className="font-mono text-sm opacity-50">{domain.id}</span>
                {domain.name}
              </button>
            ))}
          </div>

          <div className="flex-1 min-h-[400px] border border-secondary/20 p-8 md:p-12 bg-background relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <h3 className="font-mono text-accent mb-8">{activeDomain.title}</h3>
                
                <div className="space-y-4 mb-12 flex-1">
                  {activeDomain.desc.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 font-mono text-sm">
                      <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>

                <div>
                  <div className="font-mono text-xs text-secondary/50 mb-2">TECH STACK</div>
                  <div className="font-mono text-sm text-primary">{activeDomain.tech}</div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
