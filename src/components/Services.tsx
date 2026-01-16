import { Code, Database, Bot, Cloud, GitBranch, Users } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Web applications and bespoke software solutions tailored to your business logic and workflows.",
  },
  {
    icon: Database,
    title: "ERP & Business Systems",
    description: "Internal platforms for operations, CRM, CMS, and enterprise resource planning built for scale.",
  },
  {
    icon: Bot,
    title: "AI-Driven Automation",
    description: "Intelligent systems that automate repetitive tasks, from messaging bots to document processing.",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Scalable deployments on Azure and AWS with proper architecture, security, and CI/CD pipelines.",
  },
  {
    icon: GitBranch,
    title: "API & Integration",
    description: "Connect your systems with robust API development and third-party service integrations.",
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description: "Contract engineering, fractional CTO services, and strategic technical guidance for your team.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We Build
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end software engineering services focused on execution quality and long-term scalability.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl border-gradient shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
