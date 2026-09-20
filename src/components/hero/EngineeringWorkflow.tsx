"use client";

import { motion } from 'framer-motion';

export default function EngineeringWorkflow() {
  const steps = ['IDEA', 'DESIGN', 'ENGINEER', 'BUILD', 'TEST', 'DEPLOY'];

  return (
    <section id="about" className="py-32 px-8 md:px-24 border-t border-secondary/10 bg-[#08090B] relative">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-10">
        
        <div className="flex-1 space-y-8 sticky top-32">
          <div className="font-mono text-secondary mb-4 flex items-center gap-4 text-xs">
            <span className="w-8 h-[1px] bg-secondary/50" />
            SYSTEM_OVERVIEW
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            WHAT ARE WE<br />
            <span className="text-secondary">BUILDING?</span>
          </h2>
          
          <div className="space-y-4 font-mono text-sm text-secondary/80 max-w-md">
            <p>We bridge the gap between theoretical knowledge and practical engineering.</p>
            <p>From embedded systems and automation to full-stack software and artificial intelligence, we engineer complete solutions.</p>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="flex flex-col items-center">
            {steps.map((step, i) => (
              <div key={step} className="flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="w-48 py-4 border border-secondary/20 bg-background/50 backdrop-blur flex items-center justify-center font-mono text-sm tracking-widest relative group hover:border-accent transition-colors"
                >
                  <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-secondary group-hover:border-accent" />
                  <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-secondary group-hover:border-accent" />
                  {step}
                </motion.div>
                
                {i < steps.length - 1 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: 40 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                    className="w-[1px] bg-secondary/20 my-2 relative"
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-secondary/50 bg-background" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
