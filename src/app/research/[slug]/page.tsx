import { research } from "@/data/research";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return research.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const r = research.find((x) => x.slug === params.slug);
  if (!r) return {};
  return { title: `${r.title} — AI Retirement Blueprint`, description: r.description };
}

export default function ResearchDetailPage({ params }: { params: { slug: string } }) {
  const r = research.find((x) => x.slug === params.slug);
  if (!r) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/research" className="text-primary-600 hover:text-primary-800 text-sm mb-6 inline-block">← Back to Research</Link>
      <div className="mb-8">
        <span className="text-4xl">{r.icon}</span>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">{r.title}</h1>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xs bg-primary-100 text-primary-700 px-2.5 py-1 rounded-full font-medium">{r.category}</span>
          <span className="text-sm text-gray-500">⏱ {r.readTime}</span>
        </div>
        <p className="text-lg text-gray-600 mt-3">{r.description}</p>
      </div>
      <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: markdownToHtml(r.content) }} />
    </div>
  );
}

function markdownToHtml(md: string): string {
  let html = md
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    .replace(/`{3}([\s\S]*?)`{3}/gim, "<pre><code>$1</code></pre>")
    .replace(/`(.*?)`/gim, "<code>$1</code>")
    .replace(/^\- (.*$)/gim, "<li>$1</li>")
    .replace(/^\d+\. (.*$)/gim, "<li>$1</li>")
    .replace(/\n{2,}/gim, "</p><p>")
    .replace(/\n/gim, "<br>");
  return "<p>" + html + "</p>";
}
