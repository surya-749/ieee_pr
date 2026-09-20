"use client";

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import WhatAreWeBuilding from '@/components/WhatAreWeBuilding';
import DomainExplorer from '@/components/DomainExplorer';
import ProjectLab from '@/components/ProjectLab';
import ProjectConstellation from '@/components/ProjectConstellation';
import Recruitment from '@/components/Recruitment';
import Operators from '@/components/Operators';
import Stats from '@/components/Stats';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';

export default function Home() {
  const [konami, setKonami] = useState(false);
  
  // Konami Code Easter Egg
  useEffect(() => {
    const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let idx = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === code[idx]) {
        idx++;
        if (idx === code.length) {
          setKonami(true);
          idx = 0;
          setTimeout(() => setKonami(false), 5000); // reset after 5s
        }
      } else {
        idx = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen relative selection:bg-accent/30 selection:text-accent">
      {/* Konami Easter Egg Overlay */}
      {konami && (
        <div className="fixed inset-0 z-[100] bg-ieee/20 pointer-events-none flex items-center justify-center backdrop-blur-sm">
          <div className="font-mono text-4xl text-ieee font-bold animate-pulse border-4 border-ieee p-8 bg-background/90">
            SYSTEM OVERRIDE: RAS CORE ACCESS GRANTED
          </div>
        </div>
      )}

      {/* Terminal Easter Egg could be added here as a small component */}

      <Hero />
      <WhatAreWeBuilding />
      <DomainExplorer />
      <div id="projects">
        <ProjectLab />
        <ProjectConstellation />
      </div>
      <Recruitment />
      <div id="team">
        <Operators />
      </div>
      <Stats />
      <Timeline />
      <Footer />
    </main>
  );
}
