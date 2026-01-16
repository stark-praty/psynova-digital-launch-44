const technologies = {
  languages: ["Python", "C#", "JavaScript", "TypeScript", "SQL"],
  frameworks: [".NET", "Django", "Flask", "React", "Streamlit"],
  cloud: ["Azure", "AWS", "Docker", "CI/CD"],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
};

const TechStack = () => {
  return (
    <section id="tech" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technology Stack
          </h2>
          <p className="text-muted-foreground text-lg">
            Modern, battle-tested technologies for reliable systems.
          </p>
        </div>

        {/* Tech grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider w-28 flex-shrink-0">
                {category}
              </span>
              <div className="flex flex-wrap gap-3">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-background border border-border text-foreground font-mono text-sm hover:border-primary/50 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
