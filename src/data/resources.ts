export interface Resource {
  name: string;
  url: string;
  description: string;
  category: string;
  subcategory: string;
  pricing: "Free" | "Freemium" | "Paid" | "Varies" | "Pay-per-use";
  icon: string;
  editorPick?: boolean;
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
  { id: "legal", name: "Legal & Compliance", icon: "⚖️", description: "Legal resources, contracts, and compliance for freelancers and solopreneurs" },
  { id: "health", name: "Health & Wellness", icon: "💡", description: "Physical and mental health resources for remote workers and entrepreneurs" },
  { id: "tax", name: "Tax & Accounting", icon: "🧾", description: "Tax filing, accounting tools, and financial compliance" },
  { id: "ai-education", name: "AI Education", icon: "🎓", description: "Dedicated AI/ML learning platforms, courses, and certifications" },
];

export const resources: Resource[] = [
  // ===== AI TOOLS =====
  { name: "ChatGPT", url: "https://chat.openai.com", description: "The most versatile AI assistant. Use for writing, coding, analysis, brainstorming, and more.", category: "ai-tools", subcategory: "Chatbots", pricing: "Freemium", icon: "💬", editorPick: true },
  { name: "Claude", url: "https://claude.ai", description: "Excellent for long-form writing, analysis, and coding. Better at nuanced tasks.", category: "ai-tools", subcategory: "Chatbots", pricing: "Freemium", icon: "🧠" },
  { name: "Cursor", url: "https://cursor.sh", description: "AI-powered code editor. Write code 10x faster with AI autocomplete and chat.", category: "ai-tools", subcategory: "Development", pricing: "Freemium", icon: "⌨️", editorPick: true },
  { name: "Midjourney", url: "https://midjourney.com", description: "Generate stunning images from text descriptions. Best for artistic and creative work.", category: "ai-tools", subcategory: "Image Generation", pricing: "Paid", icon: "🎨" },
  { name: "Perplexity", url: "https://perplexity.ai", description: "AI-powered search engine. Get cited, real-time answers to any question.", category: "ai-tools", subcategory: "Research", pricing: "Freemium", icon: "🔍", editorPick: true },
  { name: "ElevenLabs", url: "https://elevenlabs.io", description: "AI voice generation and cloning. Create natural-sounding narration.", category: "ai-tools", subcategory: "Audio", pricing: "Freemium", icon: "🎙️" },
  { name: "Runway ML", url: "https://runwayml.com", description: "AI video generation and editing. Create and manipulate video with AI.", category: "ai-tools", subcategory: "Video", pricing: "Freemium", icon: "🎬" },
  { name: "Notion AI", url: "https://notion.so", description: "All-in-one workspace with built-in AI for notes, docs, databases, and project management.", category: "ai-tools", subcategory: "Productivity", pricing: "Freemium", icon: "📝" },
  { name: "Zapier", url: "https://zapier.com", description: "Automate workflows between 6,000+ apps. No-code automation.", category: "ai-tools", subcategory: "Automation", pricing: "Freemium", icon: "⚡" },
  { name: "Make (Integromat)", url: "https://make.com", description: "Visual automation platform. More powerful than Zapier for complex workflows.", category: "ai-tools", subcategory: "Automation", pricing: "Freemium", icon: "🔧" },
  { name: "n8n", url: "https://n8n.io", description: "Open-source workflow automation. Self-host for free.", category: "ai-tools", subcategory: "Automation", pricing: "Free", icon: "🔗", editorPick: true },
  { name: "Leonardo AI", url: "https://leonardo.ai", description: "AI image generation with fine-grained control. Great for product mockups.", category: "ai-tools", subcategory: "Image Generation", pricing: "Freemium", icon: "🖼️" },
  { name: "Descript", url: "https://descript.com", description: "AI-powered video and podcast editing. Edit media like a document.", category: "ai-tools", subcategory: "Video", pricing: "Freemium", icon: "🎥" },
  { name: "Fireflies.ai", url: "https://fireflies.ai", description: "AI meeting notes and transcription. Never miss action items again.", category: "ai-tools", subcategory: "Productivity", pricing: "Freemium", icon: "🔥" },
  // NEW AI Tools
  { name: "Suno", url: "https://suno.ai", description: "AI music generation. Create full songs with vocals, instruments, and lyrics from text prompts.", category: "ai-tools", subcategory: "Audio", pricing: "Freemium", icon: "🎵" },
  { name: "Gamma", url: "https://gamma.app", description: "AI presentation maker. Create beautiful slides, documents, and webpages in seconds.", category: "ai-tools", subcategory: "Presentations", pricing: "Freemium", icon: "📽️" },
  { name: "Tome", url: "https://tome.app", description: "AI storytelling and presentations. Build narrative-driven decks with AI assistance.", category: "ai-tools", subcategory: "Presentations", pricing: "Freemium", icon: "📚" },
  { name: "Beautiful.ai", url: "https://beautiful.ai", description: "AI-enhanced presentation design. Smart templates that auto-format as you add content.", category: "ai-tools", subcategory: "Presentations", pricing: "Paid", icon: "✨" },
  { name: "Perplexity API", url: "https://perplexity.ai/api", description: "Search API for developers. Integrate AI-powered search with real-time web access into your apps.", category: "ai-tools", subcategory: "Development", pricing: "Freemium", icon: "🔌" },
  { name: "Replicate", url: "https://replicate.com", description: "Run ML models via API. Access thousands of open-source models without managing infrastructure.", category: "ai-tools", subcategory: "Development", pricing: "Pay-per-use", icon: "🔄" },
  { name: "LangChain", url: "https://langchain.com", description: "Framework for LLM apps. Build chains, agents, and RAG pipelines with any LLM provider.", category: "ai-tools", subcategory: "Development", pricing: "Free", icon: "⛓️" },
  { name: "Pinecone", url: "https://pinecone.io", description: "Vector database for AI apps. Build fast, scalable RAG and semantic search applications.", category: "ai-tools", subcategory: "Development", pricing: "Freemium", icon: "🌲" },
  { name: "Vercel v0", url: "https://v0.dev", description: "AI UI generation. Describe what you want and get production-ready React components.", category: "ai-tools", subcategory: "Development", pricing: "Freemium", icon: "▲" },
  { name: "Bolt.new", url: "https://bolt.new", description: "AI full-stack app builder. Prompt, run, edit, and deploy full-stack web applications.", category: "ai-tools", subcategory: "Development", pricing: "Freemium", icon: "⚡" },
  { name: "Lovable", url: "https://lovable.dev", description: "AI web app builder. Describe your app idea and get a working prototype in minutes.", category: "ai-tools", subcategory: "Development", pricing: "Freemium", icon: "💜" },
  { name: "Replit AI", url: "https://replit.com", description: "AI-powered coding environment. Build, deploy, and collaborate with AI assistance built in.", category: "ai-tools", subcategory: "Development", pricing: "Freemium", icon: "💻" },
  { name: "Windsurf", url: "https://codeium.com/windsurf", description: "AI code editor by Codeium. Deep codebase understanding with multi-file AI editing.", category: "ai-tools", subcategory: "Development", pricing: "Freemium", icon: "🏄" },

  // ===== LEARNING =====
  { name: "freeCodeCamp", url: "https://freecodecamp.org", description: "Free coding bootcamp. Learn web development, data science, and more.", category: "learning", subcategory: "Coding", pricing: "Free", icon: "💻", editorPick: true },
  { name: "Coursera", url: "https://coursera.org", description: "University-level courses from top institutions. Many free to audit.", category: "learning", subcategory: "General", pricing: "Freemium", icon: "🎓" },
  { name: "YouTube", url: "https://youtube.com", description: "The world's largest free education platform. Learn anything.", category: "learning", subcategory: "General", pricing: "Free", icon: "📺" },
  { name: "Fast.ai", url: "https://fast.ai", description: "Free deep learning courses. Practical, code-first approach.", category: "learning", subcategory: "AI/ML", pricing: "Free", icon: "🧬", editorPick: true },
  { name: "Prompt Engineering Guide", url: "https://github.com/dair-ai/Prompt-Engineering-Guide", description: "Comprehensive guide to prompt engineering techniques and best practices.", category: "learning", subcategory: "AI/ML", pricing: "Free", icon: "📖" },
  { name: "Hugging Face", url: "https://huggingface.co", description: "Open-source AI community. Models, datasets, and spaces.", category: "learning", subcategory: "AI/ML", pricing: "Free", icon: "🤗" },
  { name: "The Odin Project", url: "https://theodinproject.com", description: "Free full-stack web development curriculum.", category: "learning", subcategory: "Coding", pricing: "Free", icon: "🗡️" },
  { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu", description: "Free MIT course materials. World-class education, zero cost.", category: "learning", subcategory: "General", pricing: "Free", icon: "🏛️", editorPick: true },
  // NEW Learning
  { name: "CS50", url: "https://cs50.harvard.edu", description: "Harvard's introduction to computer science. Free, world-renowned course with certificates.", category: "learning", subcategory: "Computer Science", pricing: "Free", icon: "🎓" },
  { name: "Codecademy", url: "https://codecademy.com", description: "Interactive coding lessons with hands-on exercises. Learn Python, JavaScript, and more.", category: "learning", subcategory: "Coding", pricing: "Freemium", icon: "💻" },
  { name: "Khan Academy", url: "https://khanacademy.org", description: "Free education platform covering math, science, computing, and more. All levels.", category: "learning", subcategory: "General", pricing: "Free", icon: "📚" },
  { name: "Brilliant", url: "https://brilliant.org", description: "Interactive math and computer science courses. Learn by solving problems, not watching videos.", category: "learning", subcategory: "Math/CS", pricing: "Paid", icon: "🧮" },
  { name: "Udemy", url: "https://udemy.com", description: "Course marketplace with 200k+ courses. Affordable prices and frequent sales.", category: "learning", subcategory: "General", pricing: "Paid", icon: "🎓" },
  { name: "Skillshare", url: "https://skillshare.com", description: "Creative skills platform. Design, illustration, photography, writing, and more.", category: "learning", subcategory: "Creative", pricing: "Freemium", icon: "🎨" },
  { name: "LinkedIn Learning", url: "https://linkedin.com/learning", description: "Professional development courses. Earn certificates for your LinkedIn profile.", category: "learning", subcategory: "Professional", pricing: "Paid", icon: "💼" },
  { name: "edX", url: "https://edx.org", description: "University courses from Harvard, MIT, and more. Free to audit, paid certificates.", category: "learning", subcategory: "General", pricing: "Freemium", icon: "🏛️" },

  // ===== FREELANCING =====
  { name: "Upwork", url: "https://upwork.com", description: "Largest freelancing platform. Good for beginners. Wide variety of work.", category: "freelancing", subcategory: "Marketplace", pricing: "Free", icon: "💼" },
  { name: "Toptal", url: "https://toptal.com", description: "Elite freelancing network. Top 3% of talent. Higher rates.", category: "freelancing", subcategory: "Marketplace", pricing: "Free", icon: "🏆" },
  { name: "Fiverr", url: "https://fiverr.com", description: "Service marketplace. Good for productized services.", category: "freelancing", subcategory: "Marketplace", pricing: "Free", icon: "🎪" },
  { name: "Contra", url: "https://contra.com", description: "Commission-free freelancing platform. Keep 100% of your earnings.", category: "freelancing", subcategory: "Marketplace", pricing: "Free", icon: "🤝", editorPick: true },
  { name: "Toggl", url: "https://toggl.com", description: "Time tracking for freelancers. Know where your time goes.", category: "freelancing", subcategory: "Tools", pricing: "Freemium", icon: "⏱️", editorPick: true },
  { name: "Bonsai", url: "https://hellobonsai.com", description: "All-in-one freelancing tool: contracts, invoicing, accounting, taxes.", category: "freelancing", subcategory: "Tools", pricing: "Paid", icon: "🌿" },
  // NEW Freelancing
  { name: "Paddle", url: "https://paddle.com", description: "Payment platform for SaaS. Handles global tax compliance, subscriptions, and billing.", category: "freelancing", subcategory: "Payments", pricing: "Varies", icon: "🏄" },
  { name: "FreshBooks", url: "https://freshbooks.com", description: "Invoicing and accounting for freelancers. Track time, send invoices, accept payments.", category: "freelancing", subcategory: "Tools", pricing: "Paid", icon: "📒" },
  { name: "And.co", url: "https://and.co", description: "Freelancer contracts, proposals, and invoicing. Free tools for independent workers.", category: "freelancing", subcategory: "Tools", pricing: "Freemium", icon: "🤝" },
  { name: "Indy", url: "https://weareindy.com", description: "All-in-one platform for freelancers. Proposals, contracts, invoices, tasks, and time tracking.", category: "freelancing", subcategory: "Tools", pricing: "Freemium", icon: "🚀" },
  { name: "Harpa AI", url: "https://harpa.ai", description: "Browser automation for research and productivity. Extract data, summarize pages, automate workflows.", category: "freelancing", subcategory: "Productivity", pricing: "Freemium", icon: "🤖" },
  { name: "Clockify", url: "https://clockify.me", description: "Free time tracking for freelancers and teams. Unlimited users and projects on free plan.", category: "freelancing", subcategory: "Tools", pricing: "Free", icon: "⏰" },
  { name: "Loom", url: "https://loom.com", description: "Video messaging for clients. Record your screen and face to explain deliverables and updates.", category: "freelancing", subcategory: "Communication", pricing: "Freemium", icon: "📹" },
  { name: "Calendly", url: "https://calendly.com", description: "Scheduling tool. Let clients book time with you without the back-and-forth emails.", category: "freelancing", subcategory: "Scheduling", pricing: "Freemium", icon: "📅" },

  // ===== BUSINESS BUILDING =====
  { name: "Stripe", url: "https://stripe.com", description: "Payment processing for internet businesses. Best developer experience.", category: "business", subcategory: "Payments", pricing: "Varies", icon: "💳", editorPick: true },
  { name: "LemonSqueezy", url: "https://lemonsqueezy.com", description: "Sell digital products easily. Handles payments, taxes, and subscriptions.", category: "business", subcategory: "Payments", pricing: "Varies", icon: "🍋" },
  { name: "Gumroad", url: "https://gumroad.com", description: "Sell digital products directly to your audience. Simple and effective.", category: "business", subcategory: "Payments", pricing: "Varies", icon: "🛍️" },
  { name: "Vercel", url: "https://vercel.com", description: "Deploy web apps instantly. Best for Next.js. Generous free tier.", category: "business", subcategory: "Hosting", pricing: "Freemium", icon: "▲", editorPick: true },
  { name: "Supabase", url: "https://supabase.com", description: "Open-source Firebase alternative. Database, auth, storage, and more.", category: "business", subcategory: "Backend", pricing: "Freemium", icon: "🗄️", editorPick: true },
  { name: "Resend", url: "https://resend.com", description: "Email API for developers. Transactional and marketing emails.", category: "business", subcategory: "Email", pricing: "Freemium", icon: "📧" },
  { name: "Plausible Analytics", url: "https://plausible.io", description: "Privacy-friendly web analytics. Simple, lightweight, GDPR-compliant.", category: "business", subcategory: "Analytics", pricing: "Paid", icon: "📈" },
  { name: "Crisp", url: "https://crisp.chat", description: "Live chat and chatbot for websites. AI-powered customer support.", category: "business", subcategory: "Support", pricing: "Freemium", icon: "💬" },
  // NEW Business
  { name: "Carrd", url: "https://carrd.co", description: "Simple one-page websites. Perfect for landing pages, portfolios, and lead capture. Free tier available.", category: "business", subcategory: "Websites", pricing: "Free", icon: "🃏" },
  { name: "Typedream", url: "https://typedream.com", description: "No-code website builder with beautiful templates. Easy to launch a site in minutes.", category: "business", subcategory: "Websites", pricing: "Freemium", icon: "💭" },
  { name: "Softr", url: "https://softr.io", description: "Build apps on Airtable and Google Sheets. No-code platform for client portals and directories.", category: "business", subcategory: "No-Code", pricing: "Freemium", icon: "🧩" },
  { name: "Airtable", url: "https://airtable.com", description: "Spreadsheet-database hybrid. Organize work, manage projects, and build mini-apps.", category: "business", subcategory: "Database", pricing: "Freemium", icon: "📊" },
  { name: "Webflow", url: "https://webflow.com", description: "Visual web development. Build professional sites without writing code, with full design control.", category: "business", subcategory: "Websites", pricing: "Freemium", icon: "🌊" },
  { name: "ShipFast", url: "https://shipfa.st", description: "Launch fast with Next.js boilerplate. Includes auth, payments, emails, SEO, and more.", category: "business", subcategory: "Boilerplate", pricing: "Paid", icon: "🚀" },
  { name: "Google Domains (Squarespace)", url: "https://domains.google", description: "Simple domain registration. Clean interface, transparent pricing, easy DNS management.", category: "business", subcategory: "Domains", pricing: "Varies", icon: "🌐" },
  { name: "Privacy.com", url: "https://privacy.com", description: "Virtual cards for business. Generate card numbers for each vendor to prevent overcharges.", category: "business", subcategory: "Security", pricing: "Free", icon: "🔐" },

  // ===== INVESTING =====
  { name: "Vanguard", url: "https://vanguard.com", description: "Low-cost index fund pioneer. Best for long-term passive investing.", category: "investing", subcategory: "Brokerage", pricing: "Free", icon: "🏦", editorPick: true },
  { name: "Fidelity", url: "https://fidelity.com", description: "Full-service brokerage with excellent research tools and zero-fee index funds.", category: "investing", subcategory: "Brokerage", pricing: "Free", icon: "📊", editorPick: true },
  { name: "Portfolio Visualizer", url: "https://portfoliovisualizer.com", description: "Backtest and analyze investment portfolios. Monte Carlo simulations.", category: "investing", subcategory: "Analysis", pricing: "Freemium", icon: "📉", editorPick: true },
  { name: "Koyfin", url: "https://koyfin.com", description: "Professional-grade financial data and analytics. Generous free tier.", category: "investing", subcategory: "Research", pricing: "Freemium", icon: "🔬" },
  { name: "Finviz", url: "https://finviz.com", description: "Stock screener and financial visualization. Great for finding opportunities.", category: "investing", subcategory: "Screening", pricing: "Freemium", icon: "🔎" },
  { name: "Wise", url: "https://wise.com", description: "International money transfers at the real exchange rate. Multi-currency account.", category: "investing", subcategory: "Banking", pricing: "Varies", icon: "💱" },
  // NEW Investing
  { name: "M1 Finance", url: "https://m1finance.com", description: "Automated investing with customizable pies. Free to use, no management fees.", category: "investing", subcategory: "Robo-Advisor", pricing: "Free", icon: "🤖" },
  { name: "Betterment", url: "https://betterment.com", description: "Robo-advisor with automated portfolio management. Goal-based investing made simple.", category: "investing", subcategory: "Robo-Advisor", pricing: "Paid", icon: "📈" },
  { name: "Wealthfront", url: "https://wealthfront.com", description: "Robo-advisor with tax-loss harvesting and advanced financial planning features.", category: "investing", subcategory: "Robo-Advisor", pricing: "Paid", icon: "💰" },
  { name: "Webull", url: "https://webull.com", description: "Commission-free trading with advanced charts, extended hours, and paper trading.", category: "investing", subcategory: "Brokerage", pricing: "Free", icon: "📊" },
  { name: "TradingView", url: "https://tradingview.com", description: "Charting and analysis platform. Social features, indicators, and screeners for all asset classes.", category: "investing", subcategory: "Analysis", pricing: "Freemium", icon: "📉" },
  { name: "Morningstar", url: "https://morningstar.com", description: "Investment research and fund analysis. Gold-standard ratings for mutual funds and ETFs.", category: "investing", subcategory: "Research", pricing: "Freemium", icon: "⭐" },
  { name: "TreasuryDirect", url: "https://treasurydirect.gov", description: "Buy US treasury bonds directly. I-bonds, T-bills, and TIPS with zero fees.", category: "investing", subcategory: "Government Bonds", pricing: "Free", icon: "🏛️" },
  { name: "Fundrise", url: "https://fundrise.com", description: "Real estate investing starting at $10. Diversified portfolio of commercial properties.", category: "investing", subcategory: "Real Estate", pricing: "Paid", icon: "🏠" },
  { name: "Yieldstreet", url: "https://yieldstreet.com", description: "Alternative investments in art, real estate, legal finance, and more. Accredited investors.", category: "investing", subcategory: "Alternatives", pricing: "Paid", icon: "🌾" },

  // ===== PRODUCTIVITY =====
  { name: "Notion", url: "https://notion.so", description: "All-in-one workspace for notes, docs, wikis, and project management.", category: "productivity", subcategory: "Workspace", pricing: "Freemium", icon: "📓", editorPick: true },
  { name: "Obsidian", url: "https://obsidian.md", description: "Knowledge base that works on local Markdown files. Powerful linking.", category: "productivity", subcategory: "Notes", pricing: "Free", icon: "🔮", editorPick: true },
  { name: "Linear", url: "https://linear.app", description: "Modern project management for software teams. Fast and beautiful.", category: "productivity", subcategory: "Project Management", pricing: "Freemium", icon: "📐" },
  { name: "Raycast", url: "https://raycast.com", description: "Supercharged launcher for Mac. Extensions, snippets, clipboard history.", category: "productivity", subcategory: "Launcher", pricing: "Freemium", icon: "⚡" },
  { name: "1Password", url: "https://1password.com", description: "Password manager for teams and individuals. Secure and easy to use.", category: "productivity", subcategory: "Security", pricing: "Paid", icon: "🔐", editorPick: true },
  { name: "Cal.com", url: "https://cal.com", description: "Open-source scheduling. Let people book time with you.", category: "productivity", subcategory: "Scheduling", pricing: "Freemium", icon: "📅" },
  // NEW Productivity
  { name: "Todoist", url: "https://todoist.com", description: "Task management that works everywhere. Natural language input, priorities, and project organization.", category: "productivity", subcategory: "Task Management", pricing: "Freemium", icon: "✅" },
  { name: "Things 3", url: "https://culturedcode.com/things", description: "Mac task manager with elegant design. Projects, areas, tags, and powerful search.", category: "productivity", subcategory: "Task Management", pricing: "Paid", icon: "📋" },
  { name: "Coda", url: "https://coda.io", description: "All-in-one doc for teams. Combines docs, spreadsheets, and app-building in one tool.", category: "productivity", subcategory: "Workspace", pricing: "Freemium", icon: "📄" },
  { name: "Notion Calendar", url: "https://notion.so/calendar", description: "Scheduling by Notion. Connects your Google Calendar with Notion for seamless planning.", category: "productivity", subcategory: "Calendar", pricing: "Free", icon: "📅" },
  { name: "Superhuman", url: "https://superhuman.com", description: "The fastest email experience. Keyboard shortcuts, AI triage, and split inbox.", category: "productivity", subcategory: "Email", pricing: "Paid", icon: "⚡" },
  { name: "Reclaim.ai", url: "https://reclaim.ai", description: "AI calendar assistant. Auto-schedules tasks, habits, and meetings around your priorities.", category: "productivity", subcategory: "Scheduling", pricing: "Freemium", icon: "🤖" },
  { name: "Keyboard Maestro", url: "https://keyboardmaestro.com", description: "Mac automation powerhouse. Create custom shortcuts, macros, and workflows for any task.", category: "productivity", subcategory: "Automation", pricing: "Paid", icon: "⌨️" },
  { name: "Alfred", url: "https://alfredapp.com", description: "Mac productivity launcher. App launching, file search, clipboard history, and custom workflows.", category: "productivity", subcategory: "Launcher", pricing: "Freemium", icon: "🔍" },

  // ===== CONTENT CREATION =====
  { name: "Beehiiv", url: "https://beehiiv.com", description: "Newsletter platform built for growth. Monetization tools included.", category: "content", subcategory: "Newsletter", pricing: "Freemium", icon: "🐝", editorPick: true },
  { name: "Substack", url: "https://substack.com", description: "Publish newsletters and get paid. Simple subscription model.", category: "content", subcategory: "Newsletter", pricing: "Free", icon: "📰" },
  { name: "Canva", url: "https://canva.com", description: "Easy graphic design for non-designers. Templates for everything.", category: "content", subcategory: "Design", pricing: "Freemium", icon: "🎨", editorPick: true },
  { name: "CapCut", url: "https://capcut.com", description: "Free video editor with AI features. Great for short-form content.", category: "content", subcategory: "Video", pricing: "Free", icon: "✂️" },
  { name: "Buffer", url: "https://buffer.com", description: "Social media scheduling and analytics. Manage all platforms in one place.", category: "content", subcategory: "Social Media", pricing: "Freemium", icon: "📱" },
  { name: "Typefully", url: "https://typefully.com", description: "Write and schedule Twitter/X threads. Analytics and engagement tools.", category: "content", subcategory: "Social Media", pricing: "Freemium", icon: "🐦", editorPick: true },
  // NEW Content
  { name: "Riverside.fm", url: "https://riverside.fm", description: "Remote podcast recording in studio quality. Separate audio and video tracks for each guest.", category: "content", subcategory: "Podcasting", pricing: "Freemium", icon: "🎙️" },
  { name: "Opus Clip", url: "https://opus.pro", description: "AI short-form video clips. Turn long-form videos into viral TikToks, Reels, and Shorts.", category: "content", subcategory: "Video", pricing: "Freemium", icon: "✂️" },
  { name: "Pictory", url: "https://pictory.ai", description: "AI video creation from text. Turn blog posts and scripts into professional videos.", category: "content", subcategory: "Video", pricing: "Paid", icon: "🎥" },
  { name: "Podcastpage.io", url: "https://podcastpage.io", description: "Podcast website builder. Create a beautiful site for your podcast with episodes, show notes, and CTA.", category: "content", subcategory: "Podcasting", pricing: "Paid", icon: "🎧" },
  { name: "ConvertKit", url: "https://convertkit.com", description: "Email marketing for creators. Landing pages, automation, and monetization tools.", category: "content", subcategory: "Email Marketing", pricing: "Freemium", icon: "✉️" },
  { name: "Mailchimp", url: "https://mailchimp.com", description: "Email marketing for businesses. A/B testing, automation, and audience management.", category: "content", subcategory: "Email Marketing", pricing: "Freemium", icon: "🐒" },
  { name: "Ahrefs", url: "https://ahrefs.com", description: "SEO and marketing tools. Keyword research, backlink analysis, site audit, and rank tracking.", category: "content", subcategory: "SEO", pricing: "Paid", icon: "🔗" },
  { name: "Semrush", url: "https://semrush.com", description: "Marketing and SEO suite. Competitive analysis, content optimization, and market research.", category: "content", subcategory: "SEO", pricing: "Paid", icon: "📈" },

  // ===== COMMUNITIES =====
  { name: "Indie Hackers", url: "https://indiehackers.com", description: "Community of bootstrapped founders. Real revenue numbers, honest advice.", category: "community", subcategory: "Startups", pricing: "Free", icon: "🏗️", editorPick: true },
  { name: "Hacker News", url: "https://news.ycombinator.com", description: "Tech news and discussion. Where startup culture lives.", category: "community", subcategory: "Tech", pricing: "Free", icon: "🔶" },
  { name: "r/financialindependence", url: "https://reddit.com/r/financialindependence", description: "Reddit's FIRE community. Strategies, milestones, and motivation.", category: "community", subcategory: "FIRE", pricing: "Free", icon: "🔥" },
  { name: "r/SideProject", url: "https://reddit.com/r/SideProject", description: "Share and get feedback on side projects. Supportive community.", category: "community", subcategory: "Startups", pricing: "Free", icon: "🚀" },
  { name: "X/Twitter #BuildInPublic", url: "https://twitter.com/search?q=%23buildinpublic", description: "The build-in-public community on Twitter. Follow makers and share progress.", category: "community", subcategory: "Startups", pricing: "Free", icon: "🐦" },
  { name: "ProductHunt", url: "https://producthunt.com", description: "Discover new products. Launch your own to get initial traction.", category: "community", subcategory: "Startups", pricing: "Free", icon: "🏹", editorPick: true },
  // NEW Community
  { name: "r/entrepreneur", url: "https://reddit.com/r/entrepreneur", description: "Reddit entrepreneur community. Business advice, case studies, and AMAs from successful founders.", category: "community", subcategory: "Startups", pricing: "Free", icon: "🚀" },
  { name: "r/digitalnomad", url: "https://reddit.com/r/digitalnomad", description: "Digital nomad subreddit. Travel tips, visa guides, city reviews, and remote work discussion.", category: "community", subcategory: "Lifestyle", pricing: "Free", icon: "🌍" },
  { name: "r/sweatystartup", url: "https://reddit.com/r/sweatystartup", description: "Bootstrapped founders community. No-VC, revenue-first approach to building businesses.", category: "community", subcategory: "Startups", pricing: "Free", icon: "💦" },
  { name: "Discord AI Communities", url: "https://discord.com", description: "Various AI-focused Discord servers. LangChain, Midjourney, AutoGPT communities, and more.", category: "community", subcategory: "AI", pricing: "Free", icon: "💬" },
  { name: "Y Combinator Co-Founder Matching", url: "https://www.ycombinator.com/cofounder-matching", description: "Find co-founders through YC's matching platform. Connect with vetted potential partners.", category: "community", subcategory: "Networking", pricing: "Free", icon: "🤝" },
  { name: "MicroConf", url: "https://microconf.com", description: "Conference for self-funded SaaS founders. Learn from profitable, bootstrapped companies.", category: "community", subcategory: "Conferences", pricing: "Paid", icon: "🎤" },
  { name: "Nomad List", url: "https://nomadlist.com", description: "Digital nomad city database. Compare cities by cost of living, internet speed, safety, and more.", category: "community", subcategory: "Travel", pricing: "Freemium", icon: "🏝️" },

  // ===== LEGAL & COMPLIANCE =====
  { name: "Bonsai Contracts", url: "https://hellobonsai.com/contracts", description: "Free contract templates for freelancers. NDAs, service agreements, and scope of work docs.", category: "legal", subcategory: "Contracts", pricing: "Freemium", icon: "📋", editorPick: true },
  { name: "Termly", url: "https://termly.io", description: "Privacy policy and terms generator. Create GDPR, CCPA, and CalOPPA compliant legal documents.", category: "legal", subcategory: "Compliance", pricing: "Freemium", icon: "🔒" },
  { name: "HelloSign/Dropbox Sign", url: "https://www.hellosign.com", description: "Digital signatures for contracts. Legally binding e-signatures with audit trails.", category: "legal", subcategory: "Signatures", pricing: "Freemium", icon: "✍️" },
  { name: "LegalZoom", url: "https://www.legalzoom.com", description: "Business formation and legal services. LLC, DBA, trademarks, and legal advice.", category: "legal", subcategory: "Business Formation", pricing: "Paid", icon: "🏛️" },
  { name: "Stripe Atlas", url: "https://stripe.com/atlas", description: "LLC or C-Corp formation plus US banking and tax registration. Designed for global founders.", category: "legal", subcategory: "Business Formation", pricing: "Paid", icon: "🗺️", editorPick: true },
  { name: "Clerky", url: "https://www.clerky.com", description: "Legal paperwork for startups. Incorporation, fundraising, and employee stock options.", category: "legal", subcategory: "Startup Legal", pricing: "Paid", icon: "📑" },
  { name: "Contractable", url: "https://contractable.ai", description: "AI-generated legal contracts. Create customized agreements in minutes with AI assistance.", category: "legal", subcategory: "Contracts", pricing: "Paid", icon: "🤖" },
  { name: "Freelancer.com Legal Guide", url: "https://www.freelancer.com/legalguide", description: "Free legal guides for freelancers. Tax obligations, contract tips, and intellectual property basics.", category: "legal", subcategory: "Education", pricing: "Free", icon: "📖" },

  // ===== HEALTH & WELLNESS =====
  { name: "Calm", url: "https://calm.com", description: "Meditation and sleep app. Guided sessions, sleep stories, and breathing exercises.", category: "health", subcategory: "Mental Health", pricing: "Paid", icon: "🧘", editorPick: true },
  { name: "Headspace", url: "https://headspace.com", description: "Guided meditation and mindfulness. Courses for stress, focus, sleep, and anxiety.", category: "health", subcategory: "Mental Health", pricing: "Freemium", icon: "🧠" },
  { name: "Nike Training Club", url: "https://www.nike.com/ntc-app", description: "Free workout app. Hundreds of on-demand workouts, programs, and expert guidance.", category: "health", subcategory: "Fitness", pricing: "Free", icon: "💪" },
  { name: "MyFitnessPal", url: "https://www.myfitnesspal.com", description: "Nutrition tracking with the world's largest food database. Log meals and track macros.", category: "health", subcategory: "Nutrition", pricing: "Freemium", icon: "🍎" },
  { name: "Stand Up!", url: "https://standuplyapp.com", description: "Break and posture reminders. Get notified to stand, stretch, and move throughout the day.", category: "health", subcategory: "Ergonomics", pricing: "Free", icon: "🧍" },
  { name: "f.lux", url: "https://justgetflux.com", description: "Screen brightness adjustment for better sleep. Reduces blue light in the evening.", category: "health", subcategory: "Eye Care", pricing: "Free", icon: "👁️" },
  { name: "BetterHelp", url: "https://www.betterhelp.com", description: "Online therapy with licensed counselors. Video, phone, and text-based sessions.", category: "health", subcategory: "Mental Health", pricing: "Paid", icon: "💬" },
  { name: "WHOOP", url: "https://www.whoop.com", description: "Fitness and recovery tracker. Monitors sleep, strain, and recovery with actionable insights.", category: "health", subcategory: "Fitness Tracking", pricing: "Paid", icon: "⌚", editorPick: true },

  // ===== TAX & ACCOUNTING =====
  { name: "TurboTax Self-Employed", url: "https://turbotax.intuit.com", description: "Tax filing for freelancers and self-employed. Maximizes deductions, handles 1099s and Schedule C.", category: "tax", subcategory: "Tax Filing", pricing: "Paid", icon: "💰", editorPick: true },
  { name: "QuickBooks Self-Employed", url: "https://quickbooks.intuit.com/self-employed", description: "Bookkeeping and tax for freelancers. Track mileage, log expenses, and estimate quarterly taxes.", category: "tax", subcategory: "Bookkeeping", pricing: "Paid", icon: "📒" },
  { name: "Wave Accounting", url: "https://www.waveapps.com", description: "Free accounting software. Invoicing, receipt scanning, and financial reporting at no cost.", category: "tax", subcategory: "Accounting", pricing: "Free", icon: "🌊" },
  { name: "FreeTaxUSA", url: "https://www.freetaxusa.com", description: "Free federal tax filing. Affordable state filing. Supports most tax situations.", category: "tax", subcategory: "Tax Filing", pricing: "Free", icon: "🆓" },
  { name: "Keeper Tax", url: "https://www.keepertax.com", description: "AI-powered tax deductions. Automatically finds write-offs by scanning your transactions.", category: "tax", subcategory: "Deductions", pricing: "Paid", icon: "🤖", editorPick: true },
  { name: "MileIQ", url: "https://mileiq.com", description: "Automatic mileage tracking. Detects drives and logs them for tax deduction purposes.", category: "tax", subcategory: "Deductions", pricing: "Freemium", icon: "🚗" },
  { name: "TaxAct", url: "https://www.taxact.com", description: "Affordable tax filing with step-by-step guidance. Supports self-employment and investments.", category: "tax", subcategory: "Tax Filing", pricing: "Freemium", icon: "📊" },
  { name: "Bench", url: "https://bench.co", description: "Professional bookkeeping service. Dedicated bookkeepers do your books monthly with clean reports.", category: "tax", subcategory: "Bookkeeping", pricing: "Paid", icon: "📚" },

  // ===== AI EDUCATION =====
  { name: "DeepLearning.AI", url: "https://www.deeplearning.ai", description: "Andrew Ng's AI courses. From beginner to advanced. Free courses and paid specializations.", category: "ai-education", subcategory: "Courses", pricing: "Freemium", icon: "🎓", editorPick: true },
  { name: "Google AI/ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course", description: "Google's free machine learning course. Learn ML fundamentals with TensorFlow and practical exercises.", category: "ai-education", subcategory: "Courses", pricing: "Free", icon: "🔍" },
  { name: "Anthropic Prompt Engineering", url: "https://docs.anthropic.com/claude/docs/prompt-engineering", description: "Official Anthropic prompt engineering guide. Best practices for getting the most from Claude.", category: "ai-education", subcategory: "Guides", pricing: "Free", icon: "📖" },
  { name: "OpenAI Cookbook", url: "https://cookbook.openai.com", description: "Practical GPT examples and recipes. Code samples for common AI tasks and integrations.", category: "ai-education", subcategory: "Tutorials", pricing: "Free", icon: "🍳", editorPick: true },
  { name: "Hugging Face NLP Course", url: "https://huggingface.co/learn/nlp-course", description: "Free NLP course from Hugging Face. Transformers, tokenization, fine-tuning, and deployment.", category: "ai-education", subcategory: "Courses", pricing: "Free", icon: "🤗" },
  { name: "Kaggle Learn", url: "https://www.kaggle.com/learn", description: "Free data science micro-courses. Python, ML, SQL, pandas, and more with hands-on exercises.", category: "ai-education", subcategory: "Courses", pricing: "Free", icon: "📊" },
  { name: "IBM AI Skills Academy", url: "https://skills.yourlearning.ibm.com", description: "IBM's AI certification programs. Earn recognized credentials in AI, ML, and data science.", category: "ai-education", subcategory: "Certifications", pricing: "Paid", icon: "🏢" },
  { name: "LearnPrompting.org", url: "https://learnprompting.org", description: "Free prompt engineering course. From basics to advanced techniques with hands-on exercises.", category: "ai-education", subcategory: "Courses", pricing: "Free", icon: "💡", editorPick: true },
  { name: "Coursera AI/ML Specializations", url: "https://www.coursera.org/specializations?query=artificial%20intelligence", description: "University AI courses from Stanford, deeplearning.ai, IBM, and more. Professional certificates available.", category: "ai-education", subcategory: "Courses", pricing: "Freemium", icon: "🎓" },
];
