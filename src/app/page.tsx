"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/hero/Hero';
import EngineeringWorkflow from '@/components/hero/EngineeringWorkflow';
import SystemModules from '@/components/domains/SystemModules';
import ProjectLab from '@/components/projects/ProjectLab';
import ProjectConstellation from '@/components/projects/ProjectConstellation';
import Recruitment from '@/components/recruitment/Recruitment';
import EventTimeline from '@/components/events/EventTimeline';
import Operators from '@/components/team/Operators';
import Footer from '@/components/navigation/Footer';

export default function Home() {
  const [konami, setKonami] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>(['RAS_OS v2.4.1', 'Type "help" for available commands.']);
  
  useEffect(() => {
    const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let idx = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === code[idx]) {
        idx++;
        if (idx === code.length) {
          setKonami(true);
          idx = 0;
          setTimeout(() => setKonami(false), 5000);
        }
      } else {
        idx = 0;
      }

      if (e.key === '`' || e.key === '~') {
        setTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    const newOutput = [...terminalOutput, "> " + cmd];
    
    switch(cmd) {
      case 'help':
        newOutput.push('commands: about, projects, domains, team, recruit, clear');
        break;
      case 'clear':
        setTerminalOutput([]);
        setTerminalInput('');
        return;
      case 'about':
      case 'projects':
      case 'domains':
      case 'team':
      case 'recruit':
        window.location.hash = "#" + cmd;
        newOutput.push("Redirecting to " + cmd + "...");
        setTimeout(() => setTerminalOpen(false), 500);
        break;
      default:
        if (cmd) newOutput.push("Command not found: " + cmd);
    }
    
    setTerminalOutput(newOutput);
    setTerminalInput('');
  };

  return (
    <main className="min-h-screen relative selection:bg-accent/30 selection:text-accent bg-[#08090B] text-primary cursor-crosshair">
      <Navbar />

      {konami && (
        <div className="fixed inset-0 z-[100] bg-ieee/90 pointer-events-none flex items-center justify-center backdrop-blur-md">
          <div className="font-mono text-4xl md:text-6xl text-white font-bold animate-pulse border-4 border-white p-12 bg-black/50 text-center">
            SYSTEM OVERRIDE<br/>
            <span className="text-2xl mt-4 block">RAS CORE ACCESS GRANTED</span>
          </div>
        </div>
      )}

      {terminalOpen && (
        <div className="fixed bottom-0 left-0 w-full md:w-[500px] h-[300px] bg-black/95 border-t border-r border-accent/50 z-[100] font-mono text-xs text-accent p-4 flex flex-col shadow-[0_0_30px_rgba(0,229,255,0.2)]">
          <div className="flex justify-between items-center mb-4 border-b border-accent/30 pb-2">
            <span>RAS_TERMINAL</span>
            <button onClick={() => setTerminalOpen(false)} className="text-secondary hover:text-accent"> [X] </button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-1 mb-4 flex flex-col justify-end">
            {terminalOutput.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
          <form onSubmit={handleTerminalSubmit} className="flex gap-2">
            <span>&gt;</span>
            <input 
              type="text" 
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              className="bg-transparent outline-none flex-1 text-primary"
              autoFocus
            />
          </form>
        </div>
      )}

      <Hero />
      <EngineeringWorkflow />
      <SystemModules />
      <ProjectLab />
      <ProjectConstellation />
      <Recruitment />
      <EventTimeline />
      <Operators />
      <Footer />
    </main>
  );
}
