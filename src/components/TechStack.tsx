import { motion } from "framer-motion";

const technologies = {
  languages: ["Python", "C#", "JavaScript", "TypeScript", "SQL"],
  frameworks: [".NET", "Django", "Flask", "React", "Streamlit"],
  cloud: ["Azure", "AWS", "Docker", "CI/CD"],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const rowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
};

const TechStack = () => {
  return (
    <section id="tech" className="py-24 bg-card relative">
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
            Technology Stack
          </h2>
          <p className="text-muted-foreground text-lg">
            Modern, battle-tested technologies for reliable systems.
          </p>
        </motion.div>

        {/* Tech grid */}
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.entries(technologies).map(([category, items], categoryIndex) => (
            <motion.div 
              key={category} 
              className="flex flex-col sm:flex-row sm:items-center gap-4"
              variants={rowVariants}
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider w-28 flex-shrink-0">
                {category}
              </span>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
              >
                {items.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-background border border-border text-foreground font-mono text-sm hover:border-primary/50 transition-colors cursor-default"
                    variants={chipVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: "hsl(var(--primary))",
                      transition: { duration: 0.2 }
                    }}
                    custom={index}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
