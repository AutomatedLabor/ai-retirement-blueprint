import { research } from "@/data/research";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export const metadata = { title: "Research — AI Retirement Blueprint" };

export default function ResearchPage() {
  return (
    <Section title="Research & Analysis" subtitle="Data-driven insights on markets, income streams, and opportunities in the AI era">
      <div className="grid md:grid-cols-2 gap-6">
        {research.map((r) => (
          <Card key={r.slug} title={r.title} description={r.description} icon={r.icon} href={`/research/${r.slug}`} tag={r.category} tagColor="primary" />
        ))}
      </div>
    </Section>
  );
}
