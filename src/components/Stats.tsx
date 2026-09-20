"use client";

import { motion } from 'framer-motion';

const STATS = [
  { value: '4+', label: 'PROJECTS' },
  { value: '5', label: 'DOMAINS' },
  { value: '40+', label: 'MEMBERS' },
  { value: '10+', label: 'WORKSHOPS' },
  { value: '15+', label: 'EVENTS' }
];

export default function Stats() {
  return (
    <section className="py-32 px-8 md:px-24 border-t border-secondary/10 bg-background/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="font-mono text-secondary mb-16 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-secondary/50" />
          SYSTEM_METRICS
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col border-l border-secondary/20 pl-6 group">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-4xl md:text-6xl font-display font-bold text-primary group-hover:text-accent transition-colors"
              >
                {stat.value}
              </motion.div>
              <div className="font-mono text-xs md:text-sm text-secondary mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
