"use client";

import { useState } from "react";
import { checklists, type Checklist } from "@/data/checklists";
import { Section } from "@/components/Section";

const colorMap: Record<string, { badge: string; border: string; check: string; progress: string }> = {
  primary: {
    badge: "bg-primary-100 text-primary-700",
    border: "border-primary-200",
    check: "text-primary-600",
    progress: "bg-primary-500",
  },
  accent: {
    badge: "bg-accent-100 text-accent-700",
    border: "border-accent-200",
    check: "text-accent-600",
    progress: "bg-accent-500",
  },
  gold: {
    badge: "bg-gold-100 text-gold-700",
    border: "border-gold-200",
    check: "text-gold-600",
    progress: "bg-gold-500",
  },
};

function ChecklistCard({ checklist }: { checklist: Checklist }) {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const colors = colorMap[checklist.color];
  const progress = checklist.items.length > 0 ? (checked.size / checklist.items.length) * 100 : 0;

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const downloadMarkdown = () => {
    const lines = [
      `# ${checklist.title}`,
      "",
      checklist.description,
      "",
    ];
    checklist.items.forEach((item) => {
      const mark = checked.has(item.id) ? "x" : " ";
      lines.push(`- [${mark}] ${item.text} _(${item.category})_`);
    });
    lines.push("", `---`, `*Generated from AI Retirement Blueprint*`);
    const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${checklist.id}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const uniqueCategories = Array.from(new Set(checklist.items.map((i) => i.category)));

  return (
    <div className={`bg-white rounded-2xl border ${colors.border} p-6 card-hover`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{checklist.icon}</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{checklist.title}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{checklist.description}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full ${colors.progress} rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-medium text-gray-600 tabular-nums">
          {checked.size}/{checklist.items.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {uniqueCategories.map((cat) => (
          <span key={cat} className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${colors.badge}`}>
            {cat}
          </span>
        ))}
      </div>

      <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
        {checklist.items.map((item) => {
          const isChecked = checked.has(item.id);
          return (
            <label
              key={item.id}
              className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-all duration-150 group ${
                isChecked ? "bg-gray-50" : "hover:bg-gray-50"
              }`}
            >
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all duration-150 ${
                  isChecked
                    ? `bg-primary-500 border-primary-500`
                    : `border-gray-300 group-hover:border-primary-400`
                }`}
              >
                {isChecked && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`text-sm flex-1 transition-colors duration-150 ${isChecked ? "text-gray-400 line-through" : "text-gray-700"}`}>
                {item.text}
              </span>
            </label>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <button
          onClick={() => setChecked(new Set())}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          Reset all
        </button>
        <button
          onClick={downloadMarkdown}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white ${
            checklist.color === "accent"
              ? "bg-accent-600 hover:bg-accent-700"
              : checklist.color === "gold"
              ? "bg-gold-600 hover:bg-gold-700"
              : "bg-primary-600 hover:bg-primary-700"
          } transition-colors`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download as Markdown
        </button>
      </div>
    </div>
  );
}

export default function ChecklistsPage() {
  return (
    <div className="bg-gray-50/50">
      <Section
        title="Actionable Checklists"
        subtitle="Interactive checklists to keep you on track. Check off items, track your progress, and download as Markdown when you're done."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {checklists.map((cl) => (
            <ChecklistCard key={cl.id} checklist={cl} />
          ))}
        </div>
      </Section>
    </div>
  );
}
