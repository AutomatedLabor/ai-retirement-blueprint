import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "AI Retirement Blueprint — The Actionable Framework for Financial Independence with AI",
  description: "Step-by-step guides, interactive tools, ready-to-use templates, curated resources, and deep research — everything you need to achieve financial independence using AI tools and online work.",
  keywords: ["AI retirement", "financial independence", "FIRE movement", "AI tools", "online income", "passive income", "AI freelancing", "digital assets", "smart investing", "remote work", "AI automation"],
  metadataBase: new URL('https://ai-retirement-blueprint.vercel.app'),
  openGraph: {
    title: "AI Retirement Blueprint",
    description: "Retire using AI. The complete toolkit.",
    type: "website",
    siteName: "AI Retirement Blueprint",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-pt-16">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
