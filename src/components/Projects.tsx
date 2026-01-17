import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4
    }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We've Delivered
          </h2>
          <p className="text-muted-foreground text-lg">
            Real outcomes across automation, enterprise systems, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Achievements grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className="p-6 rounded-xl bg-background border border-border shadow-card hover:shadow-elevated transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {/* Gradient border glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
              </div>
              
              <h3 className="relative z-10 text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <motion.span 
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {group.category}
              </h3>
              <motion.ul 
                className="relative z-10 space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.items.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    variants={listItemVariants}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground mb-4">Industries we serve</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["SaaS", "Fintech", "Healthcare", "Property & Mortgage", "SMEs", "Enterprise Teams"].map((industry, index) => (
              <motion.span
                key={industry}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.08, 
                  backgroundColor: "hsl(var(--primary) / 0.15)",
                  borderColor: "hsl(var(--primary) / 0.5)"
                }}
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
