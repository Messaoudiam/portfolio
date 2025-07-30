interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10 shadow-lg shadow-foreground/5">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-mono text-sm font-medium">
            <span className="text-accent">M</span>essaoud{" "}
            <span className="text-accent">Z</span>OUGGAB
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>

          <button className="md:hidden p-2" aria-label="Menu">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-foreground"
            >
              <path
                d="M2.5 5h15M2.5 10h15M2.5 15h15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
