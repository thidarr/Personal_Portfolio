function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg/85 backdrop-blur-sm border-b border-border px-4 sm:px-8 py-4 flex items-center justify-between">
      <a href="#home" className="font-mono text-accent text-lg font-bold">
        TA
      </a>

      <div className="flex gap-6 font-mono text-sm">
        <a href="#projects" className="text-text hover:text-accent transition-colors">
          Projects
        </a>
        <a href="#about" className="text-text hover:text-accent transition-colors">
          About
        </a>
        <a href="#contact" className="text-text hover:text-accent transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;