function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg/85 backdrop-blur-sm border-b border-border px-4 sm:px-8 py-4 flex items-center justify-between ">
      <a href="#home" className="flex items-center justify-center w-10 h-10 rounded-full border font-mono text-text hover:text-accent text-lg font-bold transition-all duration-200 hover:bg-accent-bg hover:shadow-lg hover:shadow-accent/20 hover:scale-105">
        TA
      </a>

      <div className="flex gap-4 sm:gap-6 font-mono text-xs sm:text-sm">
        <a href="#projects" className="text-text hover:text-accent transition-all duration-200 hover:scale-105 inline-block">Projects</a>
        <a href="#about" className="text-text hover:text-accent transition-all duration-200 hover:scale-105 inline-block">About</a>
        <a href="#contact" className="text-text hover:text-accent transition-all duration-200 hover:scale-105 inline-block">Contact</a>
      </div>
    </nav>
  );
}

export default Nav;