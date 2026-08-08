import { tools } from "@/data/tools";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export const metadata = { title: "Tools — AI Retirement Blueprint" };

export default function ToolsPage() {
  return (
    <Section title="Interactive Tools" subtitle="Calculators, planners, and generators to turn your retirement plan into concrete numbers">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card key={tool.slug} title={tool.name} description={tool.description} icon={tool.icon} href={`/tools/${tool.slug}`} tag={tool.category} />
        ))}
      </div>
    </Section>
  );
}
