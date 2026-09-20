"use client";

import { motion } from 'framer-motion';

const TEAM = [
  {
    name: 'NAVEEN',
    role: 'EVENTS SECRETARY',
    desc: 'Coordinates events, workshops and activities.',
    domain: 'OPERATIONS',
    status: 'ACTIVE'
  },
  {
    name: 'TARUN',
    role: 'TECHNICAL SECRETARY',
    desc: 'Technical development and software initiatives.',
    domain: 'SOFTWARE',
    status: 'ACTIVE'
  },
  {
    name: 'SUBRAMANIAM',
    role: 'TREASURER',
    desc: 'Financial and organizational operations.',
    domain: 'FINANCE',
    status: 'ACTIVE'
  }
];

export default function Operators() {
  return (
    <section className="py-32 px-8 md:px-24 border-t border-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="font-mono text-secondary mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-secondary/50" />
              THE_OPERATORS
            </div>
            <h2 className="text-4xl font-display">THE PEOPLE<br />BEHIND THE SYSTEM</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="border border-secondary/20 p-8 group relative bg-background overflow-hidden"
            >
              {/* Hover overlay data */}
              <div className="absolute inset-0 bg-background/95 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs z-10 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-secondary/20 pb-2">
                    <span className="text-secondary">STATUS</span>
                    <span className="text-accent flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      {member.status}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-secondary/20 pb-2">
                    <span className="text-secondary">DOMAIN</span>
                    <span className="text-primary">{member.domain}</span>
                  </div>
                  <div className="flex justify-between border-b border-secondary/20 pb-2">
                    <span className="text-secondary">ROLE</span>
                    <span className="text-primary text-right pl-4">{member.role}</span>
                  </div>
                </div>
              </div>

              <div className="relative z-0">
                <div className="font-mono text-xs text-secondary mb-8 pb-4 border-b border-secondary/20">
                  {member.role}
                </div>
                <h3 className="text-2xl font-display mb-4">{member.name}</h3>
                <p className="font-mono text-sm text-secondary/80">{member.desc}</p>
              </div>
              
              {/* Tech corner accents */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary/20 group-hover:border-accent transition-colors" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary/20 group-hover:border-accent transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
