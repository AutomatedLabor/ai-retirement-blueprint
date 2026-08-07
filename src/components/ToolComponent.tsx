"use client";
import { useState } from "react";

export function ToolComponent({ slug }: { slug: string }) {
  switch (slug) {
    case "freedom-calculator": return <FreedomCalculator />;
    case "savings-rate": return <SavingsRateCalculator />;
    case "compound-interest": return <CompoundInterestVisualizer />;
    case "freelance-rate": return <FreelanceRateCalculator />;
    case "income-tracker": return <IncomeTracker />;
    case "expense-optimizer": return <ExpenseOptimizer />;
    case "tax-estimator": return <TaxEstimator />;
    case "roi-calculator": return <ROICalculator />;
    case "prompt-library": return <PromptLibrary />;
    case "side-hustle-scorer": return <SideHustleScorer />;
    case "retirement-timeline": return <RetirementTimeline />;
    case "income-idea-generator": return <IncomeIdeaGenerator />;
    case "skills-assessment": return <SkillsAssessmentQuiz />;
    case "swot-analyzer": return <SWOTAnalyzer />;
    case "financial-health": return <FinancialHealthScore />;
    case "goal-planner": return <GoalPlanner90Day />;
    default: return <div className="p-8 text-center text-gray-500">Tool coming soon!</div>;
  }
}

function FreedomCalculator() {
  const [expenses, setExpenses] = useState(50000);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const freedomNumber = Math.round(expenses / (withdrawalRate / 100));
  const monthlyExpenses = Math.round(expenses / 12);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border">
        <label className="block text-sm font-medium mb-2">Annual Expenses ($)</label>
        <input type="range" min="20000" max="200000" step="5000" value={expenses} onChange={(e) => setExpenses(+e.target.value)} className="w-full" />
        <div className="text-center text-2xl font-bold mt-2">${expenses.toLocaleString()}</div>
      </div>
      <div className="bg-gradient-to-br from-accent-50 to-white rounded-xl p-6 border">
        <label className="block text-sm font-medium mb-2">Withdrawal Rate (%)</label>
        <input type="range" min="2" max="6" step="0.5" value={withdrawalRate} onChange={(e) => setWithdrawalRate(+e.target.value)} className="w-full" />
        <div className="text-center text-2xl font-bold mt-2">{withdrawalRate}%</div>
      </div>
      <div className="bg-gradient-to-br from-gold-50 to-white rounded-xl p-8 border text-center">
        <div className="text-sm text-gray-500 mb-2">🎯 Your Freedom Number</div>
        <div className="text-5xl font-bold text-gradient">${freedomNumber.toLocaleString()}</div>
        <div className="text-gray-600 mt-2">That&apos;s ${monthlyExpenses.toLocaleString()}/month in passive income</div>
        <div className="text-sm text-gray-500 mt-4">Based on the {withdrawalRate}% safe withdrawal rate</div>
      </div>
    </div>
  );
}

function SavingsRateCalculator() {
  const [income, setIncome] = useState(6000);
  const [expenses, setExpenses] = useState(3500);
  const savings = income - expenses;
  const savingsRate = income > 0 ? Math.round((savings / income) * 100) : 0;
  const yearsToFI = savingsRate > 0 ? Math.round((25 * expenses * 12) / (savings * 12) * 10) / 10 : Infinity;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Monthly Income ($)</label>
          <input type="number" value={income} onChange={(e) => setIncome(+e.target.value)} className="w-full p-3 border rounded-lg text-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Monthly Expenses ($)</label>
          <input type="number" value={expenses} onChange={(e) => setExpenses(+e.target.value)} className="w-full p-3 border rounded-lg text-lg" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-accent-50 rounded-xl p-6 border text-center">
          <div className="text-sm text-gray-500">Monthly Savings</div>
          <div className="text-3xl font-bold text-accent-700">${savings.toLocaleString()}</div>
        </div>
        <div className="bg-primary-50 rounded-xl p-6 border text-center">
          <div className="text-sm text-gray-500">Savings Rate</div>
          <div className="text-3xl font-bold text-primary-700">{savingsRate}%</div>
        </div>
        <div className="bg-gold-50 rounded-xl p-6 border text-center">
          <div className="text-sm text-gray-500">Years to FI</div>
          <div className="text-3xl font-bold text-gold-700">{yearsToFI === Infinity ? "∞" : yearsToFI}</div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 border text-sm text-gray-600">
        <strong>How it works:</strong> Your savings rate is the single biggest predictor of financial independence. At 50% savings rate, you reach FI in ~17 years (assuming 7% returns). At 70%, it drops to ~8.5 years.
      </div>
    </div>
  );
}

function CompoundInterestVisualizer() {
  const [principal, setPrincipal] = useState(10000);
  const [monthly, setMonthly] = useState(500);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(20);

  const data: { year: number; balance: number }[] = [];
  let balance = principal;
  for (let y = 0; y <= years; y++) {
    data.push({ year: y, balance: Math.round(balance) });
    balance = balance * (1 + rate / 100) + monthly * 12;
  }
  const totalContributed = principal + monthly * 12 * years;
  const totalGrowth = data[data.length - 1].balance - totalContributed;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Starting Amount ($)</label>
          <input type="number" value={principal} onChange={(e) => setPrincipal(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Monthly Contribution ($)</label>
          <input type="number" value={monthly} onChange={(e) => setMonthly(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Annual Return (%)</label>
          <input type="range" min="1" max="15" value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full" />
          <div className="text-center font-bold">{rate}%</div>
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Years</label>
          <input type="range" min="1" max="40" value={years} onChange={(e) => setYears(+e.target.value)} className="w-full" />
          <div className="text-center font-bold">{years} years</div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border text-center">
        <div className="text-5xl font-bold text-gradient">${data[data.length - 1].balance.toLocaleString()}</div>
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <div><div className="text-gray-500">Total Contributed</div><div className="font-bold">${totalContributed.toLocaleString()}</div></div>
          <div><div className="text-gray-500">Total Growth</div><div className="font-bold text-accent-600">${totalGrowth.toLocaleString()}</div></div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex items-end gap-1 h-48 min-w-[600px]">
          {data.filter((_, i) => i % Math.max(1, Math.floor(years / 20)) === 0 || i === years).map((d) => (
            <div key={d.year} className="flex-1 flex flex-col items-center">
              <div className="text-xs text-gray-500 mb-1">${(d.balance / 1000).toFixed(0)}k</div>
              <div className="w-full bg-gradient-to-t from-primary-500 to-primary-300 rounded-t" style={{ height: `${(d.balance / data[data.length - 1].balance) * 160}px` }}></div>
              <div className="text-xs text-gray-400 mt-1">{d.year}y</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FreelanceRateCalculator() {
  const [desiredIncome, setDesiredIncome] = useState(100000);
  const [billableHours, setBillableHours] = useState(30);
  const [weeksOff, setWeeksOff] = useState(4);
  const [expenses, setExpenses] = useState(20);
  const workingWeeks = 52 - weeksOff;
  const totalHours = workingWeeks * billableHours;
  const rateWithExpenses = Math.round((desiredIncome * (1 + expenses / 100)) / totalHours);
  const rateSimple = Math.round(desiredIncome / totalHours);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Desired Annual Income ($)</label>
          <input type="number" value={desiredIncome} onChange={(e) => setDesiredIncome(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Billable Hours/Week</label>
          <input type="range" min="10" max="50" value={billableHours} onChange={(e) => setBillableHours(+e.target.value)} className="w-full" />
          <div className="text-center font-bold">{billableHours} hrs</div>
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Weeks Off/Year</label>
          <input type="range" min="0" max="12" value={weeksOff} onChange={(e) => setWeeksOff(+e.target.value)} className="w-full" />
          <div className="text-center font-bold">{weeksOff} weeks</div>
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Business Expenses (%)</label>
          <input type="range" min="0" max="50" value={expenses} onChange={(e) => setExpenses(+e.target.value)} className="w-full" />
          <div className="text-center font-bold">{expenses}%</div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-primary-50 rounded-xl p-6 border text-center">
          <div className="text-sm text-gray-500">Minimum Hourly Rate</div>
          <div className="text-4xl font-bold text-primary-700">${rateSimple}</div>
          <div className="text-xs text-gray-500 mt-1">Before expenses</div>
        </div>
        <div className="bg-accent-50 rounded-xl p-6 border text-center">
          <div className="text-sm text-gray-500">Recommended Rate</div>
          <div className="text-4xl font-bold text-accent-700">${rateWithExpenses}</div>
          <div className="text-xs text-gray-500 mt-1">With {expenses}% expenses covered</div>
        </div>
      </div>
      <div className="text-sm text-gray-500 bg-gray-50 rounded-xl p-4 border">
        Working {workingWeeks} weeks × {billableHours} hours = {totalHours} billable hours/year
      </div>
    </div>
  );
}

function IncomeTracker() {
  const [streams, setStreams] = useState([
    { name: "Freelancing", amount: 3000, type: "active" },
    { name: "Digital Products", amount: 500, type: "passive" },
    { name: "Affiliate", amount: 200, type: "passive" },
  ]);
  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newType, setNewType] = useState("active");
  const total = streams.reduce((s, x) => s + x.amount, 0);
  const passiveTotal = streams.filter((s) => s.type === "passive").reduce((s, x) => s + x.amount, 0);
  const passivePercent = total > 0 ? Math.round((passiveTotal / total) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div><div className="text-sm text-gray-500">Total Monthly</div><div className="text-2xl font-bold">${total.toLocaleString()}</div></div>
          <div><div className="text-sm text-gray-500">Passive Income</div><div className="text-2xl font-bold text-accent-600">${passiveTotal.toLocaleString()}</div></div>
          <div><div className="text-sm text-gray-500">Passive %</div><div className="text-2xl font-bold text-gold-600">{passivePercent}%</div></div>
        </div>
      </div>
      <div className="space-y-3">
        {streams.map((s, i) => (
          <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4 border">
            <div className={`w-3 h-3 rounded-full ${s.type === "passive" ? "bg-accent-500" : "bg-primary-500"}`}></div>
            <div className="flex-1">
              <div className="font-medium">{s.name}</div>
              <div className="text-xs text-gray-500">{s.type}</div>
            </div>
            <div className="font-bold">${s.amount.toLocaleString()}/mo</div>
            <button onClick={() => setStreams(streams.filter((_, j) => j !== i))} className="text-red-400 hover:text-red-600 text-sm">✕</button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input placeholder="Stream name" value={newName} onChange={(e) => setNewName(e.target.value)} className="flex-1 p-2 border rounded-lg text-sm" />
        <input placeholder="Amount" type="number" value={newAmount} onChange={(e) => setNewAmount(e.target.value)} className="w-24 p-2 border rounded-lg text-sm" />
        <select value={newType} onChange={(e) => setNewType(e.target.value)} className="p-2 border rounded-lg text-sm">
          <option value="active">Active</option>
          <option value="passive">Passive</option>
        </select>
        <button onClick={() => { if (newName && newAmount) { setStreams([...streams, { name: newName, amount: +newAmount, type: newType }]); setNewName(""); setNewAmount(""); } }} className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">Add</button>
      </div>
    </div>
  );
}

function ExpenseOptimizer() {
  const categories = [
    { name: "Housing", icon: "🏠", typical: 30, optimized: 25 },
    { name: "Food", icon: "🍔", typical: 15, optimized: 10 },
    { name: "Transportation", icon: "🚗", typical: 15, optimized: 8 },
    { name: "Entertainment", icon: "🎬", typical: 10, optimized: 5 },
    { name: "Shopping", icon: "🛍️", typical: 10, optimized: 5 },
    { name: "Subscriptions", icon: "📱", typical: 5, optimized: 2 },
    { name: "Health", icon: "💪", typical: 5, optimized: 5 },
    { name: "Other", icon: "📦", typical: 10, optimized: 5 },
  ];
  const [income, setIncome] = useState(5000);
  const typicalTotal = categories.reduce((s, c) => s + c.typical, 0);
  const optimizedTotal = categories.reduce((s, c) => s + c.optimized, 0);
  const monthlySaved = Math.round(income * (typicalTotal - optimizedTotal) / 100);
  const annualSaved = monthlySaved * 12;
  const fiReduction = annualSaved * 25;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border">
        <label className="block text-sm font-medium mb-2">Monthly Income ($)</label>
        <input type="number" value={income} onChange={(e) => setIncome(+e.target.value)} className="w-full p-3 border rounded-lg text-lg" />
      </div>
      <div className="space-y-3">
        {categories.map((cat) => (
          <div key={cat.name} className="bg-white rounded-lg p-4 border flex items-center gap-4">
            <span className="text-2xl">{cat.icon}</span>
            <div className="flex-1">
              <div className="font-medium">{cat.name}</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-400 h-2 rounded-full" style={{ width: `${cat.typical * 3}%` }}></div>
                </div>
                <span className="text-xs text-gray-500 w-12">{cat.typical}%</span>
                <span className="text-xs">→</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-accent-500 h-2 rounded-full" style={{ width: `${cat.optimized * 3}%` }}></div>
                </div>
                <span className="text-xs text-accent-600 w-12 font-medium">{cat.optimized}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-accent-50 rounded-xl p-6 border text-center">
        <div className="text-sm text-gray-500">Potential Monthly Savings</div>
        <div className="text-4xl font-bold text-accent-700">${monthlySaved.toLocaleString()}</div>
        <div className="text-sm text-gray-500 mt-2">That&apos;s ${annualSaved.toLocaleString()}/year → reduces your FI number by ${fiReduction.toLocaleString()}</div>
      </div>
    </div>
  );
}

function TaxEstimator() {
  const [income, setIncome] = useState(80000);
  const seTax = income * 0.9235 * 0.153;
  const standardDeduction = 14600;
  const taxableIncome = Math.max(0, income - standardDeduction);
  const federalTax = taxableIncome <= 11600 ? taxableIncome * 0.1 : taxableIncome <= 47150 ? 1160 + (taxableIncome - 11600) * 0.22 : taxableIncome <= 100525 ? 8981 + (taxableIncome - 47150) * 0.24 : 21791 + (taxableIncome - 100525) * 0.32;
  const totalTax = Math.round(seTax + federalTax);
  const effectiveRate = Math.round((totalTax / income) * 100);
  const qbiDeduction = Math.round(taxableIncome * 0.2);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border">
        <label className="block text-sm font-medium mb-2">Annual Self-Employment Income ($)</label>
        <input type="number" value={income} onChange={(e) => setIncome(+e.target.value)} className="w-full p-3 border rounded-lg text-lg" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-red-50 rounded-xl p-6 border text-center">
          <div className="text-sm text-gray-500">Self-Employment Tax (15.3%)</div>
          <div className="text-2xl font-bold text-red-600">${Math.round(seTax).toLocaleString()}</div>
        </div>
        <div className="bg-orange-50 rounded-xl p-6 border text-center">
          <div className="text-sm text-gray-500">Federal Income Tax</div>
          <div className="text-2xl font-bold text-orange-600">${Math.round(federalTax).toLocaleString()}</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 border text-center">
          <div className="text-sm text-gray-500">Effective Tax Rate</div>
          <div className="text-2xl font-bold">{effectiveRate}%</div>
        </div>
        <div className="bg-accent-50 rounded-xl p-6 border text-center">
          <div className="text-sm text-gray-500">QBI Deduction (20%)</div>
          <div className="text-2xl font-bold text-accent-700">-${qbiDeduction.toLocaleString()}</div>
        </div>
      </div>
      <div className="bg-primary-50 rounded-xl p-6 border text-center">
        <div className="text-sm text-gray-500">Estimated Total Tax</div>
        <div className="text-4xl font-bold text-primary-700">${totalTax.toLocaleString()}</div>
        <div className="text-sm text-gray-500 mt-1">After-tax income: ${(income - totalTax).toLocaleString()}</div>
      </div>
      <div className="text-xs text-gray-500 bg-gray-50 rounded p-3">
        ⚠️ This is a rough estimate. Consult a tax professional. Doesn&apos;t include state taxes, deductions, or credits.
      </div>
    </div>
  );
}

function ROICalculator() {
  const [toolCost, setToolCost] = useState(50);
  const [timeSaved, setTimeSaved] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(100);
  const monthlySaved = timeSaved * hourlyRate;
  const annualROI = ((monthlySaved * 12 - toolCost * 12) / (toolCost * 12)) * 100;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Tool Monthly Cost ($)</label>
          <input type="number" value={toolCost} onChange={(e) => setToolCost(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Hours Saved/Month</label>
          <input type="number" value={timeSaved} onChange={(e) => setTimeSaved(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Your Hourly Rate ($)</label>
          <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-accent-50 rounded-xl p-6 border text-center">
          <div className="text-sm text-gray-500">Monthly Value Generated</div>
          <div className="text-4xl font-bold text-accent-700">${monthlySaved.toLocaleString()}</div>
        </div>
        <div className="bg-primary-50 rounded-xl p-6 border text-center">
          <div className="text-sm text-gray-500">Annual ROI</div>
          <div className="text-4xl font-bold text-primary-700">{Math.round(annualROI)}%</div>
        </div>
      </div>
    </div>
  );
}

function PromptLibrary() {
  const prompts = [
    { category: "Research", prompt: "Research [TOPIC] comprehensively. Include current state, key players, statistics, expert opinions, and future predictions. Format with headers and bullet points." },
    { category: "Writing", prompt: "You are a senior [ROLE] writing for [AUDIENCE]. Write a [LENGTH] [TYPE] about [TOPIC]. Include [SPECIFIC ELEMENTS]. Tone: [TONE]." },
    { category: "Analysis", prompt: "Analyze [SUBJECT] from multiple angles: strengths, weaknesses, opportunities, threats, and comparison with [ALTERNATIVE]. Be specific with data and examples." },
    { category: "Coding", prompt: "Write [LANGUAGE] code that [FUNCTION]. Include error handling, comments, and tests. Follow [STYLE GUIDE] conventions." },
    { category: "Strategy", prompt: "Create a [TIMEFRAME] strategy for [GOAL]. Include: specific milestones, required resources, potential obstacles, success metrics, and contingency plans." },
    { category: "Brainstorm", prompt: "Generate 10 creative ideas for [CHALLENGE]. For each idea, include: the concept, why it could work, required resources, and potential risks." },
  ];
  const [copied, setCopied] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      <p className="text-gray-600">High-performance prompt templates. Copy, customize, and use.</p>
      {prompts.map((p, i) => (
        <div key={i} className="bg-white rounded-xl p-5 border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">{p.category}</span>
            <button onClick={() => { navigator.clipboard.writeText(p.prompt); setCopied(i); setTimeout(() => setCopied(null), 2000); }} className="text-xs text-primary-600 hover:text-primary-800">
              {copied === i ? "✓ Copied!" : "📋 Copy"}
            </button>
          </div>
          <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-gray-50 p-3 rounded">{p.prompt}</pre>
        </div>
      ))}
    </div>
  );
}

function SideHustleScorer() {
  const hustles = [
    { name: "AI Content Writing", time: 10, scalability: 8, aiLeverage: 9, startupCost: 1 },
    { name: "Prompt Template Store", time: 20, scalability: 9, aiLeverage: 10, startupCost: 1 },
    { name: "AI Automation Consulting", time: 30, scalability: 7, aiLeverage: 8, startupCost: 2 },
    { name: "Faceless YouTube Channel", time: 40, scalability: 9, aiLeverage: 7, startupCost: 2 },
    { name: "SaaS Micro-Tool", time: 80, scalability: 10, aiLeverage: 8, startupCost: 3 },
    { name: "AI-Powered Newsletter", time: 15, scalability: 8, aiLeverage: 9, startupCost: 1 },
    { name: "Freelance Development (AI)", time: 20, scalability: 6, aiLeverage: 9, startupCost: 1 },
    { name: "Online Course", time: 60, scalability: 9, aiLeverage: 7, startupCost: 2 },
  ];
  const score = (h: typeof hustles[0]) => Math.round((h.scalability * 3 + h.aiLeverage * 3 + (10 - h.time / 10) * 2 + (5 - h.startupCost) * 2) / 10 * 10) / 10;
  const sorted = [...hustles].sort((a, b) => score(b) - score(a));

  return (
    <div className="space-y-4">
      <p className="text-gray-600">Side hustles scored by scalability, AI leverage, time to start, and startup cost.</p>
      {sorted.map((h, i) => (
        <div key={h.name} className="bg-white rounded-xl p-5 border flex items-center gap-4">
          <div className="text-2xl font-bold text-gray-300 w-8">#{i + 1}</div>
          <div className="flex-1">
            <div className="font-semibold">{h.name}</div>
            <div className="flex gap-3 text-xs text-gray-500 mt-1">
              <span>⏱ {h.time}h setup</span>
              <span>📈 Scale: {h.scalability}/10</span>
              <span>🤖 AI: {h.aiLeverage}/10</span>
              <span>💰 Cost: {h.startupCost}/5</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-primary-600">{score(h)}</div>
        </div>
      ))}
    </div>
  );
}

function RetirementTimeline() {
  const [currentAge, setCurrentAge] = useState(30);
  const [targetAge, setTargetAge] = useState(45);
  const [savings, setSavings] = useState(50000);
  const [monthlySavings, setMonthlySavings] = useState(2000);
  const [annualReturn, setAnnualReturn] = useState(7);
  const years = targetAge - currentAge;
  let balance = savings;
  const data: { year: number; age: number; balance: number }[] = [];
  for (let y = 0; y <= years; y++) {
    data.push({ year: y, age: currentAge + y, balance: Math.round(balance) });
    balance = balance * (1 + annualReturn / 100) + monthlySavings * 12;
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Current Age</label>
          <input type="number" value={currentAge} onChange={(e) => setCurrentAge(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Target Retirement Age</label>
          <input type="number" value={targetAge} onChange={(e) => setTargetAge(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Current Savings ($)</label>
          <input type="number" value={savings} onChange={(e) => setSavings(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Monthly Savings ($)</label>
          <input type="number" value={monthlySavings} onChange={(e) => setMonthlySavings(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
      </div>
      <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border text-center">
        <div className="text-sm text-gray-500">Projected Portfolio at Age {targetAge}</div>
        <div className="text-5xl font-bold text-gradient">${data[data.length - 1].balance.toLocaleString()}</div>
        <div className="text-sm text-gray-500 mt-2">{years} years of growth</div>
      </div>
      <div className="flex items-end gap-1 h-32">
        {data.filter((_, i) => i % Math.max(1, Math.floor(years / 15)) === 0 || i === years).map((d) => (
          <div key={d.year} className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gradient-to-t from-primary-600 to-primary-300 rounded-t" style={{ height: `${(d.balance / data[data.length - 1].balance) * 120}px` }}></div>
            <div className="text-xs text-gray-400 mt-1">{d.age}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IncomeIdeaGenerator() {
  const [skill, setSkill] = useState("");
  const [interest, setInterest] = useState("");
  const [timeAvailable, setTimeAvailable] = useState("10");
  const [ideas, setIdeas] = useState<string[]>([]);

  const allIdeas = [
    "Create an AI-powered blog in your niche — use ChatGPT for research and first drafts, add your expertise, monetize with ads and affiliates",
    "Build and sell Notion/Excel templates related to your skill — AI can help you create professional designs quickly",
    "Start a YouTube tutorial channel — use AI for scripts, thumbnails, and SEO optimization",
    "Offer AI-assisted freelance services on Upwork — deliver 5x faster than competitors",
    "Create an online course teaching your skill + AI tools — platforms like Udemy or your own site",
    "Build a niche newsletter — use AI for curation, add your commentary, monetize with sponsorships",
    "Develop a micro-SaaS tool that solves a problem in your field — use AI coding assistants to build fast",
    "Start an AI automation consulting business — help businesses implement AI workflows",
    "Create and sell prompt libraries for your industry — package your AI expertise",
    "Build a niche community (Discord/Circle) — charge for access, use AI for content and moderation",
    "Launch an affiliate site reviewing AI tools in your niche — AI can help with content production",
    "Offer virtual AI assistant services — manage AI tools for busy professionals",
  ];

  const generate = () => {
    const shuffled = [...allIdeas].sort(() => Math.random() - 0.5);
    setIdeas(shuffled.slice(0, 5));
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Your Top Skill</label>
          <input value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="e.g., writing, coding, design" className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Your Interest</label>
          <input value={interest} onChange={(e) => setInterest(e.target.value)} placeholder="e.g., AI, fitness, finance" className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Hours/Week Available</label>
          <select value={timeAvailable} onChange={(e) => setTimeAvailable(e.target.value)} className="w-full p-3 border rounded-lg">
            <option value="5">5 hours</option>
            <option value="10">10 hours</option>
            <option value="20">20 hours</option>
            <option value="40">40+ hours</option>
          </select>
        </div>
      </div>
      <button onClick={generate} className="w-full py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors">
        💡 Generate Ideas
      </button>
      {ideas.length > 0 && (
        <div className="space-y-3">
          {ideas.map((idea, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border flex gap-3">
              <span className="text-xl">💡</span>
              <p className="text-gray-700">{idea}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── NEW TOOL 1: AI Skills Assessment Quiz ───

function SkillsAssessmentQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(10).fill(0));
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { q: "How comfortable are you using AI for writing blog posts, articles, or marketing copy?", cat: 0 },
    { q: "Can you create social media content using AI image and text generators?", cat: 0 },
    { q: "How well can you use AI coding assistants (Copilot, Cursor) to build features?", cat: 1 },
    { q: "Can you debug and refactor code with AI assistance effectively?", cat: 1 },
    { q: "How experienced are you with workflow automation tools (Zapier, Make, n8n)?", cat: 2 },
    { q: "Can you build AI-powered automations that save 10+ hours per week?", cat: 2 },
    { q: "How well can you craft strategic business plans using AI research and analysis?", cat: 3 },
    { q: "Can you use AI to identify market opportunities and competitive advantages?", cat: 3 },
    { q: "How proficient are you with AI design tools (Midjourney, DALL-E, Canva AI)?", cat: 4 },
    { q: "Can you create complete brand visual identities using AI tools?", cat: 4 },
  ];

  const categories = ["Content", "Coding", "Automation", "Strategy", "Design"];
  const catScores = categories.map((_, i) => {
    const catQuestions = questions.filter(q => q.cat === i);
    const catAnswers = catQuestions.map(q => answers[questions.indexOf(q)]);
    const validAnswers = catAnswers.filter(a => a > 0);
    return validAnswers.length > 0 ? Math.round(validAnswers.reduce((s, v) => s + v, 0) / validAnswers.length) : 0;
  });
  const overallScore = catScores.filter(s => s > 0).length > 0
    ? Math.round(catScores.filter(s => s > 0).reduce((s, v) => s + v, 0) / catScores.filter(s => s > 0).length)
    : 0;

  const recommendations: Record<string, string[]> = {
    Content: [
      "Start by mastering ChatGPT for blog outlines and first drafts",
      "Learn to use Claude for long-form content with nuanced tone",
      "Practice creating social media calendars with AI assistance",
      "Build a portfolio of AI-assisted writing samples",
    ],
    Coding: [
      "Get comfortable with Cursor or GitHub Copilot for daily coding",
      "Practice using AI for test generation and documentation",
      "Learn to architect solutions with AI assistance",
      "Build 3 small projects using AI coding to build confidence",
    ],
    Automation: [
      "Start with Zapier — connect 2 apps with AI triggers",
      "Learn Make.com for more complex multi-step workflows",
      "Automate your own repetitive tasks first to build experience",
      "Study n8n for self-hosted automation options",
    ],
    Strategy: [
      "Use ChatGPT with detailed prompts for business analysis",
      "Practice creating SWOT analyses and market research with AI",
      "Learn to synthesize AI insights into actionable plans",
      "Build case studies showing AI-driven strategic decisions",
    ],
    Design: [
      "Master Midjourney prompts for professional-quality images",
      "Learn DALL-E 3 for precise, controllable image generation",
      "Practice Canva AI for quick, professional layouts",
      "Build a brand identity project from scratch using AI tools",
    ],
  };

  const radarPoints = catScores.map((score, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    const r = (score / 5) * 80;
    return { x: 100 + r * Math.cos(angle), y: 100 + r * Math.sin(angle) };
  });
  const gridLevels = [1, 2, 3, 4, 5];
  const labelPoints = categories.map((_, i) => {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    return { x: 100 + 95 * Math.cos(angle), y: 100 + 95 * Math.sin(angle) };
  });

  const currentQ = questions[step];
  const answeredCount = answers.filter(a => a > 0).length;

  if (showResults) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border text-center">
          <div className="text-sm text-gray-500 mb-2">Your AI Skills Score</div>
          <div className={`text-5xl font-bold ${overallScore >= 4 ? 'text-accent-600' : overallScore >= 3 ? 'text-primary-600' : overallScore >= 2 ? 'text-gold-600' : 'text-red-500'}`}>{overallScore}/5</div>
          <div className="text-sm text-gray-500 mt-1">{overallScore >= 4 ? "Advanced" : overallScore >= 3 ? "Intermediate" : overallScore >= 2 ? "Beginner" : "Getting Started"}</div>
        </div>
        <div className="flex justify-center">
          <svg viewBox="0 0 200 200" className="w-64 h-64">
            {gridLevels.map(level => (
              <polygon key={level} points={categories.map((_, i) => {
                const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                const r = (level / 5) * 80;
                return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
              }).join(' ')} fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
            ))}
            {categories.map((_, i) => {
              const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
              return <line key={i} x1="100" y1="100" x2={100 + 80 * Math.cos(angle)} y2={100 + 80 * Math.sin(angle)} stroke="#e5e7eb" strokeWidth="0.5" />;
            })}
            <polygon points={radarPoints.map(p => `${p.x},${p.y}`).join(' ')} fill="rgba(59,130,246,0.2)" stroke="#3b82f6" strokeWidth="1.5" />
            {radarPoints.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="3" fill="#3b82f6" />)}
            {labelPoints.map((p, i) => (
              <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" className="text-[8px] fill-gray-600 font-medium">{categories[i]}</text>
            ))}
          </svg>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {categories.map((cat, i) => (
            <div key={cat} className="bg-white rounded-lg p-3 border text-center">
              <div className="text-xs text-gray-500">{cat}</div>
              <div className={`text-lg font-bold ${catScores[i] >= 4 ? 'text-accent-600' : catScores[i] >= 3 ? 'text-primary-600' : catScores[i] >= 2 ? 'text-gold-600' : 'text-gray-400'}`}>{catScores[i]}/5</div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Personalized Recommendations</h3>
          {categories.map((cat, i) => {
            if (catScores[i] >= 4) return null;
            const recs = recommendations[cat];
            return (
              <div key={cat} className="bg-white rounded-xl p-5 border">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${catScores[i] === 0 ? 'bg-red-100 text-red-700' : catScores[i] <= 2 ? 'bg-gold-100 text-gold-700' : 'bg-primary-100 text-primary-700'}`}>
                    {cat}: {catScores[i] === 0 ? 'Not Started' : `${catScores[i]}/5`}
                  </span>
                </div>
                <ul className="space-y-2">
                  {recs.slice(0, catScores[i] === 0 ? 4 : Math.max(2, 4 - catScores[i])).map((rec, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-accent-500 mt-0.5">▸</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <button onClick={() => { setStep(0); setAnswers(new Array(10).fill(0)); setShowResults(false); }} className="w-full py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors">
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Question {step + 1} of 10</span>
        <span className="text-sm text-gray-500">{answeredCount}/10 answered</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-primary-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(step + 1) * 10}%` }}></div>
      </div>
      <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border">
        <div className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full inline-block mb-3">{categories[currentQ.cat]}</div>
        <p className="text-lg font-medium text-gray-800">{currentQ.q}</p>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5].map(level => (
          <button key={level} onClick={() => { const newAnswers = [...answers]; newAnswers[step] = level; setAnswers(newAnswers); }}
            className={`py-4 rounded-xl border-2 font-bold text-lg transition-all ${answers[step] === level
              ? 'border-primary-500 bg-primary-500 text-white'
              : 'border-gray-200 bg-white text-gray-600 hover:border-primary-300 hover:bg-primary-50'
            }`}>
            {level}
          </button>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-400 px-2">
        <span>Beginner</span>
        <span>Expert</span>
      </div>
      <div className="flex gap-3">
        <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
          className="flex-1 py-3 bg-gray-100 text-gray-600 font-semibold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
          ← Previous
        </button>
        {step < 9 ? (
          <button onClick={() => setStep(step + 1)} disabled={answers[step] === 0}
            className="flex-1 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
            Next →
          </button>
        ) : (
          <button onClick={() => setShowResults(true)} disabled={answers[step] === 0}
            className="flex-1 py-3 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
            See Results 🎯
          </button>
        )}
      </div>
      <div className="flex justify-center gap-1.5">
        {questions.map((_, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all ${i === step ? 'bg-primary-500 scale-125' : answers[i] > 0 ? 'bg-accent-400' : 'bg-gray-200'}`}></div>
        ))}
      </div>
    </div>
  );
}

// ─── NEW TOOL 2: AI Freelance SWOT Analyzer ───

function SWOTAnalyzer() {
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [goals, setGoals] = useState("");
  const [showResult, setShowResult] = useState(false);

  const skillList = skills.split(',').map(s => s.trim()).filter(Boolean);
  const expList = experience.split(',').map(s => s.trim()).filter(Boolean);
  const goalList = goals.split(',').map(s => s.trim()).filter(Boolean);
  const hasContent = skillList.length > 0 || expList.length > 0 || goalList.length > 0;

  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const opportunities: string[] = [];
  const threats: string[] = [];

  if (hasContent) {
    if (skillList.some(s => /code|develop|program|engineer|software/i.test(s))) {
      strengths.push("Technical coding skills are in high demand for AI integration projects");
      opportunities.push("Growing market for AI-powered development tools and custom solutions");
    }
    if (skillList.some(s => /writ|content|blog|copy|article/i.test(s))) {
      strengths.push("Content creation skills amplified by AI tools give you a competitive edge");
      opportunities.push("AI-assisted content creation allows you to serve more clients in less time");
    }
    if (skillList.some(s => /design|graphic|ui|ux|brand/i.test(s))) {
      strengths.push("Design skills combined with AI tools enable rapid prototyping and delivery");
      opportunities.push("Demand for AI-generated visual content is exploding across industries");
    }
    if (skillList.some(s => /market|seo|social|advertis|growth/i.test(s))) {
      strengths.push("Marketing expertise with AI tools positions you as a growth specialist");
      opportunities.push("Businesses desperately need AI-literate marketers to modernize their approach");
    }
    if (skillList.some(s => /data|analy|statistic|research/i.test(s))) {
      strengths.push("Data analysis skills combined with AI provide deep insight capabilities");
      opportunities.push("Organizations need data-driven AI strategists for decision making");
    }
    if (skillList.some(s => /automat|workflow|zapier|make|process/i.test(s))) {
      strengths.push("Automation expertise is one of the most profitable AI freelance niches");
      opportunities.push("Every business has repetitive processes ready for AI automation");
    }
    if (skillList.some(s => /teach|train|consult|mentor|coach/i.test(s))) {
      strengths.push("Teaching and consulting skills allow you to monetize AI knowledge directly");
      opportunities.push("Massive demand for AI training and upskilling services");
    }
    if (skillList.length > 0) {
      strengths.push(`Your skill set in ${skillList[0]}${skillList.length > 1 ? ` and ${skillList.slice(1, 3).join(', ')}${skillList.length > 3 ? '...' : ''}` : ''} forms a unique AI-enhanced offering`);
    }
    if (expList.some(s => /freelan|self|contract|independ/i.test(s))) {
      strengths.push("Existing freelancing experience means you already have client management skills");
    }
    if (expList.some(s => /manag|lead|direct|senior|head/i.test(s))) {
      strengths.push("Leadership experience enables premium pricing for strategic AI consulting");
    }
    if (expList.some(s => /start|found|launch|creat|built|own/i.test(s))) {
      strengths.push("Entrepreneurial experience means you understand the full business lifecycle");
    }
    if (expList.length > 0) {
      opportunities.push(`Your ${expList[0]} experience opens doors to specialized AI consulting in that domain`);
    }
    if (expList.length === 0 && skillList.length <= 2) {
      weaknesses.push("Limited experience diversity may restrict your service offerings");
    }
    if (!skillList.some(s => /code|develop|program/i.test(s)) && !skillList.some(s => /automat|workflow/i.test(s))) {
      weaknesses.push("No coding or automation skills may limit the complexity of AI solutions you can offer");
    }
    weaknesses.push("AI tools evolve rapidly — continuous learning is essential to stay relevant");
    if (goalList.some(s => /scale|grow|expand|more/i.test(s))) {
      opportunities.push("Scaling with AI tools is more feasible than ever — you can grow without adding overhead");
    }
    if (goalList.some(s => /passive|income|stream|revenue/i.test(s))) {
      opportunities.push("AI enables creation of passive income through digital products, courses, and templates");
    }
    if (goalList.some(s => /retire|freedom|fi|independ|financial/i.test(s))) {
      opportunities.push("AI freelancing is one of the fastest paths to financial independence due to leverage");
    }
    if (goalList.length > 0) {
      opportunities.push(`AI tools can accelerate your path to ${goalList[0]}`);
    }
    threats.push("AI tool saturation may drive down prices for basic AI-assisted services");
    threats.push("Major AI companies could release features that commoditize your current offerings");
    threats.push("Clients may have unrealistic expectations about what AI can deliver");
    if (skillList.length <= 1) {
      weaknesses.push("Relying on a single skill area creates income vulnerability");
      threats.push("Narrow skill focus increases risk if that niche becomes AI-automated");
    }
  }

  const ensureItems = (arr: string[], fallbacks: string[]) => arr.length === 0 ? fallbacks : arr;
  const s = ensureItems(strengths, ["Your AI skills provide a competitive advantage in the freelance market", "Ability to deliver results faster than traditional freelancers"]);
  const w = ensureItems(weaknesses, ["Need to continuously update skills as AI evolves rapidly", "May be competing with others using similar AI tools"]);
  const o = ensureItems(opportunities, ["Growing demand for AI-literate freelancers across all industries", "Potential to create scalable digital products and courses"]);
  const t = ensureItems(threats, ["Rapid AI advancement could change the landscape quickly", "Price pressure from increasing AI tool accessibility"]);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Your Skills (comma-separated)</label>
          <input value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="e.g., content writing, SEO, graphic design, automation"
            className="w-full p-3 border rounded-lg" />
          <p className="text-xs text-gray-400 mt-1">Include all relevant skills — AI and non-AI</p>
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Your Experience (comma-separated)</label>
          <input value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="e.g., 5 years freelancing, managed a team, launched a SaaS"
            className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Your Goals (comma-separated)</label>
          <input value={goals} onChange={(e) => setGoals(e.target.value)} placeholder="e.g., scale to $10k/month, build passive income, financial independence"
            className="w-full p-3 border rounded-lg" />
        </div>
      </div>
      <button onClick={() => setShowResult(true)} disabled={!hasContent}
        className="w-full py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
        Generate SWOT Analysis
      </button>
      {showResult && (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-accent-50 to-white rounded-xl p-6 border border-accent-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">💪</span>
              <h3 className="font-bold text-accent-800 text-lg">Strengths</h3>
            </div>
            <ul className="space-y-2">
              {s.slice(0, 4).map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-accent-900">
                  <span className="text-accent-500 mt-0.5 shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">⚡</span>
              <h3 className="font-bold text-orange-800 text-lg">Weaknesses</h3>
            </div>
            <ul className="space-y-2">
              {w.slice(0, 4).map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-orange-900">
                  <span className="text-orange-500 mt-0.5 shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🚀</span>
              <h3 className="font-bold text-primary-800 text-lg">Opportunities</h3>
            </div>
            <ul className="space-y-2">
              {o.slice(0, 4).map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-primary-900">
                  <span className="text-primary-500 mt-0.5 shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border border-red-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🛡️</span>
              <h3 className="font-bold text-red-800 text-lg">Threats</h3>
            </div>
            <ul className="space-y-2">
              {t.slice(0, 4).map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-red-900">
                  <span className="text-red-500 mt-0.5 shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── NEW TOOL 3: Financial Health Score ───

function FinancialHealthScore() {
  const [monthlyIncome, setMonthlyIncome] = useState(6000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(3500);
  const [monthlySavings, setMonthlySavings] = useState(1500);
  const [totalDebt, setTotalDebt] = useState(15000);
  const [totalInvestments, setTotalInvestments] = useState(25000);
  const [incomeStreams, setIncomeStreams] = useState(1);

  const savingsRate = monthlyIncome > 0 ? (monthlySavings / monthlyIncome) * 100 : 0;
  const savingsScore = Math.min(100, Math.round((savingsRate / 40) * 100));

  const debtToIncome = monthlyIncome > 0 ? (totalDebt / (monthlyIncome * 12)) : 0;
  const debtScore = Math.max(0, Math.round((1 - debtToIncome) * 100));

  const emergencyTarget = monthlyExpenses * 6;
  const emergencyScore = Math.min(100, Math.round((Math.min(monthlySavings, emergencyTarget) / emergencyTarget) * 100));

  const investRatio = monthlyIncome > 0 ? (totalInvestments / (monthlyIncome * 12)) : 0;
  const investScore = Math.min(100, Math.round(investRatio * 50));

  const diversificationScore = Math.min(100, Math.round(((incomeStreams - 1) / 4) * 100));

  const totalScore = Math.round(
    savingsScore * 0.3 + debtScore * 0.25 + emergencyScore * 0.2 + investScore * 0.15 + diversificationScore * 0.1
  );

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-accent-600";
    if (score >= 60) return "text-primary-600";
    if (score >= 40) return "text-gold-600";
    return "text-red-500";
  };
  const getBarColor = (score: number) => {
    if (score >= 80) return "bg-accent-500";
    if (score >= 60) return "bg-primary-500";
    if (score >= 40) return "bg-gold-500";
    return "bg-red-400";
  };

  const cats = [
    { name: "Savings Rate", score: savingsScore, weight: "30%", detail: `${savingsRate.toFixed(1)}% of income saved`, tip: savingsRate < 20 ? "Aim to save at least 20% of your income" : "Great savings rate! Consider investing the surplus" },
    { name: "Debt Health", score: debtScore, weight: "25%", detail: `Debt-to-income: ${(debtToIncome * 100).toFixed(0)}%`, tip: debtToIncome > 0.5 ? "Focus on paying down high-interest debt first" : "Your debt levels are manageable" },
    { name: "Emergency Fund", score: emergencyScore, weight: "20%", detail: `$${Math.round(monthlySavings).toLocaleString()} saved (target: $${emergencyTarget.toLocaleString()})`, tip: monthlySavings < emergencyTarget ? "Build up 6 months of expenses as an emergency fund" : "Strong emergency fund! Consider investing excess" },
    { name: "Investment Health", score: investScore, weight: "15%", detail: `$${totalInvestments.toLocaleString()} invested`, tip: totalInvestments < monthlyIncome * 6 ? "Start investing regularly to build wealth" : "Good investment base — keep contributing consistently" },
    { name: "Income Diversification", score: diversificationScore, weight: "10%", detail: `${incomeStreams} income stream${incomeStreams !== 1 ? 's' : ''}`, tip: incomeStreams < 3 ? "Develop 3+ income streams for resilience" : "Excellent diversification across income sources" },
  ];

  const scoreGaugeAngle = (totalScore / 100) * 180 - 90;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Monthly Income ($)</label>
          <input type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Monthly Expenses ($)</label>
          <input type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Total Savings ($)</label>
          <input type="number" value={monthlySavings} onChange={(e) => setMonthlySavings(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Total Debt ($)</label>
          <input type="number" value={totalDebt} onChange={(e) => setTotalDebt(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Total Investments ($)</label>
          <input type="number" value={totalInvestments} onChange={(e) => setTotalInvestments(+e.target.value)} className="w-full p-3 border rounded-lg" />
        </div>
        <div className="bg-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Income Streams</label>
          <div className="flex items-center gap-3 mt-1">
            <input type="range" min="1" max="5" value={incomeStreams} onChange={(e) => setIncomeStreams(+e.target.value)} className="flex-1" />
            <span className="text-lg font-bold w-6 text-center">{incomeStreams}</span>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border text-center">
        <div className="text-sm text-gray-500 mb-2">Your Financial Health Score</div>
        <div className={`text-6xl font-bold ${getScoreColor(totalScore)}`}>{totalScore}</div>
        <div className="text-sm text-gray-500 mt-1">out of 100</div>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-3 max-w-xs mx-auto">
          <div className={`h-3 rounded-full transition-all duration-500 ${getBarColor(totalScore)}`} style={{ width: `${totalScore}%` }}></div>
        </div>
        <div className="text-sm text-gray-600 mt-2">
          {totalScore >= 80 ? "🌟 Excellent! You're on track for financial independence" : totalScore >= 60 ? "👍 Good foundation — a few improvements will go a long way" : totalScore >= 40 ? "⚠️ Fair — focus on the areas below that need attention" : "🔴 Needs attention — prioritize savings and debt reduction"}
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="font-bold text-gray-800">Score Breakdown</h3>
        {cats.map(cat => (
          <div key={cat.name} className="bg-white rounded-xl p-5 border">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">{cat.name}</span>
                <span className="text-xs text-gray-400">({cat.weight})</span>
              </div>
              <span className={`font-bold ${getScoreColor(cat.score)}`}>{cat.score}/100</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
              <div className={`h-2 rounded-full transition-all duration-500 ${getBarColor(cat.score)}`} style={{ width: `${cat.score}%` }}></div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">{cat.detail}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">💡 {cat.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── NEW TOOL 4: 90-Day Goal Planner ───

function GoalPlanner90Day() {
  const [step, setStep] = useState(0); // 0=input, 1=plan
  const [goalInputs, setGoalInputs] = useState([
    { name: "", description: "", milestones: ["", "", ""], habits: ["", ""] },
    { name: "", description: "", milestones: ["", "", ""], habits: ["", ""] },
    { name: "", description: "", milestones: ["", "", ""], habits: ["", ""] },
  ]);
  const [accountability, setAccountability] = useState<string[]>([
    "", "", "", "", ""
  ]);
  const [startDate, setStartDate] = useState("");

  const hasAnyGoal = goalInputs.some(g => g.name.trim().length > 0);

  const weeks = Array.from({ length: 13 }, (_, i) => ({
    week: i + 1,
    label: `Week ${i + 1}`,
    days: `Day ${(i * 7) + 1}–${Math.min((i + 1) * 7, 90)}`,
  }));

  const getGoalColor = (i: number) => {
    if (i === 0) return { bg: "bg-primary-50", border: "border-primary-200", text: "text-primary-700", badge: "bg-primary-100 text-primary-700", bar: "bg-primary-500" };
    if (i === 1) return { bg: "bg-accent-50", border: "border-accent-200", text: "text-accent-700", badge: "bg-accent-100 text-accent-700", bar: "bg-accent-500" };
    return { bg: "bg-gold-50", border: "border-gold-200", text: "text-gold-700", badge: "bg-gold-100 text-gold-700", bar: "bg-gold-500" };
  };

  const getWeekMilestone = (weekIdx: number, goalIdx: number) => {
    const goal = goalInputs[goalIdx];
    if (!goal.name) return null;
    const milestoneIdx = weekIdx < 4 ? 0 : weekIdx < 8 ? 1 : 2;
    return goal.milestones[milestoneIdx];
  };

  const defaultAccountability = [
    "Review goals every Monday morning",
    "Track daily progress before bed",
    "Share weekly wins with an accountability partner",
    "Celebrate small wins along the way",
    "Adjust plan if falling behind — don't quit",
  ];

  if (step === 0) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border">
          <label className="block text-sm font-medium mb-2">Start Date</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-3 border rounded-lg max-w-xs" />
        </div>
        {goalInputs.map((goal, gi) => {
          const color = getGoalColor(gi);
          return (
            <div key={gi} className={`${color.bg} rounded-xl p-6 border ${color.border}`}>
              <h3 className={`font-bold ${color.text} mb-4`}>Goal {gi + 1}</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Goal Name</label>
                  <input value={goal.name} onChange={(e) => { const g = [...goalInputs]; g[gi] = { ...g[gi], name: e.target.value }; setGoalInputs(g); }}
                    placeholder={`e.g., ${gi === 0 ? 'Launch AI freelance business' : gi === 1 ? 'Build emergency fund to $10k' : 'Create passive income stream'}`}
                    className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <input value={goal.description} onChange={(e) => { const g = [...goalInputs]; g[gi] = { ...g[gi], description: e.target.value }; setGoalInputs(g); }}
                    placeholder="What does success look like?"
                    className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Key Milestones</label>
                  <div className="space-y-2">
                    {goal.milestones.map((m, mi) => (
                      <input key={mi} value={m} onChange={(e) => { const g = [...goalInputs]; g[gi] = { ...g[gi], milestones: g[gi].milestones.map((ms, idx) => idx === mi ? e.target.value : ms) }; setGoalInputs(g); }}
                        placeholder={`Milestone ${mi + 1}: ${mi === 0 ? '(30 days)' : mi === 1 ? '(60 days)' : '(90 days)'}`}
                        className="w-full p-2 border rounded-lg text-sm" />
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Daily/Weekly Habits</label>
                  <div className="space-y-2">
                    {goal.habits.map((h, hi) => (
                      <input key={hi} value={h} onChange={(e) => { const g = [...goalInputs]; g[gi] = { ...g[gi], habits: g[gi].habits.map((hb, idx) => idx === hi ? e.target.value : hb) }; setGoalInputs(g); }}
                        placeholder={`Habit ${hi + 1}`}
                        className="w-full p-2 border rounded-lg text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <button onClick={() => setStep(1)} disabled={!hasAnyGoal}
          className="w-full py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
          Generate 90-Day Plan 🗓️
        </button>
      </div>
    );
  }

  // Step 1: The Plan
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Your 90-Day Plan</h2>
        <button onClick={() => setStep(0)} className="text-sm text-primary-600 hover:text-primary-800">← Edit Goals</button>
      </div>

      {/* Goals Summary */}
      {goalInputs.filter(g => g.name).map((goal, gi) => {
        const color = getGoalColor(gi);
        return (
          <div key={gi} className={`${color.bg} rounded-xl p-6 border ${color.border}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs px-2 py-0.5 rounded-full ${color.badge}`}>Goal {gi + 1}</span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg">{goal.name}</h3>
            {goal.description && <p className="text-sm text-gray-600 mt-1">{goal.description}</p>}
            <div className="mt-3 flex flex-wrap gap-2">
              {goal.milestones.filter(m => m).map((m, mi) => (
                <span key={mi} className="text-xs bg-white border rounded-full px-3 py-1 text-gray-700">
                  {mi === 0 ? '30d' : mi === 1 ? '60d' : '90d'}: {m}
                </span>
              ))}
            </div>
          </div>
        );
      })}

      {/* Timeline */}
      <div className="bg-white rounded-xl p-6 border">
        <h3 className="font-bold text-gray-800 mb-4">Weekly Timeline</h3>
        <div className="overflow-x-auto">
          <div className="min-w-[600px] space-y-2">
            {goalInputs.filter(g => g.name).map((goal, gi) => (
              <div key={gi} className="flex items-center gap-1">
                <div className="w-20 shrink-0 text-xs font-medium text-gray-500">{goal.name.substring(0, 15)}{goal.name.length > 15 ? '...' : ''}</div>
                {weeks.map((w, wi) => {
                  const milestone = getWeekMilestone(wi, gi);
                  const color = getGoalColor(gi);
                  const hasContent = milestone && milestone.trim().length > 0;
                  return (
                    <div key={wi} className={`flex-1 h-8 rounded flex items-center justify-center text-[10px] ${hasContent ? color.bg + ' border ' + color.border + ' font-medium' : 'bg-gray-50 border border-gray-100'}`}>
                      {hasContent ? milestone.substring(0, 8) : ''}
                    </div>
                  );
                })}
              </div>
            ))}
            <div className="flex items-center gap-1">
              <div className="w-20 shrink-0 text-xs text-gray-400">Week</div>
              {weeks.map((w, wi) => (
                <div key={wi} className="flex-1 text-center text-[10px] text-gray-400">{w.week}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Habit Tracker */}
      {goalInputs.filter(g => g.name && g.habits.some(h => h)).length > 0 && (
        <div className="bg-white rounded-xl p-6 border">
          <h3 className="font-bold text-gray-800 mb-4">Habit Tracker</h3>
          <div className="space-y-3">
            {goalInputs.filter(g => g.name).map((goal, gi) => {
              const color = getGoalColor(gi);
              return (
                <div key={gi}>
                  <div className={`text-xs font-medium ${color.text} mb-1`}>{goal.name}</div>
                  {goal.habits.filter(h => h).map((habit, hi) => (
                    <div key={hi} className="flex items-center gap-3 py-1.5">
                      <span className="text-sm text-gray-700 flex-1">{habit}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: 13 }, (_, wi) => (
                          <div key={wi} className="w-5 h-5 border rounded text-[8px] flex items-center justify-center text-gray-400">W{wi + 1}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 mt-3">Print this out and check off each habit weekly ✅</p>
        </div>
      )}

      {/* Accountability Checklist */}
      <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border">
        <h3 className="font-bold text-gray-800 mb-4">Accountability Checklist</h3>
        <div className="space-y-2">
          {defaultAccountability.map((item, i) => (
            <label key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary-600" />
              <span className="text-sm text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Print Button */}
      <button onClick={() => window.print()} className="w-full py-3 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-colors">
        🖨️ Print This Plan
      </button>
    </div>
  );
}
