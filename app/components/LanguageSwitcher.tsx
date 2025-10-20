"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentLocale = params.locale as string;

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all cursor-pointer ${
          currentLocale === "en"
            ? "bg-accent text-white"
            : "text-foreground/70 hover:text-accent hover:bg-accent/10"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("fr")}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all cursor-pointer ${
          currentLocale === "fr"
            ? "bg-accent text-white"
            : "text-foreground/70 hover:text-accent hover:bg-accent/10"
        }`}
        aria-label="Switch to French"
      >
        FR
      </button>
    </div>
  );
}
