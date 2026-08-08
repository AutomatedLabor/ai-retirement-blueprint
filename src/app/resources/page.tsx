"use client";
import { resources, resourceCategories } from "@/data/resources";
import { useState, useMemo } from "react";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [showEditorPicksOnly, setShowEditorPicksOnly] = useState(false);

  const editorPickCount = useMemo(
    () => resources.filter((r) => r.editorPick).length,
    []
  );

  const filtered = resources.filter((r) => {
    if (showEditorPicksOnly && !r.editorPick) return false;
    if (activeCategory && r.category !== activeCategory) return false;
    if (
      search &&
      !r.name.toLowerCase().includes(search.toLowerCase()) &&
      !r.description.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Resource Library
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        {resources.length} curated tools, platforms, and communities for
        building your AI-powered income.
      </p>

      <div className="mb-6 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 sm:max-w-sm p-3 border rounded-xl text-sm"
        />
        <button
          onClick={() => setShowEditorPicksOnly(!showEditorPicksOnly)}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${
            showEditorPicksOnly
              ? "bg-amber-100 text-amber-800 border border-amber-300"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          <span>⭐</span>
          <span>Editor&apos;s Picks Only</span>
          <span
            className={`text-xs px-1.5 py-0.5 rounded-full ${
              showEditorPicksOnly
                ? "bg-amber-200 text-amber-900"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {editorPickCount}
          </span>
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !activeCategory
              ? "bg-primary-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All ({resources.length})
        </button>
        {resourceCategories.map((cat) => {
          const count = resources.filter((r) => r.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() =>
                setActiveCategory(activeCategory === cat.id ? null : cat.id)
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.icon} {cat.name} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((resource) => (
          <a
            key={resource.name}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white rounded-xl p-5 border hover:shadow-lg transition-all hover:-translate-y-1 ${
              resource.editorPick
                ? "border-amber-200 ring-1 ring-amber-100"
                : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{resource.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-gray-900">
                    {resource.name}
                  </h3>
                  {resource.editorPick && (
                    <span className="inline-flex items-center gap-0.5 text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">
                      ⭐ Editor&apos;s Pick
                    </span>
                  )}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      resource.pricing === "Free"
                        ? "bg-accent-100 text-accent-700"
                        : resource.pricing === "Freemium"
                          ? "bg-primary-100 text-primary-700"
                          : resource.pricing === "Paid"
                            ? "bg-gold-100 text-gold-700"
                            : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {resource.pricing}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  {resource.description}
                </p>
                <div className="text-xs text-gray-400 mt-2">
                  {resource.subcategory}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <div className="text-4xl mb-4">🔍</div>
          <p>No resources found. Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}
