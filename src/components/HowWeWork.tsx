import { Handshake, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Handshake,
    title: "Partnership, Not Vendor",
    description: "We work as an extension of your team, taking ownership of outcomes rather than just delivering features.",
  },
  {
    icon: Target,
    title: "Execution Quality",
    description: "Clean architecture, tested code, and documentation. We build systems that last and scale.",
  },
  {
    icon: Rocket,
    title: "Flexible Engagement",
    description: "Project-based delivery, contract engineering, or fractional leadership — structured for your needs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
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

const HowWeWork = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated background element */}
      <motion.div 
        className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A partnership model focused on ownership, quality, and long-term value.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.title} 
              className="text-center"
              variants={itemVariants}
            >
              <div className="relative inline-flex mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center glow-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <motion.span 
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-xs font-semibold text-muted-foreground"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 400 }}
                >
                  {index + 1}
                </motion.span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
