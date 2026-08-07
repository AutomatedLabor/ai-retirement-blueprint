export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: "🚀",
    color: "primary",
    items: [
      {
        question: "I have no tech skills. Can I still do this?",
        answer: "Absolutely. Modern AI tools like ChatGPT, Claude, and Canva are designed for non-technical users — you interact with them using plain English, not code. The entire premise of AI-powered freelancing is that AI handles the technical heavy lifting while you provide the strategy, creativity, and domain expertise. Many of the most successful AI freelancers come from non-technical backgrounds like marketing, education, writing, and business operations. Start with a skill you already have and use AI to amplify it, not replace it.",
      },
      {
        question: "How much money do I need to start?",
        answer: "You can start with literally $0. ChatGPT's free tier, Claude's free tier, Canva's free plan, and platforms like Upwork and Fiverr are all free to join. The fastest path to income is freelancing — you sell your AI-augmented services and the client pays you. As you earn, reinvest 10-20% into paid tools (ChatGPT Plus at $20/mo, a domain for $12/yr, Canva Pro at $13/mo). A reasonable upgrade budget after your first month is $50-100/month, which should be covered by early client work.",
      },
      {
        question: "How long before I see income?",
        answer: "If you follow the freelancing path and dedicate 15-20 hours per week, most people land their first paying client within 2-4 weeks. Your first $1,000 month typically comes around week 6-8. Reaching $5,000/month is realistic within 90 days if you're consistent, but it depends on your niche, the quality of your outreach, and how quickly you learn to deliver results. The content creation path takes longer — expect 3-6 months before meaningful income — but compounds more over time. Digital products can generate income within weeks if you have an existing audience, or months if starting from scratch.",
      },
      {
        question: "What if I have a full-time job?",
        answer: "Start part-time with 10-15 focused hours per week. The best approach is to treat your AI side project like a second job with a fixed schedule — for example, 6:30-8:30am on weekdays and 3 hours on Saturday. Use AI specifically to maximize your output during limited hours; a good AI workflow lets you produce 2-3 hours of deliverable work per hour invested. Many people in our community build their AI income to match or exceed their day job salary within 6-12 months, at which point they can choose to transition full-time.",
      },
      {
        question: "Is this realistic or just hype?",
        answer: "The honest answer: the opportunity is real, but the 'make $10k in your first month' claims you see online are mostly hype. AI tools genuinely let you deliver work 3-10x faster than traditional methods, which means you can earn more per hour or take on more clients. However, you still need to put in the work of learning your craft, finding clients, and building a reputation. The realistic expectation is $1,000-3,000/month in months 1-3 (part-time), scaling to $5,000-10,000/month by month 6-12 as you improve and systematize. The people who fail are the ones who jump between strategies every week or spend more time consuming content than creating it.",
      },
    ],
  },
  {
    id: "ai-tools",
    title: "AI Tools",
    icon: "🧠",
    color: "accent",
    items: [
      {
        question: "Which AI tool should I learn first?",
        answer: "Start with ChatGPT — it has the largest user base, the most tutorials and resources available, and it's excellent for a wide range of tasks (writing, analysis, brainstorming, coding assistance). Once you're comfortable with ChatGPT's capabilities and limitations, add Claude by Anthropic as your second tool — it's superior for long-form writing, nuanced analysis, and following complex instructions. Only add specialized tools (Midjourney for images, Descript for video, etc.) once you have a specific need for them. Depth with 2-3 tools beats surface-level familiarity with 20.",
      },
      {
        question: "Do I need to pay for AI tools?",
        answer: "Free tiers are sufficient to get started and land your first few clients. ChatGPT's free tier gives you GPT-3.5 which is capable enough for most writing and analysis tasks. Claude's free tier handles long-form work well. The paid upgrade that makes the biggest difference is ChatGPT Plus ($20/mo) for GPT-4 access, which produces noticeably better output for complex tasks. Think of tool subscriptions as business expenses — once you're earning even $500/month, the $20 for ChatGPT Plus pays for itself many times over in saved time and improved output quality.",
      },
      {
        question: "What's the minimum viable AI tool stack?",
        answer: "ChatGPT (free or Plus) plus one specialized tool for your niche. If you're doing writing: ChatGPT + Grammarly (free). If you're doing design: ChatGPT + Canva (free). If you're doing chatbots: ChatGPT + a free no-code chatbot builder. Add tools only when you hit a wall that your current stack can't solve. Many beginners make the mistake of subscribing to 10+ tools before they've mastered any of them.",
      },
      {
        question: "Will AI replace the skills I'm learning?",
        answer: "AI augments skilled professionals but struggles to replace the judgment, creativity, and client relationship management that humans provide. What AI will replace is people who refuse to use it. The skills that become more valuable, not less, are: domain expertise, strategic thinking, client communication, quality control, and the ability to combine AI output with human insight. Think of AI as a powerful intern who needs direction — your value is being the person who knows what to ask, how to evaluate the output, and how to deliver a polished final product.",
      },
    ],
  },
  {
    id: "income-money",
    title: "Income & Money",
    icon: "💰",
    color: "gold",
    items: [
      {
        question: "How much can I realistically earn?",
        answer: "Income varies by path and effort. AI freelancing: $2,000-5,000/month within 90 days (part-time), scaling to $8,000-15,000/month at 6-12 months. Content creation: $500-2,000/month in months 3-6, growing to $3,000-10,000/month by month 12 as your audience compounds. Digital products: $0 for months, then potentially $1,000-5,000/month once you find product-market fit. A realistic combined target for someone working 20-30 hours/week is $3,000-5,000/month by month 3, and $7,000-12,000/month by month 9-12 as you stack income streams and raise rates.",
      },
      {
        question: "What about taxes?",
        answer: "As a freelancer or self-employed individual, you'll pay self-employment tax (15.3%) on your net earnings plus income tax at your bracket rate. Set aside 25-30% of every payment you receive for taxes. You'll make quarterly estimated tax payments (April 15, June 15, September 15, January 15). The good news: you can deduct business expenses (home office, internet, software, equipment, travel) to reduce your taxable income. Many new freelancers get caught off-guard by their first tax bill — opening a separate savings account and automating 25-30% of every payment into it prevents this entirely.",
      },
      {
        question: "Do I need a business entity?",
        answer: "Not at the start. Begin as a sole proprietor — it's free, automatic, and appropriate for most freelancers earning under $50,000-75,000/year. Form an LLC when you reach consistent income and want liability protection, or when a client requires it. LLC costs range from $50-500 depending on your state plus annual fees. An LLC also provides tax flexibility (you can choose to be taxed as an S-Corp at higher income levels, saving on self-employment taxes). For most people starting out, the priority is earning income, not entity structure — you can always form an LLC later and it takes less than a day.",
      },
      {
        question: "How do I handle international clients?",
        answer: "Use payment platforms that handle currency conversion automatically: Wise (formerly TransferWise) has the best exchange rates, PayPal works globally but has higher fees, and Stripe can accept international cards. For contracts with international clients, specify the currency (USD is standard), payment terms, and dispute resolution in your contract. Be aware that some countries require tax withholding (W-8BEN form for non-US clients paying US freelancers). Most international clients pay via wire transfer or platform — you rarely need to set up foreign bank accounts.",
      },
      {
        question: "What if I live outside the US?",
        answer: "The strategies in this blueprint work globally, with adjustments for your local market and regulations. AI tools are accessible worldwide. Freelancing platforms like Upwork and Fiverr are global. The key differences are: payment methods may vary (PayPal, Wise, or local platforms), tax structures differ by country, and your pricing should reflect your local cost of living plus the global market rate. Many non-US freelancers actually have an advantage — your living costs may be lower while your earnings come in USD or EUR, giving you strong purchasing power. Research your country's specific tax obligations for freelancers and digital services.",
      },
    ],
  },
  {
    id: "strategy",
    title: "Strategy",
    icon: "♟️",
    color: "primary",
    items: [
      {
        question: "Should I focus on one income stream or many?",
        answer: "Start with one income stream until it generates $2,000-3,000/month consistently. The biggest beginner mistake is spreading yourself across freelancing, content creation, digital products, and affiliate marketing all at once. Pick the path that best matches your skills and timeline: freelancing for fastest income, content for long-term brand building, products for passive income potential. Once your primary stream is stable, layer on a second stream that complements it (e.g., freelancing + content about your freelance niche). The goal is to have 3-5 income streams within 12 months, but built sequentially, not simultaneously.",
      },
      {
        question: "How do I find clients?",
        answer: "Three-pronged approach: (1) Platforms — optimize your Upwork, Fiverr, and LinkedIn profiles and respond to relevant job postings daily. (2) Outbound — identify 20 dream clients and send personalized cold emails or LinkedIn messages offering specific value. (3) Inbound — publish content about your expertise so clients find you. For the first 30 days, focus 80% on platforms and outbound (they produce fastest results), then shift toward inbound as your audience grows. The key to all three: lead with value and specificity. Instead of 'I can help with AI,' say 'I built a chatbot for a real estate agency that reduced lead response time from 4 hours to 30 seconds.'",
      },
      {
        question: "What's the biggest mistake beginners make?",
        answer: "Two mistakes account for 90% of failures: (1) Not starting — consuming tutorials, courses, and content without ever doing the actual work. You learn freelancing by freelancing, not by watching videos about it. (2) Over-planning and under-executing — spending weeks on branding, website design, and business cards before sending a single proposal. Your first client doesn't care about your logo. Send 10 proposals today, refine based on responses, and iterate. The person who sends 100 imperfect proposals will always outperform the person who spends 3 months perfecting their profile and sends 5.",
      },
      {
        question: "How do I price my services?",
        answer: "Start by researching what others in your niche charge on Upwork and Fiverr. Price slightly below market rate for your first 3-5 projects to build reviews and portfolio pieces. After 5+ five-star reviews, raise rates by 30-50%. The goal is to shift from hourly to project-based to value-based pricing as quickly as possible. Hourly pricing penalizes you for getting faster (which AI enables). Project pricing rewards efficiency. Value-based pricing, where you charge based on the result you deliver, is where the real money is — if your work generates $50,000 in revenue for a client, charging $5,000 is a no-brainer for them, regardless of how many hours it took you.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical",
    icon: "⚙️",
    color: "accent",
    items: [
      {
        question: "Do I need to know how to code?",
        answer: "No. The entire AI freelancing ecosystem is built around no-code and low-code tools. You can build chatbots with platforms like Botpress or Voiceflow without writing code. You can create websites with Carrd, Webflow, or WordPress. You can automate workflows with Zapier or Make.com. That said, learning basic coding (Python, in particular) opens additional high-value opportunities like custom AI integrations, data automation, and API-based tools. Treat it as an optional upgrade, not a prerequisite. Start without code and add technical skills later if they unlock higher-paying work in your niche.",
      },
      {
        question: "What about AI hallucinations?",
        answer: "AI models sometimes generate confident-sounding but factually incorrect information, called 'hallucinations.' This is a real issue you must manage through quality control. Always verify factual claims, statistics, and citations that AI produces before including them in client deliverables. Use AI as a first draft engine, not a final answer machine. Build verification into your workflow: generate with AI, review for accuracy, and edit for quality. For critical content (legal, financial, medical), always have a human expert review. The combination of AI speed plus human quality control is what makes AI-augmented work valuable.",
      },
      {
        question: "How do I keep my data safe?",
        answer: "Follow these practices: (1) Never paste sensitive client data (passwords, financial records, personal info) into public AI tools. (2) Use enterprise or API versions of AI tools for confidential work when available — they don't train on your data. (3) Enable two-factor authentication on all accounts. (4) Use a password manager (Bitwarden is free). (5) Keep software updated. (6) Use a VPN on public Wi-Fi. (7) Encrypt sensitive files before sharing. (8) Have regular backups (cloud + local). For most freelancers, the risk is low if you follow these basics. The biggest actual threat isn't hackers — it's losing access to your accounts or having a laptop die without backups.",
      },
    ],
  },
];
