interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ title, subtitle, children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
