function Hero() {
  return (
    <section
      className="flex flex-col items-start justify-center min-h-[calc(70svh-70px)] px-4 py-4 sm:py-8 sm:px-8"
      id="home"
    >
      <p className="font-mono text-sm sm:text-base text-accent mb-4">
        Hi, my name is
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
        Thidar Aung
      </h1>
      <span className="font-mono text-xs text-accent border border-accent rounded-full py-2 px-3 mb-4 sm:mb-5 inline-block">
        Web Developer · Data Enthusiast
      </span>
      <p className=" text-lg sm:text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed ">
        I build with code, explore with data, and I'm always curious what's next.
      </p>
      <div className="flex flex-wrap gap-4 sm:gap-5">
        <a href="#projects"
          className="inline-block px-5 sm:px-7 py-3 sm:py-3.5 font-mono text-sm hover:text-accent border hover:border-accent rounded-2xl transition-all duration-200 hover:bg-accent-bg hover:shadow-lg hover:shadow-accent/20 hover:scale-105 focus-visible:outline focus-visible:outline-accent text-text-h border-text focus-visible:outline-offset-2 no-underline"        >
          View My Work
        </a>
        <a href="#contact"
          className="inline-block px-5 sm:px-7 py-3 sm:py-3.5 font-mono text-sm hover:text-accent border hover:border-accent rounded-2xl transition-all duration-200 hover:bg-accent-bg hover:shadow-lg hover:shadow-accent/20 hover:scale-105 focus-visible:outline focus-visible:outline-accent text-text-h border-text focus-visible:outline-offset-2 no-underline"        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;