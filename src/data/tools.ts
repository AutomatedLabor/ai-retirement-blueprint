export interface Tool {
  slug: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export const tools: Tool[] = [
  { slug: "freedom-calculator", name: "Freedom Number Calculator", description: "Calculate exactly how much money you need to retire based on your lifestyle, expenses, and timeline.", icon: "🎯", category: "Planning" },
  { slug: "income-tracker", name: "AI Income Stream Tracker", description: "Track and visualize all your income streams. See which ones are growing and which need attention.", icon: "📊", category: "Tracking" },
  { slug: "expense-optimizer", name: "Expense Optimizer", description: "Analyze your spending patterns and find opportunities to save. Every dollar saved = $25 less needed for FI.", icon: "💰", category: "Planning" },
  { slug: "savings-rate", name: "Savings Rate Calculator", description: "Your savings rate is the #1 predictor of financial independence. Calculate yours and see your timeline.", icon: "📈", category: "Planning" },
  { slug: "prompt-library", name: "AI Prompt Library", description: "Curated collection of high-performance prompts for freelancing, content creation, coding, and business.", icon: "🧠", category: "Productivity" },
  { slug: "side-hustle-scorer", name: "Side Hustle Scorer", description: "Evaluate and score potential side hustles based on time investment, scalability, and AI leverage.", icon: "⭐", category: "Planning" },
  { slug: "tax-estimator", name: "Self-Employment Tax Estimator", description: "Estimate your self-employment taxes and find deductions. Don't overpay.", icon: "🧾", category: "Finance" },
  { slug: "roi-calculator", name: "AI Tool ROI Calculator", description: "Calculate the return on investment for any AI tool subscription. Is it worth it?", icon: "🔧", category: "Business" },
  { slug: "compound-interest", name: "Compound Interest Visualizer", description: "See the magic of compound interest over time. Visualize how your money grows.", icon: "🌱", category: "Investing" },
  { slug: "freelance-rate", name: "Freelance Rate Calculator", description: "Calculate your ideal freelance hourly rate based on desired income, expenses, and billable hours.", icon: "💲", category: "Business" },
  { slug: "retirement-timeline", name: "Retirement Timeline Visualizer", description: "See your path to retirement plotted on a timeline. Adjust variables and see the impact.", icon: "📅", category: "Planning" },
  { slug: "income-idea-generator", name: "AI Income Idea Generator", description: "Get personalized income stream ideas based on your skills, interests, and available time.", icon: "💡", category: "Planning" },
  { slug: "skills-assessment", name: "AI Skills Assessment Quiz", description: "Assess your current AI tool proficiency across Content, Coding, Automation, Strategy, and Design. Get personalized recommendations.", icon: "🧪", category: "Assessment" },
  { slug: "swot-analyzer", name: "AI Freelance SWOT Analyzer", description: "Generate a visual SWOT matrix specific to your AI freelancing profile based on your skills, experience, and goals.", icon: "🔍", category: "Strategy" },
  { slug: "financial-health", name: "Financial Health Score", description: "Get a comprehensive 0-100 financial health score with breakdown across savings, debt, emergency fund, investments, and diversification.", icon: "❤️", category: "Finance" },
  { slug: "goal-planner", name: "90-Day Goal Planner", description: "Set 3 goals with milestones and generate a printable 90-day plan with weekly milestones, habit tracker, and accountability checklist.", icon: "🗓️", category: "Planning" },
];
