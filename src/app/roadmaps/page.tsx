import { roadmaps } from "@/data/roadmaps";
import { Section } from "@/components/Section";

const colorStyles: Record<string, { dot: string; line: string; badge: string; border: string; target: string; icon: string }> = {
  primary: {
    dot: "bg-primary-500 ring-primary-200",
    line: "bg-primary-200",
    badge: "bg-primary-100 text-primary-700",
    border: "border-primary-100",
    target: "text-primary-700 bg-primary-50",
    icon: "text-primary-500",
  },
  accent: {
    dot: "bg-accent-500 ring-accent-200",
    line: "bg-accent-200",
    badge: "bg-accent-100 text-accent-700",
    border: "border-accent-100",
    target: "text-accent-700 bg-accent-50",
    icon: "text-accent-500",
  },
  gold: {
    dot: "bg-gold-500 ring-gold-200",
    line: "bg-gold-200",
    badge: "bg-gold-100 text-gold-700",
    border: "border-gold-100",
    target: "text-gold-700 bg-gold-50",
    icon: "text-gold-500",
  },
};

function TimelineStep({
  step,
  index,
  total,
  color,
}: {
  step: (typeof roadmaps)[0]["steps"][0];
  index: number;
  total: number;
  color: string;
}) {
  const c = colorStyles[color];
  const isLeft = index % 2 === 0;
  const label = step.week || step.phase || "";

  return (
    <div className="relative flex items-start gap-4 md:gap-8">
      {/* Timeline Node */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-10">
        <div className={`w-4 h-4 rounded-full ${c.dot} ring-4 z-10`} />
        {index < total - 1 && <div className={`w-0.5 flex-1 ${c.line} mt-1`} />}
      </div>

      {/* Content Card */}
      <div className={`flex-1 mb-6 md:mb-8 ${isLeft ? "" : ""}`}>
        <div className={`bg-white rounded-xl border ${c.border} p-5 card-hover`}>
          {label && (
            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge} mb-3`}>
              {label}
            </span>
          )}
          <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{step.description}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <svg className={`w-4 h-4 ${c.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Tools & Resources</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {step.tools.map((tool, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <svg className={`w-4 h-4 ${c.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Expected Outcome</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{step.outcome}</p>
            </div>
          </div>

          {step.target && (
            <div className={`mt-4 px-4 py-2.5 rounded-lg ${c.target} border ${c.border}`}>
              <span className="text-xs font-bold uppercase tracking-wide">Target: </span>
              <span className="text-sm font-medium">{step.target}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RoadmapsPage() {
  return (
    <div className="bg-gray-50/50">
      <Section
        title="Visual Roadmaps"
        subtitle="Step-by-step timelines to guide your journey from start to finish. Follow the path, track your progress, and reach your destination."
      >
        <div className="space-y-16">
          {roadmaps.map((roadmap) => {
            const c = colorStyles[roadmap.color];
            return (
              <div key={roadmap.id}>
                {/* Roadmap Header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">{roadmap.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{roadmap.title}</h3>
                    <p className="text-gray-500 mt-1">{roadmap.description}</p>
                  </div>
                  <span className={`ml-auto text-sm font-semibold px-3 py-1.5 rounded-full ${c.badge} hidden sm:inline-block`}>
                    {roadmap.duration}
                  </span>
                </div>

                {/* Mobile timeline (simpler) */}
                <div className="md:hidden relative pl-8">
                  <div className={`absolute left-3.5 top-2 bottom-2 w-0.5 ${c.line}`} />
                  {roadmap.steps.map((step, i) => (
                    <div key={i} className="relative mb-6 last:mb-0">
                      <div className={`absolute -left-4.5 top-5 w-3 h-3 rounded-full ${c.dot} ring-2 z-10`} />
                      <div className={`bg-white rounded-xl border ${c.border} p-4 card-hover`}>
                        {(step.week || step.phase) && (
                          <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge} mb-2`}>
                            {step.week || step.phase}
                          </span>
                        )}
                        <h4 className="font-bold text-gray-900 text-sm mb-1.5">{step.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed mb-3">{step.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {step.tools.map((tool, ti) => (
                            <span key={ti} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">{tool}</span>
                          ))}
                        </div>
                        <p className="text-xs text-gray-700 font-medium">✓ {step.outcome}</p>
                        {step.target && (
                          <div className={`mt-2 px-3 py-1.5 rounded-lg ${c.target} text-xs font-medium`}>
                            🎯 {step.target}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop timeline */}
                <div className="hidden md:block ml-5">
                  {roadmap.steps.map((step, i) => (
                    <TimelineStep
                      key={i}
                      step={step}
                      index={i}
                      total={roadmap.steps.length}
                      color={roadmap.color}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}