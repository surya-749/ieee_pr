"use client";

import { motion } from 'framer-motion';

export default function Timeline() {
  return (
    <section className="py-32 px-8 md:px-24 border-t border-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-secondary mb-16 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-secondary/50" />
          EVENT_LOG
        </div>

        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 hide-scrollbar">
          {['WORKSHOPS', 'SEMINARS', 'INDUSTRIAL VISITS', 'COMPETITIONS', 'PROJECTS'].map((item, i) => (
            <div key={i} className="flex-shrink-0 w-64 md:w-80 group">
              <div className="flex items-center gap-4 mb-8 relative">
                <div className="w-4 h-4 rounded-full border-2 border-secondary group-hover:border-accent group-hover:bg-accent/20 transition-colors z-10 bg-background" />
                <div className="absolute top-1/2 left-4 w-full h-[1px] bg-secondary/20 group-hover:bg-accent/50 transition-colors" />
              </div>
              
              <div className="border border-secondary/20 p-6 bg-background/50 hover:border-primary transition-colors">
                <div className="font-mono text-xs text-secondary mb-4">CATEGORY</div>
                <h3 className="text-xl font-display mb-4">{item}</h3>
                <p className="font-mono text-sm text-secondary/80 line-clamp-3">
                  Engage in hands-on learning, expert sessions, and real-world implementation.
                </p>
                <div className="mt-8 font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  [ VIEW LOG ]
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
