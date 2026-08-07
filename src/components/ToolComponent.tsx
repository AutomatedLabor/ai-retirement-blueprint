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
