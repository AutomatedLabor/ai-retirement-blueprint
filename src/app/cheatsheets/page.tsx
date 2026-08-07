"use client";

import { useState, useRef } from "react";
import { cheatsheets } from "@/data/cheatsheets";
import { Section } from "@/components/Section";

const tabColors: Record<string, { active: string; inactive: string; heading: string; card: string; border: string; badge: string }> = {
  primary: {
    active: "bg-primary-600 text-white shadow-md shadow-primary-200",
    inactive: "bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-700",
    heading: "text-primary-700",
    card: "bg-primary-50/50",
    border: "border-primary-200",
    badge: "bg-primary-100 text-primary-700",
  },
  accent: {
    active: "bg-accent-600 text-white shadow-md shadow-accent-200",
    inactive: "bg-white text-gray-700 border border-gray-200 hover:border-accent-300 hover:text-accent-700",
    heading: "text-accent-700",
    card: "bg-accent-50/50",
    border: "border-accent-200",
    badge: "bg-accent-100 text-accent-700",
  },
  gold: {
    active: "bg-gold-600 text-white shadow-md shadow-gold-200",
    inactive: "bg-white text-gray-700 border border-gray-200 hover:border-gold-300 hover:text-gold-700",
    heading: "text-gold-700",
    card: "bg-gold-50/50",
    border: "border-gold-200",
    badge: "bg-gold-100 text-gold-700",
  },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

export default function CheatsheetsPage() {
  const [activeId, setActiveId] = useState(cheatsheets[0].id);
  const contentRef = useRef<HTMLDivElement>(null);
  const activeSheet = cheatsheets.find((c) => c.id === activeId)!;
  const colors = tabColors[activeSheet.color];

  const handlePrint = () => {
    if (contentRef.current) {
      const printWindow = window.open("", "_blank");
      if (!printWindow) return;
      printWindow.document.write(`
        <html><head><title>${activeSheet.title}</title>
        <style>
          body { font-family: 'Inter', system-ui, sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #1a1a1a; line-height: 1.6; }
          h1 { font-size: 24px; margin-bottom: 8px; }
          p.subtitle { color: #666; margin-bottom: 24px; }
          h2 { font-size: 18px; margin-top: 28px; margin-bottom: 12px; padding-bottom: 6px; border-bottom: 2px solid #e5e7eb; }
          .item { margin-bottom: 16px; padding: 12px; background: #f9fafb; border-radius: 8px; }
          .item-title { font-weight: 600; margin-bottom: 4px; }
          .item-content { font-size: 14px; color: #374151; }
          .item-example { font-size: 13px; color: #6b7280; font-style: italic; margin-top: 4px; }
        </style></head><body>
        <h1>${activeSheet.title}</h1>
        <p class="subtitle">${activeSheet.description}</p>
        ${activeSheet.sections.map((s) => `
          <h2>${s.heading}</h2>
          ${s.items.map((i) => `
            <div class="item">
              <div class="item-title">${i.title}</div>
              <div class="item-content">${i.content}</div>
              ${i.example ? `<div class="item-example">${i.example}</div>` : ""}
            </div>
          `).join("")}
        `).join("")}
        </body></html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="bg-gray-50/50">
      <Section
        title="Quick Reference Cheatsheets"
        subtitle="Pocket-ready reference cards for the most important concepts. Copy, print, or bookmark.">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tab Navigation */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-6 space-y-1.5">
              {cheatsheets.map((sheet) => {
                const isActive = sheet.id === activeId;
                const c = tabColors[sheet.color];
                return (
                  <button
                    key={sheet.id}
                    onClick={() => setActiveId(sheet.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                      isActive ? c.active : c.inactive
                    }`}
                  >
                    <span className="text-lg">{sheet.icon}</span>
                    <span className="flex-1">{sheet.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-gray-100"}`}>
                      {sheet.sections.reduce((acc, s) => acc + s.items.length, 0)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div ref={contentRef} className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className={`px-6 py-5 border-b ${colors.border} flex items-center justify-between gap-4`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{activeSheet.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{activeSheet.title}</h2>
                    <p className="text-sm text-gray-500 mt-0.5">{activeSheet.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CopyButton
                    text={activeSheet.sections
                      .map(
                        (s) =>
                          `## ${s.heading}\n${s.items
                            .map((i) => `**${i.title}:** ${i.content}${i.example ? `\n_Example: ${i.example}_` : ""}`)
                            .join("\n")}`
                      )
                      .join("\n\n")}
                  />
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print
                  </button>
                </div>
              </div>

              {/* Sections */}
              <div className="p-6 space-y-8 max-h-[80vh] overflow-y-auto">
                {activeSheet.sections.map((section, si) => (
                  <div key={si}>
                    <h3 className={`text-lg font-bold ${colors.heading} mb-4 flex items-center gap-2`}>
                      <span className="w-1.5 h-6 rounded-full bg-current opacity-50" />
                      {section.heading}
                    </h3>
                    <div className="space-y-3">
                      {section.items.map((item, ii) => (
                        <div
                          key={ii}
                          className={`rounded-xl p-4 ${colors.card} border ${colors.border}`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                            <CopyButton text={`${item.title}: ${item.content}${item.example ? `\n${item.example}` : ""}`} />
                          </div>
                          <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">{item.content}</p>
                          {item.example && (
                            <p className="text-xs text-gray-500 mt-2 pl-3 border-l-2 border-gray-200 italic">
                              {item.example}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}