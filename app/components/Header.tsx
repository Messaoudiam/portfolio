"use client";

import { useTranslations } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const t = useTranslations("Header");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10 shadow-lg shadow-foreground/5">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-sm font-medium whitespace-nowrap cursor-pointer"
            aria-label={t("scrollToTop")}
          >
            <span className="text-accent">M</span>essaoud{" "}
            <span className="text-accent">Z</span>OUGGAB
          </button>

          {/* Navigation & utilities */}
          <div className="flex items-center gap-4">
            {/* Navigation links */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#about"
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                {t("about")}
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                {t("projects")}
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                {t("contact")}
              </a>
            </div>

            {/* Language switcher */}
            <LanguageSwitcher />

            {/* Theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
