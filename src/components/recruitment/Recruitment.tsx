"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  { id: 'q1', text: 'SOFTWARE', path: 'SOFTWARE DEVELOPMENT' },
  { id: 'q2', text: 'AI / ML', path: 'DATA & AI' },
  { id: 'q3', text: 'DESIGN', path: 'DESIGN & BRANDING' },
  { id: 'q4', text: 'HARDWARE', path: 'ROBOTICS & IoT' },
  { id: 'q5', text: 'LEADING PROJECTS', path: 'PROJECT MANAGEMENT' },
  { id: 'q6', text: 'ORGANIZING & OPERATIONS', path: 'OPERATIONS & MANAGEMENT' },
];

export default function Recruitment() {
  const [step, setStep] = useState<'quiz' | 'result'>('quiz');
  const [resultPath, setResultPath] = useState('');

  const handleSelect = (path: string) => {
    setResultPath(path);
    setStep('result');
  };

  return (
    <section id="recruit" className="py-32 px-8 md:px-24 border-t border-secondary/10 bg-[#08090B]">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-secondary mb-16 flex items-center gap-4 text-xs">
          <span className="w-8 h-[1px] bg-secondary/50" />
          RECRUITMENT_PROTOCOL
        </div>

        <div className="border border-secondary/20 bg-background/50 relative min-h-[500px] flex items-center p-8 md:p-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl pointer-events-none" />
          
          {/* Tech accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-secondary/30" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-secondary/30" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-secondary/30" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-secondary/30" />

          <AnimatePresence mode="wait">
            {step === 'quiz' ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full space-y-12"
              >
                <div>
                  <h3 className="text-3xl md:text-5xl font-display mb-4 text-primary">WHAT DO YOU LIKE BUILDING?</h3>
                  <div className="font-mono text-sm text-secondary">FIND YOUR PLACE IN RAS</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">
                  {QUESTIONS.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleSelect(q.path)}
                      className="text-left p-6 border border-secondary/20 hover:border-accent hover:text-accent transition-all group flex items-center gap-4 bg-background"
                    >
                      <span className="opacity-50 group-hover:opacity-100 transition-opacity">»</span>
                      [ {q.text} ]
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full space-y-12"
              >
                <div>
                  <div className="font-mono text-xs text-secondary mb-4 tracking-widest">YOUR POTENTIAL PATH</div>
                  <h3 className="text-4xl md:text-5xl font-display text-accent">{resultPath}</h3>
                </div>
                
                <div className="font-mono text-sm text-secondary space-y-4 py-8 border-y border-secondary/20">
                  <div className="text-primary text-xl mb-6">YOU DON'T NEED TO KNOW EVERYTHING.</div>
                  <p>You just need to be willing to build something you've never built before.</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs mt-8 text-secondary/80">
                    <span className="text-primary">CURIOUS</span>
                    <span>→</span>
                    <span>LEARN</span>
                    <span>→</span>
                    <span>BUILD</span>
                    <span>→</span>
                    <span>BREAK</span>
                    <span>→</span>
                    <span>DEBUG</span>
                    <span>→</span>
                    <span className="text-accent border border-accent/30 px-2 py-1">DEPLOY</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="bg-primary text-background px-8 py-4 font-mono text-sm hover:bg-accent transition-colors">
                    [ JOIN IEEE RAS ]
                  </button>
                  <button 
                    onClick={() => setStep('quiz')}
                    className="border border-secondary/30 text-primary px-8 py-4 font-mono text-sm hover:border-secondary transition-colors"
                  >
                    [ RESET PARAMETERS ]
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
