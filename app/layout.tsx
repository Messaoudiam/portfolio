import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://messaoud.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Messaoud ZOUGGAB | Fullstack Developer",
    description:
      "Passionate fullstack developer specializing in React, Angular, NestJS, and modern web technologies.",
    url: "https://messaoud.dev/",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
        {children}
      </body>
    </html>
  );
}
