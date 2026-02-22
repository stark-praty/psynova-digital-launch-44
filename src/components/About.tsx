import { GraduationCap, Award, Shield, Code, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const founders = [
  {
    initials: "PG",
    name: "Pratyush Garg",
    role: "Co-Founder & Principal Engineer",
    bio: "With hands-on experience across automation systems, enterprise platforms, healthcare systems, Zoom integrations, AI-powered bots, and property & mortgage ERP systems, Pratyush leads Psynova Digital with direct architectural involvement from system design to deployment.",
    credentials: [
      { icon: GraduationCap, text: "MSc Advanced Computer Science — Distinction" },
      { icon: Award, text: "University of Hertfordshire" },
      { icon: Shield, text: "Azure Developer Associate" },
    ],
  },
  {
    initials: "SJ",
    name: "Shivam Jain",
    role: "Co-Founder & Technology Lead",
    bio: "Shivam brings deep expertise in full-stack development, cloud architecture, and scalable system design. With a passion for building intelligent solutions, he co-leads Psynova Digital's engineering vision and ensures every product meets the highest technical standards.",
    credentials: [
      { icon: Code, text: "Full-Stack Engineering" },
      { icon: Briefcase, text: "Enterprise Solutions Architect" },
      { icon: Shield, text: "Cloud & DevOps Specialist" },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative noise-overlay">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet the Founders
          </h2>
        </motion.div>

        {/* Side-by-side scrollable row */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.initials}
              className="min-w-[340px] flex-1 p-8 rounded-2xl glass-panel-strong border-gradient shadow-elevated relative overflow-hidden snap-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none" style={{ background: "hsl(var(--primary) / 0.1)" }} />

              <div className="flex flex-col gap-5 relative z-10">
                <motion.div
                  className="w-20 h-20 rounded-xl gradient-accent flex items-center justify-center glow-primary"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <span className="text-3xl font-bold text-primary-foreground">{founder.initials}</span>
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{founder.bio}</p>

                  <div className="flex flex-col gap-3">
                    {founder.credentials.map((cred, j) => (
                      <motion.div key={j} className="flex items-center gap-2 text-sm text-muted-foreground" whileHover={{ scale: 1.05 }}>
                        <cred.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{cred.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
