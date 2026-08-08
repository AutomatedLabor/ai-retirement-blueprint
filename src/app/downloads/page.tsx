"use client";
import { useState, useMemo } from "react";
import { downloadableResources, downloadCategories, DownloadableResource } from "@/data/downloads";

function downloadFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

function getWordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function getCategoryColor(category: string) {
  switch (category) {
    case "Templates": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "Tracking": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
    case "Productivity": return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "Planning": return "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400";
    case "Finance": return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400";
    case "Tools": return "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400";
    case "Lifestyle": return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
    case "Business": return "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400";
    default: return "bg-gray-100 text-gray-700";
  }
}

export default function DownloadsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [previewResource, setPreviewResource] = useState<DownloadableResource | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const filteredResources = useMemo(() => {
    return downloadableResources.filter((r) => {
      const matchesCategory = category === "All" || r.category === category;
      const matchesSearch =
        search === "" ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const handleCopy = (resource: DownloadableResource) => {
    copyToClipboard(resource.content);
    setCopiedId(resource.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownload = (resource: DownloadableResource) => {
    downloadFile(resource.filename, resource.content);
    setDownloadedId(resource.id);
    setTimeout(() => setDownloadedId(null), 2000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur">
              📥 Free Downloadable Resources
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Download &amp; Use{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                10 Free Resources
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Templates, trackers, guides, and checklists — ready to download as Markdown files. Copy, customize, and start building your AI-powered retirement plan.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search resources by title or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
            </div>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {downloadCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    category === cat
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {/* Results count */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Showing {filteredResources.length} of {downloadableResources.length} resources
          </p>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-10">
          {filteredResources.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">No resources found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 card-hover flex flex-col"
                >
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{resource.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base leading-tight">
                          {resource.title}
                        </h3>
                        <span className={`inline-block mt-1.5 text-xs font-medium px-2 py-0.5 rounded-full ${getCategoryColor(resource.category)}`}>
                          {resource.category}
                        </span>
                      </div>
                    </div>
                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {resource.description}
                    </p>
                    {/* Word count */}
                    <div className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                      📄 {getWordCount(resource.content).toLocaleString()} words
                    </div>
                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDownload(resource)}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          downloadedId === resource.id
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                            : "bg-emerald-600 text-white hover:bg-emerald-700"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {downloadedId === resource.id ? "Downloaded!" : "Download .md"}
                      </button>
                      <button
                        onClick={() => setPreviewResource(resource)}
                        className="px-3 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        Preview
                      </button>
                      <button
                        onClick={() => handleCopy(resource)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                          copiedId === resource.id ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700" : ""
                        }`}
                        title="Copy content to clipboard"
                      >
                        {copiedId === resource.id ? (
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Preview Modal */}
      {previewResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setPreviewResource(null)}
          />
          {/* Modal */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl">{previewResource.icon}</span>
                <div className="min-w-0">
                  <h2 className="font-bold text-gray-900 dark:text-gray-100 truncate">
                    {previewResource.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {getWordCount(previewResource.content).toLocaleString()} words • {previewResource.category}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <button
                  onClick={() => handleDownload(previewResource)}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
                <button
                  onClick={() => setPreviewResource(null)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap font-mono text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {previewResource.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
