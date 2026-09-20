"use client";

import { motion } from 'framer-motion';
import { TEAM } from '@/data/team';

export default function Operators() {
  return (
    <section id="team" className="py-32 px-8 md:px-24 border-t border-secondary/10 bg-[#08090B]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="font-mono text-secondary mb-4 flex items-center gap-4 text-xs">
              <span className="w-8 h-[1px] bg-secondary/50" />
              THE_OPERATORS
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">THE PEOPLE<br />BEHIND THE SYSTEM</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="border border-secondary/20 group relative bg-background overflow-hidden flex flex-col min-h-[300px]"
            >
              {/* Data Overlay */}
              <div className="absolute inset-0 bg-background/95 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs z-10">
                <div className="space-y-6">
                  <div className="flex justify-between border-b border-secondary/20 pb-2">
                    <span className="text-secondary tracking-widest">STATUS</span>
                    <span className="text-accent flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      {member.status}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-secondary/20 pb-2">
                    <span className="text-secondary tracking-widest">DOMAIN</span>
                    <span className="text-primary">{member.domain}</span>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-secondary tracking-widest">RESPONSIBILITY</span>
                    <span className="text-primary leading-relaxed">{member.desc}</span>
                  </div>
                </div>
              </div>

              {/* Main Card */}
              <div className="relative z-0 p-8 flex-1 flex flex-col">
                <div className="font-mono text-[10px] text-accent mb-auto tracking-widest">
                  {member.role}
                </div>
                <div className="mt-8">
                  <h3 className="text-3xl font-display mb-2 text-primary group-hover:text-transparent transition-colors">{member.name}</h3>
                  <div className="font-mono text-xs text-secondary/50 group-hover:text-transparent transition-colors">Hover for data</div>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-secondary/20 group-hover:border-accent transition-colors m-4" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-secondary/20 group-hover:border-accent transition-colors m-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
