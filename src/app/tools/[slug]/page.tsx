import { tools } from "@/data/tools";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ToolComponent } from "@/components/ToolComponent";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return {};
  return { title: `${tool.name} — AI Retirement Blueprint`, description: tool.description };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/tools" className="text-primary-600 hover:text-primary-800 text-sm mb-6 inline-block">← Back to Tools</Link>
      <div className="mb-8">
        <span className="text-4xl">{tool.icon}</span>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">{tool.name}</h1>
        <p className="text-lg text-gray-600 mt-2">{tool.description}</p>
      </div>
      <ToolComponent slug={tool.slug} />
    </div>
  );
}
