export interface CheatsheetItem {
  title: string;
  content: string;
  example?: string;
}

export interface CheatsheetSection {
  heading: string;
  items: CheatsheetItem[];
}

export interface Cheatsheet {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  sections: CheatsheetSection[];
}

export const cheatsheets: Cheatsheet[] = [
  {
    id: "ai-prompt-engineering",
    title: "AI Prompt Engineering Cheatsheet",
    description: "Master the art of getting exactly what you want from AI with proven prompt frameworks and patterns.",
    icon: "🧠",
    color: "primary",
    sections: [
      {
        heading: "CRISPE Framework",
        items: [
          { title: "Capacity", content: "Define the AI's capabilities, knowledge domain, and expertise level.", example: "You have deep expertise in SaaS marketing, freelance business strategy, and conversion copywriting." },
          { title: "Role", content: "Define who the AI should be. Assign a professional perspective.", example: "You are a senior freelance copywriter with 10 years of experience." },
          { title: "Insight", content: "Provide context, background, or key information the AI needs.", example: "The client sells a project management tool for remote teams, $29/mo, primarily targeting agencies." },
          { title: "Statement", content: "Clearly state what you want the AI to do.", example: "Write a landing page hero section with headline, subheadline, and CTA button text." },
          { title: "Persona", content: "Specify tone, style, or voice for the output.", example: "Use a confident, direct tone. Avoid jargon. Write at an 8th-grade reading level." },
          { title: "Experiment", content: "Give format constraints or variations to try.", example: "Provide 3 variations: one benefit-focused, one pain-point-focused, one social-proof-focused." },
        ],
      },
      {
        heading: "RISEN Framework",
        items: [
          { title: "Role", content: "Set the AI's professional role or persona.", example: "Act as a financial advisor specializing in self-employed retirement planning." },
          { title: "Instructions", content: "Step-by-step directions for the task.", example: "Create a 7-day meal plan on a $50/week grocery budget that's high-protein." },
          { title: "Steps", content: "Break the task into explicit steps the AI should follow.", example: "Step 1: List cheap protein sources. Step 2: Map to 3 meals/day. Step 3: Generate a shopping list." },
          { title: "End Goal", content: "Define the desired final output.", example: "A printable PDF-ready weekly meal plan with a consolidated grocery list." },
          { title: "Narrowing", content: "Set constraints to prevent unwanted output.", example: "Do not include supplements. No meal should take more than 30 minutes to prepare." },
        ],
      },
      {
        heading: "Advanced Techniques",
        items: [
          { title: "Chain-of-Thought", content: "Ask the AI to think step-by-step for complex reasoning tasks.", example: "Solve this pricing problem step by step: 'I want to earn $5,000/mo working 20 hours/week...'" },
          { title: "Few-Shot Learning", content: "Provide 2-3 examples of the desired output format before your request.", example: "Here are 3 tweet examples: [examples]. Now write 5 more in the exact same style about [topic]." },
          { title: "Meta-Prompting", content: "Ask the AI to help you create better prompts.", example: "I want to write better prompts for generating blog outlines. Ask me 5 questions to create the perfect prompt." },
          { title: "Role Stacking", content: "Combine multiple expert perspectives.", example: "You are both a tax CPA AND a freelance business coach. Review this strategy from both perspectives." },
          { title: "Constraint Layers", content: "Stack constraints to narrow output precisely.", example: "Write in under 200 words. Use only active voice. No adverbs. End with a question." },
          { title: "Negative Prompting", content: "Explicitly state what NOT to do.", example: "Do NOT use corporate buzzwords. Avoid: 'leverage,' 'synergy,' 'paradigm shift,' 'game-changer.'" },
          { title: "Format Templates", content: "Provide a structural template for the AI to fill in.", example: "Use this format: ## [Catchy Title] | **Problem:** [...] | **Solution:** [...] | **CTA:** [...]" },
          { title: "Iterative Refinement", content: "Ask the AI to critique and improve its own output.", example: "Now review what you just wrote. Rate it 1-10. Identify 3 weaknesses and rewrite it addressing each." },
        ],
      },
    ],
  },
  {
    id: "freelance-rate-calculator",
    title: "Freelance Rate Calculator Cheatsheet",
    description: "Stop guessing your rates. Use these formulas, benchmarks, and scripts to price like a pro.",
    icon: "💰",
    color: "gold",
    sections: [
      {
        heading: "Rate Formulas",
        items: [
          { title: "Hourly Rate Formula", content: "(Desired Annual Income + Expenses + Taxes) ÷ Billable Hours/Year", example: "($80,000 + $15,000 + $24,000) ÷ 1,200 hours = $99.17/hr → charge $100/hr" },
          { title: "Project Rate Formula", content: "Estimated Hours × Hourly Rate × 1.3 (complexity buffer)", example: "20 hours × $100/hr × 1.3 = $2,600 project rate" },
          { title: "Value-Based Formula", content: "Quantify the ROI you deliver to the client and charge 10-20% of that value.", example: "Your copy generates $50,000 in sales → charge $5,000-$10,000" },
          { title: "Day Rate Formula", content: "(Monthly Target ÷ 20 working days) for retained or full-day engagements.", example: "$8,000/mo target ÷ 20 days = $400/day rate" },
        ],
      },
      {
        heading: "Benchmarks by Niche (2025-2026)",
        items: [
          { title: "AI Content Writing", content: "$50-150/hr or $500-5,000/project depending on length and research depth." },
          { title: "Chatbot / AI Automation", content: "$75-200/hr or $2,000-15,000/project based on complexity and integrations." },
          { title: "Data Analysis / AI Insights", content: "$80-250/hr or $1,500-10,000/project depending on data complexity." },
          { title: "AI-Generated Art / Design", content: "$40-120/hr or $200-3,000/project depending on usage rights and revisions." },
          { title: "AI Consulting / Strategy", content: "$150-400/hr or $2,000-25,000/engagement based on scope and deliverables." },
          { title: "AI Training / Workshops", content: "$500-5,000/day for group training sessions and corporate workshops." },
        ],
      },
      {
        heading: "Pricing Models Compared",
        items: [
          { title: "Hourly", content: "Pros: Simple, fair for scope-creep projects. Cons: Penalizes efficiency, income caps at hours worked. Best for: Discovery calls, consultations, open-ended work." },
          { title: "Per Project", content: "Pros: Rewards efficiency, predictable for clients, easier to scale. Cons: Risk of underestimating scope. Best for: Defined deliverables with clear endpoints." },
          { title: "Retainer", content: "Pros: Recurring revenue, deep client relationships, predictable income. Cons: Client dependency risk. Best for: Ongoing services, content production, consulting." },
          { title: "Value-Based", content: "Pros: Highest earnings, aligned with client outcomes. Cons: Harder to sell, requires confidence. Best for: Revenue-generating deliverables." },
        ],
      },
      {
        heading: "Negotiation Scripts",
        items: [
          { title: "When They Ask for Lower Rate", content: "'I understand budget is a factor. I can adjust the scope to fit your budget, or we can do a phased approach starting with the highest-impact deliverables.'", example: "Reduces scope instead of rate, preserving your value." },
          { title: "Justifying Premium Pricing", content: "'My rate reflects the results I deliver, not the hours I work. Clients in [niche] typically see [X] ROI within [timeframe]. Here are 2 case studies...'" },
          { title: "Anchoring High", content: "'For a project of this scope, my standard investment is $X. However, if you're able to commit by [date], I can offer $Y.'" },
        ],
      },
    ],
  },
  {
    id: "tax-deduction-reference",
    title: "Tax Deduction Reference",
    description: "Every major self-employment deduction with 2025-2026 limits so you keep more of what you earn.",
    icon: "📋",
    color: "accent",
    sections: [
      {
        heading: "Home Office (Form 8829)",
        items: [
          { title: "Simplified Method", content: "$5/sq ft up to 300 sq ft = $1,500 max deduction. No receipt tracking required." },
          { title: "Regular Method", content: "Deduct actual expenses (mortgage interest, insurance, utilities, repairs, depreciation) prorated by office square footage." },
          { title: "Requirements", content: "Must be used regularly and exclusively for business. Can be a dedicated room or clearly defined portion of a room." },
        ],
      },
      {
        heading: "Vehicle Expenses",
        items: [
          { title: "Standard Mileage Rate (2025)", content: "67 cents/mile for business use. Track total business miles driven." },
          { title: "Actual Expense Method", content: "Deduct gas, insurance, repairs, registration, depreciation, prorated by business-use percentage. Log business vs. total miles." },
        ],
      },
      {
        heading: "Equipment & Supplies",
        items: [
          { title: "Section 179 Deduction", content: "Deduct full cost of business equipment up to $1,220,000 (2025) in the year purchased. Covers computers, cameras, furniture, software." },
          { title: "De Minimis Safe Harbor", content: "Items under $2,500 can be fully deducted in the year purchased instead of depreciated." },
          { title: "Software & Subscriptions", content: "Fully deductible: ChatGPT Plus, Adobe CC, hosting, domain names, Canva Pro, CRM tools." },
        ],
      },
      {
        heading: "Travel & Meals",
        items: [
          { title: "Business Travel", content: "Flights, hotels, rideshares, and 50% of meals while traveling for business are deductible." },
          { title: "Meal Deduction (2025-2026)", content: "50% of the cost of business meals is deductible. Keep receipts and note business purpose and attendees." },
          { title: "Conference Deduction", content: "Registration, travel, and lodging for industry conferences and workshops are fully deductible." },
        ],
      },
      {
        heading: "Retirement Account Contributions",
        items: [
          { title: "Solo 401(k) (2025)", content: "Up to $23,000 employee contribution + 25% of net self-employment earnings (max $70,000 total)." },
          { title: "SEP-IRA", content: "Up to 25% of net self-employment earnings, max $69,000 (2025) / $70,000 (2026). Simpler to set up than Solo 401(k)." },
          { title: "Traditional/Roth IRA", content: "$7,000 (2025) / $7,000 (2026) if under 50, or $8,000 if 50+ with catch-up. Deductible depending on income." },
        ],
      },
      {
        heading: "Other Key Deductions",
        items: [
          { title: "Self-Employment Tax Deduction", content: "Deduct 50% of your self-employment tax (15.3%) on Schedule 1, Line 15. This is not the same as the business expense deduction." },
          { title: "Health Insurance Premium", content: "Deduct 100% of health insurance premiums for yourself, spouse, and dependents if you have net self-employment income." },
          { title: "Business Insurance", content: "Professional liability, general liability, and business property insurance premiums are fully deductible." },
          { title: "Education & Training", content: "Courses, books, certifications, and workshops that maintain or improve skills in your current business are deductible." },
          { title: "Phone & Internet", content: "Deduct the business-use percentage. If 60% business use, deduct 60% of your phone and internet bills." },
        ],
      },
    ],
  },
  {
    id: "investment-allocation",
    title: "Investment Allocation Quick Reference",
    description: "Portfolio models, fund picks, and rebalancing rules for every risk level.",
    icon: "📈",
    color: "primary",
    sections: [
      {
        heading: "Portfolio Models by Risk Level",
        items: [
          { title: "Conservative (Low Risk)", content: "40% US Total Stock Market, 20% International Stock, 35% Total Bond Market, 5% Cash/Money Market.", example: "Target: 4-5% annual return. Best for: near-retirement or very risk-averse." },
          { title: "Moderate (Medium Risk)", content: "50% US Total Stock Market, 20% International Stock, 25% Total Bond Market, 5% REIT.", example: "Target: 6-7% annual return. Best for: 5-15 year horizon, balanced growth." },
          { title: "Aggressive (High Risk)", content: "70% US Total Stock Market, 15% International Stock, 10% Small-Cap Value, 5% Emerging Markets.", example: "Target: 8-10% annual return. Best for: 15+ year horizon, can handle volatility." },
          { title: "All-Weather Portfolio", content: "30% Stocks, 55% Long-term Bonds, 15% Commodities/Gold. Designed by Ray Dalio for any economic environment.", example: "Target: 5-7% annual return with lower drawdowns. Best for: risk mitigation." },
        ],
      },
      {
        heading: "Recommended Index Funds",
        items: [
          { title: "US Total Stock Market", content: "VTI (Vanguard) or ITOT (iShares) — Covers ~4,000+ US stocks. Expense ratio: 0.03%." },
          { title: "S&P 500", content: "VOO (Vanguard) or IVV (iShares) — Top 500 US companies. Expense ratio: 0.03%." },
          { title: "International Developed", content: "VXUS (Vanguard) or IXUS (iShares) — 6,000+ stocks from developed markets. Expense ratio: 0.07%." },
          { title: "Total Bond Market", content: "BND (Vanguard) or AGG (iShares) — Investment-grade US bonds. Expense ratio: 0.03%." },
          { title: "Small-Cap Value", content: "VBR (Vanguard) or IJS (iShares) — Historically outperforms large caps long-term. Expense ratio: 0.05%." },
          { title: "REIT", content: "VNQ (Vanguard) or SCHH (Schwab) — Real estate investment trusts. Expense ratio: 0.12%." },
        ],
      },
      {
        heading: "Rebalancing Rules",
        items: [
          { title: "Time-Based Rebalancing", content: "Review and rebalance every 6-12 months. Pick a date (e.g., January 1) and stick to it." },
          { title: "Threshold Rebalancing", content: "Rebalance when any asset class drifts more than 5% from its target allocation." },
          { title: "Cash Flow Rebalancing", content: "Direct new contributions to underweight asset classes. Avoids selling and tax events." },
          { title: "Tax-Loss Harvesting", content: "Sell losing positions to offset gains. Reinvest in a similar (not identical) fund to maintain exposure." },
        ],
      },
      {
        heading: "Dollar-Cost Averaging Schedule",
        items: [
          { title: "Weekly DCA", content: "Invest 1/52 of annual contribution every week. Smooths volatility, builds habit.", example: "$12,000/year = $230.77/week" },
          { title: "Biweekly DCA", content: "Invest 1/26 of annual contribution every 2 weeks. Aligns with common pay schedules.", example: "$12,000/year = $461.54/biweekly" },
          { title: "Monthly DCA", content: "Invest 1/12 of annual contribution on the same date each month. Simplest to automate.", example: "$12,000/year = $1,000/month" },
          { title: "Key Rule", content: "Never try to time the market. Consistency beats perfection. Automate your investments." },
        ],
      },
    ],
  },
  {
    id: "content-repurposing-matrix",
    title: "Content Repurposing Matrix",
    description: "Turn one piece of content into 15+ assets. Maximize reach with minimal effort.",
    icon: "🔄",
    color: "gold",
    sections: [
      {
        heading: "Core Content → Derivatives",
        items: [
          { title: "Long-Form Blog Post (Anchor)", content: "Start with a 1,500-2,500 word comprehensive guide. This is your anchor content piece that everything else derives from." },
          { title: "Twitter/X Thread", content: "Extract 8-12 key points as a threaded post. Each tweet is one insight with a hook opener. Link to full post at the end." },
          { title: "LinkedIn Post", content: "Rewrite the thread for a professional audience. Add a personal story hook and industry-specific examples. 150-300 words." },
          { title: "Newsletter Section", content: "Condense the blog into a 200-300 word summary for your email list. Add an exclusive insight or tool recommendation." },
          { title: "YouTube Script", content: "Convert the blog into a conversational video script. Add visual cues, transitions, and a hook in the first 10 seconds." },
          { title: "Short-Form Video (Reels/TikTok/Shorts)", content: "Extract 3-5 key hooks as 30-60 second vertical videos. One idea per video with text overlays." },
          { title: "Podcast Episode", content: "Use the blog as a discussion outline. Expand on each point conversationally. Add personal anecdotes and audience questions." },
          { title: "Infographic", content: "Visualize the key data points, steps, or framework from the blog as a shareable graphic using Canva." },
          { title: "Carousel (LinkedIn/Instagram)", content: "Break the blog into 8-10 swipeable slides. Each slide = one key point with minimal text and bold visuals." },
          { title: "Audio Snippet", content: "Record a 60-second audio summary of the key insight. Share as a voice note or short podcast clip." },
          { title: "PDF Cheat Sheet", content: "Distill the blog into a 1-page downloadable reference. Use as a lead magnet to grow your email list." },
          { title: "Email Autoresponder", content: "Split the blog into a 3-5 day email series. Each email covers one section with a CTA to the full post." },
          { title: "Community Post", content: "Share a key question or insight from the blog in relevant Facebook/Reddit/Discord communities to spark discussion." },
          { title: "Quote Graphics", content: "Pull 3-5 quotable lines from the blog and design them as shareable social graphics with your branding." },
          { title: "Slide Deck", content: "Convert the framework into a 10-15 slide presentation for sharing on SlideShare or using in workshops." },
        ],
      },
      {
        heading: "Repurposing Workflow",
        items: [
          { title: "Step 1: Create Anchor Content", content: "Write one high-quality long-form piece per week. This is your content engine." },
          { title: "Step 2: Batch Derivatives", content: "After publishing, immediately create 5-7 derivatives in a 2-hour batch session." },
          { title: "Step 3: Schedule Staggered Release", content: "Don't post everything at once. Schedule derivatives over 2-3 weeks for sustained visibility." },
          { title: "Step 4: Cross-Promote", content: "Link between platforms: 'Read the full breakdown' → blog, 'Watch the video' → YouTube, etc." },
        ],
      },
    ],
  },
  {
    id: "ai-tool-stack-by-budget",
    title: "AI Tool Stack by Budget",
    description: "The exact tools you need at every budget level, from free to professional.",
    icon: "🛠️",
    color: "accent",
    sections: [
      {
        heading: "$0/Month — Free Tier Starter",
        items: [
          { title: "AI Chat & Writing", content: "ChatGPT (free tier) — General-purpose AI for writing, brainstorming, research. Claude (free) — Better for long-form writing and analysis. Google Gemini (free) — Good for research and Google ecosystem integration." },
          { title: "Image Generation", content: "Bing Image Creator (DALL-E 3) — Free image generation via Microsoft. Ideogram.ai — Excellent text-in-image generation. Leonardo.ai — 150 free generations/day." },
          { title: "Design", content: "Canva (free) — Social graphics, presentations, simple designs. Figma (free) — UI design, wireframes, prototyping. Remove.bg — Free background removal tool." },
          { title: "Productivity", content: "Notion (free) — Project management, databases, wikis. Google Workspace — Docs, Sheets, Slides, Calendar. Trello (free) — Kanban boards for task management." },
          { title: "Video & Audio", content: "CapCut (free) — Video editing with AI features. OBS Studio — Free screen recording and streaming. Audacity — Free audio recording and editing." },
        ],
      },
      {
        heading: "$20-50/Month — Essential Paid",
        items: [
          { title: "AI Chat (Priority)", content: "ChatGPT Plus ($20/mo) — GPT-4 access, DALL-E 3, advanced data analysis, custom GPTs. This is the single best $20 you'll spend." },
          { title: "Writing & SEO", content: "Jasper ($49/mo) — AI writing for marketing teams. Surfer SEO ($89/mo) — AI-powered content optimization. Or: Claude Pro ($20/mo) — Superior long-form writing assistant." },
          { title: "Design Upgrade", content: "Canva Pro ($12.99/mo) — Brand kit, 100M+ stock photos, resize, BG remover. Midjourney ($10-30/mo) — Best AI image quality for commercial use." },
          { title: "Automation", content: "Zapier (free tier → $19.99/mo) — Connect apps, automate workflows. Make.com ($10.59/mo) — Cheaper Zapier alternative with AI features." },
          { title: "Email & Marketing", content: "ConvertKit (free → $25/mo) — Email marketing for creators. Beehiiv (free → $49/mo) — Newsletter platform with ad network. Buffer ($6/mo) — Social media scheduling." },
        ],
      },
      {
        heading: "$100+/Month — Pro Stack",
        items: [
          { title: "AI Suite", content: "ChatGPT Plus ($20) + Claude Pro ($20) + Midjourney ($30) = $70/mo. Three AI tools covering text, analysis, and images." },
          { title: "Professional Design", content: "Adobe Creative Cloud ($54.99/mo) — Photoshop, Illustrator, Premiere Pro. Figma Pro ($15/mo) — Advanced design collaboration." },
          { title: "Advanced Automation", content: "Zapier Professional ($49/mo) — Multi-step Zaps, 2,000 tasks/mo. Airtable ($24/mo) — Database-driven project management. Make.com ($18/mo) — Complex automation flows." },
          { title: "Analytics & SEO", content: "Ahrefs ($99/mo) — Keyword research, backlink analysis, site audits. Google Analytics 4 (free) + Looker Studio (free) — Custom dashboards." },
          { title: "Client Management", content: "HoneyBook ($16-33/mo) — Contracts, invoices, client portals. Dubsado ($20-40/mo) — End-to-end client management. FreshBooks ($17-30/mo) — Accounting and invoicing." },
          { title: "Video Production", content: "Descript ($24/mo) — AI video/audio editing, transcription. Riverside.fm ($15-24/mo) — High-quality remote recording. Opus Clip ($19/mo) — AI short-form video clips." },
        ],
      },
    ],
  },
];
