import { CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

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

const industries = ["SaaS", "Fintech", "Healthcare", "Property & Mortgage", "SMEs", "Enterprise Teams"];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card relative noise-overlay">
      <div className="container mx-auto px-6">
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

        {/* Animated Counters */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
        >
          {achievements.map((group) => (
            <motion.div
              key={group.category}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="p-6 rounded-xl bg-background border border-border shadow-card hover:shadow-elevated transition-all duration-300 gradient-border-glow"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <motion.span
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
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
            </motion.div>
          ))}
        </motion.div>

        {/* Industries */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Industries we serve</p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.span
                key={industry}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border gradient-border-glow cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.08 }}
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
