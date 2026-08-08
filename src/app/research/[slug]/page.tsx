import { research } from "@/data/research";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      <Link href="/research" className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 text-sm mb-6 inline-block">← Back to Research</Link>
      <div className="mb-8">
        <span className="text-4xl">{r.icon}</span>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{r.title}</h1>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2.5 py-1 rounded-full font-medium">{r.category}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">⏱ {r.readTime}</span>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">{r.description}</p>
      </div>
      <article className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{r.content}</ReactMarkdown>
      </article>
    </div>
  );
}
