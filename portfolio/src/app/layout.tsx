import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description =
  "Portfolio of Fatiuzzaman Fahim, a Full Stack Developer and CSE student at BAIUST. Explore web projects built with Next.js, React, TypeScript and more.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fatiuzzaman Fahim | Full Stack Developer",
    template: "%s | Fatiuzzaman Fahim",
  },
  description,
  openGraph: {
    title: "Fatiuzzaman Fahim | Full Stack Developer",
    description,
    type: "website",
    siteName: "Fatiuzzaman Fahim",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
