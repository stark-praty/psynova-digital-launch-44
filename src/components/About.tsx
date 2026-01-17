import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
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

          {/* Founder card */}
          <motion.div 
            className="p-8 rounded-2xl border-gradient shadow-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar placeholder */}
              <motion.div 
                className="w-24 h-24 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <span className="text-4xl font-bold text-primary-foreground">PG</span>
              </motion.div>

              <div className="flex-1">
                <motion.h3 
                  className="text-2xl font-bold text-foreground mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Pratyush Garg
                </motion.h3>
                <motion.p 
                  className="text-primary font-medium mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  Founder & Principal Engineer
                </motion.p>
                
                <motion.p 
                  className="text-muted-foreground leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  With hands-on experience across automation, enterprise systems, cloud platforms, and applied AI, Pratyush leads Psynova Digital with a focus on practical execution and measurable outcomes. Every engagement is approached as a partnership, with deep technical involvement from architecture to deployment.
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <motion.div 
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                  >
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>MSc Advanced Computer Science</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                  >
                    <Award className="w-4 h-4 text-primary" />
                    <span>Distinction</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
