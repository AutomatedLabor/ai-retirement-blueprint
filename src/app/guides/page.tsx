import { guides } from "@/data/guides";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export const metadata = { title: "Guides — AI Retirement Blueprint" };

export default function GuidesPage() {
  return (
    <Section title="Guides" subtitle="Comprehensive guides to build your AI-powered retirement, from mindset to execution">
      <div className="grid md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Card key={guide.slug} title={guide.title} description={guide.description} icon={guide.icon} href={`/guides/${guide.slug}`} tag={guide.difficulty} tagColor={guide.difficulty === "Beginner" ? "accent" : guide.difficulty === "Intermediate" ? "primary" : "gold"} />
        ))}
      </div>
    </Section>
  );
}
