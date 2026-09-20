export default function Footer() {
  return (
    <footer className="py-24 px-8 md:px-24 border-t border-secondary/20 bg-[#050505]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-8 max-w-sm">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            READY TO BUILD<br />
            <span className="text-secondary">SOMETHING?</span>
          </h2>
          <p className="font-mono text-sm text-secondary">
            Your next project could start here.
          </p>
          <a href="#recruit" className="inline-flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 font-mono text-sm hover:bg-accent transition-colors">
            [ JOIN IEEE RAS ]
          </a>
        </div>

        <div className="flex gap-16 font-mono text-sm">
          <div className="space-y-4">
            <div className="text-secondary mb-8">NAVIGATION</div>
            <a href="#domains" className="block hover:text-accent transition-colors">Domains</a>
            <a href="#projects" className="block hover:text-accent transition-colors">Projects</a>
            <a href="#team" className="block hover:text-accent transition-colors">Team</a>
          </div>
          <div className="space-y-4">
            <div className="text-secondary mb-8">SYSTEM</div>
            <div className="text-primary">IEEE RAS VITC</div>
            <div className="text-secondary">VIT Chennai</div>
            <div className="text-secondary mt-8 pt-8 border-t border-secondary/20">
              © {new Date().getFullYear()} STATUS: ONLINE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
