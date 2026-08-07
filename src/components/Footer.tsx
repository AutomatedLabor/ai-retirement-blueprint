import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">🚀 AI Retirement Blueprint</h3>
            <p className="text-sm text-gray-400">The actionable framework for achieving financial independence through AI and online work. Built with AI, for everyone who dreams of freedom.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Build</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools" className="hover:text-white transition-colors">Tools</Link></li>
              <li><Link href="/templates" className="hover:text-white transition-colors">Templates</Link></li>
              <li><Link href="/checklists" className="hover:text-white transition-colors">Checklists</Link></li>
              <li><Link href="/cheatsheets" className="hover:text-white transition-colors">Cheatsheets</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/roadmaps" className="hover:text-white transition-colors">Roadmaps</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About This Project</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Built with AI. For everyone who dreams of freedom.</p>
        </div>
      </div>
    </footer>
  );
}
