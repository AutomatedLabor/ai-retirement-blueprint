"use client";

import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";
import { resources } from "@/data/resources";
import { research } from "@/data/research";
import { faqCategories } from "@/data/faq";
import { checklists } from "@/data/checklists";
import { cheatsheets } from "@/data/cheatsheets";

// Templates data (extracted for search — matches templates page)
const templates = [
  { name: "AI Service Proposal Template", description: "Professional proposal template for pitching AI-powered services to clients.", icon: "📄" },
  { name: "Financial Independence Tracker", description: "Spreadsheet template to track your path to financial independence.", icon: "📊" },
  { name: "Client Onboarding Checklist", description: "Streamline client onboarding with AI-enhanced workflows.", icon: "✅" },
  { name: "Content Calendar Template", description: "Plan and schedule your content creation across platforms.", icon: "📅" },
  { name: "Weekly Review Template", description: "Reflect on wins, losses, and lessons to continuously improve.", icon: "📝" },
  { name: "AI Prompt Library Template", description: "Organize your best prompts by category with results tracking.", icon: "🧠" },
  { name: "Invoice & Payment Tracker", description: "Track invoices, payments, and outstanding balances.", icon: "💳" },
  { name: "Goal Setting & Review Framework", description: "Set quarterly goals with milestones and review cadences.", icon: "🎯" },
  { name: "Skill Development Plan", description: "Plan your learning journey with structured milestones.", icon: "📚" },
  { name: "Business Expense Tracker", description: "Categorize and track all business expenses for tax season.", icon: "🧾" },
  { name: "Email Outreach Templates", description: "Cold email, follow-up, and nurture sequences for client acquisition.", icon: "📧" },
  { name: "Project Scope Document", description: "Define project scope, deliverables, timeline, and pricing.", icon: "📋" },
];

interface SearchResult {
  title: string;
  description: string;
  href: string;
  icon: string;
  type: string;
  typeLabel: string;
  score?: number;
}

interface SearchGroup {
  type: string;
  label: string;
  icon: string;
  results: SearchResult[];
}

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

function normalize(str: string) {
  return str.toLowerCase().replace(/\s+/g, " ").trim();
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Keyboard shortcut to close when open
  useEffect(() => {
    function handler(e: globalThis.KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Build all searchable items grouped by type
  const allGroups = useMemo<SearchGroup[]>(() => {
    const groups: SearchGroup[] = [];

    groups.push({
      type: "guides", label: "Guides", icon: "📖",
      results: guides.map((g) => ({
        title: g.title,
        description: g.description,
        href: `/guides/${g.slug}`,
        icon: g.icon,
        type: "guides",
        typeLabel: "Guide",
      })),
    });

    groups.push({
      type: "tools", label: "Tools", icon: "🔧",
      results: tools.map((t) => ({
        title: t.name,
        description: t.description,
        href: `/tools/${t.slug}`,
        icon: t.icon,
        type: "tools",
        typeLabel: "Tool",
      })),
    });

    groups.push({
      type: "resources", label: "Resources", icon: "📦",
      results: resources.map((r) => ({
        title: r.name,
        description: r.description,
        href: r.url.startsWith("http") ? r.url : "/resources",
        icon: r.icon,
        type: "resources",
        typeLabel: "Resource",
      })),
    });

    groups.push({
      type: "research", label: "Research", icon: "🔬",
      results: research.map((r) => ({
        title: r.title,
        description: r.description,
        href: `/research/${r.slug}`,
        icon: r.icon,
        type: "research",
        typeLabel: "Research",
      })),
    });

    groups.push({
      type: "templates", label: "Templates", icon: "📝",
      results: templates.map((t) => ({
        title: t.name,
        description: t.description,
        href: "/templates",
        icon: t.icon,
        type: "templates",
        typeLabel: "Template",
      })),
    });

    groups.push({
      type: "checklists", label: "Checklists", icon: "✅",
      results: checklists.map((c) => ({
        title: c.title,
        description: c.description,
        href: "/checklists",
        icon: c.icon,
        type: "checklists",
        typeLabel: "Checklist",
      })),
    });

    groups.push({
      type: "cheatsheets", label: "Cheatsheets", icon: "📋",
      results: cheatsheets.map((c) => ({
        title: c.title,
        description: c.description,
        href: "/cheatsheets",
        icon: c.icon,
        type: "cheatsheets",
        typeLabel: "Cheatsheet",
      })),
    });

    groups.push({
      type: "faq", label: "FAQ", icon: "❓",
      results: faqCategories.flatMap((cat) =>
        cat.items.map((item) => ({
          title: item.question,
          description: item.answer.substring(0, 150).trim() + "...",
          href: "/faq",
          icon: cat.icon,
          type: "faq",
          typeLabel: "FAQ",
        }))
      ),
    });

    return groups;
  }, []);

  // Filter and score results
  const filteredGroups = useMemo(() => {
    if (!query.trim()) return [];

    const q = normalize(query);
    const words = q.split(" ");

    return allGroups
      .map((group) => {
        const scored = group.results
          .map((result) => {
            const titleNorm = normalize(result.title);
            const descNorm = normalize(result.description);

            let score = 0;
            if (titleNorm.includes(q)) score += 10;
            if (words.every((w) => titleNorm.includes(w))) score += 8;
            if (descNorm.includes(q)) score += 4;
            if (words.every((w) => descNorm.includes(w))) score += 3;
            words.forEach((w) => {
              if (titleNorm.includes(w)) score += 2;
              if (descNorm.includes(w)) score += 1;
            });

            return { ...result, score };
          })
          .filter((r) => r.score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 5);

        return { ...group, results: scored };
      })
      .filter((group) => group.results.length > 0);
  }, [query, allGroups]);

  // Flat list for keyboard navigation
  const flatResults = useMemo(() => {
    return filteredGroups.flatMap((g) => g.results);
  }, [filteredGroups]);

  useEffect(() => {
    setActiveIndex(0);
  }, [filteredGroups]);

  const totalResults = flatResults.length;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % Math.max(totalResults, 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + Math.max(totalResults, 1)) % Math.max(totalResults, 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selected = flatResults[activeIndex];
        if (selected) {
          if (selected.href.startsWith("http")) {
            window.open(selected.href, "_blank");
          } else {
            router.push(selected.href);
          }
          onClose();
        }
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [totalResults, flatResults, activeIndex, router, onClose]
  );

  if (!open) return null;

  let flatIdx = 0;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl mx-4 mt-[10vh] rounded-2xl shadow-2xl overflow-hidden
          bg-white border border-gray-200
          dark:bg-gray-900 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <svg
            className="w-5 h-5 text-gray-400 dark:text-gray-500 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, tools, resources, FAQ..."
            className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-base outline-none"
            aria-label="Search query"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {!query.trim() ? (
            <div className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-lg font-medium mb-1">Start typing to search</p>
              <p className="text-sm">
                Search across guides, tools, resources, research, templates, checklists, cheatsheets, and FAQ
              </p>
            </div>
          ) : filteredGroups.length === 0 ? (
            <div className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
              <p className="text-lg font-medium mb-1">No results found</p>
              <p className="text-sm">Try different keywords or browse the categories</p>
            </div>
          ) : (
            <div className="py-2">
              {filteredGroups.map((group) => (
                <div key={group.type} className="mb-3">
                  <div className="px-4 py-1.5 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    {group.icon} {group.label}
                  </div>
                  {group.results.map((result) => {
                    const idx = flatIdx++;
                    const isActive = idx === activeIndex;
                    const isExternal = result.href.startsWith("http");

                    return (
                      <button
                        key={`${group.type}-${result.title}`}
                        onClick={() => {
                          if (isExternal) {
                            window.open(result.href, "_blank");
                          } else {
                            router.push(result.href);
                          }
                          onClose();
                        }}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`flex items-start gap-3 px-4 py-2.5 mx-2 rounded-lg cursor-pointer text-left transition-colors w-full
                          ${
                            isActive
                              ? "bg-primary-50 dark:bg-primary-900/30"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                        role="option"
                        aria-selected={isActive}
                      >
                        <span className="text-lg shrink-0 mt-0.5">{result.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-sm font-medium truncate ${
                              isActive
                                ? "text-primary-700 dark:text-primary-300"
                                : "text-gray-900 dark:text-gray-100"
                            }`}
                          >
                            {result.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                            {result.description}
                          </p>
                        </div>
                        <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0 mt-1">
                          {result.typeLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {query.trim() && totalResults > 0 && (
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-400 dark:text-gray-500">
            <span>
              {totalResults} result{totalResults !== 1 ? "s" : ""}
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 font-mono text-[10px]">
                  ↑↓
                </kbd>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 font-mono text-[10px]">
                  ↵
                </kbd>
                open
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 font-mono text-[10px]">
                  esc
                </kbd>
                close
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
