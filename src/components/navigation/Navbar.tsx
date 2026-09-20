"use client";

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={"fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 " + (scrolled ? 'bg-background/80 backdrop-blur-md border-b border-secondary/20' : 'bg-transparent')}
    >
      <div className="flex items-center gap-2 font-mono text-primary font-bold tracking-widest">
        <Terminal size={18} className="text-accent" />
        RAS VITC
      </div>

      <div className="hidden md:flex items-center gap-8 font-mono text-xs text-secondary">
        {['ABOUT', 'DOMAINS', 'PROJECTS', 'EVENTS', 'TEAM'].map((item) => (
          <a key={item} href={"#" + item.toLowerCase()} className="hover:text-primary transition-colors relative group">
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      <a href="#recruit" className="hidden md:flex items-center justify-center gap-2 border border-secondary/30 text-primary px-6 py-2 text-xs font-mono hover:bg-primary hover:text-background transition-colors">
        [ JOIN RAS ]
      </a>
    </motion.nav>
  );
}
