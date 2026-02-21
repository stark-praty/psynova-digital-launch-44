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

const HowWeWork = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden noise-overlay">
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(238 100% 51% / 0.06), hsl(289 90% 50% / 0.04), transparent)" }}
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How We Work</h2>
          <p className="text-muted-foreground text-lg">
            A partnership model focused on ownership, quality, and long-term value.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
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
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
