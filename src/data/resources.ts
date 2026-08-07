export interface Resource {
  name: string;
  url: string;
  description: string;
  category: string;
  subcategory: string;
  pricing: "Free" | "Freemium" | "Paid" | "Varies";
  icon: string;
}

export const resourceCategories = [
  { id: "ai-tools", name: "AI Tools", icon: "🤖", description: "AI-powered tools for productivity, creativity, and automation" },
  { id: "learning", name: "Learning", icon: "📚", description: "Courses, tutorials, and educational resources" },
  { id: "freelancing", name: "Freelancing", icon: "💼", description: "Platforms and tools for freelancers" },
  { id: "business", name: "Business Building", icon: "🏗️", description: "Tools for starting and growing a business" },
  { id: "investing", name: "Investing", icon: "📊", description: "Investment platforms and research tools" },
  { id: "productivity", name: "Productivity", icon: "⚡", description: "Tools to maximize your output" },
  { id: "content", name: "Content Creation", icon: "✍️", description: "Tools for creating content at scale" },
  { id: "community", name: "Communities", icon: "👥", description: "Online communities for support and networking" },
];

export const resources: Resource[] = [
  // AI Tools
  { name: "ChatGPT", url: "https://chat.openai.com", description: "The most versatile AI assistant. Use for writing, coding, analysis, brainstorming, and more.", category: "ai-tools", subcategory: "Chatbots", pricing: "Freemium", icon: "💬" },
  { name: "Claude", url: "https://claude.ai", description: "Excellent for long-form writing, analysis, and coding. Better at nuanced tasks.", category: "ai-tools", subcategory: "Chatbots", pricing: "Freemium", icon: "🧠" },
  { name: "Cursor", url: "https://cursor.sh", description: "AI-powered code editor. Write code 10x faster with AI autocomplete and chat.", category: "ai-tools", subcategory: "Development", pricing: "Freemium", icon: "⌨️" },
  { name: "Midjourney", url: "https://midjourney.com", description: "Generate stunning images from text descriptions. Best for artistic and creative work.", category: "ai-tools", subcategory: "Image Generation", pricing: "Paid", icon: "🎨" },
  { name: "Perplexity", url: "https://perplexity.ai", description: "AI-powered search engine. Get cited, real-time answers to any question.", category: "ai-tools", subcategory: "Research", pricing: "Freemium", icon: "🔍" },
  { name: "v0.dev", url: "https://v0.dev", description: "Generate React/Next.js UI components from text descriptions. By Vercel.", category: "ai-tools", subcategory: "Development", pricing: "Freemium", icon: "🖥️" },
  { name: "ElevenLabs", url: "https://elevenlabs.io", description: "AI voice generation and cloning. Create natural-sounding narration.", category: "ai-tools", subcategory: "Audio", pricing: "Freemium", icon: "🎙️" },
  { name: "Runway ML", url: "https://runwayml.com", description: "AI video generation and editing. Create and manipulate video with AI.", category: "ai-tools", subcategory: "Video", pricing: "Freemium", icon: "🎬" },
  { name: "Notion AI", url: "https://notion.so", description: "All-in-one workspace with built-in AI for notes, docs, databases, and project management.", category: "ai-tools", subcategory: "Productivity", pricing: "Freemium", icon: "📝" },
  { name: "Zapier", url: "https://zapier.com", description: "Automate workflows between 6,000+ apps. No-code automation.", category: "ai-tools", subcategory: "Automation", pricing: "Freemium", icon: "⚡" },
  { name: "Make (Integromat)", url: "https://make.com", description: "Visual automation platform. More powerful than Zapier for complex workflows.", category: "ai-tools", subcategory: "Automation", pricing: "Freemium", icon: "🔧" },
  { name: "n8n", url: "https://n8n.io", description: "Open-source workflow automation. Self-host for free.", category: "ai-tools", subcategory: "Automation", pricing: "Free", icon: "🔗" },
  { name: "Leonardo AI", url: "https://leonardo.ai", description: "AI image generation with fine-grained control. Great for product mockups.", category: "ai-tools", subcategory: "Image Generation", pricing: "Freemium", icon: "🖼️" },
  { name: "Descript", url: "https://descript.com", description: "AI-powered video and podcast editing. Edit media like a document.", category: "ai-tools", subcategory: "Video", pricing: "Freemium", icon: "🎥" },
  { name: "Fireflies.ai", url: "https://fireflies.ai", description: "AI meeting notes and transcription. Never miss action items again.", category: "ai-tools", subcategory: "Productivity", pricing: "Freemium", icon: "🔥" },

  // Learning
  { name: "freeCodeCamp", url: "https://freecodecamp.org", description: "Free coding bootcamp. Learn web development, data science, and more.", category: "learning", subcategory: "Coding", pricing: "Free", icon: "💻" },
  { name: "Coursera", url: "https://coursera.org", description: "University-level courses from top institutions. Many free to audit.", category: "learning", subcategory: "General", pricing: "Freemium", icon: "🎓" },
  { name: "YouTube", url: "https://youtube.com", description: "The world's largest free education platform. Learn anything.", category: "learning", subcategory: "General", pricing: "Free", icon: "📺" },
  { name: "Fast.ai", url: "https://fast.ai", description: "Free deep learning courses. Practical, code-first approach.", category: "learning", subcategory: "AI/ML", pricing: "Free", icon: "🧬" },
  { name: "Prompt Engineering Guide", url: "https://github.com/dair-ai/Prompt-Engineering-Guide", description: "Comprehensive guide to prompt engineering techniques and best practices.", category: "learning", subcategory: "AI/ML", pricing: "Free", icon: "📖" },
  { name: "Hugging Face", url: "https://huggingface.co", description: "Open-source AI community. Models, datasets, and spaces.", category: "learning", subcategory: "AI/ML", pricing: "Free", icon: "🤗" },
  { name: "The Odin Project", url: "https://theodinproject.com", description: "Free full-stack web development curriculum.", category: "learning", subcategory: "Coding", pricing: "Free", icon: "🗡️" },
  { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu", description: "Free MIT course materials. World-class education, zero cost.", category: "learning", subcategory: "General", pricing: "Free", icon: "🏛️" },

  // Freelancing
  { name: "Upwork", url: "https://upwork.com", description: "Largest freelancing platform. Good for beginners. Wide variety of work.", category: "freelancing", subcategory: "Marketplace", pricing: "Free", icon: "💼" },
  { name: "Toptal", url: "https://toptal.com", description: "Elite freelancing network. Top 3% of talent. Higher rates.", category: "freelancing", subcategory: "Marketplace", pricing: "Free", icon: "🏆" },
  { name: "Fiverr", url: "https://fiverr.com", description: "Service marketplace. Good for productized services.", category: "freelancing", subcategory: "Marketplace", pricing: "Free", icon: "🎪" },
  { name: "Contra", url: "https://contra.com", description: "Commission-free freelancing platform. Keep 100% of your earnings.", category: "freelancing", subcategory: "Marketplace", pricing: "Free", icon: "🤝" },
  { name: "Toggl", url: "https://toggl.com", description: "Time tracking for freelancers. Know where your time goes.", category: "freelancing", subcategory: "Tools", pricing: "Freemium", icon: "⏱️" },
  { name: "Bonsai", url: "https://hellobonsai.com", description: "All-in-one freelancing tool: contracts, invoicing, accounting, taxes.", category: "freelancing", subcategory: "Tools", pricing: "Paid", icon: "🌿" },

  // Business Building
  { name: "Stripe", url: "https://stripe.com", description: "Payment processing for internet businesses. Best developer experience.", category: "business", subcategory: "Payments", pricing: "Varies", icon: "💳" },
  { name: "LemonSqueezy", url: "https://lemonsqueezy.com", description: "Sell digital products easily. Handles payments, taxes, and subscriptions.", category: "business", subcategory: "Payments", pricing: "Varies", icon: "🍋" },
  { name: "Gumroad", url: "https://gumroad.com", description: "Sell digital products directly to your audience. Simple and effective.", category: "business", subcategory: "Payments", pricing: "Varies", icon: "🛍️" },
  { name: "Vercel", url: "https://vercel.com", description: "Deploy web apps instantly. Best for Next.js. Generous free tier.", category: "business", subcategory: "Hosting", pricing: "Freemium", icon: "▲" },
  { name: "Supabase", url: "https://supabase.com", description: "Open-source Firebase alternative. Database, auth, storage, and more.", category: "business", subcategory: "Backend", pricing: "Freemium", icon: "🗄️" },
  { name: "Resend", url: "https://resend.com", description: "Email API for developers. Transactional and marketing emails.", category: "business", subcategory: "Email", pricing: "Freemium", icon: "📧" },
  { name: "Plausible Analytics", url: "https://plausible.io", description: "Privacy-friendly web analytics. Simple, lightweight, GDPR-compliant.", category: "business", subcategory: "Analytics", pricing: "Paid", icon: "📈" },
  { name: "Crisp", url: "https://crisp.chat", description: "Live chat and chatbot for websites. AI-powered customer support.", category: "business", subcategory: "Support", pricing: "Freemium", icon: "💬" },

  // Investing
  { name: "Vanguard", url: "https://vanguard.com", description: "Low-cost index fund pioneer. Best for long-term passive investing.", category: "investing", subcategory: "Brokerage", pricing: "Free", icon: "🏦" },
  { name: "Fidelity", url: "https://fidelity.com", description: "Full-service brokerage with excellent research tools and zero-fee index funds.", category: "investing", subcategory: "Brokerage", pricing: "Free", icon: "📊" },
  { name: "Portfolio Visualizer", url: "https://portfoliovisualizer.com", description: "Backtest and analyze investment portfolios. Monte Carlo simulations.", category: "investing", subcategory: "Analysis", pricing: "Freemium", icon: "📉" },
  { name: "Koyfin", url: "https://koyfin.com", description: "Professional-grade financial data and analytics. Generous free tier.", category: "investing", subcategory: "Research", pricing: "Freemium", icon: "🔬" },
  { name: "Finviz", url: "https://finviz.com", description: "Stock screener and financial visualization. Great for finding opportunities.", category: "investing", subcategory: "Screening", pricing: "Freemium", icon: "🔎" },
  { name: "Wise", url: "https://wise.com", description: "International money transfers at the real exchange rate. Multi-currency account.", category: "investing", subcategory: "Banking", pricing: "Varies", icon: "💱" },

  // Productivity
  { name: "Notion", url: "https://notion.so", description: "All-in-one workspace for notes, docs, wikis, and project management.", category: "productivity", subcategory: "Workspace", pricing: "Freemium", icon: "📓" },
  { name: "Obsidian", url: "https://obsidian.md", description: "Knowledge base that works on local Markdown files. Powerful linking.", category: "productivity", subcategory: "Notes", pricing: "Free", icon: "🔮" },
  { name: "Linear", url: "https://linear.app", description: "Modern project management for software teams. Fast and beautiful.", category: "productivity", subcategory: "Project Management", pricing: "Freemium", icon: "📐" },
  { name: "Raycast", url: "https://raycast.com", description: "Supercharged launcher for Mac. Extensions, snippets, clipboard history.", category: "productivity", subcategory: "Launcher", pricing: "Freemium", icon: "⚡" },
  { name: "1Password", url: "https://1password.com", description: "Password manager for teams and individuals. Secure and easy to use.", category: "productivity", subcategory: "Security", pricing: "Paid", icon: "🔐" },
  { name: "Cal.com", url: "https://cal.com", description: "Open-source scheduling. Let people book time with you.", category: "productivity", subcategory: "Scheduling", pricing: "Freemium", icon: "📅" },

  // Content Creation
  { name: "Beehiiv", url: "https://beehiiv.com", description: "Newsletter platform built for growth. Monetization tools included.", category: "content", subcategory: "Newsletter", pricing: "Freemium", icon: "🐝" },
  { name: "Substack", url: "https://substack.com", description: "Publish newsletters and get paid. Simple subscription model.", category: "content", subcategory: "Newsletter", pricing: "Free", icon: "📰" },
  { name: "Canva", url: "https://canva.com", description: "Easy graphic design for non-designers. Templates for everything.", category: "content", subcategory: "Design", pricing: "Freemium", icon: "🎨" },
  { name: "CapCut", url: "https://capcut.com", description: "Free video editor with AI features. Great for short-form content.", category: "content", subcategory: "Video", pricing: "Free", icon: "✂️" },
  { name: "Buffer", url: "https://buffer.com", description: "Social media scheduling and analytics. Manage all platforms in one place.", category: "content", subcategory: "Social Media", pricing: "Freemium", icon: "📱" },
  { name: "Typefully", url: "https://typefully.com", description: "Write and schedule Twitter/X threads. Analytics and engagement tools.", category: "content", subcategory: "Social Media", pricing: "Freemium", icon: "🐦" },

  // Communities
  { name: "Indie Hackers", url: "https://indiehackers.com", description: "Community of bootstrapped founders. Real revenue numbers, honest advice.", category: "community", subcategory: "Startups", pricing: "Free", icon: "🏗️" },
  { name: "Hacker News", url: "https://news.ycombinator.com", description: "Tech news and discussion. Where startup culture lives.", category: "community", subcategory: "Tech", pricing: "Free", icon: "🔶" },
  { name: "r/financialindependence", url: "https://reddit.com/r/financialindependence", description: "Reddit's FIRE community. Strategies, milestones, and motivation.", category: "community", subcategory: "FIRE", pricing: "Free", icon: "🔥" },
  { name: "r/SideProject", url: "https://reddit.com/r/SideProject", description: "Share and get feedback on side projects. Supportive community.", category: "community", subcategory: "Startups", pricing: "Free", icon: "🚀" },
  { name: "X/Twitter #BuildInPublic", url: "https://twitter.com/search?q=%23buildinpublic", description: "The build-in-public community on Twitter. Follow makers and share progress.", category: "community", subcategory: "Startups", pricing: "Free", icon: "🐦" },
  { name: "ProductHunt", url: "https://producthunt.com", description: "Discover new products. Launch your own to get initial traction.", category: "community", subcategory: "Startups", pricing: "Free", icon: "🏹" },
];
