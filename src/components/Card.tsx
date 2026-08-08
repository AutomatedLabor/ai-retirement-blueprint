import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  tag?: string;
  tagColor?: string;
}

export function Card({ title, description, icon, href, tag, tagColor = "primary" }: CardProps) {
  const colors: Record<string, string> = {
    primary: "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300",
    accent: "bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300",
    gold: "bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300",
  };

  const inner = (
    <div className="card-hover bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 h-full">
      <div className="flex items-start gap-3 mb-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{title}</h3>
            {tag && <span className={`text-xs px-2 py-0.5 rounded-full ${colors[tagColor]}`}>{tag}</span>}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return href.startsWith("http") ? (
      <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
    ) : (
      <Link href={href}>{inner}</Link>
    );
  }
  return inner;
}
