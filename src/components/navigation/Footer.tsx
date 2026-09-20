export default function Footer() {
  return (
    <footer className="py-24 px-8 md:px-24 border-t border-secondary/20 bg-[#020202] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
        <div className="space-y-8 max-w-sm">
          <div className="font-mono text-primary font-bold tracking-widest text-xl">
            IEEE RAS VITC
          </div>
          <p className="font-mono text-sm text-secondary leading-relaxed">
            A multidisciplinary community building technology across robotics, automation, software, AI and IoT.
          </p>
          <a href="#recruit" className="inline-flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 font-mono text-sm hover:bg-accent transition-colors w-full sm:w-auto mt-4">
            [ INITIALIZE APPLICATION ]
          </a>
        </div>

        <div className="flex gap-16 font-mono text-xs">
          <div className="space-y-6">
            <div className="text-secondary/50 tracking-widest">SYSTEM_NAV</div>
            <a href="#about" className="block hover:text-accent transition-colors">ABOUT</a>
            <a href="#domains" className="block hover:text-accent transition-colors">DOMAINS</a>
            <a href="#projects" className="block hover:text-accent transition-colors">PROJECTS</a>
            <a href="#events" className="block hover:text-accent transition-colors">EVENTS</a>
            <a href="#team" className="block hover:text-accent transition-colors">TEAM</a>
          </div>
          <div className="space-y-6">
            <div className="text-secondary/50 tracking-widest">NETWORK</div>
            <a href="#" className="block hover:text-accent transition-colors">LINKEDIN</a>
            <a href="#" className="block hover:text-accent transition-colors">INSTAGRAM</a>
            <a href="#" className="block hover:text-accent transition-colors">GITHUB</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-secondary/20 font-mono text-[10px] text-secondary/50 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <div>© {new Date().getFullYear()} IEEE RAS VITC. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-2">
          STATUS: <span className="text-accent">ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
