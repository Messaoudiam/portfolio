"use client";

import { useTranslations } from "next-intl";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-accent/20 bg-foreground/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-foreground/60 font-mono">
            © {currentYear} Messaoud ZOUGGAB. {t("copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
}
