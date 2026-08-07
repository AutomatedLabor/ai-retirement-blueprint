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
|---------|-------|------------|-------|---------|
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
