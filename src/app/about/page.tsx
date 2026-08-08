import { Section } from "@/components/Section";

export const metadata = { title: "About — AI Retirement Blueprint" };

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Mission Statement Banner */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white rounded-2xl p-8 mb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zLTMgMS4zNC0zIDMgMS4zNCAzIDMgM3oiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-3">Mission</p>
          <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-3">
            To democratize the path to financial independence by giving every person — regardless of technical background, starting capital, or geography — the actionable knowledge, interactive tools, and proven frameworks to leverage AI for income generation, wealth building, and early retirement.
          </h1>
          <p className="text-white/70 text-sm max-w-2xl">
            The AI revolution is the largest wealth-creation opportunity of our generation. But opportunity without structure is just noise. We exist to bridge the gap between &quot;AI is powerful&quot; and &quot;here is exactly how I will use it to become financially free.&quot; Every guide, tool, and resource on this site is designed to move you one concrete step closer to that goal.
          </p>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          The AI Retirement Blueprint is a comprehensive resource library designed to help one person achieve financial independence using AI tools and online work. It was built entirely by AI, for humans who want to leverage AI — a living proof that the approach works.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why This Exists</h2>
        <p className="text-gray-600 dark:text-gray-400">
          AI didn&apos;t just change how we work — it changed who can work. A single person with the right AI tools can now produce the output of an entire team: write, code, design, analyze, automate, and scale. The problem isn&apos;t a lack of tools. The problem is a lack of <strong>structured guidance</strong> on how to turn those tools into a real, repeatable income and, ultimately, financial freedom.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Most AI resources teach you prompts. This project teaches you a <strong>system</strong> — a framework for stacking AI-augmented income streams, building digital assets that compound, and allocating capital intelligently. The guides are step-by-step. The tools are interactive. The templates are ready to use. Everything here is designed to move you from &quot;I know AI exists&quot; to &quot;I have a working plan and I&apos;ve started.&quot;
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What&apos;s Inside</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          <div className="bg-primary-50 dark:bg-gray-900 rounded-xl p-5 border border-primary-100 dark:border-gray-800">
            <h3 className="font-bold text-primary-800 dark:text-primary-400">📚 Guides</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">12 deep-dive guides covering AI freelancing, passive income, investing, tax strategy, and more.</p>
          </div>
          <div className="bg-accent-50 dark:bg-gray-900 rounded-xl p-5 border border-accent-100 dark:border-gray-800">
            <h3 className="font-bold text-accent-800 dark:text-accent-400">🔧 Tools</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">16 interactive calculators, assessments, planners, and generators.</p>
          </div>
          <div className="bg-gold-50 dark:bg-gray-900 rounded-xl p-5 border border-gold-100 dark:border-gray-800">
            <h3 className="font-bold text-gold-800 dark:text-gold-400">🌐 Resources</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Curated library of 166 tools, platforms, courses, and communities.</p>
          </div>
          <div className="bg-purple-50 dark:bg-gray-900 rounded-xl p-5 border border-purple-100 dark:border-gray-800">
            <h3 className="font-bold text-purple-800 dark:text-purple-400">🔬 Research</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">12 data-driven research reports on markets, income, and AI trends.</p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-900 rounded-xl p-5 border border-blue-100 dark:border-gray-800">
            <h3 className="font-bold text-blue-800 dark:text-blue-400">📋 Templates</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">14 ready-to-use templates for business, finance, and productivity.</p>
          </div>
          <div className="bg-emerald-50 dark:bg-gray-900 rounded-xl p-5 border border-emerald-100 dark:border-gray-800">
            <h3 className="font-bold text-emerald-800 dark:text-emerald-400">✅ Checklists</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">8 downloadable checklists for launching, reviewing, and planning.</p>
          </div>
          <div className="bg-amber-50 dark:bg-gray-900 rounded-xl p-5 border border-amber-100 dark:border-gray-800">
            <h3 className="font-bold text-amber-800 dark:text-amber-400">📋 Cheatsheets</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">6 quick-reference guides for prompts, taxes, investing, and content.</p>
          </div>
          <div className="bg-rose-50 dark:bg-gray-900 rounded-xl p-5 border border-rose-100 dark:border-gray-800">
            <h3 className="font-bold text-rose-800 dark:text-rose-400">🗺️ Roadmaps</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">3 visual learning paths from zero to financial independence.</p>
          </div>
          <div className="bg-cyan-50 dark:bg-gray-900 rounded-xl p-5 border border-cyan-100 dark:border-gray-800">
            <h3 className="font-bold text-cyan-800 dark:text-cyan-400">❓ FAQ</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">21 honest answers to the most common questions.</p>
          </div>
          <div className="bg-teal-50 dark:bg-gray-900 rounded-xl p-5 border border-teal-100 dark:border-gray-800">
            <h3 className="font-bold text-teal-800 dark:text-teal-400">📥 Downloads</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">10 downloadable resources including spreadsheets, worksheets, and planning documents.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Philosophy</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-600 dark:text-gray-400">
          <li><strong>Action over theory</strong> — every guide ends with concrete next steps</li>
          <li><strong>AI as leverage</strong> — use AI to do more with less, not to replace thinking</li>
          <li><strong>Stack income streams</strong> — never depend on one source</li>
          <li><strong>Build in public</strong> — share your journey, attract opportunities</li>
          <li><strong>Compound relentlessly</strong> — small daily progress beats occasional sprints</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">How to Use This</h2>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <ol className="list-decimal pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Start with <strong>The Blueprint</strong> guide for the full framework</li>
            <li>Take the <strong>AI Skills Assessment</strong> to find your strengths</li>
            <li>Use the <strong>Freedom Calculator</strong> to find your number</li>
            <li>Follow a <strong>Roadmap</strong> that matches your starting point</li>
            <li>Explore the <strong>Resource Library</strong> for tools to use today</li>
            <li>Read the <strong>Research</strong> for data-driven insights</li>
            <li>Grab <strong>Templates &amp; Checklists</strong> to execute faster</li>
            <li>Download <strong>spreadsheets and worksheets</strong> from the Downloads section</li>
            <li>Take action. Every day.</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Who Is This For?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This blueprint is built for anyone who wants to use AI as a lever for financial independence. It&apos;s especially valuable for:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
          {[
            { label: "Freelancers", desc: "Amplify your output, raise your rates, and scale with AI" },
            { label: "Content Creators", desc: "Produce more, repurpose smarter, and monetize faster" },
            { label: "Developers", desc: "Ship faster, build AI-powered products, and earn more per hour" },
            { label: "Consultants", desc: "Deliver deeper analysis and broader scope in less time" },
            { label: "Digital Nomads", desc: "Build location-independent income with AI-leveraged services" },
            { label: "Career Changers", desc: "Transition into high-demand AI-augmented roles with low risk" },
            { label: "Side Hustlers", desc: "Build a second income stream in 10-15 hours per week" },
            { label: "Retirees-to-be", desc: "Accelerate your path to FI with AI-powered income and investing" },
          ].map((item) => (
            <div key={item.label} className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100">{item.label}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Data &amp; Methodology</h2>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The income projections, market data, and financial benchmarks across this site are derived from a combination of authoritative public sources and industry research. We cross-reference multiple data points to provide realistic, evidence-based guidance rather than optimistic speculation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: "Bureau of Labor Statistics (BLS)", usage: "Occupational wage data, employment projections, and gig economy trends" },
              { name: "Internal Revenue Service (IRS)", usage: "Tax brackets, self-employment tax rates, deduction rules, and retirement account limits" },
              { name: "Federal Reserve", usage: "SCF wealth data, interest rate benchmarks, and household finance statistics" },
              { name: "McKinsey Global Institute", usage: "AI adoption rates, economic impact projections, and workforce transformation research" },
              { name: "Vanguard", usage: "Investment return benchmarks, portfolio allocation models, and retirement withdrawal research" },
              { name: "Morningstar", usage: "Fund performance data, expense ratio analysis, and asset class return histories" },
              { name: "Upwork", usage: "Freelancer earnings data, in-demand skill categories, and platform rate trends" },
              { name: "Statista", usage: "Market size data, AI industry growth rates, and digital economy statistics" },
              { name: "Gallup", usage: "Workforce engagement data, self-employment trends, and economic confidence indicators" },
            ].map((source) => (
              <div key={source.name} className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-xs text-gray-900 dark:text-gray-100">{source.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{source.usage}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            Three recent additions to our research library provide updated 2025-2026 data:
          </p>
          <ul className="list-disc pl-5 text-xs text-gray-600 dark:text-gray-300 space-y-1 mt-2">
            <li><strong>The AI-Powered Freelance Economy: Market Data, Income Benchmarks &amp; Strategic Opportunities 2025-2026</strong> — Updated freelance workforce data, AI adoption rates, and income benchmarks.</li>
            <li><strong>Geoarbitrage in the AI Age: A Data-Driven Financial Strategy for Location Independence 2025-2026</strong> — Cost-of-living comparisons across 25+ cities with tax implications and location independence analysis.</li>
            <li><strong>Social Security Optimization &amp; Retirement Account Strategies for AI-Era Workers: A 2025-2026 Guide</strong> — Claiming strategies, gig worker retirement accounts, and tax-efficient withdrawal planning.</li>
          </ul>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 italic">
            All projections are estimates based on available data and should not be considered financial advice. Individual results depend on effort, market conditions, and personal circumstances. Consult a qualified financial advisor for decisions specific to your situation.
          </p>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-900 rounded-xl border border-primary-100 dark:border-gray-800 text-center">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            &quot;The best time to start was yesterday. The second best time is now.&quot;
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Start with The Blueprint. Build from there.</p>
        </div>
      </div>
    </div>
  );
}
