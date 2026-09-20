"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const QUESTIONS = [
  { id: 'q1', text: 'Building interfaces', path: 'SOFTWARE' },
  { id: 'q2', text: 'Training models', path: 'DATA & AI' },
  { id: 'q3', text: 'Designing visuals', path: 'DESIGN' },
  { id: 'q4', text: 'Managing teams', path: 'OPERATIONS' },
  { id: 'q5', text: 'Working with hardware', path: 'PROJECTS' },
];

export default function Recruitment() {
  const [step, setStep] = useState<'quiz' | 'result'>('quiz');
  const [resultPath, setResultPath] = useState('');

  const handleSelect = (path: string) => {
    setResultPath(path);
    setStep('result');
  };

  return (
    <section id="recruit" className="py-32 px-8 md:px-24 border-t border-secondary/10 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-secondary mb-16 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-secondary/50" />
          FIND_YOUR_MODULE
        </div>

        <div className="border border-secondary/20 p-8 md:p-16 bg-background relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/5 blur-3xl rounded-full pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {step === 'quiz' ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-display mb-8">What do you enjoy?</h3>
                <div className="flex flex-col gap-4 font-mono">
                  {QUESTIONS.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleSelect(q.path)}
                      className="text-left p-4 border border-secondary/20 hover:border-primary hover:bg-primary/5 transition-all group flex items-center justify-between"
                    >
                      <span>[ {q.text} ]</span>
                      <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
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
                className="space-y-8"
              >
                <div className="font-mono text-sm text-secondary">YOUR PATH</div>
                <h3 className="text-4xl font-display text-accent">{resultPath}</h3>
                
                <div className="font-mono text-sm text-secondary space-y-4 py-8 border-y border-secondary/20">
                  <p>You don't need to know everything.</p>
                  <p>You just need to be willing to build something you've never built before.</p>
                  
                  <div className="flex items-center gap-2 text-xs mt-8">
                    <span>LEARN</span>
                    <span>→</span>
                    <span>BUILD</span>
                    <span>→</span>
                    <span>BREAK</span>
                    <span>→</span>
                    <span>DEBUG</span>
                    <span>→</span>
                    <span className="text-primary">DEPLOY</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-primary text-background px-8 py-4 font-mono text-sm hover:bg-accent transition-colors flex items-center justify-center gap-2">
                    [ APPLY TO RAS ]
                  </button>
                  <button 
                    onClick={() => setStep('quiz')}
                    className="border border-secondary/30 text-primary px-8 py-4 font-mono text-sm hover:border-primary transition-colors flex items-center justify-center gap-2"
                  >
                    [ RESTART MODULE ]
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Recruitment Pipeline */}
        <div className="mt-32">
          <div className="font-mono text-secondary mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-secondary/50" />
            RECRUITMENT_PIPELINE
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 font-mono text-xs md:text-sm">
            {['DISCOVER', 'APPLY', 'INTERACT', 'BUILD', 'JOIN RAS'].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary relative">
                  {i < 4 && (
                    <div className="absolute top-1/2 left-full w-full h-[1px] bg-secondary/20 hidden md:block" />
                  )}
                  0{i + 1}
                </div>
                <div className={i === 4 ? 'text-accent' : 'text-primary'}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
