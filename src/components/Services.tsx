import { Code, Database, Bot, Cloud, GitBranch, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke web applications aligned to your business logic, workflows, and operational requirements.",
  },
  {
    icon: Database,
    title: "ERP & Business Systems",
    description: "CRM, CMS, property, healthcare, and mortgage platforms with structured workflows and reporting.",
  },
  {
    icon: Bot,
    title: "AI-Driven Automation",
    description: "Messaging bots, document processing, workflow engines, and intelligent task automation systems.",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Azure and AWS scalable deployments with proper architecture, security, and CI/CD pipelines.",
  },
  {
    icon: GitBranch,
    title: "API & Integration",
    description: "REST API development and third-party service integrations connecting your business systems.",
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description: "Contract engineering, fractional CTO leadership, and strategic technical guidance for your team.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative noise-overlay">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We Build
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end software engineering focused on execution and scalability.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="group p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 relative overflow-hidden gradient-border-glow"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 animate-shimmer" />
              </div>

              <motion.div
                className="relative z-10 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <service.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="relative z-10 text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="relative z-10 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
