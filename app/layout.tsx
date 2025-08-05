import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Messaoud ZOUGGAB | Fullstack Developer",
  description:
    "Passionate fullstack developer specializing in React, Angular, NestJS, and modern web technologies. Currently working at Clic-ERP, expanding expertise in DevOps practices and containerization.",
  metadataBase: new URL("https://codingmessaoud.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Messaoud ZOUGGAB | Fullstack Developer",
    description:
      "Passionate fullstack developer specializing in React, Angular, NestJS, and modern web technologies.",
    url: "https://codingmessaoud.com/",
    siteName: "Messaoud ZOUGGAB Portfolio",
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Messaoud ZOUGGAB | Fullstack Developer",
  //   description:
  //     "Passionate fullstack developer specializing in React, Angular, NestJS, and modern web technologies.",
  //   creator: "@messaoudev", // update with actual handle if different
  // },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
