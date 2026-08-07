"use client";
import { useState } from "react";

interface Template {
  name: string;
  description: string;
  category: string;
  icon: string;
  content: string;
}

const templates: Template[] = [
  {
    name: "AI Service Proposal Template",
    description: "Professional proposal template for pitching AI-powered services to clients.",
    category: "Freelancing",
    icon: "📄",
    content: `# [Your Name] — AI-Powered [Service] Proposal

## Executive Summary
[Brief overview of what you'll deliver and the value it provides]

## The Challenge
[Describe the client's problem in their words]

## Our Approach
### Phase 1: Discovery (Week 1)
- Understand current workflows
- Identify AI integration opportunities
- Define success metrics

### Phase 2: Implementation (Weeks 2-3)
- [Specific deliverable 1]
- [Specific deliverable 2]
- [Specific deliverable 3]

### Phase 3: Optimization (Week 4)
- Performance review
- Refinement based on data
- Knowledge transfer

## What Makes This Different
- AI-powered: [specific AI tools you'll use]
- Speed: [X]x faster than traditional approach
- Quality: [specific quality guarantees]

## Investment
| Phase | Timeline | Investment |
|-------|----------|-----------|
| Discovery | 1 week | $[X] |
| Implementation | 2 weeks | $[X] |
| Optimization | 1 week | $[X] |
| **Total** | **4 weeks** | **$[X]** |

## Why Work With Me
- [Experience/relevant background]
- [Past results/testimonials]
- [Unique approach]

## Next Steps
1. Schedule a 30-min discovery call
2. I'll send a detailed scope document
3. We kick off within [X] days

---
[Your Name] | [Email] | [Website]`,
  },
  {
    name: "Financial Independence Tracker",
    description: "Spreadsheet template to track your path to financial independence.",
    category: "Finance",
    icon: "📊",
    content: `# FI Tracker Template

## Monthly Income Tracking
| Source | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|--------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| Salary | | | | | | | | | | | | |
| Freelance | | | | | | | | | | | | |
| Passive | | | | | | | | | | | | |
| Investment | | | | | | | | | | | | |
| **Total** | | | | | | | | | | | | |

## Monthly Expense Tracking
| Category | Budget | Actual | Diff |
|----------|--------|--------|------|
| Housing | | | |
| Food | | | |
| Transport | | | |
| Utilities | | | |
| Insurance | | | |
| Entertainment | | | |
| Shopping | | | |
| Health | | | |
| Other | | | |
| **Total** | | | |

## FI Metrics
- Savings Rate: ___%
- Years to FI: ___
- Freedom Number: $___
- Current Net Worth: $___
- Progress to FI: ___%

## Net Worth Tracking (Monthly)
| Month | Assets | Liabilities | Net Worth | Change |
|-------|--------|-------------|-----------|--------|
| Jan | | | | |
| Feb | | | | |
| ... | | | | |`,
  },
  {
    name: "Content Calendar Template",
    description: "Plan and track your content output across platforms.",
    category: "Marketing",
    icon: "📅",
    content: `# Content Calendar — [Month/Year]

## Weekly Content Goals
- Blog posts: [X]
- Social posts: [X]
- Newsletter: [X]
- Videos: [X]

## Week 1
| Day | Platform | Content Type | Topic | Status |
|-----|----------|-------------|-------|--------|
| Mon | Blog | Article | [Topic] | Draft |
| Tue | Twitter | Thread | [Topic] | Idea |
| Wed | LinkedIn | Post | [Topic] | |
| Thu | Newsletter | Issue | [Topic] | |
| Fri | YouTube | Video | [Topic] | Script |

## Content Pillars
1. [Pillar 1 — e.g., AI Tools]
2. [Pillar 2 — e.g., Income Building]
3. [Pillar 3 — e.g., Personal Journey]

## AI Workflow
1. Brainstorm ideas → ChatGPT
2. Research → Perplexity
3. First draft → Claude
4. Edit & add voice → Manual
5. SEO optimization → SurferSEO/AI
6. Create visuals → Midjourney/Canva
7. Schedule → Buffer/Typefully

## Performance Tracking
| Content | Views | Engagement | Leads | Revenue |
|---------|-------|------------|-------|----------|
| | | | | |`,
  },
  {
    name: "Business Plan Template (AI-Era)",
    description: "Lean business plan template designed for AI-powered solo businesses.",
    category: "Business",
    icon: "🏗️",
    content: `# Business Plan: [Business Name]

## One-Liner
[What you do] for [who you serve] using [how you do it differently with AI]

## Problem
[What pain point are you solving?]

## Solution
[Your product/service and how AI makes it better/faster/cheaper]

## Target Customer
- Demographics: [age, income, location]
- Psychographics: [values, pain points, desires]
- Where they hang out: [platforms, communities]

## Revenue Model
| Revenue Stream | Price | Monthly Target | Monthly Revenue |
|---------------|-------|---------------|----------------|
| [Stream 1] | $ | | $ |
| [Stream 2] | $ | | $ |
| **Total** | | | $ |

## AI Advantage
- What AI tools you use: [list]
- How they give you an edge: [specific advantages]
- Cost savings vs traditional approach: $[X]/month

## Marketing Strategy
1. [Channel 1]: [approach]
2. [Channel 2]: [approach]
3. [Channel 3]: [approach]

## Monthly Expenses
| Expense | Cost |
|---------|------|
| AI Tools | $ |
| Hosting | $ |
| Marketing | $ |
| Other | $ |
| **Total** | $ |

## Milestones
- [ ] Month 1: [milestone]
- [ ] Month 3: [milestone]
- [ ] Month 6: [milestone]
- [ ] Year 1: [milestone]

## Key Metrics to Track
- Revenue: $/month
- Customers/clients: #
- Expenses: $/month
- Profit margin: %
- Hours worked: hrs/week`,
  },
  {
    name: "Cold Outreach Template",
    description: "Proven cold outreach templates for landing clients and partnerships.",
    category: "Sales",
    icon: "📧",
    content: `# Cold Outreach Templates

## Template 1: Value-First Approach
Subject: Quick idea for [Company Name]

Hi [Name],

I noticed [specific observation about their business/website/product].

I put together a quick [analysis/mockup/suggestion] — [brief description of what you created].

[Link or attachment]

If you'd like to discuss how to implement this, I'd love to chat. No strings attached.

Best,
[Your Name]

---

## Template 2: Problem-Solution
Subject: [Specific problem] at [Company Name]

Hi [Name],

I help [type of company] solve [specific problem] using [your approach].

Companies like [social proof] have seen [specific result] after working with me.

Would you be open to a 15-minute call to see if I could help [Company Name] with [specific problem]?

Best,
[Your Name]

---

## Template 3: The Portfolio Showcase
Subject: [Impressive result] — thought you'd find this interesting

Hi [Name],

I recently helped [similar company] achieve [specific result]:
- [Metric 1]
- [Metric 2]
- [Metric 3]

I think [Company Name] could see similar results. Would you be interested in a quick chat?

Best,
[Your Name]

---

## Tips
- Personalize every email (mention something specific about them)
- Keep it under 150 words
- Include one clear CTA
- Follow up once after 3-5 days
- Track open/reply rates`,
  },
  {
    name: "AI Workflow Automation Blueprint",
    description: "Template for designing and documenting AI automation workflows.",
    category: "Automation",
    icon: "⚙️",
    content: `# AI Workflow: [Workflow Name]

## Purpose
[What does this workflow accomplish? What manual process does it replace?]

## Trigger
- What starts this workflow? [e.g., new email, form submission, schedule]
- Frequency: [e.g., real-time, daily, weekly]

## Steps
### Step 1: [Action]
- Tool: [e.g., Zapier, Make, n8n]
- Input: [what goes in]
- Process: [what happens]
- Output: [what comes out]

### Step 2: [Action]
- Tool: [e.g., ChatGPT API]
- Input: [output from Step 1]
- Process: [AI prompt/logic]
- Output: [what comes out]

### Step 3: [Action]
- Tool: [e.g., Google Sheets, Notion]
- Input: [output from Step 2]
- Process: [what happens]
- Output: [final result]

## Error Handling
- What happens if Step X fails?
- Retry logic: [e.g., retry 3 times, then notify]
- Fallback: [manual process]

## Monitoring
- How to check if it's working: [method]
- Success metrics: [KPIs]
- Alert thresholds: [when to be notified]

## Cost
| Component | Monthly Cost |
|-----------|-------------|
| [Tool 1] | $ |
| [Tool 2] | $ |
| API calls | $ |
| **Total** | $ |

## ROI
- Time saved: [X] hours/month
- Value of time: $[X]/hour
- Monthly value: $[X]
- ROI: [X]%`,
  },
  {
    name: "Weekly Review & Reflection Template",
    description: "Structured weekly review for tracking progress, wins, lessons, and next week's priorities.",
    category: "Productivity",
    icon: "🔄",
    content: `# Weekly Review — Week of [Date]

## 🏆 This Week's Wins
1.
2.
3.
4.
5.

## 📈 Metrics Review
| Metric | Target | Actual | Notes |
|--------|--------|--------|-------|
| Income | $ | $ | |
| Expenses | $ | $ | |
| Savings Rate | % | % | |
| Hours Worked | | | |
| Client Projects | | | |
| Content Published | | | |

## 📝 Lessons Learned
- What worked well this week?
  1.
  2.
  3.

- What didn't work?
  1.
  2.

- What would I do differently?
  1.
  2.

## 🎯 Next Week's Top 3 Priorities
1. [Priority 1 — most impactful]
2. [Priority 2]
3. [Priority 3]

## ✅ Habit Tracking
| Habit | M | T | W | T | F | S | S | Score |
|-------|---|---|---|---|---|---|---|-------|
| Exercise | | | | | | | | /7 |
| Deep Work (2+ hrs) | | | | | | | | /7 |
| Reading | | | | | | | | /7 |
| Content Creation | | | | | | | | /7 |
| Networking | | | | | | | | /7 |
| Learning/Skill Dev | | | | | | | | /7 |

## ⚡ Energy & Focus Notes
- Highest energy day: ___
- Lowest energy day: ___
- Best focus window: ___
- Biggest distraction: ___
- What to protect next week: ___

## 🙏 Gratitude
- I'm grateful for: ___
- Something I'm proud of: ___
- One thing I'm looking forward to: ___`,
  },
  {
    name: "Client Onboarding Questionnaire",
    description: "Send to new clients to gather project requirements, preferences, and expectations.",
    category: "Freelancing",
    icon: "🤝",
    content: `# Client Onboarding Questionnaire

Thank you for choosing to work together! Please fill this out so I can deliver the best possible results.

---

## 🏢 Business Information
- **Company Name:**
- **Industry:**
- **Website URL:**
- **Company Size:** (solo / 2-10 / 11-50 / 50+)
- **Your Role/Title:**

---

## 🎯 Project Overview
- **Project Name/Description:**
- **Primary Goal:** (What does success look like?)
- **Secondary Goals:**
  1.
  2.
- **Target Audience:** (Who is this for?)
- **Desired Launch/Timeline:**
- **Budget Range:**
- **Hard Deadlines:**

---

## 💬 Communication Preferences
- **Preferred Channels:** (Email / Slack / Zoom / Phone / Other)
- **Best Time to Reach You:**
- **Expected Response Time:** (Same day / 24 hrs / 48 hrs)
- **Meeting Cadence:** (Weekly / Bi-weekly / As needed)
- **How do you prefer to receive updates?** (Email / Shared doc / Dashboard)
- **Decision Maker(s):** (Who approves deliverables?)

---

## 🎨 Brand & Style
- **Existing Brand Guidelines?** (Yes/No — if yes, please share)
- **Brand Colors:**
- **Tone of Voice:** (Professional / Casual / Playful / Technical)
- **Competitors You Admire:**
  1.
  2.
  3.
- **Competitors You Don't Like & Why:**
- **References/Inspiration:** (Links to designs, content, or products you like)

---

## 🔧 Technical Requirements
- **Current Platforms/Tools Used:**
- **Required Integrations:**
  1.
  2.
- **Technical Constraints:**
- **Hosting/Deployment Preferences:**

---

## 📊 Success Metrics
- **How will you measure success?**
  1.
  2.
  3.
- **Key Performance Indicators (KPIs):**
  1.
  2.
- **3 months post-launch, what would make this a win?**

---

## 📋 Previous Experience
- **Have you worked with a [freelancer/agency] before?** (Yes/No)
- **What worked well in past projects?**
- **What didn't work?**
- **Anything else I should know?**`,
  },
  {
    name: "Pricing Strategy Worksheet",
    description: "Calculate your optimal pricing using value-based, competitor, and cost-plus methods.",
    category: "Business",
    icon: "💲",
    content: `# Pricing Strategy Worksheet — [Service/Product Name]

---

## Method 1: Cost-Plus Pricing
*Calculate your minimum viable rate based on costs.*

### Monthly Business Costs
| Expense | Monthly Amount |
|---------|---------------|
| Software/Tools | $ |
| Internet/Office | $ |
| Marketing | $ |
| Insurance/Taxes | $ |
| Education/Training | $ |
| Misc/Buffer | $ |
| **Total Monthly Costs** | **$** |

### Calculation
- Total Monthly Costs: $___
- Desired Monthly Profit: $___
- Billable Hours/Month: ___
- **Minimum Hourly Rate:** $___ ÷ ___ = **$___/hr**
- **Minimum Monthly Retainer:** $___ ÷ ___ clients = **$___/client**

---

## Method 2: Market Rate Analysis
*What are competitors charging?*

| Competitor | Price Point | What's Included | Their Weakness | Your Differentiation |
|-----------|-------------|-----------------|---------------|---------------------|
| Comp 1 | $ | | | |
| Comp 2 | $ | | | |
| Comp 3 | $ | | | |
| Comp 4 | $ | | | |
| Comp 5 | $ | | | |

### Market Positioning
- Market Average Price: $___
- Market Low: $___
- Market High: $___
- **Your Recommended Market Price: $___**
- Positioning: (Budget / Mid-Market / Premium)

---

## Method 3: Value-Based Pricing
*What is the outcome worth to the client?*

| Client Outcome | Estimated Value | Your Share (10-30%) | Your Price |
|---------------|----------------|---------------------|------------|
| Time Saved (hrs × rate) | $ | % = $ | $ |
| Revenue Generated/Increased | $ | % = $ | $ |
| Cost Reduced | $ | % = $ | $ |
| Risk Mitigated | $ | % = $ | $ |
| **Total Value Delivered** | **$** | | **$** |

### Value Proposition Statement
"I help [target client] achieve [outcome worth $X] by [your unique method], so they can [ultimate benefit]."

---

## 🎯 Final Pricing Recommendation
| Method | Suggested Price |
|--------|----------------|
| Cost-Plus Minimum | $ |
| Market Rate | $ |
| Value-Based | $ |

### My Recommended Price: $___
**Rationale:** [Why this price? How does it compare across all 3 methods?]

### Pricing Tiers (Optional)
| Tier | Price | Includes |
|------|-------|----------|
| Basic | $ | |
| Standard | $ | |
| Premium | $ | |`,
  },
  {
    name: "AI Workflow Quick Start Guide",
    description: "Template for documenting and sharing your AI-powered workflows with team or clients.",
    category: "Automation",
    icon: "⚡",
    content: `# AI Workflow Quick Start Guide

## 📋 Workflow Overview
- **Workflow Name:**
- **Objective:** [One sentence describing what this workflow accomplishes]
- **Created By:**
- **Last Updated:**
- **Difficulty Level:** (Beginner / Intermediate / Advanced)

---

## 🛠️ Tools Used
| Tool | Purpose | Cost/Month | Link |
|------|---------|------------|------|
| | | $ | |
| | | $ | |
| | | $ | |
| **Total Monthly Cost** | | **$** | |

---

## 📝 Step-by-Step Instructions

### Step 1: [Action Name]
- **What to do:**
- **AI Prompt (if applicable):**
  \`\`\`
  [Paste your prompt here]
  \`\`\`
- **Expected Output:**
- **Time:** ~[X] minutes

### Step 2: [Action Name]
- **What to do:**
- **AI Prompt (if applicable):**
  \`\`\`
  [Paste your prompt here]
  \`\`\`
- **Expected Output:**
- **Time:** ~[X] minutes

### Step 3: [Action Name]
- **What to do:**
- **AI Prompt (if applicable):**
  \`\`\`
  [Paste your prompt here]
  \`\`\`
- **Expected Output:**
- **Time:** ~[X] minutes

### Step 4: [Action Name]
- **What to do:**
- **AI Prompt (if applicable):**
  \`\`\`
  [Paste your prompt here]
  \`\`\`
- **Expected Output:**
- **Time:** ~[X] minutes

---

## ✅ Quality Control Checkpoints
- [ ] After Step 1: [What to verify]
- [ ] After Step 2: [What to verify]
- [ ] After Step 3: [What to verify]
- [ ] Final Review: [What to verify before delivering/using output]

---

## ⏱️ Time Comparison
| Metric | Without AI | With AI | Savings |
|--------|-----------|---------|---------|
| Time per task | | | |
| Tasks per week | | | |
| Hours saved/week | | | |
| Monthly hours saved | | | |

---

## 💡 Tips & Variations
- **Pro Tip 1:**
- **Pro Tip 2:**
- **Variation A:** [How to adapt for different use case]
- **Variation B:** [How to adapt for different use case]
- **Common Mistakes to Avoid:**
  1.
  2.`,
  },
  {
    name: "Networking & Relationship CRM",
    description: "Track your professional relationships, follow-ups, and opportunities.",
    category: "Business",
    icon: "👥",
    content: `# Networking & Relationship CRM

---

## 📇 Contact Database
| Name | Platform | How We Met | Last Contact | Follow-Up Date | Notes | Opportunity Type |
|------|----------|-----------|-------------|---------------|-------|----------------|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

*Opportunity Types: Collaboration, Client, Referral, Mentorship, Joint Venture, Other*

---

## 📅 Follow-Up Schedule
| Timeline | Action | Template |
|----------|--------|----------|
| **1 Day** | Send a thank-you message | "Great meeting you! I enjoyed our conversation about [topic]. Let's stay in touch." |
| **1 Week** | Share something valuable | "Saw this and thought of you: [resource/link]. Hope it helps with [their challenge]." |
| **1 Month** | Check in + offer value | "How's [project] going? I recently [accomplished something] and thought you might find it useful." |
| **3 Months** | Re-engage if needed | "It's been a while! I've been working on [new thing] and would love your perspective." |

---

## ✉️ Value-First Outreach Template

Subject: [Something specific about them] + [value you can add]

Hi [Name],

I came across your work on [platform/project] and was really impressed by [specific thing].

I recently [created/found/learned] something related to [their area of interest]:
- [Resource/insight 1]
- [Resource/insight 2]

Thought you might find it useful. No reply needed — just wanted to share!

Best,
[Your Name]

---

## 📝 Meeting Notes Template
- **Date:**
- **Person:**
- **Context:** (How/where we connected)
- **Key Topics Discussed:**
  1.
  2.
- **Their Current Challenges:**
- **How I Can Help:**
- **How They Can Help Me:**
- **Action Items:**
  - [ ] Me:
  - [ ] Them:
- **Next Follow-Up:** [Date]

---

## 🔄 Relationship Stages
| Stage | Description | Action to Advance |
|--------|-------------|-------------------|
| 👤 Stranger | No interaction yet | Make initial contact |
| 👋 Acquaintance | Exchanged info once | Follow up within a week |
| 💬 Connection | Had a real conversation | Find ways to add value |
| 🤝 Ally | Reciprocal value exchange | Collaborate on something small |
| ⭐ Advocate | They refer/promote you | Deepen the relationship, reciprocate |

---

## 📊 Monthly Relationship Review
- **New connections this month:** ___
- **Follow-ups completed:** ___
- **Meetings/calls:** ___
- **Referrals given:** ___
- **Referrals received:** ___
- **Strongest new relationship:** ___
- **Relationships to nurture next month:**
  1.
  2.
  3.`,
  },
  {
    name: "Emergency Fund & Safety Net Planner",
    description: "Plan your financial safety net with emergency fund, insurance, and backup income.",
    category: "Finance",
    icon: "🛡️",
    content: `# Emergency Fund & Safety Net Planner

---

## 💰 Emergency Fund Calculator

### Monthly Essential Expenses
| Expense | Amount |
|---------|--------|
| Rent/Mortgage | $ |
| Utilities | $ |
| Food/Groceries | $ |
| Transportation | $ |
| Insurance | $ |
| Minimum Debt Payments | $ |
| Phone/Internet | $ |
| Other Essentials | $ |
| **Total Monthly Expenses** | **$** |

### Fund Target
| Metric | Amount |
|--------|--------|
| Monthly Expenses × 6 months = Target | $ |
| Current Emergency Savings | $ |
| **Gap to Fill** | **$** |
| Monthly Contribution | $ |
| **Months to Reach Goal** | **$gap ÷ $contribution = ___** |
| Account Type: | (HYSA / Money Market / Both) |
| Current APY: | % |

---

## 🏥 Insurance Audit
| Insurance Type | Provider | Monthly Cost | Coverage Amount | Deductible | Expiry/Renewal | Adequate? |
|--------------|----------|-------------|----------------|------------|----------------|-----------|
| Health | | $ | $ | $ | | ✅/❌ |
| Liability (Business) | | $ | $ | $ | | ✅/❌ |
| Disability | | $ | $ | $ | | ✅/❌ |
| Life | | $ | $ | $ | | ✅/❌ |
| Business/Professional | | $ | $ | $ | | ✅/❌ |
| **Total Monthly Premiums** | | **$** | | | | |

---

## 💸 Backup Income Streams
*If your main income disappeared tomorrow, what could you fall back on?*

| Stream | Monthly Potential | Setup Time | Current Status | Next Action |
|--------|-----------------|-------------|---------------|-------------|
| Freelance (current skills) | $ | — | Active | |
| Consulting/Coaching | $ | weeks | Not started | |
| Digital Products | $ | weeks | Not started | |
| Affiliate Income | $ | days | Not started | |
| Part-time/Temp Work | $ | days | Available | |
| Gig Economy | $ | days | Available | |
| **Total Backup Potential** | **$** | | | |

---

## 📞 Emergency Contacts & Accounts
| Category | Details |
|----------|----------|
| Emergency Fund Bank | Bank: ___, Account: ___, Routing: ___ |
| Secondary Bank Account | Bank: ___, Account: ___, Routing: ___ |
| Credit Card (Backup) | Issuer: ___, Limit: $___ |
| Line of Credit | Provider: ___, Limit: $___ |
| Insurance Agent | Name: ___, Phone: ___ |
| Accountant/CPA | Name: ___, Phone: ___ |
| Attorney | Name: ___, Phone: ___ |
| Financial Advisor | Name: ___, Phone: ___ |

---

## 🧪 Financial Stress Test
*Can you survive these scenarios?*

| Scenario | Survive? | For How Long? | What Would You Do? |
|----------|----------|--------------|-------------------|
| 50% income cut | ✅/❌ | ___ months | |
| 100% income loss | ✅/❌ | ___ months | |
| $5K unexpected medical bill | ✅/❌ | | |
| Major client leaves | ✅/❌ | | |
| Economy recession (6 months) | ✅/❌ | ___ months | |`,
  },
  {
    name: "Product Launch Checklist & Timeline",
    description: "Complete launch plan for any digital product with week-by-week timeline.",
    category: "Business",
    icon: "🚀",
    content: `# Product Launch Checklist & Timeline

## 📋 Product Details
- **Product Name:**
- **Type:** (Course / Ebook / Software / Template / Service / Community)
- **Price:** $
- **Launch Date:**
- **Target Revenue:** $

---

## Week 1: Finalize & Set Up
| Day | Task | Status | Notes |
|-----|------|--------|-------|
| Mon | Finalize product content/files | ⬜ | |
| Tue | Set up payment processor (Stripe/PayPal/Gumroad) | ⬜ | |
| Wed | Create product landing page | ⬜ | |
| Thu | Set up email list/tagging for launch | ⬜ | |
| Fri | Write product description & copy | ⬜ | |
| Sat | Create product mockups/visuals | ⬜ | |
| Sun | Review everything, fix issues | ⬜ | |

## Week 2: Marketing Assets
| Day | Task | Status | Notes |
|-----|------|--------|-------|
| Mon | Write launch email sequence (5 emails) | ⬜ | |
| Tue | Create social media graphics (5-10 pieces) | ⬜ | |
| Wed | Record promo video/trailer | ⬜ | |
| Thu | Write blog post announcing the product | ⬜ | |
| Fri | Create affiliate/partner promo materials | ⬜ | |
| Sat | Gather testimonials & case studies | ⬜ | |
| Sun | Review & polish all marketing assets | ⬜ | |

## Week 3: Beta Testing
| Day | Task | Status | Notes |
|-----|------|--------|-------|
| Mon | Send to 5-10 beta testers | ⬜ | |
| Tue | Collect feedback form responses | ⬜ | |
| Wed | Fix critical bugs/issues | ⬜ | |
| Thu | Gather testimonials from testers | ⬜ | |
| Fri | Update product based on feedback | ⬜ | |
| Sat | Final QA pass | ⬜ | |
| Sun | Prepare all final files & access | ⬜ | |

## Week 4: Pre-Launch (Build Anticipation)
| Day | Task | Status | Notes |
|-----|------|--------|-------|
| Mon | Open waitlist / early access registration | ⬜ | |
| Tue | Send Email 1: Teaser + what's coming | ⬜ | |
| Wed | Share behind-the-scenes content on social | ⬜ | |
| Thu | Send Email 2: Problem this product solves | ⬜ | |
| Fri | Go live with landing page (collecting emails) | ⬜ | |
| Sat | Social proof: share testimonials/preview | ⬜ | |
| Sun | Send Email 3: Sneak peek + early bird offer | ⬜ | |

## Week 5: 🎉 LAUNCH WEEK
| Day | Task | Status | Notes |
|-----|------|--------|-------|
| Mon | **LAUNCH DAY** — Send Email 4: It's live! | ⬜ | |
| | Post on all social platforms | ⬜ | |
| | Message affiliates & partners | ⬜ | |
| Tue | Share social proof (screenshots, testimonials) | ⬜ | |
| Wed | Send Email 5: Q&A + address objections | ⬜ | |
| | Live Q&A or AMA if applicable | ⬜ | |
| Thu | Share bonus/stack offer | ⬜ | |
| Fri | Last chance reminder + urgency | ⬜ | |
| Sat | Close cart (if limited) or transition to evergreen | ⬜ | |
| Sun | Rest + review initial results | ⬜ | |

## Week 6: Post-Launch
| Day | Task | Status | Notes |
|-----|------|--------|-------|
| Mon | Calculate total launch revenue | ⬜ | |
| Tue | Send post-launch survey to buyers | ⬜ | |
| Wed | Analyze: conversion rate, traffic sources, best channel | ⬜ | |
| Thu | Collect & organize testimonials | ⬜ | |
| Fri | Plan v2 improvements based on feedback | ⬜ | |
| Sat | Set up evergreen sales funnel | ⬜ | |
| Sun | Celebrate & document learnings! | ⬜ | |

---

## 📊 Launch Metrics
| Metric | Target | Actual |
|--------|--------|--------|
| Email list size at launch | | |
| Landing page visits | | |
| Conversion rate | | |
| Total revenue | | |
| Units sold | | |
| Refunds | | |
| Net revenue | | |`,
  },
  {
    name: "Annual Financial Planning Review",
    description: "Comprehensive year-end financial review and next-year planning template.",
    category: "Finance",
    icon: "📊",
    content: `# Annual Financial Planning Review — [Year]

---

## 💵 Income Summary

### Income by Source
| Source | Q1 | Q2 | Q3 | Q4 | Total | % of Total |
|--------|----|----|----|----|-------|-----------|
| Freelance/Client Work | $ | $ | $ | $ | $ | % |
| Product Sales | $ | $ | $ | $ | $ | % |
| Affiliate/Passive | $ | $ | $ | $ | $ | % |
| Investments | $ | $ | $ | $ | $ | % |
| Other | $ | $ | $ | $ | $ | % |
| **Total Income** | **$** | **$** | **$** | **$** | **$** | **100%** |

### Income Trend
- Highest income month: ___ ($___)
- Lowest income month: ___ ($___)
- Average monthly income: $___
- Year-over-year growth: ___%

---

## 💳 Expense Review

### Expenses by Category
| Category | Budget | Actual | Over/Under | % of Income |
|----------|--------|--------|------------|-------------|
| Housing | $ | $ | $ | % |
| Food & Dining | $ | $ | $ | % |
| Transportation | $ | $ | $ | % |
| Software & Tools | $ | $ | $ | % |
| Marketing | $ | $ | $ | % |
| Insurance | $ | $ | $ | % |
| Education | $ | $ | $ | % |
| Entertainment | $ | $ | $ | % |
| Health & Fitness | $ | $ | $ | % |
| Taxes | $ | $ | $ | % |
| Miscellaneous | $ | $ | $ | % |
| **Total Expenses** | **$** | **$** | **$** | **%** |

---

## 📈 Net Worth Progress
| Metric | Start of Year | End of Year | Change |
|--------|-------------|------------|--------|
| Cash & Savings | $ | $ | $ |
| Investments | $ | $ | $ |
| Business Assets | $ | $ | $ |
| Real Estate | $ | $ | $ |
| **Total Assets** | **$** | **$** | **$** |
| All Debts | $ | $ | $ |
| **Net Worth** | **$** | **$** | **$** |

**Year-over-Year Net Worth Growth: ___%**

---

## 📊 Investment Portfolio Review
| Asset Class | Target % | Actual % | Returns | Rebalance? |
|-----------|----------|----------|---------|------------|
| US Stocks | % | % | % | ✅/❌ |
| International Stocks | % | % | % | ✅/❌ |
| Bonds | % | % | % | ✅/❌ |
| Real Estate (REITs) | % | % | % | ✅/❌ |
| Crypto / Alternatives | % | % | % | ✅/❌ |
| Cash | % | % | % | ✅/❌ |

**Total Portfolio Return: ___%**

---

## 🧾 Tax Planning Checklist
- [ ] Maximize retirement contributions (401k/IRA/Solo 401k)
- [ ] Harvest tax losses before Dec 31
- [ ] Make charitable donations
- [ ] Pay estimated taxes (Q4)
- [ ] Organize business expense receipts
- [ ] Schedule meeting with CPA
- [ ] Review deductions: home office, vehicle, equipment
- [ ] Contribute to HSA if eligible

---

## 💼 Retirement Contributions
| Account | Contribution Limit | How Much Contributed | Maxed Out? |
|----------|-------------------|----------------------|-----------|
| 401(k) / Solo 401(k) | $ | $ | ✅/❌ |
| IRA (Traditional/Roth) | $ | $ | ✅/❌ |
| HSA | $ | $ | ✅/❌ |
| SEP-IRA | $ | $ | ✅/❌ |
| **Total Tax-Advantaged** | **$** | **$** | |

---

## 🎯 Goals Progress Review
| Goal | Target | Actual | Status |
|------|--------|--------|--------|
| | $ | $ | ✅/🔄/❌ |
| | $ | $ | ✅/🔄/❌ |
| | $ | $ | ✅/🔄/❌ |
| | % | % | ✅/🔄/❌ |

---

## 📅 Next Year's Financial Goals
| # | Goal | Specific Number | Monthly Target | Key Action |
|---|------|----------------|---------------|-------------|
| 1 | | $ | $ | |
| 2 | | $ | $ | |
| 3 | | $ | $ | |
| 4 | | % | | |
| 5 | | $ | $ | |

---

## 📋 Next Year's Monthly Budget
| Category | Monthly Target | Annual Total |
|----------|---------------|-------------|
| Housing | $ | $ |
| Food & Dining | $ | $ |
| Transportation | $ | $ |
| Software & Tools | $ | $ |
| Marketing | $ | $ |
| Insurance | $ | $ |
| Savings/Investments | $ | $ |
| Education | $ | $ |
| Entertainment | $ | $ |
| Health & Fitness | $ | $ |
| Miscellaneous | $ | $ |
| **Total** | **$** | **$** |`,
  },
];

export default function TemplatesPage() {
  const [activeTemplate, setActiveTemplate] = useState<Template | null>(null);
  const [copied, setCopied] = useState(false);
  const categories = [...new Set(templates.map((t) => t.category))];

  const copyTemplate = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Templates</h1>
      <p className="text-lg text-gray-600 mb-8">Ready-to-use templates for freelancing, business, content, and finance. Copy, customize, execute.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.name} className="bg-white rounded-xl border p-6 card-hover cursor-pointer" onClick={() => setActiveTemplate(template)}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">{template.icon}</span>
              <div>
                <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">{template.category}</span>
                <h3 className="font-semibold text-lg mt-2">{template.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{template.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeTemplate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setActiveTemplate(null)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-xl font-bold">{activeTemplate.icon} {activeTemplate.name}</h2>
                <p className="text-sm text-gray-600">{activeTemplate.description}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => copyTemplate(activeTemplate.content)} className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700">
                  {copied ? "✓ Copied!" : "📋 Copy Template"}
                </button>
                <button onClick={() => setActiveTemplate(null)} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono bg-gray-50 p-4 rounded-lg">{activeTemplate.content}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}