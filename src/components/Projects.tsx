import { CheckCircle2 } from "lucide-react";

const achievements = [
  {
    category: "Automation & Bots",
    items: [
      "Large-scale messaging automation reducing manual effort by 80%",
      "Scheduling and workflow execution systems for operations teams",
      "Multi-language translation bots for global communication",
    ],
  },
  {
    category: "Enterprise Platforms",
    items: [
      "ERP systems for property, mortgage, and healthcare operations",
      "SME management platforms with structured workflows and reporting",
      "Internal dashboards for financial and operational control",
    ],
  },
  {
    category: "Data & Intelligence",
    items: [
      "Real-time monitoring and safety systems based on live data streams",
      "Data aggregation and analytics platforms for decision-making",
      "Automated document processing and recommendation engines",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "Scalable cloud-hosted platforms with modern architectures",
      "System integrations connecting disparate business tools",
      "CI/CD pipelines and DevOps automation for engineering teams",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We've Delivered
          </h2>
          <p className="text-muted-foreground text-lg">
            Real outcomes across automation, enterprise systems, and cloud infrastructure.
          </p>
        </div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl bg-background border border-border"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Industries we serve</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["SaaS", "Fintech", "Healthcare", "Property & Mortgage", "SMEs", "Enterprise Teams"].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
