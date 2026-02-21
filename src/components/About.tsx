import { GraduationCap, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative noise-overlay">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About the Founder
            </h2>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl glass-panel-strong border-gradient shadow-elevated relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Spotlight glow behind avatar */}
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none" style={{ background: "hsl(238 100% 51% / 0.1)" }} />

            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <motion.div
                className="w-24 h-24 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 glow-primary"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <span className="text-4xl font-bold text-primary-foreground">PG</span>
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-1">Pratyush Garg</h3>
                <p className="text-primary font-medium mb-4">Founder & Principal Engineer</p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  With hands-on experience across automation systems, enterprise platforms, healthcare systems, Zoom integrations, AI-powered bots, and property & mortgage ERP systems, Pratyush leads Psynova Digital with direct architectural involvement from system design to deployment. Every engagement is treated as a partnership with deep technical ownership and measurable outcomes.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.div className="flex items-center gap-2 text-sm text-muted-foreground" whileHover={{ scale: 1.05 }}>
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>MSc Advanced Computer Science — Distinction</span>
                  </motion.div>
                  <motion.div className="flex items-center gap-2 text-sm text-muted-foreground" whileHover={{ scale: 1.05 }}>
                    <Award className="w-4 h-4 text-primary" />
                    <span>University of Hertfordshire</span>
                  </motion.div>
                  <motion.div className="flex items-center gap-2 text-sm text-muted-foreground" whileHover={{ scale: 1.05 }}>
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Azure Developer Associate</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
