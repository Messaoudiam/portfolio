import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "../context/theme-context";
import CaminoEasterEgg from "../components/CaminoEasterEgg";
import StructuredData from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  const titles = {
    en: "Messaoud ZOUGGAB | Fullstack Developer",
    fr: "Messaoud ZOUGGAB | Développeur Fullstack"
  };

  const descriptions = {
    en: "Passionate fullstack developer specializing in React, Angular, NestJS, and modern web technologies. Currently working at Clic-ERP, expanding expertise in DevOps practices and containerization.",
    fr: "Développeur fullstack passionné spécialisé en React, Angular, NestJS et technologies web modernes. Actuellement chez Clic-ERP, j'élargis mon expertise en pratiques DevOps et conteneurisation."
  };

  const keywords = {
    en: "Fullstack Developer, React Developer, Angular Developer, NestJS Developer, TypeScript Expert, Web Developer Lyon, DevOps, Docker, Node.js, Frontend Developer, Backend Developer, Messaoud ZOUGGAB",
    fr: "Développeur Fullstack, Développeur React, Développeur Angular, Développeur NestJS, Expert TypeScript, Développeur Web Lyon, DevOps, Docker, Node.js, Développeur Frontend, Développeur Backend, Messaoud ZOUGGAB"
  };

  return {
    title: titles[locale as 'en' | 'fr'],
    description: descriptions[locale as 'en' | 'fr'],
    keywords: keywords[locale as 'en' | 'fr'],
    authors: [{ name: "Messaoud ZOUGGAB", url: "https://codingmessaoud.com" }],
    creator: "Messaoud ZOUGGAB",
    metadataBase: new URL("https://codingmessaoud.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'fr': '/fr',
      },
    },
    openGraph: {
      title: titles[locale as 'en' | 'fr'],
      description: descriptions[locale as 'en' | 'fr'],
      url: `https://codingmessaoud.com/${locale}`,
      siteName: "Messaoud ZOUGGAB Portfolio",
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: "website",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: titles[locale as 'en' | 'fr'],
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as 'en' | 'fr'],
      description: descriptions[locale as 'en' | 'fr'],
      creator: "@messaoudev",
      images: ['/og-image.png'],
    },
    icons: {
      icon: [
        {
          url: "/favicon.ico",
          type: "image/x-icon",
        },
        {
          url: "/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
      ],
      shortcut: "/favicon.ico",
      apple: [
        {
          url: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: [
        {
          rel: "android-chrome",
          url: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          rel: "android-chrome",
          url: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    manifest: "/site.webmanifest",
    verification: {
      google: "ZqDaAPUmdgXcANz4HCKE2NN07SL-PjKkPF5PRWvEI6Y",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en' | 'fr')) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="google-site-verification" content="ZqDaAPUmdgXcANz4HCKE2NN07SL-PjKkPF5PRWvEI6Y" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            {children}
            <CaminoEasterEgg />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
