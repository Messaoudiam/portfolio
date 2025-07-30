"use client";

import ThemeToggle from "./ThemeToggle";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10 shadow-lg shadow-foreground/5">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-sm font-medium whitespace-nowrap cursor-pointer"
            aria-label="Scroll to top"
          >
            <span className="text-accent">M</span>essaoud{" "}
            <span className="text-accent">Z</span>OUGGAB
          </button>

          {/* Navigation & utilities */}
          <div className="flex items-center gap-4">
            {/* Navigation links */}
            <div className="hidden">
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

            {/* Theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
