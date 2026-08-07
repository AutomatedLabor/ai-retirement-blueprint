export interface RoadmapStep {
  title: string;
  description: string;
  tools: string[];
  outcome: string;
  week?: string;
  phase?: string;
  target?: string;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  duration: string;
  steps: RoadmapStep[];
}

export const roadmaps: Roadmap[] = [
  {
    id: "zero-to-5k",
    title: "Zero to $5k/month: 90-Day Roadmap",
    description: "A week-by-week plan to go from zero AI freelancing experience to earning $5,000 per month using AI tools.",
    icon: "🚀",
    color: "primary",
    duration: "12 Weeks",
    steps: [
      {
        week: "Week 1-2",
        title: "Choose Your AI Skill",
        description: "Research AI-augmented services with the highest demand and lowest barrier to entry. Focus on skills that leverage AI to deliver 5-10x faster than traditional methods.",
        tools: ["ChatGPT", "Google Trends", "Upwork", "Fiverr Explore"],
        outcome: "Identify 2-3 viable AI service offerings and pick your primary focus.",
      },
      {
        week: "Week 2-3",
        title: "Master Core AI Tools",
        description: "Spend 2-3 hours daily learning your primary AI tool(s). Practice with real projects, not tutorials. Learn prompt engineering basics and build a personal prompt library.",
        tools: ["ChatGPT/Claude", "YouTube Tutorials", "Prompt libraries"],
        outcome: "Complete 10 practice projects and build a prompt library of 50+ proven prompts.",
      },
      {
        week: "Week 3-4",
        title: "Build Your Portfolio",
        description: "Create 3-5 high-quality sample projects that demonstrate your AI-augmented workflow. Show the before/after of AI assistance. Include case-study-style writeups of your process.",
        tools: ["Canva", "Notion", "Carrd", "Google Drive"],
        outcome: "A professional portfolio with 3-5 showcase pieces ready to share with clients.",
      },
      {
        week: "Week 4-5",
        title: "Set Up Business Infrastructure",
        description: "Create professional profiles, a basic website, an email address, and your pricing structure. Set up invoicing and project management systems.",
        tools: ["LinkedIn", "Upwork", "Fiverr", "Wave (invoicing)", "Notion"],
        outcome: "Fully operational freelance business ready to accept clients.",
      },
      {
        week: "Week 5-6",
        title: "Start Outbound Outreach",
        description: "Send 5-10 personalized proposals per day on freelancing platforms. Join relevant communities and offer value before pitching. Target 50 total proposals by end of this phase.",
        tools: ["Upwork", "Fiverr", "LinkedIn", "Reddit (r/forhire)"],
        outcome: "Land your first 1-2 paid projects, even at lower rates to build reviews.",
      },
      {
        week: "Week 6-7",
        title: "Deliver Exceptional Results",
        description: "Over-deliver on early projects. Get 5-star reviews. Document your process and results. Build case studies from real client work for your portfolio.",
        tools: ["Notion", "Google Docs", "Trello"],
        outcome: "3-5 five-star reviews, 2 client testimonials, and 1 detailed case study.",
      },
      {
        week: "Week 7-8",
        title: "Raise Your Rates",
        description: "With proof of results, increase your rates by 30-50%. Shift from hourly to project-based pricing where possible. Refine your proposal templates based on what converted.",
        tools: ["Spreadsheet tracker", "Proposal templates"],
        outcome: "Rates increased 30-50% with a conversion rate of 20%+ on proposals.",
      },
      {
        week: "Week 8-9",
        title: "Build Inbound Channels",
        description: "Start publishing content about your AI workflow on Twitter/X and LinkedIn. Share insights, tips, and results. Begin building an audience that comes to you.",
        tools: ["Twitter/X", "LinkedIn", "Buffer", "Canva"],
        outcome: "1-2 inbound inquiries per week from content-driven discovery.",
      },
      {
        week: "Week 9-10",
        title: "Add a Second Service",
        description: "Leverage your existing AI skills to offer a complementary service. If you do AI writing, add AI-assisted SEO. If you do chatbots, add AI data analysis.",
        tools: ["Your existing AI stack", "New specialty tools"],
        outcome: "2 service offerings that cross-sell to existing clients, increasing average project value.",
      },
      {
        week: "Week 10-11",
        title: "Systematize and Automate",
        description: "Document your entire workflow into repeatable processes. Create templates, SOPs, and checklists. Use AI to handle repetitive parts of your service delivery.",
        tools: ["Notion", "Zapier", "ChatGPT (for automation)", "Loom"],
        outcome: "50% reduction in delivery time per project. Able to handle 2x the workload.",
      },
      {
        week: "Week 11-12",
        title: "Retain and Upsell Clients",
        description: "Offer retainer packages to your best clients. Propose monthly recurring work. Create a referral incentive. Focus on client lifetime value over one-off projects.",
        tools: ["Email", "Proposal templates", "HoneyBook/FreshBooks"],
        outcome: "1-2 retainer clients at $1,000-2,000/month each.",
      },
      {
        week: "Week 12",
        title: "Scale and Optimize",
        description: "Review what worked, double down on your highest-ROI activities. Consider hiring a VA for admin work. Set targets for month 4-6 to push toward $8-10k/month.",
        tools: ["Spreadsheet analytics", "Time tracker", "Financial reports"],
        outcome: "Consistent $5,000+/month revenue with a clear growth path and automated systems.",
      },
    ],
  },
  {
    id: "content-creator-path",
    title: "Content Creator Path: 6-Month Roadmap",
    description: "Build a content engine that generates organic traffic and converts followers into income.",
    icon: "✍️",
    color: "gold",
    duration: "6 Months",
    steps: [
      {
        phase: "Month 1",
        title: "Pick Your Niche",
        description: "Choose a specific niche at the intersection of your expertise, passion, and market demand. Narrow is better than broad — 'AI tools for freelance writers' beats 'AI tips' every time.",
        tools: ["Google Trends", "AnswerThePublic", "Reddit", "YouTube search"],
        outcome: "A documented niche with 10 sub-topics to cover and a clear target audience profile.",
      },
      {
        phase: "Month 2",
        title: "Build Your Content System",
        description: "Set up 2-3 platforms, create templates, and build a 30-day content calendar. Establish a batch-creation workflow using AI tools to produce 1 week of content in 2 hours.",
        tools: ["Notion", "Canva Pro", "ChatGPT", "Buffer", "Descript"],
        outcome: "A repeatable content system producing 5+ pieces of content per week consistently.",
      },
      {
        phase: "Month 3",
        title: "Publish Relentlessly",
        description: "Commit to daily or near-daily publishing. Focus on quality over quantity initially, then increase volume. Engage with 20+ accounts per day in your niche to build relationships.",
        tools: ["Your chosen platforms", "Analytics dashboards"],
        outcome: "200+ followers, publishing cadence locked in, engagement patterns identified.",
      },
      {
        phase: "Month 3-4",
        title: "Start Your Email List",
        description: "Create a free lead magnet (cheat sheet, template, mini-course) and add email signup to all platforms. Every piece of content should drive list signups. This is your most valuable asset.",
        tools: ["ConvertKit", "Beehiiv", "Canva", "Notion"],
        outcome: "100+ email subscribers with a 40%+ open rate on your first broadcasts.",
      },
      {
        phase: "Month 4",
        title: "Master Content Repurposing",
        description: "Implement the repurposing matrix: every long-form piece becomes 10+ derivative assets. One YouTube video becomes a blog, thread, newsletter, clips, carousel, quotes, and more.",
        tools: ["Opus Clip", "ChatGPT", "Canva", "Repurpose.io"],
        outcome: "10x content output without 10x effort. Presence on 3+ platforms from single content creation sessions.",
      },
      {
        phase: "Month 5",
        title: "Launch Your First Product",
        description: "Create a low-ticket digital product ($9-47) based on your most popular content. Use audience feedback and questions to guide the product. Pre-sell if possible.",
        tools: ["Gumroad", "LemonSqueezy", "ChatGPT", "Canva"],
        outcome: "First digital product launched with initial sales validating demand.",
      },
      {
        phase: "Month 5-6",
        title: "Monetize at Scale",
        description: "Add revenue streams: sponsorships, affiliate partnerships, consulting calls, premium community. Diversify income so no single stream exceeds 40% of total revenue.",
        tools: ["Stripe", "Calendly", "Gumroad", "Affiliate platforms"],
        outcome: "3+ active revenue streams generating consistent monthly income.",
      },
      {
        phase: "Month 6",
        title: "Optimize and Grow",
        description: "Analyze what content performs best, double down on winners. Consider hiring for editing or admin. Set 12-month targets and build a team or system to get there.",
        tools: ["Google Analytics", "Platform analytics", "Spreadsheet"],
        outcome: "1,000+ followers, 500+ email subscribers, $500-2,000/month in diversified income.",
      },
    ],
  },
  {
    id: "financial-independence-5-year",
    title: "Full Financial Independence: 5-Year Plan",
    description: "A milestone-by-milestone path from zero savings to financial freedom using AI-powered income.",
    icon: "🏔️",
    color: "accent",
    duration: "5 Years",
    steps: [
      {
        phase: "Year 1, Milestone 1",
        title: "Emergency Fund",
        description: "Save 3-6 months of essential living expenses in a high-yield savings account. Start with a $1,000 mini emergency fund, then build to the full target. This is your financial foundation.",
        tools: ["High-yield savings account", "YNAB/EveryDollar", "Automatic transfers"],
        outcome: "3-6 months of expenses saved. Ability to take calculated risks without fear of financial ruin.",
        target: "Net Worth: -$10,000 to $0 (debt reduction + starter savings)",
      },
      {
        phase: "Year 1, Milestone 2",
        title: "Income Diversification",
        description: "Establish 2-3 income streams using AI tools: one active (freelancing/consulting), one semi-passive (content/digital products), and one investment (index funds). Never rely on a single source.",
        tools: ["AI freelancing", "Content creation", "Index fund investing"],
        outcome: "2-3 active income streams totaling $3,000-5,000/month.",
        target: "Monthly Income: $3,000-5,000 across multiple sources",
      },
      {
        phase: "Year 2",
        title: "Debt Elimination",
        description: "Aggressively pay off all high-interest debt (credit cards, personal loans). Use the avalanche method (highest interest first) while maintaining minimums on everything else.",
        tools: ["Debt payoff calculator", "Automated payments", "Budgeting app"],
        outcome: "All high-interest debt eliminated. Only low-interest debt (mortgage, student loans) remaining.",
        target: "Net Worth: $5,000-15,000",
      },
      {
        phase: "Year 2-3",
        title: "Max Out Tax-Advantaged Accounts",
        description: "Contribute the maximum to your Solo 401(k) ($69,000/yr) or SEP-IRA, plus a Roth IRA ($7,000/yr). Reduce your tax burden while building long-term wealth on autopilot.",
        tools: ["Solo 401(k)", "SEP-IRA", "Roth IRA", "Tax software"],
        outcome: "$50,000-76,000 per year flowing into tax-advantaged retirement accounts.",
        target: "Retirement Accounts: $50,000-100,000",
      },
      {
        phase: "Year 3",
        title: "Build Passive Income Systems",
        description: "Create assets that generate income while you sleep: digital products, automated content funnels, affiliate sites, or rental income. Target passive income that covers 20-30% of expenses.",
        tools: ["Digital products", "Email funnels", "SEO content", "Affiliate marketing"],
        outcome: "$500-2,000/month in semi-passive or passive income.",
        target: "Monthly Passive Income: $500-2,000",
      },
      {
        phase: "Year 3-4",
        title: "Scale Your AI Business",
        description: "Transition from freelancer to business owner. Hire VAs, delegate delivery, focus on strategy and sales. Build systems that generate revenue without your daily involvement.",
        tools: ["Project management", "Hiring platforms", "SOPs", "Automation (Zapier)"],
        outcome: "Business generating $8,000-15,000/month with 10-20 hours of your time per week.",
        target: "Net Worth: $50,000-150,000",
      },
      {
        phase: "Year 4",
        title: "Investment Acceleration",
        description: "With business running on systems, direct excess income into taxable investment accounts. Build a diversified portfolio. Consider real estate or other asset classes for further diversification.",
        tools: ["Taxable brokerage", "Real estate", "Index funds", "Financial advisor (optional)"],
        outcome: "Total investment portfolio reaching $100,000-250,000 across all accounts.",
        target: "Total Investments: $100,000-250,000",
      },
      {
        phase: "Year 4-5",
        title: "Geographic Arbitrage (Optional)",
        description: "If open to it, relocate to a lower cost-of-living area or country where your dollar goes further. Many digital workers cut expenses 40-60% while maintaining income.",
        tools: ["Nomad List", "Cost-of-living calculators", "Visa research"],
        outcome: "Monthly expenses reduced by 30-60% while maintaining quality of life and income.",
        target: "Monthly Expenses: Reduced 30-60%",
      },
      {
        phase: "Year 5",
        title: "Calculate Your Freedom Number",
        description: "Run the 4% rule calculation: (Annual Expenses × 25) = Your FI number. Track progress monthly. You're financially independent when investments can sustain your lifestyle indefinitely.",
        tools: ["FI calculator", "Portfolio tracker", "Expense tracker"],
        outcome: "Clear FI number defined, realistic timeline established, and investment strategy aligned to reach it.",
        target: "Net Worth: $200,000-500,000+",
      },
      {
        phase: "Year 5+",
        title: "Financial Freedom",
        description: "You have enough invested that a 4% annual withdrawal covers all living expenses. Work becomes optional. You can choose projects for fulfillment, not money. Maintain and grow your wealth.",
        tools: ["Investment portfolio", "Automated systems", "Annual review"],
        outcome: "Complete financial independence. Freedom to choose how you spend your time, energy, and attention.",
        target: "FI Number: (Your Annual Expenses × 25) fully funded",
      },
    ],
  },
];
