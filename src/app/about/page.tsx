import { Section } from "@/components/Section";

export const metadata = { title: "About — AI Retirement Blueprint" };

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About This Project</h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed">
          The AI Retirement Blueprint is a comprehensive resource library designed to help one person achieve financial independence using AI tools and online work. It was built entirely by AI, for humans who want to leverage AI.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why This Exists</h2>
        <p className="text-gray-600">
          The gap between &quot;people who use AI&quot; and &quot;people who don&apos;t&quot; is growing every day. This project exists to close that gap — to give anyone, regardless of technical background, the knowledge and tools to build an AI-powered income.
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
