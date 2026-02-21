import { motion } from "framer-motion";

const technologies = {
  languages: ["Python", "C#", "JavaScript", "Java", "SQL", "HTML/CSS", "R", "C", "C++"],
  frameworks: [".NET/MVC", "Django", "Flask", "React", "Angular", "Vite.js", "Node.js", "Express.js", "Streamlit", "PyQt5", "Bootstrap", "jQuery"],
  cloud: ["Azure", "AWS", "Docker", "CI/CD"],
  databases: ["PostgreSQL", "MongoDB", "MySQL"],
  specialisations: ["REST APIs", "Web Scraping", "ML & AI", "Computer Vision", "Workflow Automation", "System Architecture"],
};

const TechStack = () => {
  return (
    <section id="tech" className="py-24 bg-card relative noise-overlay">
      <div className="container mx-auto px-6">
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

        <motion.div
          className="max-w-5xl mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        >
          {Object.entries(technologies).map(([category]) => (
            <motion.div
              key={category}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider w-32 flex-shrink-0">
                {category}
              </span>
              <div className="flex flex-wrap gap-3">
                {technologies[category as keyof typeof technologies].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-background border border-border text-foreground font-mono text-sm gradient-border-glow cursor-default"
                    whileHover={{
                      scale: 1.08,
                      borderColor: "hsl(238 100% 51%)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
