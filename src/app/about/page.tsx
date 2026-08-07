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
            To give every person the actionable knowledge, tools, and framework to achieve financial independence using AI and online work — regardless of technical background, starting capital, or location.
          </h1>
          <p className="text-white/70 text-sm max-w-2xl">
            We believe the gap between "people who use AI" and "people who don't" is the single largest wealth-creation opportunity of this decade. This project exists to close that gap permanently.
          </p>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed">
          The AI Retirement Blueprint is a comprehensive resource library designed to help one person achieve financial independence using AI tools and online work. It was built entirely by AI, for humans who want to leverage AI — a living proof that the approach works.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why This Exists</h2>
        <p className="text-gray-600">
          AI didn't just change how we work — it changed who can work. A single person with the right AI tools can now produce the output of an entire team: write, code, design, analyze, automate, and scale. The problem isn't a lack of tools. The problem is a lack of <strong>structured guidance</strong> on how to turn those tools into a real, repeatable income and, ultimately, financial freedom.
        </p>
        <p className="text-gray-600">
          Most AI resources teach you prompts. This project teaches you a <strong>system</strong> — a framework for stacking AI-augmented income streams, building digital assets that compound, and allocating capital intelligently. The guides are step-by-step. The tools are interactive. The templates are ready to use. Everything here is designed to move you from "I know AI exists" to "I have a working plan and I've started."
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What&apos;s Inside</h2>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-primary-50 rounded-xl p-5 border border-primary-100">
            <h3 className="font-bold text-primary-800">📚 Guides</h3>
            <p className="text-sm text-gray-600 mt-2">Step-by-step guides covering everything from AI freelancing to passive income building to investing with AI.</p>
          </div>
          <div className="bg-accent-50 rounded-xl p-5 border border-accent-100">
            <h3 className="font-bold text-accent-800">🔧 Tools</h3>
            <p className="text-sm text-gray-600 mt-2">Interactive calculators and planners — freedom number, savings rate, compound interest, freelance rates, and more.</p>
          </div>
          <div className="bg-gold-50 rounded-xl p-5 border border-gold-100">
            <h3 className="font-bold text-gold-800">🌐 Resources</h3>
            <p className="text-sm text-gray-600 mt-2">Curated library of 60+ tools, platforms, courses, and communities organized by category.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
            <h3 className="font-bold text-purple-800">🔬 Research</h3>
            <p className="text-sm text-gray-600 mt-2">Data-driven analysis of markets, income streams, AI tools, and opportunities.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h3 className="font-bold text-blue-800">📋 Templates</h3>
            <p className="text-sm text-gray-600 mt-2">Ready-to-use templates for proposals, business plans, content calendars, and automation workflows.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Philosophy</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-600">
          <li><strong>Action over theory</strong> — every guide ends with concrete next steps</li>
          <li><strong>AI as leverage</strong> — use AI to do more with less, not to replace thinking</li>
          <li><strong>Stack income streams</strong> — never depend on one source</li>
          <li><strong>Build in public</strong> — share your journey, attract opportunities</li>
          <li><strong>Compound relentlessly</strong> — small daily progress beats occasional sprints</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">How to Use This</h2>
        <div className="bg-gray-50 rounded-xl p-6 border">
          <ol className="list-decimal pl-6 space-y-2 text-gray-600">
            <li>Start with <strong>The Blueprint</strong> guide for the full framework</li>
            <li>Use the <strong>Freedom Calculator</strong> to find your number</li>
            <li>Explore the <strong>Resource Library</strong> for tools to use today</li>
            <li>Read the <strong>Research</strong> for data-driven insights</li>
            <li>Grab <strong>Templates</strong> to execute faster</li>
            <li>Take action. Every day.</li>
          </ol>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border text-center">
          <p className="text-lg font-medium text-gray-800">
            &quot;The best time to start was yesterday. The second best time is now.&quot;
          </p>
          <p className="text-sm text-gray-500 mt-2">Start with The Blueprint. Build from there.</p>
        </div>
      </div>
    </div>
  );
}
