interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative bg-foreground/[0.02]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/[0.01] to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
              Messaoud ZOUGGAB
            </h1>
            <p className="text-xl md:text-2xl font-light text-accent mt-4">
              Fullstack Developer
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
            Passionate fullstack developer specializing in React, NestJS, and
            modern web technologies. Currently contributing to innovative
            solutions at Clic-ERP while expanding expertise in DevOps practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              className="group px-8 py-3 bg-accent text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:scale-105 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40"
            >
              View Projects
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-accent/30 text-foreground rounded-full font-medium text-sm transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator arrow */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-foreground/40"
        >
          <path
            d="M12 5v14M19 12l-7 7-7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
