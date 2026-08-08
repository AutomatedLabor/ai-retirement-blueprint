import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";
import { checklists } from "@/data/checklists";
import { cheatsheets } from "@/data/cheatsheets";
import { roadmaps } from "@/data/roadmaps";
import { downloadableResources } from "@/data/downloads";

const stats = [
  { label: "In-Depth Guides", value: "12", icon: "📚" },
  { label: "Interactive Tools", value: "16", icon: "🔧" },
  { label: "Curated Resources", value: "166", icon: "🌐" },
  { label: "Research Reports", value: "12", icon: "🔬" },
  { label: "Actionable Checklists", value: "8", icon: "✅" },
  { label: "Quick-Reference Cheatsheets", value: "6", icon: "📋" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zLTMgMS4zNC0zIDMgMS4zNCAzIDMgM3oiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur">
              🚀 The Complete Toolkit for AI-Powered Retirement
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Retire Using <span className="text-gradient bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">AI & Online Work</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Structured guides, interactive tools, curated resources, deep research, and ready-to-use templates — everything you need to achieve financial independence in the AI era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/guides" className="px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-center">
                Start Reading →
              </Link>
              <Link href="/tools" className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors backdrop-blur border border-white/20 text-center">
                Explore Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Framework */}
      <Section title="The Framework" subtitle="Three pillars to build your AI-powered retirement">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">AI-Augmented Income</h3>
            <p className="text-gray-600">Use AI tools to deliver 10x the value in half the time. One person with the right tools can now do what used to require a team.</p>
          </div>
          <div className="bg-gradient-to-br from-accent-50 to-white rounded-xl p-6 border border-accent-100">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-2">Digital Asset Building</h3>
            <p className="text-gray-600">Build things that work while you sleep — content, software, templates, courses. Compounding assets beat hourly work every time.</p>
          </div>
          <div className="bg-gradient-to-br from-gold-50 to-white rounded-xl p-6 border border-gold-100">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-2">Smart Capital Allocation</h3>
            <p className="text-gray-600">Put your money to work with AI-enhanced investing. Index funds as a foundation, then layer on data-driven decisions.</p>
          </div>
        </div>
      </Section>

      {/* Featured Guides */}
      <Section title="Start Here" subtitle="The essential reading list, ordered by where you should begin" className="bg-gray-50 dark:bg-gray-950">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.slice(0, 6).map((guide) => (
            <Card key={guide.slug} title={guide.title} description={guide.description} icon={guide.icon} href={`/guides/${guide.slug}`} tag={guide.difficulty} tagColor={guide.difficulty === "Beginner" ? "accent" : guide.difficulty === "Intermediate" ? "primary" : "gold"} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides" className="text-primary-600 font-semibold hover:text-primary-800">
            View all guides →
          </Link>
        </div>
      </Section>

      {/* Quick Links - New Sections */}
      <Section title="New: Actionable Resources" subtitle="Checklists, cheatsheets, roadmaps, downloads, and answers to every question" className="bg-gray-50 dark:bg-gray-950">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Link href="/checklists" className="bg-white dark:bg-gray-900 rounded-xl p-6 border dark:border-gray-800 card-hover">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-bold text-lg">Checklists</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{checklists.length} downloadable checklists to keep you on track</p>
          </Link>
          <Link href="/cheatsheets" className="bg-white dark:bg-gray-900 rounded-xl p-6 border dark:border-gray-800 card-hover">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold text-lg">Cheatsheets</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cheatsheets.length} quick-reference guides you can copy and print</p>
          </Link>
          <Link href="/roadmaps" className="bg-white dark:bg-gray-900 rounded-xl p-6 border dark:border-gray-800 card-hover">
            <div className="text-3xl mb-3">🗺️</div>
            <h3 className="font-bold text-lg">Roadmaps</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{roadmaps.length} step-by-step learning paths from zero to FI</p>
          </Link>
          <Link href="/downloads" className="bg-white dark:bg-gray-900 rounded-xl p-6 border dark:border-gray-800 card-hover">
            <div className="text-3xl mb-3">📥</div>
            <h3 className="font-bold text-lg">Downloads</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{downloadableResources.length} free templates, guides, and tools to download</p>
          </Link>
          <Link href="/faq" className="bg-white dark:bg-gray-900 rounded-xl p-6 border dark:border-gray-800 card-hover">
            <div className="text-3xl mb-3">❓</div>
            <h3 className="font-bold text-lg">FAQ</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Answers to 20+ questions about AI-powered retirement</p>
          </Link>
        </div>
      </Section>

      {/* Tools Preview */}
      <Section title="Interactive Tools" subtitle="Calculators, planners, assessments, and generators to make your plan concrete">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.slice(0, 6).map((tool) => (
            <Card key={tool.slug} title={tool.name} description={tool.description} icon={tool.icon} href={`/tools/${tool.slug}`} tag={tool.category} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/tools" className="text-primary-600 font-semibold hover:text-primary-800">
            Explore all tools →
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your retirement starts with a single step</h2>
          <p className="text-lg text-white/80 mb-8">Everything you need is here. The guides, the tools, the resources. The only missing ingredient is your action.</p>
          <Link href="/guides/the-blueprint" className="inline-block px-8 py-3.5 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
            Read The Blueprint →
          </Link>
        </div>
      </section>
    </>
  );
}
