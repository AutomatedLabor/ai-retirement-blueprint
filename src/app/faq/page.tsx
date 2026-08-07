"use client";

import { useState } from "react";
import { faqCategories } from "@/data/faq";
import { Section } from "@/components/Section";

const categoryColors: Record<string, { header: string; border: string; badge: string; chevron: string }> = {
  primary: {
    header: "bg-primary-50 border-primary-100",
    border: "border-primary-200",
    badge: "bg-primary-100 text-primary-700",
    chevron: "text-primary-500",
  },
  accent: {
    header: "bg-accent-50 border-accent-100",
    border: "border-accent-200",
    badge: "bg-accent-100 text-accent-700",
    chevron: "text-accent-500",
  },
  gold: {
    header: "bg-gold-50 border-gold-100",
    border: "border-gold-200",
    badge: "bg-gold-100 text-gold-700",
    chevron: "text-gold-500",
  },
};

function FaqAccordion({ category }: { category: (typeof faqCategories)[0] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [allExpanded, setAllExpanded] = useState(false);
  const c = categoryColors[category.color];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAll = () => {
    if (allExpanded) {
      setOpenIndex(null);
    } else {
      setOpenIndex(-1);
    }
    setAllExpanded(!allExpanded);
  };

  const isExpanded = (index: number) => allExpanded || openIndex === index;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Category Header */}
      <div className={`px-6 py-4 border-b ${c.header}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{category.icon}</span>
            <h2 className="text-lg font-bold text-gray-900">{category.title}</h2>
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${c.badge}`}>
              {category.items.length} questions
            </span>
          </div>
          <button
            onClick={toggleAll}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors font-medium"
          >
            {allExpanded ? "Collapse all" : "Expand all"}
          </button>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="divide-y divide-gray-100">
        {category.items.map((item, index) => {
          const expanded = isExpanded(index);
          return (
            <div key={index} className="group">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex items-start gap-4 hover:bg-gray-50/50 transition-colors"
                aria-expanded={expanded}
              >
                <svg
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-transform duration-300 ${c.chevron} ${
                    expanded ? "rotate-90" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className={`font-medium text-gray-900 transition-colors ${expanded ? "text-gray-900" : "group-hover:text-primary-700"}`}>
                  {item.question}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pl-16">
                  <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? faqCategories.filter((c) => c.id === activeCategory)
    : faqCategories;

  const totalQuestions = faqCategories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="bg-gray-50/50">
      <Section
        title="Frequently Asked Questions"
        subtitle={`${totalQuestions} questions answered. Real, actionable answers — no fluff, no vague hand-waving.`}
      >
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !activeCategory
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-700"
            }`}
          >
            All ({totalQuestions})
          </button>
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-700"
              }`}
            >
              {cat.icon} {cat.title} ({cat.items.length})
            </button>
          ))}
        </div>

        {/* Accordion Groups */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {filtered.map((category) => (
            <FaqAccordion key={category.id} category={category} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 border border-gray-200 text-sm text-gray-600">
            <span>Still have questions?</span>
            <a
              href="/about"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}