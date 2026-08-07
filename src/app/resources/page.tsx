"use client";
import { resources, resourceCategories } from "@/data/resources";
import { useState } from "react";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const filtered = resources.filter((r) => {
    if (activeCategory && r.category !== activeCategory) return false;
    if (search && !r.name.toLowerCase().includes(search.toLowerCase()) && !r.description.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Resource Library</h1>
      <p className="text-lg text-gray-600 mb-8">{resources.length} curated tools, platforms, and communities for building your AI-powered income.</p>

      <div className="mb-6">
        <input type="text" placeholder="Search resources..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full md:w-96 p-3 border rounded-xl text-sm" />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button onClick={() => setActiveCategory(null)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!activeCategory ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
          All ({resources.length})
        </button>
        {resourceCategories.map((cat) => {
          const count = resources.filter((r) => r.category === cat.id).length;
          return (
            <button key={cat.id} onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.id ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
              {cat.icon} {cat.name} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((resource) => (
          <a key={resource.name} href={resource.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-5 border hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{resource.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{resource.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${resource.pricing === "Free" ? "bg-accent-100 text-accent-700" : resource.pricing === "Freemium" ? "bg-primary-100 text-primary-700" : resource.pricing === "Paid" ? "bg-gold-100 text-gold-700" : "bg-gray-100 text-gray-700"}`}>
                    {resource.pricing}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{resource.description}</p>
                <div className="text-xs text-gray-400 mt-2">{resource.subcategory}</div>
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
