"use client";

import { EVENTS } from '@/data/events';

export default function EventTimeline() {
  return (
    <section id="events" className="py-32 px-8 md:px-24 border-t border-secondary/10 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-secondary mb-16 flex items-center gap-4 text-xs">
          <span className="w-8 h-[1px] bg-secondary/50" />
          EVENT_LOG
        </div>

        <div className="flex font-mono text-sm">
          {/* Vertical Line */}
          <div className="w-px bg-secondary/20 mr-12 relative flex-shrink-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-background text-secondary text-[10px] py-2">
              2026
            </div>
          </div>
          
          <div className="flex-1 space-y-12 py-12">
            {EVENTS.map((event) => (
              <div key={event.id} className="relative group">
                <div className="absolute -left-[54px] top-6 w-3 h-3 bg-background border-2 border-secondary/50 rounded-full group-hover:border-accent group-hover:bg-accent/20 transition-colors" />
                <div className="absolute -left-[42px] top-[29px] w-[42px] h-[1px] bg-secondary/20 group-hover:bg-accent/50 transition-colors" />
                
                <div className="border border-secondary/20 p-8 bg-background hover:border-primary transition-colors cursor-pointer relative overflow-hidden">
                  <div className="absolute right-0 top-0 text-[120px] font-display font-bold text-secondary/5 leading-none pointer-events-none">
                    0{event.id}
                  </div>
                  <div className="font-mono text-[10px] text-accent mb-4 tracking-widest">{event.type}</div>
                  <h3 className="text-2xl font-display mb-4 text-primary">{event.title}</h3>
                  <p className="font-mono text-sm text-secondary max-w-md">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
