export interface Guide {
  slug: string;
  title: string;
  description: string;
  icon: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  readTime: string;
  content: string;
  tags: string[];
}

export const guides: Guide[] = [
  {
    slug: "the-blueprint",
    title: "The AI Retirement Blueprint: Complete Framework",
    description: "The master plan — how to think about retirement in the age of AI, from zero to financial independence.",
    icon: "🗺️",
    difficulty: "Beginner",
    readTime: "25 min",
    tags: ["strategy", "framework", "mindset"],
    content: `
# The AI Retirement Blueprint

## The New Reality

The rules of retirement have changed. AI hasn't just disrupted industries — it's created an entirely new category of income opportunity that didn't exist 5 years ago. This guide is your map.

## The Three Pillars

### Pillar 1: AI-Augmented Income
You don't need to build AI. You need to **use** AI to do work that previously required a team. One person with the right AI tools can now:
- Write, design, and market content
- Build and deploy software
- Analyze data and generate reports
- Automate repetitive business processes
- Provide consulting services at scale

### Pillar 2: Digital Asset Building
Stop trading time for money. Build things that work while you sleep:
- **Content assets**: blogs, YouTube channels, newsletters with compounding audiences
- **Software assets**: SaaS tools, APIs, automation scripts
- **Knowledge assets**: courses, templates, frameworks
- **Data assets**: datasets, research reports, curated directories

### Pillar 3: Smart Capital Allocation
Money makes money, but only if you deploy it wisely:
- Index funds (the foundation — boring but essential)
- Real estate (with AI-powered analysis)
- Your own businesses (highest ROI if done right)
- Alternative investments (crypto, collectibles, royalties)

## The Math of Freedom

Your **Freedom Number** = Annual Expenses × 25

If you need $40,000/year → Freedom Number = $1,000,000
If you need $60,000/year → Freedom Number = $1,500,000
If you need $80,000/year → Freedom Number = $2,000,000

But here's the twist: AI can dramatically lower your expenses AND increase your income simultaneously.

## The 4-Phase Roadmap

### Phase 1: Foundation (Months 1-3)
- Learn core AI tools (ChatGPT, Claude, Midjourney, Cursor)
- Identify your highest-leverage skill
- Set up your digital infrastructure
- Start building in public

### Phase 2: Income Generation (Months 3-12)
- Launch your first AI-powered service or product
- Reach $1,000-5,000/month in side income
- Reinvest in tools and education
- Build your audience

### Phase 3: Scale & Automate (Years 1-3)
- Systematize what works
- Hire AI (not people) for repetitive tasks
- Diversify income streams
- Target $10,000-30,000/month

### Phase 4: Freedom (Years 3-5)
- Passive income exceeds expenses
- Work becomes optional
- Focus on what you enjoy
- Help others achieve the same

## Key Principles

1. **Speed over perfection** — ship fast, iterate faster
2. **Leverage AI for everything** — if a task takes >30 min, there's an AI shortcut
3. **Build in public** — accountability + audience + opportunities
4. **Compound relentlessly** — small daily progress > occasional sprints
5. **Protect your time** — automate or eliminate everything that doesn't move the needle

## What's Next

Read the specific guides below for deep dives into each area. Start with the one that matches where you are right now.
    `,
  },
  {
    slug: "ai-freelancing",
    title: "AI-Powered Freelancing: 10x Your Output",
    description: "How to use AI tools to deliver premium work at lightning speed, commanding higher rates while working fewer hours.",
    icon: "⚡",
    difficulty: "Beginner",
    readTime: "20 min",
    tags: ["freelancing", "income", "AI tools"],
    content: `
# AI-Powered Freelancing

## The New Freelancer

Traditional freelancing: trade hours for dollars, compete on price, burn out.
AI freelancing: deliver 10x the value in half the time, compete on quality, scale infinitely.

## High-Value AI Freelance Services

### 1. AI Content Strategy & Production ($100-500/article)
- Use ChatGPT/Claude for research and first drafts
- Use AI for SEO optimization and keyword research
- Your value: editorial judgment, brand voice, strategy
- Tools: ChatGPT, Claude, SurferSEO, Clearscope

### 2. AI-Powered Development ($150-300/hour)
- Use Cursor, GitHub Copilot, Claude for code generation
- Build MVPs in days, not months
- Your value: architecture decisions, client communication, quality assurance
- Tools: Cursor, GitHub Copilot, Claude, v0.dev

### 3. AI Design Services ($100-200/project)
- Use Midjourney, DALL-E for concepts and assets
- Use Figma AI for layout suggestions
- Your value: taste, client understanding, brand consistency
- Tools: Midjourney, DALL-E 3, Figma, Canva AI

### 4. AI Data Analysis ($150-400/project)
- Use ChatGPT Code Interpreter for data processing
- Use AI for pattern recognition and visualization
- Your value: asking the right questions, business interpretation
- Tools: ChatGPT Advanced Data Analysis, Julius AI, Python + AI

### 5. AI Automation Consulting ($200-500/hour)
- Build AI workflows for businesses
- Implement chatbots, content pipelines, data processing
- Your value: understanding business needs, integration expertise
- Tools: Zapier, Make, n8n, custom scripts

## The Pricing Framework

Don't price by the hour. Price by **value delivered**.

| Service | Time (with AI) | Client Value | Your Price |
|---------|----------------|--------------|------------|
| Blog post | 2 hours | $2,000/mo in traffic | $300 |
| Landing page | 4 hours | $10,000/mo in conversions | $1,500 |
| Data report | 3 hours | $50,000 in decisions | $2,000 |
| Automation | 8 hours | $5,000/mo saved | $5,000 |

## Finding Clients

1. **Upwork/Toptal** — start here for quick wins
2. **LinkedIn** — cold outreach with value-first approach
3. **Twitter/X** — build in public, attract inbound
4. **Indie Hackers/Reddit** — community-based networking
5. **Your own site** — SEO + content marketing

## The 30-Day Launch Plan

**Week 1**: Set up profiles, define your niche, create 3 portfolio pieces (use AI to build them)
**Week 2**: Send 20 personalized pitches, post daily on LinkedIn/Twitter
**Week 3**: Land first 1-2 clients, overdeliver dramatically
**Week 4**: Get testimonials, raise prices, systematize your workflow

## Scaling Beyond Freelancing

Once you hit $10k/month freelancing:
1. Productize your best service into a package
2. Create templates and SOPs (with AI help)
3. Build a simple tool that automates part of your work
4. Transition from freelancer → agency owner → product builder
    `,
  },
  {
    slug: "passive-income-engines",
    title: "Building Passive Income Engines with AI",
    description: "Create income streams that run 24/7 using AI automation, digital products, and content systems.",
    icon: "🔄",
    difficulty: "Intermediate",
    readTime: "30 min",
    tags: ["passive income", "automation", "digital products"],
    content: `
# Building Passive Income Engines with AI

## The Passive Income Myth (and Reality)

True passive income doesn't exist. But **leveraged income** does — where the ratio of effort to reward is dramatically in your favor.

AI makes this ratio better than ever.

## The 7 AI-Powered Income Engines

### Engine 1: AI Content Blog Network
**Setup time**: 40-60 hours
**Monthly income potential**: $2,000-20,000
**How it works**:
- Pick 3-5 profitable niches (finance, health, tech, home)
- Use AI to generate SEO-optimized content at scale
- Monetize with display ads (Mediavine/AdThrive) + affiliate links
- Key: quality control, E-E-A-T compliance, original research

### Engine 2: Digital Product Store
**Setup time**: 20-40 hours
**Monthly income potential**: $1,000-50,000
**Products to create with AI**:
- Notion templates ($10-50 each)
- Spreadsheet tools ($20-100 each)
- Prompt libraries ($15-50 each)
- Design templates ($10-30 each)
- Mini-courses ($50-200 each)
- Platforms: Gumroad, Lemonsqueezy, Etsy

### Engine 3: AI-Powered Newsletter
**Setup time**: 10-20 hours
**Monthly income potential**: $500-10,000
**The playbook**:
- Pick a niche you're curious about
- Use AI to curate, summarize, and add commentary
- Monetize with sponsorships, paid tier, affiliate links
- Tools: Beehiiv, Substack, ConvertKit

### Engine 4: Automated YouTube Channels
**Setup time**: 30-50 hours
**Monthly income potential**: $1,000-30,000
**The system**:
- Use AI for scriptwriting, thumbnail concepts, SEO
- Use AI voice (ElevenLabs) or your own voice
- Faceless channels work: compilations, tutorials, explainers
- Monetize with AdSense, sponsorships, affiliate links

### Engine 5: SaaS Micro-Tools
**Setup time**: 40-80 hours
**Monthly income potential**: $500-100,000+
**The approach**:
- Find a niche problem (Reddit, Twitter, forums)
- Build a simple solution with AI-assisted coding
- Price at $10-50/month
- Use AI for customer support, documentation
- Tools: Next.js, Vercel, Stripe, Supabase

### Engine 6: AI Course Creation
**Setup time**: 20-40 hours
**Monthly income potential**: $2,000-50,000
**Steps**:
- Pick a skill you know + AI tools you use
- Use AI to structure curriculum, create materials
- Record with screen capture + voice
- Platforms: Udemy, Skillshare, your own site

### Engine 7: Prompt Engineering as a Service
**Setup time**: 10-20 hours
**Monthly income potential**: $1,000-10,000
**What you sell**:
- Custom prompt libraries for businesses
- AI workflow consulting
- Prompt optimization retainer
- Training workshops

## The Compound Effect

The real magic happens when you stack engines:

| Engines Active | Monthly Income | Time Investment |
|---------------|---------------|-----------------|
| 1 | $1,000-3,000 | 20 hrs/week |
| 2-3 | $5,000-15,000 | 15 hrs/week |
| 4-5 | $15,000-50,000 | 10 hrs/week |
| 6+ | $50,000+ | 5 hrs/week |

## Automation Stack

- **Content**: ChatGPT + Claude + Jasper
- **Social media**: Buffer + AI scheduling
- **Email**: ConvertKit + AI sequences
- **Support**: ChatGPT-powered chatbots
- **Analytics**: AI-powered dashboards
- **Finance**: Automated bookkeeping (Bench + AI)
    `,
  },
  {
    slug: "ai-investing",
    title: "AI-Enhanced Investing & Wealth Building",
    description: "Use AI tools to analyze investments, optimize your portfolio, and make smarter financial decisions.",
    icon: "📈",
    difficulty: "Intermediate",
    readTime: "25 min",
    tags: ["investing", "wealth", "AI analysis"],
    content: `
# AI-Enhanced Investing & Wealth Building

## The Foundation First

Before AI-enhanced anything, nail the basics:
1. Emergency fund (3-6 months expenses)
2. Max out tax-advantaged accounts (401k, IRA)
3. Low-cost index fund core (VTI, VXUS, BND)
4. No high-interest debt

## How AI Changes Investing

### AI for Research
- **Earnings analysis**: Feed 10-Q/10-K filings to ChatGPT/Claude for instant summaries
- **Sentiment analysis**: AI tools scanning social media, news, forums
- **Competitive analysis**: Compare companies across dozens of metrics in minutes
- **Trend identification**: Spot emerging sectors before they're obvious

### AI for Portfolio Management
- **Rebalancing alerts**: AI monitors your allocation and alerts you
- **Tax-loss harvesting**: Automated identification of opportunities
- **Risk assessment**: Monte Carlo simulations with AI interpretation
- **Correlation analysis**: Ensure your holdings aren't secretly correlated

### AI Tools for Investors
- **ChatGPT/Claude**: Research, analysis, explanation
- **Perplexity**: Real-time financial research
- **Portfolio Visualizer**: Backtesting and analysis
- **Koyfin**: Professional-grade financial data (free tier available)
- **Finviz**: Stock screening and visualization
- **Seeking Alpha**: AI-powered stock analysis

## The AI Investment Thesis Framework

Use this prompt template with any AI:

\`\`\`
Analyze [COMPANY/TICKER] considering:
1. Revenue growth (5-year trend)
2. Competitive moat (what protects them?)
3. Management quality (track record)
4. Valuation (P/E, P/S vs historical and peers)
5. Risks (what could go wrong?)
6. AI impact (how does AI help or hurt this business?)
7. Bull case (best realistic scenario)
8. Bear case (worst realistic scenario)
Give me a 1-10 conviction score with reasoning.
\`\`\`

## Building Wealth: The Ladder

### Rung 1: Earn More ($0 → $100k net worth)
- Focus: income growth (career + side hustles)
- Invest: 80% index funds, 20% learning/tools
- AI role: maximize your earning efficiency

### Rung 2: Optimize ($100k → $500k)
- Focus: tax optimization, expense reduction
- Invest: 70% index funds, 20% individual stocks, 10% alternatives
- AI role: portfolio analysis, tax strategy

### Rung 3: Accelerate ($500k → $1M)
- Focus: multiple income streams, leverage
- Invest: 60% index funds, 25% individual stocks, 15% alternatives
- AI role: deal flow analysis, opportunity identification

### Rung 4: Compound ($1M+)
- Focus: preservation + growth balance
- Invest: diversified across asset classes
- AI role: risk management, alternative investment analysis

## Tax Optimization with AI

- Use AI to identify all possible deductions
- AI-powered tax planning (estimate scenarios)
- Automated record-keeping
- Entity structure optimization (LLC, S-Corp analysis)

## Risk Management

**Never do this:**
- Invest money you need in <5 years
- Put >5% in any single stock
- Use leverage without understanding it
- Follow AI advice without your own research

**Always do this:**
- Diversify across asset classes
- Rebalance periodically
- Keep learning
- Have an exit strategy for every position
    `,
  },
  {
    slug: "build-in-public",
    title: "The Build-in-Public Playbook",
    description: "How to build your audience, credibility, and business simultaneously by sharing your journey openly.",
    icon: "📢",
    difficulty: "Beginner",
    readTime: "15 min",
    tags: ["marketing", "audience", "brand"],
    content: `
# The Build-in-Public Playbook

## Why Build in Public?

Building in public is the highest-leverage marketing strategy for solo entrepreneurs:
- **Accountability**: Public commitments drive action
- **Audience**: People follow journeys, not products
- **Feedback**: Real users tell you what to build
- **Trust**: Transparency builds credibility faster than anything
- **Opportunities**: Unexpected collaborations, clients, partnerships

## The Framework

### 1. Choose Your Platform (Pick 1-2 max)
- **Twitter/X**: Best for tech, AI, startups. Real-time. High engagement.
- **LinkedIn**: Best for professional services. Slower but higher value.
- **YouTube**: Best for tutorials and deep dives. Compounds massively.
- **Newsletter**: Best for depth. Owned audience = true asset.
- **Reddit**: Best for niche communities. Authentic engagement.

### 2. Share What You're Actually Doing
**Daily (5 min)**:
- What you worked on today
- A problem you solved
- A tool you discovered
- A quick win or lesson

**Weekly (30 min)**:
- Progress update with numbers
- What worked, what didn't
- Next week's goals

**Monthly (1 hour)**:
- Revenue/traffic metrics (be transparent)
- Biggest lessons learned
- Refined strategy

### 3. The Content System
Use AI to help, but keep it authentic:

**Morning**: Spend 15 min reviewing what you did yesterday
**AI assist**: Ask ChatGPT to help you turn it into a compelling post
**Your edit**: Add your voice, personality, specific details
**Schedule**: Post at optimal times (use analytics)

### 4. Engage Genuinely
- Reply to everyone who engages with your content
- Comment on others' posts with thoughtful insights
- Share others' work (generosity compounds)
- Join communities and contribute value

## Content Ideas That Work

1. "Here's how I made $X this month" (breakdown posts)
2. "I built [thing] in [time] using [tools]" (build logs)
3. "Mistake I made this week" (vulnerability posts)
4. "Here's my exact stack for [process]" (tool posts)
5. "Unpopular opinion: [contrarian take]" (engagement posts)
6. "Day [X] of [challenge]" (accountability series)
7. "Here's what I learned from [experience]" (lesson posts)

## The Compound Effect

| Month | Followers | Opportunities | Income Impact |
|-------|-----------|---------------|---------------|
| 1 | 100 | 0 | $0 |
| 3 | 500 | 1-2 | $500 |
| 6 | 2,000 | 5-10 | $2,000 |
| 12 | 10,000 | 20+ | $10,000+ |

## Tools for Building in Public

- **Typefully**: Schedule Twitter threads
- **Buffer**: Multi-platform scheduling
- **Canva**: Quick graphics
- **ChatGPT**: Content repurposing
- **Plausible**: Website analytics
- **Beehiiv**: Newsletter platform
    `,
  },
  {
    slug: "prompt-engineering-mastery",
    title: "Prompt Engineering Mastery",
    description: "Master the art of getting exactly what you need from AI models. Advanced techniques for maximum leverage.",
    icon: "🧠",
    difficulty: "Advanced",
    readTime: "35 min",
    tags: ["AI", "prompts", "productivity"],
    content: `
# Prompt Engineering Mastery

## Why This Matters

Prompt engineering is the highest-leverage skill of the 2020s. The difference between a good prompt and a great prompt can be 10x the output quality.

## The Fundamentals

### The CLEAR Framework
- **C**ontext: Set the stage (who, what, why)
- **L**ength: Specify desired output length
- **E**xamples: Show what good looks like
- **A**ction: Be explicit about what you want
- **R**ole: Assign an expert persona

### Example
Bad: "Write me a blog post about AI"
Good:
\`\`\`
You are a senior tech journalist writing for a business audience.

Write a 1,500-word blog post about how small businesses can use AI to compete with larger competitors.

Include:
- 3 specific use cases with real tool names
- A brief case study for each
- Actionable next steps for the reader

Tone: Professional but accessible. No jargon without explanation.

Structure: Hook → Problem → Solution (3 cases) → How to start → Conclusion
\`\`\`

## Advanced Techniques

### 1. Chain of Thought (CoT)
Force the AI to reason step by step:
\`\`\`
Think through this step by step before answering:
[Your question]
\`\`\`

### 2. Few-Shot Learning
Provide examples of desired input/output:
\`\`\`
Example 1: Input: [x] → Output: [y]
Example 2: Input: [a] → Output: [b]
Now: Input: [your actual input] → Output:
\`\`\`

### 3. Role-Playing
\`\`\`
You are a [specific expert] with [X years] of experience in [field].
You have [specific traits/background].
[Your actual request]
\`\`\`

### 4. Constraint Setting
\`\`\`
Rules:
- Do NOT [specific thing]
- ALWAYS [specific thing]
- Keep it under [X] words
- Use [specific format]
\`\`\`

### 5. Iterative Refinement
Start broad, then narrow:
1. "Give me 10 ideas for [topic]"
2. "I like idea #3 and #7. Expand each into a detailed plan."
3. "For plan #3, what are the first 5 steps?"

### 6. Meta-Prompting
Ask AI to improve your prompt:
\`\`\`
I want to achieve [goal]. Here's my current prompt: [prompt]
How would you improve this prompt to get better results?
\`\`\`

## Prompt Templates for Common Tasks

### Research
\`\`\`
Research [topic] comprehensively. Include:
- Current state of the field
- Key players and trends
- Statistics and data points
- Expert opinions (cite sources)
- Controversies or debates
- Future predictions
Format: structured with headers and bullet points.
\`\`\`

### Analysis
\`\`\`
Analyze [subject] from multiple angles:
1. Strengths
2. Weaknesses
3. Opportunities
4. Threats
5. Comparison with [alternative]
6. Recommendation with reasoning
Be specific with examples and data.
\`\`\`

### Creation
\`\`\`
Create [deliverable] for [audience] that:
- Solves [specific problem]
- Has [specific qualities]
- Includes [specific elements]
- Avoids [specific things]
Style/tone: [specifications]
Length: [specifications]
\`\`\`

## The Prompt Library

Save your best prompts. Build a personal library organized by:
- Task type (research, writing, analysis, coding, design)
- Quality level (quick draft vs polished output)
- Domain (marketing, technical, creative, business)

## Common Mistakes

1. Being too vague ("write something good")
2. Not providing context (AI doesn't know your situation)
3. Accepting first output (always iterate)
4. Not using system prompts (in ChatGPT, use custom instructions)
5. Forgetting to specify format (bullet points vs paragraphs vs table)
    `,
  },
  {
    slug: "remote-work-toolkit",
    title: "The Ultimate Remote Work Toolkit",
    description: "Everything you need to work from anywhere in the world, from async communication to timezone management.",
    icon: "🌍",
    difficulty: "Beginner",
    readTime: "20 min",
    tags: ["remote work", "productivity", "lifestyle"],
    content: `
# The Ultimate Remote Work Toolkit

## The Remote Work Revolution

Remote work isn't a perk anymore — it's a competitive advantage. You can:
- Live anywhere (geoarbitrage: earn in dollars, spend in pesos)
- Eliminate commute (2+ hours/day back)
- Design your ideal work environment
- Access global opportunities

## The Stack

### Communication
- **Slack/Discord**: Team chat
- **Zoom/Google Meet**: Video calls
- **Loom**: Async video messages (game-changer)
- **Email**: Still essential, use AI to manage

### Productivity
- **Notion**: All-in-one workspace
- **Todoist**: Task management
- **Google Calendar**: Time blocking
- **Focus apps**: Forest, Freedom, Cold Turkey

### Development
- **Cursor**: AI-powered code editor
- **GitHub**: Version control + collaboration
- **Vercel/Netlify**: Deployment
- **Linear**: Project management

### Design
- **Figma**: UI/UX design
- **Canva**: Quick graphics
- **Midjourney**: AI image generation
- **Screen Studio**: Screen recording

### Finance
- **Wise**: International transfers
- **QuickBooks**: Bookkeeping
- **Stripe**: Payment processing
- **Mercury**: Business banking

### AI Assistants
- **ChatGPT**: General purpose
- **Claude**: Long-form writing, analysis
- **Perplexity**: Research
- **Copilot**: Coding assistance

## Setting Up Your Home Office

### Essentials ($500-1,000 budget)
- Standing desk (or converter)
- Ergonomic chair
- External monitor (27" minimum)
- Good webcam (Logitech C920+)
- Ring light
- Noise-canceling headphones
- Fast internet (backup: mobile hotspot)

### Nice to Have
- Second monitor
- Mechanical keyboard
- Good microphone (Blue Yeti / Shure MV7)
- Whiteboard
- Plants (seriously — they help)

## Async-First Communication

The golden rule: **Default to async, sync only when necessary**.

**Async works for**: status updates, code reviews, design feedback, questions, decisions
**Sync works for**: brainstorming, relationship building, sensitive topics, complex decisions

### Async Best Practices
1. Write clearly (use AI to help)
2. Include context (don't make people ask)
3. Specify deadlines ("need by EOD Tuesday")
4. Use video (Loom) for complex explanations
5. Document decisions in a central place

## Timezone Management

If you work across timezones:
- Use World Time Buddy for scheduling
- Block "overlap hours" for sync communication
- Use async tools for everything else
- Set clear response-time expectations
- Rotate meeting times (share the pain)

## The Remote Worker's Daily Routine

**Morning (High Energy)**:
- Deep work block (2-3 hours)
- No meetings, no Slack, no email
- Use AI to accelerate your most important task

**Midday (Medium Energy)**:
- Meetings and sync communication
- Collaborative work
- Email and Slack catch-up

**Afternoon (Lower Energy)**:
- Administrative tasks
- Planning tomorrow
- Learning and exploration
- AI-assisted repetitive work

## Staying Sane

- Have a dedicated workspace (not your bed)
- Set boundaries (log off at a specific time)
- Take breaks (Pomodoro: 25 min work, 5 min break)
- Exercise daily (non-negotiable)
- Socialize (coworking spaces, meetups, online communities)
- Travel (if digital nomad: slow travel, 1-3 months per city)
    `,
  },
  {
    slug: "financial-independence-math",
    title: "The Financial Independence Math",
    description: "The actual numbers, spreadsheets, and strategies for reaching FIRE (Financial Independence, Retire Early).",
    icon: "🧮",
    difficulty: "Intermediate",
    readTime: "20 min",
    tags: ["FIRE", "math", "planning"],
    content: `
# The Financial Independence Math

## The Core Equation

**FI Number = Annual Expenses × 25**

This is based on the 4% safe withdrawal rate (the Trinity Study).

| Annual Expenses | FI Number | Monthly Savings Needed (10 years) |
|----------------|-----------|-----------------------------------|
| $30,000 | $750,000 | $4,800 |
| $40,000 | $1,000,000 | $6,400 |
| $50,000 | $1,250,000 | $8,000 |
| $60,000 | $1,500,000 | $9,600 |
| $80,000 | $2,000,000 | $12,800 |

*Assumes 7% real return after inflation*

## The Two Levers

### Lever 1: Increase Income
Every extra $1,000/month you earn AND invest:
- At 7% return, = $173,000 in 10 years
- At 7% return, = $520,000 in 20 years

### Lever 2: Decrease Expenses
Every $1,000/month you cut from expenses:
- Reduces your FI number by $300,000
- AND frees up $1,000/month to invest
- Double impact!

## The Savings Rate Table

| Savings Rate | Years to FI |
|-------------|-------------|
| 10% | 51 years |
| 20% | 37 years |
| 30% | 28 years |
| 40% | 22 years |
| 50% | 17 years |
| 60% | 12.5 years |
| 70% | 8.5 years |
| 80% | 5.5 years |

The AI advantage: you can simultaneously increase income AND decrease expenses, pushing savings rates to 60-80%.

## Investment Strategy by Phase

### Phase 1: Building ($0 - $100k)
- 100% total stock market index (VTI or VTSAX)
- This is the hardest phase — keep it simple, stay the course

### Phase 2: Growing ($100k - $500k)
- 80% stocks (VTI + VXUS for international)
- 10% bonds (BND)
- 10% alternatives (REITs, small value tilt)

### Phase 3: Preserving ($500k+)
- 60% stocks
- 20% bonds
- 10% real estate
- 10% alternatives/cash

## Tax Optimization

### The Big Three
1. **401(k)/403(b)**: Pre-tax contributions, $23,000/year limit
2. **Roth IRA**: Post-tax growth, $7,000/year limit (backdoor if high income)
3. **HSA**: Triple tax advantage, $4,150/year (individual)

### Advanced Strategies
- Roth Conversion Ladder (for early retirees)
- Tax-loss harvesting
- Asset location optimization
- Qualified dividends strategy
- Real estate depreciation

## The Coast FI Concept

**Coast FI**: You've invested enough that compound interest alone will reach your FI number by traditional retirement age.

If you need $1M at 65 and you're 30:
- With 7% real return: you need ~$130,000 invested today
- That means: you only need to cover expenses, not save for retirement
- This is incredibly freeing — you can take lower-paying but fulfilling work

## Withdrawal Strategies

### The 4% Rule
- Withdraw 4% of initial portfolio, adjust for inflation
- Historically sustainable for 30+ years
- Conservative for longer retirements

### Variable Percentage Withdrawal
- Withdraw more in good years, less in bad years
- More sustainable but less predictable income

### The Bucket Strategy
- 1-2 years expenses in cash
- 3-7 years in bonds
- 7+ years in stocks
- Replenish cash bucket from stock gains in good years

## Common Mistakes

1. **Not tracking expenses** — you can't optimize what you don't measure
2. **Lifestyle inflation** — earn more, spend more = stuck
3. **Overthinking investment** — index funds beat most active strategies
4. **Ignoring taxes** — tax optimization can save hundreds of thousands
5. **Not having an emergency fund** — one bad month shouldn't derail everything
6. **Comparing to others** — your FI number is personal
    `,
  },
];
