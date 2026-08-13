import AnimatedWords from "./AnimatedWords";

function Hero() {
  return (
    <section id="home" className="flex flex-col items-center md:items-start justify-center text-center md:text-left px-4 sm:px-8 md:py-8 py-7">
      <p className="font-mono text-sm md:text-base text-accent mb-4">
        <AnimatedWords text="Hi, my name is" startDelay={0} />
      </p>
      <h1 className="text-4xl md:text-5xl font-display text-white mb-5">
        <AnimatedWords text="Thidar Aung" startDelay={0.3} />
      </h1>
      <span className="font-mono text-xs text-accent border border-accent rounded-full py-2 px-3 mb-5 sm:mb-6 inline-block opacity-0 animate-word-reveal" style={{ animationDelay: "0.7s" }}>
        ICT Graduate · Web & Data
      </span>
      <p className="text-lg md:text-xl font-mono text-white mb-6 leading-relaxed">
        <AnimatedWords text="I build with code, explore with data, and I'm always curious what's next." startDelay={0.9} />
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-5 opacity-0 animate-word-reveal" style={{ animationDelay: "1.5s" }}>
        <a href="#projects"
          className="inline-block px-5 md:px-7 py-3 md:py-3.5 font-mono text-sm hover:text-accent border hover:border-accent rounded-2xl transition-all duration-200 hover:bg-accent-bg hover:shadow-lg hover:shadow-accent/20 hover:scale-105 focus-visible:outline focus-visible:outline-accent text-text-h border-text focus-visible:outline-offset-2 no-underline"        >
          View My Work
        </a>
        <a href="#contact"
          className="inline-block px-5 md:px-7 py-3 md:py-3.5 font-mono text-sm hover:text-accent border hover:border-accent rounded-2xl transition-all duration-200 hover:bg-accent-bg hover:shadow-lg hover:shadow-accent/20 hover:scale-105 focus-visible:outline focus-visible:outline-accent text-text-h border-text focus-visible:outline-offset-2 no-underline"        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;