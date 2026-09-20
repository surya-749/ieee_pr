"use client";

import { motion } from 'framer-motion';

export default function WhatAreWeBuilding() {
  return (
    <section className="py-32 px-8 md:px-24 border-t border-secondary/10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            WHAT ARE YOU<br />
            <span className="text-secondary">BUILDING?</span>
          </h2>
          
          <div className="space-y-4 font-mono text-sm md:text-base text-secondary">
            <p>Not just attending workshops.</p>
            <p>Not just watching technology.</p>
            <p className="text-accent text-xl">We build it.</p>
          </div>
        </div>

        <div className="flex-1 w-full relative font-mono text-xs md:text-sm">
          <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full" />
          
          <pre className="text-secondary p-8 rounded-lg border border-secondary/20 bg-background/50 backdrop-blur overflow-x-auto leading-loose">
{`        SOFTWARE       AI
           \\            /
            \\          /
             AUTOMATION
            /          \\
       HARDWARE       DESIGN`}
          </pre>
        </div>
      </div>
    </section>
  );
}
