import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Retirement Blueprint — Retire Using AI & Online Work",
  description: "The ultimate resource library for achieving financial independence through AI tools, online income streams, and smart automation. Guides, tools, templates, and research — all in one place.",
  keywords: ["AI retirement", "financial independence", "online income", "AI tools", "passive income", "remote work", "FIRE movement"],
  openGraph: {
    title: "AI Retirement Blueprint",
    description: "Retire using AI. The complete toolkit.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
