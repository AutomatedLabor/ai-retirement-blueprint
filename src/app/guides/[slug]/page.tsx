import { guides } from "@/data/guides";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return {};
  return { title: `${guide.title} — AI Retirement Blueprint`, description: guide.description };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) notFound();

  const difficultyColor: Record<string, string> = {
    Beginner: "bg-accent-100 text-accent-700",
    Intermediate: "bg-primary-100 text-primary-700",
    Advanced: "bg-gold-100 text-gold-700",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/guides" className="text-primary-600 hover:text-primary-800 text-sm mb-6 inline-block">← Back to Guides</Link>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{guide.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{guide.title}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${difficultyColor[guide.difficulty]}`}>{guide.difficulty}</span>
              <span className="text-sm text-gray-500">⏱ {guide.readTime}</span>
            </div>
          </div>
        </div>
        <p className="text-lg text-gray-600">{guide.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {guide.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">#{tag}</span>
          ))}
        </div>
      </div>
      <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: markdownToHtml(guide.content) }} />
      <div className="mt-12 pt-8 border-t">
        <h3 className="font-semibold text-lg mb-4">Continue Reading</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {guides.filter((g) => g.slug !== guide.slug).slice(0, 2).map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="block p-4 rounded-xl border hover:shadow-md transition-shadow">
              <span className="text-2xl">{g.icon}</span>
              <h4 className="font-semibold mt-2">{g.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{g.description}</p>
            </Link>
          ))}
        </div>
      </div>
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
    .replace(/^\|(.+)\|$/gim, (match) => {
      const cells = match.split("|").filter(Boolean).map((c) => c.trim());
      if (cells.every((c) => /^[-:]+$/.test(c))) return "";
      return "<tr>" + cells.map((c) => `<td>${c}</td>`).join("") + "</tr>";
    })
    .replace(/^\- (.*$)/gim, "<li>$1</li>")
    .replace(/^\d+\. (.*$)/gim, "<li>$1</li>")
    .replace(/\n{2,}/gim, "</p><p>")
    .replace(/\n/gim, "<br>");

  html = "<p>" + html + "</p>";
  html = html.replace(/<li>([\s\S]*?)(?=<\/p>|<h|<li>)/gim, (match) => {
    const items = match.match(/<li>.*?(?=<li>|$)/gims);
    if (items && items.length > 1) return "<ul>" + items.join("") + "</ul>";
    return match;
  });
  return html;
}
